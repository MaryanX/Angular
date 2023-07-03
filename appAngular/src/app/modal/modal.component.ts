import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

// import { ModalService } from '../../_services/modal.service';

@Component({
  selector: 'jw-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  // encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy{

  @Input() id?: string;
    isOpen = false;
    private element: any;

    constructor() {
      // private el: ElementRef
      //     this.element = el.nativeElement;
      }

      ngOnInit() {
          // add self (this modal instance) to the modal service so it can be opened from any component
          //this.modalService.add(this);
          // this.open('modal-1');
          //
          // // move element to bottom of page (just before </body>) so it can be displayed above everything else
          // document.body.appendChild(this.element);
          //
          // // close modal on background click
          // this.element.addEventListener('click', (el: any) => {
          //     if (el.target.className === 'jw-modal') {
          //         this.close();
          //     }
          // });
      }

      ngOnDestroy() {
          // remove self from modal service
          // this.close();

          // remove modal element from html
          // this.element.close();
      }
      // open(id: string) {
      //     // open modal specified by id
      //     // const modal = this.modals.find(x => x.id === id);
      //     //
      //     // if (!modal) {
      //     //     throw new Error(`modal '${id}' introuvable`);
      //     // }
      //
      //     this.el.open(id);
      // }
      open(id: string) {
          this.element.style.display = 'block';
          document.body.classList.add('jw-modal-open');
          this.isOpen = true;
      }



      close() {
          this.element.style.display = 'none';
          document.body.classList.remove('jw-modal-open');
          this.isOpen = false;
      }
  }
