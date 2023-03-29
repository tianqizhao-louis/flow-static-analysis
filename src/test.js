// @flow


function foo(x: ?number): string {
    if (x) {
      return x;           
    }
    return "default string";
  }


function concat(a: string, b: string) {
  return a + b;
}

concat("A", "B"); // Works!
concat(1, 2); // Error!