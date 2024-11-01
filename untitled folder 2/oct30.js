let y = 2100;

if ((y % 4 === 0 && y % 100 != 0) || y % 400 === 0) {
  console.log("undur jil");
} else {
  console.log("undur jil bish");
}

let a = 20,
  b = 10;

if (a > b) {
  console.log("a");
} else if (b > a) {
  console.log("b");
}

let m = 30,
  l = 20,
  n = 15;

if (m > l && m > n) {
  console.log("m");
} else if (l > m && l > n) {
  console.log("l");
} else if (n > m && n > l) {
  console.log("n");
}

let w = 30,
  q = 40,
  r = 50;

if (w > q && q > r) {
  console.log("w>q>r");
} else if (w > r && r > q) {
  console.log("w>r>q");
} else if (q > w && w > r) {
  console.log("q>w>r");
} else if (q > r && r > w) {
  console.log("q>r>w");
} else if (r > q && q > w) {
  console.log("r>q>w");
} else if (r > w && w > q) {
  console.log("r>w>q");
}
