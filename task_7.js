const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginValid = function(login) {
       
     if ((login.length >= 4) && (login.length <= 16)) {
       return true; 
      }
    return false;
}


const isLoginUnique = function(allLogins, login) {
      if (allLogins.includes(login)) {
        return false;
      }      

    return true;
};


const addLogin = function(allLogins, login) {
      if (!isLoginUnique(allLogins, login)) {
        return `This login is already in use!`;
      } else if (!isLoginValid(login)) {
        return `Error! Login must be from 4 to 16 characters!`;
      } else {
        logins.push(login)
        return `Login successfully! added!`;
      }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'