import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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


 evtClick(){
    //console.log(txtUserName);
    console.log(this.txtUserName.nativeElement.value);
    console.log(this.txtPassword.nativeElement.value);
    console.log(this.txtLocation.nativeElement.value);

  }



}
