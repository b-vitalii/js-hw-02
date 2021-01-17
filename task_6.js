let input;
const numbers = [];
let total = 0;


    input = Number(prompt(`Enter a number please`));
    for (let i = 0; i !== null; i+=1) {
      if (input) {
        numbers.push(input);
        input = Number(prompt(`Enter a number please`));
        
      } else if (isNaN(input)) {
        alert(`You put not number, try againe`);
        break;
      } else {
        
        break;
      }
    }
for (let value of numbers) {
  total += value;
}
alert(`Total sum of numbers [${total}]`);
    
      