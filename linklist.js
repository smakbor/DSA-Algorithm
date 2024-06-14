class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linklist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value) {
        let node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.size++;
        } else {
            let curr = this.head;
            if (curr.next != null) {
                curr = curr.next;
            }
            curr.next = node;
            this.size++;
        }
    }
}

let ll = new Linklist();
ll.add(11);
ll.add(13);
ll.add(15);
ll.add(17);
ll.add(8);
ll.add(23);
ll.add(5);
ll.add(67);
// console.log(ll);
// console.log(ll.size);
