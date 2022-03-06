import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CallService } from 'src/app/core/calls/call.service';
import { WebcamImage} from 'ngx-webcam';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(private elementRef: ElementRef) {}

  data: any;

   // webcam snapshot trigger
   private trigger: Subject<void> = new Subject<void>();

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public async handleImage(webcamImage: WebcamImage): Promise<void> {
    console.log('received webcam image', webcamImage);
    const response = await axios.post('https://node-js-back.azurewebsites.net/faces',{image64:webcamImage.imageAsBase64})
    this.data = response;
    
    console.log(response)

  }

  public getBackgroundColor() {
    return 'black';
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  ngOnInit(): void {}
}
