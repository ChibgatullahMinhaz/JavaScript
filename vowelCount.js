const str = "the quick brown fox jumps over the lazy dog and 🥰";
const vowel = "aeiouAEIOU"; 

function vowelCount() {
    let vcount = 0;
    let cCount = 0;

    try {
        for (let index = 0; index < str.length; index++) {
            let char = str[index].toLowerCase();
            if (char >= 'a' && char <= 'z') {
                if (vowel.includes(char)) {
                    vcount++;
                } else {
                    cCount++;
                }
            }
        }
        return `Total Vowel: ${vcount} and Total Consonant: ${cCount}`;
    } catch (error) {
        console.error("An error occurred:", error.message);
        return null;
    } finally {
        console.log("Counting completed.");
    }
}

console.log(vowelCount());
