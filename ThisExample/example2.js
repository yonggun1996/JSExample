const testCar = {
	name: 'toyota',
	getName: function() {
		console.log('this car data : ', this) // { name: 'toyota', getName: [Function: getName] }
		// const innerFunction = function(){
		// 	console.log('innerFunction : ', this) // window객체 : object를 통해서 호출하지 않았기 때문
		// }
		const innerFunction = () => {
			console.log('innerFunction : ', this); // { name: 'toyota', getName: [Function: getName] }
		}
		innerFunction();
	}
}

testCar.getName();