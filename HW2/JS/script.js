let N = 0;
let M = 0;

do {
    N = Number(prompt("Enter any whole number"));
    if (!Number.isInteger (N)) {alert ("Please, enter the whole number only, i.e. 8");}
    }

    while (!Number.isInteger (N));

do {
    M = Number(prompt("Enter number larger than the previous one"));
    if ((!Number.isInteger (M)) || N >= M ) {alert ("Please, enter the whole number only, i.e. 8");}
}
    while (!Number.isInteger (M));

const even = confirm ("Exclude even numbers?");

let result = 0;


for (let i = N; i <= M; i++) {

     if (even === true && i % 2 !== 0) {
            result += i;
                
            console.log(i);

        } else (even === false) 
            {
            result += i;
            }
    } ;
                

console.log(result);


document.writeln (`Your number is ${result}`);
