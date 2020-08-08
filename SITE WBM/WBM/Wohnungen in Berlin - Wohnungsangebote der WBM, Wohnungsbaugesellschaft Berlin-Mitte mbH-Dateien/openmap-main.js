// Leaflet Openstreetmap Interfrog MOD

// DEPs openstreetmap-leaflet.min.js + map.min.css
$(function() {
    if ($('#openimmo-google-map-overview').length > 0) {
        var initData = $('#openimmo-google-map-overview').data();
        // is Cluster?
        //if(initData.identifier === 'events') clustering = false;
        //else clustering = true;
        clustering = true;
        //var mapObject = createMap(initData.defaultLatitude, initData.defaultLongitude,10,20,clustering);


        // GET PLACES DATA
        var getMapPlaces = function(){
            var placesArr = [];
            $.map($('div[data-marker-latitude]'), function(item, index) {
                var tempPlace = new Object();
                tempPlace.latitude = $(item).attr('data-marker-latitude');
                tempPlace.longitude = $(item).attr('data-marker-longitude');
                tempPlace.title = $(item).attr('data-marker-title');
                tempPlace.uid = $(item).attr('data-marker-uid');
                tempPlace.html = jQuery('#immobilie-list-item-tooltip-' + tempPlace.uid).html();
                placesArr.push(tempPlace);
                $(item).remove();
            });
            return placesArr;
        }
        var tempPlaces = getMapPlaces();
        
        var mapObject = createMap(tempPlaces[0].latitude, tempPlaces[0].longitude,10,19,clustering);


        for (var index = 0; index < tempPlaces.length; index++) {
            var element = tempPlaces[index];
            var wbmIcon = L.icon({
                iconUrl:  window.location.origin + '/typo3conf/ext/sitepackage/Resources/Public/Images/MapClustering/house.svg',
                iconSize:     [35, 35],
                shadowSize:   [35, 35],
                shadowAnchor: [0, 0],
                iconAnchor:   [0, 22],
                popupAnchor:  [15, -15]
            });
            createMarker(mapObject.map,mapObject.markers,mapObject.markersList,[element.latitude, element.longitude],wbmIcon,element.html.toString(),clustering);
        }
        mapObject.map.addLayer(mapObject.markers);
    }
});