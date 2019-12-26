class Node {

    constructor(data) {
        this.data = data;
        this.next = null;

    }

}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSize = 0;

    }

    isEmpty() {
        return (this.head === null && this.tail === null);

    }

    getSize() {
        return this.currentSize;

    }

    addLast(data) {
        var newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.currentSize++;
            return;

        }
        this.tail.next = newNode;
        this.tail = newNode;
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














