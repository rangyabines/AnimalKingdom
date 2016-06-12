$( document ).ready(function() {

 var kingdom= ['Lion','Giraffe','Zebra','Elephant','Tiger'];
    $('#addsubmit').on('click', function(){
    var animals = $('#addAnimal').val().trim();
    $('#kingdomButtons').append('<button>');
    return false;
  });

  $(document).on('click','button', function() {
      var animal = $(this).data('animal');
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
      $.ajax({
              url: queryURL,
              method: 'GET'
          })
          .done(function(response) {
            
              console.log(response)
              var results=response.data
              for (var i = 0; i < results.length; i++) {
                  var animalDiv =$('<div>');
                  var p =$('<p>');
                  p.text(results[i].rating);
                  var animalImage =$('<img>'); 
                  animalImage.attr('src',results[i].images.fixed_height.url);
                  animalImage.addClass('jungle') 
                  animalDiv.append(p); 
                  animalDiv.append(animalImage); 
                  $('#circleOfLife').prepend(animalDiv);
                  }            
          });
    });

    $('#addsubmit').on('click', function(){
    var animal = $('#addAnimal').val().trim();
    kingdom.push(animal);
    appendNewButton(animal);
    
    renderButtons();
    return false;
    })

    function renderButtons(){ 
    $('#kingdomButtons').empty();
    for (var i = 0; i < kingdom.length; i++){ 
        var t = $('<button>') 
        t.addClass('favAnimal'); 
        t.attr('data-animal', kingdom[i]); 
        t.text(kingdom[i]); 
        $('#kingdomButtons').append(t);
    }
  }
  renderButtons();

  $('.jungle').on('click', function() {
  var event = $(this).attr('data-state'); 
  if ( event == 'still'){
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
    }
  else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }
  });
    
});