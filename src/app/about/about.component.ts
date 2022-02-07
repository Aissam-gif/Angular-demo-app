import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  info = {
    nom : "Aissam",
    email : "aissam@gmail.com",
    tel : "0645204117"
  };
  comments: {date:Date, message:string}[] = []
  comment = {date:new Date(), message: ''};

  newComment = false;
  addComment() {
    if (this.comment.message != '') {
      this.comment.date = new Date();
      this.comments.push({date: this.comment.date, message: this.comment.message});
      this.comment.message = '';
    console.log(this.comments);
    }
  }
}
