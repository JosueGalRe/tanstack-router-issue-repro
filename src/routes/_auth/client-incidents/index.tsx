import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/client-incidents/')({
  component: () => <div>Hello /client-incidents/!</div>,
});
