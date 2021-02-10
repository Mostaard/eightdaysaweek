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


function openAbout(element) {
  const aboutItem = element.closest(ABOUT_ITEM);
  const aboutText = aboutItem.querySelectorAll('p');
  const aboutTitle = aboutItem.querySelector('h3').innerHTML;
  const aboutImg = aboutItem.querySelector('img');

  get('body').classList.add('overlaid');
  get(ABOUT_DETAIL_TEXT).innerHTML = '';
  get(ABOUT_DETAIL).classList.add('show');
  aboutText.forEach(p => {
    const newP = p.cloneNode(true);
    newP.classList.remove('sr-only')
    get(ABOUT_DETAIL_TEXT).appendChild(newP);
  })
  get(ABOUT_DETAIL + ' h3').innerHTML = aboutTitle;
  get(ABOUT_DETAIL_IMG).src = aboutImg.src;
  get(ABOUT_DETAIL_IMG).alt = aboutImg.alt;
  get(ABOUT).scrollIntoView({behavior: 'smooth'});

}

function closeAbout() {
  get('body').classList.remove('overlaid');
  get(ABOUT_DETAIL).classList.remove('show');
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
  addListener(ABOUT_ITEM, openAbout);
  addListener(ABOUT_CLOSE, closeAbout);
  addListener(ABOUT_CLOSE, closeAbout);
  addListener(ARTISTS_MORE, toggleArtists);

})
