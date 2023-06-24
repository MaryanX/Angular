import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '.././artInter';
import { ArticlesService } from '../articles.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  public article: IArticle | undefined = <IArticle>{};

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ){}

  ngOnInit(): void {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.articlesService.getArticles().subscribe((articles: IArticle[]) =>
    {
      this.article = articles.find(art => art.artId === id);
      console.log(this.article);
    });
  }

}
