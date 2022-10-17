const countBits = function(n) {
  return n.toString(2).split('').filter(letter => letter ==='1').length
};