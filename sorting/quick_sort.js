array = [7, 2, 1, 6, 8, 5, 3, 4];


console.log("the original array is, ", array)


function QuickSort(array, start, end){
	
	//stop the recusive function if array is one element long
	if(start >= end){
		console.log("the start is: ", start, " and the end is: ", end)
		return
	}

	index_of_pivot = Partition(array, start, end);

	console.log("the array is++++", array)
	//recursive function to break up the array
	//the left side
	QuickSort(array, start, index_of_pivot -1);

	//the right side
	QuickSort(array, index_of_pivot + 1, end);

	return array;
}

function Partition(array, start, end){

	//the right most element in the array will be the pivot
	var pivot = end;
	
	partition_index = start;

	for(var i = start; i < pivot; i++){
		// always checking if the next element is smaller than the pivot
		// if its smaller then make a swap with the partition_index
		if(array[i] <= array[pivot]){

			var temp = array[partition_index];
			array[partition_index] = array[i];
			array[i] = temp;

			//increment the partition index;
			partition_index ++;
		}
	}

	//after all the swaps have been made and the lowest values are on the left and highest on the right according to the pivot
	// we have to now swap the pivot at the end with the value in the pivot index;
	
	var temp = array[partition_index];
	array[partition_index] = array[pivot];
	array[pivot] = temp;

	return partition_index;
}




console.log(QuickSort(array, 0, array.length -1))





