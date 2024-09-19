const otpGenerate = ()=>{
    return Math.floor(Math.random() * 9000 + 1000);

}
console.log(otpGenerate())