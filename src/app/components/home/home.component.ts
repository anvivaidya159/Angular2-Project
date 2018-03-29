import { Component } from '@angular/core';
import { HolidayApiService } from '../../services/holidayapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'app';
  holidays:any = [];
  constructor(holidayApiService: HolidayApiService) {
    holidayApiService.getHolidays()
      .then((res:any) => {  
        this.holidays = res;      
        // if(res.status === 200){          
        //   for(let obj in res.holidays){
        //     this.holidays.push({date:obj, value: res.holidays[obj]});
        //   }
           console.log('holidays::', this.holidays);
        // }        
      });
  }
}
