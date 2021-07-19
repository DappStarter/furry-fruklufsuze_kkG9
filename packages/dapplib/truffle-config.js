require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stool decrease stick horn install crime tail visa'; 
let testAccounts = [
"0x7ac940e9fc6b9d21b05c6b8aa8e414289b68bc0870bbc5afcd117e0cba2d36d0",
"0x05a210bf3cf64b204916b3e44ae6e1a413f3cc55cff51c77db57c61d945a2ea9",
"0xd792a8b86f0669523a45884d967a613cb91e16382e11e91069553c4ea3a18a29",
"0x86620378d040fabb1427c08a7dc4d01664dd0ab534b445b84888a4ff96d24850",
"0x9539b6c3d3dd3b029f5cb95c6bbc0f4144ad37413b152ff0d0ed227c551c9dea",
"0x92aa762014804229ba63ac8db90997cb3f634856e4c61b30e4f3401a303fab50",
"0x1a84ebc2dafbc224c33e5f5cbf12f22d0ab592c9c243d56cd8c01329fdc7881f",
"0x01ab86f94b977ad67c183a867faeff3a54b7c5175afb71de7ec2148c44450ae0",
"0xb01bcf51d16851ffcca6f222f801f178acbaddf5038716d5bc8db80a0cdc7b38",
"0x0f4681ee1f250a598942fbaef61c290a5441e9299819d3ac291f51f043a6ac5b"
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
            gas: 3000000,
            gasPrice: 470000000000,
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


