$(document).ready(function(){
  

$(function(){
  $('.submit').submit(function(event){
     event.preventDefault();
     var location = $('#find').val();
      getinfo('https://api.foursquare.com/v2/venues/search?near='+ location+ '&limit=10&oauth_token=D3WD4BO32EI4BSC33KAMJSM1RUC3NR2LO0RUCGMXUYQ5Z3QE&v=20160530');
       // myFunction();


  });
});

//get the venues name, description and picture

function getinfo(venueAPI) {
      //a variable to store the name of the location
      var place = $('#find').val();

      //Created an if statement to check if something was put in the search box or not
       if( place == ''){
        $('.content').html('Please type a location in the box')

       } else {
//the first getJSON gets an array of inforamtion for the search endpoint it is here that we limit the locations to only 10 and we get the locations ID
        $.getJSON(venueAPI, function(data) {   
               //test to see if the data appears
               console.log(data);
               
               var arr = data.response;
               //var placeId = data.response.venues[0].id;
               //console.log(placeId);
               //console.log(arr.length);

               //a variable created and our informaiton will be appeneded to this variable
               var results = $('.content ');
               //this for loop will search through the a variety of arrays in order to get the locations name, description and photo
               for(i = 0; i < 10; i++){
                //console.log(arr.venues[i].name);
                var placeId = arr.venues[i].id;
                //with the locations ID we got from the first getJSON, in the second getJSON we will use the ID to get the locations description and a photot
                $.getJSON('https://api.foursquare.com/v2/venues/' + placeId + '?oauth_token=D3WD4BO32EI4BSC33KAMJSM1RUC3NR2LO0RUCGMXUYQ5Z3QE&v=20160530',function(data){
                  //collects the first photo in the array
                  var photo = data.response.venue.photos.groups[0].items[1]; 
                  //console.log(data.response.venue.description);
                  //has the rname, description and photo appear in the html portion of the website
                  results.append('<li>' + data.response.venue.name + '</li>');
                  results.append('<ul><li>' + data.response.venue.description + '</li></ul>');
                  results.append('<ul><li> <img src ="' + photo.prefix + photo.width + 'x' + photo.height + photo.suffix + '"></li></ul>' );

                });
                //console.log(placeId);

                


               }


               
               
                              
               
                   
       });
       }
       
 }
});