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


// right rotate by k elements
function rightRotate(arr,k){
for(let i=0;i<k;i++){
    let last = arr[arr.length-1];
    for(let k=arr.length-1;k>0;k--){
        arr[k]=arr[k-1];
    }
    arr[0] = last;
}
return arr;
}
let rightArray = [1,2,3,4,5];  //o/p = [4,5,1,2,3]
console.log(rightRotate(rightArray,2));


// count the occurence of the elements of an array

let elemArray = [1,2,3,2,4,3,5];

let maxEle = Math.max(...elemArray);

let countArray = new Array(maxEle + 1).fill(0);
for(let i=0;i<elemArray.length;i++){
    countArray[elemArray[i]]++;
}
console.log(countArray);

//second method

let countObj = {};
for(let i=0;i<elemArray.length;i++){
    let value = elemArray[i];
    if(!countObj[value]){
        countObj[value] =1;
    }
    else{
        countObj[value] +=1;
    }
}
console.log(countObj,"countObj");


//secondMax element in an array
let elementArray = [1,2,3,4,5];

let max=Number.MIN_VALUE;;
let secondMax = Number.MIN_VALUE;;
for(let i=0;i<elementArray.length;i++){
    if(elementArray[i]>max){
        secondMax = max;
        max=elementArray[i];
    }
    else if(elementArray[i]>secondMax && elementArray[i]!==max){
        secondMax = elementArray[i];
    }
}
console.log(max,secondMax);



// second minimum element in the array
let min = Number.MAX_VALUE;
let secondMin = Number.MAX_VALUE;
for(let i=0;i<elementArray.length;i++){
    if(elementArray[i] < min){
        secondMin = min;
        min = elementArray[i];
    }
    else if(elementArray[i] < secondMin && elementArray[i]!=min){
        secondMin = elementArray[i];
    }
}
console.log(secondMin,min);


//maximum sum subarray

function maximumSubarraySum(arr){
    let res = arr[0];
    for(let i=0;i<arr.length;i++){
        let currSum = 0;
        for(let j=i;j<arr.length;j++){
            currSum = currSum+arr[j];
            res = Math.max(res,currSum);
        }
    }
    return res;
}
console.log(maximumSubarraySum([2,3-8,7,1,2,3]));

// find kth largest element in an array

function kthLargestNumber(arr,k){
    //sort the array in descending order
    arr.sort((a,b)=>b-a);
    return arr[k-1];

}
console.log(kthLargestNumber([1,2,3,4,5,6],3));


// find kth smallest element in an array

function kthSmallestNumber(arr,k){
    //sort the array in descending order
    arr.sort((a,b)=>a-b);
    return arr[k-1];

}
console.log(kthSmallestNumber([1,2,3,4,5,6],3));

// shift all zeroes to the end of an array

function shiftZeroesAtEnd(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]===0 && arr[j+1]!=0){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(shiftZeroesAtEnd([1,0,2,3,0,4,0]));


// shift all zeroes to the beginning of an array
function shiftZeroesAtBeginning(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]!=0 && arr[j+1]===0){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(shiftZeroesAtBeginning([1,0,2,3,0,4,0]));


//traverse 2D Array

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

function traverse2DArray(arr){
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            console.log('value',matrix[i][j]);
        }
    }
}
traverse2DArray(matrix);

//sum of all elements of 2d array

function sum2DArrayElements(arr){
    let totalSum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
           // console.log('value',arr[i][j]);
            totalSum += arr[i][j];
        }
    }
    console.log(totalSum,'totalSum');
}
sum2DArrayElements(matrix);

//find maximum elements in 2d array
function findMaximumElements(arr){
    let maximum = Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i][j] > maximum){
                maximum = arr[i][j];
            }
        }
    }
    return maximum;
}
console.log(findMaximumElements(matrix));

// find second largest element in an array

function secondLargestIn2DArray(arr){
    let largest = Number.MIN_VALUE;
    let secondLargest = Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[j][i] > largest){
                secondLargest = largest;
                largest = arr[j][i];
            }
            else if(arr[j][i] > secondLargest && arr[j][i] !== largest){
                secondLargest = arr[j][i];
            }
        }
    }
    return secondLargest;
}
console.log(secondLargestIn2DArray(matrix));

//transpose of a matrix
function transposeMatrix(arr){
    console.log(arr);
    let result = [];
    for(let i=0;i<arr[0].length;i++){
        let row=[];
        for(let j=0;j<arr.length;j++){
            row.push(arr[j][i]);
        }
        result.push(row);
    }
    return result;
}
console.log(transposeMatrix([[1,2,3],[4,5,6]]));

