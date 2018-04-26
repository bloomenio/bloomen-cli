module.exports = function(program) {
	'use strict';

	program
		.command('init <configuration>')
		.description('init command <configuration>')
		.action(function(configuration, command) {
			console.log('Hello ' + configuration);
			program.log(configuration);

		});

};