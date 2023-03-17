function changeName(obj) {
	obj.name = 'coder';
}
const park = { name : 'park' }; // 메모리 Reference에 Object가 적재 되고 reference가 park 변수를 가리킨다.
changeName(park);
console.log(park); //  -> { name: 'coder' }

/* 위와 같이 변경사항이 그대로 메모리에 남기 때문에 변경사항이 계속 유지 된다 */