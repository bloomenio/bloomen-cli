module.exports = function(program) {
	'use strict';

	program
		.command('remove-service <service>').alias('rs')
		.description('remove-service command <service>')
		.action(function(service, command) {
			console.log('Remove ' + service);
			program.log(service);
		});

};