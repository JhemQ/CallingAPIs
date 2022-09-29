import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookInterface } from '../../models/book-interface';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book:BookInterface | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

}
