/*
The program should print out each number from 1 to userNum,
replacing numbers divisible by both 3 and 5 with “fizz buzz”,
those divisible by 3 with “fizz”,
and those divisible by 5 with “buzz”.
*/

$(document).ready(function() {

    var question1 = "What's your number?";
    var question2 = "Try again without nonnumerical characters."
    prompter(question1);

    function prompter(ask){
      userNum = prompt(ask);
      userNum = parseInt(userNum);
      check(userNum);
    }

    function check(num){
      console.log(num);
      if (isNaN(num)){
        console.log("Not a number...")
        prompter(question2);
      } else {
        fizzle(num)
      }
    }

    function fizzle(n) {
      var msg = '';
      if ( n % 3 == 0 ) { msg += "Fizz" };
      if ( n % 5 == 0 ) { msg += "Buzz" };
      return msg || n;
     } 
});


    // if (n % 3 == 0 && n % 5 == 0){
    //   console.log("Fizz-Buzz")
    // } else if ( n % 3 == 0 ) {
    //   msg += "Fizz"
    // } else if ( n % 3 == 0 ) {
    //   msg += "Buzz"
    // } else {
    //   msg += n
    // }
  


  // function fizzy(num){
  //   for (var i = 1; i <= num; i++){
  //     if(i % 3 == 0 && i % 5 == 0){
  //       $('.fizzbuzz').append(" Fizz-Buzz ");
  //     } else if (i % 5 == 0){
  //       $('.fizzbuzz').append(" Buzz ");
  //     } else if (i % 3 == 0){
  //       $('.fizzbuzz').append(" Fizz ");
  //     } else {
  //       $('.fizzbuzz').append(" " + i + " ");
  //     }
  //   }
  // }







