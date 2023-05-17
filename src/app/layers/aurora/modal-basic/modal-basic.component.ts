import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {



	constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openModal(content: any) {
		this.modalService.open(content, { fullscreen: true , windowClass: 'dark-modal'});
	}

}
