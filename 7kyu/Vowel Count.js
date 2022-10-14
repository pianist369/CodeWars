function getCount(str) {
    let resolt = str.match(/[aeiou]/gi)
      return (resolt === null) ? 0 : resolt.length
    }