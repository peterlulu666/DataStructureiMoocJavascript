class Node {

    // Node contains data and next pointer
    constructor(data) {
        this.data = data;
        this.next = null;

    }

}

class SinglyLinkedList {

    constructor() {
        // Let the head pointer pointing to null
        this.head = null;
        // Let the tail pointer pointing to null
        this.tail = null;
        // Let the size to be 0
        this.currentSize = 0;

    }

    // Check if the linked list is empty
    isEmpty() {
        return (this.head === null && this.tail === null);

    }

    // The current size of linked list
    getSize() {
        return this.currentSize;

    }

    // Add node to the first node
    addLast(data) {
        // Create a new node
        var newNode = new Node(data);
        // If the linked list is empty
        if (this.isEmpty()) {
            // Copy the address of newNode to head pointer
            // Let the head pointer pointing to new node
            this.head = newNode;
            // Copy the address of newNode to tail pointer
            // Let the tail pointer pointing to new node
            this.tail = newNode;
            // Increment the size
            this.currentSize++;
            return;

        }
        // If the linked list is not empty
        // Copy the address of newNode to last node next pointer
        // Let the last node pointer pointing to newNode
        this.tail.next = newNode;
        // Copy the address of newNode tail pointer
        // Let the tail pointer pointing to newNode
        this.tail = newNode;
        // Increment the size
        this.currentSize++;

    }

    removeLast() {
        if (this.isEmpty()) {
            return null;

        }
        var removedData = this.tail.data;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.currentSize--;
            return removedData;

        }
        var tmpPointer = this.head;
        var prevPointer = null;
        while (tmpPointer.next != null) {
            prevPointer = tmpPointer;
            tmpPointer = tmpPointer.next;

        }
        this.tail = prevPointer;
        this.tail.next = null;
        this.currentSize--;
        return removedData;

    }

    show() {
        var listStr = "";
        var tmpPointer = this.head;
        for (let i = 0; i < this.currentSize; i++) {
            listStr = listStr + " [ " + tmpPointer.data + " ] -> ";
            tmpPointer = tmpPointer.next;

        }
        listStr = listStr + " null ";
        console.log(listStr);

    }

}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.addLast(500);
singlyLinkedList.addLast(600);
console.log(singlyLinkedList.removeLast());
console.log(singlyLinkedList.removeLast());
singlyLinkedList.show();














