function strCount(str, letter){  
    return [...str].filter(lett => lett == letter).length
  }

  console.log(strCount('Hello', 'o'))