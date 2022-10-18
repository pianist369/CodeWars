function humanReadable (seconds) {
    const wholeHours = makeZero(parseInt(seconds / 3600))
    const wholeMinutes = makeZero(parseInt((seconds - wholeHours * 3600) / 60))
    const wholeSeconds = makeZero(seconds - wholeHours * 3600 - wholeMinutes * 60)
    return `${wholeHours}:${wholeMinutes}:${wholeSeconds}`;
  }
function makeZero(number) {
    if (number < 10) return '0' + number
    else return '' + number
}
console.log(humanReadable(359999))
console.log(parseInt(359999/3600))
console.log(humanReadable(3599))
console.log(humanReadable(0))