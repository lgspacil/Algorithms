function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
};

LinkedList.prototype.size = function() {
  var current = this.head;
  var count = 0;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
};

LinkedList.prototype.prepend = function(val) {
  var newNode = {
    data: val,
    next: this.head
  };

  this.head = newNode;
};

LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
    return;
  }

  var current = this.head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
};

LinkedList.prototype.contains = function(val) {
  var current = this.head;

  while (current !== null) {
    if (current.data === val) {
      return true;
    }
    current = current.next;
  }

  return false;
};

LinkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }

  if (this.head.data === val) {
    this.head = this.head.next;
    return;
  }

  var prev = null;
  var curr = this.head;

  while (curr.data !== val) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;
};

LinkedList.prototype.reverse = function() {
  var current = this.head;
  var prev = null;
  var next;

  while(current != null){
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
}

LinkedList.prototype.print = function() {
  var output = '[';
  var current = this.head;

  while (current !== null) {
    output += current.data;
    if (current.next !== null) {
      output += ', ';
    }
    current = current.next;
  }

  output += ']';
  console.log(output);
};


//PRINTING THE NODES WITH RECURSION
LinkedList.prototype.printRec = function(node){
  if(node == null){
    return
  }
  console.log(node.data);
  list.printRec(node.next);
};

//printing the node in reverse order with recursion
LinkedList.prototype.printRec_reverse = function(node){
  if(node == null){
    return
  }
  list.printRec_reverse(node.next);
  console.log(node.data);
}

// Testing our linked list
var list = new LinkedList();
list.append(10);
list.append(15);
list.append(20);
list.append(25);
list.prepend(5);
list.print(); // [5, 10, 15, 20, 25]
list.reverse();
list.print();
console.log(list.contains(10));
console.log(list.isEmpty());

// console.log("printing with recursion");
// list.printRec_reverse(list.head);

// console.log('\nReversing the list..')
// list.reverse();

// list.print();

// console.log('\nRemoving 20 from our list:');
// list.remove(20);
// list.print(); // [5, 10, 15, 25]

// console.log('\nSize of list:');
// console.log(list.size()); // 4

// console.log('\nIs 10 in our list?');
// console.log(list.contains(10)); // True

// console.log('\nIs 20 in our list?');
// console.log(list.contains(20)); // False