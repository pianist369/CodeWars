function persistence(num) {
    let i = 0;
    while (num > 9){
    num = multiplicate(num)
    i++
    }
    return i;
 }

 function multiplicate(number){
   let summ = 1;
   while (number > 0){
   summ *= number % 10
   number = Math.trunc(number/10)
   }
   return summ;
 }
 console.log(persistence(39))
