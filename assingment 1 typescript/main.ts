
//1. Write a ts program to find maximum between two numbers.

var number1:number=20
var number2:number=25
  

 if(number1>number2){
    console.log("maxNumber=number1")
 }else{
console.log("maxNumber=number2") }



//2. Write a ts program to find maximum between three numbers.

var num1:number=2
var num2:number=4
var num3:number=12

if(num1>num2 && num1>num3){
    console.log("Maxnumber=num1")
}else if (num2>num1 && num2>num3){
      console.log("Maxnumber=num2")
}else{
    console.log("Maxnumber=num3")
}



//3. Write a ts program to check whether a number is negative, positive or zero.

var numeric:number=22

if(numeric>0){
    console.log("number is postive")
}else if(numeric<0){
    console.log("number is negative")
}else{
    console.log("number is zero")
}
 


//4. Write a ts program to check whether a number is divisible by 5 and 11 or not.

var num:number=65

if(num%11==0){
        console.log("Number is divisible by 11")
  
}else if(num%5==0){
    console.log("Number is divisible by 5")
}
else{ 
    console.log("Number is not divisible by 5 and 11")
}


//5. Write a ts program to check whether a number is even or odd.

var a:number=13;
 if(a%2==0){
    console.log("number is even")
 }else{
    console.log("number is odd")
 }


//6. Write a ts program to check whether a year is leap year or not.

var month:number=2;
var days:number=29;

if(month==2 && days==29){
    console.log("Year is leap")
}else{
    console.log("Year is not leap")
}




//7. Write a ts program to check whether a character is alphabet or not.

var character:string="a";

if(character >=`a` && character<=`z`){
    console.log("the chracter is alphabet")
}else{
 console.log("characteris not alphabet")
}


//8. Write a ts program to input any alphabet and check whether it is vowel or consonant.


 var character1:string="e";

if(character1 ==`a` || character1 == `e`|| character1 ==`i`|| character1 ==`o`|| character1 ==`u`|| character1 ==`A` || character1==`E`||character1==`I`|| character1==`O`||character1==`U`){
    console.log("the alphabet is vowel")
}else{
 console.log("the alphabet is not vowel")
}



//9. Write a ts program to input any character and check whether it is alphabet, digit or special character.

var set:any="a";

if((set>=`a` && set<=`z`) || (set>=`A`&& set<=`Z`)){
    console.log("the chracter is alphabet")
}else if(set>0 || set<0)
 console.log("it is a digit")
 
else{
    console.log("special character")
}





//10. Write a ts program to check whether a character is uppercase or lowercase alphabet.



var character3:string="a";

if(character3 >=`a` && character3<=`z`){
    console.log("the chracter is lower-case")
}else if(character3 >=`A` && character3<=`Z`){
 console.log("character is upper-case")
}else{
    console.log("character is not alphabet")
}


//11. Write a ts program to input week number and print week day.

 var dayNumber:number=7;
 switch(dayNumber){
    case 1:console.log("Today is Monday")
    break;
    case 2:console.log("Today is Tuesday")
    break;
    case 3:console.log("Today is wednesday")
    break;
    case 4:console.log("Today is Thursday")
    break;
    case 5:console.log("Today is Friday")
    break;
    case 6:console.log("Today is Saturday")
    break;
    case 7:console.log("Today is Sunday")

    default:("unknown Value")
    break;
 }

 




// 12. Write a ts program to input month number and print number of days in that month.

  var dayInMonth=function(month , year){
    return new Date(year ,month, 0).getDate();
  }

  console.log(dayInMonth(2, 2022))


//13. Write a ts program to count total number of notes in given amount.

var note100:number;
var note500:number;
var note50:number;
  
function caNote(amount:number){
    if(amount>=500){
         note500=amount/500;
        amount -=note500*500;
    }
    if(amount>=100){
        note100=amount/100;
        amount -=note100*100;
    }
    if(amount>=50){
       note50=amount/50;
        amount -=note50*50;
    }

    console.log("500 notes ; "+ note500)
    console.log("100 notes ; "+ note100)
    console.log("50 notes ; "+ note50)

}
caNote(560)


//14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.

var angle1:number=80;
var angle2:number=50;
var angle3:number=50;

var sum:number=angle1 + angle2 + angle3;


if(sum==180)
{
    console.log("It is a triangle")
}else{
    console.log("it is not a triangle")
}



//15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.

var a1:number=90;
var a2:number=45;
var a3:number=45;
var side:number=3;

var sum:number=a1+a2+a3;

if(sum==180 && side==3){
    console.log("it is a triangle")
}else{
    console.log("it is not a triangle")
}



//16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.

var side1:number=1;
var sa1:number=60;
var sa2:number=60;
var sa3:number=60;
var sid2=side1;

 var sides:number=3;
 
var sum:number=sa1+sa2+sa3;

if(sum==180 && sa1==60 &&  sa2==60 && sa3==60  && sides==3){
    console.log("Triangle is equlateral")
}
else if(sum==180 && side1==sid2  && sa1==sa2   && sides==3){
    console.log("Triangle is isosceles")
}
else if (sum==180 && sides==3){
    console.log("Triangle is scalene")
}else{
    console.log("not a triangle")
 }


//17. Write a ts program to find all roots of a quadratic equation.

function findRoots(a:number , b:number ,c:number){
    if(a==0){
        console.log("Invalid")
    }

    var d=b*b-4*a*c;
    var sqrt_d=Math.sqrt(Math.abs(d));

    if(d>0){
        console.log("Roots are real and different")

        console.log((-b+sqrt_d)/2*a + "     " +
        (-b-sqrt_d)/2*a)

    }else  if(d=0){
        console.log("Roots are real and same")

        console.log((-b+sqrt_d)/2*a + "    " +
        (-b-sqrt_d)/2*a)

    }else{
        
            console.log("Roots are complex")
    
            console.log((-b+sqrt_d)/2*a + "    " +
            (-b-sqrt_d)/2*a)
    
        
    }
}

findRoots(11,12,1)


//18. Write a ts program to calculate profit or loss.

function checkProfitLoss(costPrice:number,sellPrice:number){
    if(sellPrice>costPrice){
        console.log("YOU Get Profit")
    }else if(costPrice>sellPrice){
        console.log("YOU have in  loss")
    }else{
        console.log("No profit nor Loss")
    }
}  

checkProfitLoss(2000,3323)

// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

function calPersentage(Physics:number, Chemistry:number, Biology:number, Mathematics:number ,Computer:number){
    var getMarks:number=Physics+Chemistry+ Biology+ Mathematics + Computer;
    var totalMarks=500;
    var percentage=getMarks/totalMarks*100;
    console.log(percentage+":  is persentage of student")
    if(percentage>=90){
        console.log("Student get A Grade")
    }else if(percentage>=80){
        console.log("Student get B Grade")
    }else if(percentage>=70){
        console.log("Student get C Grade")
    }else if(percentage>=60){
        console.log("Student get D Grade")
    }else if(percentage>=40){
        console.log("Student get E Grade")
    }else{
        console.log("Student get F Grade")
    }
}

calPersentage(90,80,90,90,90)


// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

function grossSalary(basicSalary:number){
    if(basicSalary<=10000){
        var hra:number=basicSalary*20/100;
        var da:number=basicSalary*80/100;
        var totalSalary=basicSalary+hra+da
        console.log("Gross salary of an employee is : "+ totalSalary)
    }else  if(basicSalary<=20000){
        var hra:number=basicSalary*25/100;
        var da:number=basicSalary*90/100;
        var totalSalary=basicSalary+hra+da
        console.log("Gross salary of an employee is : "+ totalSalary)
    }else  if(basicSalary>20000){
        var hra:number=basicSalary*30/100;
        var da:number=basicSalary*95/100;
        var totalSalary=basicSalary+hra+da
        console.log("Gross salary of an employee is : "+ totalSalary)
    }else{
        console.log("Invalid salary")
    }
}
grossSalary(10111)


// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// Footer
 var amount:number;
function calUnits(units:number){
  
    if(units<=50){
        amount=units*0.50;
    }else if(units<=100){
        amount=units*0.75;
    }else if(units>100){
        amount=units*1.20;
    }else if(units>250){
        amount=units*1.50;
    }else{
        console.log("invalid units")
    }
    var s_chargers=amount*20/100;
    var totalBill=amount+s_chargers;
    console.log("total electricity bill : "+ totalBill)
}
calUnits(300)
