import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {




   /*
   Custom property Data binding is the process of passing the data from one component to another component via component property.so then components becomes parent and child.
   */

  @Input() customerInfo:any;

  @Input() captureTitleFromApp : any;

  constructor() { }

  ngOnInit(): void {
  }

}
