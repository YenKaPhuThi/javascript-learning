/*** Init functions ***/
var btnExercise1 = document.getElementById('btn-exercise1');
btnExercise1.onclick = function() {
  findLargerNumber();
}

/*** Exercise 1 ***/
  // parseInt() parses up the first non digit and return whatever it had parsed.
  // Number() converts the entire string into a number, which can also be a float BTW.

  function findLargerNumber() {
    var num1;
    var num2;

    num1 = prompt("Please enter the first integer: ");
    num2 = prompt("Please enter the second integer: ");

    if (parseInt(num1, 10) > parseInt(num2, 10)) {
      alert("The first number is " + parseInt(num1, 10) + " larger!");
    } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
      alert("The second number is " + parseInt(num2) + " larger!");
    } else if (parseInt(num2, 10) === parseInt(num1, 10)) {
      alert("The first number and the second number is equal!");
    } else {
      alert("The input characters is not numbers");
    }
  }


/*** Exercise 2 ***/

