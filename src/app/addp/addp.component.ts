import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import { MyService } from '../service/my.service';


@Component({
  selector: 'app-addp',
  templateUrl: './addp.component.html',
  styleUrls: ['./addp.component.css']
})
export class AddpComponent implements OnInit{
  
  DJANGO_SERVER = 'http://127.0.0.1:8000'
  form: FormGroup;
  response:any
  imageURL:any

  constructor(public formBuilder: FormBuilder, private uploadService: MyService) {this.form = this.formBuilder.group({
    image: [''],
    category:[''],
    description:[''],
    price:[''],
    name: ['']
  }); }

  ngOnInit() {
    
  }

  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image')?.setValue(file);
    }
  }
  

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.form.get('profile')?.value);
    formData.append('name', "redmi24");
    formData.append('description', "nice");
    formData.append('price', "12000");
    formData.append('category', "phone");

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
        console.log(res);
        console.log(this.imageURL);
      },
      (err) => {  
        console.log(err);
      }
    );
  }
}

