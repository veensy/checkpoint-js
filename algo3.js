/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  	let array = [ 1, 2 ]
	for (let i = 0; i < num; i++) {
    	array[i + 2] = array[i] + array[i + 1]
		}return array[num-1]
}