function minSum(arr) {
    let summ = 0;
    //Сортируем массив
    arr.sort(function(a, b) {
      return a - b;
    });
    //Извлекаем первый и последний элементы и умножаем их
    while (arr.length > 0){
      summ += arr.shift() * arr.pop()
    }
    return summ
  }