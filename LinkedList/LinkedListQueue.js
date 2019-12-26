class Node {

    constructor(data) {
        this.data = data;
        this.next = null;

    }

}

class LinkedListQueue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSize = 0;

    }

    getSize() {
        return this.currentSize;

    }

    isEmpty() {
        return this.currentSize === 0;

    }

    enQueue(data) {
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


    deQueue() {
        if (this.isEmpty()) {
            return null;

        }
        var removedData = this.head.data;
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.currentSize--;
            return removedData;

        }
        var tmpPointer = this.head;
        tmpPointer = tmpPointer.next;
        this.head = tmpPointer;
        this.currentSize--;
        return removedData;

    }


    getFront() {
        if (this.isEmpty()){
            return null;

        }
        return this.head.data;

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

var linkedListQueue = new LinkedListQueue();
linkedListQueue.enQueue(500);
linkedListQueue.enQueue(600);
linkedListQueue.show();
console.log(linkedListQueue.deQueue());
linkedListQueue.show();







