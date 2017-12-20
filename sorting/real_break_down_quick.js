function QuickSort(array, start, end){

    console.log("START --> ", start);
    console.log("END --> ", end);

    if(start >= end){
        console.log("it will not do this round since the start is___: ", start, " and the end is__: ", end);
        return;
    }

    var index_of_pivot = partition(array, start, end);

    //figure out the left first;
    QuickSort(array, start, index_of_pivot -1);

    //do the right side
    QuickSort(array, index_of_pivot + 1, end);

    return array;
}



function partition(array, start, end){
    
    console.log("IN THE PARTION FUNCTION")
    console.log("the start is: ", start, " and the end is: ", end);
    var pivot = end;

    var partition_index = start;

    for(var i = start; i < pivot; i++){
        if(array[i] <= array[pivot]){
            var temp = array[partition_index];
            array[partition_index] = array[i];
            array[i] = temp;
            partition_index ++;
        }
    }

    var temp = array[pivot];
    array[pivot] = array[partition_index];
    array[partition_index] = temp;

    console.log("after the partition the array is: ", array);
    console.log("the partition_index is: ", partition_index);
    return partition_index;

}

a = [5,3,6,7,9,1];

console.log(QuickSort(a, 0, a.length - 1))