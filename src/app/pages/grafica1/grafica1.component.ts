import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public titulo: string = "Ventas";

  public labels1: string[] = ['Luis', 'Gustavo', 'Edna'];
  public labels2: string[] = ['Jocabed', 'Eduardo', 'Mario'];
  public labels3: string[] = ['Alberto', 'Cesar', 'Jovana'];
  public labels4: string[] = ['Pedro', 'Angel', 'Yadira'];

  public data1: number[] = [100, 25, 60];
  public data2: number[] = [98, 12, 88];
  public data3: number[] = [45, 23, 100];
  public data4: number[] = [200, 35, 44];

  
  
}
