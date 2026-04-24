// PATTERN 1
{
  //   let n = 4;
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= n; j++) {
  //       process.stdout.write("* ");
  //     }
  //     console.log();
  //   }
}

// PATTERN 2
{
  //   let n = 5;
  //   let m = 3;
  //   for (let i = 1; i <= m; i++) {
  //     for (let j = 1; j <= n; j++) {
  //       process.stdout.write("* ");
  //     }
  //     console.log();
  //   }
}

// PATTERN 3
{
  // let n =5
  // for(let i=1; i<=n; i++){
  //     for(let j=1; j<=i; j++){
  //         process.stdout.write("* ")
  //     }
  //     console.log()
  // }
}

// PATTERN 4
{
  //   let n = 5;
  //   for (let i = n; i >= -1; i--) {
  //     for (let j = 1; j <= i; j++) {
  //       process.stdout.write("* ");
  //     }
  //     console.log();
  //   }
}

// PATTERN 5
{
  //   let n = 10;
  //   for (let row = 1; row <= n; row++) {
  //     for (let col = 1; col <= n - row; col++) {
  //       process.stdout.write(" ");
  //     }
  //     for (let col = 1; col < n; col++) {
  //       process.stdout.write("* ");
  //     }
  //     console.log();
  //   }
}

// PATTERN 6

{
  // let n = 5;
  // for (let row = 1; row <= n; row++) {
  //   for (let col = 1; col <= n - row; col++) {
  //     process.stdout.write(" ");
  //   }
  //   for (let col = 1; col <= 2 * row - 1; col++) {
  //     process.stdout.write("*");
  //   }
  //   console.log();
  // }
}

// PATTERN 7

{
  // let n = 5;
  // for (let row = n; row >= 1; n--) {
  //   for(let col = n; col>=row-n; col--){
  //     process.stdout.write(" ")
  //   }
  //   for(let col = n; col<2*row+1; col--){
  //     process.stdout.write("*");
  //   }
  //   console.log()
  // }
}

{
  // let str = "AABBCDD"
  // // ABCD
  // let pureStr=""
  // for(let i=0; i<str.length; i++ ){
  //   if(pureStr.includes(str[i])){
  //     pureStr+=""
  //   }
  //   else{
  //     pureStr+=str[i]
  //   }
  // }
  // console.info(pureStr)
}

// PALINDROME
{
  // let str = "vive"
  // if(str){
  //   let reverse = ''
  //   for(let i = str.length-1; i>=0; i--){
  //     reverse+=str[i]
  //   }
  //   console.log(reverse)
  // }
}

// PRIME NUMBER
{
  // let primeNumber = 21
  // let isPrime = true
  // if(primeNumber <= 1){
  //   isPrime = false
  // }
  // if(primeNumber === 2){
  //       isPrime = true
  // }
  // for(let i=3; i<=Math.floor(primeNumber/2); i+=2){
  //   if(primeNumber%i === 0){
  //     isPrime = false
  //   }
  // }
  // console.info(isPrime)
}

// FACTORIAL
// {
//   function fact(n){
//     if(n===0 | n===1){
//       return 1
//     }
//     return n * fact(n -1)
//   }
// }

// console.info(fact(1))

// FIBONACCI

{
  // let number = 1;
  // if (number < 0) {
  //   console.info("bot valid number");
  // } else if (number === 1) {
  //   console.info(0);
  // } else {
  //   let a = 0;
  //   let b = 1;
  //   let temp;
  //   for (let i = 1; i <= number; i++) {
  //     console.info(a);
  //     temp = a + b;
  //     a = b;
  //     b = temp;
  //   }
  // }
  // function fib(n) {
  //   if (n < 0) {
  //     return [];
  //   } else if (n === 1) {
  //     return [0];
  //   } else {
  //     let sequence = [0, 1];
  //     for (let i = 2; i < n; i++) {
  //       const nextSequence = sequence[i - 1] + sequence[i - 2];
  //       sequence.push(nextSequence);
  //     }
  //     return sequence;
  //   }
  // }
  // console.log(fib(5));
}

// Find Largest Number from arr
{
  // function largest(arr){
  //   if(arr.length === 1){
  //     return arr
  //   }
  //   let largestNumber = arr[0]
  //   for(let i=1; i<=arr.length; i++){
  //     if(arr[i]>largestNumber){
  //       largestNumber = arr[i]
  //     }
  //   }
  //   return largestNumber
  // }
  // console.log(largest([10,20,30,40,2]))
}

// Find two Largest Number from arr

{
  // function twoLargest(arr){
  //   let firstLarge = arr[0]
  //   let secondLarge = -Infinity
  //   for(let i=1; i<arr.length; i++){
  //     if(arr[i]>firstLarge){
  //       secondLarge = firstLarge
  //       firstLarge= arr[i]
  //     }
  //     else if(arr[i] < firstLarge && arr[i]>secondLarge){
  //       secondLarge = arr[i]
  //     }
  //   }
  //   return ({firstLarge,secondLarge})
  // }
  // console.log(twoLargest([10,20,2,30,50,40]))
}

// Debouncing
{
  //   let timeId
  //   function debouncing(value,delay){
  //       clearTimeout(timeId)
  //       timeId = setTimeout((()=>console.log("hello from "+value)),delay)
  //   }
  // for(let i=1; i<=5; i++){
  //   debouncing("viv",1000)
  // }
}

{
  // function removeDuplicateValue(arr) {
  //   let singleArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     singleArr.push(arr[i]);
  //     for (let j = 0; j < singleArr.length - 1; j++) {
  //       if (singleArr[j] === arr[i]) {
  //         singleArr.pop();
  //         break;
  //       }
  //     }
  //   }
  //   console.log(singleArr);
  // }
  // removeDuplicateValue([10, 20, 30, 30, 40, 40, 50]);
}

// [1,3,12,0,0]
{
  // let arr = [0,1,0,3,12]
  // let output = []
  // for(let i = 0; i<arr.length; i++){
  //   if(arr[i]!==0){
  //     output.push(arr[i])
  //   }
  // }
  // for(let i = 0; i<arr.length; i++){
  //   if(arr[i]===0){
  //     output.push(arr[i])
  //   }
  // }
  // console.log(output)
}

// 'aabbccdee'
// 'd'
{
  // let str = 'aabbccdee'
  // let result ={}
  // for(let char of str){
  //   if(result[char]){
  //     result[char]++
  //   }
  //   else{
  //     result[char] = 1
  //   }
  // }
  // for(let key in result){
  //   if(result[key] === 1)
  //     console.log(key)
  // }
  // console.log(result)
}

// reverse word
{
  // let word = "I Love JS";
  // let reverseWord = "";
  // let temp = "";
  // for (let i = 0; i < word.length; i++) {
  //   if (word[i] !== " ") {
  //     temp += word[i];
  //   } else {
  //     reverseWord = temp + " " + reverseWord;
  //     temp = "";
  //   }
  // }
  // reverseWord = temp + " " + reverseWord;
  // console.log(reverseWord);
}

{
  // let number = [ 100, 500, 700, 800, 200 ]
  // let ans = {}
  // for(let i=0; i<= number.length; i++){
  //   for(let j=i+1; j<number.length; j++){
  //     if(number[i]+number[j] === 1500){
  //       ans ={ num1:number[i],numb2:number[j]}
  //     }
  //   }
  // }
  // console.log(ans)
}

// Min & Max from array
{
  // let arr = [10, 20, 3, 50, 6];
  // let max, min;
  // for (let i = 0; i <= arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       max = arr[i];
  //     }
  //     if (arr[i] < arr[j]) {
  //       min = arr[i];
  //     }
  //   }
  // }
  // console.log(max);
  // console.log(min);
}

// Reverse Array
{
  // let arr = [10,20,30,40]
  // let reverseArray = []
  // for(let i=arr.length-1; i>=0; i--){
  //   reverseArray.push(arr[i])
  // }
  // console.log(reverseArray)
}

// Find second largest element
{
  // let arr = [10,20,3,5,34,40,60]
  // let temp = arr[0]
  // let secondLarge = arr[1]
  // for(let i=0; i<=arr.length-1; i++){
  //   if(arr[i]>temp){
  //     secondLarge = temp
  //     temp = arr[i]
  //   }else if(arr[i]<temp && secondLarge<arr[i]){
  //     secondLarge=arr[i]
  //   }
  // }
  // console.log(secondLarge)
}

// Check if array is sorted
{
  // let arr = [10,20,30,40,50]
  // let isSorted = true
  // for(let i=0; i<arr.length; i++){
  //   if(arr[i]>=arr[i+1]){
  //     isSorted = false
  //     break
  //   }
  // }
  // console.log(isSorted)
}

// Move all zeros to end
{
  // let arr = [0,3,4,0,12,0]
  // let newArr = []
  // for(let i=0; i<arr.length; i++){
  //   if(arr[i] === 0){
  //     newArr.push(arr[i])
  //   }
  //   else{
  //     newArr.unshift(arr[i])
  //   }
  // }
  // console.log(newArr)
}

// Find missing number (1 to n)
{
  // let arr = [1,2,3,4,5,6,7,8,9]
  // let missingNumber
  // for(let i=0; i<arr.length; i++){
  //   if(arr[i]<(arr[i+1])){
  //     console.log("we don't have missing number")
  //   }
  //   else{
  //     console.log("we have missing number")
  //   }
  // }
}

// Find duplicate element
{
  // let arr = [1,2,3,4,5,6,7,5,8,1]
  // let newArray = []
  // let duplicateArrayValue = []
  // for(let i = 0; i<arr.length; i++){
  //   if(!newArray.includes(arr[i])){
  //     newArray.push(arr[i])
  //   }
  //   else{
  //     duplicateArrayValue.push(arr[i])
  //   }
  // }
  // console.log("newArray",newArray)
  // console.log(duplicateArrayValue)
}

// Merge two sorted arrays
{
  // let arr1 = [1,2,3,4,5]
  // let arr2 = [6,7,8,9,10]
  // let newArray = arr1.concat(arr2)
  // console.log(newArray)
}

// Kadane’s Algorithm (max subarray sum)
{
  // let arr = [-2,1,-3,4,-1,2,1,-5,4]
  // let newArray = arr[0]
  // for(let i=0; i<arr.length; i++){
  //   let currentSum = 0
  //   for(let j=i; j<arr.length; j++){
  //     currentSum+= arr[j]
  //     newArray = Math.max(newArray,currentSum)
  //   }
  // }
  // console.log(newArray)
}

// Buy & Sell Stock (max profit)
{
  // let arr = [1, 3, 4];
  // let buyPrice = arr[0],
  //   maxProfit = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (buyPrice > arr[i]) {
  //     buyPrice = arr[i];
  //   }
  //   let profit = arr[i] - buyPrice;
  //   if (maxProfit < profit) {
  //     maxProfit = profit;
  //   }
  // }
  // console.log("buy Price", buyPrice, "max Profit", maxProfit);
}

// Remove duplicates from sorted array
{
  // let arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8];
  // let sortedArray = [arr[0]];
  // for (let i = 1; i < arr.length; i++) {
  //   if(arr[i] !== arr[i-1]){
  //     sortedArray.push(arr[i])
  //   }
  // }
  // console.log(sortedArray);
}

// Union of two arrays
{
  // let arr1 =  [1,2,3,4]
  // let arr2 =  [3,4,5,6]
  // let newArray = [...arr1]
  // for(let i=0; i<arr2.length; i++){
  //   if(newArray.includes(arr2[i])){
  //     ""
  //   }else{
  //     newArray.push(arr2[i])
  //   }
  // }
  // console.log(newArray)
}

// Intersection of two arrays
{
  //  let arr1 =  [1,2,3,4]
  //  let arr2 =  [3,4,5,6]
  //  let newArray = []
  //  for(let i = 0; i<arr2.length; i++){
  //   if(arr1.includes(arr2[i])){
  //     newArray.push(arr2[i])
  //   }
  //  }
  //  console.log(newArray)
}

// Majority element (> n/2)
{
  // let arr = [1,2,2,2,2,2,2,1,1,1,1]
  // let majority ={}
  // for(let char of arr){
  //   if(majority[char]){
  //     majority[char]++
  //   }
  //   else{
  //     majority[char] = 1
  //   }
  // }
  // for(let key in majority){
  //   if(majority[key]>arr.length/2)
  //   console.log(key, "is Majority element")
  // }
}

// Two Sum problem
{
  // function twoSumProblem(arr,target){
  //   for(let i = 0; i<arr.length; i++){
  //     for(let j = i+1; j<arr.length; j++){
  //       if(target === arr[i]+arr[j]){
  //         console.log("The two value are",arr[i],arr[j],"of target",target)
  //       }
  //     }
  //   }
  // }
  // twoSumProblem([4,5,2,6,7],12)
}

// Subarray with given sum
{
  //   function subarray(arr,target){
  //     for(let i = 0; i<arr.length; i++){
  //       let sum = 0
  //       for(let j=i; j<arr.length; j++){
  //         sum+=arr[j]
  //         if(sum===target){
  //           console.log("subarray", arr.slice(i,j+1))
  //         }
  //       }
  //     }
  //   }
  // subarray([1,2,3,4,5,6,],5)
}

// STRING
// Reverse a string
{
  // let str = 'memories'
  // let reverse=''
  // for(let i=str.length-1; i>=0; i--){
  //   reverse+=str[i]
  // }
  // console.log(reverse)
}

// Check palindrome
{
  let str = "madam";
  // let reverse = ''
  // for(let i=str.length-1; i>=0;i--){
  //   reverse+=str[i]
  // }
  // if(str === reverse){
  //   console.log(str," is Palindrome")
  // }else{
  //   console.log(str," is not Palindrome")

  // }

  // second
  // let isPalindrome = true;
  // for (let i = 0; i <= str.length / 2; i++) {
  //   if (str[i] !== str[str.length - 1 - i]) {
  //     isPalindrome = false;
  //     break;
  //   }
  // }
  // if (isPalindrome === true) {
  //   console.log("String is palindrome");
  // } else {
  //   console.log("String is not palindrome");
  // }
}

// Count vowels & consonants
{
  // let str = "abcdefghi";
  // let vowel = 0;
  // let constant = 0;
  // for (let char of str.toLocaleLowerCase()) {
  //   if ("aeiou".includes(char)) {
  //     vowel++;
  //   } else {
  //     constant++;
  //   }
  // }
  // console.log(vowel);
  // console.log(constant);
}
// KAPIL

// Number Prime or not
{
  // function prime(num) {
  //   let isPrime = true;
  //   if ((num === 1) | (num === 2)) {
  //     isPrime = true;
  //   }
  //   for (let i = 3; i < Math.floor(num / 2); i++) {
  //     if (num % i === 0) {
  //       isPrime = false;
  //       break;
  //     }
  //   }
  //   console.log("prime is ", isPrime);
  // }
  // prime(20);
}

// Reverse String without reverse
{
  // function reverse(str) {
  //   let reverse = "";
  //   if (str.length === 0) {
  //     console.log("Provide valid string");
  //   }
  //   if (str.length === 1) {
  //     console.log("Nice joke, You already provide reverse string 😄 😃");
  //   }
  //   for (let i = str.length - 1; i >=0; i--) {
  //     reverse += str[i];
  //   }
  //   console.log('Reverse of',str, "is",reverse)
  // }
  // reverse('reverse')
}

// Check string is palindrome or not
{
  // function palindromeString(str) {
  //   let reverse = "";
  //   if (str.length === 0) {
  //     console.log("Provide valid string");
  //     return;
  //   }
  //   if (str.length === 1) {
  //     console.log("Nice joke, You already provide Palindrome string 😄 😃");
  //     return;
  //   }
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reverse += str[i];
  //   }
  //   if (str === reverse) {
  //     console.log("Provided String", str, "is Palindrome");
  //   } else {
  //     console.log("Provided String", str, "is not Palindrome");
  //   }
  // }
  // palindromeString("madam");
}

// Factorial of number using recursion fun
{
  // function factorial(num) {
  //   if (num < 1) {
  //     return "factorial is not possible";
  //     return "";
  //   }
  //   if ((num === 1) | (num === 0)) {
  //     return 1;
  //   }
  //   return num * factorial(num - 1);
  // }
  // console.log(factorial(5));
}

// swap 2 number without using 3rd variable
{
  // function swap(num1,num2){
  //   return [num1,num2] = [num2,num1]
  // }
  // function swap(num1,num2){
  //   num1 += num2
  //   num2 = num1 - num2
  //   num1 = num1 - num2
  //   return `${num1},${num2}`
  // }
  // console.log(swap(2,3))
}

// Find the first,second  and third largest
{
  // function largest(arr) {
  //   if (arr.length < 3) {
  //     return "Please Provide valid data";
  //   }
  //   let firstLargest = arr[0];
  //   let secondLargest = -Infinity;
  //   let thirdLargest = -Infinity;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > firstLargest) {
  //       thirdLargest = secondLargest;
  //       secondLargest = firstLargest;
  //       firstLargest = arr[i];
  //     } else if (secondLargest < arr[i] && arr[i] < firstLargest) {
  //       thirdLargest = secondLargest;
  //       secondLargest = arr[i];
  //     } else if (thirdLargest < arr[i] && arr[i] < secondLargest)
  //       thirdLargest = arr[i];
  //   }
  //   return `first Largest : ${firstLargest}, Second largest : ${secondLargest}, and Third largest: ${thirdLargest}`;
  // }
  // console.log(largest([4, 5, 1, 9, 50]));
}

// Find the sum of digit

{
  // function sumOfDigit(num) {
  //   let add = 0;
  //   if (num <= 0) {
  //     return "can't find some of the digit number should be greater than 0";
  //   }
  //   while (num > 0) {
  //     add += num % 10;
  //     num = Math.floor(num / 10);
  //   }
  //   return add;
  // }
  // console.log(sumOfDigit(236));
}

// Fibonacci series
{
  // function fibonacci(num) {
  //   let a = 0,
  //     b = 1,temp
  //   for (let i = 0; i <= num; i++) {
  //     console.log(a);
  //     temp = a+b
  //     a = b;
  //     b=temp
  //   }
  // }
  // fibonacci(10);
}

// find the GCD of two number using euclidean Algorithm
{
  // function GCD(num1, num2) {
  //   if (num1 > num2) {
  //     while (num2 !== 0) {
  //       let remainder = num1 % num2;
  //       num1 = num2;
  //       num2 = remainder;
  //     }
  //     return num1
  //   } else {
  //     while (num1 !== 0) {
  //       let remainder = num2 % num1;
  //       num2 = num1;
  //       num1 = remainder;
  //     }
  //     return num2
  //   }
  // }
  // console.log(GCD(18,48))
}

// Reverse the order of sentence
{
  // function sentence(str) {
  //   let reverse = "",
  //     temp = "";
  //   for (let i = 0; i <= str.length; i++) {
  //     if (str[i] === " " || i === str.length) {
  //       reverse = temp + " " + reverse;
  //       temp = "";
  //     } else {
  //       temp += str[i]
  //     }
  //   }
  //   return reverse;
  // }
  // console.log(sentence("i love JS"));
}

// implement sorting

// bubble sorting
{
  // function bubbleSort(arr){
  //   for(let i=0; i<arr.length-1; i++ ){
  //     for(let j=0; j<arr.length-1-i; j++){
  //       if(arr[j]>arr[j+1]){
  //         let temp = arr[j];
  //         arr[j]=arr[j+1]
  //         arr[j+1]=temp
  //       }
  //     }
  //   }
  //   return arr
  // }
  // console.log(bubbleSort([10,2,11,5,3]))
}

// selection sorting
{
  // function selectionSorting(arr){
  //   for(let i = 0; i<arr.length-1; i++){
  //     let minIndex = i
  //     for(let j = i+1; j<arr.length; j++){
  //       if(arr[minIndex]>arr[j]){
  //         minIndex = j
  //       }
  //       if(minIndex !== i){
  //         let temp = arr[minIndex]
  //         arr[minIndex] = arr[i];
  //         arr[i] = temp
  //       }
  //     }
  //     return arr
  //   }
  // }
  // selectionSorting([3,4,6,2,1,50])
}

// Remove duplicate from array 
{
// function removeDuplicate(arr){
//   if(arr.length === 0 || arr.length === 1){
//     return "Don't have any duplicate value"
//   }
//   let newArray = []
//   for(let i=0; i<arr.length; i++){
//     if(newArray.includes(arr[i])){
//       ''
//     }
//     else{
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }
// console.log(removeDuplicate([1,2,2,3,6,2,4,5]))
}

// intersection of two array

{
  // function intersectionArray(arr1,arr2){
  //   let newArray =[]
  //   for(let i=0; i<arr1.length; i++){
  //     for(let j=0;j<arr2.length;j++){
  //       if(arr2[j]===arr1[i]){
  //         newArray.push(arr2[j])
  //       }
  //     }
  //   }
  //   return newArray
  // }
  // console.log(intersectionArray([1,2,3,4],[3,4,5,6]))
}

// count occurrence of character
{
  // function count(str){
  //   let freq = {}
  //   for(let i=0; i<str.length; i++){
  //     if(freq[str[i]]){
  //        freq[str[i]]++
  //     }
  //     else{
  //        freq[str[i]] = 1
  //     }
  //   }
  //   return freq
  // }
  // console.log(count('dhsheeccccd'))
}

// find first non repeated character 
{
  // function nonRepeated(str){
  // let freq = {}
  //   for(let i = 0; i<str.length; i++){
  //     if(freq[str[i]]){
  //       freq[str[i]]++
  //     }
  //     else{
  //       freq[str[i]] = 1
  //     }
  //   }
  //  for(let char in freq){
  //   if(freq[char] === 1){
  //     return char
  //   }
  //  }
  // }
  // console.log(nonRepeated('abbacd'))
}

// Armstrong Number
{
  // function armstrong(number){
  //   let sum=0
  //   let digit = number.toString().length
  //   let num = number
  //   while(num > 0){
  //     let value = num%10
  //     sum+= Math.pow(value,digit)
  //     num = Math.floor(num/10)
  //   }
  //   console.log(sum === number ?`${number} Number is Armstrong` : `${number} Number is not armstrong`)
  // }
  // armstrong(163)
}

