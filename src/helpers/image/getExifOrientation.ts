import exif from 'exif-js';

/**
 * Get Exif data for Orientation from File
 * @param file
 * @return Promise which resolve Orientation number
 */
const getExifOrientation = (file: any): Promise<number> =>
  new Promise((res, rej) => {
    exif.getData(file, function (this: File) {
      const exifOrientation = exif.getTag(this, 'Orientation');
      res(exifOrientation);
    });
  });

export default getExifOrientation;
