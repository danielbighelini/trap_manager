const snmpTrapListener = require("node-red-contrib-snmp-trap-listener/snmp-trap-listener");

// Pass null for usage outside of node red
snmpTrapListener(null, {
    port: 162,
    snmpV1: true,
    snmpV2: true,
    snmpV3: true,
    communities: [
        {
            community: "public",
        },
    ],
    users: [
        {
            name: "Administrator",
            authProtocol: "none",
            authKey: "",
            privProtocol: "none",
            privKey: "",
        },
    ],
    ipfilter: "",
    ipmask: "",
});
