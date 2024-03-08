import { Routes } from '@angular/router';
import { SignUp } from '../components/auth/signup/signup.component';
import { Login } from '../components/auth/login/login.component';
import { ActivateUser } from '../components/auth/activate/activate.component';
import { NotFound } from '../components/not-found/not-found.component';
import { HomePage } from '../components/app/home/home.component';
import { WalletPage } from '../components/app/wallet/wallet.component';
import { Injectable } from '@angular/core';
import { ProfilePage } from '../components/app/profile/profile.component';
import { TransferPage } from '../components/app/transfer/transfer.component';
import { DepositPage } from '../components/app/deposit/deposit.component';

export const ROUTES = {
  app: {
    wallet: 'wallet',
    home: 'home',
    profile: 'profile',
    transfer: 'transfer',
    deposit: 'deposit',
  },
  auth: {
    register: 'register',
    login: 'login',
    activate: 'activate',
  },
};
export const routes: Routes = [
  {
    path: '',
    redirectTo: `/${ROUTES.app.home}`,
    pathMatch: 'full',
  },
  {
    path: ROUTES.app.deposit,
    component: DepositPage,
    title: 'Deposit to Account',
  },
  {
    path: ROUTES.app.home,
    component: HomePage,
    title: 'Payway',
  },
  {
    path: ROUTES.app.wallet,
    component: WalletPage,
    title: 'Wallet',
  },
  {
    path: ROUTES.auth.register,
    component: SignUp,
    title: 'Register',
  },
  {
    path: ROUTES.app.profile,
    component: ProfilePage,
    title: 'Profile',
  },
  {
    path: ROUTES.app.transfer,
    component: TransferPage,
    title: 'Transfer',
  },
  {
    path: ROUTES.auth.login,
    component: Login,
    title: 'Login',
  },
  {
    path: ROUTES.auth.activate,

    title: 'Activate',
    children: [
      {
        path: '**',
        component: ActivateUser,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
    title: '404',
  },
];
@Injectable({
  providedIn: 'root',
})
export class PAGE_ROUTES {
  public app = { ...ROUTES.app };
  public auth = { ...ROUTES.auth };
}
