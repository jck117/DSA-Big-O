//#4. Doubler 

//Q. What is the Big O of the following algorithm? Explain your answer

//Answer: O(n) because running time is directly proportional to the size of the input.

function doubleArrayValues(array) {
    let ticks = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
        ticks++;
    }
    return { array, input: array.length, ticks };
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];


const a = doubleArrayValues(arr1);
const b = doubleArrayValues(arr2);

console.log(a)
console.log(b)

//node 4-doubler