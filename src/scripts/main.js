'use strict';

const form = document.querySelector('.subscription__form');

function stopRefreshing(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', stopRefreshing);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const languageSelector = document.querySelector('.top__language-container');
const menuSelector = document.querySelector('.top__language-container--menu');

const handleLanguageSelector = (selector) => (event) => {
  event.preventDefault();

  const list = selector.querySelector('ul');
  const selectorButton = selector.querySelector('.top__language');

  list.style.display = 'block';

  const chooseLanguage = (e) => {
    const chosenLanguage = e.target;

    e.stopPropagation();

    selector.firstElementChild.firstElementChild
      .textContent = chosenLanguage.textContent.trim();

    list.style.display = 'none';
    list.removeEventListener('click', chooseLanguage);
    selectorButton.removeEventListener('click', closeSelector);
  };

  const closeSelector = (e) => {
    e.stopPropagation();

    list.style.display = 'none';

    selectorButton.removeEventListener('click', closeSelector);
  };

  list.addEventListener('click', chooseLanguage);
  selectorButton.addEventListener('click', closeSelector);
};

languageSelector.addEventListener(
  'click',
  handleLanguageSelector(languageSelector),
);
menuSelector.addEventListener('click', handleLanguageSelector(menuSelector));
