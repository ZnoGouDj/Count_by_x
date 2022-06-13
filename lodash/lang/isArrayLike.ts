function isArrayLike(value: any): Boolean {
  return (
    value &&
    typeof value !== 'function' &&
    value.length >= 0 &&
    value.length <= Number.MAX_SAFE_INTEGER
  );
}

// A value is considered array-like if it's not a function and has a value.length that's an
// integer greater than or equal to 0 and less than or equal to Number.MAX_SAFE_INTEGER

console.log(isArrayLike([1, 2, 3]));
// => true

// _.isArrayLike(document.body.children);
// => true

console.log(isArrayLike('abc'));
// => true

// _.isArrayLike(_.noop);
// => false
