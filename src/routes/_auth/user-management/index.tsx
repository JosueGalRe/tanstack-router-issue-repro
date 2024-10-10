import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/user-management/')({
  component: () => <div>Hello /user-management</div>,
});
