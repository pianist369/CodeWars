function maskify(cc) {
    let newArray = '';
    [...cc].forEach((elem, index) => {
    if (index < [...cc].length - 4){
        newArray += '#'
    }
    else newArray += (elem)
  })
  return newArray
}