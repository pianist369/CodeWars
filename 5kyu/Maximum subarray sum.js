const maxSequence = function (arr) {
  let total = 0;
  let current = 0;
  arr.map((elem) => {
    current = Math.max(0, elem + current);
    total = Math.max(current, total);
  });
  return total;
};
