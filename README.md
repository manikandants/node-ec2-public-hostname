# node-ec2-public-hostname

[![Greenkeeper badge](https://badges.greenkeeper.io/manikandants/node-ec2-public-hostname.svg)](https://greenkeeper.io/)

Retrieve EC2 public-hostname from instance metadata.

Note: this assumes that a metadata service is available at http://169.254.169.254/. Thus it works on EC2 instances, behavior on other machines is undefined.

## Install

```bash
    npm install ec2-public-hostname
```

## Example

```javascript
    var ec2 = require("ec2-public-hostname");

    ec2.getPublicHostname(function (error, hostname) {
    	if (error) {
    		console.log(error);
    	}
        console.log("Instance Public Hostname: ", hostname);
    });
```

## Details

Public Hostname of Amazon EC2 instances can be retrieved via http GET calls to http://169.254.169.254/latest/meta-data
This module gets the public Hostname from meta-data api.

## Change Log
- 1.0.2: Dependencies update
- 1.0.1: Dependencies update
- 1.0.0: Basic getPublicHostname method.

## License

MIT
