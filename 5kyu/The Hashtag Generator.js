function generateHashtag(str) {
  if (
    str.replace(/ /g, "").length == 0 ||
    str.replace(/ /g, "").length + 1 > 140
  )
    return false;
  else
    return (
      "#" +
      str
        .split(" ")
        .map((word) => {
          return word.slice(0, 1).toUpperCase() + word.slice(1);
        })
        .join("")
    );
}
