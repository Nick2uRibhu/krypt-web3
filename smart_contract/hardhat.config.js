require('@nomiclabs/hardhat-waffle')

module.exports = {
solidity: '0.8.0',
networks: {
  goerli: {
    url: 'https://eth-goerli.g.alchemy.com/v2/EOxJyw-D1C_vQcL34p_eN84x92nxoy5b',
    accounts: ['a9676d43261d84e069ac2ba2946c7dd84c49d0d61d729e5d16792a1266e4a58a']
  }
}
}
