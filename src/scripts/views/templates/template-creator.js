/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto, categories, foods, drinks) => `
<p class="detailTitle" id="detailTitle" tabindex="0"><b>${resto.name}</b></p>

<div class="detailInfo" id="detailInfo">
  <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name} image" style="width:100%">
  <div class="aboutDetail" id="aboutDetail">
    <p tabindex="0"><b>Address:</b></p>
    <p tabindex="0">${resto.address}</p>
    <p tabindex="0"><b>City:</b></p>
    <p tabindex="0">${resto.city}</p>
    <p tabindex="0"><b>Categories:</b></p>
    <p tabindex="0">${categories}<p>
    <p tabindex="0"><b>Rating:</b></p>
    <p tabindex="0">⭐️ ${resto.rating}</p>
  </div>
</div>

<div class="detailDesc">
  <p tabindex="0">${resto.description}</p>
</div>

<div class="detailFD">
  <p tabindex="0"><b>Foods:</b></p>
  <p tabindex="0">${foods}</p>
  <p tabindex="0"><b>Drinks:</b></p>
  <p tabindex="0">${drinks}</p>
</div>

<hr class="line">
<p class="reviewTitle" tabindex="0"><b>Reviews</b></p>
<div class="reviews" id="reviews"></div>

`;

const createRestoItemTemplate = (resto) => `
<div class="card" tabindex="0">
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name} image" style="width:100%">
<div class="content">
    <div class="name"><a href="${`/#/detail/${resto.id}`}"><section class="item">${resto.name}</section></a></div>
    <p class="title">Location: ${resto.city}</p>
    <p class="rating">Rating: ${resto.rating}</p>
</div>
</div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate, createRestoDetailTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate,
};
