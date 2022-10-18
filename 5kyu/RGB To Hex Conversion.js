function rgb(r, g, b){
    return toHex(r) + toHex(g) + toHex(b)
  }

function toHex(number){
    if (number > 255) number = 255
    if (number < 0) number = 0
    let hexumber = number.toString(16).toUpperCase()
    if (hexumber.length % 2) return '0' + hexumber
    return hexumber
}