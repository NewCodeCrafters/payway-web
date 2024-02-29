import { Routes } from '@angular/router';
import { SignUp } from '../components/auth/signup/signup.component';
import { Login } from '../components/auth/login/login.component';
import { ActivateUser } from '../components/auth/activate/activate.component';

export const routes: Routes = [
  {
    path: 'register',
    component: SignUp,
    title: 'Register',
  },
  {
    path: 'login',
    component: Login,
    title: 'Login',
  },
  {
    path: 'activate',

    title: 'Activate',
    children: [
      {
        path: '**',
        component: ActivateUser,
      },
    ],
  },
];
