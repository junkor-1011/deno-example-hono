import { serve } from 'http/server.ts';
import { Hono } from 'hono/mod.ts';

import { nowDatetimeISOString } from '@/lib/utils/now.ts';

const app = new Hono();

app.get('/', (c) =>
	c.text(JSON.stringify({
		message: 'Hello! Hono! @deno',
	})));

app.get('/now', (c) =>
	c.text(JSON.stringify({
		message: `it is ${nowDatetimeISOString()}`,
	})));

serve(app.fetch);
