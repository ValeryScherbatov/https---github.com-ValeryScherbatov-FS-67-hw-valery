
console.log("sumDigitsStr() Negative input  -12345 ")
printSumDigits(sumDigitsStr(-12345));            // sumDigits by String calculation
console.log("\nsumDigitsNum() Negative input -12345 ")
printSumDigits(sumDigitsNum(-123456));           // sumDigits by Math calculation
console.log("\nluckyNumberStr() Negative input -123871 ")
print_lucky_unlucky_number(luckyNumberStr(-123871)) //lucky number
console.log("\nluckyNumberStr() Positive input +123871 ")
print_lucky_unlucky_number(luckyNumberStr(+123871)) //lucky number
console.log("\nluckyNumberStr() Positive input 123871 ")
print_lucky_unlucky_number(luckyNumberStr(124871)) //unlucky number

console.log("\nluckyNumberNotString() Negative input -123871 ")
print_lucky_unlucky_number(luckyNumberNotString(-123871)) //lucky number
console.log("\nluckyNumberNotString() Positive input +123871 ")
print_lucky_unlucky_number(luckyNumberNotString(-124871)) //unlucky number


/* Print lucky on result true, else print unlucky */
function print_lucky_unlucky_number(res){
    console.log(res ? 'lucky' : 'unlucky');
}

/* Print function of digits summary */
function printSumDigits(result){
    console.log(`sum of digits is: ${result}`);
}

/*-- sumDigits str calcualtion with convert number to string and vback to Number-*/
function sumDigitsStr(num){
    let sum = 0;
    if(num<0)
    {
        //console.log(`\ninput of number is real but negative ${num}`)
        num = -num
        console.log(`Converting to positive ${num}`)
    }  
    s = String(num);
    for(let i=0; i<s.length; i++){
        sum += (+s[i])      // identical as custing to Number. sum += Number(s[i])
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
   if(num<0){
        console.log(`input of number is real but negative ${num} \n `)
        num = -num
        console.log(`Converting to positive ${num} \n`)
    }
   while (num !== 0){
    sum += num%10;              
    num =(num-(num%10))/10;   // get the integer number without the last right number
    // console.count(num);
    }
    return sum;
}

/*-- Lucky number calculation:
sum of the even indexes is equal to the sum of odd indexes --*/
function luckyNumberStr(num) {
    if(num<0)
    {
        console.log(`input of number is real but negative ${num} \n `)
        num = -num
        console.log(`Converting to positive ${num} \n`)
    }  
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
   

/*-- Lucky number calculation without convert to string --*/
function luckyNumberNotString(num) {
    let n_r=0;
    let even_sum=0;
    let odd_sum=0;
    let index=0;
    while(num !== 0 ){
       index ++;        
       n_r=num%10;         // spliting the last 1 digit right number
       num=(num-n_r)/10;   // the left number without the right number split
       if(index%2 ===0){
        even_sum+=n_r;
       }
       else{
        odd_sum+=n_r;
       }
    }    
    return even_sum === odd_sum   
}
