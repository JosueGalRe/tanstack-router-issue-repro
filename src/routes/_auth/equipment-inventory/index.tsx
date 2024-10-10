import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/equipment-inventory/')({
  component: () => <div>Hello /equipment-inventory/!</div>,
});
