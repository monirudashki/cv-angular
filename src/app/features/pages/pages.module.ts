import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { pagesRoutingModule } from './pages-router.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    EducationPageComponent,
    ProjectsPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    pagesRoutingModule,
  ]
})
export class PagesModule { }
