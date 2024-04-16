const ABOUT = '#about-start';
const ABOUT_ITEM = '.about__content__item';
const ABOUT_DETAIL = '.about__detail';
const ABOUT_DETAIL_TEXT = '.about__detail__text';
const ABOUT_DETAIL_IMG = '.about__detail__img';
const ABOUT_CLOSE = '.about__detail__close';
const ARTISTS = '.artists';
const ARTISTS_MORE = ARTISTS + '__more';


function addListener(className, handler, event = 'click', keepEvent = false) {
  Array.from(getAll(className))
    .forEach(element => element.addEventListener(event, (e) => {
      if (keepEvent) {
        return handler(e);
      } else {
        handler(e.target);
      }
    }));
}

function getAll(className) {
  return document.querySelectorAll(className);
}

function get(className) {
  return document.querySelector(className);
}



function toggleArtists() {
  if (get(ARTISTS_MORE).innerHTML === 'More') {
    get(ARTISTS + '>div').style.maxHeight = '10000px';
    get(ARTISTS_MORE).innerHTML = 'Less';
  } else {
    get(ARTISTS + '>div').style.maxHeight = '812px';
    get(ARTISTS_MORE).innerHTML = 'More';

  }
}


window.addEventListener('load', (event) => {
  addListener(ARTISTS_MORE, toggleArtists);
})
