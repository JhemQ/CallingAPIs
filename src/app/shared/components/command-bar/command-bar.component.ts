import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  @Input() redirectTo:boolean | undefined;
  @Input() show:boolean | undefined
  @Input() books:any | undefined
  @Input() blogs:any | undefined
  @Output() idEmitterBook = new EventEmitter()
  @Output() idEmitterBlog = new EventEmitter()
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  deleteAllBooks(book: any){
    for(let item of book){
      this.idEmitterBook.emit(item.id)
    }
  }

  deleteAllBlogs(blog: any){
    for(let item2 of blog){
      this.idEmitterBlog.emit(item2.id)
    }
  }

}
