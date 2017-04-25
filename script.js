$(document).ready(function(){


  var form = $('form');
      form.hide();
      form.slideDown(3000);
      form.fadeTo(3000, 0.0);

    var seat = $('.seat');
    seat.on('click',function(){
        form.fadeTo(2000, 1.0);
    });

    // seat.mouseleave(function(){
    //   form.fadeTo(1000, 0.0);
    //
    // });

});
