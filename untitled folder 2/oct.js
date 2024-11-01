let x = 15;

if (x % 5 === 0 && x % 3 !== 0) {
  console.log("x is divided by 5");
} else if (x % 3 === 0 && x % 5 !== 0) {
  console.log("x is divided by 3");
} else if (x % 3 === 0 && x % 5 === 0) {
  console.log("x can be divided by both 5 & 3");
}

console.log((1, 936 / 12) % 9);

let y = 78;

if (y < 60 && y > 0) {
  console.log("F");
} else if (y >= 60 && y < 70) {
  console.log("D");
} else if (y >= 70 && y < 80) {
  console.log("C");
} else if (y >= 80 && y < 90) {
  console.log("B");
} else if (y >= 90 && y < 100) {
  console.log("A");
}

let month = 2;

if (month === 1) {
  console.log("31 days");
} else if (month === 2) {
  console.log("28 days");
} else if (month === 3) {
  console.log("31 days");
} else if (month === 4) {
  console.log("30 days");
} else if (month === 5) {
  console.log("31 days");
} else if (month === 6) {
  console.log("30 days");
} else if (month === 7) {
  console.log("31 days");
} else if (month === 8) {
  console.log("30 days");
} else if (month === 9) {
  console.log("31 days");
} else if (month === 10) {
  console.log("30 days");
} else if (month === 11) {
  console.log("31 days");
} else if (month === 12) {
  console.log("30 days");
}

let a = 21;

if (a % 2 === 0) {
  console.log("tegsh too");
} else if (a % 2 != 0) {
  console.log("sondgoi too");
}

let b = -5;

if (b > 0) {
  console.log("eyreg too");
} else if (b < 0) {
  console.log("surug too");
}

let z = 100;
let c = 150;
let m = 75;
let l = 50;

if (z > 80 && c < 80 && m < 80 && l < 80) {
  console.log(z);
} else if (z > 80 && c > 80 && m < 80 && l < 80) {
  console.log(z + c);
} else if (z > 80 && c > 80 && m > 80 && l < 80) {
  console.log(z + c + m);
} else if (z > 80 && c > 80 && m > 80 && l > 80) {
  console.log(z + c + m + l);
}
