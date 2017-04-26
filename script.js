
$(document).ready(function(){


  var form = $('form');
      form.hide();
     //
    //   form.slideDown(8000).fadeOut(8000);
    //  ///// alex added slideUp

      form.slideDown(3000);
      // form.fadeTo(3000, 0.0);

    // var seat = $('.seat');
    // seat.on('click',function(){
    //     form.fadeToggle(2000, 1.0);
    // });

    // $('.seat').click(function() {
    //   form.fadeToggle( "slow", "linear" );
    // });

    // seat.mouseleave(function(){
    //   form.fadeTo(1000, 0.0);
    //
    // });

     var seats = $('.seat');

     console.log(seats);

     var firstName = $('#firstName').on('click');

     $('#testButton').on('click', function getName(){
       var firstName = $('#firsName').val();

       console.log(firstName);

     });

    //  function getName(){
    //    var firstName = document.getElementById('firstName').value;
    //    console.log(firstName);
    //  }

});
