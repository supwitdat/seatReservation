
$(document).ready(function(){

//ANIMATIONS

  var form = $('form');
      form.hide();


      // form.slideDown(8000).fadeOut(8000);


     //
    //   form.slideDown(8000).fadeOut(8000);
    //  ///// alex added slideUp


      // form.slideDown(3000);
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

//ARRAY
    var people = [];



//FUNCTIONS

  $('.seat').on('click', function(){
    var id = $(this).attr('id');
    //To Test if click matches seat id
    //console.log(id);
    $('#seatNumber').val(id);

    form.slideToggle(1000);

  });

 var idCheck = $('.seat').attr('id');

$('.seat').on('mousein', function(){
    var divId = $(this).attr('id');
    console.log('its the id');
  people.forEach(function(index){
    if( divId === index.seatNumber);
          console.log('it matched');
  });



});



    $("#submit").on("click",function getName(){
var firstName =$("#firstName").val();
var lastName=$("#lastName").val();
var email =$("#email").val();
var phoneNumber =$("#phoneNumber").val();
var seatNumber = $('#seatNumber').val();

var person = {};
  person.name = firstName;
  person.lastName = lastName;
  person.email = email;
  person.phoneNumber = phoneNumber;
  person.seatNumber = seatNumber;

people.push(person);

// people.forEach(function(index){
//   if( idCheck === index.seatNumber);
//
// });

});




});
