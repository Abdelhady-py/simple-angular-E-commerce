import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, merge,filter, map, from } from 'rxjs';

@Component({
  selector: 'app-obserervables',
  templateUrl: './obserervables.component.html',
  styleUrls: ['./obserervables.component.scss']
})
export class ObserervablesComponent implements OnInit , OnDestroy{




  numbers: number[] = [];
  filteredNumbers: number[] = [];
  mappedNumbers: number[] = [];



sub!:Subscription

 obs=new Observable(observer=>{
  console.log('obs working');

setTimeout(() => {
  observer.next('1')
}, 1000);


setTimeout(() => {
  observer.next('2')
}, 2000);


setTimeout(() => {
  observer.complete()
}, 3000);
}
)



ngOnInit(): void {


 const numbersObservable = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


 const filteredObservable = numbersObservable.pipe(
   filter((value) => value % 2 === 0)
 );


 const mappedObservable = numbersObservable.pipe(
   map((value) => value * 2)
 );

 numbersObservable.subscribe((value) => (this.numbers = [...this.numbers, value]));
 filteredObservable.subscribe((value) => (this.filteredNumbers = [...this.filteredNumbers, value]));
 mappedObservable.subscribe((value) => (this.mappedNumbers = [...this.mappedNumbers, value]));






  this.sub=this.obs.subscribe({
  next:(value)=>{
    console.log(value);

  },
  complete:()=>{
    console.log('observable with setTime out');

  }
  })

  let obs1=new Observable(observ1=>{
    observ1.next('this is the first obs');

  })

  let obs2= new Observable(observ2=>{
    observ2.next('second obs')
  })

  let obs3=merge(obs1,obs2);

  obs3.subscribe(dat=>{
    console.log(dat)});




}


ngOnDestroy(): void {


  this.sub.unsubscribe()

}
}
