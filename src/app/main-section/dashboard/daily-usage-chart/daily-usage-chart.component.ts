import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-daily-usage-chart',
  templateUrl: './daily-usage-chart.component.html',
  styleUrls: ['./daily-usage-chart.component.css']
})
export class DailyUsageChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
      style: {
        // maxHeight: '400px',
        // maxWidth: '500px',
        maxHeight: '100%',
        maxWidth: '100%',
      }
    },
    title: {
      text: 'Daily Usage',
      style: {
        fontWeight: 'bold', fontSize: '28px', textAlign: 'center',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },
        minSize:'10%',
        size: '50%',
        
      }
    },
    series: [{
      type: 'pie',
      name: 'Usage',
      data: [
        { name: 'Swim pool', y: 45.0, color: '#00FF00' }, 
        { name: 'Closet', y: 26.8, color: '#5B2C6F' }, 
        { name: 'Front yard', y: 12.8, color: '#00BFFF' }, 
        { name: 'Barking', y: 8.5, color: '#FF4500' }, 
        { name: 'Like a boss', y: 6.9, color: '#FF8C00' }
      ]
    }],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 750,
          },
          chartOptions: {
            chart: {
              style: {
                maxHeight: '100%',
                maxWidth: '100%',
                minWidth: 'auto',
                minHeight:'auto',
              }
            },
            title: {
              style: {
                fontSize: '28px',
              },
            },
          }
        },
        {
          condition: {
            maxWidth: 480,
          },
          chartOptions: {
            chart: {
              style: {
                maxHeight: '100%',
                maxWidth: '100%',
              }
            },
            title: {
              style: {
                fontSize: '22px',
              },
            },
          }
        },
        {
          condition: {
            maxWidth: 320,
          },
          chartOptions: {
            chart: {
              style: {
                maxHeight: '100%',
                maxWidth: '100%',
              }
            },
            title: {
              style: {
                fontSize: '18px',
              },
            },
          }
        }
      ]
    }
  };
}
