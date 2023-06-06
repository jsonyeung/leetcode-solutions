class EventEmitter {
  constructor() {
    this.subscribers = {}
  }

  subscribe(event, cb) {
    if (this.subscribers[event] == null) {
        this.subscribers[event] = []
    }

    let index = this.subscribers.length
    this.subscribers[event].push(cb)

    return {
      unsubscribe: () => {
        this.subscribers[event].splice(index, 1)
      }
    };
  }

  emit(event, args = []) {
      const funcs = (this.subscribers[event] || [])
      return funcs.map((fn) => fn(...args))
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */