import { Component, ViewEncapsulation } from '@angular/core';
import {
  CompactType,
  DisplayGrid,
  GridType,
  GridsterConfig,
  GridsterItem,
} from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() {
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      displayGrid: DisplayGrid.OnDragAndResize,
      scrollVertical: true,
      margin: 5,
      // minCols: 13,
      // minRows: 10,
      // minItemRows: 3,
      // minItemCols: 6,
      mobileBreakpoint: 768,
      pushItems: true,
      swap: true,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
    };
  }
}
