import { Component,OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { MyService } from '../service/my.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform=new FormGroup({
    "username":new FormControl("",[Validators.required]),
    "password":new FormControl("",[Validators.required])
  })


  constructor(private service:MyService,private router:Router){}
  ngOnInit(): void {
    
  }
  loginsumbit(){
    this.service.getToken(this.loginform.value).then(res=>res.json()).then(data=>{
      let tkn=data.token
      localStorage.setItem("token",tkn)
      if(tkn){
        this.router.navigateByUrl("productlist")
      }
      else{
        console.log("invalid");
        
      }
    })
    
    
  }
  


}
