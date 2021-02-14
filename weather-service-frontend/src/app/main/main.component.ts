import { WeatherService } from './../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { AppStorage } from '../core/AppStorage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  weatherDetails: any={};

  constructor(public dialog: MatDialog,private weatherService:WeatherService,private appStorage:AppStorage) { }

  ngOnInit(): void {
    console.log(this.weatherDetails);
  }

  openDialog(searchBy:string): void {
    const dialogRef = this.dialog.open(SearchDialogComponent, {
      width: '500px',
      data: {searchBy:searchBy}
    });

    // on dialog close event
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(searchBy && searchBy==this.appStorage.SEARCH_BY_PLACE_DIALOG){
        this.weatherService.searchByPlace(result.searchByPlace).subscribe(response=>{
          console.log('search By  Place Response',response);
          this.weatherDetails=response;
        });
      }else if(searchBy && searchBy==this.appStorage.SEARCH_BY_COORDINATES_DIALOG){
        this.weatherService.searchByCoordinates(result.lat,result.lon).subscribe(response=>{
          console.log('search By  coordinate Response',response);
          this.weatherDetails=response;
        });
      }

    });
  }
}
