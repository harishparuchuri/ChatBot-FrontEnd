(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ProGrad\Project\PizzaBot\src\main.ts */"zUnb");


/***/ }),

/***/ "AwSQ":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
        this.DataUrl = "https://backendchatbot.herokuapp.com/message";
        this.UserUrl = "https://backendchatbot.herokuapp.com/user";
        this.OrderUrl = "https://backendchatbot.herokuapp.com/order";
        this.OptionUrl = "https://backendchatbot.herokuapp.com/options";
        this.Order = "https://backendchatbot.herokuapp.com/order";
    }
    getData() {
        return this.http.get(this.DataUrl);
    }
    getOptions() {
        return this.http.get(this.OptionUrl);
    }
    getOrders() {
        return this.http.get(this.Order);
    }
    getOrderStatus(id) {
        return this.http.get(`${this.OrderUrl}/${id}`);
    }
    putOrderStatus(id, data) {
        const obj = { OrderStatus: data };
        return this.http.put(`${this.OrderUrl}/${id}`, obj);
    }
    postOrder(OrderId, itemName, OrderDescription, Price, UserEmailId, OrderStatus) {
        const obj = { OrderId: OrderId,
            itemName: itemName,
            OrderDescription: OrderDescription,
            Price: Price,
            UserEmailId: UserEmailId,
            OrderStatus: OrderStatus
        };
        return this.http.post(`${this.OrderUrl}`, obj);
    }
    postuser(name, Email, PhoneNo) {
        const obj = {
            name: name,
            Email: Email,
            PhoneNo: PhoneNo
        };
        return this.http.post(`${this.UserUrl}`, obj);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "K2Yx":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-order/display-order.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayOrderComponent", function() { return DisplayOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/data.service */ "AwSQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DisplayOrderComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayOrderComponent_tr_38_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const order_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.Update(order_r3.OrderId, order_r3.itemName, order_r3.OrderStatus); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.OrderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.Price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.UserEmailId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r3.OrderStatus);
} }
class DisplayOrderComponent {
    constructor(Apimessage) {
        this.Apimessage = Apimessage;
        this.OrderDetails = [];
    }
    ngOnInit() {
        this.GetOrderApi();
    }
    GetOrderApi() {
        this.Apimessage.getOrders().subscribe((data) => {
            this.OrderDetails = data;
            // console.log(data);
        });
    }
    Update(id, name, status) {
        var table = document.getElementsByClassName('details')[0];
        var form = document.getElementsByClassName('form')[0];
        let oid = document.getElementById('orderid');
        let oname = document.getElementById('itemname');
        let ostatus = document.getElementById('OrderStatus');
        oid.value = String(id);
        oname.value = name;
        ostatus.value = status;
        // console.log("id=",id);
        // console.log("name",name);
        // console.log("status ",status);
        table.classList.add('tablehide');
        form.classList.remove('formhide');
    }
    Submit() {
        var table = document.getElementsByClassName('details')[0];
        var form = document.getElementsByClassName('form')[0];
        table.classList.remove('tablehide');
        form.classList.add('formhide');
        // console.log("submited");
    }
    UpdateStatus(id, data) {
        this.Apimessage.putOrderStatus(id, data).subscribe((ele) => {
            this.GetOrderApi();
            console.log(data);
        });
        console.log(id, " ", data);
    }
}
DisplayOrderComponent.ɵfac = function DisplayOrderComponent_Factory(t) { return new (t || DisplayOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
DisplayOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayOrderComponent, selectors: [["app-display-order"]], decls: 39, vars: 1, consts: [[1, "heading"], [1, "form", "formhide"], ["for", "fname"], ["type", "text", "id", "orderid", "disabled", ""], ["orderid", ""], ["for", "lname"], ["type", "text", "id", "itemname", "disabled", ""], ["for", "OrderStatus"], ["type", "text", "id", "OrderStatus", "name", "OrderStatus"], ["orderstatus", ""], [1, "submit"], ["id", "submit", 3, "click"], [1, "details"], [4, "ngFor", "ngForOf"], [1, "data"], [1, "button"], ["id", "btn", 3, "click"]], template: function DisplayOrderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Item Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayOrderComponent_Template_button_click_19_listener() { return ctx.Submit(); })("click", function DisplayOrderComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.UpdateStatus(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OrderId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "itemName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "UserEmailId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "OrderStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DisplayOrderComponent_tr_38_Template, 14, 5, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.OrderDetails);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".heading[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    background-color: #6AB04A;\r\n    padding: 2px;\r\n    color: #e4d0d0;\r\n    \r\n\r\n    \r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n    border-collapse: collapse;\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-radius: 5px 5px 0 0;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 20px rgba(0,0,0,0.15);\r\n}\r\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n    background-color: #009879;\r\n    color: #ffffff;\r\n    text-align: left;\r\n    font-weight: bold;\r\n    font-size: 25px;\r\n    \r\n}\r\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\r\n    padding: 12px 15px;\r\n    border-right: 2px solid #e4d0d0;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #dddddd;\r\n    \r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even){\r\n    background-color: #f3f3f3;\r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type{\r\n    border-bottom: 2px solid #009879;\r\n    \r\n}\r\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{\r\n    background-color: #009826;\r\n    color: #dddddd;\r\n    \r\n}\r\n#btn[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30px;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    background:#E44236;\r\n    font-size: 20px;\r\n    border-radius: 5px;\r\n}\r\n#btn[_ngcontent-%COMP%]:hover{\r\n    background-color:#2475B0;\r\n    transform: translateY(0px) scale(1.1);\r\n  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.3);\r\n  z-index: 1;\r\n    \r\n}\r\n#btn[_ngcontent-%COMP%]:focus{\r\n    outline :none;\r\n}\r\n.form[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin: 10px auto 50px auto;\r\n    background-color: #2ecc72;\r\n    padding: 25px;\r\n    \r\n    border-radius: 5px 5px 0 0;\r\n    overflow: hidden;\r\n    box-shadow: 0 0 20px rgba(0,0,0,0.15);\r\n    \r\n\r\n}\r\n.form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-size: 30px;\r\n    color: #E71C23;\r\n}\r\n#submit[_ngcontent-%COMP%]{\r\n   \r\n    border: none;\r\n    padding: 5px;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    background:#E44236;\r\n    font-size: 20px;\r\n    border-radius: 5px;\r\n    margin: 10px;\r\n}\r\n.submit[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 8px;\r\n    \r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    font-size: 18px;\r\n    color:#ffffff;\r\n    background-color: #4C4B4B;\r\n  }\r\nlabel[_ngcontent-%COMP%]{\r\n      font-size: 20px;\r\n      color: #4C4B4B;\r\n      height: 50px;\r\n  }\r\ninput[type=submit][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus{\r\n    outline :none;\r\n  }\r\n.tablehide[_ngcontent-%COMP%]{\r\n      display: none;\r\n  }\r\n.formhide[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LW9yZGVyL2Rpc3BsYXktb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7Ozs7QUFJbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZ0NBQWdDOztBQUVwQztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxnQ0FBZ0M7O0FBRXBDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYzs7QUFFbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixxQ0FBcUM7RUFDdkMsNENBQTRDO0VBQzVDLFVBQVU7O0FBRVo7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixxQ0FBcUM7OztBQUd6QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7RUFDM0I7QUFDQTtNQUNJLGVBQWU7TUFDZixjQUFjO01BQ2QsWUFBWTtFQUNoQjtBQUNFO0lBQ0EsYUFBYTtFQUNmO0FBQ0E7TUFDSSxhQUFhO0VBQ2pCO0FBQ0E7SUFDRSxhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rpc3BsYXktb3JkZXIvZGlzcGxheS1vcmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkFCMDRBO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgY29sb3I6ICNlNGQwZDA7XHJcbiAgICBcclxuXHJcbiAgICBcclxufVxyXG50YWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxufVxyXG50YWJsZSB0aGVhZCB0cntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4Nzk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIFxyXG59XHJcbnRoLHRke1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2U0ZDBkMDtcclxufVxyXG50Ym9keSB0cntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgXHJcbn1cclxuXHJcbnRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxufVxyXG5cclxudGJvZHkgdHI6bGFzdC1vZi10eXBle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDk4Nzk7XHJcbiAgICBcclxufVxyXG50Ym9keSB0cjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4MjY7XHJcbiAgICBjb2xvcjogI2RkZGRkZDtcclxuICAgIFxyXG59XHJcblxyXG4jYnRue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6I0U0NDIzNjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4jYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjQ3NUIwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgc2NhbGUoMS4xKTtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB6LWluZGV4OiAxO1xyXG4gICAgXHJcbn1cclxuI2J0bjpmb2N1c3tcclxuICAgIG91dGxpbmUgOm5vbmU7XHJcbn1cclxuLmZvcm17XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gNTBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MjtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIFxyXG5cclxufVxyXG4uZm9ybSBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjRTcxQzIzO1xyXG59XHJcbiNzdWJtaXR7XHJcbiAgIFxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiNFNDQyMzY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgLyogbWFyZ2luOiA4cHggMDsgKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNEM0QjRCO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gICAgaW5wdXRbdHlwZT1zdWJtaXRdOmZvY3VzLGlucHV0W3R5cGU9dGV4dF06Zm9jdXMsc2VsZWN0OmZvY3Vze1xyXG4gICAgb3V0bGluZSA6bm9uZTtcclxuICB9XHJcbiAgLnRhYmxlaGlkZXtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmZvcm1oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-order',
                templateUrl: './display-order.component.html',
                styleUrls: ['./display-order.component.css']
            }]
    }], function () { return [{ type: _service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "Llem":
/*!*************************************************!*\
  !*** ./src/app/components/bot/bot.component.ts ***!
  \*************************************************/
/*! exports provided: BotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotComponent", function() { return BotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data.service */ "AwSQ");




class BotComponent {
    constructor(Apimessage) {
        this.Apimessage = Apimessage;
        this.MessageData = [];
        this.OptionData = [];
        this.OrderData = {
            Username: '',
            PhoneNumber: '',
            Email: '',
            Quantity: '',
            Address: '',
            OrderId: '',
            OrderName: '',
            OrderDescription: '',
            Price: '',
            OrderStatus: ''
        };
        this.ResponceData = [];
        this.sleep = function (ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        };
    }
    // Scroll to Bottom Message's
    ngAfterViewInit() {
        this.container = document.getElementById('chatcontainer');
        this.container.scrollTop = this.container.scrollHeight;
    }
    ngOnInit() {
        this.OptionsApi();
        this.DataApi();
    }
    // Get Message Data from DB
    DataApi() {
        this.Apimessage.getData().subscribe((data) => {
            this.MessageData = data;
            console.log(data);
            this.BotMessage(1);
        });
    }
    OptionsApi() {
        this.Apimessage.getOptions().subscribe((option) => {
            this.OptionData = option;
            console.log(this.OptionData);
        });
    }
    // Display Bot Message in view
    BotMessage(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (id == 1) {
                this.ResponceData = [];
            }
            var msg = this.MessageData[id - 1].text;
            var chatask = document.createElement('div');
            chatask.classList.add('chat-response');
            chatask.classList.add('activated');
            chatask.innerHTML = msg;
            document.getElementById('chatcontainer').appendChild(chatask);
            // Wait to display Options
            this.ngAfterViewInit();
            // await this.sleep(1500);
            this.ngAfterViewInit();
            this.BotOptions(id);
            this.ngAfterViewInit();
        });
    }
    BotMsgText(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var chatask = document.createElement('div');
            chatask.classList.add('chat-response');
            chatask.classList.add('activated');
            chatask.innerHTML = data;
            yield this.sleep(1500);
            document.getElementById('chatcontainer').appendChild(chatask);
            this.ngAfterViewInit();
        });
    }
    removetext() {
        document.getElementById('message').value = '';
    }
    UserMessage(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var chatres = document.createElement('div');
            chatres.classList.add('chat-ask');
            chatres.classList.add('activated');
            if (data == '') {
                chatres.innerHTML = 'please enter your responce';
            }
            else
                chatres.innerHTML = data;
            document.getElementById('chatcontainer').appendChild(chatres);
            this.GetDate("dateuser");
            this.ngAfterViewInit();
        });
    }
    BotOptions(id) {
        const choices = document.createElement('div');
        choices.classList.add('choices');
        this.OptionData.forEach((options) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (options.mid == id) {
                if (options.choice == 'NO') {
                    console.log(options.next);
                    // this.GetDate("datebot");
                    yield this.sleep(1500);
                    this.ngAfterViewInit();
                    this.BotMessage(options.next);
                }
                else if (options.choice == 'INFO') {
                    // this.GetDate("datebot");
                    var disptype = document.getElementsByClassName('chat-type')[0];
                    disptype.classList.remove('show-type');
                    // this.UserData(options.id);
                    if (options.id == 2) {
                        let HandleEvent = 0;
                        var Aoption = document.getElementById('message');
                        Aoption.addEventListener('change', (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            e.stopPropagation();
                            // console.log(Aoption);
                            if (HandleEvent == 0) {
                                // console.log(Aoption.value);
                                var id = parseInt(Aoption.value);
                                this.Apimessage.getOrderStatus(id).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    console.log(data);
                                    let size = data.length;
                                    if (data.length != 0) {
                                        // await this.sleep(1500);
                                        this.hideinput();
                                        this.ngAfterViewInit();
                                        this.BotMsgText(data[0].OrderStatus);
                                        this.ngAfterViewInit();
                                        yield this.sleep(5000);
                                        this.BotMessage(1);
                                    }
                                    else {
                                        this.BotMsgText(`There is No Order Placed With This --> ${id} ID`);
                                        this.ngAfterViewInit();
                                        yield this.sleep(1500);
                                        this.BotMessage(2);
                                    }
                                }));
                                HandleEvent++;
                            }
                        }), false);
                        yield this.sleep(1500);
                    }
                    else if (options.id == 12) {
                        let HandleEvent = 0;
                        var Aoption = document.getElementById('message');
                        Aoption.addEventListener('change', (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            e.stopPropagation();
                            // console.log(Aoption);
                            if (HandleEvent == 0) {
                                // console.log(Aoption.value);
                                let regexpNumber = new RegExp(/[0-9]+/);
                                if (regexpNumber.test(Aoption.value)) {
                                    this.OrderData.Quantity = Aoption.value;
                                    yield this.sleep(1500);
                                    this.hideinput();
                                    this.BotMessage(options.next);
                                }
                                else {
                                    yield this.sleep(1500);
                                    this.UserMessage("Invalid Quantity");
                                    yield this.sleep(1500);
                                    this.BotMessage(6);
                                    // await this.sleep(1500);
                                }
                            }
                            HandleEvent++;
                        }));
                    }
                    else if (options.id == 14) {
                        let HandleEvent = 0;
                        var Aoption = document.getElementById('message');
                        Aoption.addEventListener('change', (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            e.stopPropagation();
                            // console.log(Aoption);
                            if (HandleEvent == 0) {
                                // console.log(Aoption.value);
                                let regexpNumber = new RegExp(/[a-zA-Z_ ]/);
                                if (regexpNumber.test(Aoption.value)) {
                                    this.OrderData.Username = Aoption.value;
                                    yield this.sleep(1500);
                                    this.BotMessage(options.next);
                                }
                                else {
                                    yield this.sleep(1500);
                                    this.UserMessage("Invalid Name");
                                    yield this.sleep(1500);
                                    this.BotMessage(8);
                                    // await this.sleep(1500);
                                }
                            }
                            HandleEvent++;
                        }));
                    }
                    else if (options.id == 15) {
                        let HandleEvent = 0;
                        var Aoption = document.getElementById('message');
                        Aoption.addEventListener('change', (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            e.stopPropagation();
                            // console.log(Aoption);
                            if (HandleEvent == 0) {
                                // console.log(Aoption.value);
                                let regexpNumber = new RegExp(/^\d{10}$/);
                                // console.log(regexpNumber.test(Aoption.value));
                                if (regexpNumber.test(Aoption.value)) {
                                    this.OrderData.PhoneNumber = Aoption.value;
                                    yield this.sleep(1500);
                                    this.BotMessage(options.next);
                                }
                                else {
                                    yield this.sleep(1500);
                                    this.UserMessage("Invalid Phone Number");
                                    yield this.sleep(1500);
                                    this.BotMessage(9);
                                }
                            }
                            HandleEvent++;
                        }));
                    }
                    else if (options.id == 16) {
                        let HandleEvent = 0;
                        var Aoption = document.getElementById('message');
                        Aoption.addEventListener('change', (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            e.stopPropagation();
                            // console.log(Aoption);
                            if (HandleEvent == 0) {
                                // console.log(Aoption.value);
                                let regexpNumber = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
                                if (regexpNumber.test(Aoption.value)) {
                                    this.OrderData.Email = Aoption.value;
                                    yield this.sleep(1500);
                                    this.BotMessage(options.next);
                                }
                                else {
                                    yield this.sleep(1500);
                                    this.UserMessage("Invalid Email ID");
                                    yield this.sleep(1500);
                                    this.BotMessage(10);
                                }
                            }
                            HandleEvent++;
                        }));
                    }
                    else if (options.id == 17) {
                        let HandleEvent = 0;
                        var Aoption = document.getElementById('message');
                        Aoption.addEventListener('change', (e) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            e.stopPropagation();
                            // console.log(Aoption);
                            if (HandleEvent == 0) {
                                // console.log(Aoption.value);
                                this.OrderData.Address = Aoption.value;
                                this.InsertUser();
                                this.PlaceOrder();
                                yield this.sleep(1500);
                                this.BotMessage(options.next);
                            }
                            HandleEvent++;
                        }));
                    }
                    else {
                        this.BotMessage(options.next);
                    }
                }
                else {
                    var option = document.createElement('button');
                    option.classList.add('choice');
                    option.classList.add('activated');
                    option.innerHTML = options.choice;
                    option.dataset.next = options.next;
                    // console.log(option.dataset.next);
                    option.addEventListener('click', () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        // console.log("data",option.dataset.next);
                        let OD = option.innerText;
                        if (OD != 'OrderPizza' && OD != 'Track Order') {
                            this.ResponceData.push(option.innerText);
                            console.log(option.innerText);
                        }
                        var val = parseInt(option.dataset.next);
                        var a = document.getElementsByClassName('choices');
                        choices.classList.add('hideoption');
                        // await this.sleep(1500);
                        this.UserMessage(option.innerHTML);
                        yield this.sleep(1500);
                        this.BotMessage(val);
                    }));
                    // this.sleep(1500);
                    choices.appendChild(option);
                }
                document.getElementById('chatcontainer').appendChild(choices);
            }
        }));
        this.GetDate("datebot");
    }
    // Clear Input Field Data
    hideinput() {
        var disptype = document.getElementsByClassName('chat-type')[0];
        disptype.classList.add('show-type');
    }
    // post User Data to DataBase
    InsertUser() {
        this.Apimessage.postuser(this.OrderData.Username, this.OrderData.Email, this.OrderData.PhoneNumber).subscribe((data) => {
            console.log(data);
        });
    }
    // Place Order and Insert Data to DB
    PlaceOrder() {
        this.OrderData.OrderId = Math.floor(Math.random() * (9 * (Math.pow(10, 5)))) + (Math.pow(10, 5));
        this.OrderData.OrderName = this.ResponceData[0];
        this.OrderData.OrderDescription = `your ${this.ResponceData[1]} ${this.ResponceData[0]} with ${this.ResponceData[2]} is Orderd Successfully \nwith OrderID ${this.OrderData.OrderId}`;
        this.BotMsgText(this.OrderData.OrderDescription);
        this.OrderData.OrderStatus = "Order Placed soon you will get your pizza";
        this.OrderData.Price = this.ResponceData[0] == "Veg Pizza" ? 150 * this.OrderData.Quantity : 200 * this.OrderData.Quantity;
        this.Apimessage.postOrder(this.OrderData.OrderId, this.OrderData.OrderName, this.OrderData.OrderDescription, this.OrderData.Price, this.OrderData.Email, this.OrderData.OrderStatus).subscribe((data) => {
            console.log(data);
        }, error => console.log(error));
    }
    //Insert Date
    GetDate(className) {
        let date = new Date();
        let Hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        let AP = date.getHours() > 12 ? "PM" : "AM";
        let day = ["sun", "mon", "tue", "Wed", "Fri", "Sat"];
        let Time = day[date.getDay()] + " " + Hour + ":" + date.getMinutes() + " " + AP;
        var InsertDate = document.createElement('div');
        InsertDate.classList.add(className);
        InsertDate.classList.add('activated');
        InsertDate.innerHTML = Time;
        document.getElementById('chatcontainer').appendChild(InsertDate);
    }
}
BotComponent.ɵfac = function BotComponent_Factory(t) { return new (t || BotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
BotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BotComponent, selectors: [["app-bot"]], decls: 21, vars: 0, consts: [[1, "container"], [1, "bgimg"], ["src", "../../../assets/images/Pizza.jpg", "alt", ""], ["type", "checkbox", "id", "click"], ["for", "click"], ["id", "icon", 1, "bot"], ["src", "../../../assets/images/bot2.png", "alt", "", "width", "55px", "height", "55px"], [1, "fas"], [1, "wrapper"], [1, "head-text"], ["id", "chatcontainer", 1, "chat-box", "chat-height"], [1, "chat-type", "show-type"], [1, "row"], [1, "input-div"], ["name", "message", "type", "text", "id", "message", "placeholder", "Type your message ...", "autocomplete", "off", 1, "input-message"], ["data", ""], ["id", "msgsenda", 1, "input-send", 3, "click"], ["id", "msgsend", 2, "width", "24px", "height", "24px"], ["d", "M2,21L23,12L2,3V10L17,12L2,14V21Z"]], template: function BotComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "PizzaBot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BotComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return ctx.UserMessage(_r0.value); })("click", function BotComponent_Template_button_click_18_listener() { return ctx.removetext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["#click[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 30px;\r\n  bottom: 20px;\r\n  height: 55px;\r\n  width: 55px;\r\n  background: -webkit-linear-gradient(left, #a445b2,#090979);\r\n  text-align: center;\r\n  line-height: 55px;\r\n  border-radius: 50px;\r\n  font-size: 30px;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .bot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  transition: all 0.4s ease;\r\n  overflow: visible;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%]{\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n#click[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n  transform: translate(-50%, -50%) rotate(180deg);\r\n}\r\n\r\n#click[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]   i.bot[_ngcontent-%COMP%]{\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transform: translate(-50%, -50%) rotate(180deg);\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  right: 30px;\r\n  bottom: 0px;\r\n  max-width: 400px;\r\n  background: #fff;\r\n  border-radius: 15px;\r\n  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);\r\n}\r\n\r\n#click[_ngcontent-%COMP%]:checked    ~ .wrapper[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n  bottom: 85px;\r\n  pointer-events: auto;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .head-text[_ngcontent-%COMP%]{\r\n  line-height: 60px;\r\n  color: #fff;\r\n  border-radius: 15px 15px 0 0;\r\n  padding: 0 20px;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  background: -webkit-linear-gradient(left, #a445b2, #fa4299);\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%]   .chat-box[_ngcontent-%COMP%]{\r\n  \r\n  \r\n  \r\n\r\n  border: 1px 0px 1px 1px solid hsl(0, 0%, 90%);\r\n    border-radius: 12px 0px 12px;\r\n    box-shadow: 5px hsl(0, 0%, 60%);\r\n    padding: 1rem;\r\n    overflow: auto;\r\n    scroll-behavior: smooth;\r\n    \r\n    width: 400px;\r\n    height:calc(100vh - 260px);  \r\n    \r\n\r\n  }\r\n\r\n\r\n\r\n.input-message[_ngcontent-%COMP%] {\r\n    padding: 8px 24px;\r\n    flex-grow: 1;\r\n    margin: 0px 8px 0px 0px;\r\n    border-radius: 24px;\r\n    border: none;\r\n    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  }\r\n\r\n.input-message[_ngcontent-%COMP%]:focus{\r\n    outline :none;\r\n    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);\r\n  }\r\n\r\n.row[_ngcontent-%COMP%]{\r\n    opacity: 0.5;\r\n  }\r\n\r\n.input-div[_ngcontent-%COMP%] {\r\n\r\n    height: 48px; \r\n    width: calc(100% - 32px);\r\n    margin: 16px;\r\n    display: flex;\r\n    background-color: #fff;\r\n\r\n\r\n  }\r\n\r\n.input-send[_ngcontent-%COMP%] {\r\n    background :rebeccapurple;\r\n    width: 48px;\r\n    height: 48px;\r\n    border-radius: 24px;\r\n    border: none;\r\n    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n  }\r\n\r\n.input-send[_ngcontent-%COMP%]:hover{\r\n    cursor:pointer;\r\n    box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);\r\n  }\r\n\r\n.input-send[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{\r\n    fill:white;\r\n    margin:11px 8px;\r\n  }\r\n\r\n.input-send[_ngcontent-%COMP%]:focus{\r\n    outline :none;\r\n\r\n  }\r\n\r\n.show-type[_ngcontent-%COMP%]{\r\n   \r\n    opacity: 0;\r\n  }\r\n\r\n.bgimg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 92vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib3QvYm90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLDBEQUEwRDtFQUMxRCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLCtDQUErQztBQUNqRDs7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsK0NBQStDO0FBQ2pEOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsd0RBQXdEO0FBQzFEOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCOztnQkFFYzs7RUFFZCw2Q0FBNkM7SUFDM0MsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLDBCQUEwQixHQUFHLG1CQUFtQjtJQUNoRCxzQkFBc0I7O0VBRXhCOztBQUVBLGNBQWM7O0FBRWQ7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDhFQUE4RTtFQUNoRjs7QUFDQTtJQUNFLGFBQWE7SUFDYiw4RUFBOEU7RUFDaEY7O0FBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0FBQ0E7O0lBRUUsWUFBWSxFQUFFLEtBQUs7SUFDbkIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCOzs7RUFHeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDhFQUE4RTs7RUFFaEY7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsOEVBQThFO0VBQ2hGOztBQUNBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0FBQ0E7SUFDRSxhQUFhOztFQUVmOztBQUNBOztJQUVFLFVBQVU7RUFDWjs7QUFDRjtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvdC9ib3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjbGlja3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICB3aWR0aDogNTVweDtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjYTQ0NWIyLCMwOTA5NzkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIGksLmJvdCBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbmxhYmVsIGkuZmFze1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuI2NsaWNrOmNoZWNrZWQgfiBsYWJlbCBpLmZhc3tcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcbiNjbGljazpjaGVja2VkIH4gbGFiZWwgaS5ib3R7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxufVxyXG4ud3JhcHBlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBjdWJpYy1iZXppZXIoMC42OCwtMC41NSwwLjI2NSwxLjU1KTtcclxufVxyXG4jY2xpY2s6Y2hlY2tlZCB+IC53cmFwcGVye1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm90dG9tOiA4NXB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG59XHJcbi53cmFwcGVyIC5oZWFkLXRleHR7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDAgMDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2E0NDViMiwgI2ZhNDI5OSk7XHJcbn1cclxuXHJcbi53cmFwcGVyIC5jaGF0LWJveHtcclxuICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gIC8qIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnB4KTsqL1xyXG4gIC8qIGhlaWdodDogNjJ2aDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlOyAqL1xyXG5cclxuICBib3JkZXI6IDFweCAwcHggMXB4IDFweCBzb2xpZCBoc2woMCwgMCUsIDkwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDBweCAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IGhzbCgwLCAwJSwgNjAlKTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgLypoZWlnaHQ6IDcwdmg7IC8qIHJlcGxhY2UgdG8gNjIqL1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OmNhbGMoMTAwdmggLSAyNjBweCk7ICAvKiAxOTUgdG8gMjM1ICAgICAqL1xyXG4gICAgLyogbWF4LXdpZHRoOiAzMDBweDsgKi9cclxuXHJcbiAgfVxyXG5cclxuICAvKiBTZW5kIGNoYXQgKi9cclxuXHJcbiAgLmlucHV0LW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW46IDBweCA4cHggMHB4IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgfVxyXG4gIC5pbnB1dC1tZXNzYWdlOmZvY3Vze1xyXG4gICAgb3V0bGluZSA6bm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmlucHV0LWRpdiB7XHJcblxyXG4gICAgaGVpZ2h0OiA0OHB4OyAvKjQ4Ki9cclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICAuaW5wdXQtc2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kIDpyZWJlY2NhcHVycGxlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5cclxuICB9XHJcbiAgLmlucHV0LXNlbmQ6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB9XHJcbiAgLmlucHV0LXNlbmQgc3Zne1xyXG4gICAgZmlsbDp3aGl0ZTtcclxuICAgIG1hcmdpbjoxMXB4IDhweDtcclxuICB9XHJcbiAgLmlucHV0LXNlbmQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lIDpub25lO1xyXG5cclxuICB9XHJcbiAgLnNob3ctdHlwZXtcclxuICAgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuLmJnaW1nIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkydmg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bot',
                templateUrl: './bot.component.html',
                styleUrls: ['./bot.component.css'],
            }]
    }], function () { return [{ type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


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
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'PizzaBot';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_bot_bot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bot/bot.component */ "Llem");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/admin.component */ "cCTE");
/* harmony import */ var _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/display-order/display-order.component */ "K2Yx");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_bot_bot_component__WEBPACK_IMPORTED_MODULE_6__["BotComponent"],
        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
        _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_8__["DisplayOrderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_bot_bot_component__WEBPACK_IMPORTED_MODULE_6__["BotComponent"],
                    _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                    _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_8__["DisplayOrderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cCTE":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/Admin"]; };
class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 5, vars: 2, consts: [[1, "nav"], ["href", "#"], ["href", "#", 1, "admin", 3, "routerLink"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PizzaBot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".nav[_ngcontent-%COMP%]{\r\n    background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);\r\n    font-family: \"Nunito Sans\", sans-serif;\r\n    box-shadow: 0 0 10px black;\r\n    padding: 10px;\r\n    display: flex;\r\n   \r\n    \r\n}\r\n.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:#E74292;\r\n    font-size: 30px;\r\n    \r\n\r\n}\r\n.admin[_ngcontent-%COMP%] {\r\n    margin-left:auto;\r\n   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNERBQTREO0lBQzVELHNDQUFzQztJQUN0QywwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7OztBQUdqQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixlQUFlOzs7QUFHbkI7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDBDOUZGIDAlLCAjOTJGRTlEIDEwMCUpO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuLm5hdiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6I0U3NDI5MjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuLmFkbWluIHtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgIFxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
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
/* harmony import */ var _components_bot_bot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bot/bot.component */ "Llem");
/* harmony import */ var _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/display-order/display-order.component */ "K2Yx");






const routes = [
    { path: 'Admin', component: _components_display_order_display_order_component__WEBPACK_IMPORTED_MODULE_3__["DisplayOrderComponent"] },
    { path: '', component: _components_bot_bot_component__WEBPACK_IMPORTED_MODULE_2__["BotComponent"] }
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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