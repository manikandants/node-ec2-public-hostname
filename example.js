var ec2 = require("ec2-public-hostname");
 
ec2.getPublicHostname(function (error, hostname) {
	if (error) {
		console.log(error);
	}
	console.log("Instance Public Hostname: ", hostname);
});
