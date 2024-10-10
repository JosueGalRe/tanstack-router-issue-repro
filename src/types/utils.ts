import type { ParseRoute } from '@tanstack/react-router';
import type { routeTree } from 'routeTree.gen';

export type ValidRoutes = ParseRoute<typeof routeTree>['fullPath'];
