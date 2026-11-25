//simple and easy way convert to string and sum over the indexes by for loop
let num1=12345
let str_num = num1.toString();
let sum=0;
for(let i=0; i<=str_num.length; i++){
    sum += i;
}
console.log(`The digits sum by converting to String is ${sum}`) //should be returned value in function

//second solution with limitation to not use the string and solve it as a number
// the logic is use the modulo %10 and get the remainder first
// then divide /10 and get the integer_num without the reminder 
// Math.trunc() or Math.floor() will give the intenger_num without reminder
// then repeat in loop integer_num%10 until it will be equals to zero is a break point
let num = 12345;
let sum1=0;
while (num!==0){
    sum1 +=num%10;
    //console.log(num%10);       // get the remainder of num
    num = Math.trunc(num/10);    // get the integer number withou the reminder
}
console.log(`The digits sum by Math logic is ${sum1}`);  //should be returned value in function


let num2=351276;
str = num2.toString();
even_sum=0;
odd_sum=0;
for(let i=0; i<str.length; i++){
    if(i%2 === 0){
        console.log(`calculate sum of even \n index ${i} \n value ${str[i]}`)
        even_sum += Number(str[i]);
        
    }
    else{
        console.log(`calculate sum of odd \n index ${i} \n value ${str[i]}`)
        odd_sum += Number(str[i]);
    }
    console.log(`even_sum = ${even_sum}`)
    console.log(`odd_sum = ${odd_sum}`)
   
    if(even_sum === odd_sum){
        console.log("magic number")
        
    }
    else{
        console.log("Not magic number")
        
    }
}