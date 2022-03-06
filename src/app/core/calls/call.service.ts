import { Injectable } from '@angular/core';
import { HttpcomminicationsService } from '../http-communication/httpcomminications.service';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private http: HttpcomminicationsService) { }

  insertCall(body:any,table:string){
    return this.http.postCall("/order/calculate",body);
  }

  faceCall(body:any){
    return this.http.postCall("/faces",body);
  }
  
}
