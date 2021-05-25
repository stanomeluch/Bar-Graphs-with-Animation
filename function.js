/*First Bar*/

setTimeout(function start (){
  
    $('.barFirst').each(function(i){  
      let $bar = $(this);
      $(this).append('<span class="countFirst"></span>')
      setTimeout(function(){
        $bar.css('width', $bar.attr('data-percent'));      
      }, i*100);
    });
   
  $('.countFirst').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).parent('.barFirst').attr('data-percent')
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now) +'%');
          }
      });
  });
   
  }, 500)