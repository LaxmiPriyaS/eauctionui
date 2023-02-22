import { Component, AfterViewInit,Inject } from '@angular/core';
import { RestService } from '../../app/rest.service';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  restService:RestService;
  btndisabled:boolean;
  ddlData:any;
  selectedProduct: any;
  productDetail : any;
  bidList:any;
  constructor(@Inject(RestService) restService:RestService) {
    this.subtitle = 'This is some text within a card block.';
    this.restService=restService;
    this.btndisabled = true;
   
this.restService.GetProductList().subscribe(i=>{
  
  this.ddlData = i;
})
  }

  ngAfterViewInit() { }

  ngOnit(){
   
    this.restService.GetProductList().subscribe(i=>{
    
})
  }
  
  ddlChange(event:any){
    
    
    this.selectedProduct=event.target.value;
    if(this.selectedProduct != "-1"){
      this.btndisabled = false;
    }
    if(this.selectedProduct == "-1"){
      this.btndisabled = true;
    }
  }
  onGetProductDetailsClick(){
    if(this.selectedProduct != "-1"){
      this.restService.GetProductDetails(this.selectedProduct).subscribe(i=>{
        this.bidList = i;
        this.productDetail = this.bidList[0]["products"];

       
      })
    }
  }
}
