const peach = 15.678;
const apple = 123.965;
const lemon = 90.2345; 

console.log(peach,apple,lemon);



const maxMath = Math.max(peach,apple,lemon);
console.log("Максимальне число: ", maxMath);



const minMath = Math.min(peach,apple,lemon);
console.log("Мінімальне число: ", minMath);



const overall = peach + apple + lemon;
console.log("Вартість всіх товарів: ", overall);



const roundNumber = Math.floor(peach + apple + lemon);
console.log("Ціла частина вартості: ", roundNumber);



const roundedToHundreds = Math.round(overall/100)*100;
console.log("Округлено до сотень: ", roundedToHundreds);



let boolean;
   if(roundNumber % 2 == 0) { boolean=false;}
    else {boolean=true}; 

console.log("Булеве значення: ", boolean);



const change = 500 - overall;
console.log("Решта від суми:", change);



const average = (overall/3).toFixed(2);
console.log("Середнє значення: ", average);



const discount = Math.floor (Math.random ()*100);
console.log("Рандомна знижка: ", Math.round(discount), "грн.");


const discountedPrice = (overall - (Math.random ()*100)).toFixed(2);
console.log("Сума до cплати: ", discountedPrice, "грн.");


const income = Math.floor ((overall/2)- discount);
console.log("Чистий прибуток: ", income);



document.writeln("Максимальне число: ", maxMath);
document.writeln("<br>");
document.writeln("Мінімальне число: ", minMath);
document.writeln("<br>");
document.writeln("Вартість всіх товарів: ", overall);
document.writeln("<br>");
document.writeln("Ціла частина вартості: ", roundNumber);
document.writeln("<br>");
document.writeln("Округлено до сотень: ", roundedToHundreds);
document.writeln("<br>");
document.writeln("Булеве значення: ", boolean);
document.writeln("<br>");
document.writeln("Решта від суми:", change);
document.writeln("<br>");
document.writeln("Середнє значення: ", average);
document.writeln("<br>");
document.writeln("Рандомна знижка: ", Math.round(discount), "грн.");
document.writeln("<br>");
document.writeln("Сума до cплати: ", discountedPrice, "грн.");
document.writeln("<br>");
document.writeln("Чистий прибуток: ", income);