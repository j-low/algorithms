// Notes: stacks are LIFO

// Crucial functionality: push, pop, size

var Stack = function() {
  this._storage = [];
}

Stack.prototype.push = function(val) {
  this._storage.push(val);
};

Stack.prototype.pop = function() {
  return this._storage.pop();
};

Stack.prototype.size = function() {
  return this._storage.length;
};

