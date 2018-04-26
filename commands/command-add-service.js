module.exports = function(program) {
	'use strict';

	program
		.command('add-service <service>').alias('as')
		.description('add-service command <service>')
		.action(function(service, command) {
			console.log('Add ' + service);
			program.log(service);
		});

};