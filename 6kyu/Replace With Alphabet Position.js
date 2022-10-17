function alphabetPosition(text) {
    return text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(letter => letter.charCodeAt() - 64).join(' ');
  }

console.log(alphabetPosition("aThe sunset sets at twelve o' clock."))