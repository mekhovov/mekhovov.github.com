// http://hpneo.github.io/gmaps/examples.html

$(function() {
  var map_data = [];

  function findPurpose(purposeName){
    return $.grep(map_data, function(item){
      return item.address == purposeName;
    });
  }

    // add htm for user details
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
      } else {
        map_data.push(user);
      }
    });



    // map init
    var map = new GMaps({
        div: '#map',
        lat: 53.5510846,
        lng: 9.99368179999999
    });


    // app users to map
    $.each( map_data, function( i, user ) {

      if (user.lat && user.lng) {
            map.addMarker({
              lat: user.lat,
              lng: user.lng,
              title: user.address,
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

  });
