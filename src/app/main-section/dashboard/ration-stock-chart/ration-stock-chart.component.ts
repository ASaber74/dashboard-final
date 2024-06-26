import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ration-stock-chart',
  templateUrl: './ration-stock-chart.component.html',
  styleUrls: ['./ration-stock-chart.component.css'],
})
export class RationStockChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', { static: true }) chartContainer: ElementRef;
  
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
      style: {
        maxHeight: '100%',
        maxWidth: '100%'
      }
    },
    title: {
      text: 'Ration stock info',
      style: {
        fontWeight: 'bold',
        fontSize: '32px',
        textAlign: 'center',
      },
      y: -20,
    },
    xAxis: {
      categories: [
        '100',
        '110',
        '120',
        '130',
        '140',
        '150',
        '160',
        '170',
        '180',
      ],
      tickmarkPlacement: 'on',
      title: {
        text: null,
      },
    },
    yAxis: {
      title: {
        text: 'Ration stock',
      },
    },
    tooltip: {
      split: true,
      valueSuffix: ' units',
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#666666',
        },
      },
    },
    series: [
      {
        type: 'area',
        name: 'Doge ration stock',
        data: [10000, 12000, 18000, 24000, 20000, 16000, 14000, 10000, 8000],
      },
      {
        type: 'area',
        name: 'Evil cat stock',
        data: [6000, 8000, 12000, 20000, 26000, 24000, 22000, 18000, 16000],
      },
    ] as Highcharts.SeriesOptionsType[],
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
    // responsive: {
    //   rules: [
    //     {
    //       condition: {
    //         maxWidth: 500,
    //       },
    //       chartOptions: {
    //         chart: {
    //           height: '100%',
    //         },
    //         title: {
    //           style: {
    //             fontSize: '24px',
    //           },
    //         },
    //         xAxis: {
    //           labels: {
    //             style: {
    //               fontSize: '16px',
    //             },
    //           },
    //         },
    //         yAxis: {
    //           labels: {
    //             style: {
    //               fontSize: '16px',
    //             },
    //           },
    //         },
    //         legend: {
    //           itemStyle: {
    //             fontSize: '16px',
    //           },
    //         },
    //       },
    //     },
    //   ],
    // },
  };

  constructor() {}

  ngAfterViewInit() {
    this.setChartHeight();
    window.addEventListener('resize', this.setChartHeight.bind(this));
  }

  setChartHeight() {
    if (this.chartContainer && this.chartContainer.nativeElement) {
      const cardHeight = this.chartContainer.nativeElement.offsetHeight;
      this.chartOptions.chart.height = cardHeight;
      this.Highcharts.chart('chartContainer', this.chartOptions);
    }
  }
}
