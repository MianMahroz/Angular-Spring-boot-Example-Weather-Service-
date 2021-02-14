import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  @Input() weatherDetails:any;
  constructor() { }

  ngOnInit(): void {
    console.log('weather details:',this.weatherDetails);
  }

}
