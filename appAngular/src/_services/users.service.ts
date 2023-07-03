import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iuser } from '../_interfaces/i_users';

@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(private http: HttpClient) { }

    // Create
    register(user: Iuser) {
        return this.http.post<Iuser[]>('http://localhost:3000/register', user);
    }
    // Read
    getAll() {
        return this.http.get<Iuser[]>('http://localhost:3000/users');
    }
    getUser(id: number)
    {
      return this.http.get<Iuser[]>(`http://localhost:3000/users/${id}`);
    }
    // Update
    upUser()
    {}

    // Delete
    delete(id: number) {
        return this.http.delete(`http://localhost:3000/users/${id}`);
    }
}
