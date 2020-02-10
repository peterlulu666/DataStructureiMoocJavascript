class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;

    }

}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSize = 0;

    }

    addLast(data) {
        var newNode = new Node(data);
        // If the doubly linked list is empty
        if (this.currentSize === 0) {
            // Copy the address of newNode to head pointer
            // Let the head pointer pointing to the newNode
            this.head = newNode;
            // Copy the address of newNode to tail pointer
            // Let the tail pointer pointing to the newNode
            this.tail = newNode;
            this.currentSize++;
            return;

        }
        // If the doubly linked list is not empty
        // Copy the address of newNode to tail.next
        // Let the tail.next pointing to the newNode
        this.tail.next = newNode;
        // Copy the address of tail to the newNode.prev
        // Let the newNode.prev pointing to the tail
        newNode.prev = this.tail;
        // Move the tail
        // Copy the address of newNode to the tail
        // Let the tail pointing to the newNode
        this.tail = newNode;
        this.currentSize++;

    }

    removeLast() {
        // If the doubly linked list is empty
        if (this.head === null) {
            return null;

        }
        // If the doubly linked list has one node
        // Let the head pointing pointing to null
        // Let the tail pointer pointing to null
        if (this.currentSize === 1) {
            // Copy the tail pointer
            // Store the address to removedNode
            var removedNode = this.tail;
            this.head = null;
            this.tail = null;
            this.currentSize--;
            return removedNode.data;

        }
        // If the doubly linked list has more than one node
        // Copy the tail pointer
        // Store the address to removedNode
        var removedNode = this.tail;
        // Move the tail to left
        // Copy the address of removedNode.prev to tail
        // Let the tail pointing to the left node
        this.tail = removedNode.prev;
        // Let the tail.next pointing to null
        this.tail.next = null;
        // Let the removedNode.prev pointing to null
        removedNode.prev = null;
        this.currentSize--;
        return removedNode.data;

    }

    removeFirst() {
        // If the doubly linked list is empty
        if (this.currentSize === 0) {
            return null;

        }
        // If the doubly linked list has one node
        if (this.currentSize === 1) {
            // Copy the address of head pointer
            // Store the address of head pointer to removedNode
            var removedNode = this.head;
            // Let the head pointer pointing to null
            this.head = null;
            // Let the tail pointer pointing to null
            this.tail = null;
            // Decrement the size
            this.currentSize--;
            return removedNode.data;

        }
        // If the doubly linked list has more than one node
        // Copy the address of head pointer
        // Store the address of head pointer to removedNode
        var removedNode = this.head;
        // Move the head pointer
        // Let the head pointer pointing to the second node
        this.head = this.head.next;
        // Let the head.prev pointing to null
        this.head.prev = null;
        // Let removedNode.next pointing to null
        removedNode.next = null;
        // Decrement the size
        this.currentSize--;
        return removedNode.data;

    }

    show() {
        // Copy the head pointer and store the address to the tmpPointer
        var tmpPointer = this.head;
        // Print the doubly linked list
        var listStr = "";
        for (let i = 0; i < this.currentSize; i++) {
            // Print the data
            listStr = listStr + " [ " + tmpPointer.data + " ] " + " -> ";
            // Move the tmpPointer
            tmpPointer = tmpPointer.next;

        }
        // Print the null
        listStr = listStr + " null ";
        // Print the doubly linked list
        console.log(listStr);

    }

}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addLast(100);
doublyLinkedList.addLast(200);
doublyLinkedList.addLast(300);
doublyLinkedList.show();
console.log(doublyLinkedList.removeLast());
doublyLinkedList.show();
console.log(doublyLinkedList.removeLast());
doublyLinkedList.show();
doublyLinkedList.addLast(500);
doublyLinkedList.addLast(600);
doublyLinkedList.addLast(800);
doublyLinkedList.show();
console.log(doublyLinkedList.removeFirst());
doublyLinkedList.show();
console.log(doublyLinkedList.removeFirst());
doublyLinkedList.show();












