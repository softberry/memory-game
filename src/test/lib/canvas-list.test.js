import { MemoryCanvaslist } from '../../lib/canvas-list';

const canvasListArray = require('canvas-list');

describe('Test Canvas List', () => {
  let memoryCanvaslist;
  beforeEach(() => {
    memoryCanvaslist = new MemoryCanvaslist();
    memoryCanvaslist.addCanvas(canvasListArray);
  });

  test('Canvas dimenstions must be integer', () => {
    expect(memoryCanvaslist[0].width).toEqual(10);
    expect(memoryCanvaslist[1].height).toEqual(90);
    expect(memoryCanvaslist[4].width + memoryCanvaslist[6].height).toEqual(270);
  });

  test('Find a random Pair', () => {
    const srcCanvas = memoryCanvaslist[3];
    const result = memoryCanvaslist.randomPair(srcCanvas);

    expect(result[0]).toEqual(srcCanvas);
    expect(result.length).toEqual(2);
  });
});
