function longestString(string){
	var new_string = string.split('');
	
	var current_string = "";
	var max_string = "";

	for(var i = 0; i < new_string.length; i++){

		console.log("i is: ", i)
		// console.log("the max_string is: ", max_string);

		if(!current_string.includes(new_string[i])){
			current_string += new_string[i];
			console.log("the current_string is: ", current_string)
		}

		else if(current_string.includes(new_string[i])){
			if(max_string.length < current_string.length){
				max_string = current_string;
			}
			current_string = current_string.slice(1, current_string.length);
			console.log("sup the current_string -->", current_string)
			i --;
		}
	}

	console.log("the longestString is: ", max_string);

}

longestString('bbbbb')