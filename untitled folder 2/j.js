let a = 100000;
b = 100009;
c = 100010;
d = 110000;

if (a >= b && b >= c && c >= d) console.log("b");
if (a >= b && b >= d && d >= c) console.log("b");
if (a >= c && c >= d && d >= b) console.log("c");
if (a >= c && c >= b && b >= d) console.log("c");
if (a >= d && d >= c && c >= b) console.log("d");
if (a >= d && d >= b && b >= c) console.log("d");
if (b >= a && a >= c && c >= d) console.log("a");
if (b >= a && a >= d && d >= c) console.log("a");
if (b >= c && c >= a && a >= d) console.log("c");
if (b >= c && c >= d && d >= a) console.log("c");
if (b >= d && d >= a && a >= c) console.log("d");
if (b >= d && d >= c && c >= a) console.log("d");
if (c >= a && a >= d && d >= b) console.log("a");
if (c >= a && a >= b && b >= d) console.log("a");
if (c >= d && d >= a && a >= b) console.log("d");
if (c >= d && d >= b && b >= a) console.log("d");
if (c >= b && b >= a && a >= d) console.log("d");
if (c >= b && b >= d && d >= a) console.log("d");
if (d >= a && a >= c && c >= b) console.log("a");
if (d >= a && a >= b && b >= c) console.log("a");
if (d >= c && c >= a && a >= b) console.log("c");
if (d >= c && c >= b && b >= a) console.log("c");
if (d >= b && b >= a && a >= c) console.log("b");
if (d >= b && b >= c && c >= a) console.log("b");

let x = 3;
let total = 0;

while (x <= 999) {
  total = total + x;
  x = x + 3;
}

console.log(total);

let ehniitoo = 3;
ylgavar = 3;
suuliintoo = 999;
let niit = (suuliintoo - ehniitoo) / ylgavar + 1;
let niilber = (niit / 2) * (ehniitoo + suuliintoo);

console.log(niilber);
