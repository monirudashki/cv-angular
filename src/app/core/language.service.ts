import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languageEmitter = new EventEmitter<string>();

  constructor() { }
  
  changeLanguage(language: string) {
    console.log('changeLanguage');
    this.languageEmitter.emit(language);
  }
}
