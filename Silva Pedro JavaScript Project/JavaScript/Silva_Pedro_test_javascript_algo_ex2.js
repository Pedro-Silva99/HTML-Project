/*Here I create a fuction that first checks if I have nine numbers in the element(line,row or block) that i'm going to examine, after that it check if all the data in the element
if a number and if it is between number 1 and 9 , if one of these are wrong it returns false , after checking it uses the noDuplicates function */
function checkTotalAndValueOfNumbers(numberSet){
    if (numberSet.length !== 9){
        return false;
    }
    
    for (let num of numberSet){
        if (typeof num !== 'number' || num > 9 || num < 1){
            return false;
        }
    }
    
    return noDuplicates(numberSet);
}
/*In this function I use the set() function that only saves the array by values, simplifying this it only saves the numbers of different values that the array has, then I check
if is length is equal to the original array length, if it is it means that all the values in the function are different, if it isn't it returns false and it means that are duplicates
in the array */
function noDuplicates(arr) {
    return new Set(arr).size === arr.length;
}