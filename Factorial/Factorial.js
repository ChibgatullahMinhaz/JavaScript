let output = document.getElementById('fact');
const btn = document.getElementById('check');
let number;
btn.addEventListener('click',()=>{
     number =Number(document.getElementById('number').value);
     console.log(number)
     function Factorial(n) {
        console.log(n)
        if(n < 0) document.getElementById('Warnign').innerText = "Factorial Not Posible";
        if(n === 0 || n === 1) return 1;
        if (n % 2 === 0 ) {
            return  n * Factorial(n - 1);
        }else{
            return n * Factorial(n - 1);
        }
     }
    let Result =  Factorial(number)
    output.innerText = Result;
})