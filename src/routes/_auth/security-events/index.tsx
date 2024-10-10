import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/security-events/')({
  component: () => <div>Hello /security-events/!</div>,
});
