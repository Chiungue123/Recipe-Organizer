import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FormVisibilityService {
  private _isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isVisible = this._isVisible.asObservable();

  toggleForm() {
    return this._isVisible.next(!this._isVisible.value);
  }

  constructor() { }
}
