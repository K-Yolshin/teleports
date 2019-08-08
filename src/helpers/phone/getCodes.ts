import masks from './masks';

/**
 * Returns an array with an avalible country codes.
 */
const getCodes = (): string[] => Object.keys(masks);

export default getCodes;
