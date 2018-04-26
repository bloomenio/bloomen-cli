module.exports = function(program) {
	'use strict';

	program
		.command('configure').alias('c')
		.description('configure command')
		.action(function(command) {
			program.prompt.start();

			var schema = {
				properties: {
				  name: {					
					message: 'Name must be only letters, spaces, or dashes',
					default: 'bloomen_user',
					conform: function(name) {
						//validate input
						return true;
					  } 				
				  },
				  password: {
					hidden: true,
					replace: '*',
					required: true
				  }
				}
			  };
 
			program.prompt.get(schema, function (err, result) {
				console.log('Command-line input received:');
				console.log('  name: ' + result.name);
				console.log('  password: ' + result.password);
			});
		});

};