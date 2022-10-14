function spinWords(string){
    return string.split(' ').map(elem => (elem.length >= 5) ? reverseString(elem) : elem).join(' ')
}
function reverseString(string){
    return string.split('').reverse().join('')
}