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
var session = new snmp.Session({ host: host, community: community });

// All OIDs are represented as integer arrays.
// There is no interpretation of string or MIB names.
// This here is the OID for sysDescr.0.
var oid = [1, 3, 6, 1, 2, 1, 1, 1, 0];