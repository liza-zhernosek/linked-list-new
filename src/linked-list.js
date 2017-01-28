const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;   //initial length of linked list
    this._head = null;  //first node of linked list
    this._tail = null;  //last node of linked list
  }

  append(data) {
    var newNode;

    if (this.length === 0) {
      newNode = new Node(data, null, null);
      this._head = newNode;
    } else {
      newNode = new Node(data, this._tail, null);
      this._tail.next = newNode;
    }

    this.length++;
    this._tail = newNode;   
    return this;
  }

  head() {
    return this._head.data;
  }

  tail() {
    return this._tail.data;
  }

  _at(index) {
    var currentNode = this._head;
    for (var i = 0; i < index; i++) {   //iterate through linked list
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    return this._at(index).data;
  }

  insertAt(index, data) {
    var prevNode;
    var nextNode;
    var newNode;

    if (this.length === 0) {
      newNode = new Node(data, null, null);
      this._head = newNode;
      this._tail = newNode;
    } else {
      prevNode = this._at(index - 1);
      nextNode = this._at(index);
      newNode = new Node(data, prevNode, nextNode);

      prevNode.next = newNode;
      nextNode.prev = newNode;
    }
    this.length++;
    return this;
  }

  isEmpty() {
    if (this.length !== 0) {
      return false;
    } else {
      return true;
    }
  }

  clear() {
    this.length = 0;
    this._head = null;
    this._tail = null;
    return this;
  }

  deleteAt(index) {
    var nextNode;
    var prevNode;
    var currentNode;
    var tempNode;

    if (index === 0 && this.length !== 1) {
      tempNode = this._head.next;
      tempNode.prev = null;
      this._head = tempNode;
    } else if (index === 0 && this.length === 1) {
      this._head = null;
      this._tail = null;
    } else if (index === this.length - 1) {
      tempNode = this._tail.prev;
      tempNode.next = null;
      this._tail = tempNode;
    } else {
      currentNode = this._at(index);
      prevNode = currentNode.prev;
      nextNode = currentNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
    }
    this.length--;
    return this;
  }

  reverse() {
    var currentNode = this._head;
    var tempNode;

    while (currentNode !== null) {
      tempNode = currentNode.next;
      currentNode.next = currentNode.prev;
      currentNode.prev = tempNode;
      currentNode = tempNode;
    } 

    currentNode = this._tail;
    this._tail = this._head;
    this._head = currentNode;
    return this;
  }

  indexOf(data) {
    var currentNode = this._head;
    for (var i = 0; i < this.length; i++) {
      if (currentNode.data === data) {
        return i;
      } else {
        currentNode = currentNode.next;
      }
    }
    return -1;
  }
}

module.exports = LinkedList;
