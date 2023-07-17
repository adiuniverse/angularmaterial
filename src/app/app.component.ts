import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subscription, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample2-app';
  constructor(private http:HttpClient){}






orderStatus: any 
onlineStatus : any
sub: Subscription = new Subscription

// marks = [10,20,30,40,50]
// mark$ = of(10,20,30,40,50,25,27,28).pipe(map((X)=> X+2))
mark$ = of(10,20,30,40,50,25,27,28).pipe(filter(x => x>25))







ngOnInit(){
  this.sub = this.orderObservable.subscribe(item=>{
    this.orderStatus=item
  },error=>{
    console.log('error')
  })
  





  this.sub = this.onlineObservable.subscribe(status =>{
    this.onlineStatus = status
  })

  this.mark$.subscribe(marks=>{
    console.log(marks)
  })
}
orderObservable = new Observable(observer=>{

  setTimeout(() => {
    observer.next('order placed')
  }, 3000);

  setTimeout(() => {
    observer.next('item packed')
  }, 6000);

  setTimeout(() => {
    observer.next('item shipped')
  }, 9000);

  setTimeout(() => {
    observer.error('some errors occured')
  }, 9000);


  setTimeout(() => {
    observer.next('item delivered')
  }, 12000);


  // setTimeout(() => {
  //   observer.complete()
  // }, 15000);



  observer.next('order placed')
  observer.next('item packed')
  observer.next('item shipped')
  observer.next('item delivered')

  
})



onlineObservable = new  Observable((observer)=>{
    setTimeout(() =>{
      observer.next('online')
    },1000);


    setTimeout(() =>{
        observer.next('last seen one minute ago')
      },2000)


      setTimeout(() =>{
        observer.next('last seen two minute ago')
      },3000)




})



ngOnDestroy(){
  this.sub.unsubscribe()
}




// submit(formdata:any){
//   this.api.submitData(formdata).subscribe()
// }
}






