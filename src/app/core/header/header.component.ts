import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { homeSelector, IRootState, selectFeature } from 'src/app/+store';
import { changeToAbout, changeToBg, changeToEducation, changeToEn, changeToHome, changeToProjects } from 'src/app/+store/actions';
import { IPages } from '../interfaces/pagesInterfaces';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language$ = this.languageService.currentLanguage$;
  
  inHome$: Observable<boolean> = this.store.select(global => global.currentPage.homeActive);
  inAboutMe$: Observable<boolean> = this.store.select(global => global.currentPage.aboutActive);
  inEducation$: Observable<boolean> = this.store.select(global => global.currentPage.projectsActive);
  inProjects$: Observable<boolean> = this.store.select(global => global.currentPage.educationActive);

  constructor(private languageService: LanguageService , private store: Store<IRootState>
  ) {}

  ngOnInit(): void {
  }

  bgClicked() {
    this.store.dispatch(changeToBg());
  }

  enClicked() {
    this.store.dispatch(changeToEn());
  }

  homeClicked() {
    this.store.dispatch(changeToHome());
  }

  aboutMeClicked() {
    this.store.dispatch(changeToAbout());
  }

  educationClicked() {
    this.store.dispatch(changeToProjects());
  }

  projectClicked() {
    this.store.dispatch(changeToEducation());
  }
}
