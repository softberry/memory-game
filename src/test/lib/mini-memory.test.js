import { MiniMemory } from '../../mini-memory';

describe('Default props', () => {
  test('Observer attributes must be correct', () => {
    const expected = ['matrix', 'lang', 'view', 'settings', 'challenge'];
    expect(MiniMemory.observedAttributes).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
