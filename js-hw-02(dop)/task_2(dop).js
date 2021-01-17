// Написати ф-ю countVowels яка буде приймати строку
// і буде вертати кількість голосних літер. aeiouAEIOU - рядок з
// голосними в англ алфавіті
// countVowels('the quick brown fox') // 5

function countVowels(string) {
    let arrStr = string.split(``);
    let arr = [...`aeiouAEIOU`]
    let result = 0;

    for (let i = 0; i < arrStr.length; i+=1) {
        arr.includes(arrStr[i]) ? result+=1 : false;

    }
    return result; 
}
console.log(countVowels('the quick brown fox  e e ee ee e e e e e '));