// 1. string 배열을 모두 합하여 하나의 문자열 만들기
{
	const array = ['My', 'name', 'is', 'yonggun'];
	const str = array.join(' ');
	console.log(`answer : ${str}`);
}

// 2. string to array
{
	const str = 'Oh my god';
	const array = str.split(' ');
	console.log('array : ', array);
}

//3. 배열의 순서 뒤집기
{
	const array = [1,2,3,4,5];
	const reverseArray = array.reverse();
	console.log('reverseArray : ', reverseArray);
	/* array도 바뀌게 된다. */
}

// 4. 배열의 앞에 부분 자르기
{
	const array = [1,2,3,4,5];
	const sliceArray = array.slice(2);
	array.splice(2);
	console.log("array : ", array);
	console.log('sliceArray : ', sliceArray);
}

class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, true, 60),
	new Student('C', 31, false, 85),
	new Student('D', 30, false, 65),
	new Student('E', 25, true, 95)
]


//5. 학생들 중 95점인 학생을 찾는 코드
{
	//find api
	const result = students.find((student) => student.score === 60);
	// const result = students.filter(student => student.score === 95);
	console.log('result : ', result);
}

// 6.학생 중에서 수업에 등록한 학생만 반환되도록 구현
{
	const result = students.filter(student => student.enrolled === true);
	console.log('result : ', result);
}

// 7.점수만 뽑아와서 새로운 배열 만들기
{
	const result = students.map(student => student.score);
	console.log('result : ', result);
}

// 8.학생들 중 점수가 50점보다 낮은 학생이 있는지?
{
	const situation = (element) => element.score < 50;
	console.log('result : ', students.some(situation));
}

// 9.학생들의 평균 점수
{
	const scores = students.map(student => student.score);
	const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	console.log(`average : ${sum / scores.length}`);
}

// 10. 학생들의 모든 점수를 문자열로 & 구분자는 ','
{
	const result = students.map(student => student.score).toString();
	console.log(`result : ${result}`);
}

// 11.학생들의 점수가 낮은 순서대로 문자열로 반환
{
	const result = students.map(student => student.score)
						   .sort()
						   .toString();

	console.log(`result : ${result}`);

}