import { Component, OnInit } from '@angular/core';
import { IArticle } from './artInter';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  public title = "Liste articles";
  maDate = new Date();
  public articles: IArticle[] = [];

  private _articlefiltre = "data";
  public filteredArticles: IArticle[] = [];

  constructor(private articlesService: ArticlesService){}

  ngOnInit(){
    this.articlesService.getArticles().subscribe({
      next: articles => {
        this.articles = articles,
        this.filteredArticles = this.articles;
      },
    })
    this.articlefiltre = 'data';
  }

  public get articlefiltre(): string {
    return this._articlefiltre;
  }

  public set articlefiltre(filter: string) {
    this._articlefiltre = filter;
    this.filteredArticles = this.articlefiltre ? this.filterArticles(this.articlefiltre): this.articles;
  }

  private filterArticles(crit: string): IArticle[]{
    crit = crit.toLocaleLowerCase();

    const res = this.articles.filter(
      (article: IArticle) => article.artName.toLocaleLowerCase().indexOf(crit) !== -1
    )
    return res;
  }



}
