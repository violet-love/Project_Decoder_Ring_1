// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // let polybiusSquare = 
  //   ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  function textToNumbers(input){
    let polybiusSquare = 
    ['a','b','c','d','e','f','g','h','i','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let outputArray = [];
    let fInput = input.toLowerCase();
    fInput = fInput.replace('j','i');
    //console.log(fInput);
    for(let i = 0; i < fInput.length; i++){
     if (fInput[i]===" "){
            outputArray.push(" ");
     } else {
     let index = polybiusSquare.indexOf(fInput[i]);
     index += 1
    //  console.log(index);
     let yCoord = 1
     while (index > 5 ){
       index -= 5 
       yCoord += 1
     }
     index *= 10 
     yCoord += index
     outputArray.push(yCoord);
    }
    }
    //console.log(outputArray);
    return outputArray.join("");
  }
  function numbersToText(input){
    input = input.replace(' ', '  ')
    if (input.length % 2 == 1){
          return false
    }
    let polybiusSquare = 
    ['a','b','c','d','e','f','g','h','(i/j)','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let outputArray = [];
    for(let i = 0; i < input.length; i+=2){
      
      let xCoord = input[i];
      let yCoord = input[i+1];
      if (xCoord === ' ') {
        outputArray.push(' ')
      } else {
        //console.log(xCoord, yCoord)
        xCoord -= 1
        yCoord -= 1
        yCoord *= 5
        yCoord += xCoord
        //console.log(xCoord, yCoord)
  
        outputArray.push(polybiusSquare[yCoord])

      }
     
    };
    return outputArray.join("")  
  
  };
  function polybius(input, encode = true) {
    // your solution code here
    if (!isNaN(input[0])){
        return numbersToText(input);
   } else {
        return textToNumbers(input);
       }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
