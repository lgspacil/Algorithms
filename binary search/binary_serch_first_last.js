array = [3,4,5,5,5,8,9,10,11,14,17,20];

function binary_search(array, val){

	var low = 0;
	var high = array.length -1;

	while(low <= high){

		var middle = Math.floor((low + high) / 2);
		// console.log("the middle is: ", middle);


		if(array[middle] == val){
			return middle;
		}else if(val < array[middle]){
			high = middle - 1;
		}else if(val > array[middle]){
			low = middle + 1;
		}
	}

	return false;
}
// console.log(binary_search(array, 9))

//what if you want to find the first occurance of an element in a sorted array?

function binary_first_occurance(array, val){

	var low = 0;
	var high = array.length -1;
	var result = -1;

	while(low <= high){

		var middle = Math.floor((low + high)/ 2);

		if(array[middle] == val){
			result = middle;
			//you set the high to go to the left since you want to find the first value so it must be more to the left
			high = middle -1;
		}else if(val < array[middle]){
			high = middle -1;
		}else if(val > array[middle]){
			low = middle + 1;
		}
	}

	if(result == -1){
		return false;
	}else{
		return result;
	}
}

// console.log(binary_first_occurance(array, 5))

function last_occurance_binary(array, val){
	low = 0;
	high = array.length - 1;

	while(low <= high){
		
		var middle = Math.floor((low + high)/ 2);

		if(array[middle] == val){
			result = middle;
			low = middle +1;
		}else if(val < array[middle]){
			high = middle -1;
		}else if(val > array[middle]){
			low = middle + 1;
		}
	}
		
	if(result == -1){
		return false;
	}else{
		return result;
	}

}

console.log(last_occurance_binary(array, 5))