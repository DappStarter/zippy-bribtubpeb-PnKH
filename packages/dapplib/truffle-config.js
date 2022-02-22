require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture stomach decrease pitch excess install bean bone setup'; 
let testAccounts = [
"0x371c34f0b20fcfdd7f3dbc87fd7d12c6280878842ba1536161dc39835c150b1a",
"0x3c113908f3f0e96f0b9ca9ceb7ae92937e7e5a85cc5b6d6ec047cf6bc904ed80",
"0x1b6e7200adfc74c882c433b431ca2ec52f7aaaaef5916f658514845b766b37a6",
"0x1b4705ab128284274094505dede8405138e1dbe1869945590cb76a1bec18ca2a",
"0x962a7dfd599e64d678437f6c58a7f05f5cf4fd845752c46bae6a62e409d43fbd",
"0x88245d3d7e4785a896ae95bfccff92ad27f44d3def8b26283942c36894e31e2a",
"0x1caccc610426043c56634f47ecc074778ca018693b0b6f8a1d9c6340192bb532",
"0x86199f391261a421159b3ee39999e7736c5d8f98e8fc369c1d2446afcf242dac",
"0x5ebc27d85b9ad99dc61a4dee44c1e879a1f95bb57dd347e939adb68b215586a2",
"0x8ab56419ce0fc11b8bbb179f30dacfd8cfa439ca9bf18a955caf7261670beea0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


