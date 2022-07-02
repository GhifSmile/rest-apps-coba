/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { keys } from 'regenerator-runtime';
import data from '../DATA.json';

const main = () => {
  // Bagian nampilin restaurant
  let restaurantElement = '';
  data.restaurants.forEach((resto) => {
    restaurantElement += `
        <div class="card" tabindex="0">
            <img class="lazyload" data-src="${resto.pictureId}" alt="${resto.name} image" style="width:100%">
            <div class="content">
                <p class="name"><b>${resto.name}</b></p>
                <p class="title">Location: ${resto.city}</p>
                <p class="rating">Rating: ${resto.rating}</p>
            </div>
        </div>
        `;
  });

  document.querySelector('.hasilSearch').innerHTML = restaurantElement;

  // Bagian responsibilitas navbar
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navbarSec');
  const mainElement = document.querySelector('#maincontent');

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

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-act');
    if (getComputedStyle(nav).transform == 'matrix(1, 0, 0, 1, 0, 0)') {
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

  /** ********************************************** */
};

export default main;
