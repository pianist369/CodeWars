function sameCase(a, b){
    if (!isLetter(a) || (!isLetter(b)) )
    return -1;

    if ((isLowerCase(a) && isLowerCase(b)) ||
         isUpperCase(a) && isUpperCase(b))
    return 1;

    if ((isLowerCase(a) && isUpperCase(b)) ||
         isUpperCase(a) && isLowerCase(b))
    return 0;
    
  }
  
  function isLetter(letter){
    return letter.toUpperCase() !== letter.toLowerCase()
  }

  function isLowerCase(letter){
    return letter.toLowerCase() === letter
  }

  function isUpperCase(letter){
    return letter.toUpperCase() === letter 
  }