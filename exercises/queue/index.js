// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = []
  }
  add(x) {
    this.data.unshift(x)
    return this.data[0]
  }
  remove(x) {
    return this.data.pop()
  }
  length() {
    return this.data.length
  }
  empty() {
    return this.data.length == 0
  }
}

module.exports = Queue;
