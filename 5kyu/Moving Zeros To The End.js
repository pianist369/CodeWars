function moveZeros(arr) {
    newArr = arr.filter(elem => elem !== 0)
    let zeros = arr.length - newArr.length
    for ( let i = 0; i < zeros; i++ ){
      newArr.push(0)
    }
    return newArr
  }