const Web3 = require('web3')
const solc = require('solc')

const serverUrl = 'http://localhost:8545'
const provider = new Web3.providers.HttpProvider(serverUrl)
const web3 = new Web3(provider)

module.exports = web3
