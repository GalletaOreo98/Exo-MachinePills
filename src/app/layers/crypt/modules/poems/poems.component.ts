import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { firebaseConfig } from "../../../../../environments/environment.prod";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header container">
      <h4 class="modal-title">{{title}}</h4>
    </div>
    <div class="modal-body container">
    <p [innerHTML]="content"></p>
    </div>
    <div class="modal-footer">
      <p>{{author}}</p>
      <button type="button" class="btn btn-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})

export class NgbdModalContent {

  @Input() title: string = "";
  @Input() author: string = "";
  @Input() content: string = "";


  constructor(public activeModal: NgbActiveModal) { }

  download(url: string) {
    window.open(url);
  }
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

class Book {
  title: string;
  author: string;
  content: string;
  constructor(title: string, author: string, content: string) {
    this.title = title;
    this.author = author;
    this.content = content;
  }
  toString() {
    return this.title + ', ' + this.author + ', ' + this.content;
  }
}

// Firestore data converter
const bookConverter = {
  toFirestore: (book: any) => {
    return {
      title: book.title,
      author: book.author,
      content: book.content
    };
  },
  fromFirestore: (snapshot: any, options: any) => {
    const data = snapshot.data(options);
    return new Book(data.title, data.author, data.content);
  }
};

const booksRef = collection(db, "books");
const q = query(booksRef, where("author", "!=", "")).withConverter(bookConverter);

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {

  poemForm: FormGroup;
  isAddingNewPoem: boolean = false;
  booksData: Book[];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) {
    this.booksData = new Array<Book>;
    this.poemForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      author: ['', [Validators.required, Validators.maxLength(30)]],
      content: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]]
    });
  }

  open(title: string, author: string, content: string) {
    const modalRef = this.modalService.open(NgbdModalContent, { windowClass: 'dark-modal' });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.author = author;
    modalRef.componentInstance.content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  async submitForm() {
    if (this.poemForm.valid) {
      console.log(this.poemForm.value);
      console.log(this.poemForm.value.content);
      await addDoc(booksRef, {
        title: this.poemForm.value.title,
        author: this.poemForm.value.author,
        content: this.poemForm.value.content
      }).then(
        () => {
          this.isAddingNewPoem = false;
          console.log("Uploaded");
          this.booksData = new Array<Book>;
          this.getBooksData();
        }
      );
    }
  }

  ngOnInit(): void {
    this.getBooksData(); //Esto es una promise, tener cuidado ngOnInit no espera los await, pero igual se completara, pero no en el flujo que quieras
  }

  async getBooksData() {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      this.booksData.push(data)
    });
    console.log(this.booksData);
  }

}
