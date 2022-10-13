function countSheeps(arrayOfSheep) {
    let counter = 0;
    // Проверяем каждый элемент на true
    arrayOfSheep.forEach(element => {
        if (element === true) counter++ 
    });
    return counter
  }

  function countSheeps1(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

  console.log(Boolean(false))