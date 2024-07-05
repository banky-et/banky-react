export interface RegisterUserFormData {
  phoneNumber: string;
  pin: string;
  name: string;
}

export type RegisterUserResponse = SuccessResponse<null>;

export type SuccessResponse<T> = { success: boolean; data: T };
