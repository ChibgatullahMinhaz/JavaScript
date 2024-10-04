const  isPalindrome = (str)=>{
    const reverseStr =  [...str].reverse().join('');
    console.log(reverseStr)
    return str === reverseStr;
}
console.log(pilondroma("hello"))