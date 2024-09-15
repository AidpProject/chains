import { MainNet } from '../../types/base';
import { common } from './base';

export const mainnet: MainNet = {
  ...common,
  id: 'A3C7F6E2-8F4D-4D5B-A2B3-9E7D8C4E5F6G',
  network: 'mainnet',
  // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L236
  hashGenesisBlock:
    '000000181ba07f82878f548c2f3e00f176e1e9deacdccac87b13ae3885ecc3c7',
  // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L225
  port: 17001,
  // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparamsbase.cpp#L37
  portRpc: 18001,
  protocol: {
    magic: 0x50444941,
  },
  // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L239
  seedsDns: [
    'dns.ai-depin.org',
    'eur-seed1.ai-depin.org',
    'eur-seed2.ai-depin.org',
  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
    // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L247  
      private: 0x0488ade4,
    // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L246
      public: 0x0488b21e,
    },
    // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L250
    bip44: 0,
    // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L245
    private: 0x80,
    // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L243
    public: 0x4c,
    // https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp#L244
    scripthash: 0x4c,
  },
};
