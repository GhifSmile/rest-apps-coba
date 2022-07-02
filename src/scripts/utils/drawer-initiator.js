/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      drawer.classList.toggle('nav-act');
      // eslint-disable-next-line eqeqeq
      if (getComputedStyle(drawer).transform == 'matrix(1, 0, 0, 1, 0, 0)') {
        this._navRem(event, drawer);
      } else {
        this._navExist(event, drawer);
      }
    });

    const widthMatchMax = window.matchMedia('(max-width: 695px)');

    const myFunction = (x) => {
      if (x.matches) {
        this._navRem(event, drawer);
      } else {
        this._navExist(event, drawer);
      }
    };

    widthMatchMax.addListener(myFunction);
    myFunction(widthMatchMax);
  },

  _navRem(event, drawer) {
    const navbar = document.getElementsByClassName('navItem');
    for (let i = 0; i < navbar.length; i++) {
      navbar[i].setAttribute('tabindex', '-1');
    }
  },

  _navExist(event, drawer) {
    const navbar = document.getElementsByClassName('navItem');
    for (let i = 0; i < navbar.length; i++) {
      navbar[i].setAttribute('tabindex', '0');
    }
  },
};

export default DrawerInitiator;
