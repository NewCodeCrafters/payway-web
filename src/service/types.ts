type CreateUser = {
  email: string;
  phone_number: string;
  password: string;
  re_password: string;
};
type ActivateUser = {
  token: string;
  uid: string;
};
export type { CreateUser, ActivateUser };
