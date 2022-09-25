import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  @Input() redirectTo:boolean | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
