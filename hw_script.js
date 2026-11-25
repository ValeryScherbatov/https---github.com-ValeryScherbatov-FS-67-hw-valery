

printSumDigits(sumDigitsStr(12345));
printSumDigits(sumDigitsNum(23456));
print_lucky_unlucky_number(luckyNumber(123871)) //lucky number
print_lucky_unlucky_number(luckyNumber(124871)) //unlucky number

/* Print function if returns true then lucky else unlucky */
function print_lucky_unlucky_number(res){
    console.log(res ? 'lucky' : 'unlucky');
}

/* Print function of digits summary */
function printSumDigits(result){
    console.log(`sum of digits is: ${result}`);
}

/*-- sumDigits str calcualtion convert number to string --*/
function sumDigitsStr(num){
    const str_num = num.toString();
    let sum = 0;
    for(let i=0; i<=str_num.length; i++){
        sum += i;
    }
    return sum;
}

/*-- sumDigits math calcualtion --*/
/* implementation logic
1. divide number with num%10 to get the reminder first
2. divide number with num/10 and get the integer_num without the reminder
Math.trunc() or Math.floor() will return the intenger_num without reminder
3. repeat summ of num%10 until the num === 0; (break point num equals to zero)
*/
function sumDigitsNum(n){
   let num = n;
   let sum = 0;
   while (num !== 0){
    sum += num%10;              
    num = Math.trunc(num/10);    // get the integer number without the reminder
    }
    return sum;
}

/*-- Lucky number calcualtion:
sum of the even indexes is equals to the sum of odd indexces --*/
function luckyNumber(num) {
    const str = String(num);
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
   



