 import { Injectable } from '@angular/core';
import { Icom } from '../_interfaces/i_comments';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CommentaireService {

    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {};

    // Create
    postComs(data : any)
    {
      return this.http.post<Icom>("http://localhost:3000/commentaires", data);
    }
    // Read
    getComs()
    {
      return this.http.get<any>("http://localhost:3000/commentaires");
    }
    // Update
    upComs()
    {}

    // Delete
    delComs()
    {}

};
