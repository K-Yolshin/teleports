import getExifOrientation from './getExifOrientation';
import getImageWithExifOrient from './getImageWithExifOrient';
import createImage from './createImage';

/**
 * Get image data from file
 * @param file
 * @param withExifOrient
 * @default true
 * @return promise which resolve string
 */
const getImageFromFile = async (file: File | Blob, withExifOrient = true): Promise<string> => {
  let imgSrc = URL.createObjectURL(file);

  if (withExifOrient) {
    const img = await createImage(file);

    const exifOrientation = await getExifOrientation(file);

    imgSrc = getImageWithExifOrient(img, exifOrientation);
  }

  return imgSrc;
};

export default getImageFromFile;
