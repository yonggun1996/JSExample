// this는 함수가 호출이 될 때 결정된
const car = {
	name: 'kia',
	getName: function() {
		console.log('this car : ', this)
	}
}

//car.getName(); // { name: 'kia', getName: [Function: getName] }

const globalCar = car.getName;
globalCar(); // window객체 호출(object에서 부르지 않았기 때문)

const car2 = {
	name: 'hyundai',
	getName: car.getName
}

car2.getName(); // { name: 'hyundai', getName: [Function: getName] }
//this는 호출되는 구간에서 정의가 된다

// const btn = document.getElementById('btn');
// btn.addEventListener('click', car.getName); // <button id="btn">버튼</button> -> 버튼에서 this를 호출했기 때문

// .bind() : this값을 고정

// this키워드를 car 내부로 결정하고 싶을 때
const bindGetCar = car2.getName.bind(car);
bindGetCar(); // { name: 'kia', getName: [Function: getName] }