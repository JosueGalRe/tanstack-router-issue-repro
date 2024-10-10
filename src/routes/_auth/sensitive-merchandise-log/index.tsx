import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/sensitive-merchandise-log/')({
  component: () => <div>Hello /sensitive-merchandise-log/!</div>,
});
