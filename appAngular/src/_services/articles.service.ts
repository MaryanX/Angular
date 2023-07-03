import { Injectable } from '@angular/core';
import { IArticle } from '../app/articles/artInter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  private readonly ARTICLE_API_URL = 'api/json/articles.json';

  constructor(private http: HttpClient) {};

  // Read 
  public getArticles(): Observable<IArticle[]>
  {
    return this.http.get<IArticle[]>(this.ARTICLE_API_URL);
  };
};
