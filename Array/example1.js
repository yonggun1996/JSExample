const fruits = ['apple', 'banana'];

for(let i = 0; i < fruits.length; i += 1){
  console.log("for loop 1 " + fruits[i]);
}

for(let fruit of fruits){
	console.log("for loop 2 " + fruit);
}

fruits.forEach((fruit, index) => console.log("for loop 3 " + fruit + " " + index));