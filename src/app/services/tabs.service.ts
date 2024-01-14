import { Injectable } from '@angular/core';
import { windowWhen } from 'rxjs';
import { Location } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  activeTab: number;

  constructor(private location: Location) { 
    this.activeTab = -1; 

    this.examinePath(); 
    
    location.onUrlChange((url, state) => {
      this.examinePath();
    });

  }
  changeTab(tab: number): void {

    if (this.activeTab === tab)
      return;

    switch(tab) {
      case 1:
      default :
        this.activeTab = 1;
        window.history.pushState(null, "Tab1", "/all-contacts");
        break;
      case 2:
        this.activeTab = 2;
        window.history.pushState(null, "Tab2", "/add-contact");
        break;
    }
  }

  examinePath() {
    switch(window.location.pathname) {
      case "all-contacts":
      case "":
      default :
        this.activeTab = 1;
        break;
      case "add-contact":
        this.activeTab = 2;
        break;

    }
    console.log(this.activeTab);
  }

}
