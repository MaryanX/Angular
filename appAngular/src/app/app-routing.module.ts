import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ProfilComponent}  from './profil/profil.component';
import { ArticlesComponent}  from './articles/articles.component';
import { IndexComponent} from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';


const routes: Routes = [

  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent},
  { path: 'profil', component: ProfilComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
