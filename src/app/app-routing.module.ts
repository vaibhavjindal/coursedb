import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DepartmentComponent } from './department/department.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { CourseFilesComponent } from './course-files/course-files.component';
import { CoursesComponent } from './courses/courses.component';


const routes: Routes = [
  { path: 'courses/:ccode', component: CoursesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'department/:link', component: DepartmentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contribute', component: ContributeComponent },
  { path: 'upload-data', component: UploadDataComponent },
  { path: 'course-files/:cname', component: CourseFilesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
