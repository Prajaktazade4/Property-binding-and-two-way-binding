import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskTen';
  heading='PROPERTY BINDING'
  itemImageUrl = 'assets/tshirt.avif';
  data:any;
  data1:string='this is AnkHub'
  disable=true;
  enableBox(){
    this.disable=false;
  }
}
