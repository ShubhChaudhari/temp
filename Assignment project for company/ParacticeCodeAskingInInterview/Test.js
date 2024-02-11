//1] multipy with 2 using Map function

// let a=[2,54,3,5,6,7]

// console.log(a.map((m)=>m*2))  

// output [ 4, 108, 6, 10, 12, 14 ]

// ____________________________________________________________________

//2] Swap the string without using third variable

// let a="str1";
// let b="str2";

// console.log("Before swaping a=", a);
// console.log("Before swaping b=", b);

// [a,b] = [b,a];

// console.log("after swaping a=", a)
// console.log("after swaping b=", b)

// output
// Before swaping a= 1
// Before swaping b= 2
// after swaping a= 2
// after swaping b= 1

// _____________________________________________________________

// 3] Given string find the same element count

// let a="aaabbbaccc"

// console.log("Count of A =" ,a.split("a").length-1)
// console.log("Count of B =" ,a.split("b").length-1)
// console.log("Count of C =" ,a.split("c").length-1)

// output
// Count of A = 4
// Count of B = 3
// Count of C = 3

// _____________________________________________________________

// 4] Merge two array and and return the element of duplicate in array

// let a=[2,4,4,3,5,1,6,7,2,5]

// for(let i=0; i<a.length; i++){
//     for(let j=i+1; j<a.length; j++){
//         if(a[i]==a[j])
//             console.log(a[j])
//     }
// }

// output 2,4,5

// _____________________________________________________________

// 5] Merge two array and return a count of element

// let a = [2,3,5,3,4]
// let b = [1,2,8,9,6]

// let merge=a.concat(b)
// let NewArray=[]

// for(let i of merge)
// {
//     if(NewArray.indexOf(i)===-1){
//         NewArray.push(i)
//     }
// }
// console.log(NewArray)

// _____________________________________________________________


// Sort a number

// let a= [2002,33,1,200];

// console.log(a.sort((a,b)=>a-b))

// _______________________________________________________________________

//chanky monky

// function chunkArrayInGroups(arr, size) {

//     let arr2 = [];
//     let subArr = [];

//     for (let i = 0; i < arr.length; i += size) {
//         subArr = arr.slice(i, i + size);
//         arr2.push(subArr);
//     }

//     return arr2;
// }

// console.log(chunkArrayInGroups([1,2,3,4,4,5,5],2))

// output [ [ 1, 2 ], [ 3, 4 ], [ 4, 5 ], [ 5 ] ]

// _______________________________________________________________


// Write a JavaScript program to find the most frequent item of an array

// var arr1=[3, 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var mf=1;
// var m=0;
// var item;

// for(let i=0; i<arr1.length; i++){
//     for(let j=i; j<arr1.length; j++){
//         if(arr1[i]==arr1[j])
//         m++
//         if(mf<m){
//             mf=m;
//             item=arr1[i]
//         }
//     }
//     m=0;
// }

// console.log(item+" " + "count " +mf)


// __________________________________________________________________

// Synkrama task key and value change

// let v=[]
// let v1=[]

// function f(obj){
//     for(let k in obj){
//        if(obj[k]>60){
//             v=k
//             v1.push(v)
//             v1.sort()
//        }
//     }
//     return v1
// }
// console.log(f({java0:30,uvappp:70,aavaooo:80}))

// output [ 'aavaooo', 'uvappp' ]


// ________________________________________________________________

// check the input is array or not

// function arr(input) {
//     if (Array.isArray(input))
//       return true;
//     return false;   
//       };
//       console.log(arr(8889));
//       console.log(arr("8889"));
//       console.log(arr([1, 2, 4, 0]));




//   ________________________________________________________

// largest and smallest number


// let a = [2,33,78,9,11]

// var ln=a[0]
// var sn=a[0]

// for(let i=0; i<a.length; i ++){
//     if(a[i] >ln){
//         ln = a[i]
//     }else if(a[i]<sn){
//         sn=a[i]
//     }
// }

// console.log(ln)
// console.log(sn)

// __________________________________________________________________

// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   if(card >=2 && card<=6){
//     count ++;
    
//   }
//   else if(card >=7 && card <= 9){
//     count +=0
//   }
//   else{
//     count--;
//   }
//   if(count <=0){
//       console.log(count + " Hold") ;
//       return count + " Hold";
//   }
//   else{
//     console.log(count + " Bet")
//     return count + " Bet";
//   }

 
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');



function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
    for (let i= 0; i<arr.length; i++ ){
      console.log(i)
      for(let x=0; x<arr[i].length; x++){
        product *=arr[i][x];
      }
    }
    console.log(product)
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);







