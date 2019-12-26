class Node {

    constructor(data) {
        this.data = data;
        this.next = null;

    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.currentSize = 0;

    }

    add(index, data) {
        if (index < 0 || index > this.currentSize) {
            throw "The index should be between 0 and linked list size. ";

        }
        if (index === 0) {
            this.addFirst(data);
            return;

        }
        var newNode = new Node(data);
        var tmpPointer = this.head;
        for (let i = 1; i <= index - 1; i++) {
            tmpPointer = tmpPointer.next;

        }
        newNode.next = tmpPointer.next;
        tmpPointer.next = newNode;
        this.currentSize++;

    }

    addFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.currentSize++;

    }

    addLast(data) {
        if (this.head == null) {
            this.addFirst(data);
            return;

        }
        const newNode = new Node(data);
        let tmpPointer = this.head;
        for (let i = 1; i <= this.currentSize - 1; i++) {
            tmpPointer = tmpPointer.next;

        }
        tmpPointer.next = newNode;
        newNode.next = null;
        this.currentSize++;

    }

    contains(data) {
        if (this.head === null) {
            return false;

        }
        let tmpPointer = this.head;
        // Traverse to the last node and run the code
        while (tmpPointer != null) {
            if (tmpPointer.data === data) {
                return true;

            }
            tmpPointer = tmpPointer.next;

        }
        return false;

        // if (this.head == null) {
        //     return false;
        //
        // }
        // var tmpPointer = this.head;
        // for (let compareWithIndex = 0; compareWithIndex <= this.currentSize - 1; compareWithIndex++) {
        //     if (tmpPointer.data === data) {
        //         return true;
        //
        //     }
        //     tmpPointer = tmpPointer.next;
        //
        // }
        // return false;

    }

    getFirst() {
        if (this.head == null) {
            return null;

        }
        return this.head.data;

    }

    getLast() {
        if (this.head === null) {
            return null;

        }
        var tmpPointer = this.head;
        // Traverse to the second last node and run the code
        while (tmpPointer.next != null) {
            tmpPointer = tmpPointer.next;

        }
        return tmpPointer.data;

        // if (this.head === null) {
        //     return null;
        //
        // }
        // var tmpPointer = this.head;
        // for (let moveToIndex = 1; moveToIndex <= this.currentSize - 1; moveToIndex++) {
        //     tmpPointer = tmpPointer.next;
        //
        // }
        // return tmpPointer.data;

    }

    get(index) {
        if (this.head === null) {
            return null;

        }
        if (index < 0 || index > this.currentSize - 1) {
            throw "The index should be between 0 and linked list size. ";

        }
        if (index === 0) {
            return this.head.data;

        }
        let tmpPointer = this.head;
        for (let moveToIndex = 1; moveToIndex <= index; moveToIndex++) {
            tmpPointer = tmpPointer.next;

        }
        return tmpPointer.data;

    }

    getSize() {
        return this.currentSize;

    }

    isEmpty() {
        return this.head === null;

    }

    removeFirst() {
        if (this.head === null) {
            return null;

        }
        var removedData = this.head.data;
        var tmpPointer = this.head;
        tmpPointer = tmpPointer.next;
        this.head = tmpPointer;
        this.currentSize--;
        return removedData;

    }

    removeLast() {
        if (this.head === null) {
            return null;

        }
        if (this.head.next === null) {
            return this.removeFirst();

        }
        let tmpPointer = this.head;
        for (let moveToIndex = 1; moveToIndex <= this.currentSize - 2; moveToIndex++) {
            tmpPointer = tmpPointer.next;

        }
        const removedData = tmpPointer.next.data;
        tmpPointer.next = null;
        this.currentSize--;
        return removedData;

    }

    remove(index) {
        if (this.head === null) {
            return null;

        }
        if (index < 0 || index > this.currentSize - 1) {
            throw "The index should be between 0 and linked list size. ";

        }
        if (index === 0) {
            return this.removeFirst();

        }
        let tmpPointer = this.head;
        for (let moveToIndex = 1; moveToIndex <= index - 1; moveToIndex++) {
            tmpPointer = tmpPointer.next;

        }
        const removedData = tmpPointer.next.data;
        tmpPointer.next = tmpPointer.next.next;
        this.currentSize--;
        return removedData;

    }

    removeNode(data) {
        if (this.head === null) {
            return null;

        }
        if (this.head.data === data) {
            return this.removeFirst();

        }
        var tmpPointer = this.head;
        var prevPointer = null;
        while (tmpPointer != null) {
            if (tmpPointer.data === data) {
                prevPointer.next = tmpPointer.next;
                this.currentSize--;
                return data;

            }
            prevPointer = tmpPointer;
            tmpPointer = tmpPointer.next;

        }
        return null;

    }

    set(index, data) {
        if (this.head === null) {
            return null;

        }
        if (index < 0 || index > this.currentSize - 1) {
            throw "The index should be between 0 and linked list size. ";

        }
        if (index === 0) {
            this.head.data = data;
            return;

        }
        var tmpPointer = this.head;
        for (let moveToIndex = 1; moveToIndex <= index; moveToIndex++) {
            tmpPointer = tmpPointer.next;

        }
        tmpPointer.data = data;

    }

    show() {
        let tmpPointer = this.head;
        var str = "";
        for (let i = 0; i < this.currentSize; i++) {
            str = str + "[ " + tmpPointer.data + " ]-> ";
            tmpPointer = tmpPointer.next;

        }
        console.log(str)

    }

}

const linkedList = new LinkedList();
linkedList.addFirst("Hi");
linkedList.addFirst("there");
linkedList.addLast(100);
linkedList.add(3, 200);
linkedList.show();
console.log(linkedList.contains(200));
console.log(linkedList.getSize());
console.log(linkedList.get(2));
console.log(linkedList.getFirst());
console.log(linkedList.getLast());
console.log(linkedList.isEmpty());
console.log(linkedList.removeFirst());
console.log(linkedList.removeLast());
console.log(linkedList.remove(1));
linkedList.addFirst(500);
linkedList.addFirst(600);
console.log(linkedList.removeNode("Hi"));
linkedList.set(0, 100);
linkedList.show();




