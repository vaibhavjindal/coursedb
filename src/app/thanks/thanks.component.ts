import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	document.body.classList.add('bg-img-thanks');
  }

}
