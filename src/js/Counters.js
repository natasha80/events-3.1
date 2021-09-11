/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export default class Counters {
  constructor() {
    this.damagedDiv = document.querySelector('.damaged');
    this.healthyDiv = document.querySelector('.healthy');
    this.damagedCounter = 0;
    this.healthyCounter = 0;
  }

  increaseDamaged() {
    this.damagedCounter++;
    this.damagedDiv.innerText = this.damagedCounter;
  }

  increaseHealthy() {
    this.healthyCounter++;
    this.healthyDiv.innerText = this.healthyCounter;
  }
}