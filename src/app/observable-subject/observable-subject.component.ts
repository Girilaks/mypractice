import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-subject',
  templateUrl: './observable-subject.component.html',
  styleUrls: ['./observable-subject.component.css']
})
export class ObservableSubjectComponent {

  ObservableData: any;
  subjectData: any;
  getObservableData(){
    let myObservable = new Observable<string>(observer => {
      observer.next("Please subscribe observable");
    })

    // Observables are cold they emit data when subscriber
    myObservable.subscribe(data => {
      this.ObservableData = data;
    })
  }
  getSubjectData(){
    // let mySubject = new Subject();
    // mySubject.next("Please subscribe subject"); // it emit data before subscribe and no output on below code

    // // subject are hot they emit data even if there is no subscriber
    // mySubject.subscribe((data) => {
    //   this.subjectData = data;
    // })


    let mySubject = new Subject();
    // subject are hot they emit data even if there is no subscriber
    mySubject.subscribe((data) => {
      this.subjectData = data;
    })
    mySubject.next("Please subscribe subject"); // it emit data after subscribe and display output 
  }
}
