//how many times is a sorted array rotated??
// there are no duplicates in the array
array = [2,3,5,8,11,12];

array2 = [11,12,15,18,2,5,6,8]

// 1 rotation => 12,2,3,5,8,11
// 2 rotation => 11,12,2,3,5,8

//it should be clear that the number of times something is rotated is the current index the first element is at
//case 1, 
//if the array[low] < array[high] then the array is sotted and return the low index

//case 2
//if the middle's next and previous are both greater than it, return that number since its the lowest

//case 3
//if arr[mid] <= arr[high] we discard the right side => high = mid -1

//case 4
//if arr[mid] >= arr[low] we discard the left side  => low = mid + 1

function circle_rotation(array){
	low = 0;
	high = array.length - 1;

	while (low <= high){

		if(array[low] <= array[high]){
			return low;
			//case 1;
		}

		var mid = Math.floor((low + high) / 2);
		var next = (mid + 1) % array.length -1;
		var prev = (mid + array.length -2) % array.length -1;

		if(array[mid] <= array[next] && array[mid] <= array[prev]){
			return mid;
			//case 2
		}

		else if(array[mid] <= array[high]){
			high = mid -1
			//case 3
		}

		else if(array[mid] >= array[low]){
			low = mid + 1
			//case 4
		}
	}
}

console.log(circle_rotation(array2))