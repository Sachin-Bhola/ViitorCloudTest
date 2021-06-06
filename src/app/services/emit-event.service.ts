import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitEventService {

  public isLoading = new BehaviorSubject(false);

  constructor() { }
}
