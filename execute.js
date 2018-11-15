const childProcess = require('child_process').exec;

childProcess('dir', (err, stdout) => {
	if(err) {
		return err;
	}

	console.log(stdout)
});