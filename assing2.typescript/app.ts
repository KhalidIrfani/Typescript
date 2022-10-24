


//1. Write a ts program to print all natural numbers from 1 to n. - using while loop

var n:number = 100;
var num:number =1;

while(num<=n){
    console.log( "Natural no. is:" +num);
    num++;
}



//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop

var n:number=1;
var num:number=100;

while(n<=num){
    console.log( "Reverse of Natural no. is:" +num);
    num--;
}



// 3. Write a ts program to print all alphabets from a to z. - using while loop

 

function alphabets(){
  var first = "A", last = "Z";
   var i=first.charCodeAt(0);
  while(i<last.charCodeAt(0)){
      console.log( eval("String.fromCharCode(" + i + ")") + " " );   
      i++
  }
}
//  alphabets();


// 4. Write a ts program to print all even numbers between 1 to 100. - using while loop

// var a:number=1;

// while(a<=100){

//     if(a%2 == 0){
//         console.log("Number is even"+ " " + a)
//     }
//     a++;
// }


// 5. Write a ts program to print all odd number between 1 to 100.

// var a:number=1;

// while(a<=100){

//     if(a%2 != 0){
//         console.log("Number is odd"+ " " + a)
//     }
//     a++;
// }



// 6. Write a ts program to find sum of all natural numbers between 1 to n.

//  function fsum(n){
//     var sum:number=0;
//     for (var i=1; i<=n; i++)
//         sum=sum+i;
//         return sum;

    
//  }
// console.log(fsum(22));


// 7. Write a ts program to find sum of all even numbers between 1 to n.

// function funi(n)  
//     {  
//          var sum :number = 0;  
//         for (var i = 2; i <= n; i+=2) {  
//             sum =sum + i;  
//         }  
//         return sum;  
//     }  
//     console.log(funi(14));



// 8. Write a ts program to find sum of all odd numbers between 1 to n.

// function fun(n)  
//     {  
//          var sum :number = 0;  
//         for (var i = 1; i <= n; i++) {  

//             if(i%2!=0){
//                 sum =sum + i; 
//             }
            
//         }  
//         return sum;  
//     }  
//     console.log(fun(11));


  //    9. Write a ts program to print multiplication table of any number.

  // var num:number=12;
  // for(var i=1; i<=10; i++){
    
  //   console.log( num + "*" +" "+ i+" = " +num*i);

  // }


 
//  10. Write a ts program to count number of digits in a number.
 
//  var a:number=22.3;
//  var c=('' +a).length;
//   console.log(c);
  
 
//  11. Write a ts program to find first and last digit of a number.  

function findno(){
 function firstDigi(n)
 {
     
     while (n >= 10) 
         n /= 10;   
     return Math.floor(n);
 }

 function lastDigi(n)
 {
    
     return Math.floor(n % 10);
 }

     var  n = 98562;
     console.log(firstDigi(n) + " "
     + lastDigi(n));
}

findno()



// 12. Write a ts program to find sum of first and last digit of a number. 

 function firstandLast(n){
 function first(n)
 {
     while (n >= 10) 
         n /= 10;
     return Math.floor(n);
 }
 function last(n)
 {
    
     return Math.floor(n % 10);
 }
       
     var sum1=first(n) + last(n);
     console.log(sum1)

 }
//  firstandLast(2489)

// 13. Write a ts program to swap first and last digits of a number.

function swap(){

var firstDigit:number=113;
var lastDigit:number=20;
 
 var temp=firstDigit;
 var firstDigit=lastDigit;
 var lastDigit=temp;
 
console.log(firstDigit + " " +lastDigit);

}
// swap()

//  14. Write a ts program to calculate sum of digits of a number.

 function sum(ary){
    var sum=0;
   
    while(ary !=0){      

        sum=sum+ary %10;
        ary=Math.floor(ary / 10);
    }
       return sum;
       }

      ary=339;

      //  console.log(sum(ary));


// 15. Write a ts program to calculate product of digits of a number.     


 function product(ary){
    var sum=1;
   
       while(ary !=0){ 

        sum=sum*(ary%10);
        ary=Math.floor(ary/10)
      } 


      return sum;
      }
      var ary=4531;
      // console.log(product(ary));



//  16. Write a ts program to enter a number and print its reverse.


// var h:number[]=[23,31,24,45];
// {
//   h.reverse();
//   console.log(h);
// }

 

//  17. Write a ts program to check whether a number is palindrome or not.

let reverseDigits1=(num:number)=> {
  let rev_num = 0;
  while(num > 0)
  {
      rev_num = rev_num * 10 + num % 10;
      num = Math.floor(num / 10);
  }
  // console.log(num);
  console.log(rev_num);
 
}
let palindrome=(n)=>{
  let rev_n=reverseDigits1(n)
  console.log(n)
  if(rev_n==n){
      console.log('number is palindrome ')
  }else{
      console.log('number is not palindrome ')
  }
}

// palindrome(1221)


//  18. Write a ts program to find frequency of each digit in a given integer.

const str = '11122222332';
const frequencyDistribution = str => {
   const map = {};
   for(let i = 0; i < str.length; i++){
      map[str[i]] = (map[str[i]] || 0) + 1;
   };
   return map;
};
// console.log(frequencyDistribution(str));


// 19. Write a ts program to enter a number and print it in words.
 
let convertToWord=(num:any)=>{

  let l = num.length

  if (l == 0){
      console.log("empty string")
      return
  }

  if (l > 4){
  console.log("Length more than 4 is not supported")
      return
  }
  let single_digits = ["zero", "one", "two", "three",
                   "four", "five", "six", "seven",
                   "eight", "nine"]
  let two_digits = ["", "ten", "eleven", "twelve",
                "thirteen", "fourteen", "fifteen",
                "sixteen", "seventeen", "eighteen",
                "nineteen"]
  let tens_multiple = ["", "", "twenty", "thirty", "forty",
                   "fifty", "sixty", "seventy", "eighty",
                   "ninety"]

  let tens_power = ["hundred", "thousand"]

  // Used for debugging purpose only
  console.log(num, ":"," ")

  // For single digit number
  if (l == 1){
      console.log(single_digits[num.charCodeAt(0) - 48])
      return
  }

  // Iterate while num is not '\0'
  let x = 0
  while (x < num.length){

      // Code path for first 2 digits
      if (l >= 3){
          if (num.charCodeAt(x) - 48 != 0){
              console.log(single_digits[num.charCodeAt(x) - 48]," ")
              console.log(tens_power[l - 3]," ")
              // here len can be 3 or 4
          }

          l -= 1
      }

      // Code path for last 2 digits
      else{

          // Need to explicitly handle
          // 10-19. Sum of the two digits
          // is used as index of "two_digits"
          // array of strings
          if (num.charCodeAt(x) - 48 == 1){
              let sum = (num.charCodeAt(x) - 48 + num.charCodeAt(x+1) - 48)
              console.log(two_digits[sum])
              return
          }

          // Need to explicitly handle 20
          else if (num.charCodeAt(x) - 48 == 2 &&
                num.charCodeAt(x + 1) - 48 == 0){
                  console.log("twenty")
              return
          }

          // Rest of the two digit
          // numbers i.e., 21 to 99
          else{
            let  i = num.charCodeAt(x) - 48
              if(i > 0)
              console.log(tens_multiple[i])
              else
              console.log("")
              x += 1
              if(num.charCodeAt(x) - 48 != 0)
              console.log(single_digits[num.charCodeAt(x) - 48])
          }
      }
      x += 1
  }

}
// convertToWord("5455")

 


//   20. Write a ts program to print all ASCII character with their values.


let ASCIIchrac=(g:string)=>{
  let result=g.charCodeAt(0)
  console.log( "Ascii  chracter are :"+ result);
 }
//  ASCIIchrac("S");
 
 
//  21. Write a ts program to find power of a number using for loop.

function power(){

var base:number=4 , exponent=4;
var result:number=1;

for( exponent; exponent>0; exponent-- ){

  result*=base;

}
console.log(result)
}
  //power();

// 22. Write a ts program to find all factors of a number.

 let facto=(numi:number)=>{
   
  for(var i=0; i<=numi; i++){
    if(numi% i ==0){
      console.log("Factors of number" + " " + numi + " " +"are : " + i)
    } 
     
  }
 }
//  facto(12);


//  23. Write a ts program to calculate factorial of a number.

function factori(){
var num:number= 5;
var i:number;
var factorial=1;
for(i=num;i>=2;i--)
{
 factorial=factorial* i;
}
console.log(factorial)
}
// factori();

// 24. Write a ts program to find HCF (GCD) of two numbers.

function gcd(a,b)
{

    var result = Math.min(a, b); // Find Minimum of a nd b
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    return result; // return gcd of a nd b
}
var a:number=84;
var b:number=60;
// console.log(gcd(a,b))
 
// 25. Write a ts program to find LCM of two numbers.


function LCM(a,b)
{

    var result = Math.min(a,b); // Find Minimum of a nd b
    while (result >= 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    return result; // return gcd of a nd b
}
var a:number=8;
var b:number=6;

var  lcm=(a*b)/LCM(a,b);
// console.log(LCM(a,b))
console.log(lcm)


// 26. Write a ts program to check whether a number is Prime number or not.
function Prime(num){

 if (num % 2 == 0) {
    return false;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) 
        return true;
      }
    
}
}
// console.log(Prime(121));


// 27. Write a ts program to print all Prime numbers between 1 to n.


function isPrime(n)
{ 
	if(n == 1 || n == 0) return false;

	for(var i = 2; i < n; i++)
	{
 		if(n % i == 0) return false;
	}

	return true;
}
 
for(var i = 1; i<=100; i++)
{
  var N=100;
	if(isPrime(i)) {
		// console.log( i );
	}
}

// 28. Write a ts program to find sum of all prime numbers between 1 to n 
 
 
	function sumOfPrimes(n)
	{
		
	let prime = new Array(n + 1);
	  for(let i = 0; i < n + 1; i++)
			prime[i] = true;
	
	for (let p = 2; p * p <= n; p++)
		{
	
			if (prime[p] == true)
			{
	
				for (let i = p * 2; i <= n; i += p)
					prime[i] = false;
			}
		}
	

		let sum = 0;
		for (let i = 2; i <= n; i++)
			if (prime[i])
				sum += i;
		return sum;
	}
	
	 n = 11;
 console.log(sumOfPrimes(n));
	
 

// 29. Write a ts program to find all prime factors of a number.

function primeFactor(n){

  while(n %2==0 ){
      console.log(2+ " ")
      n=Math.floor(n/2);    
}

for(var i=3; i<=Math.floor(Math.sqrt(n)); i++){

  while(n%i==0){
    console.log(i + " ")
    n=Math.floor(n/i);
  }
}

if(n>2){
  console.log(n + " ")
}

}

var n=315;
// primeFactor(n)
 


// 30.Write a ts program to check whether a number is Armstrong number or not.

let Armstrong=(number:number)=>{
  let sum=0;
  let temp=number;
  while(temp>0){
      let rem=temp%10;
      sum +=rem*rem*rem;
      temp=parseInt(temp/10);
  }
  if (sum == number) {
      console.log(`${number} is an Armstrong number`);
  }
  else {
      console.log(`${number} is not an Armstrong number.`);
  }
}

// Armstrong(153)

// 31. Write a ts program to print all Armstrong numbers between 1 to n.

let printArmstrong=(lowerNumber:number,highnumber)=>{

  for(let i=lowerNumber; i<highnumber; i++){
   let numOfDigit=i.toString().length;
  let sum=0;
  let temp=i;

  while(temp>0){
      let rem=temp%10;
      sum +=rem**numOfDigit;
      temp=parseInt(temp/10);
  }
  if(sum==i){
      console.log("Armstrong Number : "+ i)
  }
}
}

// printArmstrong(1,1643)
  
 


// 32. Write a ts program to check whether a number is Perfect number or not.

function perfect(number:number){
   var sum:number=0;
  for(var i=0; i<number; i++){
    if(number%i==0){
      sum=sum+i
    
    }
    
  }
  if(sum==number){
    console.log(`${number}is a perfect number.`)
  }else{
    console.log(`${number}is not a perfect number.`)
  }
}
//  perfect(8)
 
// 33. Write a ts program to print all Perfect numbers between 1 to n.
 
function isPerfect(n)
{
 var 	sin=1;
 
	for (let i=2; i*i<=n; i++)
	{
		if (n%i==0)
		{
			if(i*i!=n)
			 sin =  sin + i + n/i;
			else
				sin=sin+i;
		}
	}
	 
	if (sin == n && n != 1)
		return true;

	return false;
}

	console.log("Below are all perfect numbers till 10000");
	for (let n =2; n<10000; n++)
		if (isPerfect(n))
			console.log(n + " is a perfect number"  );



// 34. Write a ts program to check whether a number is Strong number or not.

var f = new Array(10);

function preCompute()
{
	f[0] = f[1] = 1;
	for (let i = 2; i<10; ++i)
		f[i] = f[i-1] * i;
}

function isStrong(x)
{
	var factSum = 0;

	var temp = x;
	while (temp)
	{
		factSum += f[temp%10];
		temp = Math.floor(temp/10);
	}

	return (factSum == x);
}

	preCompute();

	var x = 145;
	isStrong(x) ?  console.log("Yes") :
	console.log("No" + "<br>");
	x = 534;
	isStrong(x) ?  console.log("Yes" + "<br>") :
	 console.log("No" );


  // 35. Write a ts program to print all Strong numbers between 1 to n.

   let printStrong=(lowerNum:number,highNum:number)=>{
    for(let j=lowerNum; j<highNum; j++){
       let sum=0;
       let r=0;
       let temp=j;
       while(j){
           let i=1;
           let fact=1;
   
           r=j%10;
           while(i<=r){
            fact=fact*i;
            i++
           }
           sum=sum+fact;
           j=Math.floor(j/10)
       }
       if(temp==sum){
           console.log(`${temp} : is a strong Number`)
       }
   }
   }
   // printStrong(1,200)
 
  // 36. Write a ts program to print Fibonacci series up to n terms.    
      var n = 12;
      function fib(n) {
     
      if (n <= 1)
          return n;
      return fib(n-1) + fib(n-2);
  }
    
      console.log(fib(n));      

 
// 37. Write a ts program to find one's complement of a binary number.
 
let complementOfBinary=(number)=>{
  number =number.toString();
var reverse = number.split('').map(x => x === "0" ? "1" : "0").join('');    
console.log("Number: " + reverse);
}
complementOfBinary(1001)

 
 
// 38. Write a ts program to find two's complement of a binary number.
 
function flip (c) {return (c == '0') ? '1': '0';}
 
function printOneAndTwosComplement(bin)
{
	var n = bin.length;
	var i;

	var ones, twos;
	ones = twos = "";

	for (i = 0; i < n; i++)
		ones += flip(bin[i]);
	twos = ones;
	twos = twos.split('')
	for (i = n - 1; i >= 0; i--)
	{
		if (ones[i] == '1')
			twos[i] = '0';
		else
		{
			twos[i] = '1';
			break;
		}
	}
	twos = twos.join('')
 
	if (i == -1)
		twos = '1' + twos;


	console.log( "1's complement: " + ones + "<br>");
console.log( "2's complement: " + twos + "<br>");
}

var bin = "1100";
printOneAndTwosComplement( bin)

 
// 39. Write a ts program to convert Binary to Octal number system.

function flip (c) {return (c == '0')? '1': '0';}
function printOneAndTwosComplement(bin){
    var n = bin.length;
    var i;
 
    var ones, twos;
    ones = twos = "";
    for (i = 0; i < n; i++)
        ones += flip(bin[i]);
    twos = ones;
    twos = twos.split('')
    for (i = n - 1; i >= 0; i--)
    {
        if (ones[i] == '1')
            twos[i] = '0';
        else
        {
            twos[i] = '1';
            break;
        }
    }
    twos = twos.join('')
    if (i == -1)
        twos = '1' + twos;
 
 
     console.log( "1's complement: " + ones );
    console.log( "2's complement: " + twos );
}

printOneAndTwosComplement(11011);

// 40. Write a ts program to convert Binary to Decimal number system.
let binaryToDecimal=(binary:any)=>{

var digit = parseInt(binary, 2);
console.log(digit);
}

// binaryToDecimal(1010100)

// 41. Write a ts program to convert Binary to Hexadecimal number system.

let binaryToHexa=(binary:any)=>{
var digit=parseInt(binary,2).toString(16).toUpperCase()
console.log(digit)
}

// binaryToHexa(1010)


// 42. Write a ts program to convert Octal to Binary number system.

let octTobin=(oct:any)=>{
    var digit=parseInt(oct,8).toString(2);
    console.log(digit)
    }
// octTobin(540)

// 43. Write a ts program to convert Octal to Decimal number system.

let octTODecimal=(oct:any)=>{
    var digit=parseInt(oct,8);
    console.log(digit)
}

// octTODecimal(140)

// 44. Write a ts program to convert Octal to Hexadecimal number system.
let octToHexa=(oct:any)=>{
    var digit=parseInt(oct,8).toString(16).toUpperCase();
    console.log(digit)
}
// octToHexa(5130)

// 45. Write a ts program to convert Decimal to Binary number system.

let decToBin=(decimal:any)=>{
    let digit=parseInt(decimal,10).toString(2)
    console.log(digit)
}
// decToBin(2233)

// 46. Write a ts program to convert Decimal to Octal number system.
let decToOct=(decimal:any)=>{
    let digit=parseInt(decimal,10).toString(8)
    console.log(digit)
}
// decToOct(2233)

// 47. Write a ts program to convert Decimal to Hexadecimal number system.
let decToHexa=(decimal:any)=>{
    let digit=parseInt(decimal,10).toString(16).toUpperCase()
    console.log(digit)
}
// decToHexa(828)

// 48. Write a ts program to convert Hexadecimal to Binary number system.
let hexaToBin=(hexa)=>{
    let digit=parseInt(hexa, 16).toString(2)
    console.log(digit)
}

// hexaToBin('aa64')

// 49. Write a ts program to convert Hexadecimal to Octal number system.
let hexaToOct=(hexa)=>{
    let digit=parseInt(hexa, 16).toString(8)
    console.log(digit)
}

// hexaToOct('aa64')

// 50. Write a ts program to convert Hexadecimal to Decimal number system.
let hexaToDec=(hexa)=>{
    let digit=parseInt(hexa, 16)
    console.log(digit)
}

// hexaToDec('aa64')

// 51. Write a ts program to print Pascal triangle upto n rows.
function generatePascal(n:number){
    //2D array
    var arr = [];
    var tmp;
    for(var i=0;i<n;i++){
        //Each element in array is in turn an array
        // The index is the row number and the array values are the row values
        arr[i]=[];
        for(var j=0; j<=i; j++){
            //If index is last element the value is always 1
            if(j==i){
                arr[i].push(1);
            }else{
                //The following line adds up the two numbers directly above this element.
                tmp = (!!arr[i-1][j-1]?arr[i-1][j-1]:0)+(!!arr[i-1][j]?arr[i-1][j]:0);
                arr[i].push(tmp);
            }
        }
    }
    console.log(arr);
}
generatePascal(1)