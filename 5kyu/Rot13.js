function rot13(message) {
  return message
    .split("")
    .map((letter) => {
      if (letter.toUpperCase() != letter.toLowerCase()) {
        if (
          (letter.toLowerCase() == letter && letter.charCodeAt() + 13 <= 122) ||
          (letter.toUpperCase() == letter && letter.charCodeAt() + 13 <= 90)
        )
          letter = String.fromCharCode(letter.charCodeAt() + 13);
        else letter = String.fromCharCode(letter.charCodeAt() - 13);
      }
      return letter;
    })
    .join("");
}
