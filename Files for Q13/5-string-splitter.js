/* 5. String Splitter ------------------------------------------------------------------ */

let ticks = 0

function stringSplitter(string, delimiters) {
    //base case
    if (!delimiters.length){ 
        ticks++
        return string;
    }    
    //general case
    ticks++
    return string.split(delimiters[0]).map(element => stringSplitter(element, delimiters.slice(1)));
}
  

stringSplitter('2', ['/'])
console.log({n: "2", ticks})
ticks=0

stringSplitter('2/20', ['/'])
console.log({n: "2/20", ticks})
ticks=0

stringSplitter('2/20/2020', ['/'])
console.log({n: "2/20/2020", ticks})



//node 5-string-splitter.js