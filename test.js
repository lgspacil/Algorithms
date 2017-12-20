var c = [ "xxx", "aaa", "yyy", "hij", 'ggg' ];
var s = [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ] ];


function stringSort(current, seen){

	//setting the seen array of arrays into one array
	var seen_flattened = seen.reduce(function(a, b) {
		return a.concat(b);
	}, []);


	let flattened_dict = {};
	let newstrings = [];

	//adding the seen array into a dictionary 
	for(var i = 0; i<seen_flattened.length; i++){
		flattened_dict[seen_flattened[i]] = 1;
	}

	//checking the current array if it is in the dictionary to cut down run time
	for(var i = 0; i < current.length; i++){
		if(!(current[i] in flattened_dict)){
			newstrings.push(current[i]);
		}
	}
	
	//removing the first element in the seen array
	seen.shift();
	
	//adding the newstring to the end of the array
	seen.push(newstrings);

	console.log(newstrings);
	console.log(seen)

}

stringSort(c, s);