import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { SENTRY_URL } from './const';

const sentry_init = () => {
  Sentry.init({
    environment: process.env.NEXT_PUBLIC_ENV,
    dsn: SENTRY_URL,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
};

export { sentry_init };
