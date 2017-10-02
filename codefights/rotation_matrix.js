//in this example think that the i changes numbers but the j will remain at 0.


function rotate(matrix) {
    var n = matrix.length;
    for (var i = 0; i < n / 2; i++) {
        for (var j = 0; j < Math.floor(n/2); j++) {
            console.log("starting the for loop, j is: ", j, " and i is: ", i);

            var temp = matrix[i][j];
            console.log("the temp is: ", temp);

            console.log("1) swapping ", matrix[i][j], " with ", matrix[n-1-j][i]);  
            matrix[i][j] = matrix[n-1-j][i];
            
            console.log("2) swapping ", matrix[n-1-j][i], " with ", matrix[n-1-i][n-1-j]);
            matrix[n-1-j][i] = matrix[n-1-i][n-1-j];
            
            console.log("3) swapping ", matrix[n-1-i][n-1-j], " with ", matrix[j][n-1-i]);
            matrix[n-1-i][n-1-j] = matrix[j][n-1-i];
            
            console.log("4) swapping ", matrix[j][n-1-i], " with ", temp);
            matrix[j][n-1-i] = temp;
        }
    }
    return matrix;
}



console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))




