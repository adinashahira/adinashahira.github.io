import { Component, OnInit } from '@angular/core';
import { faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  faBriefcase = faBriefcase;
  faSchool = faSchool;
  constructor() { }

  ngOnInit(): void {
  }

}
