var impEmailService = require('./modules/sendEmail');

impEmailService.on('emailEvent', (msg) => {
	console.log(`message ${message}`);
});

impEmailService.emit('emailEvent', 'Send Activation email to user after registration');