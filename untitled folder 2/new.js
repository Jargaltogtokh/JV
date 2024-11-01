let a = 4;
let b = 3;

console.log(1, a > b); // true
console.log(2, a < b); //false
console.log(3, a >= b); // true
console.log(4, a <= b); // false
console.log(5, a == a); //true

let c = 4;
d = 4;
console.log(6, c === d);
console.log(7, (c != d) === true);

let e = 4;
f = 4;

console.log(8, e != f);
console.log(9, e == f);
console.log(10, e === f);
let x = 10;
y = 12;

console.log(11, a > b && x < y);
console.log(12, a > b && x > y);
console.log(13, a > b || x < y);
console.log(14, a > b || x > y);
console.log(15, a < b || x > y);
let five = !(a > b);
console.log(16, five);
let six = !(4 < 3);
console.log(17, six);
let seven = !(4 > 3 && 10 < 12);
console.log(18, seven);
let eight = !(4 > 3 && 10 > 12);
console.log(19, eight);
let nine = !(4 === "4");
console.log(20, nine);

if (a == b) {
  console.log("a is equal to b");
} else {
  console.log(" a is not equal to b");
}

let r = 5;
y = 10;
z = r - y;
console.log(r < y);

console.log(r % y);

console.log(z);
console.log(25, x % 5);

