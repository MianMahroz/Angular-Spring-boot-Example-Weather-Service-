import { OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppStorage } from '../core/AppStorage';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {

  city: string='';
  country: string='';
  lat:number=0.0;
  lon:number=0.0;

  constructor(
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private appStorage:AppStorage) {}

    ngOnInit(): void {
    }

    search(): void {
      if(this.data.searchBy==this.appStorage.SEARCH_BY_PLACE_DIALOG){
        this.dialogRef.close({searchByPlace:this.city+','+this.country});
      }else{
        this.dialogRef.close({lat:this.lat,lon:this.lon});
      }

    }

}
