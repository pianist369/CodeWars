function pigIt(str){
    return str.split(' ').map(pigWord).join(' ')
  }

function pigWord(word){
    if (/^[a-z]/gi.test(word))
    return word.slice(1) + word.slice(0,1) + 'ay'
    else return word
}