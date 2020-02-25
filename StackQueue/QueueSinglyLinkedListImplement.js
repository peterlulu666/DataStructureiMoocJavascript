class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }

}

class QueueSinglyLinkedListImplement {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSize = 0;

    }

    // Call addLast()
    enQueue(data) {
        // Create the newNode
        var newNode = new Node(data);
        // If the queue is empty
        if (this.currentSize === 0) {
            // Let head pointer point to newNode
            this.head = newNode;
            // Let tail pointer point to newNode
            this.tail = newNode;
            // Increment the currentSize
            this.currentSize++;
            return;

        }

        // If the queue is not empty
        // Let teh tail.next point to the newNode
        this.tail.next = newNode;
        // Move the tail pointer
        this.tail = this.tail.next;
        // Increment the currentSize
        this.currentSize++;

    }

    // Call removeFirst
    deQueue() {
        // If the queue is empty
        if (this.currentSize === 0) {
            return null;

        }

        // If the queue is not empty
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // If the queue has one node
        if (this.currentSize === 1) {
            // Let the tail pinter point to null
            this.tail = null;

        }

        // Move the head pointer
        this.head = this.head.next;
        // Let tmpPointer.next point to null
        tmpPointer.next = null;
        // Decrement the currentSize
        this.currentSize--;
        // Return the removed data
        return tmpPointer.data;

        // // If the queue has one node
        // if (this.currentSize === 1) {
        //     // Copy the tail pointer and store the address to tmpPointer
        //     var tmpPointer = this.head;
        //     // Let the head pointer point to null
        //     this.head = null;
        //     // Let the tail pointer point to null
        //     this.tail = null;
        //     // Decrement the currentSize
        //     this.currentSize--;
        //     // Return the removed data
        //     return tmpPointer.data;
        //
        // }
        //
        // // If the queue has more than one node
        // // Copy the head pointer and store the address to tmpPointer
        // var tmpPointer = this.head;
        // // Move the head pointer
        // this.head = this.head.next;
        // // Let the tmpPointer point to null
        // tmpPointer.next = null;
        // // Decrement the currentSize
        // this.currentSize--;
        // // Return removed data
        // return tmpPointer.data;

    }

    show() {
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        var queueStr = "";
        for (let i = 0; i < this.currentSize; i++) {
            queueStr = queueStr + "[" + tmpPointer.data + "]" + " <- ";
            tmpPointer = tmpPointer.next;

        }
        console.log("null <- " + queueStr);

    }

}

var queueSinglyLinkedListImplement = new QueueSinglyLinkedListImplement();
queueSinglyLinkedListImplement.enQueue(1);
queueSinglyLinkedListImplement.enQueue(2);
queueSinglyLinkedListImplement.enQueue(3);
queueSinglyLinkedListImplement.show();
console.log(queueSinglyLinkedListImplement.deQueue());
queueSinglyLinkedListImplement.show();







