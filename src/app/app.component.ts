import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureLoaded= 'recipe';
  onNavigate(featureSelected: string) {
    this.featureLoaded = featureSelected;
  }

}
