function reverseParentheses(s) {
  for(var i = 0; i < s.length; i++) {
  	console.log("i is :", i);
    if(s[i] === ")") {
    	
      s = s.substring(0, i) + s.substring(i + 1);
      console.log(" the s is: ", s)
      i--;
      var reversed = "";
      while(s[i] !== "(") {
        reversed += s[i];
        s = s.substring(0, i) + s.substring(i + 1);
        // console.log("in the while loop the s is: ", s)
        i --;
      }
      s = s.substring(0, i) + reversed + s.substring(i + 1);
      i += reversed.length - 1;
    }
  }
  return s;
}


console.log(reverseParentheses("abc(ab(zx)tp)"));