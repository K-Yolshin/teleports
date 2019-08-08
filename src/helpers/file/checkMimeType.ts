/**
 * Check mime type of file
 * @return {Function} function to send in Array.filter
 */
const checkMimeType = (
  (mimeType: string | string[]) =>
    (file: File) => Array.isArray(mimeType) ? mimeType.includes(file.type) : file.type === mimeType
);

export default checkMimeType;
