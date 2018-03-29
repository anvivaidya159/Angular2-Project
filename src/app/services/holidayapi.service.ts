import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable()
export class HolidayApiService {

  private currentPriceUrl = 'https://holidayapi.com/v1/holidays?key=aca95689-dd91-428a-9177-89fbe9fa3dc2&country=US&year=2015';

  constructor(private http: Http) { }
  response:any = [];
  getHolidays(): Promise<any> {    
    return this.http.get(this.currentPriceUrl).toPromise()
      .then((response) => {
        let res = response.json();
        if(res.status === 200){          
          for(let obj in res.holidays){
            this.response.push({date:obj, value: res.holidays[obj]});
          }          
        }
        return this.response;
      });
  }

  getHolidayInfomation(){    
    return this.response;
  }
}