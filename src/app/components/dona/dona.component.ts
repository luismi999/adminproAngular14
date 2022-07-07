import { Component, Input, OnChanges } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnChanges {

  ngOnChanges(): void {
    this.doughnutChartData={
   
      labels: this.doughnutChartLabels,
      datasets:[
        { 
          data: this.dataRecibida,
          backgroundColor : ['#5F0CA9','#E7233D','#FFB414'],
          hoverBackgroundColor: ['#5F0CA9','#E7233D','#FFB414'],
          borderColor: ['#5F0CA9','#E7233D','#FFB414'],
          hoverBorderColor: ['#5F0CA9','#E7233D','#FFB414']
        }
      ]
    }
  }

  @Input('titulo') titulos: string = "Sin titulo";
  @Input('labels') doughnutChartLabels: string[] = [];
  @Input('data') dataRecibida: number[] = [];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: this.dataRecibida,
        backgroundColor : ['#5F0CA9','#E7233D','#FFB414'],
        hoverBackgroundColor: ['#5F0CA9','#E7233D','#FFB414'],
        borderColor: ['#5F0CA9','#E7233D','#FFB414'],
        hoverBorderColor: ['#5F0CA9','#E7233D','#FFB414']
      }
    ]
  };

}
