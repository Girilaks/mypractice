import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.css']
})
export class PromiseObservableComponent {

  myObservable: any;
  myPromise: any;
  mySubscription: any;

  create() {
    this.myObservable = new Observable<string>(observer => {
      console.log("Observable is created");
      // observer.next("Observable has emitted 1");
      // observer.next("Observable has emitted 2");
      // observer.next("Observable has emitted 3");

      // setInterval(() => {
      //   observer.next("Observable has emitted"); // emit continously
      // }, 1000)

      observer.next("Observable has emitted");
    })

    this.myPromise = new Promise<string>(resolve => {
      console.log("Promise is created");
      // resolve("Resolve has emitted 1");
      // resolve("Resolve has emitted 2"); // it won't work bcas promise emit only one value
      // resolve("Resolve has emitted 3"); // it won't work bcas promise emit only one value

      // setInterval(() => {
      //   resolve("Resolve has emitted"); // emit only one value
      // }, 1000)

      resolve("Promise has emitted")
    })


    // to validate async nature of promise
    // this.myPromise.then((data: string) => {
    //   console.log(data);
    // })
    // this.myObservable.subscribe((data: string) => {
    //   console.log(data);
    // })

    // to change observalbe as async
    this.myPromise.then((data: string) => {
      console.log(data);
    })
    setTimeout(() => {
      this.myObservable.subscribe((data: string) => {
        console.log(data);
      })
    }, 0);
  }

  execute() {
    this.mySubscription = this.myObservable.subscribe((data: string) => {
      console.log(data);
    })

    this.myPromise.then((data: string) => {
      console.log(data);
    })
  }

  cancel() {
    this.mySubscription.unsubscribe();
  }
}
