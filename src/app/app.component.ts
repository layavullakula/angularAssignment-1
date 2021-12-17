import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  warning = "red";
  done = false;
  showing: string = "";
  p = '';

  

  onValue = (event: any) =>{
    
    if ((<HTMLInputElement>event.target).value.length >= 8 && (<HTMLInputElement>event.target).value.length<= 15){ 
      this.warning = "green";
      this.showing = (<HTMLInputElement>event.target).value;
      this.done=true;
    }else{
      this.warning = "red";
      this.showing = (<HTMLInputElement>event.target).value;
      this.done=false;
    }


    
  }

}
