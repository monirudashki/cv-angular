import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  title: string = 'My Projects'

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
  }

}
