import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enviornment } from '../enviornments/enviornment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeather(location:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(Enviornment.weatherApiBaseUrl,{
      headers:new HttpHeaders().set(
        Enviornment.XRapidAPIHostLabel,Enviornment.XRapidAPIHostValue
      )
      .set(Enviornment.XRapidAPIKeyLabel,Enviornment.XRapidAPIKeyValue),
      params:new HttpParams()
      .set('q',location)
      .set('units','metric')
    })
  }
}
