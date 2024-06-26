import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @ViewChild('myGrid') myGrid: jqxGridComponent;
  @ViewChild('myWindow') myWindow: jqxWindowComponent;
  @ViewChild('name', { static: false }) name: jqxInputComponent;
  @ViewChild('address', { static: false }) address: jqxInputComponent;
  @ViewChild('email', { static: false }) email: jqxInputComponent;
  @ViewChild('confirmWindow') confirmWindow: jqxWindowComponent;

  editrow: number = -1;
  deleteRowIndex: number = -1;

  source: any = {
    localdata: [
      {
        name: 'Ahmed Saber',
        address: '123 Free Zone',
        email: 'ahmed.saber@example.com',
      },
      {
        name: 'Mohamed Hany',
        address: '123 Free Zone',
        email: 'Mohamed.Hany@example.com',
      },
      {
        name: 'Sarah Nasser',
        address: '456 Elm Street',
        email: 'sarah.nasser@example.com',
      },
      {
        name: 'Omar Khaled',
        address: '789 Maple Avenue',
        email: 'omar.khaled@example.com',
      },
      {
        name: 'Noura Ahmed',
        address: '101 Pine Lane',
        email: 'noura.ahmed@example.com',
      },
      {
        name: 'Tarek Hassan',
        address: '202 Oak Drive',
        email: 'tarek.hassan@example.com',
      },
      {
        name: 'Layla Mostafa',
        address: '303 Birch Road',
        email: 'layla.mostafa@example.com',
      },
      {
        name: 'Hassan Ali',
        address: '404 Cedar Street',
        email: 'hassan.ali@example.com',
      },
      {
        name: 'Fatima Zayed',
        address: '505 Spruce Avenue',
        email: 'fatima.zayed@example.com',
      },
      {
        name: 'Karim Fouad',
        address: '606 Willow Lane',
        email: 'karim.fouad@example.com',
      },
      {
        name: 'Dina Gamal',
        address: '707 Poplar Drive',
        email: 'dina.gamal@example.com',
      },
      {
        name: 'Youssef Maher',
        address: '808 Fir Street',
        email: 'youssef.maher@example.com',
      },
    ],
    dataFields: [
      { name: 'name', type: 'string' },
      { name: 'address', type: 'string' },
      { name: 'email', type: 'string' },
    ],
    datatype: 'array',
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

  columns: any[] = [
    { text: 'Name', datafield: 'name', align: 'center', width: 200 },
    { text: 'Address', datafield: 'address', align: 'center', width: 250 },
    { text: 'Email', datafield: 'email', width: 300, align: 'center' },
    {
      text: 'Edit',
      datafield: 'Edit',
      align: 'center',
      columntype: 'button',
      columngroup: 'Actions',
      cellsalign: 'center',
      cellsrenderer: (): string => {
        return 'Edit';
      },
      buttonclick: (row: number): void => {
        this.editrow = row;
        let dataRecord = this.myGrid.getrowdata(this.editrow);
        this.name.val(dataRecord.name);
        this.address.val(dataRecord.address);
        this.email.val(dataRecord.email);

        this.myWindow.position({ x: '50%', y: '30%' });
        this.myWindow.open();
      },
    },
    {
      text: 'Delete',
      datefield: 'Delete',
      align: 'center',
      columntype: 'button',
      columngroup: 'Actions',
      cellsalign: 'center',
      cellsrenderer: (): string => {
        return 'Delete';
      },
      buttonclick: (rowIndex: number): void => {
        this.deleteRowIndex = rowIndex;
        this.confirmWindow.position({ x: '50%', y: '30%' });
        this.confirmWindow.open();
        // let rowID = this.myGrid.getrowid(rowIndex);
        // this.myGrid.deleterow(rowID);
      },
    },
  ];

  columngroups: any[] = [
    {
      text: 'Actions',
      align: 'center',
      name: 'Actions',
    },
  ];

  saveBtn(): void {
    if (this.editrow >= 0) {
      let row = {
        name: this.name.val(),
        address: this.address.val(),
        email: this.email.val(),
      };
      let rowID = this.myGrid.getrowid(this.editrow);
      this.myGrid.updaterow(rowID, row);
      this.myWindow.hide();
    }
  }
  cancelBtn(): void {
    this.myWindow.hide();
  }

  cancelDelete(): void {
    this.confirmWindow.hide();
    this.deleteRowIndex = -1;
  }

  confirmDelete(): void {
    if (this.deleteRowIndex >= 0) {
      let rowID = this.myGrid.getrowid(this.deleteRowIndex);
      this.myGrid.deleterow(rowID);
      this.confirmWindow.hide();
    }
  }

  constructor() {}

  ngOnInit(): void {}
}