import { Injectable } from "@angular/core"; 
import { HttpClient } from "@angular/common/http";  
import { retry } from "rxjs/operators";

@Injectable({
    providedIn:'root'
})

export class RestService{
    constructor(private http: HttpClient){}
    private baseUrl = 'https://eauctionapplication20230222095339.azurewebsites.net/api/Product/e-auction/api/v1/';
    private productUrl = 'seller/';
    private bidUrl = 'buyer/';

    GetProductList(){
        return this.http.get(this.baseUrl + this.productUrl +'get-product');
    }

    GetProductDetails(productid:any){
        return this.http.get(this.baseUrl + this.productUrl +'show-bids/'+ productid);
    }

}