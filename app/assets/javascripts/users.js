// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(evt){
  active.seconds;

  $(function(){

    $( '.menu-btn' ).click(function(){
    $('.responsive-menu').toggleClass('expand');


      var app = app || {};
      app.movieTemplateNode = $('#movie-template');
      app.movieTemplate = _.template( app.movieTemplateNode.html() );


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
});
