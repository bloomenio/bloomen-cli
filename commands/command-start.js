module.exports = function(program) {
	'use strict';

	var status = require('../lib/status');
	const SECONDS=5;
	program
		.command('start')
		.description('start command ')
		.action(function( command) {
			//console.log('start');
			status.start();
           
			//status.stop();
		});

};