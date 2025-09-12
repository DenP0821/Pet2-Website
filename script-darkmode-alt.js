// Выбор элементов в DOM-структуре
const switchPseudoElementAlt = document.getElementById("switch__alt");
const switchInputAlt = document.querySelector(".switcher-input__alt");
const switchSliderAlt = document.querySelector(".switcher-slider__alt");
const marqueeContentAlt = document.querySelectorAll(".marquee-content");

// ///////////////////////////////////////////////////////////
// Переключение светлая/тёмная темы
// ///////////////////////////////////////////////////////////
// Получение ключа styleMode из локального хранилища
let styleModeAlt = localStorage.getItem("styleMode");

// Функция, отвечающая за включение тёмной тёмы.
const enableDarkStyleAlt = () => {
  document.body.classList.add(
    "darkmode"
  ); /* Применение к телу страницы цветовой палитры тёмной темы */
  switchPseudoElementAlt.classList.add(
    "switch-moon"
  ); /* "Смена" псевдоэлемента переключателя */
  marqueeContentAlt.forEach(
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
const disableDarkStyleAlt = () => {
  document.body.classList.remove(
    "darkmode"
  ); /* Удаление цветовой палитры тёмной темы */
  switchPseudoElementAlt.classList.remove(
    "switch-moon"
  ); /* "Смена" псевдоэлемента переключателя на исходный */
  marqueeContentAlt.forEach(
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
switchSliderAlt.addEventListener("click", () => {
  styleModeAlt =
    localStorage.getItem(
      "styleMode"
    ); /* Получение ключа из локального хранилища "для клика". Необходимо для корректной работы слушателя событий. */
  if (styleModeAlt !== "dark") {
    enableDarkStyleAlt();
  } else {
    disableDarkStyleAlt();
  }
}); /* Если значение в локальном хранилище не равно "dark" - применяется функция для включения тёмной темы. Иначе - для её выключения. */

if (styleModeAlt === "dark") {
  enableDarkStyleAlt();
  switchInputAlt.checked = true;
} /* Проверка локального хранилища (ключ "styleMode") на наличие записи "dark". Необходимо для того, чтобы при перезагрузке страницы тёмная тема корректно сохранялась + слайдер оставался в переключенном положении (метод checked для Input). */
