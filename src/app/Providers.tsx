'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';

import BottomMenu from '@/components/layouts/BottomMenu';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const pathname: string = usePathname();
  const pathSegments: string[] = pathname.split('/').filter(Boolean);

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            retry: 0,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {pathSegments.length <= 1 && <BottomMenu />}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
