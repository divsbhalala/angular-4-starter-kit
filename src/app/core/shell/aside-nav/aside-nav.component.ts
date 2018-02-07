import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  activeState: String = 'dashboard1'; // Set default menu active on load
  constructor() { }

  ngOnInit() {
  }

  setActiveState(state: String) {
    this.activeState = state;
  }

}
