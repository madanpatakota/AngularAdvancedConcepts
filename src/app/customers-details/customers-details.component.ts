import { Component, EventEmitter, Input, OnInit, Output ,
    OnChanges ,
    DoCheck , 
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ContentChild,
   ElementRef } from '@angular/core';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.css']
})
export class CustomersDetailsComponent implements
 OnInit ,
 OnChanges , 
 DoCheck ,
 AfterContentInit ,
 AfterContentChecked
{

  @Input() customerInfo:any;

  @Input() captureTitleFromApp : any;

  @Output() customerRowEmitter  = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log("ngOninit is loading.......")
  }




  ngOnChanges(){
    console.log("ngOnchanges is loading.......")
    console.log("customerInformation" , this.customerInfo[0])
    console.log("customerInformation" , this.customerInfo[1])

    //this.customerInfo = this.customerInfo.filter((x:any)=> x.location == 'delhi');


  }


  ngDoCheck(){
     console.log("ngDocheck changes");
  }



  @ContentChild('paragraph') paragraph:ElementRef
  ngAfterContentInit(){
    console.log("ngAfterContentInit changes");
    console.log(this.paragraph.nativeElement);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked changes");
  }




  


  CurrentRow(item:any){
       // you can post the data to the parent element
       console.log("edit button is clicking");
        this.customerRowEmitter.emit(item);
  }

}
