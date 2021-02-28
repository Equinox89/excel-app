console.log('module');

async function start() {
	return await Promise.resolve('asunc working');
}

start().then(console.log);
