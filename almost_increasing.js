function almostIncreasingSequence(sequence) {
    
    var removed = 0;
    var i = 0;
    while (i < sequence.length - 1){
        if(sequence[i]<sequence[i+1]){
            console.log("yes ", sequence[i], " is less than ", sequence[i+1])
            i += 1;
        }
        else{
            console.log("no.. ", sequence[i], " is NOT less than ", sequence[i+1]);
            
            if(sequence[i - 1] < sequence[i+1] || i == 0){
                console.log("I have to splice ", sequence[i]);
                sequence.splice(i, 1);
                removed += 1;
            }else{
                console.log("I have to splice ", sequence[i + 1]);
                sequence.splice(i + 1, 1);
                removed += 1;  
            }
            
        }
        
        if(removed > 1){
            return false;
            break;
        }

        console.log("the array is now...", sequence);
    }
    return true;
}


console.log(almostIncreasingSequence([10, 2, 3, 4, 5, 6]))