import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  preview = '';
  /*form!:FormGroup;*/

  imageInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
     /* this.form = this.fb.group({
      'id': [0],
      'name':
  })*/
console.log('imageInfos : ', this.imageInfos);
  }

  selectFile(event: any): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.preview = '';
        this.currentFile = file;

        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.preview = e.target.result;
        };

        reader.readAsDataURL(this.currentFile);
      }
    }
    console.log('imageInfos : ', this.currentFile);
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
console.log(' this.currentFile', this.currentFile.name);
        this.uploadService.upload(this.currentFile.name).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round((100 * event.loaded) / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.imageInfos = this.uploadService.getFiles();
                console.log(' this.imageInfos : ', this.imageInfos  );
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the image!';
            }

            this.currentFile = undefined;
          },
        });
      }

      this.selectedFiles = undefined;
    }
  }
}
