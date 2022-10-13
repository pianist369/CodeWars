function nearestSq(n){
    if (Math.sqrt(n) % 1 < 0.5)
    while (Math.sqrt(n) % 1 !== 0){
        n--
    }
    else while (Math.sqrt(n) % 1 !== 0){
        n++
    }
    return n;
}

console.log(nearestSq(111))