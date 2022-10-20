function orderWeight(strng) {
  return strng
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      return (
        word
          .split("")
          .map((a) => +a)
          .reduce((a, b) => a + b) +
        " " +
        word
      );
    });
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

console.log(
  "2000".split("").map((a) => {
    return +a;
  })
);
