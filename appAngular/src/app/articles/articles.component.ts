import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from './artInter';
import { ArticlesService } from '../../_services/articles.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { OrderByPipe } from '../../_pipes/order-by.pipe';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: [
    trigger('headA', [
      state('inactive', style({
        width:'0%',
        display: 'none'
      })),
      state('active', style({
        width:'100%',
        display: 'block'
      })),
      transition('active <=> inactive', animate('500ms 400ms ease-in'))
    ])
  ],

})
export class ArticlesComponent implements OnInit{

  public title = "Liste articles";
  maDate = new Date();
  public articles: IArticle[] = [];
  private _articlefiltre = "data";
  public filteredArticles: IArticle[] = [];
  headS = 'inactive';

  constructor(private articlesService: ArticlesService, public dialog: MatDialog){}


  ngOnInit(){
    this.articlesService.getArticles().subscribe({
      next: (articles: IArticle[]) => {
        this.articles = articles,
        this.filteredArticles = this.articles;

      },
    })
    this.articlefiltre = '';

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

  toto()
  {
    console.log('x');
    this.headS = (this.headS === 'inactive' ? 'active' : 'inactive');
    
  }

  // Dialog
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width:'30%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }




}
