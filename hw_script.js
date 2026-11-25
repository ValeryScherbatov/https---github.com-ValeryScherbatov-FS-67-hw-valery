

let res = sumDigitsStr(12345);
console.log(`sumDigitsStr(12345) = ${res}`); // should print 15

let res1 = sumDigitsNum(12345);
console.log(`SumDigitsNum(12345) = ${res1}`);

res = luckyNumber(123871);
console.log(res ? 'lucky' : 'unlucky');
res = luckyNumber(124871);
console.log(res ? 'lucky' : 'unlucky');



function sumDigitsStr(num){
    const str_num = String(num);
    let sum=0;
    for(let i=0; i<=str_num.length; i++){
        sum += i;
    }
    return sum;
}


function sumDigitsNum(n){
   let num = n;
   let sum1=0;
   while (num!==0){
    sum1 +=num%10;
    //console.log(num%10);       // get the remainder of num
    num = Math.trunc(num/10);    // get the integer number without the reminder
    }
    return sum1;
}

function luckyNumber(num) {
    str = String(num);
    even_sum=0;
    odd_sum=0;
    for(let i=0; i<str.length; i++){
        if(i%2 === 0){
        //console.log(`calculate sum of even \n index ${i} \n value ${str[i]}`)
        even_sum += Number(str[i]);  
        }
        else{
        //console.log(`calculate sum of odd \n index ${i} \n value ${str[i]}`)
        odd_sum += Number(str[i]);
        }
        //console.log(`even_sum = ${even_sum}`)
        //console.log(`odd_sum = ${odd_sum}`)
    }
        
    if(even_sum === odd_sum){
        return true;
    }
    else{
        return false;
    }
}
   



