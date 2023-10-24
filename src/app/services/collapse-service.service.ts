import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollapseServiceService {

  private _navCollapsed: boolean; // Make this private so we can expose it via a get/set
  private navCollapsedChange$ = new Subject<boolean>(); // This will be used to create our Observable
  public navCollapsed$ = this.navCollapsedChange$.asObservable(); // This is our Observable

  constructor() { }

  set navCollapsed(val: boolean) {
    this._navCollapsed = val; // Set the new value
    this.navCollapsedChange$.next(val); // Trigger the subject, which triggers the Observable
  }

  get navCollapsed() {
    return this._navCollapsed;
  }
}
