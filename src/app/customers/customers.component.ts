import { Component, ElementRef, Input, OnInit, ViewChild , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }






  keyPressChanges(txtElmenet:HTMLInputElement){
     console.log("Fired");
     console.log(txtElmenet);
  }


  @ViewChild('txtUserName') txtUserName : ElementRef;
  @ViewChild('txtPassword') txtPassword : ElementRef;
  @ViewChild('txtLocation') txtLocation : ElementRef;

 // let                        locaiotn : string 



 // i want to pass the data | emit | post | inject 


 @Output() evtCustomer = new EventEmitter<any>();

 //Now CustomersComponent having the output decarator when click happend it serves the customerInfo
 evtClick(){
    //console.log(txtUserName);
    console.log(this.txtUserName.nativeElement.value);
    console.log(this.txtPassword.nativeElement.value);
    console.log(this.txtLocation.nativeElement.value);
    let customerInfo = {
       name : this.txtUserName.nativeElement.value,
       password : this.txtPassword.nativeElement.value,
       location : this.txtLocation.nativeElement.value
    }

    // let sometext = "some information about the test data"
    // console.log(" from  Customers component component " , sometext);
    // this.evtCustomer.emit(sometext);
    this.evtCustomer.emit(customerInfo);
  }



}
