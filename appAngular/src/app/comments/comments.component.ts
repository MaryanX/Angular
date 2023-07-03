import { Component } from '@angular/core';
import { Icom } from '../../_interfaces/i_comments';
import { CommentaireService } from '../../_services/commentaire.service';
// import { ModalService } from '../../_services/modal.service';
import {FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatPaginatorIntl, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})

export class CommentsComponent {


    public title: string = "Commentaires"
    public icom: Icom[] = [];
    public date1 = new Date();
    public dateLocale = this.date1.toLocaleString('fr-FR');
    form !: FormGroup;
    success:boolean = false;
    danger:boolean = false;
    page = 1;


    constructor(private comment: CommentaireService, private fb: FormBuilder) {
      this.form = this.fb.group({
        comName: ['xxxx', [Validators.required, Validators.minLength(3)]],
        comMail: ['@exemple.fr', [Validators.required, Validators.minLength(5)]],
        comText: ['', [Validators.required, Validators.minLength(4)]],
        comDate: [this.dateLocale],
      })
    }

    ngOnInit()
    {
      this.viewCom();
    }
    // View 
    viewCom()
    {
      this.comment.getComs().subscribe({next: data => {this.icom = data}});
      // this.apiService.getUsers().subscribe(data => {this.message = data;});
    }

    // Ajouter
    addCom()
    {
      if(this.form.valid)
      {
        this.comment.postComs(this.form.value).subscribe({

           next:(res: any)=>
           {
             this.danger = false;
             this.success = true;
             this.viewCom();
           },
           error:()=>
           {
             this.success = false;
             this.danger = true;
           }
        });
      }
      else
      {
        this.success = false;
        this.danger = true;
      }
    }

    // Pagination
    handlePageChange(event: any) {
    this.page = event;
    console.log(this.page);
    }

}
