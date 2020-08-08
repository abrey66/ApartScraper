(function() {
    try {
        if (!Object.entries)
            Object.entries = function( obj ){
                var ownProps = Object.keys( obj ),
                    i = ownProps.length,
                    resArray = new Array(i);
                while (i--)
                resArray[i] = [ownProps[i], obj[ownProps[i]]];

                return resArray;
        };
        var masterdata = JSON.parse(window.masterjson);
        createOpenMap = function(r, a, e, t, o) {
            var i = L.tileLayer("/map/?s={s}&z={z}&x={x}&y={y}", {
                    maxZoom: t,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }),
                n = L.latLng(parseFloat(r), parseFloat(a)),
                p = 30;
            return o || (p = 0), {
                map: L.map("openmap", {
                    center: n,
                    zoom: e,
                    layers: [i]
                }),
                markers: L.markerClusterGroup({
                    iconCreateFunction: function (cluster) {
                        var markercounts = cluster.getAllChildMarkers().map(function(item) {
                            if(item.options.icon.options.new) return 'new';
                            if(parseInt(item.options.icon.options.numberoftrades) > 0 && parseInt(item.options.icon.options.numberoflivingrooms) === 0 && parseInt(item.options.icon.options.numberofspecial) === 0) return 'trades';
                            else if(parseInt(item.options.icon.options.numberoflivingrooms) > 0 && parseInt(item.options.icon.options.numberoftrades) === 0 && parseInt(item.options.icon.options.numberofspecial) === 0) return 'rooms';
                            else if(parseInt(item.options.icon.options.numberofspecial) > 0 && parseInt(item.options.icon.options.numberoflivingrooms) === 0 && parseInt(item.options.icon.options.numberoftrades) === 0) return 'special';
                            else return 'rooms';
                        });
        
                        var counts = {};
                        markercounts.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
                        var speicalclass = Object.entries(counts).sort(function(a,b) {
                            return b[1] - a[1];
                        })[0][0];
                        var childCount = cluster.getChildCount();
        
                        var c = ' marker-cluster-';
                        if (childCount < 10) {
                            c += 'small';
                        } else if (childCount < 100) {
                            c += 'medium';
                        } else {
                            c += 'large';
                        }
                        c += ' '+speicalclass;
                        return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
                    },    
                    animateAddingMarkers: !0,
                    maxClusterRadius: p,
                    showCoverageOnHover: !1,
                    //disableClusteringAtZoom: 20
                }),
                markersList: []
            }
        };

        createOpenMarker = function(r, a, e, t, o, i, n) {
            if (n) {
                var p = L.marker(t, {
                    icon: o
                }).bindPopup(i, {
                    maxWidth: 550
                });
                return e.push(p), void a.addLayer(p)
            }
            L.marker(t, {
                icon: o
            }).addTo(r).bindPopup(i, {
                maxWidth: 550
            })
        };

        convertDate = function(datestring) {
            var parts = datestring.split('-');
            return parts[2]+'.'+parts[1]+'.'+parts[0];
        };

        var clustering = true;

        var mapObject = createOpenMap(masterdata[0].lat, masterdata[0].lon,12,19,clustering);


        for (var index = 0; index < masterdata.length; index++) {
            var element = masterdata[index];
            var contentHTML = '<b>'+element.street+'</b></br>';
            contentHTML += '<b>'+element.plz+' Berlin</b></br>';
            contentHTML += '<table style="width: 100%;" border="0"><tbody>'
            //contentHTML += '<tr><td>Baujahr</td><td>'+convertDate(element.vintage)+'</td></tr>';
            contentHTML += '<tr><td>WBM Bestand seit</td><td>'+convertDate(element.instocksince)+'</td></tr>';
            if(parseInt(element.numberoflivingrooms) > 0) contentHTML += '<tr><td>Anzahl Wohnungen</td><td>'+element.numberoflivingrooms+'</td></tr>';
            if(parseInt(element.numberoftrades) > 0) contentHTML += '<tr><td>Anzahl Gewerbeflächen</td><td>'+element.numberoftrades+'</td></tr>';
            contentHTML += '</tbody></table>';
            var iconDefault = calcIcon(element);
            function calcIcon(element) {
                if(element.new) return 'house-darkblue.svg';
                if(parseInt(element.numberoftrades) > 0 && parseInt(element.numberoflivingrooms) === 0 && parseInt(element.numberofspecial) === 0) return 'house-blue.svg';
                else if(parseInt(element.numberoflivingrooms) > 0 && parseInt(element.numberoftrades) === 0 && parseInt(element.numberofspecial) === 0) return 'house-petrol.svg';
                else if(parseInt(element.numberofspecial) > 0 && parseInt(element.numberoflivingrooms) === 0 && parseInt(element.numberoftrades) === 0) return 'house-petrol.svg';
                else return 'house-petrol.svg';
            }
            var wbmIcon = L.icon({
                iconUrl:  window.location.origin + '/typo3conf/ext/if_mastercard/Resources/Public/Icons/'+iconDefault,
                iconSize:     [35, 35],
                shadowSize:   [35, 35],
                shadowAnchor: [0, 0],
                iconAnchor:   [0, 22],
                popupAnchor:  [15, -15],
                new:    element.new,
                numberoftrades: element.numberoftrades,
                numberoflivingrooms: element.numberoflivingrooms,
                numberofspecial: element.numberofspecial
            });
            createOpenMarker(mapObject.map,mapObject.markers,mapObject.markersList,[element.lat, element.lon],wbmIcon,contentHTML.toString(),clustering);
        }
        mapObject.map.addLayer(mapObject.markers);
    }catch(e){}
})();