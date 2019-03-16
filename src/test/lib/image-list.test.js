import { MemoryImageList } from '../../lib/image-list';

const imagesListArray = require('image-list');

describe('Test ImageList', () => {
  let memoryImagelist;
  beforeEach(() => {
    memoryImagelist = new MemoryImageList();
    imagesListArray.forEach((i) => {
      memoryImagelist.push(i);
    });
  });

  test('Get a random element', () => {
    const srcImage = memoryImagelist.random();

    expect(imagesListArray).toContain(srcImage);
    expect(memoryImagelist).not.toContain(srcImage);

    expect(imagesListArray.length - memoryImagelist.length).toEqual(1);
  });
});
