import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DepartmentComponent } from './department/department.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { CourseFilesComponent } from './course-files/course-files.component';

const routes: Routes = [
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
