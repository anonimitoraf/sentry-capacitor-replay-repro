import * as Sentry from "@sentry/capacitor";
import { Replay } from "@sentry/replay";

Sentry.init({
  dsn: "REDACTED",
  // This sets the sample rate at 10%. You may want this to be 100% while
  // in development, then sample at a lower rate in production.
  replaysSessionSampleRate: 1.0,
  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: false,
      maskAllInputs: false,
      blockAllMedia: false,
      block: [],
    }),
  ],
});
