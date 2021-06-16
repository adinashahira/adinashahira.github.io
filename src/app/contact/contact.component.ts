import { Component, OnInit } from '@angular/core';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  constructor() { }

  ngOnInit(): void {
  }

}
