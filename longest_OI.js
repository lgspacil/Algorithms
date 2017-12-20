function longestString(input){

	var max_length = 0;
	var current_length = 0;
	var string = input.split('');
	var bool = false;

	for (var i = 0; i < string.length; i++){
		if (string[i] == '1'){
			current_length += 1;
			bool = true;
		}

		if (string[i] == '0' && bool == true){
			if(current_length > max_length){
				max_length = current_length;
			}

			current_length = 0;
			bool = false;
		}
	}

	if(current_length > max_length){
		max_length = current_length;
	}

	return max_length;
}

console.log(longestString('0110011111001010111111011111111000001'));