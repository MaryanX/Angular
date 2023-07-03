import { NgModule, Pipe, PipeTransform, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage, NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpEvent, HttpEventType, HTTP_INTERCEPTORS } from '@angular/common/http';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './_templates/navbar/navbar.component';
import { HeaderComponent } from './_templates/header/header.component';
import { FooterComponent } from './_templates/footer/footer.component';
import { Error404Component } from './_templates/error404/error404.component';

import { ProfilComponent } from './profil/profil.component';
import { IndexComponent } from './index/index.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ContactComponent } from './contact/contact.component';

// import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
// import { ModalComponent } from './modal/modal.component';


import { OrderByPipe } from '../_pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { getFrPaginatorIntl } from '../_interfaces/fr-paginator-intl';
import { ErrorInterceptor } from '../_services/interceptor.service';
import { ArticleRecentComponent } from './articles/article-recent/article-recent.component';

const materialModules = [
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatPaginatorModule,
  MatSelectModule

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilComponent,
    IndexComponent,
    ArticlesComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ArticleDetailComponent,
    // ModalComponent,
    OrderByPipe,
    // ImageUploadComponent,
    CommentsComponent,
    LoginComponent,
    Error404Component,
    RegisterComponent,
    ArticleRecentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules
  ],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: getFrPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
