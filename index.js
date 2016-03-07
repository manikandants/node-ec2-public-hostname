var request = require('request');
var async = require('async');

exports.getPublicHostname = function(callback) {
	var url = 'http://169.254.169.254/latest/meta-data/public-hostname';
	var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
	var count = 5;
	var publicHostname;
	if (!callback) {
		return;
	}
	async.doWhilst(function(fn) {
		request.get(url, function(err, response, body) {
			count--;
			if (count < 0) {
				return fn({
					code: 1,
					message: 'Server Timeout'
				});
			}
			if (!err && response.statusCode == 200) {
				publicHostname = body;
			}
			return fn(null);
		});
	},
	function() {
		return !(publicHostname !== undefined && new RegExp(regex).test(publicHostname));
	},
	function(err) {
		callback(err, publicHostname)
	});
};
