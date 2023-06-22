// User defined class node
class Node {
	// constructor
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// linkedlist class
class LinkedList {
	// functions to be implemented
	// removeFrom(location) ->
	// removeElement(val) -> currentNode.next = currentNode.next.next
	// insertWithoutCollision -> a function that makes sure that the new node val is going to be unique otherwise rejects it

	constructor() {
		this.head = null;
		this.size = 0;
	}

	//INsert AT example we have a linked list 1-2-4, I call insertAt(3, 2), my resulting list is 1-3-2-4
	//Example 2: we have a linked list 1 insertAt(2, 0), my resulting list is 2-1

	insertAt(val, location) {
		if (location > this.size) {
			this.add(val);
		}

		let node = new Node(val);
		let currentNode = this.head;
		let count = 1;
		while (count < location - 1) {
			count++;
			currentNode = currentNode.next;
		}
		// Goal: [1]-[3]-[2]-[4]
		// linkedList = [1]-[2]-[4]
		// node = [3]-null
		console.log(node.next);
		node.next = currentNode.next;
		// linkedList = [1]-[2]-[4]
		// node = [3]-[2]-[4]
		console.log(currentNode);
		console.log(node);
		currentNode.next = node;
		//linkedList = [1]-[3]-[2]-[4]
		console.log(currentNode);

		/*
      LinkedListEx = { this.head = Node { val: 1, next: null }, size : 1 }
    */
	}

	// adds an element at the end of list
	add(val) {
		// console.log(`Adding ${val} to the Linked List!`);
		// creates a new node
		let node = new Node(val);

		// to store current node
		let currentNode;

		// if list is Empty add the
		// element and make it head
		if (this.head === null) this.head = node;
		else {
			currentNode = this.head;

			// iterate to the end of the
			// list
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			// add node
			currentNode.next = node;
		}
		this.size++;
	}

	//This method will print the val of each of the nodes within the LinkedList
	printList() {
		let currentNode = this.head;
		while (currentNode) {
			// console.log(`The Current Node's Value is: ${currentNode.val}`);
			currentNode = currentNode.next;
		}
	}

	//prints out a boolean of true or false, true if the LinkedList contains one or more nodes, false otherwise
	isEmpty() {
		if (this.size) {
			console.log("True");
		} else {
			console.log("False");
		}
	}

	sizeOfList() {
		console.log(`This size of your list is: ${this.size}`);
	}
}

const linkedListEx = new LinkedList();
linkedListEx.add(1);
linkedListEx.add(2);
linkedListEx.add(4);
// console.log(linkedListEx);
// linkedListEx.printList();
// linkedListEx.isEmpty();
// linkedListEx.sizeOfList();
linkedListEx.insertAt(3, 1);
linkedListEx.printList();

/*
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

//   Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.
*/
