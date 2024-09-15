import { TestNet } from '../../types/base';
import { common } from './base';

export const testnet: TestNet = {
  ...common,
  id: 'D8A8E5F7-35A3-4C82-9A56-3B5A79C4E4EA',
  network: 'testnet',
  hashGenesisBlock:
    '000000181ba07f82878f548c2f3e00f176e1e9deacdccac87b13ae3885ecc3c7',
  port: 17002,
  portRpc: 18002,
  protocol: {
    magic: 0x50444941,
  },
  seedsDns: [

  ],
  versions: {
    // https://en.bitcoin.it/wiki/BIP_0032
    bip32: {
      private: 0x04358394,
      public: 0x043587cf,
    },
    bip44: 1,
    private: 0xef,
    public: 0x14,
    scripthash: 0x14,
  },
};
