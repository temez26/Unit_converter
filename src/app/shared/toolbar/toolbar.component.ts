import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() title: string;
  isInfoPage: boolean = false;

  constructor(private router: Router) {
    this.title = 'Unit-Converter';
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isInfoPage = event.urlAfterRedirects === '/info';
      }
    });
  }
}
