function reverseString(string) {
    let invertedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      invertedString += string[i];
    }
    return invertedString;
  }
  

  let firstString = prompt("Digite uma palavra: ");
  let invertedString = reverseString(firstString);
  console.log(invertedString);