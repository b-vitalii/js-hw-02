// Написати ф-ю calculateDogAge яка приймає один
// параметр - вік собачки. Результатом її роботи буде вік перевединий
// на людський (1 рік собаки це 7 років в людини)

function ConvertToHumanAge(dogAge) {
    let result = dogAge * 7;
    return `Dog's age in humans years = ${result}`;
}
console.log(ConvertToHumanAge(10));