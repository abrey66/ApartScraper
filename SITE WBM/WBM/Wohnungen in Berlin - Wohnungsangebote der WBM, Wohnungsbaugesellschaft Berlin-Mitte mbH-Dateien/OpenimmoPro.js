var openImmo = openImmo || {};
openImmo.googleMaps = {
    map: null,
    infoWindow: null,
    pointsOfInterest: {
        radius: 1000,
        markerOnMap: [],
        refresh: function () {
            var button = jQuery('.openimmo-google-map-points-of-interest-buttons button.active');
            if (button.length > 0) {
                openImmo.googleMaps.pointsOfInterest.resetMarker();
                var pointsArray = [
                    button.data('point-of-interest').trim()
                ];
                var request = {
                    location: openImmo.googleMaps.immobilieMarker.latLng,
                    radius: openImmo.googleMaps.pointsOfInterest.radius,
                    types: pointsArray
                };
                var service = new google.maps.places.PlacesService(openImmo.googleMaps.map);
                service.nearbySearch(request, openImmo.googleMaps.pointsOfInterest.process);
            } else {
                openImmo.googleMaps.pointsOfInterest.resetMarker();
            }
        },
        process: function (results, status, pagination) {
            if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                alert('Keine Suchtreffer im Umkreis ' + openImmo.googleMaps.pointsOfInterest.radius + 'm');
                return;
            }
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.error(status);
                return;
            }
            if (results.length > 0) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        openImmo.googleMaps.pointsOfInterest.setMarker(results[i]);
                    }
                }
                if (pagination.hasNextPage) {
                    pagination.nextPage();
                }
            }
        },
        resetMarker: function () {
            for (i = 0; i < openImmo.googleMaps.pointsOfInterest.markerOnMap.length; i++) {
                openImmo.googleMaps.pointsOfInterest.markerOnMap[i].setMap(null);
            }
        },
        setMarker: function (point) {
            var button = jQuery('.openimmo-google-map-points-of-interest-buttons button.active');
            var type = button.data('point-of-interest').trim();
            var innerHtml = openImmo.googleMaps.pointsOfInterest.available[type].innerHtml;
            var width = openImmo.googleMaps.pointsOfInterest.available[type].width;
            var height = openImmo.googleMaps.pointsOfInterest.available[type].height;
            // Set marker
            var marker = new HtmlMarker(point.geometry.location, openImmo.googleMaps.map, {
                class: 'openimmo-google-map-point openimmo-google-map-points-of-interest',
                id: 'openimmo-google-map-point-of-interest-' + point.id,
                innerHTML: innerHtml,
                position: 'CT',
                width: width,
                height: height
            });
            // Zoom on click
            google.maps.event.addListener(marker, 'click', function () {
                openImmo.googleMaps.infoWindow.setContent(point.name);
                openImmo.googleMaps.infoWindow.open(openImmo.googleMaps.map, this);
                openImmo.googleMaps.map.panTo(this.getPosition());
                openImmo.googleMaps.map.setZoom(parseInt(openImmo.googleMaps.map.getZoom(), 10) + 1);
            });
            openImmo.googleMaps.pointsOfInterest.markerOnMap.push(marker);
            /* Marker for debugging position
            var markerO = new google.maps.Marker({
                position: point.geometry.location,
                map: openImmo.googleMaps.map
            });
            openImmo.googleMaps.pointsOfInterest.markerOnMap.push(markerO);
            */
        }
    },

    /**
     * Initiate object
     */
    initializePointsOfInterest: function () {
        var mapContainer = jQuery('#openimmo-google-map-points-of-interest');
        if (mapContainer.length > 0) {
            // Set centered immobilie marker
            openImmo.googleMaps.immobilieMarker = {};
            openImmo.googleMaps.immobilieMarker.latLng = new google.maps.LatLng(
                mapContainer.attr('data-latitude'),
                mapContainer.attr('data-longitude')
            );
            openImmo.googleMaps.immobilieMarker.innerHtml = mapContainer.attr('data-inner-html');
            openImmo.googleMaps.immobilieMarker.title = mapContainer.attr('data-title');
            openImmo.googleMaps.immobilieMarker.width = parseInt(mapContainer.attr('data-width'), 10);
            openImmo.googleMaps.immobilieMarker.height = parseInt(mapContainer.attr('data-height'), 10);
            openImmo.googleMaps.immobilieMarker.color = mapContainer.attr('data-color');
            openImmo.googleMaps.pointsOfInterest.radius = parseInt(mapContainer.attr('data-radius'), 10);
            // Get available points
            openImmo.googleMaps.pointsOfInterest.available = {};
            jQuery.each(jQuery('div', mapContainer), function () {
                var item = jQuery(this);
                var type = item.attr('data-point-type');
                var label = item.attr('data-point-label');
                var innerHtml = item.attr('data-point-inner-html');
                var width = item.attr('data-point-width');
                var height = item.attr('data-point-height');
                openImmo.googleMaps.pointsOfInterest.available[type] = {
                    type: type,
                    label: label,
                    innerHtml: innerHtml,
                    width: width,
                    height: height
                };
            });
            // Bind button action
            if (openImmo.googleMaps.immobilieMarker.latLng !== null && mapContainer.length > 0) {
                // Bind buttons
                if (this.map === null) {
                    var pidButtons = jQuery('.openimmo-google-map-points-of-interest-buttons button');
                    if (pidButtons.length > 0) {
                        pidButtons.click(function () {
                            var button = jQuery(this);
                            if (button.hasClass('active')) {
                                pidButtons.removeClass('active');
                            } else {
                                pidButtons.removeClass('active');
                                button.addClass('active');
                            }
                            button.blur();
                            openImmo.googleMaps.pointsOfInterest.refresh();
                        });
                    }
                }
                // Create info window
                if (this.infoWindow === null) {
                    this.infoWindow = new google.maps.InfoWindow();
                }
                // Create map
                this.map = new google.maps.Map(document.getElementById('openimmo-google-map-points-of-interest'), {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: openImmo.googleMaps.immobilieMarker.latLng,
                    disableDefaultUI: false,
                    navigationControl: false,
                    streetViewControl: true,
                    overviewMapControl: true,
                    overviewMapControlOptions: {
                        opened: true,
                        position: google.maps.ControlPosition.BOTTOM_LEFT
                    },
                    scrollwheel: false,
                    scaleControl: true,
                    zoom: 15
                });
                // Set center marker
                openImmo.googleMaps.marker = this.setImmobilieMarker(
                    openImmo.googleMaps.immobilieMarker.latLng,
                    openImmo.googleMaps.immobilieMarker.innerHtml,
                    openImmo.googleMaps.immobilieMarker.title,
                    openImmo.googleMaps.immobilieMarker.width,
                    openImmo.googleMaps.immobilieMarker.height,
                    openImmo.googleMaps.immobilieMarker.color
                );
            }
        }
    },

    initializeMapOverview: function () {
        var mapContainer = jQuery('#openimmo-google-map-overview');
        if (mapContainer.length > 0) {
            openImmo.googleMaps.immobilieMarker = {};
            openImmo.googleMaps.immobilieMarker.width = parseInt(mapContainer.attr('data-width'), 10);
            openImmo.googleMaps.immobilieMarker.height = parseInt(mapContainer.attr('data-height'), 10);
            openImmo.googleMaps.immobilieMarker.color = mapContainer.attr('data-color');
            openImmo.googleMaps.immobilieMarkers = [];
            jQuery.each(jQuery('div', mapContainer), function () {
                var item = jQuery(this);
                var latitude = item.attr('data-marker-latitude');
                var longitude = item.attr('data-marker-longitude');
                var title = item.attr('data-marker-title');
                var uid = item.attr('data-marker-uid');
                var innerHtml = item.attr('data-marker-inner-html');
                var tooltipHtml = jQuery('#immobilie-list-item-tooltip-' + uid).html();
                openImmo.googleMaps.immobilieMarkers[openImmo.googleMaps.immobilieMarkers.length] = {
                    latitude: latitude,
                    longitude: longitude,
                    title: title,
                    innerHtml: innerHtml,
                    tooltipHtml: tooltipHtml
                };
            });
            if (openImmo.googleMaps.immobilieMarkers.length > 0) {
                // Create map
                this.mapBounds = new google.maps.LatLngBounds();
                this.map = new google.maps.Map(document.getElementById('openimmo-google-map-overview'), {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: new google.maps.LatLng(openImmo.googleMaps.immobilieMarkers[0].latitude, openImmo.googleMaps.immobilieMarkers[0].longitude),
                    disableDefaultUI: false,
                    navigationControl: false,
                    streetViewControl: true,
                    overviewMapControl: true,
                    overviewMapControlOptions: {
                        opened: true,
                        position: google.maps.ControlPosition.BOTTOM_LEFT
                    },
                    scrollwheel: false,
                    scaleControl: true,
                    zoom: 15
                });
                // Create info window
                if (this.infoWindow === null) {
                    this.infoWindow = new google.maps.InfoWindow();
                }
                var clusteringMarkers = [];
                for (var i = 0; i < openImmo.googleMaps.immobilieMarkers.length; i++) {
                    openImmo.googleMaps.immobilieMarkers[i].latLng = new google.maps.LatLng(openImmo.googleMaps.immobilieMarkers[i].latitude, openImmo.googleMaps.immobilieMarkers[i].longitude);
                    // remind marker for bounds
                    this.mapBounds.extend(openImmo.googleMaps.immobilieMarkers[i].latLng);
                    // set marker
                    var tempMarker = this.setImmobilieMarker(
                        openImmo.googleMaps.immobilieMarkers[i].latLng,
                        openImmo.googleMaps.immobilieMarkers[i].innerHtml,
                        openImmo.googleMaps.immobilieMarkers[i].tooltipHtml,
                        openImmo.googleMaps.immobilieMarker.width,
                        openImmo.googleMaps.immobilieMarker.height,
                        openImmo.googleMaps.immobilieMarker.color
                    );
                    clusteringMarkers.push(tempMarker);
                }
                // Now fit the map to the newly inclusive bounds
                this.map.fitBounds(this.mapBounds);
                // Clustering
                var clusteringActive = parseInt(mapContainer.attr('data-clustering-active'), 10);
                if (clusteringActive === 1) {
                    var clusteringImagePath = mapContainer.attr('data-clustering-image-path');
                    var clusteringImageExtension = mapContainer.attr('data-clustering-image-extension');
                    var clusteringMarkerWidth = mapContainer.attr('data-clustering-width');
                    var clusteringMarkerHeight = mapContainer.attr('data-clustering-height');
                    var clusteringMarkerTextSize = mapContainer.attr('data-clustering-text-size');
                    var clusteringMarkerTextColor = mapContainer.attr('data-clustering-text-color');
                    var clusterOptions = {
                        styles: [
                            {
                                url: clusteringImagePath + '1.' + clusteringImageExtension,
                                textColor: clusteringMarkerTextColor,
                                textSize: clusteringMarkerTextSize,
                                width: clusteringMarkerWidth,
                                height: clusteringMarkerHeight,
                                backgroundPosition: '0 0'
                            },
                            {
                                url: clusteringImagePath + '2.' + clusteringImageExtension,
                                textColor: clusteringMarkerTextColor,
                                textSize: clusteringMarkerTextSize,
                                width: clusteringMarkerWidth,
                                height: clusteringMarkerHeight,
                                backgroundPosition: '0 0'
                            },
                            {
                                url: clusteringImagePath + '3.' + clusteringImageExtension,
                                textColor: clusteringMarkerTextColor,
                                textSize: clusteringMarkerTextSize,
                                width: clusteringMarkerWidth,
                                height: clusteringMarkerHeight,
                                backgroundPosition: '0 0'
                            },
                            {
                                url: clusteringImagePath + '4.' + clusteringImageExtension,
                                textColor: clusteringMarkerTextColor,
                                textSize: clusteringMarkerTextSize,
                                width: clusteringMarkerWidth,
                                height: clusteringMarkerHeight,
                                backgroundPosition: '0 0'
                            },
                            {
                                url: clusteringImagePath + '5.' + clusteringImageExtension,
                                textColor: clusteringMarkerTextColor,
                                textSize: clusteringMarkerTextSize,
                                width: clusteringMarkerWidth,
                                height: clusteringMarkerHeight,
                                backgroundPosition: '0 0'
                            }
                        ]
                    };
                    var cluster = new MarkerClusterer(this.map, clusteringMarkers, clusterOptions);
                }
            } else {
                //
                // Set empty map with default coordinates.
                // In order to achieve this, you have to move the
                // <f:render partial="Immobilie/Search/GoogleMaps" section="{settings.framework}" arguments="{_all}" />
                // in your Fluid template, so that is also without search result visible.
                var latitude = mapContainer.attr('data-default-latitude');
                var longitude = mapContainer.attr('data-default-longitude');
                if (latitude > 0 && longitude > 0) {
                    var mapCenter = new google.maps.LatLng(
                        latitude,
                        longitude
                    );
                    this.map = new google.maps.Map(document.getElementById('openimmo-google-map-overview'), {
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        center: mapCenter,
                        disableDefaultUI: false,
                        navigationControl: false,
                        streetViewControl: true,
                        overviewMapControl: true,
                        overviewMapControlOptions: {
                            opened: true,
                            position: google.maps.ControlPosition.BOTTOM_LEFT
                        },
                        scrollwheel: false,
                        scaleControl: true,
                        zoom: 15
                    });
                } else {
                    jQuery('#openimmo-google-map-overview').hide();
                }
            }
        }
    },

    setImmobilieMarker: function (latLng, content, tooltipHtml, width, height, color) {
        // Set immobilie marker
        var tempMarker = new google.maps.Marker({
            position: latLng,
            icon: openImmo.googleMaps.getIcon(width, height, color),
            map: openImmo.googleMaps.map
        });
        tempMarker.tooltipHtml = tooltipHtml;
        // Show name
        google.maps.event.addListener(tempMarker, 'mouseover', function () {
            openImmo.googleMaps.infoWindow.setContent(this.tooltipHtml);
            openImmo.googleMaps.infoWindow.open(openImmo.googleMaps.map, this);
        });
        // Hide name
        google.maps.event.addListener(tempMarker, 'mouseout', function () {
            //openImmo.googleMaps.infoWindow.close(openImmo.googleMaps.map, this);
        });
        //
        if(jQuery('html.touch').length === 0) {
            // In case of no touch device
            // Zoom on click
            google.maps.event.addListener(tempMarker, 'click', function () {
                openImmo.googleMaps.map.panTo(this.getPosition());
                openImmo.googleMaps.map.setZoom(parseInt(openImmo.googleMaps.map.getZoom(), 10) + 1);
            });
        }
        else {
            // In case of touch device
            // Open tooltip on click
            google.maps.event.addListener(tempMarker, 'click', function () {
                openImmo.googleMaps.infoWindow.setContent(this.tooltipHtml);
                openImmo.googleMaps.infoWindow.open(openImmo.googleMaps.map, this);
            });
        }
        tempMarker.setMap(openImmo.googleMaps.map);
        /* Marker for debugging position
        var markerDebug = new google.maps.Marker({
            position: latLng,
            map: openImmo.googleMaps.map
        });*/
        return tempMarker;
    },

    /**
     * Scroll to immobilie and highlight
     * @param immobilieId
     */
    selectImmobilieMarker: function (immobilieId) {
        openImmo.scrollTo(immobilieId);
        jQuery('.immobilie-list-item').removeClass('highlight');
        jQuery(immobilieId).addClass('highlight');
    },

    getIcon: function (width, height, color) {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="' + color + '" d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8zm4-8v4h-3v-2h-2v2h-3v-4h-1l5-5 5 5h-1zm-1-3l-1-.991v-1.009h1v2z"/></svg>';
        return icon = {
            anchor: new google.maps.Point((width / 2), height),
            scaledSize: new google.maps.Size(width, height),
            origin: new google.maps.Point(0, 0),
            url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(svg)
        }
    }

};


if(typeof google !== 'undefined') {
    if(typeof google.maps !== 'undefined') {
        google.maps.event.addDomListener(window, 'load', function () {
            openImmo.googleMaps.initializeMapOverview();
            openImmo.googleMaps.initializePointsOfInterest();
        });
    }
}

