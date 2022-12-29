import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { EducationPageComponent } from "./education-page/education-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PageNotFoundComponent
    },
    {
        path: 'aboutMe',
        component: AboutPageComponent
    },
    {
        path: 'education',
        component: EducationPageComponent
    },
    {
        path: 'projects',
        component: ProjectsPageComponent
    }
]

export const pagesRoutingModule = RouterModule.forChild(routes);