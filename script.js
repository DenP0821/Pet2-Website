// Выбор элементов в DOM-структуре
const switchPseudoElement = document.getElementById("switch");
const switchInput = document.querySelector(".switcher__input");
const switchSlider = document.querySelector(".switcher__slider");
const marqueeContent = document.querySelectorAll(".marquee-content");
const parent = document.getElementById("parent");

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

const element =
  parent.querySelector(
    ".element"
  ); /* Родительский элемент выбран в начале файла. Здесь выбран необходимый дочерний элемент для его клонирования. */
let clone = element.cloneNode(true); /* Клонирование дочернего элемента */
/* Далее меняется текст по необходимым индексам элементов в копии (индекс считается с 0, как в массиве) */
clone.children[4].textContent = "Сектор Газа";
clone.children[5].textContent =
  "История группы “Сектор Газа” – это феноменальный пример народного панк-рока, зародившегося в позднем СССР и расцветшего в 90-е годы. Основанная в 1987 году в Воронеже Юрием “Хоем” Клинских, группа быстро завоевала популярность благодаря своим простым, но запоминающимся мелодиям, хулиганским текстам и искренней энергетике. “Сектор Газа” пели о жизни обычных людей, об их проблемах и радостях, не стесняясь использовать ненормативную лексику и затрагивать табуированные темы. Изначально группа выступала на площадках Воронежского рок-клуба, где быстро стала известной благодаря своим провокационным выступлениям и нестандартным текстам. Первые альбомы, записанные в полупрофессиональных условиях, распространялись среди поклонников на кассетах и быстро обрели культовый статус";
clone.children[6].textContent =
  "В начале 90-х “Сектор Газа” выходит на общероссийскую сцену. Их песни начинают звучать на радио, а клипы – появляться на телевидении. Альбомы “Колхозный панк” (1991), “Гуляй, мужик!” (1992), “Нажми на газ” (1993) становятся настоящими хитами, а концерты группы собирают полные залы по всей стране. “Сектор Газа” отличался от других рок-групп своей прямотой и бескомпромиссностью. Они пели о жизни, как она есть, без прикрас и цензуры. При этом “Сектор Газа” никогда не боялись экспериментировать со звуком, добавляя в свою музыку элементы диско, рэпа и других жанров.";
clone.children[7].textContent =
  "Несмотря на свою популярность, “Сектор Газа” часто подвергались критике за свои тексты, которые многие считали вульгарными и аморальными. Однако, это не мешало группе продолжать свою деятельность и собирать всё больше поклонников. В конце 90-х “Сектор Газа” выпускает несколько альбомов, в которых заметно меняется звучание группы. Тексты песен становятся более серьезными и социальными, а музыка – более мелодичной и профессиональной. Также последние альбомы заметно прибавили в композициях на фэнтезийную тему, зачастую обращаясь к восточно-славянской мифологии.";
clone.children[8].textContent =
  "В 2000 году Юрий “Хой” Клинских внезапно скончался. Его смерть стала огромной потерей для российской рок-музыки и для поклонников “Сектора Газа”. После смерти лидера группа прекратила свое существование. “Сектор Газа” оставил яркий след в истории российской рок-музыки. Их песни до сих пор слушают и любят многие, а их творчество оказало большое влияние на развитие отечественного панк-рока.";

parent.appendChild(clone); /* Помещаем новый дочерний элемент в DOM-структуру */
