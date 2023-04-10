import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

const pages: any = {
  'page1': ['./assets/basics-certificate.jfif', 'Programing Basics - September 2021'],
  'page2': ['./assets/fundametals-certificate.jfif', 'Programing Fundamentals - January 2022'],
  'page3': ['./assets/advance-certificate.jfif', 'JS Advance - May 2022'],
  'page4': ['./assets/Application-certificate.jfif', 'JS Application - June 2022'],
  'page5': ['./assets/back-end-certificate.jfif', 'JS back-end - September 2022'],
  'page6': ['./assets/angular-certificate.jfif', 'Angular - November 2022'],
  'page7': ['./assets/html-certificate.jpg', 'HTML-CSS - January 2023'],
  'page8': ['./assets/react-certificate.jpg', 'React JS - April 2023']
}

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.css']
})
export class EducationPageComponent implements OnInit {

  title: string = 'Education Page';
  page: number = this.route.snapshot.queryParams['page'];
  certificate!: string;
  name!: string;
  lastPage: number = 8;

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    const page = 'page' + this.route.snapshot.queryParams['page'];
    if (this.route.snapshot.queryParams['page'] > 6) {
      this.router.navigate(['/page-not-found'])
    }
    this.certificate = pages[page][0];
    this.name = pages[page][1];
  }

  pageDownHandler() {
    if (this.page > 1) {
      this.page--;
    }

    const page = 'page' + this.page;
    this.certificate = pages[page][0];
    this.name = pages[page][1];

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      },
      queryParamsHandling: 'merge',
    });
  }
  pageUpHandler() {
    if (this.page < this.lastPage) {
      this.page++;
    }
    const page = 'page' + this.page;
    this.certificate = pages[page][0];
    this.name = pages[page][1];

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.page
      },
      queryParamsHandling: 'merge',
    });
  }


}
