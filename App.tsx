import React from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainNavigation from './navigation/MainNavigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigation />
    </QueryClientProvider>
  );
}
