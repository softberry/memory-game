/**
 * @jest-environment jsdom
 */
import { newTile } from '../../../lib/tools/tile';

describe('Test Middle of Odd Numbers', () => {
  test('object must have tile and canvas own propeties ', () => {
    const t = newTile(1);
    expect('tile' in t).toBe(true);
    expect('canvas' in t).toBe(true);
  });

  test('object.tile must have class "tile" ', () => {
    const t = newTile(1);
    expect(t.tile.classList.contains('tile')).toBe(true);
  });

  test('object.canvas index attribute must be 7 ', () => {
    const t = newTile(7);
    expect(t.canvas.getAttribute('index')).toBe('7');
  });
});

/*
 tile.classList.add('tile');
  canvas.setAttribute('index', index);
  tile.appendChild(canvas);
*/
