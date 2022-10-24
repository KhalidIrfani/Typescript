//1. Write a ts program to print all natural numbers from 1 to n. - using while loop
var n = 100;
var num = 1;
while (num <= n) {
    console.log("Natural no. is:" + num);
    num++;
}
//2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop
var n = 1;
var num = 100;
while (n <= num) {
    console.log("Reverse of Natural no. is:" + num);
    num--;
}
// 3. Write a ts program to print all alphabets from a to z. - using while loop
function alphabets() {
    var first = "A", last = "Z";
    var i = first.charCodeAt(0);
    while (i < last.charCodeAt(0)) {
        console.log(eval("String.fromCharCode(" + i + ")") + " ");
        i++;
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
function findno() {
    function firstDigi(n) {
        while (n >= 10)
            n /= 10;
        return Math.floor(n);
    }
    function lastDigi(n) {
        return Math.floor(n % 10);
    }
    var n = 98562;
    console.log(firstDigi(n) + " "
        + lastDigi(n));
}
findno();
// 12. Write a ts program to find sum of first and last digit of a number. 
function firstandLast(n) {
    function first(n) {
        while (n >= 10)
            n /= 10;
        return Math.floor(n);
    }
    function last(n) {
        return Math.floor(n % 10);
    }
    var sum1 = first(n) + last(n);
    console.log(sum1);
}
//  firstandLast(2489)
// 13. Write a ts program to swap first and last digits of a number.
function swap() {
    var firstDigit = 113;
    var lastDigit = 20;
    var temp = firstDigit;
    var firstDigit = lastDigit;
    var lastDigit = temp;
    console.log(firstDigit + " " + lastDigit);
}
// swap()
//  14. Write a ts program to calculate sum of digits of a number.
function sum(ary) {
    var sum = 0;
    while (ary != 0) {
        sum = sum + ary % 10;
        ary = Math.floor(ary / 10);
    }
    return sum;
}
ary = 339;
//  console.log(sum(ary));
// 15. Write a ts program to calculate product of digits of a number.     
function product(ary) {
    var sum = 1;
    while (ary != 0) {
        sum = sum * (ary % 10);
        ary = Math.floor(ary / 10);
    }
    return sum;
}
var ary = 4531;
// console.log(product(ary));
//  16. Write a ts program to enter a number and print its reverse.
// var h:number[]=[23,31,24,45];
// {
//   h.reverse();
//   console.log(h);
// }
//  17. Write a ts program to check whether a number is palindrome or not.
var reverseDigits1 = function (num) {
    var rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    // console.log(num);
    console.log(rev_num);
};
var palindrome = function (n) {
    var rev_n = reverseDigits1(n);
    console.log(n);
    if (rev_n == n) {
        console.log('number is palindrome ');
    }
    else {
        console.log('number is not palindrome ');
    }
};
// palindrome(1221)
//  18. Write a ts program to find frequency of each digit in a given integer.
var str = '11122222332';
var frequencyDistribution = function (str) {
    var map = {};
    for (var i_1 = 0; i_1 < str.length; i_1++) {
        map[str[i_1]] = (map[str[i_1]] || 0) + 1;
    }
    ;
    return map;
};
// console.log(frequencyDistribution(str));
// 19. Write a ts program to enter a number and print it in words.
var convertToWord = function (num) {
    var l = num.length;
    if (l == 0) {
        console.log("empty string");
        return;
    }
    if (l > 4) {
        console.log("Length more than 4 is not supported");
        return;
    }
    var single_digits = ["zero", "one", "two", "three",
        "four", "five", "six", "seven",
        "eight", "nine"];
    var two_digits = ["", "ten", "eleven", "twelve",
        "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen",
        "nineteen"];
    var tens_multiple = ["", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty",
        "ninety"];
    var tens_power = ["hundred", "thousand"];
    // Used for debugging purpose only
    console.log(num, ":", " ");
    // For single digit number
    if (l == 1) {
        console.log(single_digits[num.charCodeAt(0) - 48]);
        return;
    }
    // Iterate while num is not '\0'
    var x = 0;
    while (x < num.length) {
        // Code path for first 2 digits
        if (l >= 3) {
            if (num.charCodeAt(x) - 48 != 0) {
                console.log(single_digits[num.charCodeAt(x) - 48], " ");
                console.log(tens_power[l - 3], " ");
                // here len can be 3 or 4
            }
            l -= 1;
        }
        // Code path for last 2 digits
        else {
            // Need to explicitly handle
            // 10-19. Sum of the two digits
            // is used as index of "two_digits"
            // array of strings
            if (num.charCodeAt(x) - 48 == 1) {
                var sum_1 = (num.charCodeAt(x) - 48 + num.charCodeAt(x + 1) - 48);
                console.log(two_digits[sum_1]);
                return;
            }
            // Need to explicitly handle 20
            else if (num.charCodeAt(x) - 48 == 2 &&
                num.charCodeAt(x + 1) - 48 == 0) {
                console.log("twenty");
                return;
            }
            // Rest of the two digit
            // numbers i.e., 21 to 99
            else {
                var i_2 = num.charCodeAt(x) - 48;
                if (i_2 > 0)
                    console.log(tens_multiple[i_2]);
                else
                    console.log("");
                x += 1;
                if (num.charCodeAt(x) - 48 != 0)
                    console.log(single_digits[num.charCodeAt(x) - 48]);
            }
        }
        x += 1;
    }
};
// convertToWord("5455")
//   20. Write a ts program to print all ASCII character with their values.
var ASCIIchrac = function (g) {
    var result = g.charCodeAt(0);
    console.log("Ascii  chracter are :" + result);
};
//  ASCIIchrac("S");
//  21. Write a ts program to find power of a number using for loop.
function power() {
    var base = 4, exponent = 4;
    var result = 1;
    for (exponent; exponent > 0; exponent--) {
        result *= base;
    }
    console.log(result);
}
//power();
// 22. Write a ts program to find all factors of a number.
var facto = function (numi) {
    for (var i = 0; i <= numi; i++) {
        if (numi % i == 0) {
            console.log("Factors of number" + " " + numi + " " + "are : " + i);
        }
    }
};
//  facto(12);
//  23. Write a ts program to calculate factorial of a number.
function factori() {
    var num = 5;
    var i;
    var factorial = 1;
    for (i = num; i >= 2; i--) {
        factorial = factorial * i;
    }
    console.log(factorial);
}
// factori();
// 24. Write a ts program to find HCF (GCD) of two numbers.
function gcd(a, b) {
    var result = Math.min(a, b); // Find Minimum of a nd b
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    return result; // return gcd of a nd b
}
var a = 84;
var b = 60;
// console.log(gcd(a,b))
// 25. Write a ts program to find LCM of two numbers.
function LCM(a, b) {
    var result = Math.min(a, b); // Find Minimum of a nd b
    while (result >= 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    return result; // return gcd of a nd b
}
var a = 8;
var b = 6;
var lcm = (a * b) / LCM(a, b);
// console.log(LCM(a,b))
console.log(lcm);
// 26. Write a ts program to check whether a number is Prime number or not.
function Prime(num) {
    if (num % 2 == 0) {
        return false;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {
            if (num % i !== 0)
                return true;
        }
    }
}
// console.log(Prime(121));
// 27. Write a ts program to print all Prime numbers between 1 to n.
function isPrime(n) {
    if (n == 1 || n == 0)
        return false;
    for (var i = 2; i < n; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
for (var i = 1; i <= 100; i++) {
    var N = 100;
    if (isPrime(i)) {
        // console.log( i );
    }
}
// 28. Write a ts program to find sum of all prime numbers between 1 to n 
function sumOfPrimes(n) {
    var prime = new Array(n + 1);
    for (var i_3 = 0; i_3 < n + 1; i_3++)
        prime[i_3] = true;
    for (var p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (var i_4 = p * 2; i_4 <= n; i_4 += p)
                prime[i_4] = false;
        }
    }
    var sum = 0;
    for (var i_5 = 2; i_5 <= n; i_5++)
        if (prime[i_5])
            sum += i_5;
    return sum;
}
n = 11;
console.log(sumOfPrimes(n));
// 29. Write a ts program to find all prime factors of a number.
function primeFactor(n) {
    while (n % 2 == 0) {
        console.log(2 + " ");
        n = Math.floor(n / 2);
    }
    for (var i = 3; i <= Math.floor(Math.sqrt(n)); i++) {
        while (n % i == 0) {
            console.log(i + " ");
            n = Math.floor(n / i);
        }
    }
    if (n > 2) {
        console.log(n + " ");
    }
}
var n = 315;
// primeFactor(n)
// 30.Write a ts program to check whether a number is Armstrong number or not.
var Armstrong = function (number) {
    var sum = 0;
    var temp = number;
    while (temp > 0) {
        var rem = temp % 10;
        sum += rem * rem * rem;
        temp = parseInt(temp / 10);
    }
    if (sum == number) {
        console.log("".concat(number, " is an Armstrong number"));
    }
    else {
        console.log("".concat(number, " is not an Armstrong number."));
    }
};
// Armstrong(153)
// 31. Write a ts program to print all Armstrong numbers between 1 to n.
var printArmstrong = function (lowerNumber, highnumber) {
    for (var i_6 = lowerNumber; i_6 < highnumber; i_6++) {
        var numOfDigit = i_6.toString().length;
        var sum_2 = 0;
        var temp = i_6;
        while (temp > 0) {
            var rem = temp % 10;
            sum_2 += Math.pow(rem, numOfDigit);
            temp = parseInt(temp / 10);
        }
        if (sum_2 == i_6) {
            console.log("Armstrong Number : " + i_6);
        }
    }
};
// printArmstrong(1,1643)
// 32. Write a ts program to check whether a number is Perfect number or not.
function perfect(number) {
    var sum = 0;
    for (var i = 0; i < number; i++) {
        if (number % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == number) {
        console.log("".concat(number, "is a perfect number."));
    }
    else {
        console.log("".concat(number, "is not a perfect number."));
    }
}
//  perfect(8)
// 33. Write a ts program to print all Perfect numbers between 1 to n.
function isPerfect(n) {
    var sin = 1;
    for (var i_7 = 2; i_7 * i_7 <= n; i_7++) {
        if (n % i_7 == 0) {
            if (i_7 * i_7 != n)
                sin = sin + i_7 + n / i_7;
            else
                sin = sin + i_7;
        }
    }
    if (sin == n && n != 1)
        return true;
    return false;
}
console.log("Below are all perfect numbers till 10000");
for (var n_1 = 2; n_1 < 10000; n_1++)
    if (isPerfect(n_1))
        console.log(n_1 + " is a perfect number");
// 34. Write a ts program to check whether a number is Strong number or not.
var f = new Array(10);
function preCompute() {
    f[0] = f[1] = 1;
    for (var i_8 = 2; i_8 < 10; ++i_8)
        f[i_8] = f[i_8 - 1] * i_8;
}
function isStrong(x) {
    var factSum = 0;
    var temp = x;
    while (temp) {
        factSum += f[temp % 10];
        temp = Math.floor(temp / 10);
    }
    return (factSum == x);
}
preCompute();
var x = 145;
isStrong(x) ? console.log("Yes") :
    console.log("No" + "<br>");
x = 534;
isStrong(x) ? console.log("Yes" + "<br>") :
    console.log("No");
// 35. Write a ts program to print all Strong numbers between 1 to n.
var printStrong = function (lowerNum, highNum) {
    for (var j = lowerNum; j < highNum; j++) {
        var sum_3 = 0;
        var r = 0;
        var temp = j;
        while (j) {
            var i_9 = 1;
            var fact = 1;
            r = j % 10;
            while (i_9 <= r) {
                fact = fact * i_9;
                i_9++;
            }
            sum_3 = sum_3 + fact;
            j = Math.floor(j / 10);
        }
        if (temp == sum_3) {
            console.log("".concat(temp, " : is a strong Number"));
        }
    }
};
// printStrong(1,200)
// 36. Write a ts program to print Fibonacci series up to n terms.    
var n = 12;
function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}
console.log(fib(n));
// 37. Write a ts program to find one's complement of a binary number.
var complementOfBinary = function (number) {
    number = number.toString();
    var reverse = number.split('').map(function (x) { return x === "0" ? "1" : "0"; }).join('');
    console.log("Number: " + reverse);
};
complementOfBinary(1001);
// 38. Write a ts program to find two's complement of a binary number.
function flip(c) { return (c == '0') ? '1' : '0'; }
function printOneAndTwosComplement(bin) {
    var n = bin.length;
    var i;
    var ones, twos;
    ones = twos = "";
    for (i = 0; i < n; i++)
        ones += flip(bin[i]);
    twos = ones;
    twos = twos.split('');
    for (i = n - 1; i >= 0; i--) {
        if (ones[i] == '1')
            twos[i] = '0';
        else {
            twos[i] = '1';
            break;
        }
    }
    twos = twos.join('');
    if (i == -1)
        twos = '1' + twos;
    console.log("1's complement: " + ones + "<br>");
    console.log("2's complement: " + twos + "<br>");
}
var bin = "1100";
printOneAndTwosComplement(bin);
// 39. Write a ts program to convert Binary to Octal number system.
function flip(c) { return (c == '0') ? '1' : '0'; }
function printOneAndTwosComplement(bin) {
    var n = bin.length;
    var i;
    var ones, twos;
    ones = twos = "";
    for (i = 0; i < n; i++)
        ones += flip(bin[i]);
    twos = ones;
    twos = twos.split('');
    for (i = n - 1; i >= 0; i--) {
        if (ones[i] == '1')
            twos[i] = '0';
        else {
            twos[i] = '1';
            break;
        }
    }
    twos = twos.join('');
    if (i == -1)
        twos = '1' + twos;
    console.log("1's complement: " + ones);
    console.log("2's complement: " + twos);
}
printOneAndTwosComplement(11011);
// 40. Write a ts program to convert Binary to Decimal number system.
var binaryToDecimal = function (binary) {
    var digit = parseInt(binary, 2);
    console.log(digit);
};
// binaryToDecimal(1010100)
// 41. Write a ts program to convert Binary to Hexadecimal number system.
var binaryToHexa = function (binary) {
    var digit = parseInt(binary, 2).toString(16).toUpperCase();
    console.log(digit);
};
// binaryToHexa(1010)
// 42. Write a ts program to convert Octal to Binary number system.
var octTobin = function (oct) {
    var digit = parseInt(oct, 8).toString(2);
    console.log(digit);
};
// octTobin(540)
// 43. Write a ts program to convert Octal to Decimal number system.
var octTODecimal = function (oct) {
    var digit = parseInt(oct, 8);
    console.log(digit);
};
// octTODecimal(140)
// 44. Write a ts program to convert Octal to Hexadecimal number system.
var octToHexa = function (oct) {
    var digit = parseInt(oct, 8).toString(16).toUpperCase();
    console.log(digit);
};
// octToHexa(5130)
// 45. Write a ts program to convert Decimal to Binary number system.
var decToBin = function (decimal) {
    var digit = parseInt(decimal, 10).toString(2);
    console.log(digit);
};
// decToBin(2233)
// 46. Write a ts program to convert Decimal to Octal number system.
var decToOct = function (decimal) {
    var digit = parseInt(decimal, 10).toString(8);
    console.log(digit);
};
// decToOct(2233)
// 47. Write a ts program to convert Decimal to Hexadecimal number system.
var decToHexa = function (decimal) {
    var digit = parseInt(decimal, 10).toString(16).toUpperCase();
    console.log(digit);
};
// decToHexa(828)
// 48. Write a ts program to convert Hexadecimal to Binary number system.
var hexaToBin = function (hexa) {
    var digit = parseInt(hexa, 16).toString(2);
    console.log(digit);
};
// hexaToBin('aa64')
// 49. Write a ts program to convert Hexadecimal to Octal number system.
var hexaToOct = function (hexa) {
    var digit = parseInt(hexa, 16).toString(8);
    console.log(digit);
};
// hexaToOct('aa64')
// 50. Write a ts program to convert Hexadecimal to Decimal number system.
var hexaToDec = function (hexa) {
    var digit = parseInt(hexa, 16);
    console.log(digit);
};
// hexaToDec('aa64')
// 51. Write a ts program to print Pascal triangle upto n rows.
function generatePascal(n) {
    //2D array
    var arr = [];
    var tmp;
    for (var i = 0; i < n; i++) {
        //Each element in array is in turn an array
        // The index is the row number and the array values are the row values
        arr[i] = [];
        for (var j = 0; j <= i; j++) {
            //If index is last element the value is always 1
            if (j == i) {
                arr[i].push(1);
            }
            else {
                //The following line adds up the two numbers directly above this element.
                tmp = (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) + (!!arr[i - 1][j] ? arr[i - 1][j] : 0);
                arr[i].push(tmp);
            }
        }
    }
    console.log(arr);
}
generatePascal(1);
