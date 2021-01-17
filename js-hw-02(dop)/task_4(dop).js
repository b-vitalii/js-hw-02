// Написати ф-ю що приймає число (температура в цельсіях) і виводить
// результат в фаренгейтах

function converTemp(celsius) {
    let farengate = celsius * (9/5) + 32;
    return `Degrees of F = ${farengate}`;
}

console.log(converTemp(40));