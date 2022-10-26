import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userCreated = new Subject<User>();

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getById(id: string) {
    const get$ = this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/' + id);

    if (id === '2') {
      return get$.pipe(delay(5000));
    }

    return get$;
  }

  create(user: User) {
    return this.httpClient.post<User>('https://jsonplaceholder.typicode.com/users', user);
  }
}
