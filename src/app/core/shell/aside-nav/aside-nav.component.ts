import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss']
})
export class AsideNavComponent implements OnInit {

  activeState: String='dashboard1';
  constructor() { }

  ngOnInit() {
  }

  setActiveState(state){
    this.activeState = state;
  }

}
