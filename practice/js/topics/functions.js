function greet(name) {
  return "Hello " + name + "!";
}
console.log(greet("Eric"));

// Define an anonymous function
var greet = function(name) {
  return "Hello " + name + "!";
}
console.log(greet("Eric Anonymous"));

confirm("Hi!");
alert("Hi alert!");
prompt("Bye!");