import { createFileRoute } from '@tanstack/react-router';
import { valibotSearchValidator } from '@tanstack/router-valibot-adapter';
import { schema } from './-index.utils';

export const Route = createFileRoute('/login/')({
  component: () => <div>Hello /login!</div>,
  validateSearch: valibotSearchValidator(schema),
});
