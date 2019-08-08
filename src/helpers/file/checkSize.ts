/**
 * Count of bytes in megabytes
 */
const bytesInMB = 2 ** 20;

/**
 * Check max size of file
 * @return {Function} function to send in Array.filter
 */
const checkSize = (
  (size: number) =>
    (file: File) => file.size < size * bytesInMB
);

export default checkSize;
