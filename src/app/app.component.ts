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
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: '# of plates served',
                  backgroundColor: '#42A5F5',
                  borderColor: '#1E88E5',
                  data: []
              }
          ]
      }
      this._demoService.getSalesData().subscribe(
              salesData => { this.data.datasets[1].data = salesData.data},
              err => console.error(err),
              () => console.log('done loading sales')
            );

  }
}
