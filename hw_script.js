

printSumDigits(sumDigitsStr(12345));            // sumDigits by String calculation
printSumDigits(sumDigitsNum(123456));           // sumDigits by Math calculation
print_lucky_unlucky_number(luckyNumber(123871)) //lucky number
print_lucky_unlucky_number(luckyNumber(124871)) //unlucky number

/* Print lucky on result true, else print unlucky */
function print_lucky_unlucky_number(res){
    console.log(res ? 'lucky' : 'unlucky');
}

/* Print function of digits summary */
function printSumDigits(result){
    console.log(`sum of digits is: ${result}`);
}

/*-- sumDigits str calcualtion with convert number to string --*/
function sumDigitsStr(num){
    const str_num = num.toString();
    let sum = 0;
    for(let i=0; i<=str_num.length; i++){
        sum += i;
    }
    return sum;
}

/*-- sumDigits math calculation (without converting to String type) --*/
/* implementation logic
1. divide number with num%10 to get the remainder first
2. divide number with num/10 and get the integer_num without the remainder  like
12345 - [(12345)%10 = 5] = 12340/10 => 1234
3. assign to the num the integer_num calculated in point 2.
4. repeat summ of num%10 until the num === 0; (break point num equals to zero)
*/
function sumDigitsNum(n){
   let num = n;
   let sum = 0;
   while (num !== 0){
    sum += num%10;              
    num =(num-(num%10))/10;   // get the integer number without the last right number
    console.count(num);
    }
    return sum;
}

/*-- Lucky number calculation:
sum of the even indexes is equal to the sum of odd indexes --*/
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
    return even_sum === odd_sum   
}
   



