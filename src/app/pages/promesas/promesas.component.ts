import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => console.log(usuarios) )
    
    /* const promesa = new Promise( ( resolve, reject ) => {
      
      if ( false ) {
        resolve('Si jaló');
      }else {
        reject('No jaló');
      }

    } );

    promesa.then( ( mensaje ) => {

      console.log(mensaje);

    } )
    .catch( ( error ) => console.log( 'Algo salió mal', error ) ) */

  }

  getUsuarios() {

    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve(body.data))
    }); 

  }

}
