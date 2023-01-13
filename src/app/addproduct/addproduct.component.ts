import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import { MyService } from '../service/my.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  // DJANGO_SERVER = 'http://127.0.0.1:8000/products/'
  uploadForm: FormGroup;
  // response:any
  // imageURL:any
  constructor(private service:MyService,public fb:FormBuilder){

    this.uploadForm = this.fb.group({
      image: [''],
      category:[''],
      description:[''],
      price:[''],
      name: [''],})
  }
  ngOnInit(): void {
    
  }
  addproductform=new FormGroup({
    "name":new FormControl("",[Validators.required]),
    "description":new FormControl("",[Validators.required]),
    "category":new FormControl("",[Validators.required]),
    "price":new FormControl("",[Validators.required]),
    "image":new FormControl("",),

  })
  // showPreview(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.uploadForm.get('profile')?.setValue(file);
  //   }
    
  //   if (event.target.files.length > 0) {

  //     const image = event.target.files[0];

  //     this.addproductform.patchValue({

  //       image: image

  //     });
    
   
  // }
// }
getAuthToken(){
  return localStorage.getItem("token")
}
    

  addproducthandle(){
    // console.log(this.addproductform.value);
    let tkn=this.getAuthToken()

    const formData = new FormData();
    formData.append('name', "redmi24");
    formData.append('description', "nice");
    formData.append('price', "12000");
    formData.append('category', "phone");
    formData.append('image',this.uploadForm.get('image')?.value);

    console.log(formData.get('image'));
    

    
    const requestOption={
      method:"POST",
      headers:{
        "Authorization":"Token "+tkn,
        "Content-type":"multipart/form-data",
      },
      body:formData,

    }
   
    fetch("http://127.0.0.1:8000/products/",requestOption).then(response=>response.text()).then(result=>console.log(result)
    ).catch(error=>console.log(error)
    )
    console.log(tkn);
    console.log(requestOption);
    
    
    

    // this.service.addproduct(formData).then(
    //   (res:any) => {
    //     this.response = res;
    //     this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
    //     console.log(res);
    //     console.log(this.imageURL);
    //   },
    //   (err) => {  
    //     console.log(err);
    //   }
    // );
  }

  

}
