function hashingFunction(str, max){
	return str.split("").map(item => item.charCodeAt()).reduce((a,b) => a + b) % max;
}

var HashTable = function() {
	this.storage = [];
	this.max = 9;
	this.size = 0;
}

HashTable.prototype.insert = function(key, value){

	//throwing the key into the hash function
	var index = hashingFunction(key, this.max);
	//setting a bucket [] to whatever number I got back from above
	var bucket = this.storage[index];
	var overRide = false;

	//if there is no bucket in the array, meaning its empty
	//set it to an empty []
	if(!bucket){
		bucket = [];
		this.storage[index] = bucket;
	}

	//i f there is no empty bucket at that storage index you need to 
	// iterate through it in case there are multiple tupals living in the
	// array
	for (var i = 0; i < bucket.length; i++){
		var tuple = bucket[i];

		//if the tupal's key matches the key you are inserting then override it
		if(tuple[0] === key){
			tuple[1] = value;
			overRide = true
		}
	}

	//if i didnt have to overide anything I add the new key and value
	// to the array and increase the size of the array count by 1
	if(!overRide){
		bucket.push([key, value]);
		this.size ++;
	}

	//if the number of numbers in the array are getting higher it means that
	// there is a higher likely hood that there will be a "collisions"
	// therefore we need to increase the capacity of the array

	if(this.size > this.max * .75){
		this.resize(this.max * 2);
	}
}

HashTable.prototype.resize = function(newMax){

	// since we are adding more spaces in the array you have to recalculate
	// all the hashed values by running the functions all over again
	// that is why all the values are reset to nothing
	var oldStorage = this.storage;
	this.max = newMax;
	this.size = 0;
	this.storage = [];

	for (var i = 0; i < oldStorage.length; i++){
		//if there is nothing in this container we can move on
		if(!oldStorage[i]){
			return;
		}

		//this is when you find something in the container
		// go through it and re-insert it using the new length
		for(var x = 0; x < oldStorage[i].length; x++){
			var tuple = oldStorage[i][x];
			this.insert(tuple[0], tuple[1]);
		}
	}
}

HashTable.prototype.remove = function(key){
	var index = hashingFunction(key, this.max);
	var bucket = this.storage[index];

	// if you can not find the value then return nil
	if(!bucket){
		return nill;
	}

	//however if you can find something in that container using the hased index use a for loop
	for (var i = 0; i < bucket.length; i++){

		// set a newtuple as the first bucket in the container
		var tuple = bucket[i];

		//if the bucket has the exact key we put in we can splice it out of the array
		if (tuple[0] == key){
			bucket.splice(i,1);
			this.size --;

			// since we spliced and removed a value we have to check to see
			//if we do not need such a large storage size, if we dont we make it smaller
			if(this.size < this.max * .25){
				this.resize(this.size/2);
			}
			return tuple[1];
		}
	}
}

HashTable.prototype.retrieve = function(key){
	var index = hashingFunction(key, this.max);
	var bucket = this.storage[index];

	if (!bucket){
		return null;
	}
	//this simply returns the value that we put in to the array
	for (var i = 0; i < bucket.length; i++){
		var tuple = bucket[i];

		if (tuple[0] === key){
			return tuple[1];
		}
	}
}

var table = new HashTable();
table.insert("Lucas", 26);
table.insert("Molly", 27);
table.insert("Monika", 28);
table.insert("Martha", 56);
table.insert("Lucas", 900);
table.insert("Miro", 61);

console.log(table.storage);
console.log(table.size);
