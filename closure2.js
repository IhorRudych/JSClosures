//Closure

function counter() {
	var count = 0,
		butn1 = document.querySelector("#butn1"),
		butn2 = document.querySelector("#butn2");

	var print = function print() {
		console.log(count);
	};

	butn1.addEventListener("click", function count1() {
		count++;
		print();
	});

	butn2.addEventListener("click", function count2(){
		count++;
		print();
	});
};

counter();