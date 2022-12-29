import { Component, OnDestroy, OnInit, ɵisSubscribable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription, tap } from 'rxjs';
import { LanguageService } from 'src/app/core/language.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit , OnDestroy {
  
  title: string = 'About Me';
  language: string = 'en';

  subs!: Subscription

  constructor(
    private titleService: Title,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.subs = this.languageService.languageEmitter.subscribe((language) => {
      this.language = language;
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
