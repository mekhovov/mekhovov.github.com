// http://hpneo.github.io/gmaps/examples.html

var map_data = [];

// map init
var map = new GMaps({
    div: '#map',
    zoom: 11,
    lat: 53.5510846,
    lng: 9.99368179999999
});


function find_me(){
  GMaps.geolocate({
    success: function(position) {
      map.setCenter(position.coords.latitude, position.coords.longitude);
      map.setZoom(14);
    },
    error: function(error) {
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function() {
      alert("Your browser does not support geolocation");
    }
  });
}




$(function() {

  function findPurpose(purposeName){
    return $.grep(map_data, function(item){
      return item.address == purposeName;
    });
  }

    // add html for user details
    var data = $.map( users_data, function( user ) {
      user_info_html =  '<div style="position:relative; min-height:100px;">' +
                          '<div style="float: left; width: 110px; padding-right: 10px">' +
                            '<img style="max-height: 100px" src="http://graph.facebook.com/' + user.facebook_id + '/picture?type=normal">' +
                          '</div>' +
                          '<div style="float: right; width: 160px">' +
                            '<h4>' +
                              '<a href="' + user.url + '" target="_blanl"> ' +  user.name + ' </a>' +
                            '</h4>' +
                            '<p>' + user.address + '</p>' +
                          '</div>' +
                        '</div>';

      return {
        address: user.address,
        lat: user.lat,
        lng: user.lng,
        html: user_info_html
      };
    });

    // group users by address
    $.each( data, function( i, user ) {
      u = findPurpose(user.address)[0];

      if (u) {
        u.html += ('<hr>' + user.html);
        u.users_count += 1;
      } else {
        user.users_count = 1;
        map_data.push(user);
      }
    });

    // sort by address
    map_data.sort(function(a,b){
     if(a.address.toLowerCase() > b.address.toLowerCase()){ return 1}
      if(a.address.toLowerCase() < b.address.toLowerCase()){ return -1}
        return 0;
    });



    // add distincts list
    GMaps.on('marker_added', map, function(marker) {
      $('#markers-with-coordinates').append('<li><a href="#" class="pan-to-marker" data-marker-lat="' + marker.getPosition().lat() + '" data-marker-lng="' + marker.getPosition().lng() + '">' + marker.title + '</a></li>');
    });

    // app users to map
    $.each( map_data, function( i, user ) {

      if (user.lat && user.lng) {
            map.addMarker({
              lat: user.lat,
              lng: user.lng,
              title: user.address  + '&nbsp(' + user.users_count + ')',
              infoWindow: {
                content: user.html
              }
            });
      } else {
        GMaps.geocode({
          address: user.address,
          callback: function(results, status) {
            if (status == 'OK') {
              var latlng = results[0].geometry.location;
              var lat = latlng.lat();
              var lng = latlng.lng();
              map.addMarker({
                lat: lat,
                lng: lng,
                title: user.address,
                infoWindow: {
                  content: user.html
                }
              });
            } else {
              // alert("[Can't locate address]: " + user.address);
              // console.log(user.address);
              // debugger; // TODO: remove it!

            }
          }
        });
      }

    });


  // add find me feature
  map.addControl({
    position: 'top_right',
    content: 'Знайти мене',
    style: {
      margin: '5px',
      padding: '1px 6px',
      border: 'solid 1px #717B87',
      background: '#9ACD32'
    },
    events: {
      click: function(){
        find_me();
      }
    }
  });


  // bind click by distinct to map positioning
  $(document).on('click', '.pan-to-marker', function(e) {
    e.preventDefault();

    var lat, lng;

    var $lat = $(this).data('marker-lat');
    var $lng = $(this).data('marker-lng');

    lat = $lat;
    lng = $lng;

    map.setCenter(lat, lng);
    map.setZoom(14);
  });


  // users/distincts statistic
  var distincts_count = map_data.length;
  var users_count = 0;
  $.each( map_data, function( i, distinct ) {
    users_count += distinct.users_count;
  });

  $("#users_count").html(users_count);
  $("#distincts_count").html(distincts_count);

});
