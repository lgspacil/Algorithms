var HashTable = function(){
	this.storage = [];
	this.max = 9;
	this.size = 0;
}

//assuming the keys are strings
HashTable.prototype.hashingFunction = function(key, max){
	var code = key.split("").map(function(letter){
		return (letter.charCodeAt())
	})
	var sum = code.reduce(function(a,b){
		return a + b
	});
	return sum % max;
}


HashTable.prototype.insert = function(key, value){
	var index = this.hashingFunction(key, this.max);
	var bucket = this.storage[index];
	var overRide = false;

	//if the storage at the given index is empty we need to add a bucket to it
	if(!bucket){
		bucket = [];
		this.storage[index] = [];
	}

	//if there is already something in the bucket we need to iterate through it
	for (var i = 0; i < bucket.length; i++){
		var tupal = bucket[i];

		//this is if there is a collision and we are inputing the same key, we then have to override it...
		if(tupal[0] === key){
			tupal[1] = value;
			overRide = true;
		}
	}

	//if I did not have to override anything then I am free to input key value pair into the stoarge array
	if(overRide === false){
		this.storage[index].push([key, value])
		this.size ++;
	}

	if(this.size > (this.max * .75)){
		this.resize(this.max * 2);
	}
	

}

HashTable.prototype.resize = function(newSize){
	var oldStorage  = this.storage
	this.max = newSize;
	this.size = 0;
	this.storage = [];
	
	

	for (var i = 0; i < oldStorage.length; i++){
		

		if(oldStorage[i] != undefined){
			

			for(var j = 0; j < oldStorage[i].length; j++){
				var tupal = oldStorage[i][j];
				this.insert(tupal[0], tupal[1]);
			}
		}

	}
}

HashTable.prototype.remove = function(key){

	var index = this.hashingFunction(key, this.max);
	var bucket = this.storage[index];


	if(bucket === undefined){
		return false;
	}

	for(var i = 0; i < bucket.length; i++){

		console.log("I am removing: ",bucket[i][0])

		if(bucket[i][0] === key){
			bucket.splice(i, 1);
			this.size --;

			if(this.size < this.max / 2){
				this.resize(this.size/2);
			}
		}
	}
}

HashTable.prototype.retrieve = function(key){
	var index = this.hashingFunction(key, this.max);
	var bucket = this.storage[index];

	if(bucket === undefined){
		return false;
	}else{
		for(var i = 0; i< bucket.length; i++){
			if(bucket[i][0] === key){
				return true;
			}
		}
		return false;
	}

}



table = new HashTable();
table.insert("John", 56);
table.insert("Lucas", 16);
table.insert("Monika", 46);
table.insert("Lucas", 'yellow')
table.insert("jessica", 'blue')
table.insert("Bryan", 'green')
table.insert("Slava", 11)
table.insert("Miko", 10)

table.remove('Lucas')
table.remove("Slava")

console.log(table.retrieve("Miko"));

console.log(table.storage);



