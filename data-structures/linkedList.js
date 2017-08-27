var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.removeHead = function() {
  if(this.head === null) {
    return;
  }
  
  var newHead = this.head.next,
      oldHead = this.head;


  this.head = newHead;

  return oldHead;
};

LinkedList.prototype.addToTail = function(value) {
  var newNode = makeNode(value);

  if(this.head === null) {
    this.head = newNode;
  }

  if(this.tail !== null) {
    this.tail.next = newNode;  
  }

  this.tail = newNode;

  return this;
};

LinkedList.prototype.contains = function(input, currentNode) {
  currentNode = currentNode || this.head;

  //check if currentNode.value is equal to input
  if(currentNode.value === input) {
    //yes -> return true
    return true;
  } else {
    //no -> check if end of list
    if(currentNode.next === null) {
      //end of list -> return false
      return false;
    } else {
      //not end of list -> check next node
      return this.contains(input, currentNode.next); 
    }
  }
};

LinkedList.prototype.reverse = function() { 
  var firstNode = this.head, 
      secondNode = this.head ? this.head.next : null, 
      thirdNode = (this.head && this.head.next) ? this.head.next.next : null,   
      previousNode, 
      currentNode, 
      nextNode;
      
      //*** general note: you don't set the head until you know there are no more nodes left to chain

  // *** LIST LENGTH 0 BLOCK ***
  if(this.head === null) {
    return this;
  }
  /////

  
  // *** LIST LENGTH 1 BLOCK ***
  this.tail = firstNode;
  
  if(this.head.next === null) {  //if there is not a second node, the head will also be at the first node
    this.head = firstNode;
    return this;
  }

  firstNode.next = null;  //setting the new tail to null
  /////


  // *** LIST LENGTH 2 BLOCK ***
  secondNode.next = firstNode;  //link the second node to the first

  if(thirdNode === null) { //if there is no third node, set the head at the second node
    this.head = secondNode;
    return this;
  }
  /////

  
  // *** LIST LENGTH 3 BLOCK ***
  currentNode = thirdNode.next; //link the third node to currentNode
  
  if(thirdNode.next === null) {  //if no fourth node, link third node to second, set head at third node
    thirdNode.next = secondNode;
    this.head = thirdNode;
    return this;
  }
  
  thirdNode.next = secondNode;
  /////

  
  // *** LIST LENGTH > 3 BLOCK ***
  previousNode = thirdNode; //set previous tag at third node
  nextNode = currentNode.next; //set next tag to next node in the chain (5th)
  currentNode.next = previousNode; //link current node to previous


  while(nextNode !== null) {  //while there is still another node in the chain beyond current
    previousNode = currentNode; //set previous tag at current tagged node
    currentNode = nextNode;  //move current tag along to the next node
    nextNode = nextNode.next; //move the next tag to the next node after current
    currentNode.next = previousNode; //link the current to the previous
  }
  
  this.head = currentNode; //finally, set the head tag at the current node and return
  return this;
  /////
};

var makeNode = function(input) {
  return { value: input, next: null };
};


// *** FOR TESTING FUNCTIONS ***

// List = new LinkedList();

// List.addToTail(1);
// List.addToTail(2);
// List.addToTail(3);
// List.addToTail(4);
// List.addToTail(5);
// List.addToTail(6);


// List.contains(3);
// List.contains(999);

// List.contains(1);
// List.removeHead();
// List.contains(1);

