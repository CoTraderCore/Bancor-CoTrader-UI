// export const API_endpoint = "http://localhost:9003"
export const API_endpoint = "https://api-bancor.cotrader.com"
export const StableSymbol = "USDB(USDB)"
export const BancorGasLimit = "0x607a5C47978e2Eb6d59C6C6f51bc0bF411f4b85a"

// MAINNET
export const ETHBNT = "0xb1cd6e4153b2a390cf00a6556b0fc1458c4a5533"
export const BancorRegistryMAIN = "0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4"
export const BNTToken = "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C"
export const USDBToken = "0x309627af60f0926daa6041b8279484312f2bf060"
export const USDBBNTToken = "0xd1146B08e8104EeDBa44a73B7bda1d102c6ceDC9"
export const BancorNetwork = "0x0e936B11c2e7b601055e58c7E32417187aF4de4a"
export const BancorETH = "0xc0829421C1d260BD3cB3E0F06cfE2D52db2cE315"
export const EtherscanLink = "https://etherscan.io/"
export const gasPrice = 2000000000 // 2 gwei low gas price by default
export const netId = 1

export const ABIBancorRegistryMAIN = [
	{"constant":true,"inputs":[{"name":"_contractName","type":"bytes32"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contractName","type":"bytes32"}],"name":"unregisterAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contractNames","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contractName","type":"bytes32"},{"name":"_contractAddress","type":"address"}],"name":"registerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"itemCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_contractName","type":"bytes32"}],"name":"addressOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_contractName","type":"bytes32"},{"indexed":false,"name":"_contractAddress","type":"address"}],"name":"AddressUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}]

export const BancorRegistryABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_adminOnly",
				"type": "bool"
			}
		],
		"name": "restrictRegistryUpdate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSmartTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_smartTokens",
				"type": "address[]"
			}
		],
		"name": "getConvertersBySmartTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isConvertibleToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "updateRegistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getConvertibleTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "prevRegistry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getConvertibleTokenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "addConverter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isConvertibleTokenSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "acceptOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLiquidityPoolCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "registry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLiquidityPools",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_reserveTokens",
				"type": "address[]"
			},
			{
				"name": "_reserveRatios",
				"type": "uint256[]"
			}
		],
		"name": "getLiquidityPoolByReserveConfig",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getConvertibleToken",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "isConverterValid",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_converter",
				"type": "address"
			}
		],
		"name": "removeConverter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			}
		],
		"name": "getConvertibleTokenSmartTokenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getLiquidityPool",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "restoreRegistry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "adminOnly",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "newOwner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getConvertibleTokenSmartToken",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getSmartTokenCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_value",
				"type": "address"
			}
		],
		"name": "isLiquidityPool",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_convertibleToken",
				"type": "address"
			}
		],
		"name": "getConvertibleTokenSmartTokens",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_registry",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "SmartTokenAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "SmartTokenRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_liquidityPool",
				"type": "address"
			}
		],
		"name": "LiquidityPoolAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_liquidityPool",
				"type": "address"
			}
		],
		"name": "LiquidityPoolRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "ConvertibleTokenAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_convertibleToken",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_smartToken",
				"type": "address"
			}
		],
		"name": "ConvertibleTokenRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_prevOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "OwnerUpdate",
		"type": "event"
	}
]

export const ABISmartToken = [
	{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableTransfers","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"destroy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transfersEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_token","type":"address"}],"name":"NewSmartToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Issuance","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Destruction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}]

export const ABIConverter = [
	{"constant":false,"inputs":[{"name":"_adminOnly","type":"bool"}],"name":"restrictRegistryUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"","type":"uint32"},{"name":"","type":"bool"},{"name":"_virtualBalance","type":"uint256"}],"name":"updateConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"connectors","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint32"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bancorX","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_reserveToken","type":"address"}],"name":"getReserveBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"connectorTokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"quickConvertPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_disable","type":"bool"}],"name":"disableConversions","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convertInternal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_reserveToken","type":"address"}],"name":"getReserveRatio","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_minReturn","type":"uint256"},{"name":"_conversionId","type":"uint256"},{"name":"_signature","type":"uint256[]"}],"name":"completeXConversion2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptTokenOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_magnitude","type":"uint8"}],"name":"getFinalAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"converterType","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_weight","type":"uint32"},{"name":"","type":"bool"}],"name":"addConnector","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"liquidate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawFromToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"newManager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_whitelist","type":"address"}],"name":"setConversionWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_minReturn","type":"uint256"},{"name":"_conversionId","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"completeXConversion","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"change","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"prevRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_scaleFactor","type":"uint16"}],"name":"enableVirtualBalances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_ratio","type":"uint32"}],"name":"addReserve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convert2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"connectorTokenCount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_sellAmount","type":"uint256"}],"name":"getSaleReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromToken","type":"address"},{"name":"_toToken","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convert","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromConnectorToken","type":"address"},{"name":"_toConnectorToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getCrossConnectorReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONVERTER_CONVERSION_WHITELIST","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_virtualBalance","type":"uint256"}],"name":"updateReserveVirtualBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"maxConversionFee","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"reserveTokenCount","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_connectorToken","type":"address"},{"name":"_disable","type":"bool"}],"name":"disableConnectorSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_depositAmount","type":"uint256"}],"name":"getPurchaseReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_reserveToken","type":"address"},{"name":"_disable","type":"bool"}],"name":"disableReserveSale","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_signature","type":"uint256[]"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"quickConvertPrioritized2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"restoreRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"conversionsEnabled","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"conversionWhitelist","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"adminOnly","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"fund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_fromReserveToken","type":"address"},{"name":"_toReserveToken","type":"address"},{"name":"_amount","type":"uint256"}],"name":"getCrossReserveReturn","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"reserveTokens","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"upgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"reserves","outputs":[{"name":"virtualBalance","type":"uint256"},{"name":"ratio","type":"uint32"},{"name":"isVirtualBalanceEnabled","type":"bool"},{"name":"isSaleEnabled","type":"bool"},{"name":"isSet","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_connectorToken","type":"address"}],"name":"getConnectorBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_bancorX","type":"address"}],"name":"setBancorX","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"quickConvert2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newManager","type":"address"}],"name":"transferManagement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_conversionFee","type":"uint32"}],"name":"setConversionFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"quickConvert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_amount","type":"uint256"}],"name":"claimTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_registry","type":"address"},{"name":"_maxConversionFee","type":"uint32"},{"name":"_reserveToken","type":"address"},{"name":"_reserveRatio","type":"uint32"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_fromToken","type":"address"},{"indexed":true,"name":"_toToken","type":"address"},{"indexed":true,"name":"_trader","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_return","type":"uint256"},{"indexed":false,"name":"_conversionFee","type":"int256"}],"name":"Conversion","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_connectorToken","type":"address"},{"indexed":false,"name":"_tokenSupply","type":"uint256"},{"indexed":false,"name":"_connectorBalance","type":"uint256"},{"indexed":false,"name":"_connectorWeight","type":"uint32"}],"name":"PriceDataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_prevFee","type":"uint32"},{"indexed":false,"name":"_newFee","type":"uint32"}],"name":"ConversionFeeUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_conversionsEnabled","type":"bool"}],"name":"ConversionsEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_enabled","type":"bool"}],"name":"VirtualBalancesEnable","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevManager","type":"address"},{"indexed":true,"name":"_newManager","type":"address"}],"name":"ManagerUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"}]

export const ABIBancorNetwork = [
	{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BNT_TOKEN","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_REGISTRY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_CONVERTER_FACTORY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxAffiliateFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_FORMULA","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"registry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"etherTokens","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONTRACT_FEATURES","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"conversionHashes","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_NETWORK","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_GAS_PRICE_LIMIT","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CONVERTER_CONVERSION_WHITELIST","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BANCOR_X_UPGRADER","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"NON_STANDARD_TOKEN_REGISTRY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_registry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"constant":false,"inputs":[{"name":"_maxAffiliateFee","type":"uint256"}],"name":"setMaxAffiliateFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_registry","type":"address"}],"name":"setRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_signerAddress","type":"address"}],"name":"setSignerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_register","type":"bool"}],"name":"registerEtherToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convertFor2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_signature","type":"uint256[]"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convertForPrioritized4","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"xConvert2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_signature","type":"uint256[]"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"xConvertPrioritized3","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"}],"name":"getReturnByPath","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"claimAndConvertFor2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"convert2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_affiliateAccount","type":"address"},{"name":"_affiliateFee","type":"uint256"}],"name":"claimAndConvert2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"convert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"}],"name":"claimAndConvert","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"}],"name":"convertFor","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"}],"name":"claimAndConvertFor","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"}],"name":"xConvert","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_signature","type":"uint256[]"}],"name":"xConvertPrioritized2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_toBlockchain","type":"bytes32"},{"name":"_to","type":"bytes32"},{"name":"_conversionId","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"xConvertPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_customVal","type":"uint256"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"convertForPrioritized3","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_block","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"convertForPrioritized2","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_path","type":"address[]"},{"name":"_amount","type":"uint256"},{"name":"_minReturn","type":"uint256"},{"name":"_for","type":"address"},{"name":"_block","type":"uint256"},{"name":"_nonce","type":"uint256"},{"name":"_v","type":"uint8"},{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"}],"name":"convertForPrioritized","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"}]

export const ERC20Bytes32ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_symbol",
				"type": "bytes32"
			},
			{
				"name": "_decimals",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			},
			{
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_who",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export const ABIBancorGasPriceLimit = [
	{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gasPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_gasPrice","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_prevOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"OwnerUpdate","type":"event"},{"constant":false,"inputs":[{"name":"_gasPrice","type":"uint256"}],"name":"setGasPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_gasPrice","type":"uint256"}],"name":"validateGasPrice","outputs":[],"payable":false,"stateMutability":"view","type":"function"}]


export const BYTECODESmartToken = "60c0604052600360808190527f302e33000000000000000000000000000000000000000000000000000000000060a09081526200004091600891906200015a565b506009805460ff191660011790553480156200005b57600080fd5b5060405162000f1a38038062000f1a833981016040908152815160208301519183015160008054600160a060020a03191633178155918401805190949390930192909184918491849181108015620000b4575060008351115b1515620000c057600080fd5b8351620000d59060029060208701906200015a565b508251620000eb9060039060208601906200015a565b506004805460ff191660ff939093169290921790915560058190553360009081526006602090815260409182902092909255805130815290517ff4cd1f8571e8d9c97ffcb81558807ab73f9803d54de5da6a0420593c82a4a9f09450908190039091019150a1505050620001ff565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019d57805160ff1916838001178555620001cd565b82800160010185558215620001cd579182015b82811115620001cd578251825591602001919060010190620001b0565b50620001db929150620001df565b5090565b620001fc91905b80821115620001db5760008155600101620001e6565b90565b610d0b806200020f6000396000f3006080604052600436106101065763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461010b578063095ea7b3146101955780631608f18f146101cd57806318160ddd146101e957806323b872dd14610210578063313ce5671461023a57806354fd4d50146102655780635e35359e1461027a57806370a08231146102a457806379ba5097146102c5578063867904b4146102da5780638da5cb5b146102fe57806395d89b411461032f578063a24835d114610344578063a9059cbb14610368578063bef97c871461038c578063d4ee1d90146103a1578063dd62ed3e146103b6578063f2fde38b146103dd575b600080fd5b34801561011757600080fd5b506101206103fe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015a578181015183820152602001610142565b50505050905090810190601f1680156101875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a157600080fd5b506101b9600160a060020a0360043516602435610489565b604080519115158252519081900360200190f35b3480156101d957600080fd5b506101e76004351515610542565b005b3480156101f557600080fd5b506101fe61056b565b60408051918252519081900360200190f35b34801561021c57600080fd5b506101b9600160a060020a0360043581169060243516604435610571565b34801561024657600080fd5b5061024f61059f565b6040805160ff9092168252519081900360200190f35b34801561027157600080fd5b506101206105a8565b34801561028657600080fd5b506101e7600160a060020a0360043581169060243516604435610603565b3480156102b057600080fd5b506101fe600160a060020a03600435166106f9565b3480156102d157600080fd5b506101e761070b565b3480156102e657600080fd5b506101e7600160a060020a0360043516602435610793565b34801561030a57600080fd5b5061031361089c565b60408051600160a060020a039092168252519081900360200190f35b34801561033b57600080fd5b506101206108ab565b34801561035057600080fd5b506101e7600160a060020a0360043516602435610906565b34801561037457600080fd5b506101b9600160a060020a03600435166024356109ef565b34801561039857600080fd5b506101b9610a1b565b3480156103ad57600080fd5b50610313610a24565b3480156103c257600080fd5b506101fe600160a060020a0360043581169060243516610a33565b3480156103e957600080fd5b506101e7600160a060020a0360043516610a50565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104815780601f1061045657610100808354040283529160200191610481565b820191906000526020600020905b81548152906001019060200180831161046457829003601f168201915b505050505081565b600082600160a060020a03811615156104a157600080fd5b8215806104cf5750336000908152600760209081526040808320600160a060020a0388168452909152902054155b15156104da57600080fd5b336000818152600760209081526040808320600160a060020a03891680855290835292819020879055805187815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600054600160a060020a0316331461055957600080fd5b6009805460ff19169115919091179055565b60055481565b60095460009060ff16151561058257fe5b61058d848484610ab1565b151561059557fe5b5060019392505050565b60045460ff1681565b6008805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104815780601f1061045657610100808354040283529160200191610481565b600054600160a060020a0316331461061a57600080fd5b82600160a060020a038116151561063057600080fd5b82600160a060020a038116151561064657600080fd5b83600160a060020a03811630141561065d57600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b1580156106d957600080fd5b505af11580156106ed573d6000803e3d6000fd5b50505050505050505050565b60066020526000908152604090205481565b600154600160a060020a0316331461072257600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a031633146107aa57600080fd5b81600160a060020a03811615156107c057600080fd5b82600160a060020a0381163014156107d757600080fd5b6005546107ea908463ffffffff610bda16565b600555600160a060020a038416600090815260066020526040902054610816908463ffffffff610bda16565b600160a060020a03851660009081526006602090815260409182902092909255805185815290517f9386c90217c323f58030f9dadcbc938f807a940f4ff41cd4cead9562f5da7dc3929181900390910190a1604080518481529051600160a060020a038616913091600080516020610cc08339815191529181900360200190a350505050565b600054600160a060020a031681565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104815780601f1061045657610100808354040283529160200191610481565b33600160a060020a03831614806109275750600054600160a060020a031633145b151561093257600080fd5b600160a060020a03821660009081526006602052604090205461095b908263ffffffff610bf316565b600160a060020a038316600090815260066020526040902055600554610987908263ffffffff610bf316565b6005556040805182815290513091600160a060020a03851691600080516020610cc08339815191529181900360200190a36040805182815290517f9a1b418bc061a5d80270261562e6986a35d995f8051145f277be16103abd34539181900360200190a15050565b60095460009060ff161515610a0057fe5b610a0a8383610c08565b1515610a1257fe5b50600192915050565b60095460ff1681565b600154600160a060020a031681565b600760209081526000928352604080842090915290825290205481565b600054600160a060020a03163314610a6757600080fd5b600054600160a060020a0382811691161415610a8257600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600083600160a060020a0381161515610ac957600080fd5b83600160a060020a0381161515610adf57600080fd5b600160a060020a0386166000908152600760209081526040808320338452909152902054610b13908563ffffffff610bf316565b600160a060020a038716600081815260076020908152604080832033845282528083209490945591815260069091522054610b54908563ffffffff610bf316565b600160a060020a038088166000908152600660205260408082209390935590871681522054610b89908563ffffffff610bda16565b600160a060020a0380871660008181526006602090815260409182902094909455805188815290519193928a1692600080516020610cc083398151915292918290030190a350600195945050505050565b600082820183811015610bec57600080fd5b9392505050565b600081831015610c0257600080fd5b50900390565b600082600160a060020a0381161515610c2057600080fd5b33600090815260066020526040902054610c40908463ffffffff610bf316565b3360009081526006602052604080822092909255600160a060020a03861681522054610c72908463ffffffff610bda16565b600160a060020a038516600081815260066020908152604091829020939093558051868152905191923392600080516020610cc08339815191529281900390910190a350600193925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a72305820ce51519b7f4e3128abe81f88a7ef774780cd8fec3f3a7fe7e2cd72f7ce44e58d0029"


export const BYTECODEConverter = "6007805460a860020a61ffff021916751700000000000000000000000000000000000000000017905560c0604052600660808190527f62616e636f72000000000000000000000000000000000000000000000000000060a09081526200006991600891906200057d565b50600c80546001606860020a0319166c010000000000000000000000001790553480156200009657600080fd5b5060405160a080620052548339810160409081528151602083015191830151606084015160809094015160008054600160a060020a0319163317815592949192848680600160a060020a0381161515620000ef57600080fd5b5060028054600160a060020a03928316600160a060020a03199182161790915560048054909116331790558190811615156200012a57600080fd5b5060068054600160a060020a03909216600160a060020a031992831681179091556007805490921617905583600063ffffffff821610801590620001775750620f424063ffffffff821611155b15156200018357600080fd5b620001b77f436f6e74726163744665617475726573000000000000000000000000000000006401000000006200029e810204565b9150600160a060020a038216156200024c57604080517f2c7077c000000000000000000000000000000000000000000000000000000000815260016004820181905260248201529051600160a060020a03841691632c7077c091604480830192600092919082900301818387803b1580156200023257600080fd5b505af115801562000247573d6000803e3d6000fd5b505050505b600c805467ffffffff00000000191664010000000063ffffffff881602179055600160a060020a03841615620002915762000291848464010000000062000339810204565b5050505050505062000622565b600654604080517fbb34534c000000000000000000000000000000000000000000000000000000008152600481018490529051600092600160a060020a03169163bb34534c91602480830192602092919082900301818787803b1580156200030557600080fd5b505af11580156200031a573d6000803e3d6000fd5b505050506040513d60208110156200033157600080fd5b505192915050565b600054600160a060020a031633146200035157600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b158015620003b157600080fd5b505af1158015620003c6573d6000803e3d6000fd5b505050506040513d6020811015620003dd57600080fd5b5051600160a060020a03161415620003f457600080fd5b81600160a060020a03811615156200040b57600080fd5b82600160a060020a0381163014156200042357600080fd5b8260008163ffffffff16118015620004445750620f424063ffffffff821611155b15156200045057600080fd5b600254600160a060020a03868116911614801590620004955750600160a060020a0385166000908152600b60205260409020600101546601000000000000900460ff16155b8015620004b45750600c54620f424063ffffffff918216860190911611155b1515620004c057600080fd5b505050600160a060020a03919091166000818152600b60205260408120600180820180549284905566010000000000006501000000000063ffffffff1994851663ffffffff808a169190911765ffff0000000019169190911766ff000000000000191691909117909155600a805492830181559093527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8018054600160a060020a031916909317909255600c805492831692821690930116179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620005c057805160ff1916838001178555620005f0565b82800160010185558215620005f0579182015b82811115620005f0578251825591602001919060010190620005d3565b50620005fe92915062000602565b5090565b6200061f91905b80821115620005fe576000815560010162000609565b90565b614c2280620006326000396000f3006080604052600436106102fd5763ffffffff60e060020a600035041663024c7ec781146103025780630ca789231461031e5780630e53aae9146103505780631120a776146103a557806315226b54146103d657806319b64015146104095780631e1401f81461042157806321e6b53d146104645780632274256414610485578063228d2820146104ed5780632a2e2f0c146105075780632c12b446146105345780632cc1cd651461055557806338a5e016146105f25780633aa0145a146106075780633e8ff43f146106255780633f4d2fc2146106af578063415f1240146106de57806341a5b33d146106f65780634290602914610720578063481c6a751461073557806349d10b641461074a5780634af80f0e1461075f578063500573511461078057806354fd4d50146107f5578063579cd3ca146108215780635e35359e1461084f5780635e5144eb1461087957806361cd756e146108a6578063677c0812146108bb5780636a49d2c4146108d75780636ebf36c01461090157806371f52bf31461093957806372b44b2c1461094e57806375892cf11461097257806379ba50971461099f5780637b103999146109b45780638da5cb5b146109c95780638e3047e0146109de57806392d1abb714610a08578063935e2ae114610a1d57806394c275ad14610a415780639b99a8e214610a565780639e56855314610a6b578063a2c4c33614610a91578063a6a11c7114610ab5578063b3a426d514610adb578063b4a176d314610b7c578063bf75455814610b91578063c45d3d9214610bba578063c8c2fe6c14610bcf578063c976a35914610be4578063ca1d209d14610bf9578063cf73266a14610c11578063d031370b14610c3b578063d4ee1d9014610c53578063d55ec69714610c68578063d66bd52414610c7d578063d895951214610c9e578063d924f0c314610cbf578063e4dd22f614610ce0578063e4edf85214610d43578063ecbca55d14610d64578063f0843ba914610d82578063f2fde38b14610dd3578063fc0c546a14610df4578063fe417fa514610e09575b600080fd5b34801561030e57600080fd5b5061031c6004351515610e2d565b005b34801561032a57600080fd5b5061031c600160a060020a036004351663ffffffff602435166044351515606435610ead565b34801561035c57600080fd5b50610371600160a060020a0360043516610ebd565b6040805195865263ffffffff9094166020860152911515848401521515606084015215156080830152519081900360a00190f35b3480156103b157600080fd5b506103ba610f0f565b60408051600160a060020a039092168252519081900360200190f35b3480156103e257600080fd5b506103f7600160a060020a0360043516610f1e565b60408051918252519081900360200190f35b34801561041557600080fd5b506103ba60043561100c565b34801561042d57600080fd5b5061044b600160a060020a0360043581169060243516604435611038565b6040805192835260208301919091528051918290030190f35b34801561047057600080fd5b5061031c600160a060020a03600435166110b5565b604080516020600480358082013583810280860185019096528085526103f795369593946024949385019291829185019084908082843750949750508435955050506020830135926040810135925060ff606082013516915060808101359060a00135611105565b3480156104f957600080fd5b5061031c600435151561112e565b34801561051357600080fd5b506103f7600160a060020a03600435811690602435166044356064356111ed565b34801561054057600080fd5b506103f7600160a060020a0360043516611671565b34801561056157600080fd5b50604080516020600480358082013583810280860185019096528085526103f7953695939460249493850192918291850190849080828437505060408051818801358901803560208181028481018201909552818452989b8a359b8a8c01359b919a909950606090910197509295509082019350918291850190849080828437509497506116cd9650505050505050565b3480156105fe57600080fd5b5061031c611a80565b34801561061357600080fd5b506103f760043560ff60243516611b36565b34801561063157600080fd5b5061063a611b94565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561067457818101518382015260200161065c565b50505050905090810190601f1680156106a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156106bb57600080fd5b5061031c600160a060020a036004351663ffffffff602435166044351515611c22565b3480156106ea57600080fd5b5061031c600435611c31565b34801561070257600080fd5b5061031c600160a060020a0360043581169060243516604435611f65565b34801561072c57600080fd5b506103ba61200f565b34801561074157600080fd5b506103ba61201e565b34801561075657600080fd5b5061031c61202d565b34801561076b57600080fd5b5061031c600160a060020a03600435166121b9565b34801561078c57600080fd5b50604080516020600480358082013583810280860185019096528085526103f795369593946024949385019291829185019084908082843750949750508435955050506020830135926040810135925060ff606082013516915060808101359060a0013561220a565b34801561080157600080fd5b5061080a612224565b6040805161ffff9092168252519081900360200190f35b34801561082d57600080fd5b50610836612247565b6040805163ffffffff9092168252519081900360200190f35b34801561085b57600080fd5b5061031c600160a060020a036004358116906024351660443561225f565b34801561088557600080fd5b506103f7600160a060020a0360043581169060243516604435606435612370565b3480156108b257600080fd5b506103ba612387565b3480156108c757600080fd5b5061031c61ffff60043516612396565b3480156108e357600080fd5b5061031c600160a060020a036004351663ffffffff602435166125e2565b34801561090d57600080fd5b506103f7600160a060020a0360043581169060243581169060443590606435906084351660a43561281a565b34801561094557600080fd5b5061080a6128c0565b34801561095a57600080fd5b5061044b600160a060020a03600435166024356128cf565b34801561097e57600080fd5b506103f7600160a060020a0360043581169060243516604435606435612baf565b3480156109ab57600080fd5b5061031c612bc0565b3480156109c057600080fd5b506103ba612c3b565b3480156109d557600080fd5b506103ba612c4a565b3480156109ea57600080fd5b5061044b600160a060020a0360043581169060243516604435612c59565b348015610a1457600080fd5b506103f7612c67565b348015610a2957600080fd5b5061031c600160a060020a0360043516602435612c6c565b348015610a4d57600080fd5b50610836612d21565b348015610a6257600080fd5b5061080a612d35565b348015610a7757600080fd5b5061031c600160a060020a03600435166024351515612d3b565b348015610a9d57600080fd5b5061044b600160a060020a0360043516602435612d45565b348015610ac157600080fd5b5061031c600160a060020a03600435166024351515612ff2565b604080516020600480358082013583810280860185019096528085526103f7953695939460249493850192918291850190849080828437505060408051818801358901803560208181028481018201909552818452989b8a359b8a8c01359b919a9099506060909101975092955090820193509182918501908490808284375094975050508335600160a060020a031694505050602090910135905061307a565b348015610b8857600080fd5b5061031c613363565b348015610b9d57600080fd5b50610ba661339a565b604080519115158252519081900360200190f35b348015610bc657600080fd5b506103ba6133b3565b348015610bdb57600080fd5b5061031c6133c2565b348015610bf057600080fd5b50610ba661343f565b348015610c0557600080fd5b5061031c600435613460565b348015610c1d57600080fd5b5061044b600160a060020a03600435811690602435166044356137a8565b348015610c4757600080fd5b506103ba6004356139f4565b348015610c5f57600080fd5b506103ba613a1c565b348015610c7457600080fd5b5061031c613a2b565b348015610c8957600080fd5b50610371600160a060020a0360043516613b04565b348015610caa57600080fd5b506103f7600160a060020a0360043516613b4a565b348015610ccb57600080fd5b5061031c600160a060020a0360043516613b5b565b604080516020600480358082013583810280860185019096528085526103f79536959394602494938501929182918501908490808284375094975050843595505050602083013592600160a060020a036040820135169250606001359050613b94565b348015610d4f57600080fd5b5061031c600160a060020a0360043516613bba565b348015610d7057600080fd5b5061031c63ffffffff60043516613c25565b604080516020600480358082013583810280860185019096528085526103f795369593946024949385019291829185019084908082843750949750508435955050506020909201359150613d0a9050565b348015610ddf57600080fd5b5061031c600160a060020a0360043516613d1a565b348015610e0057600080fd5b506103ba613d6e565b348015610e1557600080fd5b5061031c600160a060020a0360043516602435613d7d565b60075460ff7401000000000000000000000000000000000000000090910416151581151514801590610e625750610e62613e76565b1515610e6d57600080fd5b60078054911515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019909216919091179055565b610eb78482612c6c565b50505050565b600160a060020a03166000908152600b602052604090208054600190910154909163ffffffff82169160ff64010000000082048116926501000000000083048216926601000000000000900490911690565b600354600160a060020a031681565b600160a060020a0381166000908152600b6020526040812060010154819083906601000000000000900460ff161515610f5657600080fd5b600160a060020a0384166000908152600b602052604090206001810154909250640100000000900460ff16611001576040805160e060020a6370a082310281523060048201529051600160a060020a038616916370a082319160248083019260209291908290030181600087803b158015610fd057600080fd5b505af1158015610fe4573d6000803e3d6000fd5b505050506040513d6020811015610ffa57600080fd5b5051611004565b81545b949350505050565b6000600a8281548110151561101d57fe5b600091825260209091200154600160a060020a031692915050565b600080600160a060020a03858116908516141561105457600080fd5b600254600160a060020a038581169116141561107d576110748584612d45565b915091506110ad565b600254600160a060020a038681169116141561109d5761107484846128cf565b6110a88585856137a8565b915091505b935093915050565b600054600160a060020a031633146110cc57600080fd5b600080516020614bb78339815191526110e481613e9d565b600160a060020a031633146110f857600080fd5b61110182613f35565b5050565b600061112288888861111a8b8a8a8a8a613fce565b60008061307a565b98975050505050505050565b600054600160a060020a03163314806111515750600454600160a060020a031633145b151561115c57600080fd5b600c5460ff6c0100000000000000000000000090910416151581151514156111ea57600c80546c01000000000000000000000000831581026cff000000000000000000000000199092169190911791829055604080519190920460ff161515815290517fb8e670608a57255ce4f35952b324cba70211a4200a91ce81d26e06d488c1f66b9181900360200190a15b50565b6000806000806000807f42616e636f724e6574776f726b0000000000000000000000000000000000000061122081613e9d565b600160a060020a0316331461123457600080fd5b600c546c01000000000000000000000000900460ff16151561125557600080fd5b876000811161126357600080fd5b600160a060020a038c8116908c16141561127c57600080fd5b600254600160a060020a038c8116911614156112a45761129d8c8b8b6140bd565b9750611662565b600254600160a060020a038d8116911614156112c55761129d8b8b8b614305565b6112d08c8c8c6137a8565b909750955086158015906112e45750888710155b15156112ef57600080fd5b600160a060020a038c166000908152600b602052604090206001810154909550640100000000900460ff1615611334578454611331908b63ffffffff6146f716565b85555b600160a060020a038b166000908152600b602052604090206001810154909450640100000000900460ff1615611379578354611376908863ffffffff61471416565b84555b6113828b610f1e565b925082871061138d57fe5b6113998c33308d614729565b6113a58b30338a614729565b6113b28c8c8c8a8a614967565b8b600160a060020a0316600080516020614bd7833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561141e57600080fd5b505af1158015611432573d6000803e3d6000fd5b505050506040513d602081101561144857600080fd5b81019080805190602001909291905050508e600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b1580156114b457600080fd5b505af11580156114c8573d6000803e3d6000fd5b505050506040513d60208110156114de57600080fd5b5051600189015460408051938452602084019290925263ffffffff1682820152519081900360600190a28a600160a060020a0316600080516020614bd7833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561157457600080fd5b505af1158015611588573d6000803e3d6000fd5b505050506040513d602081101561159e57600080fd5b81019080805190602001909291905050508d600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561160a57600080fd5b505af115801561161e573d6000803e3d6000fd5b505050506040513d602081101561163457600080fd5b5051600188015460408051938452602084019290925263ffffffff1682820152519081900360600190a28697505b50505050505050949350505050565b600160a060020a0381166000908152600b602052604081206001015482906601000000000000900460ff1615156116a757600080fd5b5050600160a060020a03166000908152600b602052604090206001015463ffffffff1690565b6000806000808451600014806116fa5750858560008151811015156116ee57fe5b90602001906020020151145b151561170557600080fd5b61172e7f42616e636f725800000000000000000000000000000000000000000000000000613e9d565b92506117597f42616e636f724e6574776f726b00000000000000000000000000000000000000613e9d565b91506117847f424e54546f6b656e000000000000000000000000000000000000000000000000613e9d565b600160a060020a031688600081518110151561179c57fe5b60209081029091010151600160a060020a0316146117b957600080fd5b604080517faafd6b76000000000000000000000000000000000000000000000000000000008152600481018890523360248201529051600160a060020a0385169163aafd6b769160448083019260209291908290030181600087803b15801561182157600080fd5b505af1158015611835573d6000803e3d6000fd5b505050506040513d602081101561184b57600080fd5b50516002546040805160e060020a63a24835d1028152336004820152602481018490529051929350600160a060020a039091169163a24835d19160448082019260009290919082900301818387803b1580156118a657600080fd5b505af11580156118ba573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152600160a060020a03878116600483015260248201879052915191909216935063867904b49250604480830192600092919082900301818387803b15801561191657600080fd5b505af115801561192a573d6000803e3d6000fd5b5050505081600160a060020a0316634de006cb89838a338a6000806040518863ffffffff1660e060020a028152600401808060200188815260200187815260200186600160a060020a0316600160a060020a031681526020018060200185600160a060020a0316600160a060020a0316815260200184815260200183810383528a818151815260200191508051906020019060200280838360005b838110156119dd5781810151838201526020016119c5565b50505050905001838103825286818151815260200191508051906020019060200280838360005b83811015611a1c578181015183820152602001611a04565b505050509050019950505050505050505050602060405180830381600087803b158015611a4857600080fd5b505af1158015611a5c573d6000803e3d6000fd5b505050506040513d6020811015611a7257600080fd5b505198975050505050505050565b600054600160a060020a03163314611a9757600080fd5b600254604080517f18160ddd0000000000000000000000000000000000000000000000000000000081529051600092600160a060020a0316916318160ddd91600480830192602092919082900301818787803b158015611af657600080fd5b505af1158015611b0a573d6000803e3d6000fd5b505050506040513d6020811015611b2057600080fd5b505111611b2c57600080fd5b611b346149ea565b565b600c54600090611b8d9060ff8416620f424081810a67ffffffffffffffff90811693611b8193899363ffffffff680100000000000000009093048316900383160a90911690614a6816565b9063ffffffff614a9616565b9392505050565b6008805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015611c1a5780601f10611bef57610100808354040283529160200191611c1a565b820191906000526020600020905b815481529060010190602001808311611bfd57829003601f168201915b505050505081565b611c2c83836125e2565b505050565b60008060008060008060006001600a80549050111515611c5057600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611ca357600080fd5b505af1158015611cb7573d6000803e3d6000fd5b505050506040513d6020811015611ccd57600080fd5b50519650611ce8600080516020614b97833981519152613e9d565b6002546040805160e060020a63a24835d1028152336004820152602481018c90529051929850600160a060020a039091169163a24835d19160448082019260009290919082900301818387803b158015611d4157600080fd5b505af1158015611d55573d6000803e3d6000fd5b50505050600091505b600a5461ffff83161015611f5b57600a805461ffff8416908110611d7e57fe5b60009182526020808320909101546040805160e060020a6370a082310281523060048201529051600160a060020a03909216985088936370a082319360248084019491939192918390030190829087803b158015611ddb57600080fd5b505af1158015611def573d6000803e3d6000fd5b505050506040513d6020811015611e0557600080fd5b5051600c54604080517fabfd231d000000000000000000000000000000000000000000000000000000008152600481018b90526024810184905263ffffffff9092166044830152606482018b905251919550600160a060020a0388169163abfd231d916084808201926020929091908290030181600087803b158015611e8a57600080fd5b505af1158015611e9e573d6000803e3d6000fd5b505050506040513d6020811015611eb457600080fd5b5051600160a060020a0386166000908152600b6020526040902060018101549194509150640100000000900460ff1615611efd578054611efa908463ffffffff61471416565b81555b611f0985303386614729565b6001810154604080518a8a038152858703602082015263ffffffff9092168282015251600160a060020a03871691600080516020614bd7833981519152919081900360600190a2600190910190611d5e565b5050505050505050565b600054600160a060020a03163314611f7c57600080fd5b600254604080517f5e35359e000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015285811660248301526044820185905291519190921691635e35359e91606480830192600092919082900301818387803b158015611ff257600080fd5b505af1158015612006573d6000803e3d6000fd5b50505050505050565b600554600160a060020a031681565b600454600160a060020a031681565b60075460009074010000000000000000000000000000000000000000900460ff16158061205d575061205d613e76565b151561206857600080fd5b6120917f436f6e7472616374526567697374727900000000000000000000000000000000613e9d565b600654909150600160a060020a038083169116148015906120ba5750600160a060020a03811615155b15156120c557600080fd5b604080517fbb34534c0000000000000000000000000000000000000000000000000000000081527f436f6e747261637452656769737472790000000000000000000000000000000060048201529051600091600160a060020a0384169163bb34534c9160248082019260209290919082900301818787803b15801561214957600080fd5b505af115801561215d573d6000803e3d6000fd5b505050506040513d602081101561217357600080fd5b5051600160a060020a0316141561218957600080fd5b6006805460078054600160a060020a03808416600160a060020a0319928316179092559091169216919091179055565b600054600160a060020a031633146121d057600080fd5b80600160a060020a0381163014156121e757600080fd5b5060098054600160a060020a031916600160a060020a0392909216919091179055565b600061112288888861221f8a8a8a8a8a613fce565b6116cd565b6007547501000000000000000000000000000000000000000000900461ffff1681565b600c5468010000000000000000900463ffffffff1681565b6000612278600080516020614bb7833981519152613e9d565b600160a060020a0385166000908152600b60205260409020600101549091506601000000000000900460ff1615806123425750600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b15801561230a57600080fd5b505af115801561231e573d6000803e3d6000fd5b505050506040513d602081101561233457600080fd5b5051600160a060020a031614155b8061235a5750600054600160a060020a038281169116145b151561236557600080fd5b610eb7848484614ab9565b600061237e858585856111ed565b95945050505050565b600754600160a060020a031681565b60008054819081908190600160a060020a031633146123b457600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b15801561241357600080fd5b505af1158015612427573d6000803e3d6000fd5b505050506040513d602081101561243d57600080fd5b5051600160a060020a03161461245257600080fd5b60648561ffff161015801561246d57506103e88561ffff1611155b151561247857600080fd5b8461ffff16606414159350600091505b600a5461ffff831610156125a657600a805461ffff84169081106124a857fe5b600091825260208083209190910154600160a060020a0316808352600b909152604090912060018101805464ff000000001916640100000000881515021790559093509050836124f9576000612599565b6125996064611b818761ffff1686600160a060020a03166370a08231306040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561256157600080fd5b505af1158015612575573d6000803e3d6000fd5b505050506040513d602081101561258b57600080fd5b50519063ffffffff614a6816565b8155600190910190612488565b60408051851515815290517f64622fbd54039f76d87a876ecaea9bdb6b9b493d7a35ca38ae82b53dcddbe2e49181900360200190a15050505050565b600054600160a060020a031633146125f957600080fd5b600254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290513092600160a060020a031691638da5cb5b9160048083019260209291908290030181600087803b15801561265857600080fd5b505af115801561266c573d6000803e3d6000fd5b505050506040513d602081101561268257600080fd5b5051600160a060020a0316141561269857600080fd5b81600160a060020a03811615156126ae57600080fd5b82600160a060020a0381163014156126c557600080fd5b8260008163ffffffff161180156126e55750620f424063ffffffff821611155b15156126f057600080fd5b600254600160a060020a038681169116148015906127345750600160a060020a0385166000908152600b60205260409020600101546601000000000000900460ff16155b80156127525750600c54620f424063ffffffff918216860190911611155b151561275d57600080fd5b505050600160a060020a03919091166000818152600b60205260408120600180820180549284905566010000000000006501000000000063ffffffff1994851663ffffffff808a169190911765ffff0000000019169190911766ff000000000000191691909117909155600a805492830181559093527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8018054600160a060020a031916909317909255600c805492831692821690930116179055565b6040805160038082526080820190925260009160609190602082018380388339505060025482519293508a92600160a060020a03909116915089908490600090811061286257fe5b90602001906020020184600181518110151561287a57fe5b90602001906020020185600281518110151561289257fe5b600160a060020a03948516602091820290920101529282169092529190911690526111228187878787613b94565b60006128ca612d35565b905090565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561293857600080fd5b505af115801561294c573d6000803e3d6000fd5b505050506040513d602081101561296257600080fd5b5051600160a060020a03161461297757600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff1615156129ad57600080fd5b600160a060020a03808c166000908152600b6020908152604080832060025482517f18160ddd0000000000000000000000000000000000000000000000000000000081529251919c50909416936318160ddd93600480840194938390030190829087803b158015612a1d57600080fd5b505af1158015612a31573d6000803e3d6000fd5b505050506040513d6020811015612a4757600080fd5b50516040805160e060020a6370a082310281523060048201529051919750600160a060020a038d16916370a08231916024808201926020929091908290030181600087803b158015612a9857600080fd5b505af1158015612aac573d6000803e3d6000fd5b505050506040513d6020811015612ac257600080fd5b50519450612add600080516020614b97833981519152613e9d565b6001880154604080517f49f9b0f7000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905263ffffffff9092166044830152606482018d905251919550600160a060020a038616916349f9b0f7916084808201926020929091908290030181600087803b158015612b6257600080fd5b505af1158015612b76573d6000803e3d6000fd5b505050506040513d6020811015612b8c57600080fd5b50519250612b9b836001611b36565b9b928c90039a509198505050505050505050565b600061237e8585858560008061281a565b600154600160a060020a03163314612bd757600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a36001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600654600160a060020a031681565b600054600160a060020a031681565b6000806110a88585856137a8565b600181565b60008054600160a060020a03163314612c8457600080fd5b600080516020614bb7833981519152612c9c81613e9d565b600160a060020a03163314612cb057600080fd5b600160a060020a0384166000908152600b602052604090206001015484906601000000000000900460ff161515612ce657600080fd5b505050600160a060020a03919091166000908152600b6020526040902060018101805464ff0000000019168315156401000000000217905555565b600c54640100000000900463ffffffff1681565b600a5490565b6111018282612ff2565b60008060008060008060008030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612dae57600080fd5b505af1158015612dc2573d6000803e3d6000fd5b505050506040513d6020811015612dd857600080fd5b5051600160a060020a031614612ded57600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff161515612e2357600080fd5b600160a060020a038b166000908152600b60205260409020600181015490975065010000000000900460ff161515612e5a57600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612ead57600080fd5b505af1158015612ec1573d6000803e3d6000fd5b505050506040513d6020811015612ed757600080fd5b50516040805160e060020a6370a082310281523060048201529051919750600160a060020a038d16916370a08231916024808201926020929091908290030181600087803b158015612f2857600080fd5b505af1158015612f3c573d6000803e3d6000fd5b505050506040513d6020811015612f5257600080fd5b50519450612f6d600080516020614b97833981519152613e9d565b6001880154604080517f29a00e7c000000000000000000000000000000000000000000000000000000008152600481018a90526024810189905263ffffffff9092166044830152606482018d905251919550600160a060020a038616916329a00e7c916084808201926020929091908290030181600087803b158015612b6257600080fd5b600054600160a060020a0316331461300957600080fd5b600160a060020a0382166000908152600b602052604090206001015482906601000000000000900460ff16151561303f57600080fd5b50600160a060020a03919091166000908152600b60205260409020600101805465ff0000000000191691156501000000000002919091179055565b6000808451600014806130a457508685600081518110151561309857fe5b90602001906020020151145b15156130af57600080fd5b6130d87f42616e636f724e6574776f726b00000000000000000000000000000000000000613e9d565b905034151561321f576002548851600160a060020a0390911690899060009081106130ff57fe5b90602001906020020151600160a060020a031614156131fb576002546040805160e060020a63a24835d1028152336004820152602481018a90529051600160a060020a039092169163a24835d19160448082019260009290919082900301818387803b15801561316e57600080fd5b505af1158015613182573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152600160a060020a038681166004830152602482018d9052915191909216935063867904b49250604480830192600092919082900301818387803b1580156131de57600080fd5b505af11580156131f2573d6000803e3d6000fd5b5050505061321f565b61321f88600081518110151561320d57fe5b9060200190602002015133838a614729565b80600160a060020a0316634de006cb348a8a8a338b8b8b6040518963ffffffff1660e060020a028152600401808060200188815260200187815260200186600160a060020a0316600160a060020a031681526020018060200185600160a060020a0316600160a060020a0316815260200184815260200183810383528a818151815260200191508051906020019060200280838360005b838110156132ce5781810151838201526020016132b6565b50505050905001838103825286818151815260200191508051906020019060200280838360005b8381101561330d5781810151838201526020016132f5565b5050505090500199505050505050505050506020604051808303818588803b15801561333857600080fd5b505af115801561334c573d6000803e3d6000fd5b50505050506040513d6020811015611a7257600080fd5b61336b613e76565b151561337657600080fd5b60075460068054600160a060020a031916600160a060020a03909216919091179055565b600c546c01000000000000000000000000900460ff1681565b600954600160a060020a031681565b600554600160a060020a031633146133d957600080fd5b600554600454604051600160a060020a0392831692909116907fbe4cc281795971a471c980e842627a7f1ea3892ddfce8c5b6357cd2611c1973290600090a36005805460048054600160a060020a0319908116600160a060020a03841617909155169055565b60075474010000000000000000000000000000000000000000900460ff1681565b6000806000806000806000600c809054906101000a900460ff16151561348557600080fd5b600a5460011061349457600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156134e757600080fd5b505af11580156134fb573d6000803e3d6000fd5b505050506040513d602081101561351157600080fd5b5051965061352c600080516020614b97833981519152613e9d565b9550600091505b600a5461ffff8316101561373057600a805461ffff841690811061355357fe5b60009182526020808320909101546040805160e060020a6370a082310281523060048201529051600160a060020a03909216985088936370a082319360248084019491939192918390030190829087803b1580156135b057600080fd5b505af11580156135c4573d6000803e3d6000fd5b505050506040513d60208110156135da57600080fd5b5051600c54604080517f1da6bbfb000000000000000000000000000000000000000000000000000000008152600481018b90526024810184905263ffffffff9092166044830152606482018b905251919550600160a060020a03881691631da6bbfb916084808201926020929091908290030181600087803b15801561365f57600080fd5b505af1158015613673573d6000803e3d6000fd5b505050506040513d602081101561368957600080fd5b5051600160a060020a0386166000908152600b6020526040902060018101549194509150640100000000900460ff16156136d25780546136cf908463ffffffff6146f716565b81555b6136de85333086614729565b600181015460408051898b018152868601602082015263ffffffff9092168282015251600160a060020a03871691600080516020614bd7833981519152919081900360600190a2600190910190613533565b6002546040805160e260020a63219e412d028152336004820152602481018b90529051600160a060020a039092169163867904b49160448082019260009290919082900301818387803b15801561378657600080fd5b505af115801561379a573d6000803e3d6000fd5b505050505050505050505050565b600080600080600080600030600160a060020a0316600260009054906101000a9004600160a060020a0316600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561381057600080fd5b505af1158015613824573d6000803e3d6000fd5b505050506040513d602081101561383a57600080fd5b5051600160a060020a03161461384f57600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff16151561388557600080fd5b600160a060020a038a166000908152600b60205260409020600101548a906601000000000000900460ff1615156138bb57600080fd5b600160a060020a038c81166000908152600b6020526040808220928e16825290206001820154919850965065010000000000900460ff1615156138fd57600080fd5b613914600080516020614b97833981519152613e9d565b945084600160a060020a03166379c1b45061392e8e610f1e565b60018a015463ffffffff166139428f610f1e565b60018b01546040805163ffffffff87811660e060020a028252600482019690965293851660248501526044840192909252929092166064820152608481018e9052905160a48083019260209291908290030181600087803b1580156139a657600080fd5b505af11580156139ba573d6000803e3d6000fd5b505050506040513d60208110156139d057600080fd5b505193506139df846002611b36565b9c938d90039b50929950505050505050505050565b600a805482908110613a0257fe5b600091825260209091200154600160a060020a0316905081565b600154600160a060020a031681565b60008054600160a060020a03163314613a4357600080fd5b613a5a600080516020614bb7833981519152613e9d565b9050613a6581613d1a565b600754604080517f90f58c96000000000000000000000000000000000000000000000000000000008152750100000000000000000000000000000000000000000090920461ffff16600483015251600160a060020a038316916390f58c9691602480830192600092919082900301818387803b158015613ae457600080fd5b505af1158015613af8573d6000803e3d6000fd5b505050506111ea612bc0565b600b602052600090815260409020805460019091015463ffffffff81169060ff640100000000820481169165010000000000810482169166010000000000009091041685565b6000613b5582610f1e565b92915050565b600054600160a060020a03163314613b7257600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b6000613bb0868686613ba98580808080613fce565b878761307a565b9695505050505050565b600054600160a060020a0316331480613bdd5750600454600160a060020a031633145b1515613be857600080fd5b600454600160a060020a0382811691161415613c0357600080fd5b60058054600160a060020a031916600160a060020a0392909216919091179055565b600054600160a060020a0316331480613c485750600454600160a060020a031633145b1515613c5357600080fd5b60008163ffffffff1610158015613c7e5750600c5463ffffffff640100000000909104811690821611155b1515613c8957600080fd5b600c546040805163ffffffff6801000000000000000090930483168152918316602083015280517f81cd2ffb37dd237c0e4e2a3de5265fcf9deb43d3e7801e80db9f1ccfba7ee6009281900390910190a1600c805463ffffffff90921668010000000000000000026bffffffff000000000000000019909216919091179055565b6000611004848484600080613b94565b600054600160a060020a03163314613d3157600080fd5b600054600160a060020a0382811691161415613d4c57600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a031681565b600354600160a060020a03163314613d9457600080fd5b6002546040805160e060020a63a24835d1028152600160a060020a038581166004830152602482018590529151919092169163a24835d191604480830192600092919082900301818387803b158015613dec57600080fd5b505af1158015613e00573d6000803e3d6000fd5b50506002546040805160e260020a63219e412d028152336004820152602481018690529051600160a060020a03909216935063867904b4925060448082019260009290919082900301818387803b158015613e5a57600080fd5b505af1158015613e6e573d6000803e3d6000fd5b505050505050565b60008054600160a060020a03163314806128ca575050600454600160a060020a0316331490565b600654604080517fbb34534c000000000000000000000000000000000000000000000000000000008152600481018490529051600092600160a060020a03169163bb34534c91602480830192602092919082900301818787803b158015613f0357600080fd5b505af1158015613f17573d6000803e3d6000fd5b505050506040513d6020811015613f2d57600080fd5b505192915050565b600054600160a060020a03163314613f4c57600080fd5b600254604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151919092169163f2fde38b91602480830192600092919082900301818387803b158015613fb357600080fd5b505af1158015613fc7573d6000803e3d6000fd5b5050505050565b60608060ff8516158015613fe0575083155b8015613fea575082155b156140055760408051600081526020810190915291506140b3565b60408051600580825260c08201909252906020820160a0803883390190505090508681600081518110151561403657fe5b60209081029091010152805186908290600190811061405157fe5b60209081029091010152805160ff8616908290600290811061406f57fe5b60209081029091010152805184908290600390811061408a57fe5b6020908102909101015280518390829060049081106140a557fe5b602090810290910101529050805b5095945050505050565b6000806000806140cd8787612d45565b909350915082158015906140e15750848310155b15156140ec57600080fd5b50600160a060020a0386166000908152600b602052604090206001810154640100000000900460ff161561412f57805461412c908763ffffffff6146f716565b81555b61413b87333089614729565b6002546040805160e260020a63219e412d028152336004820152602481018690529051600160a060020a039092169163867904b49160448082019260009290919082900301818387803b15801561419157600080fd5b505af11580156141a5573d6000803e3d6000fd5b50506002546141c39250899150600160a060020a0316888686614967565b86600160a060020a0316600080516020614bd7833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561422f57600080fd5b505af1158015614243573d6000803e3d6000fd5b505050506040513d602081101561425957600080fd5b50516040805160e060020a6370a082310281523060048201529051600160a060020a038c16916370a082319160248083019260209291908290030181600087803b1580156142a657600080fd5b505af11580156142ba573d6000803e3d6000fd5b505050506040513d60208110156142d057600080fd5b5051600185015460408051938452602084019290925263ffffffff1682820152519081900360600190a2509095945050505050565b6002546040805160e060020a6370a08231028152336004820152905160009283928392839283928392600160a060020a03909216916370a082319160248082019260209290919082900301818787803b15801561436157600080fd5b505af1158015614375573d6000803e3d6000fd5b505050506040513d602081101561438b57600080fd5b505188111561439957600080fd5b6143a389896128cf565b909550935084158015906143b75750868510155b15156143c257600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561441557600080fd5b505af1158015614429573d6000803e3d6000fd5b505050506040513d602081101561443f57600080fd5b50516040805160e060020a6370a082310281523060048201529051919450600160a060020a038b16916370a08231916024808201926020929091908290030181600087803b15801561449057600080fd5b505af11580156144a4573d6000803e3d6000fd5b505050506040513d60208110156144ba57600080fd5b50519150818510806144d5575081851480156144d557508288145b15156144dd57fe5b50600160a060020a0388166000908152600b602052604090206001810154640100000000900460ff161561452057805461451d908663ffffffff61471416565b81555b6002546040805160e060020a63a24835d1028152336004820152602481018b90529051600160a060020a039092169163a24835d19160448082019260009290919082900301818387803b15801561457657600080fd5b505af115801561458a573d6000803e3d6000fd5b5050505061459a89303388614729565b6002546145b390600160a060020a03168a8a8888614967565b88600160a060020a0316600080516020614bd7833981519152600260009054906101000a9004600160a060020a0316600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561461f57600080fd5b505af1158015614633573d6000803e3d6000fd5b505050506040513d602081101561464957600080fd5b50516040805160e060020a6370a082310281523060048201529051600160a060020a038e16916370a082319160248083019260209291908290030181600087803b15801561469657600080fd5b505af11580156146aa573d6000803e3d6000fd5b505050506040513d60208110156146c057600080fd5b5051600185015460408051938452602084019290925263ffffffff1682820152519081900360600190a25092979650505050505050565b60008282018381101561470957600080fd5b8091505b5092915050565b60008183101561472357600080fd5b50900390565b60008085600160a060020a03166370a08231856040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561478757600080fd5b505af115801561479b573d6000803e3d6000fd5b505050506040513d60208110156147b157600080fd5b50519150600160a060020a0385163014156148465785600160a060020a031663a9059cbb85856040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b15801561482957600080fd5b505af115801561483d573d6000803e3d6000fd5b505050506148d2565b604080517f23b872dd000000000000000000000000000000000000000000000000000000008152600160a060020a0387811660048301528681166024830152604482018690529151918816916323b872dd9160648082019260009290919082900301818387803b1580156148b957600080fd5b505af11580156148cd573d6000803e3d6000fd5b505050505b85600160a060020a03166370a08231856040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561492d57600080fd5b505af1158015614941573d6000803e3d6000fd5b505050506040513d602081101561495757600080fd5b50519050818111613e6e57600080fd5b7f8000000000000000000000000000000000000000000000000000000000000000811061499057fe5b604080518481526020810184905280820183905290513391600160a060020a0387811692908916917f276856b36cbc45526a0ba64f44611557a2a8b68662c5388e9fe6d72e86e1c8cb919081900360600190a45050505050565b600054600160a060020a03163314614a0157600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166379ba50976040518163ffffffff1660e060020a028152600401600060405180830381600087803b158015614a5457600080fd5b505af1158015610eb7573d6000803e3d6000fd5b600080831515614a7b576000915061470d565b50828202828482811515614a8b57fe5b041461470957600080fd5b600080808311614aa557600080fd5b8284811515614ab057fe5b04949350505050565b600054600160a060020a03163314614ad057600080fd5b82600160a060020a0381161515614ae657600080fd5b82600160a060020a0381161515614afc57600080fd5b83600160a060020a038116301415614b1357600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050600060405180830381600087803b158015614b7657600080fd5b505af1158015614b8a573d6000803e3d6000fd5b50505050505050505050560042616e636f72466f726d756c610000000000000000000000000000000000000042616e636f72436f6e76657274657255706772616465720000000000000000008a6a7f53b3c8fa1dc4b83e3f1be668c1b251ff8d44cdcb83eb3acec3fec6a788a165627a7a7230582042a476440eb5be744557a7d6e5a04903cbf866203ca1609005ec891ef6d5e3df0029"
