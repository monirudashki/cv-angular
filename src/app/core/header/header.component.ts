import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Router } from 'express';
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

  constructor(
    private languageService: LanguageService ,
    private store: Store<IRootState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const currentUrl = window.location.href;

    if(currentUrl.includes('about')) {
      this.store.dispatch(changeToAbout());
    } else if (currentUrl.includes('projects')) {
      this.store.dispatch(changeToEducation());
    } else if (currentUrl.includes('education')) {
      this.store.dispatch(changeToProjects());
    }
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
