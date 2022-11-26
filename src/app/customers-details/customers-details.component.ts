import { Component, EventEmitter, Input, OnInit, Output ,
    OnChanges ,
    DoCheck , 
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ContentChild,
   ElementRef, 
   ViewChild} from '@angular/core';

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
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
{

  @Input() customerInfo:any;

  @Input() captureTitleFromApp : any;

  @Output() customerRowEmitter  = new EventEmitter<any>();




  @ViewChild("elementRef") _elementref : ElementRef;

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    console.log("ngOninit is loading.......");

    //console.log("paginit event paragraph" , this.paragraph.nativeElement);
    console.log("h2 element ref is in page init event " , this._elementref);
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


  /*this method is avaible in the AfterViewInit() angualr interface*/
  ngAfterViewInit(){
    console.log("AfterView init loaded");
    console.log("h2 element ref is in the after view init " , this._elementref);
  }


  ngAfterViewChecked(){
    console.log("ngAfterViewChecked changes");
  }


  // ngOninit 
  ngDestory(){
    /****************/

    console.log("ngDestroy called");


  }












  


  CurrentRow(item:any){
       // you can post the data to the parent element
       console.log("edit button is clicking");
        this.customerRowEmitter.emit(item);
  }

}
