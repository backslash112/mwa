// Question 3:
// Build a pseudo-class named Clock that emits a tick event every 1 second.
// Build a script that creates one Clock object and bind to the ‘tick event,
// printing woohoo every time it gets one.

'use strict';

const EventEmitter = require('events');

class Clock extends EventEmitter {
  constructor() {
    super();

    this.tick();
  }

  tick() {
    setInterval(() => {
      console.log('tick');
      this.emit('tick');
    }, 1000);
  }
}


const clock = new Clock();
clock.on('tick', () => {
  console.log("woohoo");
})
