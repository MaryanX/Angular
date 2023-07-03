import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from '.././artInter';
import { ArticlesService } from '../../../_services/articles.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {

  public article: IArticle | undefined = <IArticle>{};
  bodyText = 'This text can be updated in modal 1';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService,
    // protected modalService: ModalService
  ){}

  ngOnInit(): void {

    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.articlesService.getArticles().subscribe((articles: IArticle[]) =>
    {
      this.article = articles.find(a => a.artId === id);
      console.log(this.article);
    });
  }
  public backToArticle(): void
  {
    this.router.navigate(['/articles']);
  }

}
