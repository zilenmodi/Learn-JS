Array.prototype.myFlat = function (depth) {
  let flattened = [];

  function flatten(arr, currentDepth) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && currentDepth < depth) {
        flatten(arr[i], currentDepth + 1);
      } else {
        flattened.push(arr[i]);
      }
    }
  }

  flatten(this, 0);
  return flattened;
};

let arr = [[1, 3], 2, 4, [6, 7], 8, [9, [10, 11, [12, [13]]]]];
let result = arr.flatMap((x) => x * 2);
console.log(result);
