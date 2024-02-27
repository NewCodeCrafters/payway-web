import { FormControl } from '@angular/forms';

type SignupUser = {
  phone_number: FormControl<number | null>;
  re_password: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  country: FormControl<string | null>;
};

export type { SignupUser };
