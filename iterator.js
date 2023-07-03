let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { value: this.current++, done: false };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}
