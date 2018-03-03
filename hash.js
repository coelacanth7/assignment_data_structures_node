class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.headNode = null;
		this.lastNode = null;
	}

	initialize(firsNode = null) {
		this.headNode = firstNode;
		this.lastNode = firstNode;
	}

	addFirstNode(data) {
		this.headNode = new Node(data, null);
		this.lastNode = this.headNode;
	}

	addNode(data) {
		if (!this.headNode) {
			this.addFirstHead(data);
		} else {
			const node = new Node(data, null);
			this.lastNode.next = node;
			this.lastNode = node;
		}
	}

	removeNode(index) {
		let counter = 0;
		let currentNode = this.headNode;
		let prevNode = null;

		while (counter < index) {
			prevNode = currentNode;
			currentNode = currentNode.next;
			++counter;
		}

		let nextNode = currentNode.next;
		currentNode.next = null;
		prevNode.next = nextNode;
	}

	insertNode(data, index) {
		let counter = 0;
		let currentNode = this.headNode;
		let prevNode = null;
		const node = new Node(data);

		while (counter < index) {
			prevNode = currentNode;
			currentNode = currentNode.next;
			++counter;
		}

		node.next = currentNode;
		prevNode.next = node;
	}

	findNode(index) {
		let counter = 0;
		let currentNode = this.headNode;

		while (counter < index) {
			currentNode = currentNode.next;
			++counter;
		}

		return currentNode;
	}

	printList() {
		let currentNode = this.headNode;

		while (currentNode.next !== null) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
	}

	// [node.data, node.next] --> [node.data, node.next]

	reverse() {
		let currentNode = this.headNode;
		let nextNode = null;
		let prevNode = null;

		while (currentNode != null) {
			nextNode = currentNode.next;
			currentNode.next = prevNode;
			prevNode = currentNode;
			currentNode = nextNode;
		}

		this.headNode = prevNode;
	}
}

class Hash {
	constructor() {
		this.buckets = {};
	}

	hash(word) {}
}
