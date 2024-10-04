let arr = [1,2,2,3,4,5]
function removeDuplicate(arr) {
    return [...new Set(arr)]
}
console.log(removeDuplicate(arr))