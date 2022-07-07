import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos
import { NgChartsModule } from 'ng2-charts';

import { DonaComponent } from './dona/dona.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';



@NgModule({
  declarations: [
    DonaComponent,
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    DonaComponent,
    IncrementadorComponent
  ]
})
export class ComponentsModule { }
