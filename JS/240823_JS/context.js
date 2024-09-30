var x = 1;

function bar() {
  console.log("?????", x);
}

function foo() {
  var x = 10;
  console.log(x); // 10
  bar();
}

foo();
bar();
