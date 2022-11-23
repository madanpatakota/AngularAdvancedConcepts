import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements OnInit {

  @Input() customerInfo:any;

  @Input() captureTitleFromApp : any;

  constructor() { }

  ngOnInit(): void {
  }

}
