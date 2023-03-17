class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color of`);
	}

	getArea() {
		return this.width * this.height;
	}
}

class RecTangle extends Shape {} //도형 클래스를 상속받은 사각형
class Triangle extends Shape {
	getArea() {
		return (this.width * this.height) / 2;
	}
}

const rectangle = new RecTangle(20, 30, 'black');
rectangle.draw();

