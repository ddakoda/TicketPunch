// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var active = active || {};
      var app = app || {};


$(document).ready(function(evt){
  active.seconds;

  app.movieTemplateNode = $('#movie-template').html();
  if (app.movieTemplateNode != null || app.movieTemplateNode != undefined) {
      app.movieTemplate = _.template(app.movieTemplateNode);
  }

  $(function(){

    $( '.menu-btn' ).click(function(){
      $('.menu-container').toggleClass('expand');
      
    });

    $('#movie_search').on('keyup', function(){

        var field = $(this);

        $.ajax({
          method: 'get',
          url: '/api/movies',
          data: {t: field.val()},
          success: function(data){
            console.log(data)
            if (data.movie){
              var movieHTML = app.movieTemplate( data.movie );
              $('#movie-display').html( movieHTML );
              app.movieID = data.movie.id;
            }
          }
        });
      });
  });
});
