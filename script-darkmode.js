// Выбор элементов в DOM-структуре
const switchPseudoElement = document.getElementById("switch");
const switchInput = document.querySelector(".switcher__input");
const switchSlider = document.querySelector(".switcher__slider");
const marqueeContent = document.querySelectorAll(".marquee-content");

// ///////////////////////////////////////////////////////////
// Переключение светлая/тёмная темы
// ///////////////////////////////////////////////////////////
// Создание и получение ключа styleMode из локального хранилища
let styleMode = localStorage.getItem("styleMode");

// Функция, отвечающая за включение тёмной тёмы.
const enableDarkStyle = () => {
  document.body.classList.add(
    "darkmode"
  ); /* Применение к телу страницы цветовой палитры тёмной темы */
  switchPseudoElement.classList.add(
    "switch-moon"
  ); /* "Смена" псевдоэлемента переключателя */
  marqueeContent.forEach(
    (item) =>
      item.classList.add(
        "marquee-content--darkmode"
      ) /* Так как marquee-content в HTML дублируется - с помощью forEach перебираем оба блока с обозначенным классом и применяем стиль к каждому блоку (инвертирование цвета PNG) */
  );
  localStorage.setItem(
    "styleMode",
    "dark"
  ); /* Присваиваем ключу styleMode строковое значение dark в локальном хранилище */
};

// Функция, отвечающая за выключение тёмной тёмы.
const disableDarkStyle = () => {
  document.body.classList.remove(
    "darkmode"
  ); /* Удаление цветовой палитры тёмной темы */
  switchPseudoElement.classList.remove(
    "switch-moon"
  ); /* "Смена" псевдоэлемента переключателя на исходный */
  marqueeContent.forEach(
    (item) =>
      item.classList.remove(
        "marquee-content--darkmode"
      ) /* Удаление инвертирования цвета PNG в бегущей строке */
  );
  localStorage.setItem(
    "styleMode",
    null
  ); /* "Обнуление" значения в локальном хранилище */
};

// Слушатель событий на щелчок по слайдеру - изменение темы + смена псевдоэлемента
switchSlider.addEventListener("click", () => {
  styleMode =
    localStorage.getItem(
      "styleMode"
    ); /* Получение ключа из локального хранилища "для клика". Необходимо для корректной работы слушателя событий. */
  if (styleMode !== "dark") {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
}); /* Если значение в локальном хранилище не равно "dark" - применяется функция для включения тёмной темы. Иначе - для её выключения. */

if (styleMode === "dark") {
  enableDarkStyle();
  switchInput.checked = true;
} /* Проверка локального хранилища (ключ "styleMode") на наличие записи "dark". Необходимо для того, чтобы при перезагрузке страницы тёмная тема корректно сохранялась + слайдер оставался в переключенном положении (метод checked для Input). */
