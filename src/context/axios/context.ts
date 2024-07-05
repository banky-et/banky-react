import { AxiosInstance } from "axios";
import React from "react";

export const AxiosContext = React.createContext<AxiosInstance | null>(null);
