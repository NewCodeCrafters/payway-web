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
  async create_user(user_details: CreateUser) {
    const res = await JsonReq.req<CreateUser>(
      `${this.url}/${this.path}`,
      'post',
      user_details
    );
    return res;
  }
}
