function longestPrefix(array){

	var longest_prefix = '';
	var length = array[0].length;

	//find the smallest word
	for(var i = 1; i < array.length; i++){
		if(array[i].length < length){
			length = array[i].length;
			longest_prefix = array[i];
		}
	}

	for(var j = 0; j < array.length; j++){
		console.log('the longest_prefix is ->', longest_prefix)
		if(array[j].slice(0,length) == longest_prefix){
			console.log('j = ', j)
			console.log('they equal move on....')
		}else{
			console.log("i am here")
			longest_prefix = longest_prefix.substring(0, longest_prefix.length -1);
			j = 0;
			length -= 1;
		}
	}

	console.log('index_of_shortest ->', longest_prefix);
	console.log('length ->', length);
}

longestPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer'])