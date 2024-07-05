import { AxiosResponse } from "axios";

export function extractResponse<T>(res: AxiosResponse) {
  return res.data as T;
}
