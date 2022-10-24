

// 1. Write a ts program to read and print elements of array.

function  arr(num:number[] ){

    console.log("Elements of array are: ",num)
}
// arr([12,11,22,33,44]);


// 2. Write a ts program to print all negative elements in an array.

function nEg(num1:number[])
{
  
      var neW= num1.filter(function(number){
        return    number<0;
        })
    
 
console.log("Negative Elements in arry are: ", neW)
    }
    
//  nEg([23,-32,-44])   
 
// 3. Write a ts program to find sum of all array elements.  

function sUm(num:number[],sum:number=0){
    for(var i=0; i<num.length; i+=1)
    {
        sum=sum+num[i];
    }console.log("Sum of all elements are:",sum)

return sum
}

//sUm([23,32,33]);


// 4. Write a ts program to find maximum and minimum element in an array.

function maxEle(numb:number[]){
 
console.log("Maximum Element is: ",Math.max(... numb))

console.log("Minimum Element is:", Math.min(...numb))

}
// maxEle([23,33,44,54])


// 5. Write a ts program to find second largest element in an array.

  function sEcondLarge(num:number[])
  {
var fir:number=-1;
var second:number=-1
    for(var i=0; i<=num.length-1;i++){

        if(num[i]>fir){
            second = fir;
            fir = num[i];
        }
        else if( num[i] > second && num[i] != fir){
            second =  num[i];
        }
    
        
}
 console.log("Second Maximum no. is: ", second) 
    }
// sEcondLarge([23,44,56,76]);


// 6. Write a ts program to count total number of even and odd elements in an array.

function oddEven(num:number[]){
  var even:number=0;
  var odd:number=0;
   for(var i=0; i<num.length;i++){
    if(num[i]%2==0 ){
       even+=1;
        }else{
            odd+=1;
        }
        
   }
   console.log(`Total Even elements  in Array is ${even}`);
   console.log(`Total odd elements in Array is ${odd}`);
}
// oddEven([23,42,34])
   


// 7. Write a ts program to count total number of negative elements in an array.

function nEg1(num1:number[])
{
  
      var neW= num1.filter(function(number){
        return    number<0;
        })
    
 
console.log("Negative Elements in arry are: ",neW.length)
    }
    
 // nEg1([23,-32,-44])


// 8. Write a ts program to copy all elements from an array to another array.

function err(){
    var non:number[]=[23,32,33,43,34,54]
    console.log("Origional array is; ", non)

    var nEw:number[]=non.map(function(number){
        return number
    })
    console.log("Copy arry is: ",nEw)
}

 //err();


// 9. Write a ts program to insert an element in an array.

function inSrt(){
var str:number[]=[32,33,22,43]
// var str:string[]=["hey","how","wow"]
     str[2]=44;

    console.log("Insert elemnet in arry: ",str)

}
//inSrt()

//  10. Write a ts program to delete an element from an array at specified position.

function dEle(num:number[]){
     var a=num.join().split("23")

    console.log("Array after delete elements: ",a)
 

}
// dEle([23,43,65,74,31,91])

 


// 11. Write a ts program to count frequency of each element in an array.

function fReq(num:number[])
{
    var count={};
    for(var element of num){
        if(count[element]){
            count[element] += 1;
  } else {
    count[element] = 1;
  }
        
    }
   console.log("Elements in arry are: ", count)    
}
// fReq([2,3,3,2,5,6,7,9,3,3,3,])


// 12. Write a ts program to print all unique elements in the array.

function uNiq(){
    const arr = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,-4,5,-6,-78,8,99, 9, 4];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<9 && arr[i]>2){
            console.log(arr[i]);
            
        }
    }
}

// uNiq()

// 13. Write a ts program to count total number of duplicate elements in an array.
 
function delDup2(num:number[]){
 var countz:number=0;
 for(var i=0; i<num.length; i++){
    for(var j=i+1; j<num.length; j++){
        if(num[i]==num[j]){
            countz++
            break;
        }
 }
   console.log("Total duplicate Element in arry are: ",countz) 
}
}
// delDup2([23,24,42,23,42,24,21])


// 14. Write a ts program to delete all duplicate elements from an array.
  
 function delDu(num:number[]){
  
    var unique = num.filter(function(num, index, self) {
        return index === self.indexOf(num);
    })
console.log(unique)


 }
//  delDu([23,34,54,65,55,23,34,55,65])

  

 

// 15. Write a ts program to merge two array to third array.

function mErge(num1:number[],str:string[]){

    console.log("Merge Arry are: ", num1.concat(str))

}
// mErge([12,23,32,21],["he","ali","malik"])


// 16. Write a ts program to find reverse of an array.

function rEver(num:number[]){
   
    console.log("Reverse of arry is: ", num.reverse())
}
// rEver([12,23,56,76,98])


// 17. Write a ts program to put even and odd elements of array in two separate array.

function sepEvenOdd(){
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,- 4]; 
    let even:number[]=[]
    let odd:number[]=[]
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
     even.push(arr[i])
    }else{
       odd.push(arr[i]) 
    }
  }
  console.log(`Even array ${even}`);
  console.log(`Odd array ${odd}`);
  
}
// sepEvenOdd()



//   18. Write a ts program to search an element in an array.


function sEr(nuj:number[]){
     
    console.log("Elements is: ", nuj.indexOf(23))
 
}
// sEr([23,43,56,65,76])


// 19. Write a ts program to sort array elements in ascending or descending order.

function sOr(num:number[]){
    num.sort()
 console.log(`Ascending order of arry:  ${num}`)

 num.reverse()
 console.log(` Descending order of arry: ${num}`)
}
// sOr([99,2,4,6,1,0,-3,-99])

 


// 20. Write a ts program to sort even and odd elements of array separately.


function sepEvenOdd2(){
    const arr:number[] = [5, 5, 5, 2, 2, 2, 2, 2,-2,3,- 4]; 
    let even:number[]=[]
    let odd:number[]=[]
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
     even.push(arr[i])
    }else{
       odd.push(arr[i]) 
    }
  }
  console.log(`Even array ${even}`);
  console.log(`Odd array ${odd}`);
  
}
// sepEvenOdd2()


// 21. Write a ts program to left rotate an array.

function rotLeft(rotation:number) {
    const arr:Number[]=[1,2,3,4,5]
    const rotateArr:Number[]=arr.concat()
    for(let i=0; i<rotation; i++){
     const front=rotateArr.shift()
     rotateArr.push(front)

    }
   console.log( `Array before Rotation ${arr}`);
   console.log( `Array After Rotation ${rotateArr}`);
   
  }
  
  
  rotLeft(4)


// 22. Write a ts program to right rotate an array.
function rotRight(rotation:number) {
    const arr:Number[]=[1,2,3,4,5]
    const rotateArr:Number[]=arr.concat()
    for(let i=0; i<rotation; i++){
     const front=rotateArr.pop()
     rotateArr.unshift(front)

    }
   console.log( `Array before Rotation ${arr}`);
   console.log( `Array After Rotation ${rotateArr}`);
   
  }
  
  
  rotRight(1)