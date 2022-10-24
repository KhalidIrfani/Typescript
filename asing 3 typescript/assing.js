// 1. Write a ts program to find length of a string.
function lenthString() {
    var Name = "Allah is the best planner";
    console.log("String is :" + Name);
    console.log("lenth of string: " + Name.length);
}
lenthString();
// 2. Write a ts program to copy one string to another string.
function copyString() {
    var str = "Allah is the best planner";
    var now = str;
    console.log("Copy string is: " + now);
}
copyString();
// 3. Write a ts program to concatenate two strings.
function conCat() {
    var a = "We are";
    var b = " Muslims";
    console.log(a.concat(b));
}
conCat();
// 4. Write a ts program to compare two strings.
function coMpare() {
    var com = "This is beautifull";
    var Comp = com.localeCompare("that's a string");
    console.log("Compare string is :" + Comp);
}
coMpare();
// 5. Write a ts program to convert lowercase string to uppercase.
function loWer() {
    var cAse = "we are  muslims";
    console.log("UpperCase letter are :" + cAse.toUpperCase());
}
loWer();
// 6. Write a ts program to convert uppercase string to lowercase.
function uPer() {
    var cAse = "IT IS A BOOK";
    console.log("lowerCase letter are :" + cAse.toLowerCase());
}
uPer();
// 7. Write a ts program to toggle case of each character of a string.
function toggleChars(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] = String.fromCharCode(str[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
        else if (str[i] >= 'a' && str[i] <= 'z')
            str[i] = String.fromCharCode(str[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
    }
}
var str = "GeKf@rGeek$".split("");
toggleChars(str);
console.log("String after toggle ");
console.log((str).join(""));
// 8. Write a ts program to find total number of alphabets, digits or special character in a string.
function alPha() {
    var set = "0";
    if ((set >= "a" && set <= "z") || (set >= "A" && set <= "Z")) {
        console.log("the chracter is alphabet");
    }
    else if (set >= 0 || set < 0)
        console.log("it is a digit");
    else {
        console.log("special character");
    }
}
alPha();
// 9. Write a ts program to count total number of vowels and consonants in a string.
function voWel(str) {
    var count = str.match(/[AaEeIiOoUu]/g).length;
    return count;
}
var character1 = "People are Effected by flood";
var result = voWel(character1);
console.log("These are vowel letter ".concat(result, " and others are consonent"));
// 10. Write a ts program to count total number of words in a string.
function count() {
    var cOunt = "we are Muslim";
    console.log(cOunt.length);
}
count();
// 11. Write a ts program to find reverse of a string.
function rEverse() {
    var nam = "I am a Boy";
    var newnam = nam.split('').reverse().join('');
    console.log("Reverse String is :" + newnam);
}
rEverse();
// 12. Write a ts program to check whether a string is palindrome or not.
function palindrome(string) {
    var arrayValues = string.split('');
    var reverseArrayValues = arrayValues.reverse();
    var reverseString = reverseArrayValues.join('');
    if (string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}
var string = "madam";
palindrome(string);
// 13. Write a ts program to reverse order of words in a given string
function reveRsE(str) {
    var newstr = str.split('').reverse().join('');
    console.log("Reverse words are :", newstr);
}
reveRsE("where is he");
// 14. Write a ts program to find first occurrence of a character in a given string.
function occurrence() {
    var str = "Typescript is a great language";
    console.log("First occurance word is :" + str.indexOf(""));
}
occurrence();
//  15. Write a ts program to find last occurrence of a character in a given string.
function oCcur() {
    var str = "Typescript is a great language";
    console.log("Last occurance word is :" + str.lastIndexOf("e"));
}
oCcur();
// 16. Write a ts program to search all occurrences of a character in given string.
function oCCur() {
    var chrac = "we are intelligent";
    if (chrac.search(re) == -1) {
        console.log("Letter is not Occur in the string");
    }
    else {
        console.log("Letter is  Occur in the string");
    }
}
var re = "e";
oCCur();
// 17. Write a ts program to count occurrences of a character in given string.
function cHar() {
    var chrac = "we are intelligent";
    var letter = "e";
    var str = chrac.length;
    var count = 0;
    for (var i = 0; i < str; i++) {
        if (chrac[i] == letter) {
            count++;
        }
    }
    console.log("Words occur are: ".concat(chrac, " => ").concat(letter, " : ").concat(count, " "));
}
cHar();
// 18. Write a ts program to find highest frequency character in a string.
var ASCII_SIZE = 256;
function getMaxOccurringChar(str) {
    var count = new Array(ASCII_SIZE);
    for (var i = 0; i < ASCII_SIZE; i++) {
        count[i] = 0;
    }
    var len = str.length;
    for (var i = 0; i < len; i++) {
        count[str[i].charCodeAt(0)] += 1;
    }
    var max = -1;
    var result = ' ';
    for (var i = 0; i < len; i++) {
        if (max < count[str[i].charCodeAt(0)]) {
            max = count[str[i].charCodeAt(0)];
            result = str[i];
        }
    }
    return result;
}
var nop = "wow";
console.log("Highest Frequency  character is :", getMaxOccurringChar(nop));
// 19. Write a ts program to find lowest frequency character in a string.
// 20. Write a ts program to count frequency of each character in a string.
var str2 = 'Where is he';
var frequencyDistribution = function (str) {
    var map = {};
    for (var i = 0; i < str.length; i++) {
        map[str[i]] = (map[str[i]] || 0) + 1;
    }
    ;
    return map;
};
console.log(frequencyDistribution(str2));
// 21. Write a ts program to remove first occurrence of a character from string.
function functionRemove() {
    var maiN = "Where is he";
    console.log("Remove first letter is :", maiN.slice(1));
}
functionRemove();
// 22. Write a ts program to remove last occurrence of a character from string.
function firstRemove() {
    var maiN = "Where is he";
    console.log("Remove last letter is :", maiN.slice(0, -1));
}
firstRemove();
// 23. Write a ts program to remove all occurrences of a character from string.
function allRemove() {
    var maiN = "Where is he";
    console.log("Remove all letter is :", maiN.slice(0, 0));
}
allRemove();
// 24. Write a ts program to remove all repeated characters from a given string.
function repeatRemove() {
    var maiN = "Where is he";
    console.log("Remove repeat letter is :", maiN.split("e"));
}
repeatRemove();
// 25. Write a ts program to replace first occurrence of a character with another in a string.
function fReplace() {
    var re = "t";
    var fiRst = "there is he";
    var newstr = fiRst.replace(re, "W");
    console.log("Replace first chrac is :", newstr);
}
fReplace();
// 26. Write a ts program to replace last occurrence of a character with another in a string.
function lReplace() {
    var re = "go";
    var fiRst = "where are you go";
    var newstr = fiRst.replace(re, "going now");
    console.log("Replace last chrac is :", newstr);
}
lReplace();
// 27. Write a ts program to replace all occurrences of a character with another in a string.
function allReplace() {
    var re = /apple/gi;
    var fiRst = "apple are  round and apple are jusicy";
    var newstr = fiRst.replace(re, "Orange");
    console.log("Replace all chrac is :", newstr);
}
allReplace();
//  28. Write a ts program to find first occurrence of a word in a given string.
function fIoccurance() {
    var iRst = "Allah is best Planner";
    console.log("First occurance word is:", iRst.indexOf("a"));
}
fIoccurance();
// 29. Write a ts program to find last occurrence of a word in a given string.
function lAoccurance() {
    var iRst = "Allah is best Planner";
    console.log("last occurance word is:", iRst.lastIndexOf("e"));
}
lAoccurance();
// 30. Write a ts program to search all occurrences of a word in given string.
function alloCCur() {
    var chrac = "we are intelligent";
    if (chrac.search(re) == -1) {
        console.log("Letter is not Occur in the string");
    }
    else {
        console.log("Letter is  Occur in the string");
    }
}
var re = "e";
alloCCur();
// 31. Write a ts program to count occurrences of a word in a given string.
function ccHar() {
    var chrac = "we are intelligent";
    var letter = "e";
    var str = chrac.length;
    var count = 0;
    for (var i = 0; i < str; i++) {
        if (chrac[i] == letter) {
            count++;
        }
    }
    console.log("Words occur are: ".concat(chrac, " => ").concat(letter, " : ").concat(count, " "));
}
ccHar();
// 32. Write a ts program to remove first occurrence of a word from string.
function functRemove() {
    var maiN = "Where is he";
    console.log("Remove first letter is :", maiN.slice(1));
}
functRemove();
// 33. Write a ts program to remove last occurrence of a character from string.
function fRemove() {
    var maiN = "Where is he";
    console.log("Remove last letter is :", maiN.slice(0, -1));
}
fRemove();
// 34. Write a ts program to remove all occurrences of a character from string.
function aRemove() {
    var maiN = "Where is he";
    console.log("Remove all letter is :", maiN.slice(0, 0));
}
aRemove();
// 35. Write a ts program to trim leading white space characters from given string.
function tRim() {
    var trim = "   I am Peter Parker";
    var str = trim.trimStart();
    console.log("Leading trim space is :", str);
}
tRim();
// 36. Write a ts program to trim trailing white space characters from given string.
function trIm() {
    var trim = "I am Peter Parker   ";
    var str = trim.trimEnd();
    console.log("Leading trim space is :", str);
}
trIm();
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
function trImall() {
    var trim = "   I am Peter Parker   ";
    var str = trim.trim();
    console.log("Leading trim space is :", str);
}
trImall();
// 38. Write a ts program to remove all extra blank spaces from given string.
function eXtra() {
    var extra = "I am boy";
    var str = extra.replaceAll(" ", "");
    console.log("Remove extra spaces are:", str);
}
eXtra();
// ---------//
//   conditional operators programming exercises
// 1. Write a ts program to find maximum between two numbers using conditional operator.
function maxTwo(num1, num2) {
    if (num1 > num2) {
        console.log("Number 1 is maximum number");
    }
    else {
        console.log("Number 2 is maximum number");
    }
}
maxTwo(12, 23);
// 2. Write a ts program to find maximum between three numbers using conditional operator.
function maxThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("Number 1 is maximum number");
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("Number 2 is maximum number");
    }
    else {
        console.log("Number 3 is maximum number");
    }
}
maxThree(12, 23, 34);
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log("Number is even");
    }
    else {
        console.log("Number is odd");
    }
}
evenOdd(20);
// 4. Write a ts program to check whether year is leap year or not using conditional operator.
function leapYear() {
    var month = 2;
    var days = 28;
    if (month == 2 && days == 29) {
        console.log("Year is leap");
    }
    else {
        console.log("Year is not leap");
    }
}
leapYear();
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.
function alpHa() {
    var character = "a";
    if (character >= "a" && character <= "z") {
        console.log("The chracter is alphabet");
    }
    else {
        console.log("character is not alphabet");
    }
}
alpHa();
//        ----------- //
//  List of switch case programming exercises
//  1. Write a ts program to print day of week name using switch case.
function wEek(Days) {
    switch (Days) {
        case 1:
            console.log("Today is Monday");
            break;
        case 2:
            console.log("Today is Tuesday");
            break;
        case 3:
            console.log("Today is wednesday");
            break;
        case 4:
            console.log("Today is Thursday");
            break;
        case 5:
            console.log("Today is Friday");
            break;
        case 6:
            console.log("Today is Saturday");
            break;
        case 7:
            console.log("Today is Sunday");
            break;
        default:
            console.log("unknown Value");
            break;
    }
}
wEek(3);
//  2. Write a ts program print total number of days in a month using switch case.
function mOnth(number) {
    switch (number) {
        case 1:
            console.log("Month is January and its days are 31");
            break;
        case 2:
            console.log("Month is Feburary and its days are 28");
            break;
        case 3:
            console.log("Month is  March and its days are 31");
            break;
        case 4:
            console.log("Month is  April and its days are 30");
            break;
        case 5:
            console.log("Month is  MAy and its days are 31");
            break;
        case 6:
            console.log("Month is June and its days are 30");
            break;
        case 7:
            console.log("Month is July and its days are 31");
            break;
        case 8:
            console.log("Month is August and its days are 31");
            break;
        case 9:
            console.log("Month is September and its days are 30");
            break;
        case 10:
            console.log("Month is October and its days are 31");
            break;
        case 11:
            console.log("Month is November and its days are 30");
            break;
        case 12:
            console.log("Month is December and its days are 31");
            break;
        default:
            console.log("unknown Value! Enete the valid  number");
            break;
    }
}
mOnth(12);
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
function cOnsonent(str) {
    switch (true) {
        case (str == ""):
            console.log("Alphabet is vowel or consonent");
            break;
        case (str == ""):
            console.log("Alphabet is consonent");
            break;
    }
}
cOnsonent("a");
// 4. Write a ts program to find maximum between two numbers using switch case.
function maXnum(numi, numi2) {
    switch (true) {
        case (numi > numi2):
            console.log("".concat(numi, " is a Maximun Number"));
            break;
        case (numi2 > numi): console.log("".concat(numi2, " is a Maximum Number"));
        default:
            console.log("Enter the valid number");
            break;
    }
}
maXnum(23, 32);
//  5. Write a ts program to check whether a number is even or odd using switch case.
function oDDnum(numi) {
    switch (true) {
        case (numi % 2 == 0):
            console.log("".concat(numi, " is a Even Number"));
            break;
        case (numi % 2 != 0): console.log("".concat(numi, " is a Odd Number"));
        default:
            console.log("Enter the valid  Number");
            break;
    }
}
oDDnum(22);
//  6. Write a ts program to check whether a number is positive, negative or zero using switch case.
function pOsnum(numi) {
    switch (true) {
        case (numi > 0):
            console.log("".concat(numi, " is a Positive  Number"));
            break;
        case (numi < 0):
            console.log("".concat(numi, " is a Negative Number"));
            break;
        case (numi == 0):
            console.log("Is a zero");
            break;
        default:
            console.log("Enter the valid Number");
            break;
    }
}
pOsnum(22);
// 7. Write a ts program to find roots of a quadratic equation using switch case.
function roOts(a, b, c) {
    var d = b * b - 4 * a * c;
    var e = Math.sqrt(Math.abs(d));
    switch (true) {
        case (d > 0):
            console.log("Roots are real and different :", (-b + e) / (2 * a) + " and " + (-b - e) / (2 * a));
            break;
        case (d < 0):
            console.log("Roots are complex");
            console.log(-b / (2 * a), "i", e / (2 * a), '<br>', -b / (2 * a), "i", e / (2 * a));
            break;
        case (d == 0):
            console.log("Roots are same", -b / (2 * a), " and ", -b / (2 * a));
            break;
        default:
            console.log("Enter the valid values");
            break;
    }
}
roOts(4, 8, 4);
//  8. Write a ts program to create Simple Calculator using switch case.
function cAlcu(nume, nume2, operrator) {
    var resul;
    switch (operrator) {
        case ('+'):
            resul = nume + nume2;
            console.log(("".concat(nume, " ").concat(operrator, " ").concat(nume2, "= ").concat(resul)));
            break;
        case ('*'):
            resul = nume * nume2;
            console.log(("".concat(nume, " ").concat(operrator, " ").concat(nume2, "= ").concat(resul)));
            break;
        case ('/'):
            resul = nume / nume2;
            console.log(("".concat(nume, " ").concat(operrator, " ").concat(nume2, "= ").concat(resul)));
            break;
        case ('-'):
            resul = nume - nume2;
            console.log(("".concat(nume, " ").concat(operrator, " ").concat(nume2, "= ").concat(resul)));
            break;
        default:
            console.log("Enter the valid Operator");
            break;
    }
}
cAlcu(22, 33, '+');
