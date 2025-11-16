import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
export const TanstackClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
