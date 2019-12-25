class Node {

    constructor(data) {
        this.data = data;
        this.next = null;

    }

}

class LinkedListStack {

    constructor() {
        this.head = null;
        this.currentSize = 0;

    }

    getSize() {
        return this.currentSize;

    }

    isEmpty() {
        return this.currentSize === 0;

    }

    pop() {
        if (this.isEmpty()) {
            return null;

        }
        var removedData = this.head.data;
        var tmpPointer = this.head;
        tmpPointer = tmpPointer.next;
        this.head = tmpPointer;
        this.currentSize--;
        return removedData;

    }

    push(data) {
        var newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.currentSize++;

    }

    peak() {
        return this.head.data;

    }

    show() {
        var tmpPointer = this.head;
        var listStr = "";
        for (let i = 0; i < this.currentSize; i++) {
            listStr = listStr + " [ " + tmpPointer.data + " ] -> ";
            tmpPointer = tmpPointer.next;

        }
        listStr = listStr + " null ";
        console.log(listStr);

    }

}

var linkedListStack = new LinkedListStack();
linkedListStack.push(500);
linkedListStack.push(600);
linkedListStack.show();
linkedListStack.pop();
linkedListStack.show();
console.log(linkedListStack.peak());
console.log(linkedListStack.getSize());



