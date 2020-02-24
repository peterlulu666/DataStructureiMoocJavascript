class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

    }

}

class StackSinglyLinkedListImplement {
    constructor() {
        this.head = null;
        this.tail = null;
        this.currentSize = 0;

    }

    push(data) {
        // Create the newNode
        var newNode = new Node(data);
        // If the stack is empty
        if (this.currentSize === 0) {
            // Let the head pointer point to newNode
            this.head = newNode;
            // Let the tail pointer point to newNode
            this.tail = newNode;
            // Increment currentSize
            this.currentSize++;
            return;

        }

        // If the stack is not empty
        // Let newNode.next point to head
        newNode.next = this.head;
        // Move head pointer
        // Let the head pointer point to newNode
        this.head = newNode;
        // Increment the currentSize
        this.currentSize++;

    }

    pop() {
        // If the stack is empty
        if (this.currentSize === 0) {
            return null;

        }

        // If the stack is not empty
        // Copy the head pointer and store the address to tmpPointer
        var tmpPointer = this.head;
        // If the stack has one node
        if (this.currentSize === 1) {
            // Let the tail pointer point to null
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

        // // If the stack has one node
        // if (this.currentSize === 1) {
        //     // Copy the head and store the address to tmpPointer
        //     var tmpPointer = this.head;
        //     // Let head point to null
        //     this.head = null;
        //     // Let tail point to null
        //     this.tail = null;
        //     // Decrement the currentSize
        //     this.currentSize--;
        //     // Return removed data
        //     return tmpPointer.data;
        //
        // }
        //
        // // If the stack has more than one node
        // // Copy the head pointer and store the address to tmpPointer
        // var tmpPointer = this.head;
        // // Move the head pointer
        // this.head = this.head.next;
        // // Let tmpPointer.next point to null
        // tmpPointer.next = null;
        // // Decrement the currentSize
        // this.currentSize--;
        // // Return removed data
        // return tmpPointer.data;

    }

    show() {
        var tmpPointer = this.head;
        var stackStr = "";
        for (let i = 0; i < this.currentSize; i++) {
            stackStr = stackStr + "[" + tmpPointer.data + "]" + " -> ";
            tmpPointer = tmpPointer.next;

        }
        console.log(stackStr + "null");

    }

}

var singlyLinkedListImplement = new StackSinglyLinkedListImplement();
singlyLinkedListImplement.push(1);
singlyLinkedListImplement.push(2);
singlyLinkedListImplement.push(3);
singlyLinkedListImplement.show();
console.log(singlyLinkedListImplement.pop());
singlyLinkedListImplement.show();













