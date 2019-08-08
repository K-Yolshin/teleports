import 'blueimp-canvas-to-blob';

/**
 * Get blob data from canvas
 * @param canvas - html canvas element
 */
const toBlob = (canvas: HTMLCanvasElement): Promise<Blob> => {
  return new Promise((res, rej) => {
    canvas.toBlob((blob: Blob) => {
      res(blob);
    });
  });
};

export default toBlob;
