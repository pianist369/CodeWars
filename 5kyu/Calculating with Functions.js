zero = (a = 0) => parseInt(eval(0 + a))
one = (a = 0) => parseInt(eval(1 + a))
two = (a = 0) => parseInt(eval(2 + a))
three = (a = 0) => parseInt(eval(3 + a))
four = (a = 0) => parseInt(eval(4 + a))
five = (a = 0) => parseInt(eval(5 + a))
six = (a = 0) => parseInt(eval(6 + a))
seven = (a = 0) => parseInt(eval(7 + a))
eight = (a = 0) => parseInt(eval(8 + a))
nine = (a = 0) => parseInt(eval(9 + a))

function plus(number) {
    return ` + ${number}`
}
function minus(number) {
    return ` - ${number}`
}
function times(number) {
    return ` * ${number}`
}
function dividedBy(number) {
    return ` / ${number}`
}