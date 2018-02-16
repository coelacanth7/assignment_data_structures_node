// The Queue
// Create a Queue class which implements the methods enqueue, dequeue and peek.
// Add methods for empty
// Verify that you can load and unload a string in the same order with your queue.

class Queue {
	constructor() {
		this.queue = [];
		this.size = 0;
	}

	enqueue(val) {
		console.log(`enqueue ${val}`);
		this.queue[this.size] = val;
		this.size++;
		return this.size;
	}

	dequeue() {
		console.log(`dequeue ${this.queue[0]}`);
		let item = this.queue[0];
		let newQueue = [];

		for (var i = 1; i < this.size; i++) {
			newQueue[i - 1] = this.queue[i];
		}

		this.size--;
		this.queue = newQueue;
		return item;
	}

	empty() {
		return this.size === 0;
	}
}

function loadAndUnload(str) {
	var queue = new Queue();
	var newStr = "";

	for (var i = 0; i < str.length; i++) {
		queue.enqueue(str[i]);
	}

	while (!queue.empty()) {
		newStr += queue.dequeue();
	}

	return newStr;
}

console.log(loadAndUnload("orange cheetos"));
