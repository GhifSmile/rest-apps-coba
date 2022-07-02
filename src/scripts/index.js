import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// eslint-disable-next-line import/extensions
import App from './views/app.js';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('.burger'),
  drawer: document.querySelector('.navbarSec'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
