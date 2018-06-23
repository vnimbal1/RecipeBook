import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
  constructor(private dataStorageService: DataStorageService, private _router: Router) { }

  ngOnInit() {

  }
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }

    );
  }

}
