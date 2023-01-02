import { EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IRootState } from '../+store';
import { IPages } from './interfaces/pagesInterfaces';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  currentLanguage$: Observable<string> = this.store.select(globalState => globalState.currentLanguage);
  
  constructor(private store: Store<IRootState>) { }
}
