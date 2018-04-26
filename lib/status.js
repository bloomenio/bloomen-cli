var _intervalId = null;

var ProgressBar = require('progress');

function _stop() {
	if (_intervalId) {
		clearInterval(_intervalId);
		_intervalId = null;
	}
}

module.exports = {
	start: function () {
		var bar = new ProgressBar(' [:bar]', {total:10,clear:true,callback:_stop,stream:process.stdout});
		_intervalId = _intervalId || setInterval(function () {
				bar.tick();
				if (bar.complete) {
					clearInterval(_intervalId);
					_intervalId = null;
				}
			}, 100);
	},
	stop: _stop
};