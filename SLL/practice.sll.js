function LinkedList(){
	this.head = null;
}

LinkedList.prototype.isEmpty = function(){
	if (this.head == null){
		return true;
	}else{
		return false;
	}
}


LinkedList.prototype.append = function(val){
	var newNode = {
		data: val,
		next: null
	}

	if(this.isEmpty() == true){
		this.head = newNode
		return;
	}

	var current = this.head;

	while(current.next != null){
		current = current.next;
	}

	current.next = newNode;
}

LinkedList.prototype.prepend = function(val){
	var newNode = {
		data: val,
		next: this.head
	}

	this.head = newNode;

}

LinkedList.prototype.removeAll = function(val){
	if(!this.contains(val)){
		return 
	}


	// if(this.head.data == val){
	// 	this.head = this.head.next;
	// 	return;
	// }

	var prev = this.head;
	var curr = this.head;

	while(curr != null){
		if(curr.data == val){
			prev.next = curr.next;
			curr = curr.next;
		}else{
			prev = curr;
			curr = curr.next;
		}
	}
}

LinkedList.prototype.contains = function(val){
	if(this.isEmpty() == true){
		return false;
	}

	var curr = this.head;

	while(curr != null){
		if(curr.data == val){
			return true
		}
		curr = curr.next;
	}
	return false;
}


LinkedList.prototype.print = function(){
	var output = "[";

	var current = this.head;

	while(current !== null){
		output += current.data
		if(current.next !== null){
			output += ', '
		}
		current = current.next;
	}

	output += ']'
	console.log(output);
}

LinkedList.prototype.reverse = function(){

	var next;
	var prev = null;
	var curr = this.head;

	while(curr != null){
		next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	this.head = prev;
}

var link = new LinkedList();
link.append(1);
link.append(2);
link.append(2);
link.append(3);
link.append(2);
link.prepend(0);
link.print();

link.removeAll(1);
link.print();
link.reverse();
link.print();
