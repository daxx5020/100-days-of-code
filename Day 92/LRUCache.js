// LRU Cache


var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(-1, -1);
    this.tail = new Node(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);
        this.removeNode(node);
        this.addNode(node);
        return node.value;
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);
        this.removeNode(node);
    } else if (this.cache.size === this.capacity) {
        let lruNode = this.tail.prev;
        this.cache.delete(lruNode.key);
        this.removeNode(lruNode);
    }
    let newNode = new Node(key, value);
    this.addNode(newNode);
    this.cache.set(key, newNode);
};

LRUCache.prototype.addNode = function(node) {
    let temp = this.head.next;
    node.next = temp;
    node.prev = this.head;
    this.head.next = node;
    temp.prev = node;
};

LRUCache.prototype.removeNode = function(node) {
    let prevNode = node.prev;
    let nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
};

  