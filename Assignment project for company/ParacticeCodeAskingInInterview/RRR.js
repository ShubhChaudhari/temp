function isPrime(_num) {
	for(var i = 2; i < _num.length; i++) {
		if(!(_num[i] % i)) {
			return false
		}
	}
	return true;
}


function sumPrimes(_num) {
	var sum = 0;
	for(var i = 2; i <= _num.length; i++) {
		if(isPrime(i)) {
			sum += i;
		}
	}
    console.log(sum)
	return sum;

}

sumPrimes([1, 14, 5, 7] )





// _________________________________________


let n = 9;
     
// function returns the Fibonacci number
function fib(n) {
if (n <= 1)
    return n;
return fib(n-1) + fib(n-2);
}

//function call
console.log(fib(n));