import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']

})
export class AddBookComponent implements OnInit {
index: any;

  constructor(private admin: Router) { }

  mybooks: any[] = []

  addbook = new FormGroup({

    bookId: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
    author: new FormControl('',[Validators.required]),
  })

  ngOnInit(): void {
    let username = localStorage.getItem('username');

    if (username == null || username == '') {
      this.admin.navigateByUrl('/login');
    }
  }
  pushbook() {

    var idbook = this.addbook.get('bookId')?.value;
    var tit = this.addbook.get('title')?.value;
    var auth = this.addbook.get('author')?.value
    this.addbook.reset();
    this.mybooks.push({
      bookId: idbook,
      title: tit,
      author: auth,
    })
    console.log(this.mybooks);
  }
   del(idbook: number){
  this.mybooks.splice(idbook,1)

   }
  }