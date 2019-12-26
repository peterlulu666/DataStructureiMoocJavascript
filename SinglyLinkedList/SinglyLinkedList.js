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
            // Let the head pointer pointing to new node
            // Copy the address of newNode to head pointer
            this.head = newNode;
            // Let the tail pointer pointing to new node
            // Copy the address of newNode to tail pointer
            this.tail = newNode;
            // this.head = this.tail = newNode;
            // Increment the size
            this.currentSize++;
            return;

        }
        // If the linked list is not empty
        // Let the last node pointer pointing to newNode
        // Copy the address of newNode to last node next pointer
        this.tail.next = newNode;
        // Let the tail pointer pointing to newNode
        // Copy the address of newNode to the tail pointer
        this.tail = newNode;
        // Increment the size
        this.currentSize++;

    }

    removeLast() {
        // If linked list is empty
        // We would not remove any node
        if (this.isEmpty()) {
            return null;

        }
        // Store the data to the removedData
        var removedData = this.tail.data;
        // If there is only one node in the linked list
        if (this.head.next === null) {
            // Let the head pointer pointing to null
            this.head = null;
            // Let the tail pointer pointing to null
            this.tail = null;
            // this.head = this.tail = null;
            // Decrement the size
            this.currentSize--;
            return removedData;

        }
        // If there are more than one node in the linked list
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // Create a prevPointer pointing to null
        var prevPointer = null;
        // Move the tmpPointer to the second last node and run the code
        while (tmpPointer.next != null) {
            prevPointer = tmpPointer;
            tmpPointer = tmpPointer.next;

        }
        // The tmpPointer is pointing to the last node and the prevPointer is pointing to the second last node
        // Let the tail pointer pointing to the second last node
        // Copy the address of the second last node to tail pointer
        this.tail = prevPointer;
        // Let the next pointer pointing to null
        this.tail.next = null;
        // Decrement the size
        this.currentSize--;
        return removedData;

    }

    addFirst(data) {
        // Create a new node
        var newNode = new Node(data);
        // If linked list is empty
        if (this.isEmpty()) {
            // Let the head pointer pointing to newNode
            // Copy address of newNode to head pointer
            this.head = newNode;
            // Let tail pointer pointing to newNode
            // Copy address of newNode to tail pointer
            this.tail = newNode;
            // this.head = this.tail = newNode;
            // Increment the size
            this.currentSize++;
            return;

        }
        // If linked list is not empty
        // Let the newNode next pointer pointing to the first node
        // The address of the first node is as same as the head pointer
        // Copy the address of head pointer to newNode next pointer
        newNode.next = this.head;
        // Let the head pointer pointing to newNode
        // Copy the address of newNode to head pointer
        this.head = newNode;
        // Increment the size
        this.currentSize++;

    }

    removeFirst() {
        // If linked list is empty
        // We would not remove any node
        if (this.isEmpty()) {
            return null;

        }
        // Store the data to the removedData
        var removedData = this.head.data;
        // If there is only one node in linked list
        if (this.head.next === null) {
            // Let head pointer pointing to null
            // Let tail pointer pointing to null
            this.head = this.tail = null;
            // Decrement size
            this.currentSize--;
            return removedData;

        }
        // If there are more than one node in linked list
        // Copy the head pointer to tmpPointer
        var tmpPointer = this.head;
        // Move the tmpPointer to the second node
        tmpPointer = tmpPointer.next;
        // Move the head pointer to the second node
        // Copy address of tmpPointer to head pointer
        this.head = tmpPointer;
        // Decrement the size
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
singlyLinkedList.addFirst(500);
singlyLinkedList.addFirst(600);
console.log(singlyLinkedList.removeFirst());
console.log(singlyLinkedList.removeFirst());
singlyLinkedList.show();
























