let mapGoogle = (function(){
  let init = function(){
    
    let mapCenter = {
      lat: 55.767189, 
      lng: 37.566262
    };
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: mapCenter,
      scrollwheel: false
    });

    let logo = {
      url: '../img/icons/map-marker.svg',
      size: new google.maps.Size(50, 65),
      scaledSize: new google.maps.Size(50, 65)
    }

    let features = [
      {
        position: new google.maps.LatLng(55.767056, 37.568140),
        contentString: 'Октяборьское поле 1',
        content: 'город Москва Октяборьское поле 11'
      },
      {
        position: new google.maps.LatLng(55.768656, 37.567528),
        contentString: 'Октяборьское поле 23',
        content: 'город Москва Октяборьское поле 23'
      },
      {
        position: new google.maps.LatLng(55.768040, 37.571262),
        contentString: 'Октяборьское поле 63',
        content: 'город Москва Октяборьское поле 63'
      }
    ];

    let infowindow = new google.maps.InfoWindow();

    features.forEach(function(feature) {
      let marker = new google.maps.Marker({
        position: feature.position,
        icon: logo,
        map: map,
        title: feature.contentString,
        animation: google.maps.Animation.DROP
      });

      marker.addListener('click', function(){
        infowindow.setContent(feature.content);
        infowindow.open(map, marker);
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 2100);
      });
    });
  }

  return{
    init: init
  }
})();