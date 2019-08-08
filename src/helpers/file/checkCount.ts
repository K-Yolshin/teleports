/**
 * Check count of file
 * @return {Function} function to send in Array.filter
 */
const checkCount = (
  (count: number) =>
    (file: File, index: number) => index < count
);

export default checkCount;
