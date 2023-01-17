import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todayDate:any;
  public persondata:any[]=[];
  constructor(private myservice:MyserviceService){

  }
  ngOnInit()
  {
    this.todayDate=this.myservice.showTodayDate();
    this.myservice.getData().subscribe((data:any)=>{
      this.persondata = Array.from(Object.keys(data),k=>data[k]);
      console.log(this.persondata);
    });
  }
  title = 'Welocme to Angular';
  description='Welcome to our first Angular Project. Start building your project with most popular Javascript Framework.';

  months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
  isAvailable=true;
  simplePipeDate="This is going really well !";
  setTrue()
  {
    //console.log();
    alert("Hello True");  
  }
  setFalse()
  {
    //console.log("Hello False");
    alert("Hello False");  
  }
  firstFeature={
    heading:"Feature One",
    body:"Some feature details for the First feature"
  }
  secondFeature={
    heading:"Feature Second",
    body:"Some feature details for the Second feature"
  }
  thirdFeature={
    heading:"Feature Third",
    body:"Some feature details for the Third feature"
  }
  fourthFeature={
    heading:"Feature Fourth",
    body:"Some feature details for the Fourth feature"
  }
}
