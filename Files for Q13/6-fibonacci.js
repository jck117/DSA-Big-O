/* 6. Fibonacci ------------------------------------------------------------------ */

let ticks=0

function fibonacci(n){
    //base case
    if(n === 1){
        ticks++
        return [n]
    }
    if(n === 2){
        ticks++
        let a = fibonacci(n-1)
        a.push(n-1)
        return a;
    }    
    //general case
    ticks++    
    let a = fibonacci(n-1);
    ticks++
    a.push(a[a.length-1]+a[a.length-2])
    return a;
}

fibonacci(3)
console.log({n: 3, ticks})
ticks=0

fibonacci(6)
console.log({n: 6, ticks})
ticks=0

fibonacci(9)
console.log({n: 9, ticks})
ticks=0

fibonacci(12)
console.log({n: 12, ticks})

//node 6-fibonacci.js
