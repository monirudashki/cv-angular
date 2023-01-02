import { Component, OnDestroy, OnInit, ɵisSubscribable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, Subscription, tap } from 'rxjs';
import { LanguageService } from 'src/app/core/language.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit{
  
  title: string = 'About Me';
  language$ = this.languageService.currentLanguage$;

  constructor(
    private titleService: Title,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }
}
