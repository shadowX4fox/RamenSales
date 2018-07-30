import { Component } from '@angular/core';
import { DemoServiceService } from './demo-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ramenSales';

  data: any;

  constructor(private _demoService: DemoServiceService) {
      
      this._demoService.getSalesData().subscribe(
              salesData => { 
                let ramenSales = this.data.datasets[1].data = salesData.data
                console.log(ramenSales);
                this.data = {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: '# of plates served',
                            backgroundColor: '#42A5F5',
                            borderColor: '#1E88E5',
                            data: ramenSales
                        }
                    ]
                }
                console.log(this.data);
              },
              err => console.error(err),
              () => console.log('done loading sales')
            );

  }
}
