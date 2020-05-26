import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
import { from } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
form=new FormGroup({
  userNameFN:new FormControl('',Validators.required),
  userNameLN:new FormControl('',Validators.required),
email: new FormControl('',Validators.required),
PhoneNumber: new FormControl('',Validators.required),
password: new FormControl('',Validators.required)


});

get email(){
return this.form.get('email');

}

get password(){
  return this.form.get('password');
  
  }

  get userNameFN(){
    return this.form.get('userNameFN');
    
    }
    get userNameLN(){
      return this.form.get('userNameLN');
      
      }
      get PhoneNumber(){
        return this.form.get('PhoneNumber');
        
        }

  BdDays = [
    {day:"01"},
    {day:"02"},
    {day:"03"},
    {day:"04"},
    {day:"05"},
    {day:"06"},
    {day:"07"},
    {day:"08"},
    {day:"09"},
    {day:"10"},
    {day:"11"},
    {day:"12"},
    {day:"13"},
    {day:"14"},
    {day:"15"},
    {day:"16"},
    {day:"17"},
    {day:"19"},
    {day:"20"},
    {day:"21"},
    {day:"24"},
    {day:"25"},
    {day:"26"},
    {day:"27"},
    {day:"28"},
    {day:"29"},
    {day:"30"}]
  ;
  BdMonths = [
    {Month:"01"},
    {Month:"02"},
    {Month:"03"},
    {Month:"04"},
    {Month:"05"},
    {Month:"06"},
    {Month:"07"},
    {Month:"08"},
    {Month:"09"},
    {Month:"10"},
    {Month:"11"},
    {Month:"12"}
  ]
  ;
  BdYears = [
    {Year:"1990"},
    {Year:"1991"},
    {Year:"1992"},
    {Year:"1993"},
    {Year:"1994"},
    {Year:"1995"},
    {Year:"1996"},
    {Year:"1997"},
    {Year:"1998"},
    {Year:"1999"},
    {Year:"2001"},
    {Year:"2002"},
    {Year:"2003"},
    {Year:"2004"},
    {Year:"2005"},
    {Year:"2006"},
    {Year:"2007"},
    {Year:"2008"},
    {Year:"2009"},
    {Year:"2010"},
    {Year:"2011"},
    {Year:"2012"},
    {Year:"2013"},
    {Year:"2014"},
    {Year:"2015"},
    {Year:"2016"},
    {Year:"2017"},
    {Year:"2018"},
    {Year:"2019"},
    {Year:"2020"}]
  ;

  constructor() { }

  ngOnInit(): void {
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
  }



  ngOnDestroy() {
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
  }
}
