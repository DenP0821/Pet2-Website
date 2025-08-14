// Выбор элементов в DOM-структуре
const toTopBtn = document.querySelector(".to-top");

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
