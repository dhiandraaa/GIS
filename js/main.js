function initMap(){
			
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: -5.3984765, lng: 105.2602632}});
      var infoWin = new google.maps.InfoWindow();
        console.log(map);
    
        var markers = locations.map(function(location, i) {
            var marker = new google.maps.Marker({
                position: location,
    icon : 'images/pin.png',
    animation: google.maps.Animation.DROP
                });
                google.maps.event.addListener(marker, 'click', function(evt) {
                    infoWin.setContent(location.info);
                    infoWin.open(map, marker);
                })

                   map.addListener('click',function(evt){
                   marker.setPosition(event.latLng);
                   document.getElementById('lat').value = marker.position.toString();
                   });
            return marker;
            }); 
        console.log(locations);
        console.log(markers);
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'images/m'});
    
        var d = markerCluster.distanceBetweenPoints_(markers[2].getPosition(),markers[4].getPosition());
        console.log(markerCluster.getCalculator());
    }

    var locations = [
        {lat: -5.397317, lng: 105.262002, info: "Makam Pahlawan"},
        {lat: -5.363868, lng: 105.248657, info: "Kampung Baru"},
        {lat: -5.372858, lng: 105.239979, info: "KB. Anak Agung Siwo Mego"},
        {lat: -5.378445, lng: 105.240977, info: "Muslim Kamboja"},
        {lat: -5.377909, lng: 105.244274, info: "Jl. Sultan Jamil"},
        {lat: -5.427119, lng: 105.268171, info: "Keluarga Besar Payakun"},
        {lat: -5.413963, lng: 105.261228, info: "Kebon Jahe"},
        {lat: -5.415326, lng: 105.272232, info: "Klutum"},
        {lat: -5.3845252, lng: 105.2471616, info: "Makam Keluarga Doloe Boemi Kedaton"},
        {lat: -5.393451, lng: 105.2561408, info: "Makam Katolik Yusuf Arimatea"},
        {lat: -5.383811, lng: 105.2594328, info: "Makam Keluarga Dalem Raya"},
        {lat: -5.417979, lng: 105.2504127, info: "Makam Keluarga Besar Ibu Beah Binti Hi. Jaro Buang"},
        {lat: -5.4512849, lng: 105.2567658, info: "Makam Keluarga kh Abdul Manaf"},
        {lat: -5.4202259, lng: 105.2506808, info: "Makam Keluarga H. Djaro Boeang"},
        {lat: -5.4079609, lng: 105.267456, info: "Blok. 7 Sawah Brebes"},
        {lat: -5.3988254, lng: 105.2624812, info: "Surabaya"},
        ]
