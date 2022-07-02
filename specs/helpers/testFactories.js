/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { async } from 'regenerator-runtime';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithResto = async (rest) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    rest,
  });
};

export { createLikeButtonPresenterWithResto };
