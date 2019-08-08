/**
 * Create Image and wait for load it
 * @param file
 * @return image element
 */
const createImage = async (file: File | Blob | string) => {
  const imgSrc = typeof file === 'string' ? file : URL.createObjectURL(file);

  const img = new Image;

  await new Promise((res, rej) => {
    img.onload = async () => res();

    img.src = imgSrc;
  });

  return img;
};

export default createImage;
