$(document).ready(function(){

//ANIMATIONS

//Hides form when page loads
  var form = $('form');
      form.hide();


/* ------------------------- */
//ARRAYS

/* This array is empty, it lets us push our people object into it
    Then use a forEach to loop through them and get people's info */
    var people = [];


/* ------------------------ */
//FUNCTIONS

/* SEAT ONCLICK for divs with seat class.
  1. Targets all divs with class of seat and creates an onclick function.
  2. Creates id variable and assigns id value of whatever div is clicked on
        so we can send it to #seatNumber element on form.
  3. Sets the value of the #seatNumber form element to the value of variable id.
  4. Makes form to slide down when a seat is clicked.
*/
/*1*/ $('.seat').on('click', function(){

/*2*/    var id = $(this).attr('id');

/*3*/    $('#seatNumber').val(id);

/*4*/    form.slideDown(1000);

      });

// /*Form Focus & Hide*/
//       function showHideFormQues(i){
//          if($("firstName.form-group").focus){
//            $("i.form-group").next();
//          }else {
//            $("i.form-group").hide();
//           }
//        });

/*SEAT MOUSEOVER to try and display people's information, once submitted,
  when we hover a div with the class seat.
1. Creates the mouseover function targeting .seat divs.
2. Creates a variable divId and assigns the hovered elements id attr to it.
3. Creates a for Each loop to itterate through the indexes of the array we
      named 'people'.
4. Conditional statement of forEach loop. If divId is equal to a
      seatnumber in any object in the array of people,
5. Then console log the value of the key 'name' in that object.
*/

/*1*/ $('.seat').on('mouseover', function(){
/*2*/       var divId = $(this).attr('id');

/*3*/       people.forEach(function(index){
/*4*/             if( divId === index.seatNumber);
/*5*/                  show(index.name);
                });
      });


/*SUBMIT BUTTON ON CLICK
  1. Creates submit button onclick function.
  2. Creates variable firstName assigns it the value of the forms #firstname input.
  3. Creates variable lastName assigns it the value of the forms #lastName input.
  4. Creates variable email assigns it the value of the forms #email input.
  5. Creates variable phoneNumber assigns it the value of the forms #phoneNumber input.
  6. Creaes variable seatNumber assigns it the value of the forms #seatNumber input.
*/

/*1*/ $("#submit").on("click",function getName(){
/*2*/     var firstName =$("#firstName").val();
/*3*/     var lastName=$("#lastName").val();
/*4*/     var email =$("#email").val();
/*5*/     var phoneNumber =$("#phoneNumber").val();
/*6*/     var seatNumber = $('#seatNumber').val();


/* 7. The below section creates an empty object,
      and assigns the variables above to the appropriate
      object key. For example the first would look like:  name: firstname,
      within the object. We're still in the submit onclick function.
*/
            var person = {};
            person.name = firstName;
            person.lastName = lastName;
            person.email = email;
            person.phoneNumber = phoneNumber;
            person.seatNumber = seatNumber;

//8  The below section pushes the person object into the array named people (created above).
  // we're still in the submit onclick function

            people.push(person);

            console.log(people);

  /*slides form up when submit clicked */
            form.slideUp(1000);

////######### Cannot target the correct seat class/Id in order to change it to red after submit button on.click
// var selectedSeat= $(this).attr('id');
// console.log(selectedSeat);
// $(selectedSeat).removeClass();
// $(selectedSeat).addClass("reservedSeat");
var seatArray = $('.seat');
var selectedSeat = seatNumber;
 console.log(typeof selectedSeat);
seatArray.each(function(index, element){
 console.log(element);
 if(selectedSeat === element.id){
   console.log('adding a class');
   element.className = "reservedSeat seat";
 }

});

/*9 closes submit onclick*/
        });

}); /*closes the jQuery document ready function */
