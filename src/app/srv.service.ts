import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Dept } from './dept';
import { DEPTS } from './dept-list';

@Injectable({
  providedIn: 'root'
})
export class SrvService {
  
  getDepts(): Observable<Dept[]> {
  return of(DEPTS);
  }

  constructor() { }
}
