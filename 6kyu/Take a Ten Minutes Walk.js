function isValidWalk(walk) {
    return check(walk, 'n') == check(walk, 's') &&
           check(walk, 'e') == check(walk, 'w') &&
           walk.length == 10
  }

function check(array, checkletter){
    return array.filter(letter => letter == checkletter).length
}