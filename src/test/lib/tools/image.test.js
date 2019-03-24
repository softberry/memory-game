import { newImage } from '../../../lib/tools/image';

describe('Test newImage ', () => {
  test('It should return Image', () => {
    const img = newImage(
      'http://localhost:9615/mock',
      () => {
        return 'load';
      },
      () => {
        return 'error';
      }
    );

    expect(img instanceof HTMLImageElement).toBe(true);
  });

  test('It should assign correct source', () => {
    const img = newImage(
      'http://localhost:9615/mock',
      () => {
        return 'load';
      },
      () => {
        return 'error';
      }
    );
    expect(img.src).toBe('http://localhost:9615/mock');
  });
});
