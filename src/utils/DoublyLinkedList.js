class Node {
    constructor(name, description, link, id) {
        this.name = name;
        this.description = description;
        this.link = link;
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

        for (const [name, description, link, id] of arr) {
            const node = new Node(name, description, link, id);

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