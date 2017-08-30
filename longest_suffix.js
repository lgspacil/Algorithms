function longest_suffic(arr){
	var suffix = "";
	for (var i = 0; i < arr.length; i++){
		var temp = arr[i][arr.length - 1 - i]
		for (var i = 0; i<arr.length; i++){
			if (temp != arr[i][arr.length -1 -i]){
				return suffix;
			}
		}
		suffix = temp + suffix;
	}
}