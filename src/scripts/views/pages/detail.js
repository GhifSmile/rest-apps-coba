/* eslint-disable object-curly-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padded-blocks */
import UrlParser from '../../routes/url-parser';
import RestSource from '../../data/data';
import { createRestoDetailTemplate } from '../templates/template-creator';
import {
  getCategories, getFoods, getDrinks, getReview,
} from '../../component/detail-component';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
      <div class="detailPage" id="detailPage"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      // eslint-disable-next-line key-spacing
      document.getElementById('detailTitle').focus({preventScroll:true});
    });
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const rest = await RestSource.detailRest(url.id);
    const categories = getCategories(rest);
    const foods = getFoods(rest);
    const drinks = getDrinks(rest);
    const detailContainer = document.querySelector('#detailPage');
    detailContainer.innerHTML = createRestoDetailTemplate(rest, categories, foods, drinks);
    const reviewContainer = document.querySelector('.reviews');
    rest.customerReviews.forEach((resto) => {
      reviewContainer.innerHTML += getReview(resto);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      rest: {
        id: rest.id,
        name: rest.name,
        city: rest.city,
        description: rest.description,
        rating: rest.rating,
        address: rest.address,
        pictureId: rest.pictureId,
        categories: rest.categories,
        menus: rest.menus,
        customerReviews: rest.customerReviews,
      },
    });
    
  },
};

export default Detail;
