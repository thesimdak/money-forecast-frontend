import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public hamburgerOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu() {
    this.hamburgerOpened = !this.hamburgerOpened;
  }

  public closeMenu() {
    this.hamburgerOpened = false;
  }

  public getMenuClasses(): String[] {
    if (!this.hamburgerOpened) {
      return ['hidden'];
    } else {
      return [];
    }
  }

  public getHamburgerClasses(): String[] {
    if (!this.hamburgerOpened) {
      return [];
    } else {
      return ['opened'];
    }
  }

}
