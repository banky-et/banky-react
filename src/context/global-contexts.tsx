import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth";
import { TanstackClientProvider } from "./tanstack-query-provider";
import { AxiosProvider } from "./axios";

export const GlobalContextsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <TanstackClientProvider>
      <AuthProvider>
        <BrowserRouter>
          <AxiosProvider>{children}</AxiosProvider>
        </BrowserRouter>
      </AuthProvider>
    </TanstackClientProvider>
  );
};
