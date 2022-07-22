// Example code for node-snmp-native.
// ----

// This file contains examples of how to use the library.

// Basic setup
// -----

// The snmp object is the main entry point to the library.
var snmp = require('snmp-native');

var util = require('util');

var host = 'localhost';
var community = 'public';

// A session is required to communicate with an agent.
//var session = new snmp.Session({ host: host, community: community, timeouts: [1000] });

// All OIDs are represented as integer arrays.
// There is no interpretation of string or MIB names.
var oidStr = '.1.3.6.1.2.1.1'; // MIB 'system'
oid = oidStr
    .split('.')
    .filter(function (s) { return s.length > 0; })
    .map(function (s) { return parseInt(s, 10); });

// You can also get an entire subtree (an SNMP walk).
var session2 = new snmp.Session({ host: host, community: community });
session2.getSubtree({ oid: oid }, function (err, varbinds) {
    if (err) {
        // If there is an error, such as an SNMP timeout, we'll end up here.
        console.log(err);
    
	} else {
        // This is the list of varbinds.
        varbinds.forEach(function (vb) {
            //console.log(vb);
			if (vb.type != 6) { // type != OID
				console.log(vb.oid  + ' = ' + vb.value);
			
			} else {
				console.log(vb.oid  + ' = ' + vb.value);
				// fazer recursivo
			}
        });
    }

    session2.close();
});
