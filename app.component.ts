import { Component } from '@angular/core';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='country';
  allUser: Object | any;
  isEdit=false;
  userObj={
    name:'',
    id:'',
    description:''
  }

  constructor(private commonService:CommonService){}
 user: any;
  ngOnInit(){
    this.getLatestUser();
  }

  add(formObj: any){
      console.log(formObj);
     this.commonService.createCountry(formObj).subscribe((response)=>{
      this.getLatestUser();
      
    })      
  }
  getLatestUser(){
    this.commonService.getAllCountry().subscribe((response)=>{
      this.allUser =response;
    })
  }

  editCountry(country: any){
    this.isEdit=true;
    this.userObj= country;
  }

  deleteCountry(user: any){
     this.commonService.deleteCountry(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  updateCountry(){
    this.isEdit= !this.isEdit;
    this.commonService.updateCountry(this.userObj).subscribe(()=>{
      this,this.getLatestUser();
    })
  }
}
