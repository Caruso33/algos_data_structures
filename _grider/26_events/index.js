// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    if (this.events[event]) this.events[event].push(cb);
    else this.events[event] = [cb];
  }

  trigger(event) {
    if (this.events[event]) this.events[event].forEach(cb => cb());
  }

  off(event) {
    delete this.events[event];
  }
}

module.exports = Events;
