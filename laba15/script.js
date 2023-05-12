let a = 1; 
console.log(a); 
alert(a); 
let b = confirm("да?"); 
alert(b); 
let c = prompt("Сколько тебе лет?"); 
console.log(c); 
document.write(c);
let d = 0; 
while(d <=100){ 
    console.log(d); 
    d++;   
}


let i = 0
do{ 
    if(i ===0){ 
        console.log(i + ' - це нуль') 
    } 
    else if(i % 2 === 0){ 
        console.log(i + " - парне число") 
    } 
    else  { 
        console.log(i + " - непарне число") 
    } 
    i++; 
 
}


while (i <= 10);
let numb = 10000; 
let counter = 0; 
do{ 
    numb /= 2; 
    counter++; 
} 
while (numb >= 50); 
let result = numb; 
console.log("Result:" + result) 
console.log("Count:" + counter)*/