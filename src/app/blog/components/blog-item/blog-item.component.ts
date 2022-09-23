import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogInterface } from '../../models/blog-interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  
  @Input() blog:BlogInterface | undefined;
  @Output() blogEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  editBlog(){
    this.blogEmitter.emit(this.blog?.id)
  }

  deleteBlog(){
    this.blogEmitter.emit(this.blog?.id)
  }

}
