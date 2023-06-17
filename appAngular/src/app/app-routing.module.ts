import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent}  from './profil/profil.component';
import { ArticlesComponent}  from './articles/articles.component';
import { IndexComponent} from './index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { PageArticleComponent } from './page-article/page-article.component';



const routes: Routes = [

  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent},
  { path: 'profil', component: ProfilComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: PageArticleComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
