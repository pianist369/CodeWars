function findOdd(A) {
    for (let i = 0;; i++) {
        if (A.filter(elem => elem === A[0]).length % 2 !== 0) return A[0]
        else A = A.filter(elem => elem !== A[0])
    }
  }