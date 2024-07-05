import { useContext } from "react";
import { AxiosContext } from "./context";

export const useAxios = () => {
  const client = useContext(AxiosContext);
  if (!client) throw new Error("useAxios must be used within a AxiosProvider");
  return client;
};
