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


    $("#submit").on("click",function getName(){
          var firstName =$("#firstName").val();
          var lastName=$("#lastName").val();
          var email =$("#email").val();
          var phoneNumber =$("#phoneNumber").val();
      // console.log(firstName)
      // console.log(lastName)
      // console.log(email)
      // console.log(phoneNumber)
    });

});
