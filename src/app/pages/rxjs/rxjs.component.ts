import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public observableSubscribe: Subscription;

  constructor() {

    /* this.retornarObservable()
      .pipe(
        retry(2)
      )
      .subscribe( 
        { 
          next(value) {
            console.log('Subs: ', value);
          },
          error(error) {
            console.log('Error', error);
          },
          complete() {
            console.log('Obs terminado');
            
          }
        } 
      ) */

    this.observableSubscribe = this.retornarIntervalo().subscribe( console.log );

  }
  ngOnDestroy(): void {
    this.observableSubscribe.unsubscribe();
  }

  retornarIntervalo():  Observable<number> {

    return interval(500)
            .pipe(
              /* take(10), */
              map( ( valor ) => valor + 1),
              filter( valor => valor % 2 === 0)
            )

  }

  retornarObservable(): Observable<number> {

    let i = -1;
    
    return new Observable<number>( observer => {
      
      const intervalo = setInterval( () => {

        i++;
        observer.next( i );
        
        if( i === 4) {

          clearInterval( intervalo );
          observer.complete();

        }

        /* if( i === 2) {

          observer.error('Hemos llegado al 2')

        } */

      }, 1000)

    } ); 

  }

}
