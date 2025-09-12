// Выбор элементов в DOM-структуре
const toTopBtn = document.querySelector(".to-top");
const menu = document.querySelector(".menu");
const listBar = document.querySelector(".list-alternate");

// ///////////////////////////////////////////////////////////
// Анимация появления элементов на странице
// ///////////////////////////////////////////////////////////
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("show-element");
    }
  });
} /* Перебираем элементы с помощью "forEach". Ко всем элементам, которые пересекают заданную границу во viewport (isIntersecting возвращает true) - добавляется CSS-класс. */

let options = {
  threshold: [0.4],
}; /* Граница для пересечения - 40% вхождения элемента во viewport */

let observer = new IntersectionObserver(
  onEntry,
  options
); /* Конструктор, который создаёт объект-наблюдатель для отслеживания пересечения */
let elements =
  document.querySelectorAll(
    ".animate-element"
  ); /* Навешиваем в HTML-документе класс "animate-element и собираем все элементы, которые хотим анимировать. */

for (let elm of elements) {
  observer.observe(elm);
} /* Цикл "for...of" перебирает элементы с заданным классом и сохраняет в переменной "elm". Отслеживаем с помощью метода "observe" все пересечения элементов. */

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
  ); /* Нажатие на кнопку меню - показать/скрыть нав.меню */
});
