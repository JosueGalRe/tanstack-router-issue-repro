import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/news-log/')({
  component: () => <div>Hello /news-log/!</div>,
});
