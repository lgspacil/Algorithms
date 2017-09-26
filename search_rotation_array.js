var array = [10,12,5,6,7,8,9];

function sorted_rotation(array, value){

    var low = 0;
    var high = array.length - 1;

    while(low <= high){
        var mid = Math.floor((low + high) / 2);

        if(array[mid] == value){
            return mid;
        }
    
        //the right side of the array is sorted
        if(array[mid] <= array[high]){
            if(array[mid] <= value && value <= array[high]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    
        //the left side of the array is sorted
        if(array[mid] >= array[low]){
            if(array[mid] >= value && value >= array[low]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
    }

    return -1;
}

console.log(sorted_rotation(array, 8));