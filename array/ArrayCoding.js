// intersection of two array
let arr = [1,2,3,4,5];
let arr2 = [3,4,6,7,8];
console.log(arr.filter(value=> arr2.includes(value)));

//remove falsy value from the array

let mixedArray = [1,2,false,"",true,0];
let truthArray = mixedArray.filter(Boolean);
console.log(truthArray);

//remove duplicates elements from an array
let dupArray = [1,2,3,2,4,3,5];
let seen = [];
for(let i=0;i<dupArray.length;i++){
    if(!seen.includes(dupArray[i])){
        seen.push(dupArray[i]);
    }
}
console.log(seen);