'use strict';

const actual = (level, text, styling) => {
  const hEl = document.createElement(`h${level}`);
  hEl.className = styling;
  hEl.innerText = text;

  return hEl;
};
