/* eslint-disable no-restricted-syntax */
const getCategories = (resto) => {
  let values = '';
  for (const value of resto.categories) {
    values += `${value.name}, `;
  }
  return values.slice(0, -2);
};

const getFoods = (resto) => {
  let values = '';
  for (const value of resto.menus.foods) {
    values += `${value.name}, `;
  }
  return values.slice(0, -2);
};

const getDrinks = (resto) => {
  let values = '';
  for (const value of resto.menus.drinks) {
    values += `${value.name}, `;
  }
  return values.slice(0, -2);
};

const getReview = (resto) => `
<div class="reviewItem">
    <p class="reviewText" tabindex="0"><b>Name: </b>${resto.name}</p>
    <p class="reviewCom" tabindex="0">${resto.review}</p>
    <p class="dateReview" tabindex="0">${resto.date}</p>
</div>
`;

export {
  getCategories, getFoods, getDrinks, getReview,
};
