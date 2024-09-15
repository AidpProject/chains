/* source: https://github.com/AidpProject/Aidpcoin/blob/master/src/chainparams.cpp */

import { Common } from '../../types/base';

export const common: Common = {
  name: 'Aidpcoin',
  unit: 'AIDP',
  symbol: 'aidp',
  decimalPlaces: 1e8,
  messagePrefix: '\x16Aidp Signed Message:\n',
  algorithm: 'kawpow',
  confirmations: 6,
};
