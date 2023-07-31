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


  // View Child is a Property Decorator which provides a reference to element or component or templates to define the view. We have to declare ViewChild with ‘@’ decorator. 


  @ViewChild('txtUserName') txtUserName : ElementRef;
  @ViewChild('txtPassword') txtPassword : ElementRef;
  @ViewChild('txtLocation') txtLocation : ElementRef;

 // let                        locaiotn : string 



 // i want to pass the data | emit | post | inject 

/* Event emitter is an abstraction class in angular which is useful for emit (or) subscribe the data from one component to another component. So that we can communicate the component to another component via service.

*/



/* Custom event Data binding (output) is the process of passing the data from one component to another component via component function. So then components becomes child and parent.
// Here we send the data to outside of the component
*/

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
