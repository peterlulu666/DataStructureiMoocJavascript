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

    addFirst(data) {
        // Create a new node
        var newNode = new Node(data);
        // If the doubly linked list is empty
        if (this.currentSize === 0) {
            // Let head pointer point to newNode
            this.head = newNode;
            // Let tail pointer point to newNode
            this.tail = newNode;
            // Increment size
            this.currentSize++;
            return;

        }

        // If the doubly linked list has more than one node
        // Copy the head pointer and store the value to the tmpPointer
        // Let the newNode.next point to the first node
        newNode.next = this.head;
        // Let the first node previous pointer point to the newNode
        this.head.prev = newNode;
        // Move the head pointer
        this.head = newNode;
        // this.head = this.head.prev;
        this.currentSize++;

    }

    getOneWay(index) {
        // If the index < 0 or index >= currentSize
        if (index < 0 || index >= this.currentSize) {
            console.log("Index out of range");
            return null;

        }

        // If the doubly linked list is not empty
        // Copy the head pointer
        var tmpPointer = this.head;
        // Move the tmpPointer
        for (let i = 0; i < index; i++) {
            tmpPointer = tmpPointer.next;

        }

        return tmpPointer.data;

    }

    getForLoop(index) {
        // If the index < 0 or index >= currentSize
        if (index < 0 || index >= this.currentSize) {
            console.log("Index out of range");
            return null;

        }

        // If the doubly linked list is not empty
        // Left side
        if (index <= this.currentSize / 2) {
            // Copy the head pointer and store the address to tmpPointer
            var tmpPointer = this.head;
            // Move the tmpPointer
            for (let i = 0; i < index; i++) {
                tmpPointer = tmpPointer.next;

            }
            console.log("Working from left. ");
            return tmpPointer.data;

        }
        // Right side
        else {
            // Copy the tail pointer and store the address to tmpPointer
            var tmpPointer = this.tail;
            // Move the tmpPointer
            for (let i = 0; i < this.currentSize - 1 - index; i++) {
                tmpPointer = tmpPointer.prev;

            }
            console.log("Working from right. ");
            return tmpPointer.data;

        }

    }

    getWhileLoop(index) {
        // If index < 0 or index >= currentSize
        if (index < 0 || index >= this.currentSize) {
            console.log("Index out of range");
            return null;

        }

        // If the doubly linked list is not empty
        // Left side
        if (index < this.currentSize / 2) {
            // Copy the head pointer and store the address to the tmpPointer
            var tmpPointer = this.head;
            // Count the move
            var count = 0;
            // Move the tmpPointer
            while (true) {
                if (count === index) {
                    break;

                }

                tmpPointer = tmpPointer.next;
                // Increment count
                count++;

            }
            // console.log("Working from left. ");
            // console.log(tmpPointer.data);
            return tmpPointer;

        }

        // Right side
        else {
            // Copy the tail pointer and store the address to tmpPointer
            var tmpPointer = this.tail;
            // Count the move
            var count = 0;
            // Move the tmpPointer
            while (true) {
                if (count === this.currentSize - 1 - index) {
                    break;

                }

                tmpPointer = tmpPointer.prev;
                // Increment the count
                count++;

            }
            // console.log("Working from right. ");
            // console.log(tmpPointer.data);
            return tmpPointer;

        }

    }

    set(index, data) {
        // Find the node
        var foundNode = this.getWhileLoop(index);
        if (foundNode != null) {
            foundNode.data = data;
            return true;

        }
        return false;

    }

    insert(index, data) {
        // If index < 0 or index >= currentSize
        if (index < 0 || index > this.currentSize) {
            console.log("Index out of range");
            return null;

        }

        // Insert at the first node
        if (index === 0) {
            this.addFirst(data);
            return;

        }

        // Insert after the last node
        if (index === this.currentSize) {
            this.addLast(data);
            return;

        }

        // Insert in the middle
        // Create a new node
        var newNode = new Node(data);
        // Create prevNode
        var prevNode = null;
        // Call getWhileLoop
        prevNode = this.getWhileLoop(index - 1);
        // // Left side
        // if (index <= this.currentSize / 2) {
        //     // Copy the head pointer and store the address to tmpPointer
        //     var tmpPointer = this.head;
        //     // Move the tmpPointer to index - 1
        //     for (let i = 0; i < index - 1; i++) {
        //         tmpPointer = tmpPointer.next;
        //
        //     }
        //     prevNode = tmpPointer;
        //     console.log("Working from left side. ");
        //
        // }
        // // Right side
        // else {
        //     // Copy the tail pointer and store the address to tmpPointer
        //     var tmpPointer = this.tail;
        //     // Move the tmpPointer to index - 1
        //     for (let i = 0; i < this.currentSize - 1 - index + 1; i++) {
        //         tmpPointer = tmpPointer.prev;
        //
        //     }
        //     prevNode = tmpPointer;
        //     console.log("Working from right side. ");
        //
        // }
        // Create currentNode
        var currentNode = prevNode.next;
        // let the newNode.next point to the currentNode
        newNode.next = currentNode;
        // Let the newNode.prev point to the prevNode
        newNode.prev = prevNode;
        // Let prevNode.next point to newNode
        prevNode.next = newNode;
        // Let currentNode.prev point to newNode
        currentNode.prev = newNode;
        // Increment currentSize
        this.currentSize++;

    }

    remove(index) {
        // If index < 0 or index >= currentSize
        if (index < 0 || index >= this.currentSize) {
            console.log("Index out of range");
            return null;

        }

        // If the doubly liked list is empty
        if (this.currentSize === 0) {
            return null;

        }

        // Remove node at index 0
        if (index === 0) {
            // Call removeFirst
            this.removeFirst();
            return;

        }

        // Remove node at the last index
        if (index === this.currentSize - 1) {
            // Call removeLast
            this.removeLast();
            return;

        }

        // Remove node in the middle of doubly liked list
        // Get index - 1
        // Create prevNode
        var prevNode = this.getWhileLoop(index - 1);
        // Create nextNode
        var nextNode = prevNode.next.next;
        // Create removeNode
        var removeNode = prevNode.next;
        // Let prevNode.next point to nextNode
        prevNode.next = nextNode;
        // Let nextNode.prev point to prevNode
        nextNode.prev = prevNode;
        // Let removeNode.prev point to null
        removeNode.prev = null;
        // Let removeNode.next point to null
        removeNode.next = null;
        // Decrement currentSize
        this.currentSize--;

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
doublyLinkedList.addFirst(500);
doublyLinkedList.show();
console.log(doublyLinkedList.getOneWay(0));
console.log(doublyLinkedList.getOneWay(1));
console.log(doublyLinkedList.getOneWay(2));
console.log(doublyLinkedList.getOneWay(3));
console.log(doublyLinkedList.getForLoop(0));
console.log(doublyLinkedList.getForLoop(1));
console.log(doublyLinkedList.getForLoop(2));
console.log(doublyLinkedList.getForLoop(3));
doublyLinkedList.getWhileLoop(0);
doublyLinkedList.getWhileLoop(1);
doublyLinkedList.getWhileLoop(2);
doublyLinkedList.getWhileLoop(3);
console.log(doublyLinkedList.set(0, 300));
doublyLinkedList.show();
doublyLinkedList.insert(2, 500);
doublyLinkedList.show();
doublyLinkedList.remove(2);
doublyLinkedList.show();

