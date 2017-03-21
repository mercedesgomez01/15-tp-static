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
