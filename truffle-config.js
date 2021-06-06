require('dotenv').config();

const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraProjectId = process.env.INFURA_PROJECT_ID;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;

module.exports = {
  networks: {
    development: {
	host: "127.0.0.1",
	port: 7545,
	network_id: "*" // Match any network id
    },
    kovan: {
	provider: () => new HDWalletProvider(process.env.DEV_PRIVATE_KEY, "https://kovan.infura.io/v3/" + infuraProjectId),
	gas: 5000000,
	gasPrice: 5000000000, // 5 gwei
	network_id: 42
    },
    main: {
        provider: () => new HDWalletProvider(process.env.DEV_PRIVATE_KEY, "https://main.infura.io/v3/" + infuraProjectId),
	gas: 5000000,
	gasPrice: 5000000000, // 5 gwei
	network_id: 1
    },
    rinkeby: {
	provider: () => new HDWalletProvider(process.env.DEV_PRIVATE_KEY, "https://rinkeby.infura.io/v3/" + infuraProjectId),
	gas: 5000000,
	gasPrice: 5000000000, // 5 gwei
	network_id: 4
    },
    ropsten: {
        provider: () => new HDWalletProvider(process.env.DEV_PRIVATE_KEY, "https://ropsten.infura.io/v3/" + infuraProjectId),
	gas: 5000000,
	gasPrice: 5000000000, // 5 gwei
	network_id: 3
    }
  },
  compilers: {
      solc: {
	version: "^0.6.2",
	  optimizer: {
	     enabled: true,
	     runs: 200
      	  }
      }
  },
  plugins: [
	'truffle-plugin-verify'
  ],
  api_keys: {
	etherscan: etherscanApiKey
  }
}
