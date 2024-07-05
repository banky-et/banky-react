import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";
export const TanstackClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryClient = useRef(new QueryClient());
  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
};
