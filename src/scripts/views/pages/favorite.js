/* eslint-disable key-spacing */
import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="favorite">
        <p class="favorite_heading" id="favorite_heading" tabindex="0"><b>Your Favorite Resto</b></p>
        <div id="resto" class="resto"></div>
    </div>
    `;
  },

  async afterRender() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      // eslint-disable-next-line object-curly-spacing
      document.getElementById('favorite_heading').focus({preventScroll:true});
    });
    const resto = await FavoriteRestoIdb.getAllResto();
    const restoContainer = document.querySelector('#resto');
    resto.forEach((rest) => {
      restoContainer.innerHTML += createRestoItemTemplate(rest);
    });
  },
};

export default Favorite;
