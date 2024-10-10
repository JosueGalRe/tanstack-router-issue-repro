import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/store-visits/')({
  component: () => <div>Hello /store-visits</div>,
});
