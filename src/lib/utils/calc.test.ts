import { assertEquals, assertNotEquals } from 'testing/asserts.ts';

import { sum } from './calc.ts';

Deno.test('sum', () => {
  assertEquals(sum(1), 1);
  assertEquals(sum(1, 1), 2);
  assertEquals(sum(1, 2), 3);
  assertEquals(sum(1, 2, 3), 6);
  assertEquals(sum(1, 2, -3), 0);
  assertEquals(sum(1, 2, 3, 4), 10);

  assertNotEquals(sum(0), -1);
});
