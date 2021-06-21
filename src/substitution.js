// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let actualAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"]
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) {
      return false
    }
    alphabetUnique = {}
    for (let i=0; i<alphabet.length; i++){
      if (alphabetUnique[alphabet[i]] != null){
        alphabetUnique[alphabet[i]] = 1; 
        return false
      } else {alphabetUnique[alphabet[i]] = 0};
    }
    let outputArray = [];
    if (encode){ 
     for (let i=0; i<input.length; i++){
        if (input[i] === " "){outputArray.push(" ")}
        let index = actualAlpha.indexOf(input[i]);
        outputArray.push(alphabet[index])
     }  
    }else{
      for (let i=0; i<input.length; i++){
        if (input[i] === " "){outputArray.push(" ")}
        let index = alphabet.indexOf(input[i]);
        outputArray.push(actualAlpha[index])
     }  
    }
    return outputArray.join("")
  }
  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
