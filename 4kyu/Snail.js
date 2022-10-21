snail = function (array) {
  var total = [];
  var i = 0;

  function goRigth(array) {
    if (array.length == 0) return total;
    while (array[i].length > 0) {
      total.push(array[i].shift());
    }
    array.splice(i, 1);
    goDown(array);
    return total;
  }

  function goDown(array) {
    if (array.length == 0) return total;
    while (typeof array[i] != "undefined") {
      total.push(array[i].pop());
      i++;
    }
    i--;
    goLeft(array);
    return total;
  }

  function goLeft(array) {
    if (array.length == 0) return total;
    while (array[i].length > 0) {
      total.push(array[i].pop());
    }
    array.splice(i, 1);
    i--;
    goUp(array);
    return total;
  }

  function goUp(array) {
    if (array.length == 0) return total;
    while (typeof array[i] != "undefined") {
      total.push(array[i].shift());
      i--;
    }
    i++;
    goRigth(array);
    return total;
  }
  return array.length == 0 ? [] : goRigth(array);
};
