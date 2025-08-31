// Выбор элементов в DOM-структуре
const authButton = document.querySelector(".auth-button");
const authInput1 = document.querySelector(".input1");
const authInput2 = document.querySelector(".input2");
const alertEmpty = document.querySelector(".alert-empty");
const alertWrongLogin = document.querySelector(".alert__wrong-login");
const alertWrongPassword = document.querySelector(".alert__wrong-password");

// ///////////////////////////////////////////////////////////
// Автоматизация работы окна авторизации (+практика RegEx)
// ///////////////////////////////////////////////////////////

authButton.addEventListener("click", function () {
  emptyLogPass(); /* Слушатель события на клик по кнопке "Вход" - баннер о необходимости заполнить поле логина и пароля */
});

function alertEmptyBanner() {
  alertEmpty.style.display =
    "block"; /* При вызове функции - баннер с предупреждением появляется */
  authInput1.style.border =
    "2px solid #ff0000"; /* При вызове функции - рамка инпута окрашивается в красный цвет */
  authInput2.style.border =
    "2px solid #ff0000"; /* При вызове функции - рамка инпута окрашивается в красный цвет */
  setTimeout(
    () => (alertEmpty.style.display = "none"),
    2000
  ); /* По истечении 2 секунд по таймауту - скрытие баннера */
  setTimeout(
    () => (authInput1.style.border = ""),
    2000
  ); /* По истечении 2 секунд по таймауту - рамка возвращает свой цвет */
  setTimeout(
    () => (authInput2.style.border = ""),
    2000
  ); /* По истечении 2 секунд по таймауту - рамка возвращает свой цвет */
}

function emptyLogPass() {
  if (authInput1.value === "" || authInput2.value === "") {
    alertEmptyBanner(); /* Если в поле логина и/или пароля пусто, при попытке нажатия кнопки всплывает предупреждение */
    return; /* Функция далее не выполняется */
  }
}

/* В процессе */
