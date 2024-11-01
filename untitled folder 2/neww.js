let count = 0;

while (count < 5) {
  console.log("hi", count);
  count = count + 1;
}

while (count < 10) {
  console.log("hi", count);
  count = count + 1;
}

let x = 4;

while (x < 10) {
  console.log("bye", x);
  x = x + 1;
}

let y = 1;

while (y < 11) {
  console.log(1, "hi", y);
  y = y + 1;
}

let n = 1,
  sum = 0;

while (n < 21) {
  console.log((sum = sum + n)), (n = n + 1);
}
let m = 1;

while (m < 21) {
  if (m % 2 === 1) {
    console.log("Sondgoi", m);
  }
  m = m + 1;
}

let s = 5;
factorial = 1;

while (s > 0) {
  factorial = factorial * s;
  s--;
}
console.log(factorial);

let b = 3;
q = 1;
hurd = 1;

while (q <= 10) {
  hurd = b * q;
  {
    console.log(b, "x", q, "=", hurd), (q = q + 1);
  }
}

let j = 213;
reversed = "";
while (j > 0) {
  let lastDigit = j % 10;
  reversed = reversed + lastDigit;
  j = (j - (j % 10)) / 10;
}
console.log(reversed);

/* Create a while loop that runs from 1-100
Every 10 loops, print out: Checkpoint! and the loop number
On loop 50 print out ONLY: Half way there!
On the final loop (100) print out ONLY: You made it!
AFTER the loop is done, print out: All, done! */

/* start at 1
end at 100
conditions: 10, 50, 100
action: print */

let i = 1;
while (i <= 100) {
  if (i % 100 === 0) console.log("You made it!", i);
  if (i % 50 === 0) {
    console.log("Half way t, there!", i);
  }
  if (i % 10 === 0) {
    console.log("Chekpoint", i);
  }
  i++;
}
console.log("All, done!");

let day = 1; // 1,2,3,4,5,6,7
expense = 0;
budget = 100;

while (expense <= budget) {
  if (day <= 5) {
    expense = expense + 5;
  } else if (day > 5 && day <= 7) {
    expense = expense + 10;
  }
  console.log(day, expense);

  if (expense >= 80 && expense <= 100) {
    console.log("Таны нийт зардал 100 руу дөхөж байна шүү");
  } else if (expense > 99) {
    console.log("Та зардлын хязгаарт хүрлээ");
  }

  day++;

  if (day >= 7) {
    day = 1;
  }
}

let coffee = 1;
card = 10;

while (coffee <= 10) {
  if (coffee === 3) {
    console.log("Танд үнэгүй бялуу бэлэглэж байна", coffee);
  }
  if (coffee === 10) {
    console.log("Баяр хүргэе! Та үнэгүй кофе авлаа!", coffee);
  }
  coffee++;
}
console.log("Урамшууллын карт дууслаа!");


