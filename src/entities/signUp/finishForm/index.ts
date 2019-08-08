import handleClear from './handleClear';
import doClear from './doClear';

export default () => ({
  [doClear as any]: handleClear,
});
