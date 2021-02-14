import { Injectable } from '@angular/core';

@Injectable()
export class AppStorage{
  serverPath: String = 'http://localhost:8094/api/';
  SEARCH_BY_PLACE_DIALOG="place";
  SEARCH_BY_COORDINATES_DIALOG="coordinates";

}
