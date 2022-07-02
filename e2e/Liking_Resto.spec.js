/* eslint-disable eol-last */
/* eslint-disable comma-spacing */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
/* eslint-disable key-spacing */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */

const { async } = require("regenerator-runtime");
const assert = require('assert');
/* eslint-disable no-undef */
Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Liking Resto', async ({ I }) => {
  I.dontSeeElement('.card');
  
  I.amOnPage('/');

  I.wait(5);

  I.seeElement('.name a');

  const firstResto = locate('.name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.wait(5);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.name');

  const likedResto = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestoTitle,likedResto);
});

Scenario('Canceled liking resto', async ({ I }) => {
  I.dontSeeElement('.card');
  
  I.amOnPage('/');

  I.wait(5);

  I.seeElement('.name a');

  const firstResto = locate('.name a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);

  I.wait(5);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.seeElement('.name');

  const likedResto = await I.grabTextFrom('.name');

  assert.strictEqual(firstRestoTitle,likedResto);

  I.click(firstResto);

  I.wait(5);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.wait(3);

  I.dontSeeElement('.card');

});