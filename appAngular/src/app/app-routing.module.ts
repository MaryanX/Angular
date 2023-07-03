import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ProfilComponent}  from './profil/profil.component';
import { ArticlesComponent}  from './articles/articles.component';
import { IndexComponent} from './index/index.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { Error404Component } from './_templates/error404/error404.component';

import { articleDetailGuard } from './articles/article-detail.guard';
import { ProfilGuard } from '../_guards/profil.guard';



const routes: Routes = [

  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent},
  // { path: 'profil', component: ProfilComponent},
  // {
  //   component: ProfilComponent,
  //   canActivate: [profilGuard], // Utilisation du guard
  // },
  { path: 'user', component: ProfilComponent,
    canActivate: [ProfilGuard]},
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailComponent,
    canActivate: [articleDetailGuard]},
  { path: 'contact', component: ContactComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Error404Component },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
