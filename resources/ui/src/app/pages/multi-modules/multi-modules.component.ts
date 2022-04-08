import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-modules',
  templateUrl: './multi-modules.component.html',
  styleUrls: ['./multi-modules.component.scss'],
})
export class MultiModulesComponent {
  baseRoute: string;

  constructor(private location: Location) {
    this.baseRoute = window.location.pathname;
  }

  goTo(url: string) {
    if (!url) {
      this.location.go(this.baseRoute);
      return;
    }

    this.location.go(`${this.baseRoute}/${url}`);
  }
}
