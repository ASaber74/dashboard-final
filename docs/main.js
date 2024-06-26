(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\asaber\Downloads\dashboard-angular-main\src\main.ts */"zUnb");


/***/ }),

/***/ "2d70":
/*!*****************************************************************************************!*\
  !*** ./src/app/main-section/dashboard/performance-chart/performance-chart.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PerformanceChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceChartComponent", function() { return PerformanceChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/highcharts-more */ "M8aS");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "kAVD");





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_1__);
class PerformanceChartComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                polar: true,
                type: 'area',
                style: {
                    maxHeight: '100%',
                    maxWidth: '100%'
                }
            },
            title: {
                text: 'Performance Evaluation',
                style: {
                    fontWeight: 'bold',
                    fontSize: '28px',
                    textAlign: 'center',
                },
            },
            xAxis: {
                categories: [
                    'Taming',
                    'Accessory',
                    'Development',
                    'Grooming',
                    'Awareness',
                    'Ration',
                ],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
            },
            series: [
                {
                    name: 'Allocated resources',
                    data: [45000, 39000, 60000, 63000, 58000, 93000],
                    pointPlacement: 'on',
                    type: 'area',
                    color: '#434348',
                },
                {
                    name: 'Spent resources',
                    data: [83000, 49000, 42000, 35000, 60000, 90000],
                    pointPlacement: 'on',
                    type: 'area',
                    color: '#FF404E',
                },
            ],
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
                                    minHeight: 'auto',
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
}
PerformanceChartComponent.ɵfac = function PerformanceChartComponent_Factory(t) { return new (t || PerformanceChartComponent)(); };
PerformanceChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerformanceChartComponent, selectors: [["app-performance-chart"]], decls: 2, vars: 2, consts: [[1, "card"], [3, "Highcharts", "options"]], template: function PerformanceChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin: 0px;\n  padding: 10px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2Rhc2hib2FyZC9wZXJmb3JtYW5jZS1jaGFydC9wZXJmb3JtYW5jZS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vZGFzaGJvYXJkL3BlcmZvcm1hbmNlLWNoYXJ0L3BlcmZvcm1hbmNlLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-performance-chart',
                templateUrl: './performance-chart.component.html',
                styleUrls: ['./performance-chart.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Eg1t":
/*!*******************************************************!*\
  !*** ./src/app/main-section/users/users.component.ts ***!
  \*******************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxwindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jqwidgets-ng/jqxwindow */ "5+Ob");
/* harmony import */ var jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jqwidgets-ng/jqxinput */ "FkS9");
/* harmony import */ var jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jqwidgets-ng/jqxbuttons */ "phoR");






const _c0 = ["myGrid"];
const _c1 = ["myWindow"];
const _c2 = ["name"];
const _c3 = ["address"];
const _c4 = ["email"];
const _c5 = ["confirmWindow"];
class UsersComponent {
    constructor() {
        this.editrow = -1;
        this.deleteRowIndex = -1;
        this.source = {
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
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.columns = [
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
                cellsrenderer: () => {
                    return 'Edit';
                },
                buttonclick: (row) => {
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
                cellsrenderer: () => {
                    return 'Delete';
                },
                buttonclick: (rowIndex) => {
                    this.deleteRowIndex = rowIndex;
                    this.confirmWindow.position({ x: '50%', y: '30%' });
                    this.confirmWindow.open();
                    // let rowID = this.myGrid.getrowid(rowIndex);
                    // this.myGrid.deleterow(rowID);
                },
            },
        ];
        this.columngroups = [
            {
                text: 'Actions',
                align: 'center',
                name: 'Actions',
            },
        ];
    }
    getWidth() {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 850;
    }
    saveBtn() {
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
    cancelBtn() {
        this.myWindow.hide();
    }
    cancelDelete() {
        this.confirmWindow.hide();
        this.deleteRowIndex = -1;
    }
    confirmDelete() {
        if (this.deleteRowIndex >= 0) {
            let rowID = this.myGrid.getrowid(this.deleteRowIndex);
            this.myGrid.deleterow(rowID);
            this.confirmWindow.hide();
        }
    }
    ngOnInit() { }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myGrid = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myWindow = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.name = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.address = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confirmWindow = _t.first);
    } }, decls: 45, vars: 31, consts: [["id", "main", 1, "col-sm-offset-3", "col-sm-9"], [1, "jqx-grid", 3, "width", "source", "columns", "autoheight", "pageable", "altrows", "enabletooltips", "editable", "filterable", "selectionmode", "sortable", "columngroups", "columnsresize"], ["myGrid", ""], [3, "width", "height", "resizable", "isModal", "autoOpen", "modalOpacity"], ["myWindow", ""], [2, "overflow", "hidden"], [2, "margin", "0 auto", "margin-top", "1.5rem"], ["align", "right"], ["align", "left"], [3, "width", "height"], ["name", ""], ["address", ""], ["email", ""], ["align", "right", 2, "padding-top", "10px"], [2, "margin-right", "5px", 3, "onClick"], ["confirmWindow", ""], [2, "overflow", "hidden", "text-align", "center"], [2, "margin-right", "5px", "cursor", "pointer", 3, "onClick"], [2, "margin-left", "5px", "cursor", "pointer", 3, "onClick"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "jqxGrid", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "jqxWindow", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "jqxInput", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "jqxInput", 9, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "jqxInput", 9, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "jqxButton", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UsersComponent_Template_jqxButton_onClick_30_listener() { return ctx.saveBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "jqxButton", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UsersComponent_Template_jqxButton_onClick_32_listener() { return ctx.cancelBtn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "jqxWindow", 3, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Confirm Deletion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Are you sure you want to delete this record?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "jqxButton", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UsersComponent_Template_jqxButton_onClick_41_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "jqxButton", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function UsersComponent_Template_jqxButton_onClick_43_listener() { return ctx.cancelDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.getWidth())("source", ctx.dataAdapter)("columns", ctx.columns)("autoheight", true)("pageable", true)("altrows", true)("enabletooltips", true)("editable", true)("filterable", true)("selectionmode", "multiplecellsadvanced")("sortable", true)("columngroups", ctx.columngroups)("columnsresize", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300)("height", 200)("resizable", true)("isModal", false)("autoOpen", false)("modalOpacity", "0.01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150)("height", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150)("height", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 150)("height", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300)("height", 150)("resizable", false)("isModal", true)("autoOpen", false)("modalOpacity", 0.3);
    } }, directives: [jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_1__["jqxGridComponent"], jqwidgets_ng_jqxwindow__WEBPACK_IMPORTED_MODULE_2__["jqxWindowComponent"], jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_3__["jqxInputComponent"], jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_4__["jqxButtonComponent"]], styles: ["#main[_ngcontent-%COMP%] {\n  padding-top: 7.2rem;\n  display: flex;\n  align-items: stretch;\n  flex-flow: row wrap;\n}\n\njqxGrid[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFFbkIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zZWN0aW9uL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFpbiB7XG4gIHBhZGRpbmctdG9wOiA3LjJyZW07XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG59XG5cbmpxeEdyaWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css'],
            }]
    }], function () { return []; }, { myGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myGrid']
        }], myWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myWindow']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['name', { static: false }]
        }], address: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['address', { static: false }]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['email', { static: false }]
        }], confirmWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confirmWindow']
        }] }); })();


/***/ }),

/***/ "JdZZ":
/*!**********************************************************************************************!*\
  !*** ./src/app/main-section/dashboard/ration-stock-chart/pie-charts/pie-charts.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PieChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartsComponent", function() { return PieChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class PieChartsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptionsRecurring = {
            chart: {
                type: 'pie',
            },
            title: {
                text: 'Recurring Analysis',
                style: {
                    fontWeight: 'semi-bold',
                    fontSize: '24px',
                    textAlign: 'center',
                },
                y: 60,
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f} %<br>{point.name}',
                    },
                    innerSize: '60%',
                    minSize: '10%',
                    size: '30%',
                },
            },
            series: [
                {
                    type: 'pie',
                    cursor: 'pointer',
                    data: [
                        {
                            name: 'recurring',
                            y: 42,
                            color: '#7E57C2',
                        },
                        {
                            name: '',
                            y: 58,
                            color: '#EDEDED',
                        },
                    ],
                },
            ],
        };
        this.chartOptionsAware = {
            chart: {
                type: 'pie',
            },
            title: {
                text: 'Aware Analysis',
                style: {
                    fontWeight: 'semi-bold',
                    fontSize: '24px',
                    textAlign: 'center',
                },
                y: 60,
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f} %<br>{point.name}',
                    },
                    innerSize: '60%',
                    minSize: '10%',
                    size: '30%',
                },
            },
            series: [
                {
                    type: 'pie',
                    cursor: 'pointer',
                    data: [
                        {
                            name: 'aware',
                            y: 87,
                            color: '#7E57C2',
                        },
                        {
                            name: '',
                            y: 13,
                            color: '#EDEDED',
                        },
                    ],
                },
            ],
        };
    }
}
PieChartsComponent.ɵfac = function PieChartsComponent_Factory(t) { return new (t || PieChartsComponent)(); };
PieChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PieChartsComponent, selectors: [["app-pie-charts"]], decls: 4, vars: 4, consts: [[1, "card"], [1, "container-pie"], [1, "first-chart", 3, "Highcharts", "options"], [1, "second-chart", 3, "Highcharts", "options"]], template: function PieChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "highcharts-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "highcharts-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptionsRecurring);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptionsAware);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: [".first-chart[_ngcontent-%COMP%] {\n  \n  min-width: 350px;\n  max-height: 350px;\n}\n.second-chart[_ngcontent-%COMP%] {\n  \n  min-width: 350px;\n  max-height: 350px;\n}\n.container-pie[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  \n  overflow: scroll;\n  overflow-y: hidden;\n}\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin: 0px;\n  padding: 10px;\n  background: #fff;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2Rhc2hib2FyZC9yYXRpb24tc3RvY2stY2hhcnQvcGllLWNoYXJ0cy9waWUtY2hhcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9kYXNoYm9hcmQvcmF0aW9uLXN0b2NrLWNoYXJ0L3BpZS1jaGFydHMvcGllLWNoYXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpcnN0LWNoYXJ0IHtcbiAgLyogbWluLXdpZHRoOiAzNTBweDsgKi9cbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG59XG4uc2Vjb25kLWNoYXJ0IHtcbiAgLyogbWluLXdpZHRoOiAzNTBweDsgKi9cbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG59XG5cbi5jb250YWluZXItcGllIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAqL1xuICAvKiBib3JkZXItcmFkaXVzOiA0cHg7ICovXG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pie-charts',
                templateUrl: './pie-charts.component.html',
                styleUrls: ['./pie-charts.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "Pu44":
/*!***************************************************************!*\
  !*** ./src/app/main-section/side-menu/side-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: SideMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenuComponent", function() { return SideMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/audience"]; };
const _c2 = function () { return ["/users"]; };
class SideMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(); };
SideMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["app-side-menu"]], decls: 51, vars: 6, consts: [["id", "side-menu", "data-spy", "affix", "data-offset-top", "0", 1, "col-sm-3", "hidden-xs"], [1, "profile-block"], ["src", "assets/imgs/jon.png", 1, "img-circle"], [1, "profile-title"], [1, "nav", "nav-pills", "nav-stacked"], [1, "transition", 3, "routerLink"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-home"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-user"], ["href", "#finances-opts", "role", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "finances-opts", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-usd"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-menu-left", "pull-right", "transition"], ["id", "finances-opts", 1, "collapse", "list-unstyled"], [1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-time"], [1, "badge", "pull-right"], [1, "nav-divider"], ["href", "#projects-opts", "role", "button", "data-toggle", "collapse", "aria-expanded", "false", "aria-controls", "projects-opts", 1, "transition"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-briefcase"], ["id", "projects-opts", 1, "collapse", "list-unstyled"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jonny Doo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "@jonnydoo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Overview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Audience ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Finances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Incomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Outcomes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Real time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Free ration nation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Cats going crazy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#side-menu[_ngcontent-%COMP%] {\n  background-color: #1b1e24;\n  padding-top: 7.2rem;\n  height: 100%;\n  position: fixed;\n}\n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n}\n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%] {\n  color: #FFF;\n  margin-left: 1rem;\n  font-size: 1.5em;\n  vertical-align: middle;\n}\n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8b91a0;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: #FFF;\n  background-color: inherit;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon.pull-right[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  will-change: transform;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   .glyphicon.pull-right[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background-color: #1ca095;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\n  background-color: #252830;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #2b303b;\n  padding: 1rem;\n  margin-bottom: 0.3rem;\n  border-radius: 0.25em;\n}\n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #434857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL3NpZGUtbWVudS9zaWRlLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTtBQUNaO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFLRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vc2lkZS1tZW51L3NpZGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKnNpZGUgbWVudSovXG4jc2lkZS1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWUyNDtcbiAgcGFkZGluZy10b3A6IDcuMnJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNzaWRlLW1lbnUgLnByb2ZpbGUtYmxvY2sgPiAqIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jc2lkZS1tZW51IC5wcm9maWxlLWJsb2NrIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4jc2lkZS1tZW51IC5wcm9maWxlLXRpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4jc2lkZS1tZW51IC5wcm9maWxlLXRpdGxlIHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiNzaWRlLW1lbnUgdWwubmF2IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuI3NpZGUtbWVudSB1bC5uYXYgYSB7XG4gIGNvbG9yOiAjOGI5MWEwO1xufVxuXG4jc2lkZS1tZW51IHVsLm5hdiBhOmhvdmVyLFxuI3NpZGUtbWVudSB1bC5uYXYgYTpmb2N1cyB7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4jc2lkZS1tZW51IHVsLm5hdiBhIC5nbHlwaGljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcbn1cblxuI3NpZGUtbWVudSB1bC5uYXYgYSAuZ2x5cGhpY29uLnB1bGwtcmlnaHQge1xuICBtYXJnaW4tdG9wOiAwLjJyZW07XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG5cbiNzaWRlLW1lbnUgdWwubmF2IGE6Zm9jdXMgLmdseXBoaWNvbi5wdWxsLXJpZ2h0IHtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4jc2lkZS1tZW51IHVsLm5hdiBhIC5iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxY2EwOTU7XG59XG5cbiNzaWRlLW1lbnUgdWwubmF2IC5uYXYtZGl2aWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7XG59XG5cbiNzaWRlLW1lbnUgdWwubmF2IHVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuI3NpZGUtbWVudSB1bC5uYXYgdWwgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMDNiO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbn1cblxuI3NpZGUtbWVudSB1bC5uYXYgdWwgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDg1Nztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-side-menu',
                templateUrl: './side-menu.component.html',
                styleUrls: ['./side-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QMEu":
/*!*************************************************************!*\
  !*** ./src/app/main-section/audience/audience.component.ts ***!
  \*************************************************************/
/*! exports provided: AudienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudienceComponent", function() { return AudienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ "etx8");



const _c0 = ["content"];
class AudienceComponent {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.content.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    }
    onScroll() {
        var _a, _b;
        const el = this.content.nativeElement;
        const sections = el.querySelectorAll('div[id]');
        let activeSectionId = null;
        sections.forEach((section, index) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;
            const sectionId = section.getAttribute('id');
            if (index === sections.length - 1) {
                if (el.scrollTop > sectionTop - 50) {
                    activeSectionId = sectionId;
                }
            }
            else {
                if (el.scrollTop >= sectionTop &&
                    el.scrollTop < sectionTop + sectionHeight) {
                    activeSectionId = sectionId;
                }
            }
        });
        if (activeSectionId) {
            document.querySelectorAll('.nav-stacked li').forEach((li) => {
                li.classList.remove('active');
            });
            (_b = (_a = document
                .querySelector(`a[href="#${activeSectionId}"]`)) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.add('active');
        }
    }
    scrollToSection(event, sectionId) {
        event.preventDefault();
        const element = this.el.nativeElement.querySelector(`#${sectionId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
AudienceComponent.ɵfac = function AudienceComponent_Factory(t) { return new (t || AudienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AudienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AudienceComponent, selectors: [["app-audience"]], viewQuery: function AudienceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 35, vars: 0, consts: [["id", "main", 1, "col-sm-offset-3", "col-sm-9"], ["id", "carousel-notification", "data-ride", "carousel", 1, "carousel", "slide"], [1, "card"], [1, "card-block"], [1, "row"], ["id", "content-spy", 1, "col-sm-3"], [1, "nav", "nav-pills", "nav-stacked"], ["role", "presentation", 1, "active"], ["href", "#lorem", 3, "click"], ["role", "presentation"], ["href", "#eros", 3, "click"], ["href", "#vestibulum", 3, "click"], ["id", "content", 1, "col-sm-9"], ["content", ""], ["id", "lorem"], ["id", "eros"], ["id", "vestibulum"], ["src", "assets/imgs/jon.png", 1, "img-responsive"]], template: function AudienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudienceComponent_Template_a_click_9_listener($event) { return ctx.scrollToSection($event, "lorem"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudienceComponent_Template_a_click_12_listener($event) { return ctx.scrollToSection($event, "eros"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "The Eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudienceComponent_Template_a_click_15_listener($event) { return ctx.scrollToSection($event, "vestibulum"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The Vestibulum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The Lorem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit enim eu sodales feugiat. In dignissim ultrices lectus et feugiat. Mauris interdum massa quis enim faucibus, id suscipit urna egestas. Cras nibh urna, blandit mattis auctor sed, tristique sed urna. Donec sed enim dignissim, volutpat tellus eget, semper mauris. Praesent eu congue risus. Curabitur euismod, eros in placerat commodo, dolor quam sagittis elit, convallis mollis lorem leo vitae odio. Integer sagittis urna sed tellus commodo consectetur. Sed molestie malesuada risus id ultricies. Fusce gravida hendrerit felis, quis cursus odio elementum sit amet. Integer efficitur velit at mauris convallis cursus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "The Eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Curabitur eget pharetra risus, ac bibendum magna. Pellentesque dapibus ipsum a metus feugiat, ac rutrum quam pretium. Morbi scelerisque, elit in tincidunt vehicula, sem nulla condimentum dui, vitae sollicitudin tellus ligula ut justo. Proin consequat at velit sed lacinia. Nunc ac tellus molestie, consequat odio vel, tristique felis. Aliquam porttitor, justo ac aliquet vehicula, erat quam dictum est, nec facilisis mi ligula ut purus. Donec viverra mauris metus, aliquet porta quam vulputate quis. Sed bibendum tortor tortor, et malesuada lectus faucibus at. Proin lectus elit, congue eu dapibus ac, maximus commodo nunc. Vestibulum nunc augue, scelerisque sed augue at, viverra pellentesque magna. In non mauris id justo vehicula congue ultrices at ante. Nulla in ipsum diam. Nam in lacus ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "The Vestibulum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Integer eleifend consectetur est, et hendrerit arcu consequat sed. Sed lacus elit, ornare in turpis at, laoreet suscipit turpis. Vivamus scelerisque metus a sem feugiat consectetur. Nam tempus quis metus eget ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae sagittis nulla, sed porttitor leo. Duis rutrum nisi sed ex tristique euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu risus sodales, faucibus ex et, pellentesque eros. Aenean eleifend lorem a tincidunt euismod. Suspendisse tempus vel justo id vestibulum. Sed sed dui sollicitudin, condimentum ante iaculis, eleifend nulla. Etiam leo lectus, dignissim et luctus in, dignissim ac quam. Nunc sagittis viverra hendrerit. Donec vulputate, ante ac ultricies ullamcorper, urna purus bibendum lectus, in egestas nisi tellus non justo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["#content[_ngcontent-%COMP%] {\n  height: 30em;\n  overflow: auto;\n}\n#side-menu[_ngcontent-%COMP%]{\n  z-index: 999999999999999999999999;\n}\n.navbar-header[_ngcontent-%COMP%]{\n  z-index: 999999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2F1ZGllbmNlL2F1ZGllbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9hdWRpZW5jZS9hdWRpZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyphdWRpZW5jZS5odG1sKi9cbiNjb250ZW50IHtcbiAgaGVpZ2h0OiAzMGVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbiNzaWRlLW1lbnV7XG4gIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTtcbn1cbi5uYXZiYXItaGVhZGVye1xuICB6LWluZGV4OiA5OTk5OTk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-audience',
                templateUrl: './audience.component.html',
                styleUrls: ['./audience.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content', { static: false }]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-section/main-section.component */ "dUOj");




class AppComponent {
    constructor() {
        this.title = 'dashboard-task';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-section");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__["MainSectionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TtYr":
/*!*****************************************************************************!*\
  !*** ./src/app/main-section/dashboard/quick-stats/quick-stats.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuickStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickStatsComponent", function() { return QuickStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class QuickStatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
QuickStatsComponent.ɵfac = function QuickStatsComponent_Factory(t) { return new (t || QuickStatsComponent)(); };
QuickStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuickStatsComponent, selectors: [["app-quick-stats"]], decls: 34, vars: 0, consts: [["id", "quick-info", 1, "card"], [1, "card-block"], [1, "quick-stats"]], template: function QuickStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quick stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Today:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "78");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This month:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "459");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "All time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "54k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bounce rate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "81.08%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Session duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "00:01:41");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New session:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "63.86%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 0.25em;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n  background-color: #fff;\n  flex-grow: 5;\n  margin: 0;\n  min-height: 375px;\n}\n\n.card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  color: #252830;\n}\n\n.card-block[_ngcontent-%COMP%] {\n  padding: 2rem;\n  padding-top: 4rem;\n}\n\n.card-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #252830;\n}\n\n#quick-info[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  line-height: 3rem;\n  border-bottom: 0.1rem solid #e5e9ec;\n}\n\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n\n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 300;\n  float: right;\n  color: #8b91a0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2Rhc2hib2FyZC9xdWljay1zdGF0cy9xdWljay1zdGF0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwyQ0FBMkM7RUFDM0Msc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9kYXNoYm9hcmQvcXVpY2stc3RhdHMvcXVpY2stc3RhdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZsZXgtZ3JvdzogNTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAzNzVweDtcbn1cblxuLmNhcmQgKiB7XG4gIGNvbG9yOiAjMjUyODMwO1xufVxuXG4uY2FyZC1ibG9jayB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuXG4uY2FyZC1ibG9jayBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6ICMyNTI4MzA7XG59XG4jcXVpY2staW5mbyAuY2FyZC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNxdWljay1pbmZvIC5xdWljay1zdGF0cyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTVlOWVjO1xufVxuXG4jcXVpY2staW5mbyAucXVpY2stc3RhdHMgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI3F1aWNrLWluZm8gLnF1aWNrLXN0YXRzIHNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjOGI5MWEwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuickStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-quick-stats',
                templateUrl: './quick-stats.component.html',
                styleUrls: ['./quick-stats.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "UiJ8":
/*!*******************************************************************************************!*\
  !*** ./src/app/main-section/dashboard/ration-stock-chart/ration-stock-chart.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RationStockChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RationStockChartComponent", function() { return RationStockChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




const _c0 = ["chartContainer"];
class RationStockChartComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
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
            ],
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
                                    minHeight: 'auto',
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
    }
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
RationStockChartComponent.ɵfac = function RationStockChartComponent_Factory(t) { return new (t || RationStockChartComponent)(); };
RationStockChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RationStockChartComponent, selectors: [["app-ration-stock-chart"]], viewQuery: function RationStockChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chartContainer = _t.first);
    } }, decls: 3, vars: 2, consts: [[1, "card"], ["chartContainer", ""], [3, "Highcharts", "options"]], template: function RationStockChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "highcharts-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin: 0px;\n  padding: 10px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nhighcharts-chart[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2Rhc2hib2FyZC9yYXRpb24tc3RvY2stY2hhcnQvcmF0aW9uLXN0b2NrLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vZGFzaGJvYXJkL3JhdGlvbi1zdG9jay1jaGFydC9yYXRpb24tc3RvY2stY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGlnaGNoYXJ0cy1jaGFydCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RationStockChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ration-stock-chart',
                templateUrl: './ration-stock-chart.component.html',
                styleUrls: ['./ration-stock-chart.component.css'],
            }]
    }], function () { return []; }, { chartContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['chartContainer', { static: true }]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-section/main-section.component */ "dUOj");
/* harmony import */ var _main_section_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-section/side-menu/side-menu.component */ "Pu44");
/* harmony import */ var _main_section_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-section/dashboard/dashboard.component */ "cVhu");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _main_section_audience_audience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-section/audience/audience.component */ "QMEu");
/* harmony import */ var _main_section_audience_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-section/audience/carousel/carousel.component */ "etx8");
/* harmony import */ var _main_section_dashboard_ration_stock_chart_pie_charts_pie_charts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-section/dashboard/ration-stock-chart/pie-charts/pie-charts.component */ "JdZZ");
/* harmony import */ var _main_section_dashboard_daily_usage_chart_daily_usage_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-section/dashboard/daily-usage-chart/daily-usage-chart.component */ "ZQBh");
/* harmony import */ var _main_section_dashboard_performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-section/dashboard/performance-chart/performance-chart.component */ "2d70");
/* harmony import */ var _main_section_dashboard_ration_stock_chart_ration_stock_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main-section/dashboard/ration-stock-chart/ration-stock-chart.component */ "UiJ8");
/* harmony import */ var _main_section_dashboard_real_time_real_time_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-section/dashboard/real-time/real-time.component */ "gkLt");
/* harmony import */ var _main_section_dashboard_quick_stats_quick_stats_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main-section/dashboard/quick-stats/quick-stats.component */ "TtYr");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _main_section_users_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-section/users/users.component */ "Eg1t");
/* harmony import */ var jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! jqwidgets-ng/jqxgrid */ "aSZe");
/* harmony import */ var jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jqwidgets-ng/jqxbuttons */ "phoR");
/* harmony import */ var jqwidgets_ng_jqxnumberinput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! jqwidgets-ng/jqxnumberinput */ "kgVY");
/* harmony import */ var jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! jqwidgets-ng/jqxinput */ "FkS9");
/* harmony import */ var jqwidgets_ng_jqxwindow__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! jqwidgets-ng/jqxwindow */ "5+Ob");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
            angular_gridster2__WEBPACK_IMPORTED_MODULE_11__["GridsterModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_20__["HighchartsChartModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_22__["jqxGridModule"],
            jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_23__["jqxButtonModule"],
            jqwidgets_ng_jqxnumberinput__WEBPACK_IMPORTED_MODULE_24__["jqxNumberInputModule"],
            jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_25__["jqxInputModule"],
            jqwidgets_ng_jqxwindow__WEBPACK_IMPORTED_MODULE_26__["jqxWindowModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
        _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_7__["MainSectionComponent"],
        _main_section_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__["SideMenuComponent"],
        _main_section_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _main_section_audience_audience_component__WEBPACK_IMPORTED_MODULE_12__["AudienceComponent"],
        _main_section_audience_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"],
        _main_section_dashboard_ration_stock_chart_pie_charts_pie_charts_component__WEBPACK_IMPORTED_MODULE_14__["PieChartsComponent"],
        _main_section_dashboard_daily_usage_chart_daily_usage_chart_component__WEBPACK_IMPORTED_MODULE_15__["DailyUsageChartComponent"],
        _main_section_dashboard_performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_16__["PerformanceChartComponent"],
        _main_section_dashboard_ration_stock_chart_ration_stock_chart_component__WEBPACK_IMPORTED_MODULE_17__["RationStockChartComponent"],
        _main_section_dashboard_real_time_real_time_component__WEBPACK_IMPORTED_MODULE_18__["RealTimeComponent"],
        _main_section_dashboard_quick_stats_quick_stats_component__WEBPACK_IMPORTED_MODULE_19__["QuickStatsComponent"],
        _main_section_users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"], angular_gridster2__WEBPACK_IMPORTED_MODULE_11__["GridsterModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_20__["HighchartsChartModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_22__["jqxGridModule"],
        jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_23__["jqxButtonModule"],
        jqwidgets_ng_jqxnumberinput__WEBPACK_IMPORTED_MODULE_24__["jqxNumberInputModule"],
        jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_25__["jqxInputModule"],
        jqwidgets_ng_jqxwindow__WEBPACK_IMPORTED_MODULE_26__["jqxWindowModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                    _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_7__["MainSectionComponent"],
                    _main_section_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_8__["SideMenuComponent"],
                    _main_section_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _main_section_audience_audience_component__WEBPACK_IMPORTED_MODULE_12__["AudienceComponent"],
                    _main_section_audience_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_13__["CarouselComponent"],
                    _main_section_dashboard_ration_stock_chart_pie_charts_pie_charts_component__WEBPACK_IMPORTED_MODULE_14__["PieChartsComponent"],
                    _main_section_dashboard_daily_usage_chart_daily_usage_chart_component__WEBPACK_IMPORTED_MODULE_15__["DailyUsageChartComponent"],
                    _main_section_dashboard_performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_16__["PerformanceChartComponent"],
                    _main_section_dashboard_ration_stock_chart_ration_stock_chart_component__WEBPACK_IMPORTED_MODULE_17__["RationStockChartComponent"],
                    _main_section_dashboard_real_time_real_time_component__WEBPACK_IMPORTED_MODULE_18__["RealTimeComponent"],
                    _main_section_dashboard_quick_stats_quick_stats_component__WEBPACK_IMPORTED_MODULE_19__["QuickStatsComponent"],
                    _main_section_users_users_component__WEBPACK_IMPORTED_MODULE_21__["UsersComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"].forRoot(),
                    angular_gridster2__WEBPACK_IMPORTED_MODULE_11__["GridsterModule"],
                    highcharts_angular__WEBPACK_IMPORTED_MODULE_20__["HighchartsChartModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    jqwidgets_ng_jqxgrid__WEBPACK_IMPORTED_MODULE_22__["jqxGridModule"],
                    jqwidgets_ng_jqxbuttons__WEBPACK_IMPORTED_MODULE_23__["jqxButtonModule"],
                    jqwidgets_ng_jqxnumberinput__WEBPACK_IMPORTED_MODULE_24__["jqxNumberInputModule"],
                    jqwidgets_ng_jqxinput__WEBPACK_IMPORTED_MODULE_25__["jqxInputModule"],
                    jqwidgets_ng_jqxwindow__WEBPACK_IMPORTED_MODULE_26__["jqxWindowModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZQBh":
/*!*****************************************************************************************!*\
  !*** ./src/app/main-section/dashboard/daily-usage-chart/daily-usage-chart.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DailyUsageChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailyUsageChartComponent", function() { return DailyUsageChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




class DailyUsageChartComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
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
                    minSize: '10%',
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
                                    minHeight: 'auto',
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
}
DailyUsageChartComponent.ɵfac = function DailyUsageChartComponent_Factory(t) { return new (t || DailyUsageChartComponent)(); };
DailyUsageChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailyUsageChartComponent, selectors: [["app-daily-usage-chart"]], decls: 2, vars: 2, consts: [[1, "card"], [3, "Highcharts", "options"]], template: function DailyUsageChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "highcharts-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin: 0px;\n  padding: 10px;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2Rhc2hib2FyZC9kYWlseS11c2FnZS1jaGFydC9kYWlseS11c2FnZS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vZGFzaGJvYXJkL2RhaWx5LXVzYWdlLWNoYXJ0L2RhaWx5LXVzYWdlLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailyUsageChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daily-usage-chart',
                templateUrl: './daily-usage-chart.component.html',
                styleUrls: ['./daily-usage-chart.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "cVhu":
/*!***************************************************************!*\
  !*** ./src/app/main-section/dashboard/dashboard.component.ts ***!
  \***************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gridster2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gridster2 */ "Ljk9");
/* harmony import */ var _ration_stock_chart_pie_charts_pie_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ration-stock-chart/pie-charts/pie-charts.component */ "JdZZ");
/* harmony import */ var _quick_stats_quick_stats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quick-stats/quick-stats.component */ "TtYr");
/* harmony import */ var _performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance-chart/performance-chart.component */ "2d70");
/* harmony import */ var _ration_stock_chart_ration_stock_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ration-stock-chart/ration-stock-chart.component */ "UiJ8");
/* harmony import */ var _real_time_real_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./real-time/real-time.component */ "gkLt");
/* harmony import */ var _daily_usage_chart_daily_usage_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./daily-usage-chart/daily-usage-chart.component */ "ZQBh");










const _c0 = function () { return { x: 0, y: 0, rows: 5, cols: 7 }; };
const _c1 = function () { return { x: 7, y: 0, rows: 5, cols: 6 }; };
const _c2 = function () { return { x: 0, y: 4, rows: 5, cols: 7 }; };
const _c3 = function () { return { x: 7, y: 4, rows: 5, cols: 6 }; };
const _c4 = function () { return { x: 0, y: 7, rows: 4, cols: 7 }; };
const _c5 = function () { return { x: 7, y: 7, rows: 4, cols: 6 }; };
class DashboardComponent {
    constructor() {
        this.options = {
            gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridType"].ScrollVertical,
            compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["CompactType"].None,
            displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["DisplayGrid"].OnDragAndResize,
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
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 14, vars: 13, consts: [["id", "main", 1, "col-sm-offset-3", "col-sm-9"], [1, "gridster", 3, "options"], [1, "pie-charts", 3, "item"], [1, "app-quick", 3, "item"], [1, "app-performance", 3, "item"], [1, "app-ration", 3, "item"], [1, "app-real", 3, "item"], [1, "app-daily", 3, "item"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "gridster", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "gridster-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-pie-charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "gridster-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-quick-stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "gridster-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-performance-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "gridster-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-ration-stock-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "gridster-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-real-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "gridster-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-daily-usage-chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
    } }, directives: [angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterComponent"], angular_gridster2__WEBPACK_IMPORTED_MODULE_1__["GridsterItemComponent"], _ration_stock_chart_pie_charts_pie_charts_component__WEBPACK_IMPORTED_MODULE_2__["PieChartsComponent"], _quick_stats_quick_stats_component__WEBPACK_IMPORTED_MODULE_3__["QuickStatsComponent"], _performance_chart_performance_chart_component__WEBPACK_IMPORTED_MODULE_4__["PerformanceChartComponent"], _ration_stock_chart_ration_stock_chart_component__WEBPACK_IMPORTED_MODULE_5__["RationStockChartComponent"], _real_time_real_time_component__WEBPACK_IMPORTED_MODULE_6__["RealTimeComponent"], _daily_usage_chart_daily_usage_chart_component__WEBPACK_IMPORTED_MODULE_7__["DailyUsageChartComponent"]], styles: ["\n#main {\n  padding-top: 7.2rem;\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  flex-flow: row wrap;\n  gap: 10px;\n}\n\n.gridster {\n  width: 100vw;\n  height: 100vh;\n  background-color: transparent;\n}\n\n.gridster::-webkit-scrollbar{\n  display: none;\n}\n\n.gridster gridster-item {\n  background-color: transparent;\n  height: auto;\n}\n\n.gridster.mobile .pie-charts {\n  height: 375px !important;\n}\n\n.gridster.mobile .app-quick {\n  height: 315px !important;\n}\n\n.gridster.mobile .app-performance {\n  height: 430px !important;\n}\n\n.gridster.mobile .app-ration {\n  height: 425px !important;\n}\n\n.gridster.mobile .app-real {\n  height: 300px  !important;\n  /* height: 295px !important; */\n}\n\n.gridster.mobile .app-daily {\n  height: 325px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQkFBbUI7RUFFbkIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jbWFpbiB7XG4gIHBhZGRpbmctdG9wOiA3LjJyZW07XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZ3JpZHN0ZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmdyaWRzdGVyOjotd2Via2l0LXNjcm9sbGJhcntcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmdyaWRzdGVyIGdyaWRzdGVyLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZ3JpZHN0ZXIubW9iaWxlIC5waWUtY2hhcnRzIHtcbiAgaGVpZ2h0OiAzNzVweCAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZHN0ZXIubW9iaWxlIC5hcHAtcXVpY2sge1xuICBoZWlnaHQ6IDMxNXB4ICFpbXBvcnRhbnQ7XG59XG4uZ3JpZHN0ZXIubW9iaWxlIC5hcHAtcGVyZm9ybWFuY2Uge1xuICBoZWlnaHQ6IDQzMHB4ICFpbXBvcnRhbnQ7XG59XG4uZ3JpZHN0ZXIubW9iaWxlIC5hcHAtcmF0aW9uIHtcbiAgaGVpZ2h0OiA0MjVweCAhaW1wb3J0YW50O1xufVxuLmdyaWRzdGVyLm1vYmlsZSAuYXBwLXJlYWwge1xuICBoZWlnaHQ6IDMwMHB4ICAhaW1wb3J0YW50O1xuICAvKiBoZWlnaHQ6IDI5NXB4ICFpbXBvcnRhbnQ7ICovXG59XG4uZ3JpZHN0ZXIubW9iaWxlIC5hcHAtZGFpbHkge1xuICBoZWlnaHQ6IDMyNXB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dUOj":
/*!********************************************************!*\
  !*** ./src/app/main-section/main-section.component.ts ***!
  \********************************************************/
/*! exports provided: MainSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionComponent", function() { return MainSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-menu/side-menu.component */ "Pu44");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MainSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainSectionComponent.ɵfac = function MainSectionComponent_Factory(t) { return new (t || MainSectionComponent)(); };
MainSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSectionComponent, selectors: [["app-main-section"]], decls: 4, vars: 0, consts: [[1, "container-fluid"], [1, "row"]], template: function MainSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__["SideMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#main[_ngcontent-%COMP%] {\n  padding-top: 7.2rem;\n  display: flex;\n  align-items: stretch;\n  flex-flow: row wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL21haW4tc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBRW5CLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1zZWN0aW9uL21haW4tc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xuICBwYWRkaW5nLXRvcDogNy4ycmVtO1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-section',
                templateUrl: './main-section.component.html',
                styleUrls: ['./main-section.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "etx8":
/*!**********************************************************************!*\
  !*** ./src/app/main-section/audience/carousel/carousel.component.ts ***!
  \**********************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "LYaK");



class CarouselComponent {
    constructor() { }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 35, vars: 0, consts: [["role", "listbox", 1, "carousel-inner"], ["src", "assets/imgs/doge.jpg", "alt", "first slide", 2, "display", "block", "width", "512px"], [1, "carousel-caption", "d-none", "d-md-block"], ["src", "assets/imgs/cat.jpg", "alt", "second slide", 2, "display", "block", "width", "512px"], ["src", "assets/imgs/laika.jpg", "alt", "third slide", 2, "display", "block", "width", "512px"], [1, "carousel-indicators"], ["data-target", "#carousel-notification", "data-slide-to", "0", 1, "active"], ["data-target", "#carousel-notification", "data-slide-to", "1"], ["data-target", "#carousel-notification", "data-slide-to", "2"], ["href", "#carousel-notification", "role", "button", "data-slide", "prev", 1, "left", "carousel-control"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-chevron-left"], [1, "sr-only"], ["href", "#carousel-notification", "role", "button", "data-slide", "next", 1, "right", "carousel-control"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-chevron-right"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Doge said:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What are you doing? So scare. It's alright now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Crazy cat said:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I will never forgive you...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Laika said:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hey! How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tc2VjdGlvbi9hdWRpZW5jZS9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gkLt":
/*!*************************************************************************!*\
  !*** ./src/app/main-section/dashboard/real-time/real-time.component.ts ***!
  \*************************************************************************/
/*! exports provided: RealTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTimeComponent", function() { return RealTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RealTimeComponent {
    constructor() { }
    ngOnInit() {
    }
}
RealTimeComponent.ɵfac = function RealTimeComponent_Factory(t) { return new (t || RealTimeComponent)(); };
RealTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RealTimeComponent, selectors: [["app-real-time"]], decls: 29, vars: 0, consts: [["id", "real-time", 1, "card"], [1, "card-block"], [1, "list-unstyled"], [1, "label", "label-warning", "pull-right"], [1, "badge", "ok", "pull-right"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-ok"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-success", 2, "width", "25%"], [1, "sr-only"], ["role", "progressbar", "aria-valuenow", "38", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-warning", "progress-bar-striped", "active", 2, "width", "38%"], ["role", "progressbar", "aria-valuenow", "5", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-danger", 2, "width", "5%"], [1, "pull-right"]], template: function RealTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Real time information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Active dogs: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "255");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Silo status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Usage level: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "25%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "38% alocated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "5% reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Free space: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 32% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  margin: 0px;\n  padding: 10px;\n  background: #fff;\n  flex-grow: 5;\n  \n}\n\n.card-block[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 100%;\n  height: auto;\n  display: block;\n}\n\n\n\n#real-time[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 300;\n  border-bottom: 0.1rem solid #e5e9ec;\n  padding: 0.5rem 0;\n}\n\n#real-time[_ngcontent-%COMP%]   .badge.ok[_ngcontent-%COMP%] {\n  background-color: #1bc98e;\n}\n\n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  line-height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1zZWN0aW9uL2Rhc2hib2FyZC9yZWFsLXRpbWUvcmVhbC10aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWjs7cUJBRW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQSxZQUFZOztBQUNaO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluLXNlY3Rpb24vZGFzaGJvYXJkL3JlYWwtdGltZS9yZWFsLXRpbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZmxleC1ncm93OiA1O1xuICAvKiBtaW4td2lkdGg6IDM1MHB4O1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDsgKi9cbn1cblxuLmNhcmQtYmxvY2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qcmVhbCB0aW1lKi9cbiNyZWFsLXRpbWUgbGkge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlNWU5ZWM7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xufVxuXG4jcmVhbC10aW1lIC5iYWRnZS5vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYmM5OGU7XG59XG5cbiNyZWFsLXRpbWUgLmJhZGdlIHNwYW4sXG4jcmVhbC10aW1lIC5sYWJlbCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jcmVhbC10aW1lIC5iYWRnZSxcbiNyZWFsLXRpbWUgLmxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-real-time',
                templateUrl: './real-time.component.html',
                styleUrls: ['./real-time.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return ["/audience"]; };
class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 104, vars: 6, consts: [[1, "loading"], [1, "navbar", "navbar-fixed-top"], [1, "container-fluid"], [1, "row"], [1, "col-sm-3", "top-left-menu"], [1, "navbar-header"], ["routerLinkActive", "active", 1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#nav-menu", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], [1, "sr-only"], [1, "icon-bar"], ["href", "#", "id", "search-icon", "data-toggle", "tooltip", "data-placement", "bottom", "data-delay", "500", "title", "Display search bar", 1, "header-buttons", "pull-right", "visible-xs"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-search"], ["href", "#", "data-toggle", "tooltip", "data-placement", "bottom", "data-delay", "500", "title", "Refresh data", 1, "header-buttons", "pull-right"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-repeat"], ["id", "search", "role", "search", 1, "col-sm-3"], [1, "input-group"], ["type", "text", "placeholder", "Search...", 1, "form-control", "transition"], ["id", "nav-menu", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["id", "btn-notifications", 1, "btn-group"], [1, "badge"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle"], ["id", "notification-list", 1, "dropdown-menu", "pull-right"], ["href", "#"], ["src", "assets/imgs/laika.jpg", 1, "img-circle"], [1, "notification-message"], [1, "since"], ["src", "assets/imgs/cat.jpg", 1, "img-circle"], ["src", "assets/imgs/doge.jpg", 1, "img-circle"], ["routerLinkActive", "active", 1, "visible-xs"], [3, "routerLink"], [1, "visible-xs"], ["role", "separator", 1, "divider", "visible-xs"], ["id", "nav-profile", 1, "btn-group", "pull-right", "hidden-xs"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-link", "dropdown-toggle", "thumbnail"], ["src", "assets/imgs/jon.png", 1, "img-circle"], [1, "dropdown-menu"], ["href", "settings.html"], ["role", "separator", 1, "divider"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Toggle navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Laika");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Hey! How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "2h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Devil cat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "I will never forgive you...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "6h ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Doge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "What are you doing? So scare. It's alright now.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "em", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Finances");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Realtime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Audience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    position: relative;\n    height: 100%;\n    background-color: #e5e9ec;\n  }\n \n\n \nnav.navbar-fixed-top[_ngcontent-%COMP%] {\n    background-color: #FFF;\n    border: none;\n  }\n \nnav[_ngcontent-%COMP%]   .top-left-menu[_ngcontent-%COMP%] {\n    background-color: #252830;\n    display: flex;\n    align-items: center;\n  }\n \n.navbar-brand[_ngcontent-%COMP%] {\n    height: auto;\n    z-index: 99999999999999;\n  }\n \n.navbar-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0;\n    font-size: 1.5em;\n    font-weight: 300;\n    color: #FFF;\n    z-index: 99999999999999;\n  }\n \nnav[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%] {\n    margin-left: auto;\n    color: #FFF;\n  }\n \n\n \n.navbar-toggle[_ngcontent-%COMP%] {\n    border-color: #252830;\n    background-color: #e5e9ec;\n    margin-top: 13px\n  }\n \n.navbar-toggle[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\n    background-color: #252830;\n  }\n \n\n \nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%] {\n    padding: 0.9em;\n  }\n \nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n \nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    border-radius: 0.25em;\n    border: none;\n    width: 70%;\n    padding-left: 1.9em;\n    background-color: #F3F3F3;\n    box-shadow: none;\n  }\n \nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    width: 100%;\n    box-shadow: none;\n  }\n \nnav[_ngcontent-%COMP%]   form#search[_ngcontent-%COMP%]   .glyphicon-search[_ngcontent-%COMP%] {\n    z-index: 99;\n    left: 1.7em;\n  }\n \n\n \nnav[_ngcontent-%COMP%]   #nav-menu[_ngcontent-%COMP%] {\n    padding: 0.4em;\n    padding-right: 1em;\n  }\n \n\n \n#nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\n    color: #FFF;\n    background-color: #f35958;\n    font-size: 0.7em;\n    padding: 0.3rem 0.55rem 0.3rem 0.5rem;\n    position: absolute;\n    right: -0.4rem;\n    top: 1rem;\n    z-index: 99;\n  }\n \n#btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%], #nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding-top: 1.5rem;\n    color: #252830;\n    font-weight: 500;\n  }\n \n#btn-notifications[_ngcontent-%COMP%]   .btn-link[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n  }\n \n#notification-list[_ngcontent-%COMP%] {\n    max-height: 20em;\n    overflow: auto;\n  }\n \n#notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    opacity: 0.7;\n    margin: 1.5rem;\n    border-radius: 0.5rem;\n    padding: 0.5rem 1.3rem;\n    background-color: #EFEFEF;\n    position: relative;\n  }\n \n#notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #262626;\n    text-decoration: none;\n    opacity: 1;\n  }\n \n#notification-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: 35px;\n    width: 35px;\n    margin-right: 1em;\n    margin-top: 1em;\n  }\n \n#notification-list[_ngcontent-%COMP%]   .notification-message[_ngcontent-%COMP%] {\n    display: inline-block;\n    white-space: normal;\n    min-width: 25rem;\n  }\n \n#notification-list[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]:empty {\n    display: inline-block;\n    position: absolute;\n    right: 0.5rem;\n    top: 0.5rem;\n    background-color: #f35958;\n    height: 1.4rem;\n  }\n \n#notification-list[_ngcontent-%COMP%]   em.since[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n    color: #646C82;\n  }\n \n\n \n#nav-profile[_ngcontent-%COMP%] {\n    margin: 0.5em;\n    margin-left: 1em;\n    float: right;\n  }\n \n#nav-profile[_ngcontent-%COMP%]   button.thumbnail[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n \n#nav-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 2.3em;\n  }\n \n\n \n#side-menu[_ngcontent-%COMP%] {\n    background-color: #1b1e24;\n    padding-top: 7.2rem;\n    height: 100%;\n    position: fixed;\n  }\n \n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n \n#side-menu[_ngcontent-%COMP%]   .profile-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n \n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%] {\n    color: #FFF;\n    margin-left: 1rem;\n    font-size: 1.5em;\n    vertical-align: middle;\n  }\n \n#side-menu[_ngcontent-%COMP%]   .profile-title[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: block;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #8b91a0;\n    cursor: pointer;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n    color: #FFF;\n    background-color: inherit;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%] {\n    margin-right: 0.7rem;\n    cursor: pointer;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glyphicon.pull-right[_ngcontent-%COMP%] {\n    margin-top: 0.2rem;\n    will-change: transform;\n    cursor: pointer;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus   .glyphicon.pull-right[_ngcontent-%COMP%] {\n    transform: rotate(-90deg);\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    background-color: #1ca095;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   .nav-divider[_ngcontent-%COMP%] {\n    background-color: #252830;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-left: 10%;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    background-color: #2b303b;\n    padding: 1rem;\n    margin-bottom: 0.3rem;\n    border-radius: 0.25em;\n  }\n \n#side-menu[_ngcontent-%COMP%]   ul.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: none;\n    background-color: #434857;\n  }\n \n\n \n#main[_ngcontent-%COMP%] {\n    padding-top: 7.2rem;\n    display: flex;\n    align-items: stretch;\n    flex-flow: row wrap;\n  }\n \n.card[_ngcontent-%COMP%] {\n    position: relative;\n    border-radius: 0.25em;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n    background-color: #FFF;\n    margin: 1.25rem;\n    flex-grow: 5;\n  }\n \n.card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    color: #252830;\n  }\n \n.card-block[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n \n.card-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-bottom: 1.5rem;\n    color: #252830;\n  }\n \n\n \n.round-chart[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n  }\n \n.round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\n    float: right;\n  }\n \n.round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 3em;\n    font-weight: 100;\n    line-height: 1.7rem;\n    width: 12rem;\n    height: 4.4rem;\n    text-align: center;\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n \n.round-chart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    font-weight: 400;\n  }\n \n\n \n#quick-info[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n \n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 3rem;\n    border-bottom: 0.1rem solid #e5e9ec;\n  }\n \n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-weight: 300;\n  }\n \n#quick-info[_ngcontent-%COMP%]   .quick-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 300;\n    float: right;\n    color: #8b91a0;\n  }\n \n\n \n#performance-eval[_ngcontent-%COMP%]   .spider-chart[_ngcontent-%COMP%] {\n    position: relative;\n    height: 264px;\n  }\n \n.highcharts-container[_ngcontent-%COMP%], .highcharts-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    overflow: visible !important;\n    margin: auto;\n  }\n \n\n \n#ration-stock[_ngcontent-%COMP%]   .stacked-area[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n \n#ration-stock[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%] {\n    font-weight: 300;\n    color: #8b91a0;\n    padding: 0.5rem 0;\n  }\n \n#ration-stock[_ngcontent-%COMP%]   .switchery[_ngcontent-%COMP%] {\n    float: right;\n  }\n \n\n \n#real-time[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    font-weight: 300;\n    border-bottom: 0.1rem solid #e5e9ec;\n    padding: 0.5rem 0;\n  }\n \n#real-time[_ngcontent-%COMP%]   .badge.ok[_ngcontent-%COMP%] {\n    background-color: #1bc98e;\n  }\n \n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    color: #FFF;\n  }\n \n#real-time[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], #real-time[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    margin-top: 0.25rem;\n  }\n \n\n \n#daily-usage[_ngcontent-%COMP%]   .area-chart[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n \n\n \n#nav-menu[_ngcontent-%COMP%] {\n    float: right;\n  }\n \n#nav-menu.navbar-collapse[_ngcontent-%COMP%] {\n    max-height: 39rem;\n  }\n \n#nav-menu[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    height: 0.1rem;\n    margin: 0.9rem 0;\n    overflow: hidden;\n    background-color: #e5e5e5;\n  }\n \n@media(max-width:48em){\n    #nav-menu[_ngcontent-%COMP%] {\n      float: none;\n    }\n \n    form#search[_ngcontent-%COMP%] {\n      display: none;\n    }\n \n    .round-chart[_ngcontent-%COMP%], .round-chart[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n      display: block;\n      margin: auto;\n    }\n \n    .round-chart[_ngcontent-%COMP%]    + .round-chart[_ngcontent-%COMP%] {\n      margin-top: 2rem;\n      float: none;\n    }\n \n    #notification-list[_ngcontent-%COMP%] {\n      margin: 1.25rem;\n      margin-left: 2rem;\n      background-color: #e5e9ec;\n    }\n \n    #notification-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      background-color: #FFF;\n      opacity: 1;\n    }\n \n    #btn-notifications[_ngcontent-%COMP%], #btn-notifications[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n      width: 100%;\n      text-align: left;\n    }\n \n    #nav-menu[_ngcontent-%COMP%]   #btn-notifications[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\n      right: inherit;\n      left: 10rem;\n    }\n  }\n \n\n \n#content[_ngcontent-%COMP%] {\n    height: 30em;\n    overflow: auto;\n  }\n \n#side-menu[_ngcontent-%COMP%]{\n    z-index: 999999999999999999999999;\n  }\n \n.navbar-header[_ngcontent-%COMP%]{\n    z-index: 999999;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTs7QUFFVjtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztBQUVBLG9CQUFvQjs7QUFDcEI7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztBQUVBO0lBQ0UseUJBQXlCO0lBRXpCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztBQUVBO0lBQ0UsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0FBRUEsYUFBYTs7QUFDYjtJQUNFLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekI7RUFDRjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUVFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiOztBQUVBLFdBQVc7O0FBQ1g7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUVBLDZCQUE2Qjs7QUFDN0I7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsV0FBVztFQUNiOztBQUVBOztJQUVFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0FBRUE7SUFFRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7QUFFQSxjQUFjOztBQUNkO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFNBQVM7RUFDWDs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQSxZQUFZOztBQUNaO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7O0FBRUE7SUFLRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQjs7QUFFQSxlQUFlOztBQUNmO0lBQ0UsbUJBQW1CO0lBRW5CLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0Msc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsU0FBUztJQUNULHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztBQUVBLGNBQWM7O0FBQ2Q7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztBQUVBLGFBQWE7O0FBQ2I7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQ0FBbUM7RUFDckM7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0FBRUE7O0lBRUUsNEJBQTRCO0lBQzVCLFlBQVk7RUFDZDs7QUFFQSxlQUFlOztBQUNmO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUEsWUFBWTs7QUFDWjtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTs7SUFFRSxXQUFXO0VBQ2I7O0FBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCOztBQUVBLGNBQWM7O0FBQ2Q7SUFDRSxhQUFhO0VBQ2Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsV0FBVztJQUNiOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBOztNQUVFLGNBQWM7TUFDZCxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsV0FBVztJQUNiOztJQUVBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsVUFBVTtJQUNaOztJQUVBOztNQUVFLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxjQUFjO01BQ2QsV0FBVztJQUNiO0VBQ0Y7O0FBRUEsZ0JBQWdCOztBQUNoQjtJQUNFLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsaUNBQWlDO0VBQ25DOztBQUNBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypsb2FkaW5nKi9cbiBcbmh0bWwsIGJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcbiAgfVxuIFxuICAvKm5hdiB0b3AgbGVmdCBtZW51Ki9cbiAgbmF2Lm5hdmJhci1maXhlZC10b3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gXG4gIG5hdiAudG9wLWxlZnQtbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1MjgzMDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTtcbiAgfVxuIFxuICAubmF2YmFyLWJyYW5kIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIHotaW5kZXg6IDk5OTk5OTk5OTk5OTk5O1xuICB9XG4gXG4gIG5hdiAuaGVhZGVyLWJ1dHRvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGNvbG9yOiAjRkZGO1xuICB9XG4gXG4gIC8qbmFnIHRvZ2dsZSovXG4gIC5uYXZiYXItdG9nZ2xlIHtcbiAgICBib3JkZXItY29sb3I6ICMyNTI4MzA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcbiAgICBtYXJnaW4tdG9wOiAxM3B4XG4gIH1cbiBcbiAgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjUyODMwO1xuICB9XG4gXG4gIC8qbmF2IHNlYXJjaCBmb3JtKi9cbiAgbmF2IGZvcm0jc2VhcmNoIHtcbiAgICBwYWRkaW5nOiAwLjllbTtcbiAgfVxuIFxuICBuYXYgZm9ybSNzZWFyY2ggLmlucHV0LWdyb3VwIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gXG4gIG5hdiBmb3JtI3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogNzAlO1xuICAgIHBhZGRpbmctbGVmdDogMS45ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gXG4gIG5hdiBmb3JtI3NlYXJjaCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuIFxuICBuYXYgZm9ybSNzZWFyY2ggLmdseXBoaWNvbi1zZWFyY2gge1xuICAgIHotaW5kZXg6IDk5O1xuICAgIGxlZnQ6IDEuN2VtO1xuICB9XG4gXG4gIC8qbmF2IG1lbnUqL1xuICBuYXYgI25hdi1tZW51IHtcbiAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gIH1cbiBcbiAgLypuYXYgbWVudSBhbmQgbm90aWZpY2F0aW9ucyovXG4gICNuYXYtbWVudSAjYnRuLW5vdGlmaWNhdGlvbnMgPiAuYmFkZ2Uge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzU5NTg7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC41NXJlbSAwLjNyZW0gMC41cmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTAuNHJlbTtcbiAgICB0b3A6IDFyZW07XG4gICAgei1pbmRleDogOTk7XG4gIH1cbiBcbiAgI2J0bi1ub3RpZmljYXRpb25zIC5idG4tbGluayxcbiAgI25hdi1tZW51IGxpIGEge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gICAgY29sb3I6ICMyNTI4MzA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuIFxuICAjYnRuLW5vdGlmaWNhdGlvbnMgLmJ0bi1saW5rOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiBcbiAgI25vdGlmaWNhdGlvbi1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiAyMGVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gXG4gICNub3RpZmljYXRpb24tbGlzdCBhIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgbWFyZ2luOiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiBcbiAgI25vdGlmaWNhdGlvbi1saXN0IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMjYyNjI2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gXG4gICNub3RpZmljYXRpb24tbGlzdCBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG4gXG4gICNub3RpZmljYXRpb24tbGlzdCAubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG1pbi13aWR0aDogMjVyZW07XG4gIH1cbiBcbiAgI25vdGlmaWNhdGlvbi1saXN0IC5iYWRnZTplbXB0eSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMC41cmVtO1xuICAgIHRvcDogMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMzU5NTg7XG4gICAgaGVpZ2h0OiAxLjRyZW07XG4gIH1cbiBcbiAgI25vdGlmaWNhdGlvbi1saXN0IGVtLnNpbmNlIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGNvbG9yOiAjNjQ2QzgyO1xuICB9XG4gXG4gIC8qbmF2IG9wdGlvbnMqL1xuICAjbmF2LXByb2ZpbGUge1xuICAgIG1hcmdpbjogMC41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiBcbiAgI25hdi1wcm9maWxlIGJ1dHRvbi50aHVtYm5haWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgfVxuIFxuICAjbmF2LXByb2ZpbGUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAyLjNlbTtcbiAgfVxuIFxuICAvKnNpZGUgbWVudSovXG4gICNzaWRlLW1lbnUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFlMjQ7XG4gICAgcGFkZGluZy10b3A6IDcuMnJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gXG4gICNzaWRlLW1lbnUgLnByb2ZpbGUtYmxvY2sgPiAqIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiBcbiAgI3NpZGUtbWVudSAucHJvZmlsZS1ibG9jayBpbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICB9XG4gXG4gICNzaWRlLW1lbnUgLnByb2ZpbGUtdGl0bGUge1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuIFxuICAjc2lkZS1tZW51IC5wcm9maWxlLXRpdGxlIHNtYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuIFxuICAjc2lkZS1tZW51IHVsLm5hdiB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgfVxuIFxuICAjc2lkZS1tZW51IHVsLm5hdiBhIHtcbiAgICBjb2xvcjogIzhiOTFhMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiBcbiAgI3NpZGUtbWVudSB1bC5uYXYgYTpob3ZlcixcbiAgI3NpZGUtbWVudSB1bC5uYXYgYTpmb2N1cyB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuIFxuICAjc2lkZS1tZW51IHVsLm5hdiBhIC5nbHlwaGljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMC43cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuIFxuICAjc2lkZS1tZW51IHVsLm5hdiBhIC5nbHlwaGljb24ucHVsbC1yaWdodCB7XG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gXG4gICNzaWRlLW1lbnUgdWwubmF2IGE6Zm9jdXMgLmdseXBoaWNvbi5wdWxsLXJpZ2h0IHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgfVxuIFxuICAjc2lkZS1tZW51IHVsLm5hdiBhIC5iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjYTA5NTtcbiAgfVxuIFxuICAjc2lkZS1tZW51IHVsLm5hdiAubmF2LWRpdmlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNTI4MzA7XG4gIH1cbiBcbiAgI3NpZGUtbWVudSB1bC5uYXYgdWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIH1cbiBcbiAgI3NpZGUtbWVudSB1bC5uYXYgdWwgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzAzYjtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIH1cbiBcbiAgI3NpZGUtbWVudSB1bC5uYXYgdWwgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQ4NTc7XG4gIH1cbiBcbiAgLyptYWluIGNvbnRlbnQqL1xuICAjbWFpbiB7XG4gICAgcGFkZGluZy10b3A6IDcuMnJlbTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICB9XG4gXG4gIC5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4zNyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICBtYXJnaW46IDEuMjVyZW07XG4gICAgZmxleC1ncm93OiA1O1xuICB9XG4gXG4gIC5jYXJkICoge1xuICAgIGNvbG9yOiAjMjUyODMwO1xuICB9XG4gXG4gIC5jYXJkLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICB9XG4gXG4gIC5jYXJkLWJsb2NrIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGNvbG9yOiAjMjUyODMwO1xuICB9XG4gXG4gIC8qcm91bmQgY2hhcnQqL1xuICAucm91bmQtY2hhcnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiBcbiAgLnJvdW5kLWNoYXJ0ICsgLnJvdW5kLWNoYXJ0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiBcbiAgLnJvdW5kLWNoYXJ0IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcbiAgICB3aWR0aDogMTJyZW07XG4gICAgaGVpZ2h0OiA0LjRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gXG4gIC5yb3VuZC1jaGFydCBzcGFuID4gc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gXG4gIC8qcXVpY2sgaW5mbyovXG4gICNxdWljay1pbmZvIC5jYXJkLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiBcbiAgI3F1aWNrLWluZm8gLnF1aWNrLXN0YXRzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkICNlNWU5ZWM7XG4gIH1cbiBcbiAgI3F1aWNrLWluZm8gLnF1aWNrLXN0YXRzIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuIFxuICAjcXVpY2staW5mbyAucXVpY2stc3RhdHMgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM4YjkxYTA7XG4gIH1cbiBcbiAgLypwZXJmb3JtYW5jZSBldmFsdWF0aW9uKi9cbiAgI3BlcmZvcm1hbmNlLWV2YWwgLnNwaWRlci1jaGFydCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjY0cHg7XG4gIH1cbiBcbiAgLmhpZ2hjaGFydHMtY29udGFpbmVyLFxuICAuaGlnaGNoYXJ0cy1jb250YWluZXIgc3ZnIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuIFxuICAvKnJhdGlvbiBzdG9jayovXG4gICNyYXRpb24tc3RvY2sgLnN0YWNrZWQtYXJlYSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuIFxuICAjcmF0aW9uLXN0b2NrIC5zd2l0Y2gge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM4YjkxYTA7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gIH1cbiBcbiAgI3JhdGlvbi1zdG9jayAuc3dpdGNoZXJ5IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiBcbiAgLypyZWFsIHRpbWUqL1xuICAjcmVhbC10aW1lIGxpIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCAjZTVlOWVjO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICB9XG4gXG4gICNyZWFsLXRpbWUgLmJhZGdlLm9rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJjOThlO1xuICB9XG4gXG4gICNyZWFsLXRpbWUgLmJhZGdlIHNwYW4sXG4gICNyZWFsLXRpbWUgLmxhYmVsIHtcbiAgICBjb2xvcjogI0ZGRjtcbiAgfVxuIFxuICAjcmVhbC10aW1lIC5iYWRnZSxcbiAgI3JlYWwtdGltZSAubGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIH1cbiBcbiAgLypkYWlseSB1c2FnZSovXG4gICNkYWlseS11c2FnZSAuYXJlYS1jaGFydCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuIFxuICAvKmZpeGluZyBtb2JpbGUqL1xuICAjbmF2LW1lbnUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuIFxuICAjbmF2LW1lbnUubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBtYXgtaGVpZ2h0OiAzOXJlbTtcbiAgfVxuIFxuICAjbmF2LW1lbnUgLmRpdmlkZXIge1xuICAgIGhlaWdodDogMC4xcmVtO1xuICAgIG1hcmdpbjogMC45cmVtIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICB9XG4gXG4gIEBtZWRpYShtYXgtd2lkdGg6NDhlbSl7XG4gICAgI25hdi1tZW51IHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiBcbiAgICBmb3JtI3NlYXJjaCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiBcbiAgICAucm91bmQtY2hhcnQsXG4gICAgLnJvdW5kLWNoYXJ0IGNhbnZhcyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gXG4gICAgLnJvdW5kLWNoYXJ0ICsgLnJvdW5kLWNoYXJ0IHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gXG4gICAgI25vdGlmaWNhdGlvbi1saXN0IHtcbiAgICAgIG1hcmdpbjogMS4yNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTllYztcbiAgICB9XG4gXG4gICAgI25vdGlmaWNhdGlvbi1saXN0IGEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuIFxuICAgICNidG4tbm90aWZpY2F0aW9ucyxcbiAgICAjYnRuLW5vdGlmaWNhdGlvbnMgPiBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiBcbiAgICAjbmF2LW1lbnUgI2J0bi1ub3RpZmljYXRpb25zID4gLmJhZGdlIHtcbiAgICAgIHJpZ2h0OiBpbmhlcml0O1xuICAgICAgbGVmdDogMTByZW07XG4gICAgfVxuICB9XG4gXG4gIC8qYXVkaWVuY2UuaHRtbCovXG4gICNjb250ZW50IHtcbiAgICBoZWlnaHQ6IDMwZW07XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgI3NpZGUtbWVudXtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk7XG4gIH1cbiAgLm5hdmJhci1oZWFkZXJ7XG4gICAgei1pbmRleDogOTk5OTk5O1xuICB9XG4gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_section_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-section/dashboard/dashboard.component */ "cVhu");
/* harmony import */ var _main_section_audience_audience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-section/audience/audience.component */ "QMEu");
/* harmony import */ var _main_section_users_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-section/users/users.component */ "Eg1t");







const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _main_section_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'audience', component: _main_section_audience_audience_component__WEBPACK_IMPORTED_MODULE_3__["AudienceComponent"] },
    { path: 'users', component: _main_section_users_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map