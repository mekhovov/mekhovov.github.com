
// http://gmap.nurtext.de/examples.html


$(function() {
  var map_data = [];

  function findPurpose(purposeName){
    return $.grep(map_data, function(item){
      return item.address == purposeName;
    });
  }

  
    var data = $.map( users_data, function( user ) {
      user_info_html =  '<div style="position:relative; min-height:110px;">' +
                          '<div style="float: left; width: 110px; padding-right: 10px">' +
                            '<img style=" width:110px" src="http://graph.facebook.com/' + user.facebook_id + '/picture?type=normal">' +
                          '</div>' +
                          '<div style="float: right; width: 160px">' +
                            '<h4>' + 
                              '<a href="' + user.url + '" target="_blanl"> ' +  user.name + ' </a>' + 
                            '</h4>' +
                            '<p>' + user.address + '</p>' +
                          '</div>' +
                          
                        '</div>';

      return {
        address: user.address + ", Hamburg",
        html: user_info_html,
        popup: true 
      };
    });
    $.each( data, function( i, user ) {
      u = findPurpose(user.address)[0];
      if (u) {
        u.html += ('<hr>' + user.html);
      } else {
        map_data.push(user);
      }
    });
      
    $("#map").gMap({ 
        markers: map_data,
                address: "st. Georg, Hamburg",
                zoom: 11 });
  });

