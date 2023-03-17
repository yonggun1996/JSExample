function printAll(...args) {
	for (let i = 0; i < args.length; i+=1) {
		console.log(args[i]);
	}
}

printAll('Nice', 'to', 'meet', 'you')