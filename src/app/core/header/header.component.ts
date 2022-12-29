import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  language: string = 'en';

  inAboutMe: boolean = false;
  inHome: boolean = true;
  inEducation: boolean = false;
  inProjects: boolean = false;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  bgClicked() {
    this.languageService.changeLanguage('bg');
    this.language = 'bg';
  }

  enClicked() {
    this.language = 'en';
    this.languageService.changeLanguage('en');
  }

  homeClicked() {
    this.inAboutMe = false;
    this.inHome = true;
    this.inEducation = false;
    this.inProjects = false;
  }

  aboutMeClicked() {
    this.inAboutMe = true;
    this.inHome = false;
    this.inEducation = false;
    this.inProjects = false;
  }

  educationClicked() {
    this.inAboutMe = false;
    this.inHome = false;
    this.inEducation = true;
    this.inProjects = false;
  }

  projectClicked() {
    this.inAboutMe = false;
    this.inHome = false;
    this.inEducation = false;
    this.inProjects = true;
  }
}
