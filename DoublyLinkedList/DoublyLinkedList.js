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






