//Closure

var func1 = function func1(){
	var a = 4, b = 6;

	var func2 = function func2(){
		console.log(a + b);
	};
	setTimeout(func2, 2000);
};

func1();