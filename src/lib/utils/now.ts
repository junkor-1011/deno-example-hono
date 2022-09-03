/**
 * just for test
 *
 * @returns current datetime iso-format string
 */
export const nowDatetimeISOString = (): string => {
  const now = new Date();
  return now.toISOString()
}
