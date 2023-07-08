import { Component } from '@angular/core';
import { IEmployee } from './IEmployee';
import { IMark } from './IMarks';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloworld';

  employee: IEmployee[] = [{
    name: "Test1",
    age: 30,
    salary: 20000,
    gender: "m"
  },
  {
    name: "Test2",
    age: 30,
    salary: 20000,
    gender: "f"
  }]

  marks: IMark[] = [{
    subject: "Maths",
    mark: 100,
    grade: "A" 
  },
  {
    subject: "Science",
    mark: 100,
    grade: "A" 
  }]

  userFrom = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    category: new FormControl('adult'),
    isUIDevloper: new FormControl(true),
    grade: new FormControl(''),
  })

  gradeList = [{
    value: "a", diaplayValue: "Grade A"
  },
  {
    value: "b", diaplayValue: "Grade B"
  },
  {
    value: "c", diaplayValue: "Grade C"
  }];
  employeeObj = {
    empName: '',
    empEmail: '' ,
    empGender: '',
    empCategory: '',
    isUIDevloper: true,
    empGrade: ''
  }

  submitUserForm(){
    console.log(this.userFrom.value);
  }

  submitTemplateFrom(){
    console.log(this.employeeObj)
  }

}
