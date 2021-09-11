/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import GoblinClick from './GoblinClick';

document.addEventListener('DOMContentLoaded', () => {
  const goblinPlay = new GoblinClick();
  goblinPlay.createField();
  goblinPlay.punchGoblin.bind(goblinPlay)();
});