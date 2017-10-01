
//if we are given a sorted array from below we should always think to use BINAT SEARCH!
// we know how to find the fist instance of that value and we know how to find the last instance of that value
// combine the two and we will then know how many occur in the array
array = [1,1,3,3,5,5,5,5,5,9,9,11]

function binary_first_occurance(array, val){

	var low = 0;
	var high = array.length -1;
	var result = -1;

	while(low <= high){

		var middle = Math.floor((low + high)/ 2);

		if(array[middle] == val){
			result = middle;
			high = middle -1;
		}else if(val < array[middle]){
			high = middle -1;
		}else if(val > array[middle]){
			low = middle + 1;
		}
	}

	if(result == -1){
		return 0;
	}else{
		return result;
	}
}

function binary_last_occurance(array, val){
	low = 0;
	high = array.length - 1;
	result = -1;

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
		return 0;
	}else{
		return result;
	}

}

function counting(array, val){

	var num_val_found = 0;
	var first = binary_first_occurance(array, val);
	var last = binary_last_occurance(array, val);
	
	//if first or last == 0, no val was found
	if(first == 0){
		return 0
	}else{
		return (last - first + 1)
	}
}

console.log(counting(array, 19));