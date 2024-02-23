import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CreateUser } from './types';

class Payway {
  public url = ``;
}
class JsonReq {
  static async req<T>(
    url: string,
    method: string = 'get',
    detail: T,
    options: HeadersInit = {}
  ) {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(detail),
      headers: {
        'Content-Type': 'application/json',
        ...options,
      },
    });
    return await res.json();
  }
}
@Injectable({ providedIn: 'root' })
class Auth extends Payway {
  path = '/auth';
  constructor(private httpClient: HttpClient) {
    super();
  }
  create_user(user_details: CreateUser) {
    const res = this.httpClient.post(`${this.url}/${this.path}`, user_details, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res;
  }
}
