
array = [17, 9, 3, 23, 11, 19, 4];

function mergeSort(array){

	if(array.length < 2){
		console.log("i am returning: ", array)
		return;
	}

	var middle = Math.floor(array.length / 2);
	var left = array.slice(0, middle);
	var right = array.slice(middle);

	console.log("the middle is: ", middle, " the left is: ", left, " the right is: ", right);

	mergeSort(left);
	mergeSort(right);

	merge(array, left, right);
	console.log("$$$$")
	return array;

}

function merge(array, left, right){

	console.log("entering the merge function ======= the left array:", left, " the right array ", right)
	var l = 0;
	var r = 0;
	var a = 0;

	while(l < left.length && r < right.length){
		if(left[l] <= right[r]){
			array[a] = left[l];
			l++;
		}else{
			array[a] = right[r];
			r++
		}
		a++;
	}

	while(l < left.length){
		array[a] = left[l];
		l++;
		a++;
	}

	while(r < right.length){
		array[a] = right[r];
		r++;
		a++;
	}

	console.log("**** the array at the end of the merge function is ****", array)
	return(array);
	
}

console.log(mergeSort(array));

