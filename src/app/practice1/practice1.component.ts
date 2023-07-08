import { Component } from '@angular/core';
import  { IEmployeeP1 } from '../IEmployeePractice1'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component {

  employees: IEmployeeP1[] = [{
    name:'test1',
    age: 10,
    gender: 'm',
    category: 'lower',
    isUIDeveloper: true,
    grade: 'L1'
  },
  {
    name:'test1',
    age: 10,
    gender: 'f',
    category: 'middle',
    isUIDeveloper: false,
    grade: 'L2'
  }]

  gradeList: any[] = [{grade: 'L1', description: 'Grade A'},
  {grade: 'L2', description: 'Grade B'},
  {grade: 'L3', description: 'Grade C'}]

  employee: IEmployeeP1 = {
    name: '',
    age: '',
    gender: 'm',
    category: 'lower',
    isUIDeveloper: true,
    grade: 'L1'
  }

  handleUser(){
    console.log(this.employee)
  }

  // Reactive form

  userform = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userAge: new FormControl(''),
    userGender: new FormControl('m'),
    userIsUIDeveloper: new FormControl(true),
    grade: new FormControl('L1')
  })
}
