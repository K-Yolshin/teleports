/**
 * Apply orientation to image
 * @param img - image data element
 * @param orientation
 * @example 6
 * @return base64 Image
 */
const getImageWithExifOrient = (img: HTMLImageElement, orientation: number): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (ctx === null) {
    return '';
  }

  const { width, height } = img;

  if ([5, 6, 7, 8].includes(orientation)) {
    canvas.width = height;
    canvas.height = width;
  } else {
    canvas.width = width;
    canvas.height = height;
  }

  // transform context before drawing image
  switch (orientation) {
    case 2:
      ctx.transform(-1, 0, 0, 1, width, 0);
      break;
    case 3:
      ctx.transform(-1, 0, 0, -1, width, height);
      break;
    case 4:
      ctx.transform(1, 0, 0, -1, 0, height);
      break;
    case 5:
      ctx.transform(0, 1, 1, 0, 0, 0);
      break;
    case 6:
      ctx.transform(0, 1, -1, 0, height, 0);
      break;
    case 7:
      ctx.transform(0, -1, -1, 0, height, width);
      break;
    case 8:
      ctx.transform(0, -1, 1, 0, 0, width);
      break;
    default:
      ctx.transform(1, 0, 0, 1, 0, 0);
  }

  ctx.drawImage(img, 0, 0, width, height);

  return canvas.toDataURL();
};

export default getImageWithExifOrient;
