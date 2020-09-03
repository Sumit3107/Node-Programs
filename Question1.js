// Q1. A. Create an arrow function that takes two numbers num1, num2, and an array arr and
// returns an array containing all the numbers in arr greater than num1 and less than num2.
// Example arr Between(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]


rangedArray = (num1,num2,arr) => {
    result=[];
    for(var i=0,a=0;i<arr.length;i++)
    {
    if(arr[i]>num1 && arr[i]<num2)
    {
    result[a] = arr[i];
    a++;
    }
    }
    return result;
    }
    console.log(rangedArray(3, 8, [1, 5, 95, 0, 4, 7]));