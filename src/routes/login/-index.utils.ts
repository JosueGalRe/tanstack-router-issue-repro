import * as v from 'valibot';

import type { ValidRoutes } from '@t/utils';

export const schema = v.object({
  redirectTo: v.optional(
    v.custom<ValidRoutes>((value) => {
      return true;
    }),
    '/'
  ),
});

export type Schema = v.InferInput<typeof schema>;
