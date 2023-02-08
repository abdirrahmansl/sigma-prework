let arr = [2,4,1,0,2,-1]

function maxMin(array) {
    let x = array
    let output = [];
    var a = x[0];
    var b = x[0];

    for (let i = 0; i < x.length; i++) {
        if ( x[i] < a) {
            a = x[i] 
        }
         if (x[i] > b) {
            b = x[i] 
        }

    }
    output.push(a,b)
    console.log(output)

}
maxMin(arr)