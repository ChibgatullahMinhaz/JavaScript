const str = "the quick brown fox jumps over the lazy dog and 🥰";
const vowel = "aeiouAEIOU"; 

function vowelCount() {
    let vcount = 0;
    let cCount = 0;
    for (let index = 0; index < str.length; index++) {
        let charter = str[index].toLocaleLowerCase();
        if (charter >= 'a' && charter <= 'z' && !vowel.includes(charter)) {
           cCount++
        }else if(charter >= 'a' && charter <= 'z' && vowel.includes(charter)){
            vcount++
        }else{
           '🥰'
            
        }
    }
    return `Total Vowel : ${vcount} and Total Consonent : ${cCount}`;
   
}
console.log(vowelCount())