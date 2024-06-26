// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
//  Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



// we are going to want to convert the number to a string, we will use the shorthand expression (n+'') which is used inplace of (n.toString())
// next we will want to split the string into a array of individual characters, .split() will seperant the string into an array
// we then want to sort the array into ascending order, we will use .sort() as it arranges the elements in ascending order
// next we'll reverse the array of characters into descending order, .reverse() will reverse the array into descending order
// then we will join the array back into a single string, .join() will put the array back into a single string
// convert the string back into a number, to convert the string back into a number we will encapsulate the rest of the code in a parseInt() as the contained code will run first before the parseInt() will run
function descendingOrder(n){
    return parseInt((n+'').split('').sort('').reverse('').join(''))
}