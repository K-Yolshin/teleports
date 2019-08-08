import checkMimeType from './checkMimeType';
import checkSize from './checkSize';
import checkCount from './checkCount';

/**
 * Check files by params
 * @param files file object on array of file
 * @param mimeType file type like 'image/jpeg' or 'image/jpeg, image/png'
 * @param size max size of file in megabytes
 * @param count max count file
 */
const checkFiles = (
  files: File | File[],
  mimeType: string = 'image/jpeg',
  size: number = 20,
  count: number = 15,
): File[] => (
  (Array.isArray(files) ? files : [files])
    .filter(checkCount(count))
    .filter(checkSize(size))
    .filter(checkMimeType(mimeType.split(',')))
);

export default checkFiles;
