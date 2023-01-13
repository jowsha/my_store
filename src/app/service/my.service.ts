import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(public http:HttpClient) { }
  getToken(data:any){
    return fetch("http://127.0.0.1:8000/token/",{
      "method":"POST",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json;charset=UTF-8"
      }
    })
  }
  getAuthToken(){
    return localStorage.getItem("token")
  }
  getProductList(){
    let tkn=this.getAuthToken()
    if(tkn){
      return fetch("http://127.0.0.1:8000/products/",{
      "method":"GET",
      "headers":{
        "Content-type":"application/json;charset=UTF-8",
        "Authorization":"Token "+tkn
      }
    })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }
  addproduct(data:any){
    let tkn=this.getAuthToken()
    if(tkn){
      // let FromData= new FormData(data)
      return fetch("http://127.0.0.1:8000/products/",{
      "method":"POST",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json;charset=UTF-8",
        "Authorization":tkn
      }
    })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }
  DJANGO_SERVER: string = "http://127.0.0.1:8000";

  public upload(formData:any) {
    let tkn=this.getAuthToken()
    return this.http.post<any>(`${this.DJANGO_SERVER}/products/`, formData,{
      
      "headers":{
        "Content-type":"multipart/form-data",
        "Authorization":"Token "+tkn,
        
      }
      
    });
  }

}
