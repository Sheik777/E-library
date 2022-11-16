import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private admin: Router) { }

  mybooks: any[] = []

  addbook = new FormGroup({

    bookId: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),


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

    this.mybooks.push({
      bookId: idbook,
      title: tit,
      author: auth,
      

    })
console.log(this.mybooks);



  }

}

// interface books{
//   idbook:number;
//   tit:string;
//   auth:string;

// }