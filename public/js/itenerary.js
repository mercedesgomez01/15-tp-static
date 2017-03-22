// DROPDOWN OPTIONS INTIALIZED

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

// ADD ITINERARY ITEMS

$("#hotelAdd").on('click', function(){
  var hotelCoordinate;
  for (var i =0; i<hotels.length; i++){
    if ( hotels[i].name === $("#hotelsDropDown :selected").text() ){
      hotelCoordinate = hotels[i].place.location
    }
  }
  drawMarker('hotel', hotelCoordinate)
  $("#bookedHotel").append('<span>' + $("#hotelsDropDown :selected").text() +'</span>').data('hotelCoordinate', hotelCoordinate)
  $('#bookedHotel').append('<button class="btn btn-xs btn-danger remove btn-circle pull-right">x</button>')

})

$("#restaurantAdd").on('click', function(){
  $("#bookedRestaurant").append('<span>' + $("#restaurantsDropDown :selected").text() +'</span>')
  $('#bookedRestaurant').append('<button class="btn btn-xs btn-danger remove btn-circle pull-right">x</button>')

  var restaurantCoordinate;
  for (var i =0; i<restaurants.length; i++){
    if ( restaurants[i].name === $("#restaurantsDropDown :selected").text() ){
      restaurantCoordinate = restaurants[i].place.location
    }
  }
  drawMarker('restaurant', restaurantCoordinate)
})

$("#activityAdd").on('click', function(){
  $("#bookedActivity").append('<span>' + $("#activitiesDropDown :selected").text() +'</span>')
  $('#bookedActivity').append('<button class="btn btn-xs btn-danger remove btn-circle pull-right">x</button>')

  var activityCoordinate;
  for (var i =0; i<activities.length; i++){
    if ( activities[i].name === $("#activitiesDropDown :selected").text() ){
      activityCoordinate = activities[i].place.location
    }
  }
  drawMarker('activity', activityCoordinate)
})

// REMOVE ITINERARY ITEMS

$('#bookedHotel').on('click', '.remove', function() {
  console.log($(this).prev().data())
  $(this).prev().remove()
  $(this).remove()
  // drawMarker().removeMarker(data("hotelCoordinate"))
});



  // console.log($('#restaurantsDropDown :selected').text())
