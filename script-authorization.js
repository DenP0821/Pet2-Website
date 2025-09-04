// Выбор элементов в DOM-структуре
const authButton = document.querySelector(".auth-button");
const inputLogin = document.querySelector(".input1");
const inputPassword = document.querySelector(".input2");
const checkboxInput = document.querySelector(".checkbox-input");
const alertEmpty = document.querySelector(".alert-empty");
const loginLabel = document.querySelector(".login-label");
const passwordLabel = document.querySelector(".password-label");

// ///////////////////////////////////////////////////////////
// Показать/скрыть пароль (чекбокс)
// ///////////////////////////////////////////////////////////

checkboxInput.addEventListener("change", function () {
  if (checkboxInput.checked) {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
}); /* Слушатель события на изменение состояния чекбокса (если checked - показываем пароль изменением типа инпута на текст, в противном случае возвращаем тип - пароль) */

// ///////////////////////////////////////////////////////////
// Автоматизация работы окна авторизации (+практика RegEx)
// ///////////////////////////////////////////////////////////

authButton.addEventListener("click", function () {
  emptyLogPass(); /* Слушатель события на клик по кнопке "Зарегистрироваться" - баннер о необходимости заполнить поле логина и пароля */
  submitForm(); /* Имитация отправки формы - редирект на главную страницу */
});

function alertEmptyBanner() {
  alertEmpty.style.display =
    "block"; /* При вызове функции - баннер с предупреждением появляется */
  inputLogin.style.border =
    "2px solid #ff0000"; /* При вызове функции - рамка инпута окрашивается в красный цвет */
  inputPassword.style.border =
    "2px solid #ff0000"; /* При вызове функции - рамка инпута окрашивается в красный цвет */
  setTimeout(
    () => (alertEmpty.style.display = "none"),
    2000
  ); /* По истечении 2 секунд по таймауту - скрытие баннера */
  setTimeout(
    () => (inputLogin.style.border = ""),
    2000
  ); /* По истечении 2 секунд по таймауту - рамка возвращает свой цвет */
  setTimeout(
    () => (inputPassword.style.border = ""),
    2000
  ); /* По истечении 2 секунд по таймауту - рамка возвращает свой цвет */
}

function emptyLogPass() {
  if (inputLogin.value === "" || inputPassword.value === "") {
    alertEmptyBanner(); /* Если в поле логина и/или пароля пусто, при попытке нажатия кнопки всплывает предупреждение */
    return; /* Функция далее не выполняется */
  }
}

const patternsRegEx = {
  login: /^[a-zA-Z\d@_-]{5,12}$/,
  password:
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[^a-zA-Z\d])([^;:'"`.,]){8,20}$/,
}; /* Регулярные выражения в виде объекта-шаблона для логина и пароля. Работа согласована посредством атрибута name у инпутов */

function validateLogin(field, regex) {
  if (regex.test(field.value) === false) {
    field.style.border =
      "2px solid #ff0000"; /* Если логин не удовлетворяет требованиям регулярного выражения - рамка инпута становится красной */
    loginLabel.style.display = "block"; /* Баннер с подсказкой появляется */
  } else {
    field.style.border =
      ""; /* В противном случае (если удовлетворяет) - рамка инпута не окрашивается */
    loginLabel.style.display = "none"; /* Баннер с подсказкой исчезает */
  }
  if (field.value === "") {
    field.style.border =
      ""; /* Если в поле ввода инпута пусто - рамка инпута не окрашивается */
    loginLabel.style.display = "none"; /* Баннер с подсказкой также исчезает */
  }
}

function validatePassword(field, regex) {
  if (regex.test(field.value) === false) {
    field.style.border =
      "2px solid #ff0000"; /* Если пароль не удовлетворяет требованиям регулярного выражения - рамка инпута становится красной */
    passwordLabel.style.display = "block"; /* Баннер с подсказкой появляется */
  } else {
    field.style.border =
      ""; /* В противном случае (если удовлетворяет) - рамка инпута не окрашивается */
    passwordLabel.style.display = "none"; /* Баннер с подсказкой исчезает */
  }
  if (field.value === "") {
    field.style.border =
      ""; /* Если в поле ввода инпута пусто - рамка инпута не окрашивается */
    passwordLabel.style.display =
      "none"; /* Баннер с подсказкой также исчезает */
  }
}

inputLogin.addEventListener("keyup", (e) => {
  validateLogin(e.target, patternsRegEx[e.target.attributes.name.value]);
}); /* Слушатель события на "отжатие" клавиши - проверка введённого в инпут логина */

inputPassword.addEventListener("keyup", (e) => {
  validatePassword(e.target, patternsRegEx[e.target.attributes.name.value]);
}); /* Слушатель события на "отжатие" клавиши - проверка введённого в инпут пароля */

function submitForm() {
  if (
    loginLabel.style.display === "none" &&
    passwordLabel.style.display === "none" &&
    inputLogin.value != "" &&
    inputPassword.value != ""
  ) {
    inputLogin.style.border = "2px solid #00ff00";
    inputPassword.style.border = "2px solid #00ff00";
    setTimeout(() => (window.location.href = "index.html"), 1500);
  }
} /* Имитация отправки формы. За условия взяты отсутствие подзказок-алертов у логина и пароля, а также поле обоих инпутов не должно быть пустым. */
/* Если все условия выполнены - рамки инпутов окрашиваются в зелёный, а через 1.5 секунды по таймауту происходит редирект на главную страницу. */
/* P.S: Для тех, кто посмотрит на это - понимаю, что можно сделать лаконичнее. Но, на момент написания, я ещё не набрался опыта в этом крайне интересном деле. Всё впереди :) */
