// replace the word abc



function fstring(str){
let word="";
let fw="";
let count=0;
  for(let i=0;i<str.length;i++){
    
    if(str[i] != "."){
        word +=str[i]
       
    }else{
        if(count%2==0){
            // console.log(word)
            fw+=word +"."
            // console.log(fw)
            word=""
        }else{
           
            fw+=word.split("").reverse().join("") + ".";
            
            word=""
        }
        count++;
        
    }
   
  }
  console.log(fw)
}

fstring("i.like.this.program.very.much")

//   function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
//   }
//   reverseString("hello");


// ______________________________________________________________________________

// 0,1,1,2,3,5,8

// program to generate fibonacci series up to n terms

// let num=10;
// var a=0;
// var b=1;
//   var c;

// for(let i=0; i<num; i++){
//     console.log(a);
//     c=a+b; //c=1
//     a=b;   //a=b=1
//     b=c;

// }


// _________________________________________________________

// print the numbers that have remainder of 4 when divided by 5

// function div(arr){

//     for(i=0; i<arr.length; i++){
//         if(arr[i]%5==4){
//             console.log(arr[i])
//         }
//     }

// }

// div([13,4])  //output 4
// div([19,10,44,3,11,129])  //output 19,44,129



// _______________________________________________________

// prints the second maximum different between second-maximum any two elements from an aaray
// ex [2,3,5,7,19] 
// 19-2=17
// 19-3=16 so print the second maximum 16
        

// function diff(arr){
//     var D=[]
//     var f;
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             let curD= arr[i] - arr[j]
//             D.push(curD)
//              f=D.sort((a,b)=>b-a)
//         }
//     }
    
//     console.log(f[1])
// }

// diff([14,12,70,15,95,65,22,30])


// __________________________________________


function freqChar(str){
 var count="";
 var total=0;

 for(let i=0; i<str.length; i++){
    if(!str[i])
			{
				
				if ( str[i] == 'b')
				{
					count++;
					
				}
				else if (str[i] == 'f')
				{
					count++;
					
				}
				else if (str[i] == 'j')
				{
					count++;
				
				}
		
				if (count == 1)
				{
					total +=1; 	
				}
				else if(count > 1)
				{
					console.log(str[i] + " = " + count);
				}
			}
    
   
    
}


}

freqChar("rajasoftwarelabs")




// __________________________________-


// function getFrequency(string) {
//     var freq = {};
//     for (var i=0; i<string.length;i++) {
//         var character = string.charAt(i);
//         // console.log(character)
//         if (freq[character]) {
           
//            freq[character]++;
//         } else {
//            freq[character] = 1;
//         }
//     }
//     console.log(freq)
//     return freq;
//     };
// getFrequency('iiiiikl');




// function duplicateCharCount(str) {
		
// 	if(str) {
// 		var obj = {};
// 		for(let i = 0; i < str.length; i++) {
// 			if(obj[str[i]]){
// 				obj[str[i]] += obj[str[i]];
// 			}else {
// 				obj[str[i]] = 1;
// 			}
// 		}
// 		console.log(obj);
// 	}
			
// }



  
// duplicateCharCount("Aaabcdd");







// function primeSum(arr) {
	
// 	let val = arr.sort((a, b) => b - a);
//     let max=val[0]
// 	let prime = new Array(max + 1).fill(true);

// 	prime[0] = false;
// 	prime[1] = false;
// 	for (let p = 2; p * p <= max; p++) {

// 		if (prime[p] == true) {

// 			for (let i = p * 2; i <= max; i += p)
// 				prime[i] = false;
// 		}
// 	}

	
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++)
// 		if (!prime[arr[i]])
// 			sum += arr[i];

// 	return sum;
// }


// let arr = [2, 10, 13, 9];
// let n = arr.length;

// console.log(primeSum(arr));




// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("like"));

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('hello'));
