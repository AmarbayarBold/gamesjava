
//
// form submission handled by eventlistener that prevents page refresh
// retrieved input values(phrase) used as arguments..
//

document.getElementById("cipherForm").addEventListener("submit", function(event) {
  event.preventDefault();
//retrieves input values from phrase and shift
  const phrase = document.getElementById("phrase").value;
  const shift = parseInt(document.getElementById("shift").value);
  //calling the caesar cipher function
  const result = caesarCipher(phrase, shift);
//result displayed
  document.getElementById("result").textContent = result;
});

//
// caesarCipher function processes each char in the string -> shifts alphabetic chars by #loc
// alphabets set in lowerCase, converted upperCase
// transformed string is displayed
//
function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = alphabet.toUpperCase();
  let result = "";

  for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (alphabet.includes(char)) {
          const newIndex = (alphabet.indexOf(char) + shift + 26) % 26;
          result += alphabet[newIndex];
      } else if (upperAlphabet.includes(char)) {
          const newIndex = (upperAlphabet.indexOf(char) + shift + 26) % 26;
          result += upperAlphabet[newIndex];
      } else {
          result += char;
      }
  }

  return result;
}