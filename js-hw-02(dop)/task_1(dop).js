// Написати ф-ю capitalize яка буде приймати строку
// і буде вертати нову строку де кожне слово буде починатися з
// великої літери.

function capitalize(string) {
    
    let arrString = string.split(' ');
    let newString = ``;

    for(let element of arrString)
    newString += element.charAt(0).toUpperCase() + element.substr(1) + ` `;
    return newString;
  }

console.log(capitalize(`my dog go to the street and play with my ball`));
console.log(capitalize('the quick brown fox'));
