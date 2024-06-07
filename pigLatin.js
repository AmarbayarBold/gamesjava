//
// retreieves input data +splits into word + translates to PigLatin
// displays the output
//

function translateToPigLatin () {
  const input = document.getElementById("englishInput").value;
  
  const words = input.split(" ");
  const pigLatinWords = words.map(word => {
    return convertToPigLatin(word);
  });

  const output = pigLatinWords.join(" ");
  document.getElementById("pigLatinOutput").innerText = output;
}

//
// vowels are defined, if first Letter is vowel +"way"
// converts words to lowercase
//

function convertToPigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let lowerCaseWord = word.toLowerCase();
  if (vowels.includes(lowerCaseWord[0])) {
    return lowerCaseWord + "way";
  } else if (!vowels.includes(lowerCaseWord[0]) && !vowels.includes(lowerCaseWord[1])) {
  //  
  // check if the first two letters are consonants(letters that are not vowels)
  // if yes + "ay"
  //  
    return lowerCaseWord.slice(2) + lowerCaseWord.slice(0, 2) + "ay";
  } else {
  //
  // if the first letter us consonant then vowel
  // first letter moves backend + "ay"
  //  
    return lowerCaseWord.slice(1) + lowerCaseWord[0] + "ay";
  }
}