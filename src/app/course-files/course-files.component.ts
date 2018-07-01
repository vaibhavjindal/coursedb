import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


/// <reference path="../../../show_files.d.ts" />
import Show from '../../../show_files';

@Component({
  selector: 'app-course-files',
  templateUrl: './course-files.component.html',
  styleUrls: ['./course-files.component.css']
})
export class CourseFilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	new Show().show_files();
  }

}

