/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { keys } from 'regenerator-runtime';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;

    this.main();
  }

  main() {
    // Bagian responsibilitas navbar

    const navRem = () => {
      const navbar = document.getElementsByClassName('navItem');
      for (let i = 0; i < navbar.length; i++) {
        navbar[i].setAttribute('tabindex', '-1');
      }
    };

    const navExist = () => {
      const navbar = document.getElementsByClassName('navItem');
      for (let i = 0; i < navbar.length; i++) {
        navbar[i].setAttribute('tabindex', '0');
      }
    };

    this.button.addEventListener('click', () => {
      this.drawer.classList.toggle('nav-act');
      if (getComputedStyle(this.drawer).transform == 'matrix(1, 0, 0, 1, 0, 0)') {
        navRem();
      } else {
        navExist();
      }
    });

    const widthMatchMax = window.matchMedia('(max-width: 695px)');

    const myFunction = (x) => {
      if (x.matches) {
        navRem();
      } else {
        navExist();
      }
    };

    widthMatchMax.addListener(myFunction);
    myFunction(widthMatchMax);
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
