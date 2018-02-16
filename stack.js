// The Stack

// Create a Stack class which implements methods to push, pop, and peek at the top item.
// Add an empty helper.
// Verify that you can reverse a string with your stack:

class Stack {
	constructor() {
		this.stack = [];
		this.size = 0;
	}

	push(val) {
		console.log(`push ${val}`);
		this.stack[this.size] = val;
		this.size++;
		return this.size;
	}

	pop() {
		if (this.size <= 0) return null;
		console.log(`pop ${this.stack[this.size - 1]}`);
		let item = this.stack[this.size - 1];
		this.stack[this.size - 1] = null;
		this.size--;
		return item;
	}

	peek() {
		console.log(`peek ${this.stack[this.size - 1]}`);
		return this.stack[this.size];
	}

	empty() {
		return this.size === 0;
	}
}

var stack = new Stack();

stack.push("cats");
stack.push("dogs");
stack.push("ants");
stack.pop();
stack.peek();
stack.empty();
stack.peek();

function reverse(str) {
	var stack = new Stack();
	let reversedStr = "";

	for (var i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}

	while (!stack.empty()) {
		reversedStr += stack.pop();
	}

	return reversedStr;
}

console.log(reverse("panda bear"));
