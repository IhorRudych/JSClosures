//Closure

var APP = (function module(){

	var a = 5;

	var print = function print(val) {
		console.log(val);
	};

	var sum = function sum(b) {
		print(a + b);
	};

	var multiply = function multiply(b) {
		print(a * b);
	};

	return {
		sum:sum,
		multiply:multiply
	};
}());