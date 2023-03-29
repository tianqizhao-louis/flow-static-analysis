function foo(x) {
  if (x) {
    return x;
  }
  return "default string";
}
function concat(a, b) {
  return a + b;
}
concat("A", "B"); // Works!
concat(1, 2); // Error!