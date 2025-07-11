// Выбор элементов в DOM-структуре
const switchPseudoElement = document.getElementById("switch");
const switchSlider = document.querySelector(".switcher__slider");
const navList =
  document.querySelector("a"); /* Доработка после создания всех страниц */

// Дефолтный класс - псевдоэлемент переключателя
switchPseudoElement.classList.add("switch-sun");

// Слушатель событий на щелчок по слайдеру - изменение псевдоэлемента
switchSlider.addEventListener("click", () => {
  if ("click") {
    switchPseudoElement.classList.toggle("switch-moon");
    switchPseudoElement.classList.toggle("switch-sun");
  }
});
