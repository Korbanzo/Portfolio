class Node {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    static FromArray(arr) {
        const doublyLinkedList = new DoublyLinkedList();

        for (const [name, description, id] of arr) {
            const node = new Node(name, description, id);

            if (!doublyLinkedList.head) { 
                doublyLinkedList.head = doublyLinkedList.tail = node;
            }
            else { 
                node.prev = doublyLinkedList.tail;
                doublyLinkedList.tail.next = node; 
                doublyLinkedList.tail = node;
            }
        }

        return doublyLinkedList;
    }
}

export default DoublyLinkedList;