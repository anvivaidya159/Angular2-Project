import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { HolidayApiService } from '../../services/holidayapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  title = 'app';
  selectedDate:any = '';
  displayInfo:any = '';
  holidayslist:any = [];
  constructor(private router: Router, private route: ActivatedRoute, holidayApiService: HolidayApiService) {       
    this.selectedDate = this.route.snapshot.params['date']
    this.holidayslist = holidayApiService.getHolidayInfomation();
    if(this.holidayslist && this.holidayslist.length > 0){
      this.holidayslist.forEach(element => {
        if(element.date === this.selectedDate){
          this.displayInfo = element;
        }
      });
      console.log('this.displayInfo', this.displayInfo);
    }else{
      this.router.navigate(['/']);
    }    
  }
}
