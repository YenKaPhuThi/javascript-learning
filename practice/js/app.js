// 1. Operation & Debug
var a;
var d;
var b = 3;
a = b * 2;
d += 3;

console.log(a);
console.log(d);


var a1 = false || (4==4);
console.log(a1);

// 2. Prompt() method
var c = prompt('WHAT IS YOUR NAME?');
console.log(c);

// 3. Destructuring
var foo = ['one', 'two', 'three', 'four'];

var [one1, two2] = foo;

foo.fill();
console.log([[one1, two2]]);
// console.log(foo.map);

// 4. Converting
var ac = '96';
var bc = Number(ac);
console.log(ac);
console.log(bc);

// 5.Varibles
var amount = 99.99;
amount = amount * 2;
console.log(amount);
amount = "$" + String(amount);
console.log(amount);


