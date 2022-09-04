import { assertEquals } from 'testing/asserts.ts';

import { schemaBasicResponse } from './responses.ts';

Deno.test('test of schemaBasicResponse', async (t) => {
  await t.step('success', () => {
    const target = { message: 'hoge' };
    const { success } = schemaBasicResponse.safeParse(target);
    assertEquals(success, true);

    schemaBasicResponse.parse(target); // smoke test
  });
  await t.step('failer', () => {
    const target = {};
    const { success } = schemaBasicResponse.safeParse(target);
    assertEquals(success, false);
  });
});
