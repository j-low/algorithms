function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var newTail = makeNode(value);

  if(!this.head) {
    this.head = newTail;
    this.tail = newTail;
  } else {
    this.tail.next = newTail;
    this.tail = newTail;
  }

  return this; 
};

LinkedList.prototype.removeHead = function() {
  var oldHead = this.head;

  if(this.head) {
    this.head = this.head.next;
  }

  return oldHead;
};

LinkedList.prototype.contains = function(value, currentNode) {
  var found = false;
  currentNode = currentNode || this.head;

  if(currentNode.value === value) {
    found = true;
    return found;
  }

  if(currentNode.next) {
    return this.contains(value, currentNode.next)
  } else {
    return found;
  }
};

LinkedList.prototype.findAndRemove = function(value, currentNode, previousNode) {
  currentNode = currentNode || this.head;
  
  if(currentNode) {
    if(currentNode.value === value) { // found
      if(previousNode) { // not at head
        previousNode.next = currentNode.next;
      } else { // at head
        this.head = currentNode.next;
      }
      
      if(!currentNode.next) { // at tail
        this.tail = previousNode;
      }
      return currentNode;
    } else { // not found
      if(currentNode.next) { // tail not reached
        previousNode = currentNode;
        currentNode = currentNode.next;
        
        return this.findAndRemove(value, currentNode, previousNode);
      } else { // tail reached
        return null;
      }
    }
  } else {
    return null;
  }
};

LinkedList.prototype.reverse = function() {
  var secondNode = this.head ? this.head.next : null,
      thirdNode = this.head && this.head.next ? this.head.next.next : null,
      previousNode,
      currentNode,
      nextNode;

      // if list length == 0 || 1, no reversal is necessary
      if(!this.head || !this.head.next) {
        return this;
      }

      // if list length == 2
      if(!secondNode.next) {
        this.head.next = null;
        secondNode.next = this.head;
        
        this.tail = this.head;
        this.head = secondNode;

        return this;
      }

      this.head.next = null;
      secondNode.next = this.head;
      
      previousNode = thirdNode;
      currentNode = thirdNode.next;
    
      thirdNode.next = secondNode;
      
      // if list length == 3
      if(!currentNode) {
        this.tail = this.head;
        this.head = thirdNode;

        return this;
      }

      // if list length >= 4
      nextNode = currentNode.next;
      currentNode.next = previousNode;

      while(nextNode) {
        previousNode = currentNode;
        currentNode = nextNode;
        nextNode = currentNode.next;

        currentNode.next = previousNode;
      }

      this.tail = this.head;
      this.head = currentNode;

      return this;
};

var makeNode = function(value) {
  return { value: value, next: null };
};

//
var test = new LinkedList();
test.addToTail(1);
test.addToTail(2);
test.addToTail(3);
test.addToTail(4);
test.addToTail(5);

// console.log(test.contains(5));

// console.log(test.findAndRemove(1));
// console.log(test.findAndRemove(3));
// console.log(test.findAndRemove(5));
// console.log('Value removed: ', test);

// console.log('Reversed: ', test.reverse());
