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

// remove repeating elements
const removeDuplicates = dupArray.filter(value=>dupArray.indexOf(value)===dupArray.lastIndexOf(value));
console.log("rm duplicate by filter",removeDuplicates);

// remove unique elements
const removeUniqueEle = dupArray.filter(value=>dupArray.indexOf(value)!==dupArray.lastIndexOf(value));
console.log("rm unique by filter",removeUniqueEle);


//check two array is equal or not, element order not matter
let a=[1,2,3,4];
let b = [2,4,3,1];
console.log(a==b);

let data  = a.length===b.length && a.every(value=>b.includes(value));
console.log(data);

//  left rotate of an array by k elements

function leftRotate(arr,k){
for(let i=0;i<k;i++){
    let first = arr[0];
    for(let k=0;k<arr.length-1;k++){
        arr[k]=arr[k+1];
    }
    arr[arr.length-1] = first;
}
return arr;
}
let leftArray = [1,2,3,4,5];  //o/p = [3,4,5,1,2]
console.log(leftRotate(leftArray,2))