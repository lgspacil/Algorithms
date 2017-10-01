//this function will take three arrays
function merge(left, right, array){

	
	var length_left = left.length;
	var length_right = right.length;

	// smallest in left or right
	// a marks the position that needs to be filled
	var l = 0, r = 0, a = 0;

	// checking the sorted arrays to see which one should overirde the array
	while(l < length_left && r < length_right){

		if(left[l] <= right[r]){
			array[a] = left[l];
			l++;
		}else{
			array[a] = right[r];
			r++;
		}
		a++;
	}

	// after we have exhausted the one of the sides of the arrays either left or right
	// we need to fill up the array with the left over array
	// only one of these loops will execute
	while(l < length_left){
		array[a] = left[l];
		l++;
		a++;
	}

	while(r < length_right){
		array[a] = right[r];
		r++;
		a++;
	}

}

//this is the function that Breaks apart the array into smaller pieces;
function mergeSort(array){

	// we only need to break apart the array into smaller halfs if the array.length is smaller than 2
	if(array.length < 2){
		return;
	}

	// get mid point
	var mid = Math.floor(array.length / 2);

	// split up the array in 2 halfs recursively
	var left = array.slice(0, mid);
	var right = array.slice(mid);

	

	mergeSort(left);
	mergeSort(right);

	merge(left, right, array);

	return array;
}


console.log(mergeSort([7,1,4,2,6,8,0]));