function equilibrium_point(array){

	var sum = 0;
	console.log(array)

	for(var i = 0; i < array.length; i++){
		sum += array[i];
	}


	var left_sum = 0;

	for(var j = 0; j < array.length; j ++){
		sum -= array[j];

		if(sum == left_sum){
			return (j + 1);
		}else{
			left_sum += array[j];
		}
	}

	return -1;
}

console.log(equilibrium_point([1,3,5,2,2]))