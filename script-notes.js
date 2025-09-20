// Выбор элементов в DOM-структуре
const inputElement = document.getElementById("input");
const createButton = document.getElementById("create");
const listElement = document.getElementById("list");
const customAlertEmpty = document.querySelector(".custom-alert__empty");
const customAlertSpace = document.querySelector(".custom-alert__space");
const toTopBtn = document.querySelector(".to-top");
const menu = document.querySelector(".menu");
const listBar = document.querySelector(".list-alternate");
const overlay = document.querySelector(".overlay");

// ///////////////////////////////////////////////////////////
// Автоматизация работы заметок
// ///////////////////////////////////////////////////////////

createButton.addEventListener("click", function () {
  addTask(); /* Слушатель события на клик по кнопке "Добавить заметку" - функция добавить заметку */
});

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask(); /* Слушатель события на нажатие клавиши Enter - функция добавить заметку */
  }
});

function alertEmpty() {
  customAlertEmpty.style.display =
    "block"; /* При вызове функции - баннер с предупреждением появляется */
  inputElement.style.border =
    "2px solid #ff0000"; /* При вызове функции - рамка инпута окрашивается в красный цвет */
  setTimeout(
    () => (customAlertEmpty.style.display = "none"),
    2000
  ); /* По истечении 2 секунд по таймауту - скрытие баннера */
  setTimeout(
    () => (inputElement.style.border = "none"),
    2000
  ); /* По истечении 2 секунд по таймауту - рамка скрывается */
}

function alertSpace() {
  customAlertSpace.style.display =
    "block"; /* При вызове функции - баннер с предупреждением появляется */
  inputElement.style.border =
    "2px solid #ff0000"; /* При вызове функции - рамка инпута окрашивается в красный цвет */
  setTimeout(
    () => (customAlertSpace.style.display = "none"),
    2000
  ); /* По истечении 2 секунд по таймауту - скрытие баннера */
  setTimeout(
    () => (inputElement.style.border = "none"),
    2000
  ); /* По истечении 2 секунд по таймауту - рамка скрывается */
}

function addTask() {
  if (inputElement.value === "") {
    alertEmpty(); /* Если в Input пусто, при попытке добавления заметки всплывает предупреждение */
  } else if (/^\s/.test(inputElement.value)) {
    alertSpace(); /* Если в Input пробелы без текста или пробелы перед текстом - предупреждениe */
    return; /* Функция далее не выполняется (проверка пробелов регулярным выражением) */
  } else {
    let listItem =
      document.createElement("li"); /* Создаём элемент списка (заметку) */
    listItem.innerHTML =
      inputElement.value; /* Присваиваем заметке значение, введённое в Input */
    listElement.appendChild(listItem); /* Помещаем заметку в список (ul) */
    let spanAfter =
      document.createElement(
        "span"
      ); /* Создаём инлайн-элемент span (для крестика после заметки) */
    spanAfter.innerHTML =
      "\u00d7"; /* Присваиваем span Юникод-символ - крестик */
    listItem.appendChild(spanAfter); /* Помещаем span в заметку */
  }
  inputElement.value = ""; /* Обнуляем значение инпута для нового ввода */
  saveData(); /* Вызов функции для сохранения изменений в локальное хранилище браузера */
}

listElement.addEventListener("click", function (element) {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle(
      "checked"
    ); /* Поиск элемента li внутри списка (ul). Позволяет применять ко всем li класс checked (выполнено) */
    saveData(); /* Вызов функции для сохранения изменений в локальное хранилище браузера */
  } else if (element.target.tagName === "SPAN") {
    element.target.parentElement.remove(); /* Поиск элемента span внутри списка (ul). Позволяет применить эффект удаления заметки при нажатии на крестик */
    saveData(); /* Вызов функции для сохранения изменений в локальное хранилище браузера */
  }
});

function saveData() {
  localStorage.setItem(
    "data",
    listElement.innerHTML
  ); /* Помещаем данные списка (ul) в локальное хранилище, присваиваем ключ "data" */
}

function showData() {
  listElement.innerHTML =
    localStorage.getItem(
      "data"
    ); /* Получаем данные из хранилища по ключу "data" и помещаем обратно в список */
}

showData(); /* Вызов функции для вывода сохранённых данных из локального хранилища обратно в документ */

// ///////////////////////////////////////////////////////////
// "Прокрутка" страницы вверх
// ///////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  window.onscroll = function () {
    if (window.pageYOffset > 600) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  }; /* Слушатель события на HTML-документ, инициализируется после построения DOM (DOMContentLoaded). Если страница "прокручена" по оси Y на 600px от начала - кнопка "Вверх" отобразится, иначе - скроется. */

  // Плавный скролл вверх
  toTopBtn.addEventListener("click", function () {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }); /* Метод window.scrollBy() позволяет прокручивать документ в окне на заданное количество пикселей. document.documentElement.scrollHeight - общая высота содержимого документа (с минусом - прокрутка вверх). behavior: "smooth" - плавная прокрутка.  */
});

// ///////////////////////////////////////////////////////////
//  Навигационное меню с бургер-кнопкой для малых экранов
// ///////////////////////////////////////////////////////////
menu.addEventListener("click", () => {
  menu.classList.toggle(
    "clicked"
  ); /* Нажатие на кнопку меню - смена класса (полоски/крестик) */
  listBar.classList.toggle(
    "show"
  ); /* Нажатие на кнопку меню - показать/скрыть нав.панель */
  if (menu.classList.contains("clicked")) {
    overlay.style.display = "block";
    toggleBodyScroll(true); /* Функция для "отключения" прокрутки страницы" */
  } else {
    overlay.style.display =
      "none"; /* Применение затемняющего оверлея, если кнопка меню "нажата", иначе - оверлей скрывается */
    toggleBodyScroll(false); /* Функция для "включения" прокрутки страницы" */
  }
});

overlay.addEventListener("click", () => {
  if (
    menu.classList.contains("clicked") &&
    listBar.classList.contains("show")
  ) {
    menu.classList.remove("clicked");
    listBar.classList.remove("show");
    overlay.style.display = "none";
    toggleBodyScroll(false);
  }
}); /* Реализация возможности нажатия на пустое место вне открытой нав.панели - позволяет скрыть нав.панель, убрать оверлей, вернуть кнопку меню в исходное состояние и разрешить прокрутку страницы. Для удобства. */

function toggleBodyScroll(lock) {
  document.body.style.overflow = lock ? "hidden" : "";
} /* Функция для "выключения/включения" прокрутки страницы */
