// 1. Write a ts program to read and print elements of array.
function arr(num) {
    console.log("Elements of array are: ", num);
}
// arr([12,11,22,33,44]);
// 2. Write a ts program to print all negative elements in an array.
function nEg(num1) {
    var neW = num1.filter(function (number) {
        return number < 0;
    });
    console.log("Negative Elements in arry are: ", neW);
}
//  nEg([23,-32,-44])   
// 3. Write a ts program to find sum of all array elements.  
function sUm(num, sum) {
    if (sum === void 0) { sum = 0; }
    for (var i = 0; i < num.length; i += 1) {
        sum = sum + num[i];
    }
    console.log("Sum of all elements are:", sum);
    return sum;
}
//sUm([23,32,33]);
// 4. Write a ts program to find maximum and minimum element in an array.
function maxEle(numb) {
    console.log("Maximum Element is: ", Math.max.apply(Math, numb));
    console.log("Minimum Element is:", Math.min.apply(Math, numb));
}
// maxEle([23,33,44,54])
// 5. Write a ts program to find second largest element in an array.
function sEcondLarge(num) {
    var fir = -1;
    var second = -1;
    for (var i = 0; i <= num.length - 1; i++) {
        if (num[i] > fir) {
            second = fir;
            fir = num[i];
        }
        else if (num[i] > second && num[i] != fir) {
            second = num[i];
        }
    }
    console.log("Second Maximum no. is: ", second);
}
// sEcondLarge([23,44,56,76]);
// 6. Write a ts program to count total number of even and odd elements in an array.
function oddEven(num) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            even += 1;
        }
        else {
            odd += 1;
        }
    }
    console.log("Total Even elements  in Array is ".concat(even));
    console.log("Total odd elements in Array is ".concat(odd));
}
// oddEven([23,42,34])
// 7. Write a ts program to count total number of negative elements in an array.
function nEg1(num1) {
    var neW = num1.filter(function (number) {
        return number < 0;
    });
    console.log("Negative Elements in arry are: ", neW.length);
}
// nEg1([23,-32,-44])
// 8. Write a ts program to copy all elements from an array to another array.
function err() {
    var non = [23, 32, 33, 43, 34, 54];
    console.log("Origional array is; ", non);
    var nEw = non.map(function (number) {
        return number;
    });
    console.log("Copy arry is: ", nEw);
}
//err();
// 9. Write a ts program to insert an element in an array.
function inSrt() {
    var str = [32, 33, 22, 43];
    // var str:string[]=["hey","how","wow"]
    str[2] = 44;
    console.log("Insert elemnet in arry: ", str);
}
//inSrt()
//  10. Write a ts program to delete an element from an array at specified position.
function dEle(num) {
    var a = num.join().split("23");
    console.log("Array after delete elements: ", a);
}
// dEle([23,43,65,74,31,91])
// 11. Write a ts program to count frequency of each element in an array.
function fReq(num) {
    var count = {};
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var element = num_1[_i];
        if (count[element]) {
            count[element] += 1;
        }
        else {
            count[element] = 1;
        }
    }
    console.log("Elements in arry are: ", count);
}
// fReq([2,3,3,2,5,6,7,9,3,3,3,])
// 12. Write a ts program to print all unique elements in the array.
function uNiq() {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4, 5, -6, -78, 8, 99, 9, 4];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 9 && arr[i] > 2) {
            console.log(arr[i]);
        }
    }
}
// uNiq()
// 13. Write a ts program to count total number of duplicate elements in an array.
function delDup2(num) {
    var countz = 0;
    for (var i = 0; i < num.length; i++) {
        for (var j = i + 1; j < num.length; j++) {
            if (num[i] == num[j]) {
                countz++;
                break;
            }
        }
        console.log("Total duplicate Element in arry are: ", countz);
    }
}
// delDup2([23,24,42,23,42,24,21])
// 14. Write a ts program to delete all duplicate elements from an array.
function delDu(num) {
    var unique = num.filter(function (num, index, self) {
        return index === self.indexOf(num);
    });
    console.log(unique);
}
//  delDu([23,34,54,65,55,23,34,55,65])
// 15. Write a ts program to merge two array to third array.
function mErge(num1, str) {
    console.log("Merge Arry are: ", num1.concat(str));
}
// mErge([12,23,32,21],["he","ali","malik"])
// 16. Write a ts program to find reverse of an array.
function rEver(num) {
    console.log("Reverse of arry is: ", num.reverse());
}
// rEver([12,23,56,76,98])
// 17. Write a ts program to put even and odd elements of array in two separate array.
function sepEvenOdd() {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4];
    var even = [];
    var odd = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    console.log("Even array ".concat(even));
    console.log("Odd array ".concat(odd));
}
// sepEvenOdd()
//   18. Write a ts program to search an element in an array.
function sEr(nuj) {
    console.log("Elements is: ", nuj.indexOf(23));
}
// sEr([23,43,56,65,76])
// 19. Write a ts program to sort array elements in ascending or descending order.
function sOr(num) {
    num.sort();
    console.log("Ascending order of arry:  ".concat(num));
    num.reverse();
    console.log(" Descending order of arry: ".concat(num));
}
// sOr([99,2,4,6,1,0,-3,-99])
// 20. Write a ts program to sort even and odd elements of array separately.
function sepEvenOdd2() {
    var arr = [5, 5, 5, 2, 2, 2, 2, 2, -2, 3, -4];
    var even = [];
    var odd = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
        else {
            odd.push(arr[i]);
        }
    }
    console.log("Even array ".concat(even));
    console.log("Odd array ".concat(odd));
}
// sepEvenOdd2()
// 21. Write a ts program to left rotate an array.
function rotLeft(rotation) {
    var arr = [1, 2, 3, 4, 5];
    var rotateArr = arr.concat();
    for (var i = 0; i < rotation; i++) {
        var front = rotateArr.shift();
        rotateArr.push(front);
    }
    console.log("Array before Rotation ".concat(arr));
    console.log("Array After Rotation ".concat(rotateArr));
}
rotLeft(4);
// 22. Write a ts program to right rotate an array.
function rotRight(rotation) {
    var arr = [1, 2, 3, 4, 5];
    var rotateArr = arr.concat();
    for (var i = 0; i < rotation; i++) {
        var front = rotateArr.pop();
        rotateArr.unshift(front);
    }
    console.log("Array before Rotation ".concat(arr));
    console.log("Array After Rotation ".concat(rotateArr));
}
rotRight(1);
