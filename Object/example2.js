const yonggun = { name : 'yonggun', age : 28 };

// 해당 키에 맞는 value를 가져오려는 함수
function getValue(obj, key) {
	// key의 명칭을 정확히 알 수 없을 때.
	console.log("obj.key : ", obj.key); // obj.key :  undefined
	console.log("obj[key] : ", obj[key]); // obj[key] :  yonggun
}

getValue(yonggun, 'name');