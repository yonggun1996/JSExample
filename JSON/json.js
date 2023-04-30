//1. object to json
//stringify
let json = JSON.stringify(true);
console.log('json : ', json);

json = JSON.stringify(['number1', 'number2']);
console.log('json : ', json);

const dog = {
    name: 'cookie',
    age: 2,
    birthDate: new Date(Date.now()),
    size: null,
    run: () => {
        console.log('Cookie run');
    }
}

json = JSON.stringify(dog);
console.log('dog Json : ', json);

//원하는 key값만 나오게 하는 방법
json = JSON.stringify(dog, ['name']);
console.log('dog name : ', json);

//2. json to object
console.clear();
json = JSON.stringify(dog);
const obj = JSON.parse(json);
console.log(obj);

/* data만 영향이 있고 method는 영향이 없다. */
dog.run();
// obj.run(); error

/* Date의 api호출도 parse한 object에서 호출이 안된다 */
console.log(`dog birthday : ${dog.birthDate.getDate()}`)
// console.log(`obj birthday : ${obj.birthDate.getDate()}`) error