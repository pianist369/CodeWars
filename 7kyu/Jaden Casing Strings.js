String.prototype.toJadenCase = function () {    
    return this.split(' ').map(toUpperFirstLetter).join(' ')
    }
  function toUpperFirstLetter(word){
      return word.substring(0,1).toUpperCase() + word.substring(1)
  };