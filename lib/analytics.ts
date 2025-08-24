export function track(event: string, payload?: Record<string, unknown>) {
  // For demo purposes log to console; in production connect to an analytics SDK
  // eslint-disable-next-line no-console
  console.log('[track]', event, payload ?? {})
}
