function nextBigger(n) {
  if (n.toString().split("").sort().reverse().join("") == n.toString())
    return -1;
  else
    for (let i = n + 1; ; i++) {
      if (
        i.toString().split("").sort().join("") ==
        n.toString().split("").sort().join("")
      )
        return i;
    }
}

console.log(nextBigger(166533322));
