
const findLongestWord = function(string) {
    // твой код
    let strArr = string.split(` `);
    let longestWord = String();
    
    for (let i = 0; i < strArr.length; i+=1) {
        if(strArr[i].length > longestWord.length){
            longestWord = strArr[i];
        }
    }
    return longestWord;
  };
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  console.log(findLongestWord('Google do a roll')); // 'Google'
  console.log(findLongestWord('May the force be with you')); // 'force'