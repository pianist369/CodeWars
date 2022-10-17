function findOutlier(integers){
    if (deleteEven(integers).length > 1)
    return +deleteOdd(integers)
    else return +deleteEven(integers)
  }

  function deleteEven(array){
    return array.filter(elem => elem % 2 != 0)
  }

  function deleteOdd(array){
    return array.filter(elem => elem % 2 == 0)
  }
  