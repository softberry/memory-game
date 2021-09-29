/**
 * @jest-environment jsdom
 */

import { Counter } from '../../lib/counter';

describe('Test Counter', () => {
  const counter = new Counter();
  beforeEach(() => {});

  test('start, stop, diff, reset  functions required', () => {
    expect(typeof counter.start).toBe('function');
    expect(typeof counter.stop).toBe('function');
    expect(typeof counter.diff).toBe('function');
    expect(typeof counter.reset).toBe('function');
  });

  test('start function must initialize interval', () => {
    expect(counter.intervalHandle).toEqual(0);
    counter.start();
    expect(counter.intervalHandle).toBeGreaterThan(0);
  });

  test('Difference must be correct', () => {
    counter.start();
    counter.reset(window.document.createElement('div'));
    return new Promise((resolve) => {
      setTimeout(() => {
        counter.stop();
        const diff = counter.timer.diff;
        expect(diff).toBeGreaterThanOrEqual(900);
        expect(diff).toBeLessThan(1100);
        resolve();
      }, 1000);
    });
  });
});
