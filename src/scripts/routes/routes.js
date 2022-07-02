/* eslint-disable import/extensions */
import HomeSl from '../views/pages/home.js';
import Detail from '../views/pages/detail.js';
import Favorite from '../views/pages/favorite.js';

const routes = {
  '/': HomeSl, // default page
  '/home': HomeSl,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
