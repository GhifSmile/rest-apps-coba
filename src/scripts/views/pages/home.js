/* eslint-disable object-curly-spacing */
/* eslint-disable key-spacing */
import RestSource from '../../data/data';
import { createRestoItemTemplate } from '../templates/template-creator';

const HomeSl = {
  async render() {
    return `
        <picture class="heroPh">
            <source media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.jpg" alt="" tabindex="0">
            <img 
            src='./images/heros/hero-image_1-large.jpg' 
            alt="" tabindex="0"></img>
        </picture>

        <div class="catalog" id="catalog">
            <p tabindex="0" class="catalogTitle" id="catalogTitle">Restaurant Catalog</p>
        </div>
    
        <div class="hasilSearch" id="hasilSearch"></div>

        <div class="basaBasi">
            <hr>
            <h2 tabindex="0">What is this?</h2>
            <p tabindex="0">This is a restaurant catalog with references to restaurant locations.</p>
            <hr>
        </div>
        `;
  },

  async afterRender() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById('catalogTitle').focus({preventScroll:true});
    });
    const rest = await RestSource.nowRest();
    const restoContainer = document.querySelector('#hasilSearch');
    rest.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default HomeSl;
