var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];

function getMidPoint(arr, searchNumb) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var newArr = arr;
    console.log("the new array is: ",arr);
    console.log("array midpoint value: " + arr[midPoint]);


    if (arr[midPoint] > searchNumb) {

        var newArr = arr.slice(0, midPoint);
        return getMidPoint(newArr, searchNumb);

    } else if (arr[midPoint] < searchNumb) {

        var newArr = arr.slice(midPoint + 1, arr.length);
        return getMidPoint(newArr, searchNumb);

    } else if(arr[midPoint] == searchNumb) {
        return true;
    }else{
        return false;
    }
}

console.log(getMidPoint(arr, 17))