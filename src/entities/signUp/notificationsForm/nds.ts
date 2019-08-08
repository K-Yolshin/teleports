import create from '@/helpers/entities/createInput';

import STORE from './store';

const teleports = create('ndsTeleports', STORE);
const customers = create('ndsCustomers', STORE);
const isSame = create('ndsIsSame', STORE, false);

export {
  teleports,
  customers,
  isSame,
};
