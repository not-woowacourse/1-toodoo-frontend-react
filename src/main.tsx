import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Provider as ChakraUIProvider } from '@/components/ui/provider';
import { Toaster } from '@/components/ui/toaster';
import '@/index.css';
import { router } from '@/router';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('Root element not found');
}

if (rootElement.hasChildNodes()) {
  throw new Error('Root element already has children');
}

const root = createRoot(rootElement);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ChakraUIProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
      </QueryClientProvider>
    </ChakraUIProvider>
  </StrictMode>,
);
