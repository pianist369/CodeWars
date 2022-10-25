function solution(list) {
  list.push(null);
  totalArray = [];
  index = 0;
  row = false;
  for (let i = index + 1; i < list.length; i++) {
    if (list[i] - 1 !== list[i - 1])
      if (row == false) totalArray.push(`${list[i - 1]},`);
      else {
        totalArray.push(`${list[index]}-${list[i - 1]},`);
        row = false;
      }
    else if (row !== true)
      if (list[i] + 1 != list[i + 1]) {
        totalArray.push(`${list[i - 1]},${list[i]},`);
        i++;
      } else {
        index = i - 1;
        row = true;
      }
  }
  return totalArray.join("").slice(0, -1);
}