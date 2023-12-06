import * as Sentry from '@sentry/browser';

export const init = () => {
  Sentry.init()
}

export const foo = () => true