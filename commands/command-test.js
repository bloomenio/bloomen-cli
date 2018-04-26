module.exports = function(program) {
	'use strict';

	program
		.command('test')
		.option("-e, --exec_mode <mode>", "Which exec mode to use")
		.option("-d <mode>", "d mode")
		.description('test ')
		.action(function(command) {

			console.log('exec_mode '+command.exec_mode);
			console.log('d '+command.d);
			
		});

};