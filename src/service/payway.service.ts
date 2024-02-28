import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CreateUser } from './types';

class Payway {
  public url = `http://localhost:8000`;
}

@Injectable({ providedIn: 'root' })
export class Auth extends Payway {
  path = 'auth';
  constructor(private httpClient: HttpClient) {
    super();
  }
  create_user(user_details: CreateUser) {
    const res = this.httpClient.post(`${this.url}/${this.path}/users/`, user_details, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }
}
