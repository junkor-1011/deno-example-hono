import { serve } from 'http/server.ts';
import { Hono } from 'hono/mod.ts';

import { nowDatetimeISOString } from '@/lib/utils/now.ts';
import { BasicResponse, schemaBasicResponse } from '@/lib/schemas/responses.ts';

const app = new Hono();

app.get('/', (c) => {
	const responseBody: BasicResponse = {
		message: 'Hello! Hono! @deno',
	};
	schemaBasicResponse.parse(responseBody);
	return c.text(JSON.stringify(responseBody));
});

app.get('/now', (c) => {
	const responseBody: BasicResponse = {
		message: `it is ${nowDatetimeISOString()}`,
	};
	schemaBasicResponse.parse(responseBody);
	return c.text(JSON.stringify(responseBody));
});

serve(app.fetch);
