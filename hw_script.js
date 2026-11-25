

printSumDigits(sumDigitsStr(12345));
printSumDigits(sumDigitsNum(23456));
print_lucky_unlucky_number(luckyNumber(123871)) //lucky number
print_lucky_unlucky_number(luckyNumber(124871)) //unlucky number

function print_lucky_unlucky_number(res){
    console.log(res ? 'lucky' : 'unlucky');
}

function printSumDigits(result){
    console.log(`sum of digits is: ${result}`);
}

function sumDigitsStr(num){
    const str_num = String(num);
    let sum = 0;
    for(let i=0; i<=str_num.length; i++){
        sum += i;
    }
    return sum;
}


function sumDigitsNum(n){
   let num = n;
   let sum1 = 0;
   while (num !== 0){
    sum1 += num%10;              
    //console.log(num%10);       // get the remainder of num%10
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
   



