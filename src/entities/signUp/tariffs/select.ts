import STORE from './store';

const select = (state: any) => state[STORE].tariffs;

export default select;
