function palindromeRearranging(inputString) {

	split = inputString.split('');

	dict = {};
	single_chars = 0;

	for(var i = 0; i < split.length; i++){
		if(dict[split[i]] == undefined){
			dict[split[i]] = 1;
		}else{
			dict[split[i]] += 1;
		}
	}

	for(key in dict){
		if(dict[key] % 2 == 0){
			continue
		}else{
			single_chars += 1;
		}
	}

	if(single_chars <= 1){
		return true;
	}else{
		return false;
	}

}

console.log(palindromeRearranging("aaaaaaaaaaaaaaaaab"))


