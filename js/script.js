/*
The program should print out each number from 1 to userNum,
replacing numbers divisible by both 3 and 5 with “fizz buzz”,
those divisible by 3 with “fizz”,
and those divisible by 5 with “buzz”.
*/

$(document).ready(function() {

  var message1 = "What is your number?";
  var message2 = "Enter a number without non-numerical characters.";
  prompter(message1);

  function check(num){
    console.log(num);
    if (isNaN(num)){
      console.log("That was not a number");
      prompter(message2);
    } else {
      fizzy(num)
    }
  }

  function prompter(msg){
     userNum = prompt(msg);
     userNum = parseInt(userNum);
     check(userNum);
  }

  function fizzy(num){
    for (var i = 1; i <= num; i++){
      if(i % 3 == 0 && i % 5 == 0){
        $('.fizzbuzz').append(" Fizz-Buzz ");
      } else if (i % 5 == 0){
        $('.fizzbuzz').append(" Buzz ");
      } else if (i % 3 == 0){
        $('.fizzbuzz').append(" Fizz ");
      } else {
        $('.fizzbuzz').append(" " + i + " ");
      }
    }
  }
  
});











