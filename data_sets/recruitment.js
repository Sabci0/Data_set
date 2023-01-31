var x = 10
var y = {num: 9}

function foo(x, y){
    x = 11
    y.num = 8
    y = 7
}
foo(x,y);
console.log(x);
console.log(y);

function mathXY (a, b){
    let result = 1
    for (let i = 0; i < b; i++){
        result = result * a
    }
    return result
}

console.log(mathXY(2 , 0));
console.log(mathXY(2 , 3));


function rmoveD (elements){
     const result = []
     const x = {}
    for (const element of elements){
        if (x.hasOwnProperty(element)){
            continue;
        }
        x[element] = true;
        result.push(element)
    }
    return result
}

console.log(rmoveD([4,6,3,4,4,1,6,7,3]))
 f = [1,2,3,4]
f.splice(2,1)
console.log(f)