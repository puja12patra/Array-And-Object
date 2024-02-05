// 2. The following is an array of 10 students ages:
// => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// « Sort the array and find the min and max age.
// + Find the median age(one middle item or two middle items divided by two)
// + Find the average age(all ites divided by number of items)
// + Find the range of the ages(max minus min)
// * Compare the value of (min - average) and (max - average), use abs(} method

 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
//Sort the array
let sortedArrayNum = ages.sort( (a, b) => a - b );
console.log("Sorted Array = ", sortedArrayNum);
//OUTPUT:
// Sorted Array =  [
//     19, 19, 20, 22, 24,
//     24, 24, 25, 25, 26
//   ]

// Find the minimum age
let minAge = Math.min(...ages);
// Find the maximum age
let maxAge = Math.max(...ages);
console.log("Minimum Age:", minAge);//OUTPUT: Minimum Age: 19
console.log("Maximum Age:", maxAge);//OUTPUT: Maximum Age: 26

//Find median 
let Ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sortedAges = Ages.sort( (a,b)=> a-b );
let Ageslength = Ages.length;
let median;
if(Ageslength % 2 === 0)
{
    let middle1 = Ageslength / 2;
    let middle2 = middle1 - 1;
    median = Math.floor((sortedAges[middle1] + sortedAges[middle2]) / 2)
    console.log("Median Age for even array:", median);//OUTPUT: Median Age for even array: 24
}
else
{
    let middle_element = Math.ceil(Ageslength/2)
    median = sortedAges[middle_element];
    console.log("Median Age for odd array:", median);
}



// Find the average age(all items divided by number of items or length)

let originalAges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sumAges = 0;
for(let i=0;i<originalAges.length;i++)
{
sumAges = sumAges + originalAges[i];
}
let avgAge = sumAges / (originalAges.length);
console.log("Average age:",avgAge);//OUTPUT: Average age: 22.8

//Find the range of the ages(max minus min)
let given_Ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let min_Age = Math.min(...given_Ages);
let max_Age = Math.max(...given_Ages);
let ageRange = max_Age - min_Age
console.log("Range of the ages:",ageRange);//OUTPUT: Range of the ages: 7


//Compare the value of (min - average) and (max - average), use abs(} method
let GivenAges = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let MinAge = Math.min(...GivenAges);
let MaxAge = Math.max(...GivenAges);
let AvgAge = sumAges / (GivenAges.length);

// Calculate the absolute differences
let absDiffMinAverage = Math.abs(MinAge - AvgAge);
let absDiffMaxAverage = Math.abs(MaxAge - AvgAge);
console.log("Absolute Difference (min - average):", absDiffMinAverage);//OUTPUT: Absolute Difference (min - average): 3.8000000000000007
console.log("Absolute Difference (max - average):", absDiffMaxAverage);//OUTPUT: Absolute Difference (max - average): 3.1999999999999993