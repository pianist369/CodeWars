function cakes(recipe, available) {
  let total = 1000000;
  for (let x in recipe) {
    if (typeof available[x] == "undefined") available[x] = 0;
    let current = +(available[x] / recipe[x]);
    if (total > current) total = current;
  }
  return parseInt(total);
}

let a = { flour: 500, sugar: 200, eggs: 1, meat: 150 };
let b = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

console.log(cakes(a, b));
console.log(Object.keys({ flour: 500, sugar: 200, eggs: 1, meat: 150 }));
console.log(Object.values({ flour: 500, sugar: 200, eggs: 1, meat: 150 }));
