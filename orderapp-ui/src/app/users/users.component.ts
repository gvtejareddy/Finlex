import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() data: any = [];
  myForm: FormGroup | any;
  error={
    name:"",
    email:""
  }
  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }
  addUsers() {

  }
  onSubmit(form: any) {
    console.log(form);
    let isValid=true;
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.value.email)&& form.value.email !=null)){
      this.error.email="Enter Valid Email Id";
      isValid=false;
    }
    if(_.filter(this.data, { 'email': form.value.email}).length>0){
      this.error.email="Email ID Already Exists";
      isValid=false;
    }
    if(!(form.value.name!=null && !(form.value.name===""))){
      this.error.name="Enter Valid Name";
      isValid=false;
    }
    if(isValid){
      isValid=true;
      this.error=
        {
          name:"",
          email:""
        }
    }

    if(isValid){

      this.personService.save(this.myForm.value).subscribe((event)=>{
          this.personService.getUsers().subscribe((users)=>{
            this.data=users;
          })
      });
    }
  }
}
