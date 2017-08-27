// Notes: queues are FIFO

// Crucial functionality: enqueue, dequeue, size

var Queue = function() {
  this._storage = [];
}

Queue.prototype.enqueue = function(val) {
  this._storage.unshift(val);
};

Queue.prototype.dequeue = function() {
  return this._storage.pop();
};

Queue.prototype.size = function() {
  return this._storage.length;
};