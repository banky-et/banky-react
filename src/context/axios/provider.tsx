import { useMemo } from "react";
import { AxiosContext } from "./context";
import { useAuth } from "../auth";
import axios from "axios";

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAuth();

  const axiosClient = useMemo(() => {
    if (!token) return axios.create({ baseURL: import.meta.env.VITE_API_URL });
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: { Authorization: `Bearer ${token}` },
    });
  }, [token]);

  return (
    <AxiosContext.Provider value={axiosClient}>
      {children}
    </AxiosContext.Provider>
  );
};
