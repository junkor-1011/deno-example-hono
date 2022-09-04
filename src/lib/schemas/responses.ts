import { z } from 'zod';

/**
 * response model base.
 */
export const schemaResponseBase = z.object({
	message: z.string().max(30),
});

/**
 * type of ResponseBase
 */
export type ResponseBase = z.infer<typeof schemaResponseBase>;

/**
 * basic response
 */
export const schemaBasicResponse = schemaResponseBase;

/**
 * type of BasicResponse
 */
export type BasicResponse = z.infer<typeof schemaBasicResponse>;
