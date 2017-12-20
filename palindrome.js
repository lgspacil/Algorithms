function checkPalindrome(inputString) {
    
    splits = inputString.split('');
    
    var start = 0;
    var end = splits.length -1;
    
    while(start <= end){
        if(splits[start] == splits[end]){
            start ++;
            end --;
        }else{
            return false;
            end;
        }
    }
    return true;
}

console.log(checkPalindrome('racecar'));