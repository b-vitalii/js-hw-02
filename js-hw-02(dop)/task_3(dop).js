// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і
// велечину базового шрифта ("20px") і вертає конвертований розмір в
// пікселях

function conversionValues(rems, baseSizePixel) {
    return `Result in px = ${rems * baseSizePixel}`;
}

console.log(conversionValues(2, 20));