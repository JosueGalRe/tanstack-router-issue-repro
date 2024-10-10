import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/shift-management/')({
  component: () => <div>Hello /shift-management</div>,
});
