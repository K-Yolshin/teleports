import createImage from './createImage';
import toBlob from './toBlob';

/**
 * Flip image by 90deg to right
 * @param file - image data
 * @return base64 Image
 */
const flipImage = async (file: File | Blob | string): Promise<string | Blob> => {
  const img = await createImage(file);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (ctx === null) {
    return '';
  }

  const { width, height } = img;

  canvas.width = height;
  canvas.height = width;

  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(Math.PI / 2);
  ctx.drawImage(img, -img.width / 2, -img.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);

  const blob = await toBlob(canvas);

  return new Blob([blob], { type: 'image/jpeg' });
};

export default flipImage;
