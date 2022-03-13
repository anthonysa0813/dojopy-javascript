/* 
  Existen palabras que al derecho y alrevés la palabra se lee igual
  por ejemplo: ana, ada
  Realiza una función que identifique si es o no un palindrono.
*/

function isPalindrome(word) {
  // .....
  // si es o no palindrome  "the name ${word} isnt' palindrome"
}

function palindromoWord(word) {
  const separateWorld = word.split("");
  const wordReverse = separateWorld.reverse().join("");
  console.log(wordReverse);
  if (word === wordReverse) {
    console.log(`${word} si es un palindromo`);
  } else {
    console.log(`${word} no es un palindromo`);
  }
}

palindromoWord("ana");
