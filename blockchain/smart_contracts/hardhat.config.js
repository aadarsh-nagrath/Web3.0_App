// https://eth-sepolia.g.alchemy.com/v2/u6M5x3c9dMwYm7l2D2riz7ZEfcbb4UGT

const { solidity } = require('ethereum-waffle');
// const { network } = require('hardhat');

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/u6M5x3c9dMwYm7l2D2riz7ZEfcbb4UGT',
      accounts: ['b44656df1ae6a53aac615aadc5c771537c172e0efdeb95623c021aef57b45f16']
    }
  }
}