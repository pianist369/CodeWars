function arrayDiff(a, b) {
  for (let i = 0; i < b.length; i++){
  a = a.filter(number => number != b[i])
  }
  return a
}