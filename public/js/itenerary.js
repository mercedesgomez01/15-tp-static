function drawMarker (type, coords) {
    const latLng = new google.maps.LatLng(coords[0], coords[1]);
    const marker = new google.maps.Marker({
      position: latLng
    });
    marker.setMap(currentMap);
  }

  $(function listAllPlaces() {
  for (var i=0; i < hotels.length; i++) {
    $('#hotelsDropDown').append('<option>'+ hotels[i].name +'</option>')
  }
  for (var i=0; i < restaurants.length; i++) {
    $('#restaurantsDropDown').append('<option>'+ restaurants[i].name +'</option>')
  }
  for (var i=0; i < activities.length; i++) {
    $('#activitiesDropDown').append('<option>'+ activities[i].name +'</option>')
  }
})

$("#hotelAdd").on('click', function(){
  console.log($('#hotelsDropDown :selected'), hotels)
  $("#bookedHotel").append('<span>' + $("#hotelsDropDown :selected").text() +'</span>')
  var hotelCoordinate;
  for (var i =0; i<hotels.length; i++){
    if ( hotels[i].name === $("#hotelsDropDown :selected").text() ){
      hotelCoordinate = hotels[i].place.location
    }
  }
  console.log(hotelCoordinate)
  // drawMarker('hotel', hotelCoordinate)
})

$("#restaurantAdd").on('click', function(){
  console.log($('#restaurantsDropDown :selected').text())
  $("#bookedRestaurant").append('<span>' + $("#restaurantsDropDown :selected").text() +'</span>')
})

$("#activityAdd").on('click', function(){
  console.log($('#activitiesDropDown :selected').text())
  $("#bookedActivity").append('<span>' + $("#activitiesDropDown :selected").text() +'</span>')
})
