(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jhon\Documents\proyectos\angular\vacunas_covid\web\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4qKO":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/components/vacunas/vacunas-perdidas-admin-list/vacunas-perdidas-admin-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VacunasPerdidasAdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunasPerdidasAdminListComponent", function() { return VacunasPerdidasAdminListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var _components_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _components_templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");











const _c0 = function (a1) { return ["/vacunas_perdidas/admin/edit", a1]; };
function VacunasPerdidasAdminListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, tipo_r1.nombre_vacuna));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, tipo_r1.numero_lote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, tipo_r1.fecha_vencimiento));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, tipo_r1.numero_dosis_perdidas));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, tipo_r1.id));
} }
const _c1 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class VacunasPerdidasAdminListComponent {
    constructor(vacunasService) {
        this.vacunasService = vacunasService;
        this.vacunas = [];
        this.paginate = 1;
    }
    ngOnInit() {
        this.getVacunaPerdidas();
    }
    getVacunaPerdidas() {
        this.vacunasService.getVacunaPerdidas().subscribe(res => {
            this.vacunas = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
}
VacunasPerdidasAdminListComponent.ɵfac = function VacunasPerdidasAdminListComponent_Factory(t) { return new (t || VacunasPerdidasAdminListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_2__["VacunasService"])); };
VacunasPerdidasAdminListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VacunasPerdidasAdminListComponent, selectors: [["app-vacunas-perdidas-admin-list"]], decls: 42, vars: 10, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "col-md-4"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mt-0", "header-title"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "h-float"], ["src", "assets/iconos/editar.png", 1, "h-rotate-360", 3, "routerLink"]], template: function VacunasPerdidasAdminListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Numeros de Lote y Fecha de Vencimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasPerdidasAdminListComponent_Template_input_ngModelChange_14_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Numeros de Lote y Fecha de Vencimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tipos de Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Numero de Lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Fecha de Vencimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Numero Dosis Perdidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, VacunasPerdidasAdminListComponent_tr_37_Template, 16, 15, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "pagination-controls", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function VacunasPerdidasAdminListComponent_Template_pagination_controls_pageChange_40_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 5, ctx.vacunas, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.paginate)));
    } }, directives: [_components_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _components_templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWN1bmFzLXBlcmRpZGFzLWFkbWluLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VacunasPerdidasAdminListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vacunas-perdidas-admin-list',
                templateUrl: './vacunas-perdidas-admin-list.component.html',
                styleUrls: ['./vacunas-perdidas-admin-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_2__["VacunasService"] }]; }, null); })();


/***/ }),

/***/ "62PF":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/vacunas/vacunas-admin-list/vacunas-admin-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: VacunasAdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunasAdminListComponent", function() { return VacunasAdminListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/excel.service */ "g1/Y");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../templates/menu/menu-general/menu-general.component */ "8P1x");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");















function VacunasAdminListComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminListComponent_tr_51_ngx_qrcode_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-qrcode", 29);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorCorrectionLevel", ctx_r4.correctionLevel)("value", ctx_r4.valueqr);
} }
const _c0 = function (a1) { return ["/vacunados/admin/edit", a1]; };
function VacunasAdminListComponent_tr_51_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacuna_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, vacuna_r2.id));
} }
function VacunasAdminListComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VacunasAdminListComponent_tr_51_ngx_qrcode_30_Template, 1, 2, "ngx-qrcode", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VacunasAdminListComponent_tr_51_td_31_Template, 3, 3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vacuna_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 12, vacuna_r2.cedula));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 14, vacuna_r2.nombres), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, vacuna_r2.apellidos), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 18, vacuna_r2.sexo));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, vacuna_r2.fecha_nacimiento));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 22, vacuna_r2.telefono));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 24, vacuna_r2.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 26, vacuna_r2.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 28, vacuna_r2.municipio));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 30, vacuna_r2.nombre_vacuna));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", vacuna_r2.cedula && vacuna_r2.fecha_dosis1 && vacuna_r2.dosis1 && vacuna_r2.dosis2 && vacuna_r2.fecha_dosis2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.usuarios.user.rol_id === 1 || ctx_r1.usuarios.user.rol_id === 2);
} }
const _c1 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class VacunasAdminListComponent {
    constructor(vacunasService, excelService, auth, router) {
        this.vacunasService = vacunasService;
        this.excelService = excelService;
        this.auth = auth;
        this.router = router;
        this.vacunas = [];
        this.vacunasExcel = [];
        this.paginate = 1;
        this.usuarios = [];
        // QR
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_2__["NgxQrcodeElementTypes"].URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_2__["NgxQrcodeErrorCorrectionLevels"].HIGH;
        this.valueqr = '';
    }
    ngOnInit() {
        this.getVacunas();
        this.getVacunadosExcel();
        this.informacionUsuario();
    }
    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.vacunasExcel, 'Vacunas');
    }
    getVacunadosExcel() {
        this.vacunasService.VacunadosExcelTodos().subscribe(res => {
            this.vacunasExcel = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    informacionUsuario() {
        this.auth.profile().subscribe(res => {
            this.usuarios = res;
            // alert(this.usuarios.user.id);
            console.log('usuario data', res);
            //alert(`centro salud: ${this.usuarios.user.centro_salud_id}`);
            //alert(`id: ${this.usuarios.user.id}`)
            // this.Form.get('user_id').setValue(this.usuarios.user.id);
        }, err => {
            alert('Sesion Experiada..');
            this.router.navigateByUrl('/login');
        });
    }
    getVacunas() {
        this.vacunasService.getListadoVacunas().subscribe(res => {
            this.vacunas = res;
            console.log(res);
            this.vacunas.forEach(element => {
                //  this.valueqr = `${QR_URI}/qr/vacunados/`+ element.cedula;  
                this.valueqr = `Cedula:  ` + element.cedula + ".\n"
                    + "Dosis 1: " + element.dosis1 + ".\n"
                    + "Fecha Dosis 1: " + element.fecha_dosis1 + ".\n"
                    + "Dosis 2: " + element.dosis2 + ".\n"
                    + "Fechas Dosis 2: " + element.fecha_dosis2 + ".\n";
            });
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
}
VacunasAdminListComponent.ɵfac = function VacunasAdminListComponent_Factory(t) { return new (t || VacunasAdminListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_3__["VacunasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
VacunasAdminListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VacunasAdminListComponent, selectors: [["app-vacunas-admin-list"]], decls: 56, vars: 11, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "col-md-4"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mt-0", "header-title"], ["target", "_blank", 1, "btn", "btn-danger", "h-shake", "mb-2", "mr-2", 3, "click"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], ["data-priority", "3"], ["data-priority", "1", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "h-float"], ["alt", "Demo QR Code", "cssClass", "bshadow", 3, "errorCorrectionLevel", "value", 4, "ngIf"], [4, "ngIf"], ["alt", "Demo QR Code", "cssClass", "bshadow", 3, "errorCorrectionLevel", "value"], ["src", "assets/iconos/editar.png", 1, "h-rotate-360", 3, "routerLink"]], template: function VacunasAdminListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Listado de Vacunados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminListComponent_Template_input_ngModelChange_14_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Listado de Vacunados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VacunasAdminListComponent_Template_button_click_22_listener() { return ctx.exportAsXLSX(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Exportar Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "C\u00E9dula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nombre y Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Fecha Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Municipio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Tipo Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Imagen QR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, VacunasAdminListComponent_th_49_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, VacunasAdminListComponent_tr_51_Template, 32, 32, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pagination-controls", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function VacunasAdminListComponent_Template_pagination_controls_pageChange_54_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarios.user.rol_id === 1 || ctx.usuarios.user.rol_id === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](53, 6, ctx.vacunas, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.paginate)));
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _templates_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_8__["MenuGeneralComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_2__["QrcodeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWN1bmFzLWFkbWluLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VacunasAdminListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vacunas-admin-list',
                templateUrl: './vacunas-admin-list.component.html',
                styleUrls: ['./vacunas-admin-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_3__["VacunasService"] }, { type: src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_4__["ExcelService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "6PkB":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/inicio-admin/inicio-admin.component.ts ***!
  \*************************************************************************/
/*! exports provided: InicioAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioAdminComponent", function() { return InicioAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../templates/menu/menu-admin/menu-admin.component */ "y+QU");




class InicioAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioAdminComponent.ɵfac = function InicioAdminComponent_Factory(t) { return new (t || InicioAdminComponent)(); };
InicioAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioAdminComponent, selectors: [["app-inicio-admin"]], decls: 13, vars: 0, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "footer"]], template: function InicioAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_2__["MenuAdminComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8tYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InicioAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inicio-admin',
                templateUrl: './inicio-admin.component.html',
                styleUrls: ['./inicio-admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "82kC":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/admin/centrosalud/centro-salud-admin-list/centro-salud-admin-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CentroSaludAdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentroSaludAdminListComponent", function() { return CentroSaludAdminListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");











const _c0 = function (a1) { return ["/centrosalud/admin/edit", a1]; };
function CentroSaludAdminListComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const centro_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, centro_r1.centro_salud));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](centro_r1.codigo_sicm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, centro_r1.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](centro_r1.municipio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, centro_r1.direccion));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, centro_r1.contacto_tlf));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, centro_r1.id));
} }
const _c1 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class CentroSaludAdminListComponent {
    constructor(comboListService) {
        this.comboListService = comboListService;
        this.centrosalud = [];
        this.paginate = 1;
    }
    ngOnInit() {
        this.getCentroSalud();
    }
    getCentroSalud() {
        this.comboListService.getTodosCentroSalud().subscribe(res => {
            this.centrosalud = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
}
CentroSaludAdminListComponent.ɵfac = function CentroSaludAdminListComponent_Factory(t) { return new (t || CentroSaludAdminListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__["CombolistService"])); };
CentroSaludAdminListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CentroSaludAdminListComponent, selectors: [["app-centro-salud-admin-list"]], decls: 46, vars: 10, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "col-md-4"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mt-0", "header-title"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], ["data-priority", "3"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "h-float"], ["src", "assets/iconos/editar.png", 1, "h-rotate-360", 3, "routerLink"]], template: function CentroSaludAdminListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Listado de Centro de Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentroSaludAdminListComponent_Template_input_ngModelChange_14_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Listado de Centro de Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Centro de Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "C\u00F3digo de SICM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Municipio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CentroSaludAdminListComponent_tr_41_Template, 20, 17, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "pagination-controls", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CentroSaludAdminListComponent_Template_pagination_controls_pageChange_44_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 5, ctx.centrosalud, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.paginate)));
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZW50cm8tc2FsdWQtYWRtaW4tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentroSaludAdminListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-centro-salud-admin-list',
                templateUrl: './centro-salud-admin-list.component.html',
                styleUrls: ['./centro-salud-admin-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__["CombolistService"] }]; }, null); })();


/***/ }),

/***/ "8P1x":
/*!**********************************************************************************!*\
  !*** ./src/app/components/templates/menu/menu-general/menu-general.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MenuGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGeneralComponent", function() { return MenuGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _menu_registrador_menu_registrador_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu-registrador/menu-registrador.component */ "Gh79");
/* harmony import */ var _menu_visor_menu_visor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu-visor/menu-visor.component */ "i9JK");









function MenuGeneralComponent_app_menu_admin_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-admin");
} }
function MenuGeneralComponent_app_menu_registrador_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-registrador");
} }
function MenuGeneralComponent_app_menu_visor_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-visor");
} }
class MenuGeneralComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuarios = [];
    }
    ngOnInit() {
        this.informacionUsuario();
    }
    informacionUsuario() {
        this.auth.profile().subscribe(res => {
            this.usuarios = res;
            //alert(this.usuarios.user.rol_id);
        }, err => {
            alert('Sesion Experiada..');
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
                this.router.navigateByUrl('/login');
            }
        });
    }
}
MenuGeneralComponent.ɵfac = function MenuGeneralComponent_Factory(t) { return new (t || MenuGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MenuGeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuGeneralComponent, selectors: [["app-menu-general"]], decls: 3, vars: 3, consts: [[4, "ngIf"]], template: function MenuGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuGeneralComponent_app_menu_admin_0_Template, 1, 0, "app-menu-admin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuGeneralComponent_app_menu_registrador_1_Template, 1, 0, "app-menu-registrador", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuGeneralComponent_app_menu_visor_2_Template, 1, 0, "app-menu-visor", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarios.user.rol_id === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarios.user.rol_id === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usuarios.user.rol_id === 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_5__["MenuAdminComponent"], _menu_registrador_menu_registrador_component__WEBPACK_IMPORTED_MODULE_6__["MenuRegistradorComponent"], _menu_visor_menu_visor_component__WEBPACK_IMPORTED_MODULE_7__["MenuVisorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWdlbmVyYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuGeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-general',
                templateUrl: './menu-general.component.html',
                styleUrls: ['./menu-general.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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

/***/ "Gh79":
/*!******************************************************************************************!*\
  !*** ./src/app/components/templates/menu/menu-registrador/menu-registrador.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MenuRegistradorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRegistradorComponent", function() { return MenuRegistradorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/vacunados/admin/form"]; };
const _c1 = function () { return ["/vacunados/admin/list"]; };
const _c2 = function () { return ["/vacunados/reportes/general/list"]; };
class MenuRegistradorComponent {
    constructor(auth) {
        this.auth = auth;
        this.VacunasMenu = false;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout();
    }
}
MenuRegistradorComponent.ɵfac = function MenuRegistradorComponent_Factory(t) { return new (t || MenuRegistradorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
MenuRegistradorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuRegistradorComponent, selectors: [["app-menu-registrador"]], decls: 31, vars: 7, consts: [[1, "left", "side-menu"], ["id", "remove-scroll", 1, "slimscroll-menu"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu"], [1, "menu-title"], [1, "waves-effect", "mm-active", 3, "click"], [1, "dripicons-mail"], [1, "float-right", "menu-arrow"], [1, "mdi", "mdi-chevron-right"], [1, "submenu", "mm-collapse", 3, "ngClass"], [3, "routerLink"], [1, "waves-effect", 3, "routerLink"], [1, "dripicons-meter"], ["href", "javascript:void(0)", 1, "waves-effect", 3, "click"], [1, "clearfix"]], template: function MenuRegistradorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu Registrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuRegistradorComponent_Template_a_click_7_listener() { return ctx.VacunasMenu = !ctx.VacunasMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Vacunados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuRegistradorComponent_Template_a_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cerrar Sesion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.VacunasMenu ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXJlZ2lzdHJhZG9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuRegistradorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-registrador',
                templateUrl: './menu-registrador.component.html',
                styleUrls: ['./menu-registrador.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "KO7Z":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/admin/reportes/reportes-general-admin/reportes-general-admin.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ReportesGeneralAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesGeneralAdminComponent", function() { return ReportesGeneralAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReportesGeneralAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReportesGeneralAdminComponent.ɵfac = function ReportesGeneralAdminComponent_Factory(t) { return new (t || ReportesGeneralAdminComponent)(); };
ReportesGeneralAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportesGeneralAdminComponent, selectors: [["app-reportes-general-admin"]], decls: 2, vars: 0, template: function ReportesGeneralAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "reportes-general-admin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlcy1nZW5lcmFsLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportesGeneralAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reportes-general-admin',
                templateUrl: './reportes-general-admin.component.html',
                styleUrls: ['./reportes-general-admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KZSZ":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/admin/centrosalud/centro-salud-admin-form/centro-salud-admin-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CentroSaludAdminFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentroSaludAdminFormComponent", function() { return CentroSaludAdminFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function CentroSaludAdminFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Centro de Salud es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentroSaludAdminFormComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " C\u00F3digo SICM es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentroSaludAdminFormComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", estado_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estado_r9.estado);
} }
function CentroSaludAdminFormComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Estado es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentroSaludAdminFormComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const municipio_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", municipio_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](municipio_r10.municipio);
} }
function CentroSaludAdminFormComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Municipio es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentroSaludAdminFormComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Direcci\u00F3n es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentroSaludAdminFormComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentroSaludAdminFormComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.GuardarCentroSalud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CentroSaludAdminFormComponent_button_56_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentroSaludAdminFormComponent_button_56_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.ActualizarCentroSalud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CentroSaludAdminFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.centrosalud = [];
        this.estados = [];
        this.municipios = [];
        this.edit = false;
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            centro_salud: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            contacto_tlf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            estado_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            municipio_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            codigo_sicm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
        //this.fechaActual=new Date();
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        if (params.id) {
            this.comboListService.getCentroSalud(params.id) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.centrosalud = res;
                this.Form.patchValue({
                    centro_salud: this.centrosalud.centro_salud,
                    estado_id: this.centrosalud.estado_id,
                    municipio_id: this.centrosalud.municipio_id,
                    direccion: this.centrosalud.direccion,
                    contacto_tlf: this.centrosalud.contacto_tlf,
                    codigo_sicm: this.centrosalud.codigo_sicm
                    //imagen_qr: this.vacunas.imagen_qr,
                });
                this.edit = true;
                this.EditMunicipio();
            }, err => console.log(err));
        }
        this.getEstados();
    }
    GuardarCentroSalud() {
        this.comboListService.saveCentroSalud(this.Form.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/centrosalud/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    ActualizarCentroSalud() {
        this.comboListService.updateCentroSalud(this.centrosalud.id, this.centrosalud)
            .subscribe(res => {
            console.log('actualizando', res);
            this.router.navigate(['/centrosalud/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    // COMBO DEPENDIENTE //
    getEstados() {
        this.comboListService.getEstados().subscribe(res => {
            this.estados = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    EditMunicipio() {
        this.comboListService.getMunicipios().subscribe(res => {
            this.municipios = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getMunicipios(id) {
        this.comboListService.getMunicipios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((municipios) => municipios.filter((municipio) => municipio.estado_id == id))).subscribe((result) => {
            this.municipios = result;
            console.log(result);
        });
    }
}
CentroSaludAdminFormComponent.ɵfac = function CentroSaludAdminFormComponent_Factory(t) { return new (t || CentroSaludAdminFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"])); };
CentroSaludAdminFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CentroSaludAdminFormComponent, selectors: [["app-centro-salud-admin-form"]], decls: 58, vars: 22, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar Centro de Salud", "formControlName", "centro_salud", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar Centro de Salud", "formControlName", "codigo_sicm", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Telefono de Centro Salud", "formControlName", "contacto_tlf", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "estado_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "municipio_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Direcci\u00F3n ", "formControlName", "direccion", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], [3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function CentroSaludAdminFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Formulario de Centro de Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Centro Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentroSaludAdminFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.centrosalud.centro_salud = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CentroSaludAdminFormComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C\u00F3digo SICM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentroSaludAdminFormComponent_Template_input_ngModelChange_27_listener($event) { return ctx.centrosalud.codigo_sicm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CentroSaludAdminFormComponent_div_28_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tel\u00E9fono ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentroSaludAdminFormComponent_Template_input_ngModelChange_33_listener($event) { return ctx.centrosalud.contacto_tlf = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentroSaludAdminFormComponent_Template_select_ngModelChange_38_listener($event) { return ctx.centrosalud.estado_id = $event; })("change", function CentroSaludAdminFormComponent_Template_select_change_38_listener($event) { return ctx.getMunicipios($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CentroSaludAdminFormComponent_option_39_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CentroSaludAdminFormComponent_div_40_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Municipios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentroSaludAdminFormComponent_Template_select_ngModelChange_45_listener($event) { return ctx.centrosalud.municipio_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CentroSaludAdminFormComponent_option_46_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CentroSaludAdminFormComponent_div_47_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CentroSaludAdminFormComponent_Template_textarea_ngModelChange_52_listener($event) { return ctx.centrosalud.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "                                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CentroSaludAdminFormComponent_div_54_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CentroSaludAdminFormComponent_button_55_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, CentroSaludAdminFormComponent_button_56_Template, 2, 0, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["centro_salud"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.centrosalud.centro_salud);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["centro_salud"].touched && (ctx.Form.controls["centro_salud"].errors == null ? null : ctx.Form.controls["centro_salud"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["codigo_sicm"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.centrosalud.codigo_sicm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["codigo_sicm"].touched && (ctx.Form.controls["codigo_sicm"].errors == null ? null : ctx.Form.controls["codigo_sicm"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["contacto_tlf"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.centrosalud.contacto_tlf);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["estado_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.centrosalud.estado_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["estado_id"].touched && (ctx.Form.controls["estado_id"].errors == null ? null : ctx.Form.controls["estado_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["municipio_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.centrosalud.municipio_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.municipios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["municipio_id"].touched && (ctx.Form.controls["municipio_id"].errors == null ? null : ctx.Form.controls["municipio_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["direccion"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.centrosalud.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["direccion"].touched && (ctx.Form.controls["direccion"].errors == null ? null : ctx.Form.controls["direccion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_7__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZW50cm8tc2FsdWQtYWRtaW4tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CentroSaludAdminFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-centro-salud-admin-form',
                templateUrl: './centro-salud-admin-form.component.html',
                styleUrls: ['./centro-salud-admin-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"] }]; }, null); })();


/***/ }),

/***/ "R1DC":
/*!************************************************************************************************!*\
  !*** ./src/app/components/admin/usuarios/usuarios-admin-list/usuarios-admin-list.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UsuariosAdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosAdminListComponent", function() { return UsuariosAdminListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");











const _c0 = function (a1) { return ["/usuarios/admin/edit", a1]; };
function UsuariosAdminListComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const usuario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, usuario_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, usuario_r1.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, usuario_r1.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, usuario_r1.centro_salud));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](usuario_r1.rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, usuario_r1.id));
} }
const _c1 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class UsuariosAdminListComponent {
    constructor(userService) {
        this.userService = userService;
        this.usuarios = [];
        this.paginate = 1;
    }
    ngOnInit() {
        this.getUsuarios();
    }
    getUsuarios() {
        this.userService.getUsuarios().subscribe(res => {
            this.usuarios = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
}
UsuariosAdminListComponent.ɵfac = function UsuariosAdminListComponent_Factory(t) { return new (t || UsuariosAdminListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
UsuariosAdminListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuariosAdminListComponent, selectors: [["app-usuarios-admin-list"]], decls: 44, vars: 10, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "col-md-4"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mt-0", "header-title"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], ["data-priority", "3"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "h-float"], ["src", "assets/iconos/editar.png", 1, "h-rotate-360", 3, "routerLink"]], template: function UsuariosAdminListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Listado de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminListComponent_Template_input_ngModelChange_14_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Listado de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nombre Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Centro de Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, UsuariosAdminListComponent_tr_39_Template, 18, 16, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "pagination-controls", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UsuariosAdminListComponent_Template_pagination_controls_pageChange_42_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 5, ctx.usuarios, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.paginate)));
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_4__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy1hZG1pbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosAdminListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usuarios-admin-list',
                templateUrl: './usuarios-admin-list.component.html',
                styleUrls: ['./usuarios-admin-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'covidang';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TRWN":
/*!***************************************************************************************************************!*\
  !*** ./src/app/admin/components/vacunas/vacunas-perdidas-admin-form/vacunas-perdidas-admin-form.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VacunasPerdidasAdminFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunasPerdidasAdminFormComponent", function() { return VacunasPerdidasAdminFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _components_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _components_templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function VacunasPerdidasAdminFormComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipovacuna_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", tipovacuna_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipovacuna_r7.nombre_vacuna);
} }
function VacunasPerdidasAdminFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tipo Vacuna es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasPerdidasAdminFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Numero de Lote es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasPerdidasAdminFormComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha Vencimiento es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasPerdidasAdminFormComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Numero de Dosis Perdidas es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasPerdidasAdminFormComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VacunasPerdidasAdminFormComponent_button_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.Guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasPerdidasAdminFormComponent_button_43_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VacunasPerdidasAdminFormComponent_button_43_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.Actualizar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VacunasPerdidasAdminFormComponent {
    constructor(activatedRoute, router, vacunasService, comboListService, auth) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.vacunasService = vacunasService;
        this.comboListService = comboListService;
        this.auth = auth;
        this.vacunas = [];
        this.tipovacunas = [];
        this.edit = false;
        this.usuarios = [];
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tipo_vacuna_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            numero_lote: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fecha_vencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            numero_dosis_perdidas: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        //this.fechaActual=new Date();
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        if (params.id) {
            this.vacunasService.getVacunaPerdida(params.id) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.vacunas = res;
                this.Form.patchValue({
                    tipo_vacuna_id: this.vacunas.tipo_vacuna_id,
                    numero_lote: this.vacunas.numero_lote,
                    fecha_vencimiento: this.vacunas.fecha_vencimiento,
                    numero_dosis_perdidas: this.vacunas.numero_dosis_perdidas,
                });
                this.edit = true;
            }, err => console.log(err));
        }
        this.getTiposVacunas();
        this.informacionUsuario();
    }
    informacionUsuario() {
        this.auth.profile().subscribe(res => {
            this.usuarios = res;
            // alert(this.usuarios.user.id);
            console.log('usuario data', res);
            //alert(`centro salud: ${this.usuarios.user.centro_salud_id}`);
            //alert(`id: ${this.usuarios.user.id}`)
            this.Form.get('user_id').setValue(this.usuarios.user.id);
        }, err => {
            alert('Sesion Experiada..');
            this.router.navigateByUrl('/login');
        });
    }
    getTiposVacunas() {
        this.comboListService.getTiposVacunas().subscribe(res => {
            this.tipovacunas = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    Guardar() {
        this.vacunasService.saveVacunasPerdidas(this.Form.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/vacunas_perdidas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    Actualizar() {
        this.vacunasService.updateVacunaPerdidas(this.vacunas.id, this.vacunas)
            .subscribe(res => {
            console.log('actualizando', res);
            this.router.navigate(['/vacunas_perdidas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
VacunasPerdidasAdminFormComponent.ɵfac = function VacunasPerdidasAdminFormComponent_Factory(t) { return new (t || VacunasPerdidasAdminFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_4__["VacunasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
VacunasPerdidasAdminFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VacunasPerdidasAdminFormComponent, selectors: [["app-vacunas-perdidas-admin-form"]], decls: 45, vars: 16, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "tipo_vacuna_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar Numero de Lote", "formControlName", "numero_lote", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "date", "id", "example-date-input", "placeholder", "Ingresar Fecha Vencimiento", "formControlName", "fecha_vencimiento", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Numero de Dosis Perdidas", "formControlName", "numero_dosis_perdidas", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [3, "value"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function VacunasPerdidasAdminFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Formulario de Vacunas Perdidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tipo de Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasPerdidasAdminFormComponent_Template_select_ngModelChange_21_listener($event) { return ctx.vacunas.tipo_vacuna_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VacunasPerdidasAdminFormComponent_option_22_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VacunasPerdidasAdminFormComponent_div_23_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Numero de Lote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasPerdidasAdminFormComponent_Template_input_ngModelChange_28_listener($event) { return ctx.vacunas.numero_lote = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VacunasPerdidasAdminFormComponent_div_29_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Fecha Vencimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasPerdidasAdminFormComponent_Template_input_ngModelChange_34_listener($event) { return ctx.vacunas.fecha_vencimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, VacunasPerdidasAdminFormComponent_div_35_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Numero de Dosis Perdidas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasPerdidasAdminFormComponent_Template_input_ngModelChange_40_listener($event) { return ctx.vacunas.numero_dosis_perdidas = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, VacunasPerdidasAdminFormComponent_div_41_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, VacunasPerdidasAdminFormComponent_button_42_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, VacunasPerdidasAdminFormComponent_button_43_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["tipo_vacuna_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.tipo_vacuna_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipovacunas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["tipo_vacuna_id"].touched && (ctx.Form.controls["tipo_vacuna_id"].errors == null ? null : ctx.Form.controls["tipo_vacuna_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["numero_lote"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.numero_lote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["numero_lote"].touched && (ctx.Form.controls["numero_lote"].errors == null ? null : ctx.Form.controls["numero_lote"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["fecha_vencimiento"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.fecha_vencimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_vencimiento"].touched && (ctx.Form.controls["fecha_vencimiento"].errors == null ? null : ctx.Form.controls["fecha_vencimiento"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["numero_dosis_perdidas"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.numero_dosis_perdidas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["numero_dosis_perdidas"].touched && (ctx.Form.controls["numero_dosis_perdidas"].errors == null ? null : ctx.Form.controls["numero_dosis_perdidas"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_components_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_8__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWN1bmFzLXBlcmRpZGFzLWFkbWluLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VacunasPerdidasAdminFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vacunas-perdidas-admin-form',
                templateUrl: './vacunas-perdidas-admin-form.component.html',
                styleUrls: ['./vacunas-perdidas-admin-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_4__["VacunasService"] }, { type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_5__["CombolistService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }]; }, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class LoginComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            id: 0,
            name: '',
            email: '',
            password: '',
            image: '',
            nombre_img: '',
            ente_id: 0
        };
    }
    login() {
        this.auth.login(this.credentials).subscribe(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                icon: 'success',
                title: 'Ingresando...',
            });
            this.router.navigateByUrl('/vacunados/admin/list');
        }, err => {
            console.error(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ingresar al sistema por favor contactar al Administrador...', 'error');
            }
            else if (err.status === 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', '!Datos Incorrectos...', 'error');
            }
        });
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 16, vars: 2, consts: [[1, "container-login100", 2, "background-image", "url('assets/images/bg-02.jpg')"], [1, "wrap-login100", "p-l-55", "p-r-55", "p-t-80", "p-b-30", "animate__animated", "animate__backInLeft"], ["src", "assets/images/logo.png", 2, "height", "160px", "margin-left", "65px", "margin-bottom", "10px"], [1, "login100-form", "validate-form", 3, "submit"], [1, "login100-form-title", "p-b-37"], ["data-validate", "Enter username or email", 1, "wrap-input100", "validate-input", "m-b-20"], ["type", "text", "name", "email", "placeholder", "Ingresar Correo Electr\u00F3nico.", 1, "input100", 3, "ngModel", "ngModelChange"], [1, "focus-input100"], ["data-validate", "Enter password", 1, "wrap-input100", "validate-input", "m-b-25"], ["type", "password", "name", "password", "placeholder", "Ingresar Contrase\u00F1a.", 1, "input100", 3, "ngModel", "ngModelChange"], [1, "container-login100-form-btn", "mt-5"], ["type", "submit", 1, "login100-form-btn"], [1, "text-center", "p-t-57", "p-b-20", "mt-5"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Inicio Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.credentials.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.credentials.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Iniciar Sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.credentials.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["*[_ngcontent-%COMP%] {\r\n      margin: 0px; \r\n      padding: 0px; \r\n      box-sizing: border-box;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n      height: 100%;\r\n      font-family: SourceSansPro-Regular, sans-serif;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  a[_ngcontent-%COMP%] {\r\n      font-family: SourceSansPro-Regular;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n      transition: all 0.4s;\r\n      -webkit-transition: all 0.4s;\r\n    -o-transition: all 0.4s;\r\n    -moz-transition: all 0.4s;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  a[_ngcontent-%COMP%]:focus {\r\n      outline: none !important;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  a[_ngcontent-%COMP%]:hover {\r\n      text-decoration: none;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n      margin: 0px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n      font-family: SourceSansPro-Regular;\r\n      font-size: 14px;\r\n      line-height: 1.7;\r\n      color: #666666;\r\n      margin: 0px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n      margin: 0px;\r\n      list-style-type: none;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  input[_ngcontent-%COMP%] {\r\n      outline: none;\r\n      border: none;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  textarea[_ngcontent-%COMP%] {\r\n    outline: none;\r\n    border: none;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\r\n    border-color: transparent !important;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  input[_ngcontent-%COMP%]::-webkit-input-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  input[_ngcontent-%COMP%]:-moz-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  input[_ngcontent-%COMP%]::-moz-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  input[_ngcontent-%COMP%]:-ms-input-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  textarea[_ngcontent-%COMP%]::-webkit-input-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  textarea[_ngcontent-%COMP%]:-moz-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  textarea[_ngcontent-%COMP%]::-moz-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  textarea[_ngcontent-%COMP%]:-ms-input-placeholder { color: #04276d;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  button[_ngcontent-%COMP%] {\r\n      outline: none !important;\r\n      border: none;\r\n      background: transparent;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  button[_ngcontent-%COMP%]:hover {\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  iframe[_ngcontent-%COMP%] {\r\n      border: none !important;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .txt1[_ngcontent-%COMP%] {\r\n    font-family: SourceSansPro-Regular;\r\n    font-size: 16px;\r\n    line-height: 1.4;\r\n    color: #999999;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .txt2[_ngcontent-%COMP%] {\r\n    font-family: SourceSansPro-Regular;\r\n    font-size: 16px;\r\n    line-height: 1.4;\r\n    color: #3075ff;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .hov1[_ngcontent-%COMP%]:hover {\r\n    color: #3075ff;\r\n    text-decoration: underline;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .container-login100[_ngcontent-%COMP%] {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .container-login100[_ngcontent-%COMP%]::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(93,84,240,0.5);\r\n    background: linear-gradient(left, rgba(0,168,255,0.5), rgba(185,0,255,0.5));\r\n    pointer-events: none;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-login100[_ngcontent-%COMP%] {\r\n    width: 390px;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n  \r\n    box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .login100-form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .login100-form-title[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-family: SourceSansPro-Bold;\r\n    font-size: 30px;\r\n    color: #3075ff;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-input100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .input100[_ngcontent-%COMP%] {\r\n    font-family: SourceSansPro-Bold;\r\n    font-size: 16px;\r\n    color: #3075ff;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    height: 62px;\r\n    background: transparent;\r\n    padding: 0 20px 0 23px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .focus-input100[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    pointer-events: none;\r\n    border-radius: 20px;\r\n    box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.1);\r\n    transition: all 0.4s;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .input100[_ngcontent-%COMP%]:focus    + .focus-input100[_ngcontent-%COMP%] {\r\n    box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -moz-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -webkit-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -o-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n    -ms-box-shadow: 0 5px 30px 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .container-login100-form-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .login100-form-btn[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 20px;\r\n    min-width: 160px;\r\n    height: 50px;\r\n    background-color: #45f16a;\r\n    border-radius: 25px;\r\n  \r\n    font-family: SourceSansPro-SemiBold;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-transform: uppercase;\r\n    transition: all 0.4s;\r\n  \r\n    box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -moz-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -webkit-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -o-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n    -ms-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.5);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .login100-form-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #3075ff;\r\n    box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -moz-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -webkit-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -o-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n    -ms-box-shadow: 0 10px 30px 0px rgba(189, 89, 212, 0.8);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .validate-input[_ngcontent-%COMP%] {\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .alert-validate[_ngcontent-%COMP%]   .focus-input100[_ngcontent-%COMP%] {\r\n    box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -moz-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -webkit-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -o-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n    -ms-box-shadow: 0 5px 30px 0px rgba(250, 66, 81, 0.1);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .alert-validate[_ngcontent-%COMP%]::before {\r\n    content: attr(data-validate);\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n    width: 100%;\r\n    min-height: 62px;\r\n    background-color: #fff;\r\n    border-radius: 20px;\r\n    top: 0px;\r\n    left: 0px;\r\n    padding: 0 45px 0 22px;\r\n    pointer-events: none;\r\n  \r\n    font-family: SourceSansPro-Bold;\r\n    font-size: 16px;\r\n    color: #fa4251;\r\n    line-height: 1.2;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .btn-hide-validate[_ngcontent-%COMP%] {\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 15px;\r\n    color: #fa4251;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    height: 62px;\r\n    top: 0px;\r\n    right: 23px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .rs1-alert-validate.alert-validate[_ngcontent-%COMP%]::before {\r\n    background-color: #fff;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .true-validate[_ngcontent-%COMP%]::after {\r\n    content: \"\\f269\";\r\n    font-family: Material-Design-Iconic-Font;\r\n    font-size: 15px;\r\n    color: #57b846;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    height: 62px;\r\n    top: 0px;\r\n    right: 23px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .login100-social-item[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #3b5998;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    background-color: #fff;\r\n    margin: 5px;\r\n    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .login100-social-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 26px;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .login100-social-item[_ngcontent-%COMP%]:hover {\r\n    color: #3b5998;\r\n    box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -moz-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -o-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n    -ms-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  @media (max-width: 480px) {\r\n    .wrap-login100[_ngcontent-%COMP%] {\r\n      padding-left: 15px;\r\n      padding-right: 15px;\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-1[_ngcontent-%COMP%] {font-size: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-2[_ngcontent-%COMP%] {font-size: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-3[_ngcontent-%COMP%] {font-size: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-4[_ngcontent-%COMP%] {font-size: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-5[_ngcontent-%COMP%] {font-size: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-6[_ngcontent-%COMP%] {font-size: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-7[_ngcontent-%COMP%] {font-size: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-8[_ngcontent-%COMP%] {font-size: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-9[_ngcontent-%COMP%] {font-size: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-10[_ngcontent-%COMP%] {font-size: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-11[_ngcontent-%COMP%] {font-size: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-12[_ngcontent-%COMP%] {font-size: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-13[_ngcontent-%COMP%] {font-size: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-14[_ngcontent-%COMP%] {font-size: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-15[_ngcontent-%COMP%] {font-size: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-16[_ngcontent-%COMP%] {font-size: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-17[_ngcontent-%COMP%] {font-size: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-18[_ngcontent-%COMP%] {font-size: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-19[_ngcontent-%COMP%] {font-size: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-20[_ngcontent-%COMP%] {font-size: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-21[_ngcontent-%COMP%] {font-size: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-22[_ngcontent-%COMP%] {font-size: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-23[_ngcontent-%COMP%] {font-size: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-24[_ngcontent-%COMP%] {font-size: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-25[_ngcontent-%COMP%] {font-size: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-26[_ngcontent-%COMP%] {font-size: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-27[_ngcontent-%COMP%] {font-size: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-28[_ngcontent-%COMP%] {font-size: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-29[_ngcontent-%COMP%] {font-size: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-30[_ngcontent-%COMP%] {font-size: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-31[_ngcontent-%COMP%] {font-size: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-32[_ngcontent-%COMP%] {font-size: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-33[_ngcontent-%COMP%] {font-size: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-34[_ngcontent-%COMP%] {font-size: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-35[_ngcontent-%COMP%] {font-size: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-36[_ngcontent-%COMP%] {font-size: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-37[_ngcontent-%COMP%] {font-size: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-38[_ngcontent-%COMP%] {font-size: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-39[_ngcontent-%COMP%] {font-size: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-40[_ngcontent-%COMP%] {font-size: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-41[_ngcontent-%COMP%] {font-size: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-42[_ngcontent-%COMP%] {font-size: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-43[_ngcontent-%COMP%] {font-size: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-44[_ngcontent-%COMP%] {font-size: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-45[_ngcontent-%COMP%] {font-size: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-46[_ngcontent-%COMP%] {font-size: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-47[_ngcontent-%COMP%] {font-size: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-48[_ngcontent-%COMP%] {font-size: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-49[_ngcontent-%COMP%] {font-size: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-50[_ngcontent-%COMP%] {font-size: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-51[_ngcontent-%COMP%] {font-size: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-52[_ngcontent-%COMP%] {font-size: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-53[_ngcontent-%COMP%] {font-size: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-54[_ngcontent-%COMP%] {font-size: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-55[_ngcontent-%COMP%] {font-size: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-56[_ngcontent-%COMP%] {font-size: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-57[_ngcontent-%COMP%] {font-size: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-58[_ngcontent-%COMP%] {font-size: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-59[_ngcontent-%COMP%] {font-size: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-60[_ngcontent-%COMP%] {font-size: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-61[_ngcontent-%COMP%] {font-size: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-62[_ngcontent-%COMP%] {font-size: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-63[_ngcontent-%COMP%] {font-size: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-64[_ngcontent-%COMP%] {font-size: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-65[_ngcontent-%COMP%] {font-size: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-66[_ngcontent-%COMP%] {font-size: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-67[_ngcontent-%COMP%] {font-size: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-68[_ngcontent-%COMP%] {font-size: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-69[_ngcontent-%COMP%] {font-size: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-70[_ngcontent-%COMP%] {font-size: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-71[_ngcontent-%COMP%] {font-size: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-72[_ngcontent-%COMP%] {font-size: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-73[_ngcontent-%COMP%] {font-size: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-74[_ngcontent-%COMP%] {font-size: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-75[_ngcontent-%COMP%] {font-size: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-76[_ngcontent-%COMP%] {font-size: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-77[_ngcontent-%COMP%] {font-size: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-78[_ngcontent-%COMP%] {font-size: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-79[_ngcontent-%COMP%] {font-size: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-80[_ngcontent-%COMP%] {font-size: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-81[_ngcontent-%COMP%] {font-size: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-82[_ngcontent-%COMP%] {font-size: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-83[_ngcontent-%COMP%] {font-size: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-84[_ngcontent-%COMP%] {font-size: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-85[_ngcontent-%COMP%] {font-size: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-86[_ngcontent-%COMP%] {font-size: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-87[_ngcontent-%COMP%] {font-size: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-88[_ngcontent-%COMP%] {font-size: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-89[_ngcontent-%COMP%] {font-size: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-90[_ngcontent-%COMP%] {font-size: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-91[_ngcontent-%COMP%] {font-size: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-92[_ngcontent-%COMP%] {font-size: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-93[_ngcontent-%COMP%] {font-size: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-94[_ngcontent-%COMP%] {font-size: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-95[_ngcontent-%COMP%] {font-size: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-96[_ngcontent-%COMP%] {font-size: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-97[_ngcontent-%COMP%] {font-size: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-98[_ngcontent-%COMP%] {font-size: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-99[_ngcontent-%COMP%] {font-size: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-100[_ngcontent-%COMP%] {font-size: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-101[_ngcontent-%COMP%] {font-size: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-102[_ngcontent-%COMP%] {font-size: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-103[_ngcontent-%COMP%] {font-size: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-104[_ngcontent-%COMP%] {font-size: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-105[_ngcontent-%COMP%] {font-size: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-106[_ngcontent-%COMP%] {font-size: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-107[_ngcontent-%COMP%] {font-size: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-108[_ngcontent-%COMP%] {font-size: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-109[_ngcontent-%COMP%] {font-size: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-110[_ngcontent-%COMP%] {font-size: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-111[_ngcontent-%COMP%] {font-size: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-112[_ngcontent-%COMP%] {font-size: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-113[_ngcontent-%COMP%] {font-size: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-114[_ngcontent-%COMP%] {font-size: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-115[_ngcontent-%COMP%] {font-size: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-116[_ngcontent-%COMP%] {font-size: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-117[_ngcontent-%COMP%] {font-size: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-118[_ngcontent-%COMP%] {font-size: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-119[_ngcontent-%COMP%] {font-size: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-120[_ngcontent-%COMP%] {font-size: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-121[_ngcontent-%COMP%] {font-size: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-122[_ngcontent-%COMP%] {font-size: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-123[_ngcontent-%COMP%] {font-size: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-124[_ngcontent-%COMP%] {font-size: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-125[_ngcontent-%COMP%] {font-size: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-126[_ngcontent-%COMP%] {font-size: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-127[_ngcontent-%COMP%] {font-size: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-128[_ngcontent-%COMP%] {font-size: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-129[_ngcontent-%COMP%] {font-size: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-130[_ngcontent-%COMP%] {font-size: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-131[_ngcontent-%COMP%] {font-size: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-132[_ngcontent-%COMP%] {font-size: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-133[_ngcontent-%COMP%] {font-size: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-134[_ngcontent-%COMP%] {font-size: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-135[_ngcontent-%COMP%] {font-size: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-136[_ngcontent-%COMP%] {font-size: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-137[_ngcontent-%COMP%] {font-size: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-138[_ngcontent-%COMP%] {font-size: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-139[_ngcontent-%COMP%] {font-size: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-140[_ngcontent-%COMP%] {font-size: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-141[_ngcontent-%COMP%] {font-size: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-142[_ngcontent-%COMP%] {font-size: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-143[_ngcontent-%COMP%] {font-size: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-144[_ngcontent-%COMP%] {font-size: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-145[_ngcontent-%COMP%] {font-size: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-146[_ngcontent-%COMP%] {font-size: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-147[_ngcontent-%COMP%] {font-size: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-148[_ngcontent-%COMP%] {font-size: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-149[_ngcontent-%COMP%] {font-size: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-150[_ngcontent-%COMP%] {font-size: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-151[_ngcontent-%COMP%] {font-size: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-152[_ngcontent-%COMP%] {font-size: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-153[_ngcontent-%COMP%] {font-size: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-154[_ngcontent-%COMP%] {font-size: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-155[_ngcontent-%COMP%] {font-size: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-156[_ngcontent-%COMP%] {font-size: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-157[_ngcontent-%COMP%] {font-size: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-158[_ngcontent-%COMP%] {font-size: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-159[_ngcontent-%COMP%] {font-size: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-160[_ngcontent-%COMP%] {font-size: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-161[_ngcontent-%COMP%] {font-size: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-162[_ngcontent-%COMP%] {font-size: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-163[_ngcontent-%COMP%] {font-size: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-164[_ngcontent-%COMP%] {font-size: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-165[_ngcontent-%COMP%] {font-size: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-166[_ngcontent-%COMP%] {font-size: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-167[_ngcontent-%COMP%] {font-size: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-168[_ngcontent-%COMP%] {font-size: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-169[_ngcontent-%COMP%] {font-size: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-170[_ngcontent-%COMP%] {font-size: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-171[_ngcontent-%COMP%] {font-size: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-172[_ngcontent-%COMP%] {font-size: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-173[_ngcontent-%COMP%] {font-size: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-174[_ngcontent-%COMP%] {font-size: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-175[_ngcontent-%COMP%] {font-size: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-176[_ngcontent-%COMP%] {font-size: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-177[_ngcontent-%COMP%] {font-size: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-178[_ngcontent-%COMP%] {font-size: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-179[_ngcontent-%COMP%] {font-size: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-180[_ngcontent-%COMP%] {font-size: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-181[_ngcontent-%COMP%] {font-size: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-182[_ngcontent-%COMP%] {font-size: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-183[_ngcontent-%COMP%] {font-size: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-184[_ngcontent-%COMP%] {font-size: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-185[_ngcontent-%COMP%] {font-size: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-186[_ngcontent-%COMP%] {font-size: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-187[_ngcontent-%COMP%] {font-size: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-188[_ngcontent-%COMP%] {font-size: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-189[_ngcontent-%COMP%] {font-size: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-190[_ngcontent-%COMP%] {font-size: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-191[_ngcontent-%COMP%] {font-size: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-192[_ngcontent-%COMP%] {font-size: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-193[_ngcontent-%COMP%] {font-size: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-194[_ngcontent-%COMP%] {font-size: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-195[_ngcontent-%COMP%] {font-size: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-196[_ngcontent-%COMP%] {font-size: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-197[_ngcontent-%COMP%] {font-size: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-198[_ngcontent-%COMP%] {font-size: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-199[_ngcontent-%COMP%] {font-size: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .fs-200[_ngcontent-%COMP%] {font-size: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-0[_ngcontent-%COMP%] {padding-top: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-1[_ngcontent-%COMP%] {padding-top: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-2[_ngcontent-%COMP%] {padding-top: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-3[_ngcontent-%COMP%] {padding-top: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-4[_ngcontent-%COMP%] {padding-top: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-5[_ngcontent-%COMP%] {padding-top: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-6[_ngcontent-%COMP%] {padding-top: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-7[_ngcontent-%COMP%] {padding-top: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-8[_ngcontent-%COMP%] {padding-top: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-9[_ngcontent-%COMP%] {padding-top: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-10[_ngcontent-%COMP%] {padding-top: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-11[_ngcontent-%COMP%] {padding-top: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-12[_ngcontent-%COMP%] {padding-top: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-13[_ngcontent-%COMP%] {padding-top: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-14[_ngcontent-%COMP%] {padding-top: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-15[_ngcontent-%COMP%] {padding-top: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-16[_ngcontent-%COMP%] {padding-top: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-17[_ngcontent-%COMP%] {padding-top: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-18[_ngcontent-%COMP%] {padding-top: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-19[_ngcontent-%COMP%] {padding-top: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-20[_ngcontent-%COMP%] {padding-top: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-21[_ngcontent-%COMP%] {padding-top: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-22[_ngcontent-%COMP%] {padding-top: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-23[_ngcontent-%COMP%] {padding-top: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-24[_ngcontent-%COMP%] {padding-top: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-25[_ngcontent-%COMP%] {padding-top: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-26[_ngcontent-%COMP%] {padding-top: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-27[_ngcontent-%COMP%] {padding-top: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-28[_ngcontent-%COMP%] {padding-top: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-29[_ngcontent-%COMP%] {padding-top: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-30[_ngcontent-%COMP%] {padding-top: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-31[_ngcontent-%COMP%] {padding-top: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-32[_ngcontent-%COMP%] {padding-top: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-33[_ngcontent-%COMP%] {padding-top: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-34[_ngcontent-%COMP%] {padding-top: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-35[_ngcontent-%COMP%] {padding-top: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-36[_ngcontent-%COMP%] {padding-top: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-37[_ngcontent-%COMP%] {padding-top: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-38[_ngcontent-%COMP%] {padding-top: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-39[_ngcontent-%COMP%] {padding-top: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-40[_ngcontent-%COMP%] {padding-top: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-41[_ngcontent-%COMP%] {padding-top: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-42[_ngcontent-%COMP%] {padding-top: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-43[_ngcontent-%COMP%] {padding-top: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-44[_ngcontent-%COMP%] {padding-top: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-45[_ngcontent-%COMP%] {padding-top: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-46[_ngcontent-%COMP%] {padding-top: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-47[_ngcontent-%COMP%] {padding-top: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-48[_ngcontent-%COMP%] {padding-top: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-49[_ngcontent-%COMP%] {padding-top: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-50[_ngcontent-%COMP%] {padding-top: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-51[_ngcontent-%COMP%] {padding-top: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-52[_ngcontent-%COMP%] {padding-top: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-53[_ngcontent-%COMP%] {padding-top: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-54[_ngcontent-%COMP%] {padding-top: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-55[_ngcontent-%COMP%] {padding-top: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-56[_ngcontent-%COMP%] {padding-top: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-57[_ngcontent-%COMP%] {padding-top: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-58[_ngcontent-%COMP%] {padding-top: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-59[_ngcontent-%COMP%] {padding-top: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-60[_ngcontent-%COMP%] {padding-top: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-61[_ngcontent-%COMP%] {padding-top: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-62[_ngcontent-%COMP%] {padding-top: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-63[_ngcontent-%COMP%] {padding-top: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-64[_ngcontent-%COMP%] {padding-top: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-65[_ngcontent-%COMP%] {padding-top: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-66[_ngcontent-%COMP%] {padding-top: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-67[_ngcontent-%COMP%] {padding-top: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-68[_ngcontent-%COMP%] {padding-top: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-69[_ngcontent-%COMP%] {padding-top: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-70[_ngcontent-%COMP%] {padding-top: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-71[_ngcontent-%COMP%] {padding-top: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-72[_ngcontent-%COMP%] {padding-top: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-73[_ngcontent-%COMP%] {padding-top: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-74[_ngcontent-%COMP%] {padding-top: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-75[_ngcontent-%COMP%] {padding-top: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-76[_ngcontent-%COMP%] {padding-top: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-77[_ngcontent-%COMP%] {padding-top: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-78[_ngcontent-%COMP%] {padding-top: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-79[_ngcontent-%COMP%] {padding-top: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-80[_ngcontent-%COMP%] {padding-top: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-81[_ngcontent-%COMP%] {padding-top: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-82[_ngcontent-%COMP%] {padding-top: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-83[_ngcontent-%COMP%] {padding-top: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-84[_ngcontent-%COMP%] {padding-top: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-85[_ngcontent-%COMP%] {padding-top: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-86[_ngcontent-%COMP%] {padding-top: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-87[_ngcontent-%COMP%] {padding-top: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-88[_ngcontent-%COMP%] {padding-top: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-89[_ngcontent-%COMP%] {padding-top: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-90[_ngcontent-%COMP%] {padding-top: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-91[_ngcontent-%COMP%] {padding-top: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-92[_ngcontent-%COMP%] {padding-top: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-93[_ngcontent-%COMP%] {padding-top: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-94[_ngcontent-%COMP%] {padding-top: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-95[_ngcontent-%COMP%] {padding-top: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-96[_ngcontent-%COMP%] {padding-top: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-97[_ngcontent-%COMP%] {padding-top: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-98[_ngcontent-%COMP%] {padding-top: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-99[_ngcontent-%COMP%] {padding-top: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-100[_ngcontent-%COMP%] {padding-top: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-101[_ngcontent-%COMP%] {padding-top: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-102[_ngcontent-%COMP%] {padding-top: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-103[_ngcontent-%COMP%] {padding-top: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-104[_ngcontent-%COMP%] {padding-top: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-105[_ngcontent-%COMP%] {padding-top: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-106[_ngcontent-%COMP%] {padding-top: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-107[_ngcontent-%COMP%] {padding-top: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-108[_ngcontent-%COMP%] {padding-top: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-109[_ngcontent-%COMP%] {padding-top: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-110[_ngcontent-%COMP%] {padding-top: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-111[_ngcontent-%COMP%] {padding-top: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-112[_ngcontent-%COMP%] {padding-top: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-113[_ngcontent-%COMP%] {padding-top: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-114[_ngcontent-%COMP%] {padding-top: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-115[_ngcontent-%COMP%] {padding-top: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-116[_ngcontent-%COMP%] {padding-top: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-117[_ngcontent-%COMP%] {padding-top: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-118[_ngcontent-%COMP%] {padding-top: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-119[_ngcontent-%COMP%] {padding-top: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-120[_ngcontent-%COMP%] {padding-top: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-121[_ngcontent-%COMP%] {padding-top: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-122[_ngcontent-%COMP%] {padding-top: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-123[_ngcontent-%COMP%] {padding-top: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-124[_ngcontent-%COMP%] {padding-top: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-125[_ngcontent-%COMP%] {padding-top: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-126[_ngcontent-%COMP%] {padding-top: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-127[_ngcontent-%COMP%] {padding-top: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-128[_ngcontent-%COMP%] {padding-top: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-129[_ngcontent-%COMP%] {padding-top: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-130[_ngcontent-%COMP%] {padding-top: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-131[_ngcontent-%COMP%] {padding-top: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-132[_ngcontent-%COMP%] {padding-top: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-133[_ngcontent-%COMP%] {padding-top: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-134[_ngcontent-%COMP%] {padding-top: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-135[_ngcontent-%COMP%] {padding-top: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-136[_ngcontent-%COMP%] {padding-top: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-137[_ngcontent-%COMP%] {padding-top: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-138[_ngcontent-%COMP%] {padding-top: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-139[_ngcontent-%COMP%] {padding-top: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-140[_ngcontent-%COMP%] {padding-top: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-141[_ngcontent-%COMP%] {padding-top: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-142[_ngcontent-%COMP%] {padding-top: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-143[_ngcontent-%COMP%] {padding-top: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-144[_ngcontent-%COMP%] {padding-top: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-145[_ngcontent-%COMP%] {padding-top: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-146[_ngcontent-%COMP%] {padding-top: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-147[_ngcontent-%COMP%] {padding-top: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-148[_ngcontent-%COMP%] {padding-top: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-149[_ngcontent-%COMP%] {padding-top: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-150[_ngcontent-%COMP%] {padding-top: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-151[_ngcontent-%COMP%] {padding-top: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-152[_ngcontent-%COMP%] {padding-top: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-153[_ngcontent-%COMP%] {padding-top: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-154[_ngcontent-%COMP%] {padding-top: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-155[_ngcontent-%COMP%] {padding-top: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-156[_ngcontent-%COMP%] {padding-top: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-157[_ngcontent-%COMP%] {padding-top: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-158[_ngcontent-%COMP%] {padding-top: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-159[_ngcontent-%COMP%] {padding-top: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-160[_ngcontent-%COMP%] {padding-top: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-161[_ngcontent-%COMP%] {padding-top: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-162[_ngcontent-%COMP%] {padding-top: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-163[_ngcontent-%COMP%] {padding-top: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-164[_ngcontent-%COMP%] {padding-top: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-165[_ngcontent-%COMP%] {padding-top: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-166[_ngcontent-%COMP%] {padding-top: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-167[_ngcontent-%COMP%] {padding-top: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-168[_ngcontent-%COMP%] {padding-top: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-169[_ngcontent-%COMP%] {padding-top: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-170[_ngcontent-%COMP%] {padding-top: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-171[_ngcontent-%COMP%] {padding-top: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-172[_ngcontent-%COMP%] {padding-top: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-173[_ngcontent-%COMP%] {padding-top: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-174[_ngcontent-%COMP%] {padding-top: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-175[_ngcontent-%COMP%] {padding-top: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-176[_ngcontent-%COMP%] {padding-top: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-177[_ngcontent-%COMP%] {padding-top: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-178[_ngcontent-%COMP%] {padding-top: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-179[_ngcontent-%COMP%] {padding-top: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-180[_ngcontent-%COMP%] {padding-top: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-181[_ngcontent-%COMP%] {padding-top: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-182[_ngcontent-%COMP%] {padding-top: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-183[_ngcontent-%COMP%] {padding-top: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-184[_ngcontent-%COMP%] {padding-top: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-185[_ngcontent-%COMP%] {padding-top: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-186[_ngcontent-%COMP%] {padding-top: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-187[_ngcontent-%COMP%] {padding-top: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-188[_ngcontent-%COMP%] {padding-top: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-189[_ngcontent-%COMP%] {padding-top: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-190[_ngcontent-%COMP%] {padding-top: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-191[_ngcontent-%COMP%] {padding-top: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-192[_ngcontent-%COMP%] {padding-top: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-193[_ngcontent-%COMP%] {padding-top: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-194[_ngcontent-%COMP%] {padding-top: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-195[_ngcontent-%COMP%] {padding-top: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-196[_ngcontent-%COMP%] {padding-top: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-197[_ngcontent-%COMP%] {padding-top: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-198[_ngcontent-%COMP%] {padding-top: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-199[_ngcontent-%COMP%] {padding-top: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-200[_ngcontent-%COMP%] {padding-top: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-201[_ngcontent-%COMP%] {padding-top: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-202[_ngcontent-%COMP%] {padding-top: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-203[_ngcontent-%COMP%] {padding-top: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-204[_ngcontent-%COMP%] {padding-top: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-205[_ngcontent-%COMP%] {padding-top: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-206[_ngcontent-%COMP%] {padding-top: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-207[_ngcontent-%COMP%] {padding-top: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-208[_ngcontent-%COMP%] {padding-top: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-209[_ngcontent-%COMP%] {padding-top: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-210[_ngcontent-%COMP%] {padding-top: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-211[_ngcontent-%COMP%] {padding-top: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-212[_ngcontent-%COMP%] {padding-top: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-213[_ngcontent-%COMP%] {padding-top: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-214[_ngcontent-%COMP%] {padding-top: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-215[_ngcontent-%COMP%] {padding-top: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-216[_ngcontent-%COMP%] {padding-top: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-217[_ngcontent-%COMP%] {padding-top: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-218[_ngcontent-%COMP%] {padding-top: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-219[_ngcontent-%COMP%] {padding-top: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-220[_ngcontent-%COMP%] {padding-top: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-221[_ngcontent-%COMP%] {padding-top: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-222[_ngcontent-%COMP%] {padding-top: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-223[_ngcontent-%COMP%] {padding-top: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-224[_ngcontent-%COMP%] {padding-top: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-225[_ngcontent-%COMP%] {padding-top: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-226[_ngcontent-%COMP%] {padding-top: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-227[_ngcontent-%COMP%] {padding-top: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-228[_ngcontent-%COMP%] {padding-top: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-229[_ngcontent-%COMP%] {padding-top: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-230[_ngcontent-%COMP%] {padding-top: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-231[_ngcontent-%COMP%] {padding-top: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-232[_ngcontent-%COMP%] {padding-top: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-233[_ngcontent-%COMP%] {padding-top: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-234[_ngcontent-%COMP%] {padding-top: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-235[_ngcontent-%COMP%] {padding-top: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-236[_ngcontent-%COMP%] {padding-top: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-237[_ngcontent-%COMP%] {padding-top: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-238[_ngcontent-%COMP%] {padding-top: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-239[_ngcontent-%COMP%] {padding-top: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-240[_ngcontent-%COMP%] {padding-top: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-241[_ngcontent-%COMP%] {padding-top: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-242[_ngcontent-%COMP%] {padding-top: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-243[_ngcontent-%COMP%] {padding-top: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-244[_ngcontent-%COMP%] {padding-top: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-245[_ngcontent-%COMP%] {padding-top: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-246[_ngcontent-%COMP%] {padding-top: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-247[_ngcontent-%COMP%] {padding-top: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-248[_ngcontent-%COMP%] {padding-top: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-249[_ngcontent-%COMP%] {padding-top: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-t-250[_ngcontent-%COMP%] {padding-top: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-0[_ngcontent-%COMP%] {padding-bottom: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-1[_ngcontent-%COMP%] {padding-bottom: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-2[_ngcontent-%COMP%] {padding-bottom: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-3[_ngcontent-%COMP%] {padding-bottom: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-4[_ngcontent-%COMP%] {padding-bottom: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-5[_ngcontent-%COMP%] {padding-bottom: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-6[_ngcontent-%COMP%] {padding-bottom: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-7[_ngcontent-%COMP%] {padding-bottom: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-8[_ngcontent-%COMP%] {padding-bottom: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-9[_ngcontent-%COMP%] {padding-bottom: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-10[_ngcontent-%COMP%] {padding-bottom: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-11[_ngcontent-%COMP%] {padding-bottom: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-12[_ngcontent-%COMP%] {padding-bottom: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-13[_ngcontent-%COMP%] {padding-bottom: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-14[_ngcontent-%COMP%] {padding-bottom: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-15[_ngcontent-%COMP%] {padding-bottom: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-16[_ngcontent-%COMP%] {padding-bottom: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-17[_ngcontent-%COMP%] {padding-bottom: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-18[_ngcontent-%COMP%] {padding-bottom: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-19[_ngcontent-%COMP%] {padding-bottom: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-20[_ngcontent-%COMP%] {padding-bottom: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-21[_ngcontent-%COMP%] {padding-bottom: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-22[_ngcontent-%COMP%] {padding-bottom: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-23[_ngcontent-%COMP%] {padding-bottom: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-24[_ngcontent-%COMP%] {padding-bottom: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-25[_ngcontent-%COMP%] {padding-bottom: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-26[_ngcontent-%COMP%] {padding-bottom: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-27[_ngcontent-%COMP%] {padding-bottom: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-28[_ngcontent-%COMP%] {padding-bottom: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-29[_ngcontent-%COMP%] {padding-bottom: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-30[_ngcontent-%COMP%] {padding-bottom: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-31[_ngcontent-%COMP%] {padding-bottom: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-32[_ngcontent-%COMP%] {padding-bottom: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-33[_ngcontent-%COMP%] {padding-bottom: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-34[_ngcontent-%COMP%] {padding-bottom: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-35[_ngcontent-%COMP%] {padding-bottom: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-36[_ngcontent-%COMP%] {padding-bottom: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-37[_ngcontent-%COMP%] {padding-bottom: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-38[_ngcontent-%COMP%] {padding-bottom: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-39[_ngcontent-%COMP%] {padding-bottom: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-40[_ngcontent-%COMP%] {padding-bottom: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-41[_ngcontent-%COMP%] {padding-bottom: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-42[_ngcontent-%COMP%] {padding-bottom: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-43[_ngcontent-%COMP%] {padding-bottom: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-44[_ngcontent-%COMP%] {padding-bottom: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-45[_ngcontent-%COMP%] {padding-bottom: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-46[_ngcontent-%COMP%] {padding-bottom: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-47[_ngcontent-%COMP%] {padding-bottom: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-48[_ngcontent-%COMP%] {padding-bottom: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-49[_ngcontent-%COMP%] {padding-bottom: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-50[_ngcontent-%COMP%] {padding-bottom: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-51[_ngcontent-%COMP%] {padding-bottom: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-52[_ngcontent-%COMP%] {padding-bottom: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-53[_ngcontent-%COMP%] {padding-bottom: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-54[_ngcontent-%COMP%] {padding-bottom: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-55[_ngcontent-%COMP%] {padding-bottom: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-56[_ngcontent-%COMP%] {padding-bottom: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-57[_ngcontent-%COMP%] {padding-bottom: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-58[_ngcontent-%COMP%] {padding-bottom: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-59[_ngcontent-%COMP%] {padding-bottom: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-60[_ngcontent-%COMP%] {padding-bottom: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-61[_ngcontent-%COMP%] {padding-bottom: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-62[_ngcontent-%COMP%] {padding-bottom: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-63[_ngcontent-%COMP%] {padding-bottom: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-64[_ngcontent-%COMP%] {padding-bottom: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-65[_ngcontent-%COMP%] {padding-bottom: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-66[_ngcontent-%COMP%] {padding-bottom: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-67[_ngcontent-%COMP%] {padding-bottom: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-68[_ngcontent-%COMP%] {padding-bottom: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-69[_ngcontent-%COMP%] {padding-bottom: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-70[_ngcontent-%COMP%] {padding-bottom: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-71[_ngcontent-%COMP%] {padding-bottom: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-72[_ngcontent-%COMP%] {padding-bottom: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-73[_ngcontent-%COMP%] {padding-bottom: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-74[_ngcontent-%COMP%] {padding-bottom: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-75[_ngcontent-%COMP%] {padding-bottom: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-76[_ngcontent-%COMP%] {padding-bottom: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-77[_ngcontent-%COMP%] {padding-bottom: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-78[_ngcontent-%COMP%] {padding-bottom: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-79[_ngcontent-%COMP%] {padding-bottom: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-80[_ngcontent-%COMP%] {padding-bottom: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-81[_ngcontent-%COMP%] {padding-bottom: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-82[_ngcontent-%COMP%] {padding-bottom: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-83[_ngcontent-%COMP%] {padding-bottom: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-84[_ngcontent-%COMP%] {padding-bottom: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-85[_ngcontent-%COMP%] {padding-bottom: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-86[_ngcontent-%COMP%] {padding-bottom: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-87[_ngcontent-%COMP%] {padding-bottom: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-88[_ngcontent-%COMP%] {padding-bottom: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-89[_ngcontent-%COMP%] {padding-bottom: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-90[_ngcontent-%COMP%] {padding-bottom: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-91[_ngcontent-%COMP%] {padding-bottom: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-92[_ngcontent-%COMP%] {padding-bottom: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-93[_ngcontent-%COMP%] {padding-bottom: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-94[_ngcontent-%COMP%] {padding-bottom: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-95[_ngcontent-%COMP%] {padding-bottom: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-96[_ngcontent-%COMP%] {padding-bottom: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-97[_ngcontent-%COMP%] {padding-bottom: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-98[_ngcontent-%COMP%] {padding-bottom: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-99[_ngcontent-%COMP%] {padding-bottom: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-100[_ngcontent-%COMP%] {padding-bottom: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-101[_ngcontent-%COMP%] {padding-bottom: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-102[_ngcontent-%COMP%] {padding-bottom: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-103[_ngcontent-%COMP%] {padding-bottom: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-104[_ngcontent-%COMP%] {padding-bottom: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-105[_ngcontent-%COMP%] {padding-bottom: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-106[_ngcontent-%COMP%] {padding-bottom: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-107[_ngcontent-%COMP%] {padding-bottom: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-108[_ngcontent-%COMP%] {padding-bottom: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-109[_ngcontent-%COMP%] {padding-bottom: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-110[_ngcontent-%COMP%] {padding-bottom: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-111[_ngcontent-%COMP%] {padding-bottom: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-112[_ngcontent-%COMP%] {padding-bottom: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-113[_ngcontent-%COMP%] {padding-bottom: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-114[_ngcontent-%COMP%] {padding-bottom: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-115[_ngcontent-%COMP%] {padding-bottom: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-116[_ngcontent-%COMP%] {padding-bottom: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-117[_ngcontent-%COMP%] {padding-bottom: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-118[_ngcontent-%COMP%] {padding-bottom: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-119[_ngcontent-%COMP%] {padding-bottom: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-120[_ngcontent-%COMP%] {padding-bottom: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-121[_ngcontent-%COMP%] {padding-bottom: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-122[_ngcontent-%COMP%] {padding-bottom: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-123[_ngcontent-%COMP%] {padding-bottom: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-124[_ngcontent-%COMP%] {padding-bottom: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-125[_ngcontent-%COMP%] {padding-bottom: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-126[_ngcontent-%COMP%] {padding-bottom: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-127[_ngcontent-%COMP%] {padding-bottom: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-128[_ngcontent-%COMP%] {padding-bottom: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-129[_ngcontent-%COMP%] {padding-bottom: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-130[_ngcontent-%COMP%] {padding-bottom: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-131[_ngcontent-%COMP%] {padding-bottom: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-132[_ngcontent-%COMP%] {padding-bottom: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-133[_ngcontent-%COMP%] {padding-bottom: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-134[_ngcontent-%COMP%] {padding-bottom: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-135[_ngcontent-%COMP%] {padding-bottom: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-136[_ngcontent-%COMP%] {padding-bottom: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-137[_ngcontent-%COMP%] {padding-bottom: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-138[_ngcontent-%COMP%] {padding-bottom: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-139[_ngcontent-%COMP%] {padding-bottom: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-140[_ngcontent-%COMP%] {padding-bottom: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-141[_ngcontent-%COMP%] {padding-bottom: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-142[_ngcontent-%COMP%] {padding-bottom: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-143[_ngcontent-%COMP%] {padding-bottom: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-144[_ngcontent-%COMP%] {padding-bottom: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-145[_ngcontent-%COMP%] {padding-bottom: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-146[_ngcontent-%COMP%] {padding-bottom: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-147[_ngcontent-%COMP%] {padding-bottom: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-148[_ngcontent-%COMP%] {padding-bottom: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-149[_ngcontent-%COMP%] {padding-bottom: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-150[_ngcontent-%COMP%] {padding-bottom: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-151[_ngcontent-%COMP%] {padding-bottom: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-152[_ngcontent-%COMP%] {padding-bottom: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-153[_ngcontent-%COMP%] {padding-bottom: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-154[_ngcontent-%COMP%] {padding-bottom: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-155[_ngcontent-%COMP%] {padding-bottom: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-156[_ngcontent-%COMP%] {padding-bottom: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-157[_ngcontent-%COMP%] {padding-bottom: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-158[_ngcontent-%COMP%] {padding-bottom: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-159[_ngcontent-%COMP%] {padding-bottom: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-160[_ngcontent-%COMP%] {padding-bottom: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-161[_ngcontent-%COMP%] {padding-bottom: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-162[_ngcontent-%COMP%] {padding-bottom: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-163[_ngcontent-%COMP%] {padding-bottom: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-164[_ngcontent-%COMP%] {padding-bottom: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-165[_ngcontent-%COMP%] {padding-bottom: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-166[_ngcontent-%COMP%] {padding-bottom: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-167[_ngcontent-%COMP%] {padding-bottom: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-168[_ngcontent-%COMP%] {padding-bottom: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-169[_ngcontent-%COMP%] {padding-bottom: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-170[_ngcontent-%COMP%] {padding-bottom: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-171[_ngcontent-%COMP%] {padding-bottom: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-172[_ngcontent-%COMP%] {padding-bottom: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-173[_ngcontent-%COMP%] {padding-bottom: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-174[_ngcontent-%COMP%] {padding-bottom: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-175[_ngcontent-%COMP%] {padding-bottom: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-176[_ngcontent-%COMP%] {padding-bottom: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-177[_ngcontent-%COMP%] {padding-bottom: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-178[_ngcontent-%COMP%] {padding-bottom: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-179[_ngcontent-%COMP%] {padding-bottom: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-180[_ngcontent-%COMP%] {padding-bottom: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-181[_ngcontent-%COMP%] {padding-bottom: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-182[_ngcontent-%COMP%] {padding-bottom: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-183[_ngcontent-%COMP%] {padding-bottom: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-184[_ngcontent-%COMP%] {padding-bottom: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-185[_ngcontent-%COMP%] {padding-bottom: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-186[_ngcontent-%COMP%] {padding-bottom: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-187[_ngcontent-%COMP%] {padding-bottom: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-188[_ngcontent-%COMP%] {padding-bottom: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-189[_ngcontent-%COMP%] {padding-bottom: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-190[_ngcontent-%COMP%] {padding-bottom: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-191[_ngcontent-%COMP%] {padding-bottom: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-192[_ngcontent-%COMP%] {padding-bottom: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-193[_ngcontent-%COMP%] {padding-bottom: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-194[_ngcontent-%COMP%] {padding-bottom: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-195[_ngcontent-%COMP%] {padding-bottom: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-196[_ngcontent-%COMP%] {padding-bottom: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-197[_ngcontent-%COMP%] {padding-bottom: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-198[_ngcontent-%COMP%] {padding-bottom: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-199[_ngcontent-%COMP%] {padding-bottom: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-200[_ngcontent-%COMP%] {padding-bottom: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-201[_ngcontent-%COMP%] {padding-bottom: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-202[_ngcontent-%COMP%] {padding-bottom: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-203[_ngcontent-%COMP%] {padding-bottom: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-204[_ngcontent-%COMP%] {padding-bottom: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-205[_ngcontent-%COMP%] {padding-bottom: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-206[_ngcontent-%COMP%] {padding-bottom: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-207[_ngcontent-%COMP%] {padding-bottom: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-208[_ngcontent-%COMP%] {padding-bottom: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-209[_ngcontent-%COMP%] {padding-bottom: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-210[_ngcontent-%COMP%] {padding-bottom: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-211[_ngcontent-%COMP%] {padding-bottom: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-212[_ngcontent-%COMP%] {padding-bottom: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-213[_ngcontent-%COMP%] {padding-bottom: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-214[_ngcontent-%COMP%] {padding-bottom: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-215[_ngcontent-%COMP%] {padding-bottom: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-216[_ngcontent-%COMP%] {padding-bottom: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-217[_ngcontent-%COMP%] {padding-bottom: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-218[_ngcontent-%COMP%] {padding-bottom: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-219[_ngcontent-%COMP%] {padding-bottom: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-220[_ngcontent-%COMP%] {padding-bottom: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-221[_ngcontent-%COMP%] {padding-bottom: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-222[_ngcontent-%COMP%] {padding-bottom: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-223[_ngcontent-%COMP%] {padding-bottom: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-224[_ngcontent-%COMP%] {padding-bottom: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-225[_ngcontent-%COMP%] {padding-bottom: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-226[_ngcontent-%COMP%] {padding-bottom: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-227[_ngcontent-%COMP%] {padding-bottom: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-228[_ngcontent-%COMP%] {padding-bottom: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-229[_ngcontent-%COMP%] {padding-bottom: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-230[_ngcontent-%COMP%] {padding-bottom: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-231[_ngcontent-%COMP%] {padding-bottom: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-232[_ngcontent-%COMP%] {padding-bottom: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-233[_ngcontent-%COMP%] {padding-bottom: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-234[_ngcontent-%COMP%] {padding-bottom: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-235[_ngcontent-%COMP%] {padding-bottom: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-236[_ngcontent-%COMP%] {padding-bottom: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-237[_ngcontent-%COMP%] {padding-bottom: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-238[_ngcontent-%COMP%] {padding-bottom: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-239[_ngcontent-%COMP%] {padding-bottom: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-240[_ngcontent-%COMP%] {padding-bottom: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-241[_ngcontent-%COMP%] {padding-bottom: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-242[_ngcontent-%COMP%] {padding-bottom: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-243[_ngcontent-%COMP%] {padding-bottom: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-244[_ngcontent-%COMP%] {padding-bottom: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-245[_ngcontent-%COMP%] {padding-bottom: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-246[_ngcontent-%COMP%] {padding-bottom: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-247[_ngcontent-%COMP%] {padding-bottom: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-248[_ngcontent-%COMP%] {padding-bottom: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-249[_ngcontent-%COMP%] {padding-bottom: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-b-250[_ngcontent-%COMP%] {padding-bottom: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-0[_ngcontent-%COMP%] {padding-left: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-1[_ngcontent-%COMP%] {padding-left: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-2[_ngcontent-%COMP%] {padding-left: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-3[_ngcontent-%COMP%] {padding-left: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-4[_ngcontent-%COMP%] {padding-left: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-5[_ngcontent-%COMP%] {padding-left: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-6[_ngcontent-%COMP%] {padding-left: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-7[_ngcontent-%COMP%] {padding-left: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-8[_ngcontent-%COMP%] {padding-left: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-9[_ngcontent-%COMP%] {padding-left: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-10[_ngcontent-%COMP%] {padding-left: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-11[_ngcontent-%COMP%] {padding-left: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-12[_ngcontent-%COMP%] {padding-left: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-13[_ngcontent-%COMP%] {padding-left: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-14[_ngcontent-%COMP%] {padding-left: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-15[_ngcontent-%COMP%] {padding-left: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-16[_ngcontent-%COMP%] {padding-left: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-17[_ngcontent-%COMP%] {padding-left: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-18[_ngcontent-%COMP%] {padding-left: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-19[_ngcontent-%COMP%] {padding-left: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-20[_ngcontent-%COMP%] {padding-left: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-21[_ngcontent-%COMP%] {padding-left: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-22[_ngcontent-%COMP%] {padding-left: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-23[_ngcontent-%COMP%] {padding-left: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-24[_ngcontent-%COMP%] {padding-left: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-25[_ngcontent-%COMP%] {padding-left: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-26[_ngcontent-%COMP%] {padding-left: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-27[_ngcontent-%COMP%] {padding-left: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-28[_ngcontent-%COMP%] {padding-left: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-29[_ngcontent-%COMP%] {padding-left: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-30[_ngcontent-%COMP%] {padding-left: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-31[_ngcontent-%COMP%] {padding-left: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-32[_ngcontent-%COMP%] {padding-left: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-33[_ngcontent-%COMP%] {padding-left: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-34[_ngcontent-%COMP%] {padding-left: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-35[_ngcontent-%COMP%] {padding-left: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-36[_ngcontent-%COMP%] {padding-left: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-37[_ngcontent-%COMP%] {padding-left: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-38[_ngcontent-%COMP%] {padding-left: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-39[_ngcontent-%COMP%] {padding-left: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-40[_ngcontent-%COMP%] {padding-left: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-41[_ngcontent-%COMP%] {padding-left: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-42[_ngcontent-%COMP%] {padding-left: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-43[_ngcontent-%COMP%] {padding-left: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-44[_ngcontent-%COMP%] {padding-left: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-45[_ngcontent-%COMP%] {padding-left: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-46[_ngcontent-%COMP%] {padding-left: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-47[_ngcontent-%COMP%] {padding-left: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-48[_ngcontent-%COMP%] {padding-left: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-49[_ngcontent-%COMP%] {padding-left: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-50[_ngcontent-%COMP%] {padding-left: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-51[_ngcontent-%COMP%] {padding-left: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-52[_ngcontent-%COMP%] {padding-left: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-53[_ngcontent-%COMP%] {padding-left: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-54[_ngcontent-%COMP%] {padding-left: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-55[_ngcontent-%COMP%] {padding-left: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-56[_ngcontent-%COMP%] {padding-left: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-57[_ngcontent-%COMP%] {padding-left: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-58[_ngcontent-%COMP%] {padding-left: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-59[_ngcontent-%COMP%] {padding-left: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-60[_ngcontent-%COMP%] {padding-left: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-61[_ngcontent-%COMP%] {padding-left: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-62[_ngcontent-%COMP%] {padding-left: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-63[_ngcontent-%COMP%] {padding-left: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-64[_ngcontent-%COMP%] {padding-left: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-65[_ngcontent-%COMP%] {padding-left: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-66[_ngcontent-%COMP%] {padding-left: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-67[_ngcontent-%COMP%] {padding-left: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-68[_ngcontent-%COMP%] {padding-left: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-69[_ngcontent-%COMP%] {padding-left: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-70[_ngcontent-%COMP%] {padding-left: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-71[_ngcontent-%COMP%] {padding-left: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-72[_ngcontent-%COMP%] {padding-left: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-73[_ngcontent-%COMP%] {padding-left: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-74[_ngcontent-%COMP%] {padding-left: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-75[_ngcontent-%COMP%] {padding-left: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-76[_ngcontent-%COMP%] {padding-left: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-77[_ngcontent-%COMP%] {padding-left: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-78[_ngcontent-%COMP%] {padding-left: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-79[_ngcontent-%COMP%] {padding-left: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-80[_ngcontent-%COMP%] {padding-left: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-81[_ngcontent-%COMP%] {padding-left: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-82[_ngcontent-%COMP%] {padding-left: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-83[_ngcontent-%COMP%] {padding-left: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-84[_ngcontent-%COMP%] {padding-left: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-85[_ngcontent-%COMP%] {padding-left: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-86[_ngcontent-%COMP%] {padding-left: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-87[_ngcontent-%COMP%] {padding-left: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-88[_ngcontent-%COMP%] {padding-left: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-89[_ngcontent-%COMP%] {padding-left: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-90[_ngcontent-%COMP%] {padding-left: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-91[_ngcontent-%COMP%] {padding-left: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-92[_ngcontent-%COMP%] {padding-left: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-93[_ngcontent-%COMP%] {padding-left: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-94[_ngcontent-%COMP%] {padding-left: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-95[_ngcontent-%COMP%] {padding-left: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-96[_ngcontent-%COMP%] {padding-left: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-97[_ngcontent-%COMP%] {padding-left: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-98[_ngcontent-%COMP%] {padding-left: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-99[_ngcontent-%COMP%] {padding-left: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-100[_ngcontent-%COMP%] {padding-left: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-101[_ngcontent-%COMP%] {padding-left: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-102[_ngcontent-%COMP%] {padding-left: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-103[_ngcontent-%COMP%] {padding-left: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-104[_ngcontent-%COMP%] {padding-left: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-105[_ngcontent-%COMP%] {padding-left: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-106[_ngcontent-%COMP%] {padding-left: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-107[_ngcontent-%COMP%] {padding-left: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-108[_ngcontent-%COMP%] {padding-left: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-109[_ngcontent-%COMP%] {padding-left: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-110[_ngcontent-%COMP%] {padding-left: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-111[_ngcontent-%COMP%] {padding-left: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-112[_ngcontent-%COMP%] {padding-left: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-113[_ngcontent-%COMP%] {padding-left: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-114[_ngcontent-%COMP%] {padding-left: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-115[_ngcontent-%COMP%] {padding-left: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-116[_ngcontent-%COMP%] {padding-left: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-117[_ngcontent-%COMP%] {padding-left: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-118[_ngcontent-%COMP%] {padding-left: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-119[_ngcontent-%COMP%] {padding-left: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-120[_ngcontent-%COMP%] {padding-left: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-121[_ngcontent-%COMP%] {padding-left: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-122[_ngcontent-%COMP%] {padding-left: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-123[_ngcontent-%COMP%] {padding-left: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-124[_ngcontent-%COMP%] {padding-left: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-125[_ngcontent-%COMP%] {padding-left: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-126[_ngcontent-%COMP%] {padding-left: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-127[_ngcontent-%COMP%] {padding-left: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-128[_ngcontent-%COMP%] {padding-left: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-129[_ngcontent-%COMP%] {padding-left: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-130[_ngcontent-%COMP%] {padding-left: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-131[_ngcontent-%COMP%] {padding-left: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-132[_ngcontent-%COMP%] {padding-left: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-133[_ngcontent-%COMP%] {padding-left: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-134[_ngcontent-%COMP%] {padding-left: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-135[_ngcontent-%COMP%] {padding-left: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-136[_ngcontent-%COMP%] {padding-left: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-137[_ngcontent-%COMP%] {padding-left: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-138[_ngcontent-%COMP%] {padding-left: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-139[_ngcontent-%COMP%] {padding-left: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-140[_ngcontent-%COMP%] {padding-left: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-141[_ngcontent-%COMP%] {padding-left: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-142[_ngcontent-%COMP%] {padding-left: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-143[_ngcontent-%COMP%] {padding-left: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-144[_ngcontent-%COMP%] {padding-left: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-145[_ngcontent-%COMP%] {padding-left: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-146[_ngcontent-%COMP%] {padding-left: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-147[_ngcontent-%COMP%] {padding-left: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-148[_ngcontent-%COMP%] {padding-left: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-149[_ngcontent-%COMP%] {padding-left: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-150[_ngcontent-%COMP%] {padding-left: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-151[_ngcontent-%COMP%] {padding-left: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-152[_ngcontent-%COMP%] {padding-left: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-153[_ngcontent-%COMP%] {padding-left: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-154[_ngcontent-%COMP%] {padding-left: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-155[_ngcontent-%COMP%] {padding-left: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-156[_ngcontent-%COMP%] {padding-left: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-157[_ngcontent-%COMP%] {padding-left: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-158[_ngcontent-%COMP%] {padding-left: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-159[_ngcontent-%COMP%] {padding-left: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-160[_ngcontent-%COMP%] {padding-left: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-161[_ngcontent-%COMP%] {padding-left: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-162[_ngcontent-%COMP%] {padding-left: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-163[_ngcontent-%COMP%] {padding-left: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-164[_ngcontent-%COMP%] {padding-left: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-165[_ngcontent-%COMP%] {padding-left: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-166[_ngcontent-%COMP%] {padding-left: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-167[_ngcontent-%COMP%] {padding-left: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-168[_ngcontent-%COMP%] {padding-left: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-169[_ngcontent-%COMP%] {padding-left: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-170[_ngcontent-%COMP%] {padding-left: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-171[_ngcontent-%COMP%] {padding-left: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-172[_ngcontent-%COMP%] {padding-left: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-173[_ngcontent-%COMP%] {padding-left: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-174[_ngcontent-%COMP%] {padding-left: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-175[_ngcontent-%COMP%] {padding-left: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-176[_ngcontent-%COMP%] {padding-left: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-177[_ngcontent-%COMP%] {padding-left: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-178[_ngcontent-%COMP%] {padding-left: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-179[_ngcontent-%COMP%] {padding-left: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-180[_ngcontent-%COMP%] {padding-left: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-181[_ngcontent-%COMP%] {padding-left: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-182[_ngcontent-%COMP%] {padding-left: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-183[_ngcontent-%COMP%] {padding-left: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-184[_ngcontent-%COMP%] {padding-left: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-185[_ngcontent-%COMP%] {padding-left: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-186[_ngcontent-%COMP%] {padding-left: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-187[_ngcontent-%COMP%] {padding-left: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-188[_ngcontent-%COMP%] {padding-left: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-189[_ngcontent-%COMP%] {padding-left: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-190[_ngcontent-%COMP%] {padding-left: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-191[_ngcontent-%COMP%] {padding-left: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-192[_ngcontent-%COMP%] {padding-left: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-193[_ngcontent-%COMP%] {padding-left: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-194[_ngcontent-%COMP%] {padding-left: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-195[_ngcontent-%COMP%] {padding-left: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-196[_ngcontent-%COMP%] {padding-left: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-197[_ngcontent-%COMP%] {padding-left: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-198[_ngcontent-%COMP%] {padding-left: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-199[_ngcontent-%COMP%] {padding-left: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-200[_ngcontent-%COMP%] {padding-left: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-201[_ngcontent-%COMP%] {padding-left: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-202[_ngcontent-%COMP%] {padding-left: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-203[_ngcontent-%COMP%] {padding-left: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-204[_ngcontent-%COMP%] {padding-left: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-205[_ngcontent-%COMP%] {padding-left: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-206[_ngcontent-%COMP%] {padding-left: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-207[_ngcontent-%COMP%] {padding-left: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-208[_ngcontent-%COMP%] {padding-left: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-209[_ngcontent-%COMP%] {padding-left: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-210[_ngcontent-%COMP%] {padding-left: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-211[_ngcontent-%COMP%] {padding-left: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-212[_ngcontent-%COMP%] {padding-left: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-213[_ngcontent-%COMP%] {padding-left: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-214[_ngcontent-%COMP%] {padding-left: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-215[_ngcontent-%COMP%] {padding-left: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-216[_ngcontent-%COMP%] {padding-left: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-217[_ngcontent-%COMP%] {padding-left: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-218[_ngcontent-%COMP%] {padding-left: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-219[_ngcontent-%COMP%] {padding-left: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-220[_ngcontent-%COMP%] {padding-left: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-221[_ngcontent-%COMP%] {padding-left: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-222[_ngcontent-%COMP%] {padding-left: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-223[_ngcontent-%COMP%] {padding-left: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-224[_ngcontent-%COMP%] {padding-left: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-225[_ngcontent-%COMP%] {padding-left: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-226[_ngcontent-%COMP%] {padding-left: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-227[_ngcontent-%COMP%] {padding-left: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-228[_ngcontent-%COMP%] {padding-left: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-229[_ngcontent-%COMP%] {padding-left: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-230[_ngcontent-%COMP%] {padding-left: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-231[_ngcontent-%COMP%] {padding-left: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-232[_ngcontent-%COMP%] {padding-left: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-233[_ngcontent-%COMP%] {padding-left: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-234[_ngcontent-%COMP%] {padding-left: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-235[_ngcontent-%COMP%] {padding-left: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-236[_ngcontent-%COMP%] {padding-left: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-237[_ngcontent-%COMP%] {padding-left: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-238[_ngcontent-%COMP%] {padding-left: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-239[_ngcontent-%COMP%] {padding-left: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-240[_ngcontent-%COMP%] {padding-left: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-241[_ngcontent-%COMP%] {padding-left: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-242[_ngcontent-%COMP%] {padding-left: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-243[_ngcontent-%COMP%] {padding-left: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-244[_ngcontent-%COMP%] {padding-left: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-245[_ngcontent-%COMP%] {padding-left: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-246[_ngcontent-%COMP%] {padding-left: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-247[_ngcontent-%COMP%] {padding-left: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-248[_ngcontent-%COMP%] {padding-left: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-249[_ngcontent-%COMP%] {padding-left: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-l-250[_ngcontent-%COMP%] {padding-left: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-0[_ngcontent-%COMP%] {padding-right: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-1[_ngcontent-%COMP%] {padding-right: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-2[_ngcontent-%COMP%] {padding-right: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-3[_ngcontent-%COMP%] {padding-right: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-4[_ngcontent-%COMP%] {padding-right: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-5[_ngcontent-%COMP%] {padding-right: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-6[_ngcontent-%COMP%] {padding-right: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-7[_ngcontent-%COMP%] {padding-right: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-8[_ngcontent-%COMP%] {padding-right: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-9[_ngcontent-%COMP%] {padding-right: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-10[_ngcontent-%COMP%] {padding-right: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-11[_ngcontent-%COMP%] {padding-right: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-12[_ngcontent-%COMP%] {padding-right: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-13[_ngcontent-%COMP%] {padding-right: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-14[_ngcontent-%COMP%] {padding-right: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-15[_ngcontent-%COMP%] {padding-right: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-16[_ngcontent-%COMP%] {padding-right: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-17[_ngcontent-%COMP%] {padding-right: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-18[_ngcontent-%COMP%] {padding-right: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-19[_ngcontent-%COMP%] {padding-right: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-20[_ngcontent-%COMP%] {padding-right: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-21[_ngcontent-%COMP%] {padding-right: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-22[_ngcontent-%COMP%] {padding-right: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-23[_ngcontent-%COMP%] {padding-right: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-24[_ngcontent-%COMP%] {padding-right: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-25[_ngcontent-%COMP%] {padding-right: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-26[_ngcontent-%COMP%] {padding-right: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-27[_ngcontent-%COMP%] {padding-right: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-28[_ngcontent-%COMP%] {padding-right: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-29[_ngcontent-%COMP%] {padding-right: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-30[_ngcontent-%COMP%] {padding-right: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-31[_ngcontent-%COMP%] {padding-right: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-32[_ngcontent-%COMP%] {padding-right: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-33[_ngcontent-%COMP%] {padding-right: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-34[_ngcontent-%COMP%] {padding-right: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-35[_ngcontent-%COMP%] {padding-right: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-36[_ngcontent-%COMP%] {padding-right: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-37[_ngcontent-%COMP%] {padding-right: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-38[_ngcontent-%COMP%] {padding-right: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-39[_ngcontent-%COMP%] {padding-right: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-40[_ngcontent-%COMP%] {padding-right: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-41[_ngcontent-%COMP%] {padding-right: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-42[_ngcontent-%COMP%] {padding-right: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-43[_ngcontent-%COMP%] {padding-right: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-44[_ngcontent-%COMP%] {padding-right: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-45[_ngcontent-%COMP%] {padding-right: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-46[_ngcontent-%COMP%] {padding-right: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-47[_ngcontent-%COMP%] {padding-right: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-48[_ngcontent-%COMP%] {padding-right: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-49[_ngcontent-%COMP%] {padding-right: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-50[_ngcontent-%COMP%] {padding-right: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-51[_ngcontent-%COMP%] {padding-right: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-52[_ngcontent-%COMP%] {padding-right: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-53[_ngcontent-%COMP%] {padding-right: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-54[_ngcontent-%COMP%] {padding-right: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-55[_ngcontent-%COMP%] {padding-right: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-56[_ngcontent-%COMP%] {padding-right: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-57[_ngcontent-%COMP%] {padding-right: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-58[_ngcontent-%COMP%] {padding-right: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-59[_ngcontent-%COMP%] {padding-right: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-60[_ngcontent-%COMP%] {padding-right: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-61[_ngcontent-%COMP%] {padding-right: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-62[_ngcontent-%COMP%] {padding-right: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-63[_ngcontent-%COMP%] {padding-right: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-64[_ngcontent-%COMP%] {padding-right: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-65[_ngcontent-%COMP%] {padding-right: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-66[_ngcontent-%COMP%] {padding-right: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-67[_ngcontent-%COMP%] {padding-right: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-68[_ngcontent-%COMP%] {padding-right: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-69[_ngcontent-%COMP%] {padding-right: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-70[_ngcontent-%COMP%] {padding-right: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-71[_ngcontent-%COMP%] {padding-right: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-72[_ngcontent-%COMP%] {padding-right: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-73[_ngcontent-%COMP%] {padding-right: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-74[_ngcontent-%COMP%] {padding-right: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-75[_ngcontent-%COMP%] {padding-right: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-76[_ngcontent-%COMP%] {padding-right: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-77[_ngcontent-%COMP%] {padding-right: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-78[_ngcontent-%COMP%] {padding-right: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-79[_ngcontent-%COMP%] {padding-right: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-80[_ngcontent-%COMP%] {padding-right: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-81[_ngcontent-%COMP%] {padding-right: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-82[_ngcontent-%COMP%] {padding-right: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-83[_ngcontent-%COMP%] {padding-right: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-84[_ngcontent-%COMP%] {padding-right: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-85[_ngcontent-%COMP%] {padding-right: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-86[_ngcontent-%COMP%] {padding-right: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-87[_ngcontent-%COMP%] {padding-right: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-88[_ngcontent-%COMP%] {padding-right: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-89[_ngcontent-%COMP%] {padding-right: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-90[_ngcontent-%COMP%] {padding-right: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-91[_ngcontent-%COMP%] {padding-right: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-92[_ngcontent-%COMP%] {padding-right: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-93[_ngcontent-%COMP%] {padding-right: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-94[_ngcontent-%COMP%] {padding-right: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-95[_ngcontent-%COMP%] {padding-right: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-96[_ngcontent-%COMP%] {padding-right: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-97[_ngcontent-%COMP%] {padding-right: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-98[_ngcontent-%COMP%] {padding-right: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-99[_ngcontent-%COMP%] {padding-right: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-100[_ngcontent-%COMP%] {padding-right: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-101[_ngcontent-%COMP%] {padding-right: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-102[_ngcontent-%COMP%] {padding-right: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-103[_ngcontent-%COMP%] {padding-right: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-104[_ngcontent-%COMP%] {padding-right: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-105[_ngcontent-%COMP%] {padding-right: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-106[_ngcontent-%COMP%] {padding-right: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-107[_ngcontent-%COMP%] {padding-right: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-108[_ngcontent-%COMP%] {padding-right: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-109[_ngcontent-%COMP%] {padding-right: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-110[_ngcontent-%COMP%] {padding-right: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-111[_ngcontent-%COMP%] {padding-right: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-112[_ngcontent-%COMP%] {padding-right: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-113[_ngcontent-%COMP%] {padding-right: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-114[_ngcontent-%COMP%] {padding-right: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-115[_ngcontent-%COMP%] {padding-right: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-116[_ngcontent-%COMP%] {padding-right: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-117[_ngcontent-%COMP%] {padding-right: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-118[_ngcontent-%COMP%] {padding-right: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-119[_ngcontent-%COMP%] {padding-right: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-120[_ngcontent-%COMP%] {padding-right: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-121[_ngcontent-%COMP%] {padding-right: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-122[_ngcontent-%COMP%] {padding-right: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-123[_ngcontent-%COMP%] {padding-right: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-124[_ngcontent-%COMP%] {padding-right: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-125[_ngcontent-%COMP%] {padding-right: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-126[_ngcontent-%COMP%] {padding-right: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-127[_ngcontent-%COMP%] {padding-right: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-128[_ngcontent-%COMP%] {padding-right: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-129[_ngcontent-%COMP%] {padding-right: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-130[_ngcontent-%COMP%] {padding-right: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-131[_ngcontent-%COMP%] {padding-right: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-132[_ngcontent-%COMP%] {padding-right: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-133[_ngcontent-%COMP%] {padding-right: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-134[_ngcontent-%COMP%] {padding-right: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-135[_ngcontent-%COMP%] {padding-right: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-136[_ngcontent-%COMP%] {padding-right: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-137[_ngcontent-%COMP%] {padding-right: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-138[_ngcontent-%COMP%] {padding-right: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-139[_ngcontent-%COMP%] {padding-right: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-140[_ngcontent-%COMP%] {padding-right: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-141[_ngcontent-%COMP%] {padding-right: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-142[_ngcontent-%COMP%] {padding-right: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-143[_ngcontent-%COMP%] {padding-right: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-144[_ngcontent-%COMP%] {padding-right: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-145[_ngcontent-%COMP%] {padding-right: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-146[_ngcontent-%COMP%] {padding-right: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-147[_ngcontent-%COMP%] {padding-right: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-148[_ngcontent-%COMP%] {padding-right: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-149[_ngcontent-%COMP%] {padding-right: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-150[_ngcontent-%COMP%] {padding-right: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-151[_ngcontent-%COMP%] {padding-right: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-152[_ngcontent-%COMP%] {padding-right: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-153[_ngcontent-%COMP%] {padding-right: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-154[_ngcontent-%COMP%] {padding-right: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-155[_ngcontent-%COMP%] {padding-right: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-156[_ngcontent-%COMP%] {padding-right: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-157[_ngcontent-%COMP%] {padding-right: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-158[_ngcontent-%COMP%] {padding-right: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-159[_ngcontent-%COMP%] {padding-right: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-160[_ngcontent-%COMP%] {padding-right: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-161[_ngcontent-%COMP%] {padding-right: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-162[_ngcontent-%COMP%] {padding-right: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-163[_ngcontent-%COMP%] {padding-right: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-164[_ngcontent-%COMP%] {padding-right: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-165[_ngcontent-%COMP%] {padding-right: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-166[_ngcontent-%COMP%] {padding-right: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-167[_ngcontent-%COMP%] {padding-right: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-168[_ngcontent-%COMP%] {padding-right: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-169[_ngcontent-%COMP%] {padding-right: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-170[_ngcontent-%COMP%] {padding-right: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-171[_ngcontent-%COMP%] {padding-right: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-172[_ngcontent-%COMP%] {padding-right: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-173[_ngcontent-%COMP%] {padding-right: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-174[_ngcontent-%COMP%] {padding-right: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-175[_ngcontent-%COMP%] {padding-right: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-176[_ngcontent-%COMP%] {padding-right: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-177[_ngcontent-%COMP%] {padding-right: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-178[_ngcontent-%COMP%] {padding-right: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-179[_ngcontent-%COMP%] {padding-right: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-180[_ngcontent-%COMP%] {padding-right: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-181[_ngcontent-%COMP%] {padding-right: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-182[_ngcontent-%COMP%] {padding-right: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-183[_ngcontent-%COMP%] {padding-right: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-184[_ngcontent-%COMP%] {padding-right: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-185[_ngcontent-%COMP%] {padding-right: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-186[_ngcontent-%COMP%] {padding-right: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-187[_ngcontent-%COMP%] {padding-right: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-188[_ngcontent-%COMP%] {padding-right: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-189[_ngcontent-%COMP%] {padding-right: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-190[_ngcontent-%COMP%] {padding-right: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-191[_ngcontent-%COMP%] {padding-right: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-192[_ngcontent-%COMP%] {padding-right: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-193[_ngcontent-%COMP%] {padding-right: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-194[_ngcontent-%COMP%] {padding-right: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-195[_ngcontent-%COMP%] {padding-right: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-196[_ngcontent-%COMP%] {padding-right: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-197[_ngcontent-%COMP%] {padding-right: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-198[_ngcontent-%COMP%] {padding-right: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-199[_ngcontent-%COMP%] {padding-right: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-200[_ngcontent-%COMP%] {padding-right: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-201[_ngcontent-%COMP%] {padding-right: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-202[_ngcontent-%COMP%] {padding-right: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-203[_ngcontent-%COMP%] {padding-right: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-204[_ngcontent-%COMP%] {padding-right: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-205[_ngcontent-%COMP%] {padding-right: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-206[_ngcontent-%COMP%] {padding-right: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-207[_ngcontent-%COMP%] {padding-right: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-208[_ngcontent-%COMP%] {padding-right: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-209[_ngcontent-%COMP%] {padding-right: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-210[_ngcontent-%COMP%] {padding-right: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-211[_ngcontent-%COMP%] {padding-right: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-212[_ngcontent-%COMP%] {padding-right: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-213[_ngcontent-%COMP%] {padding-right: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-214[_ngcontent-%COMP%] {padding-right: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-215[_ngcontent-%COMP%] {padding-right: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-216[_ngcontent-%COMP%] {padding-right: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-217[_ngcontent-%COMP%] {padding-right: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-218[_ngcontent-%COMP%] {padding-right: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-219[_ngcontent-%COMP%] {padding-right: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-220[_ngcontent-%COMP%] {padding-right: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-221[_ngcontent-%COMP%] {padding-right: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-222[_ngcontent-%COMP%] {padding-right: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-223[_ngcontent-%COMP%] {padding-right: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-224[_ngcontent-%COMP%] {padding-right: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-225[_ngcontent-%COMP%] {padding-right: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-226[_ngcontent-%COMP%] {padding-right: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-227[_ngcontent-%COMP%] {padding-right: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-228[_ngcontent-%COMP%] {padding-right: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-229[_ngcontent-%COMP%] {padding-right: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-230[_ngcontent-%COMP%] {padding-right: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-231[_ngcontent-%COMP%] {padding-right: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-232[_ngcontent-%COMP%] {padding-right: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-233[_ngcontent-%COMP%] {padding-right: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-234[_ngcontent-%COMP%] {padding-right: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-235[_ngcontent-%COMP%] {padding-right: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-236[_ngcontent-%COMP%] {padding-right: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-237[_ngcontent-%COMP%] {padding-right: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-238[_ngcontent-%COMP%] {padding-right: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-239[_ngcontent-%COMP%] {padding-right: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-240[_ngcontent-%COMP%] {padding-right: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-241[_ngcontent-%COMP%] {padding-right: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-242[_ngcontent-%COMP%] {padding-right: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-243[_ngcontent-%COMP%] {padding-right: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-244[_ngcontent-%COMP%] {padding-right: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-245[_ngcontent-%COMP%] {padding-right: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-246[_ngcontent-%COMP%] {padding-right: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-247[_ngcontent-%COMP%] {padding-right: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-248[_ngcontent-%COMP%] {padding-right: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-249[_ngcontent-%COMP%] {padding-right: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .p-r-250[_ngcontent-%COMP%] {padding-right: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-0[_ngcontent-%COMP%] {margin-top: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-1[_ngcontent-%COMP%] {margin-top: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-2[_ngcontent-%COMP%] {margin-top: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-3[_ngcontent-%COMP%] {margin-top: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-4[_ngcontent-%COMP%] {margin-top: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-5[_ngcontent-%COMP%] {margin-top: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-6[_ngcontent-%COMP%] {margin-top: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-7[_ngcontent-%COMP%] {margin-top: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-8[_ngcontent-%COMP%] {margin-top: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-9[_ngcontent-%COMP%] {margin-top: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-10[_ngcontent-%COMP%] {margin-top: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-11[_ngcontent-%COMP%] {margin-top: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-12[_ngcontent-%COMP%] {margin-top: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-13[_ngcontent-%COMP%] {margin-top: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-14[_ngcontent-%COMP%] {margin-top: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-15[_ngcontent-%COMP%] {margin-top: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-16[_ngcontent-%COMP%] {margin-top: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-17[_ngcontent-%COMP%] {margin-top: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-18[_ngcontent-%COMP%] {margin-top: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-19[_ngcontent-%COMP%] {margin-top: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-20[_ngcontent-%COMP%] {margin-top: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-21[_ngcontent-%COMP%] {margin-top: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-22[_ngcontent-%COMP%] {margin-top: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-23[_ngcontent-%COMP%] {margin-top: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-24[_ngcontent-%COMP%] {margin-top: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-25[_ngcontent-%COMP%] {margin-top: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-26[_ngcontent-%COMP%] {margin-top: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-27[_ngcontent-%COMP%] {margin-top: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-28[_ngcontent-%COMP%] {margin-top: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-29[_ngcontent-%COMP%] {margin-top: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-30[_ngcontent-%COMP%] {margin-top: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-31[_ngcontent-%COMP%] {margin-top: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-32[_ngcontent-%COMP%] {margin-top: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-33[_ngcontent-%COMP%] {margin-top: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-34[_ngcontent-%COMP%] {margin-top: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-35[_ngcontent-%COMP%] {margin-top: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-36[_ngcontent-%COMP%] {margin-top: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-37[_ngcontent-%COMP%] {margin-top: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-38[_ngcontent-%COMP%] {margin-top: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-39[_ngcontent-%COMP%] {margin-top: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-40[_ngcontent-%COMP%] {margin-top: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-41[_ngcontent-%COMP%] {margin-top: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-42[_ngcontent-%COMP%] {margin-top: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-43[_ngcontent-%COMP%] {margin-top: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-44[_ngcontent-%COMP%] {margin-top: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-45[_ngcontent-%COMP%] {margin-top: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-46[_ngcontent-%COMP%] {margin-top: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-47[_ngcontent-%COMP%] {margin-top: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-48[_ngcontent-%COMP%] {margin-top: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-49[_ngcontent-%COMP%] {margin-top: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-50[_ngcontent-%COMP%] {margin-top: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-51[_ngcontent-%COMP%] {margin-top: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-52[_ngcontent-%COMP%] {margin-top: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-53[_ngcontent-%COMP%] {margin-top: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-54[_ngcontent-%COMP%] {margin-top: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-55[_ngcontent-%COMP%] {margin-top: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-56[_ngcontent-%COMP%] {margin-top: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-57[_ngcontent-%COMP%] {margin-top: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-58[_ngcontent-%COMP%] {margin-top: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-59[_ngcontent-%COMP%] {margin-top: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-60[_ngcontent-%COMP%] {margin-top: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-61[_ngcontent-%COMP%] {margin-top: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-62[_ngcontent-%COMP%] {margin-top: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-63[_ngcontent-%COMP%] {margin-top: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-64[_ngcontent-%COMP%] {margin-top: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-65[_ngcontent-%COMP%] {margin-top: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-66[_ngcontent-%COMP%] {margin-top: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-67[_ngcontent-%COMP%] {margin-top: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-68[_ngcontent-%COMP%] {margin-top: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-69[_ngcontent-%COMP%] {margin-top: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-70[_ngcontent-%COMP%] {margin-top: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-71[_ngcontent-%COMP%] {margin-top: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-72[_ngcontent-%COMP%] {margin-top: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-73[_ngcontent-%COMP%] {margin-top: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-74[_ngcontent-%COMP%] {margin-top: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-75[_ngcontent-%COMP%] {margin-top: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-76[_ngcontent-%COMP%] {margin-top: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-77[_ngcontent-%COMP%] {margin-top: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-78[_ngcontent-%COMP%] {margin-top: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-79[_ngcontent-%COMP%] {margin-top: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-80[_ngcontent-%COMP%] {margin-top: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-81[_ngcontent-%COMP%] {margin-top: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-82[_ngcontent-%COMP%] {margin-top: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-83[_ngcontent-%COMP%] {margin-top: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-84[_ngcontent-%COMP%] {margin-top: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-85[_ngcontent-%COMP%] {margin-top: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-86[_ngcontent-%COMP%] {margin-top: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-87[_ngcontent-%COMP%] {margin-top: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-88[_ngcontent-%COMP%] {margin-top: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-89[_ngcontent-%COMP%] {margin-top: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-90[_ngcontent-%COMP%] {margin-top: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-91[_ngcontent-%COMP%] {margin-top: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-92[_ngcontent-%COMP%] {margin-top: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-93[_ngcontent-%COMP%] {margin-top: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-94[_ngcontent-%COMP%] {margin-top: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-95[_ngcontent-%COMP%] {margin-top: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-96[_ngcontent-%COMP%] {margin-top: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-97[_ngcontent-%COMP%] {margin-top: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-98[_ngcontent-%COMP%] {margin-top: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-99[_ngcontent-%COMP%] {margin-top: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-100[_ngcontent-%COMP%] {margin-top: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-101[_ngcontent-%COMP%] {margin-top: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-102[_ngcontent-%COMP%] {margin-top: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-103[_ngcontent-%COMP%] {margin-top: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-104[_ngcontent-%COMP%] {margin-top: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-105[_ngcontent-%COMP%] {margin-top: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-106[_ngcontent-%COMP%] {margin-top: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-107[_ngcontent-%COMP%] {margin-top: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-108[_ngcontent-%COMP%] {margin-top: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-109[_ngcontent-%COMP%] {margin-top: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-110[_ngcontent-%COMP%] {margin-top: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-111[_ngcontent-%COMP%] {margin-top: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-112[_ngcontent-%COMP%] {margin-top: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-113[_ngcontent-%COMP%] {margin-top: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-114[_ngcontent-%COMP%] {margin-top: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-115[_ngcontent-%COMP%] {margin-top: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-116[_ngcontent-%COMP%] {margin-top: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-117[_ngcontent-%COMP%] {margin-top: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-118[_ngcontent-%COMP%] {margin-top: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-119[_ngcontent-%COMP%] {margin-top: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-120[_ngcontent-%COMP%] {margin-top: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-121[_ngcontent-%COMP%] {margin-top: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-122[_ngcontent-%COMP%] {margin-top: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-123[_ngcontent-%COMP%] {margin-top: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-124[_ngcontent-%COMP%] {margin-top: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-125[_ngcontent-%COMP%] {margin-top: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-126[_ngcontent-%COMP%] {margin-top: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-127[_ngcontent-%COMP%] {margin-top: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-128[_ngcontent-%COMP%] {margin-top: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-129[_ngcontent-%COMP%] {margin-top: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-130[_ngcontent-%COMP%] {margin-top: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-131[_ngcontent-%COMP%] {margin-top: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-132[_ngcontent-%COMP%] {margin-top: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-133[_ngcontent-%COMP%] {margin-top: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-134[_ngcontent-%COMP%] {margin-top: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-135[_ngcontent-%COMP%] {margin-top: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-136[_ngcontent-%COMP%] {margin-top: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-137[_ngcontent-%COMP%] {margin-top: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-138[_ngcontent-%COMP%] {margin-top: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-139[_ngcontent-%COMP%] {margin-top: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-140[_ngcontent-%COMP%] {margin-top: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-141[_ngcontent-%COMP%] {margin-top: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-142[_ngcontent-%COMP%] {margin-top: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-143[_ngcontent-%COMP%] {margin-top: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-144[_ngcontent-%COMP%] {margin-top: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-145[_ngcontent-%COMP%] {margin-top: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-146[_ngcontent-%COMP%] {margin-top: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-147[_ngcontent-%COMP%] {margin-top: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-148[_ngcontent-%COMP%] {margin-top: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-149[_ngcontent-%COMP%] {margin-top: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-150[_ngcontent-%COMP%] {margin-top: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-151[_ngcontent-%COMP%] {margin-top: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-152[_ngcontent-%COMP%] {margin-top: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-153[_ngcontent-%COMP%] {margin-top: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-154[_ngcontent-%COMP%] {margin-top: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-155[_ngcontent-%COMP%] {margin-top: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-156[_ngcontent-%COMP%] {margin-top: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-157[_ngcontent-%COMP%] {margin-top: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-158[_ngcontent-%COMP%] {margin-top: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-159[_ngcontent-%COMP%] {margin-top: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-160[_ngcontent-%COMP%] {margin-top: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-161[_ngcontent-%COMP%] {margin-top: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-162[_ngcontent-%COMP%] {margin-top: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-163[_ngcontent-%COMP%] {margin-top: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-164[_ngcontent-%COMP%] {margin-top: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-165[_ngcontent-%COMP%] {margin-top: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-166[_ngcontent-%COMP%] {margin-top: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-167[_ngcontent-%COMP%] {margin-top: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-168[_ngcontent-%COMP%] {margin-top: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-169[_ngcontent-%COMP%] {margin-top: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-170[_ngcontent-%COMP%] {margin-top: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-171[_ngcontent-%COMP%] {margin-top: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-172[_ngcontent-%COMP%] {margin-top: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-173[_ngcontent-%COMP%] {margin-top: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-174[_ngcontent-%COMP%] {margin-top: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-175[_ngcontent-%COMP%] {margin-top: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-176[_ngcontent-%COMP%] {margin-top: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-177[_ngcontent-%COMP%] {margin-top: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-178[_ngcontent-%COMP%] {margin-top: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-179[_ngcontent-%COMP%] {margin-top: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-180[_ngcontent-%COMP%] {margin-top: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-181[_ngcontent-%COMP%] {margin-top: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-182[_ngcontent-%COMP%] {margin-top: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-183[_ngcontent-%COMP%] {margin-top: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-184[_ngcontent-%COMP%] {margin-top: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-185[_ngcontent-%COMP%] {margin-top: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-186[_ngcontent-%COMP%] {margin-top: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-187[_ngcontent-%COMP%] {margin-top: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-188[_ngcontent-%COMP%] {margin-top: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-189[_ngcontent-%COMP%] {margin-top: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-190[_ngcontent-%COMP%] {margin-top: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-191[_ngcontent-%COMP%] {margin-top: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-192[_ngcontent-%COMP%] {margin-top: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-193[_ngcontent-%COMP%] {margin-top: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-194[_ngcontent-%COMP%] {margin-top: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-195[_ngcontent-%COMP%] {margin-top: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-196[_ngcontent-%COMP%] {margin-top: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-197[_ngcontent-%COMP%] {margin-top: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-198[_ngcontent-%COMP%] {margin-top: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-199[_ngcontent-%COMP%] {margin-top: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-200[_ngcontent-%COMP%] {margin-top: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-201[_ngcontent-%COMP%] {margin-top: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-202[_ngcontent-%COMP%] {margin-top: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-203[_ngcontent-%COMP%] {margin-top: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-204[_ngcontent-%COMP%] {margin-top: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-205[_ngcontent-%COMP%] {margin-top: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-206[_ngcontent-%COMP%] {margin-top: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-207[_ngcontent-%COMP%] {margin-top: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-208[_ngcontent-%COMP%] {margin-top: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-209[_ngcontent-%COMP%] {margin-top: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-210[_ngcontent-%COMP%] {margin-top: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-211[_ngcontent-%COMP%] {margin-top: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-212[_ngcontent-%COMP%] {margin-top: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-213[_ngcontent-%COMP%] {margin-top: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-214[_ngcontent-%COMP%] {margin-top: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-215[_ngcontent-%COMP%] {margin-top: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-216[_ngcontent-%COMP%] {margin-top: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-217[_ngcontent-%COMP%] {margin-top: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-218[_ngcontent-%COMP%] {margin-top: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-219[_ngcontent-%COMP%] {margin-top: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-220[_ngcontent-%COMP%] {margin-top: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-221[_ngcontent-%COMP%] {margin-top: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-222[_ngcontent-%COMP%] {margin-top: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-223[_ngcontent-%COMP%] {margin-top: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-224[_ngcontent-%COMP%] {margin-top: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-225[_ngcontent-%COMP%] {margin-top: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-226[_ngcontent-%COMP%] {margin-top: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-227[_ngcontent-%COMP%] {margin-top: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-228[_ngcontent-%COMP%] {margin-top: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-229[_ngcontent-%COMP%] {margin-top: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-230[_ngcontent-%COMP%] {margin-top: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-231[_ngcontent-%COMP%] {margin-top: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-232[_ngcontent-%COMP%] {margin-top: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-233[_ngcontent-%COMP%] {margin-top: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-234[_ngcontent-%COMP%] {margin-top: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-235[_ngcontent-%COMP%] {margin-top: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-236[_ngcontent-%COMP%] {margin-top: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-237[_ngcontent-%COMP%] {margin-top: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-238[_ngcontent-%COMP%] {margin-top: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-239[_ngcontent-%COMP%] {margin-top: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-240[_ngcontent-%COMP%] {margin-top: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-241[_ngcontent-%COMP%] {margin-top: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-242[_ngcontent-%COMP%] {margin-top: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-243[_ngcontent-%COMP%] {margin-top: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-244[_ngcontent-%COMP%] {margin-top: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-245[_ngcontent-%COMP%] {margin-top: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-246[_ngcontent-%COMP%] {margin-top: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-247[_ngcontent-%COMP%] {margin-top: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-248[_ngcontent-%COMP%] {margin-top: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-249[_ngcontent-%COMP%] {margin-top: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-t-250[_ngcontent-%COMP%] {margin-top: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-0[_ngcontent-%COMP%] {margin-bottom: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-1[_ngcontent-%COMP%] {margin-bottom: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-2[_ngcontent-%COMP%] {margin-bottom: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-3[_ngcontent-%COMP%] {margin-bottom: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-4[_ngcontent-%COMP%] {margin-bottom: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-5[_ngcontent-%COMP%] {margin-bottom: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-6[_ngcontent-%COMP%] {margin-bottom: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-7[_ngcontent-%COMP%] {margin-bottom: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-8[_ngcontent-%COMP%] {margin-bottom: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-9[_ngcontent-%COMP%] {margin-bottom: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-10[_ngcontent-%COMP%] {margin-bottom: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-11[_ngcontent-%COMP%] {margin-bottom: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-12[_ngcontent-%COMP%] {margin-bottom: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-13[_ngcontent-%COMP%] {margin-bottom: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-14[_ngcontent-%COMP%] {margin-bottom: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-15[_ngcontent-%COMP%] {margin-bottom: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-16[_ngcontent-%COMP%] {margin-bottom: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-17[_ngcontent-%COMP%] {margin-bottom: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-18[_ngcontent-%COMP%] {margin-bottom: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-19[_ngcontent-%COMP%] {margin-bottom: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-20[_ngcontent-%COMP%] {margin-bottom: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-21[_ngcontent-%COMP%] {margin-bottom: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-22[_ngcontent-%COMP%] {margin-bottom: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-23[_ngcontent-%COMP%] {margin-bottom: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-24[_ngcontent-%COMP%] {margin-bottom: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-25[_ngcontent-%COMP%] {margin-bottom: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-26[_ngcontent-%COMP%] {margin-bottom: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-27[_ngcontent-%COMP%] {margin-bottom: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-28[_ngcontent-%COMP%] {margin-bottom: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-29[_ngcontent-%COMP%] {margin-bottom: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-30[_ngcontent-%COMP%] {margin-bottom: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-31[_ngcontent-%COMP%] {margin-bottom: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-32[_ngcontent-%COMP%] {margin-bottom: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-33[_ngcontent-%COMP%] {margin-bottom: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-34[_ngcontent-%COMP%] {margin-bottom: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-35[_ngcontent-%COMP%] {margin-bottom: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-36[_ngcontent-%COMP%] {margin-bottom: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-37[_ngcontent-%COMP%] {margin-bottom: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-38[_ngcontent-%COMP%] {margin-bottom: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-39[_ngcontent-%COMP%] {margin-bottom: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-40[_ngcontent-%COMP%] {margin-bottom: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-41[_ngcontent-%COMP%] {margin-bottom: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-42[_ngcontent-%COMP%] {margin-bottom: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-43[_ngcontent-%COMP%] {margin-bottom: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-44[_ngcontent-%COMP%] {margin-bottom: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-45[_ngcontent-%COMP%] {margin-bottom: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-46[_ngcontent-%COMP%] {margin-bottom: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-47[_ngcontent-%COMP%] {margin-bottom: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-48[_ngcontent-%COMP%] {margin-bottom: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-49[_ngcontent-%COMP%] {margin-bottom: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-50[_ngcontent-%COMP%] {margin-bottom: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-51[_ngcontent-%COMP%] {margin-bottom: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-52[_ngcontent-%COMP%] {margin-bottom: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-53[_ngcontent-%COMP%] {margin-bottom: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-54[_ngcontent-%COMP%] {margin-bottom: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-55[_ngcontent-%COMP%] {margin-bottom: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-56[_ngcontent-%COMP%] {margin-bottom: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-57[_ngcontent-%COMP%] {margin-bottom: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-58[_ngcontent-%COMP%] {margin-bottom: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-59[_ngcontent-%COMP%] {margin-bottom: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-60[_ngcontent-%COMP%] {margin-bottom: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-61[_ngcontent-%COMP%] {margin-bottom: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-62[_ngcontent-%COMP%] {margin-bottom: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-63[_ngcontent-%COMP%] {margin-bottom: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-64[_ngcontent-%COMP%] {margin-bottom: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-65[_ngcontent-%COMP%] {margin-bottom: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-66[_ngcontent-%COMP%] {margin-bottom: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-67[_ngcontent-%COMP%] {margin-bottom: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-68[_ngcontent-%COMP%] {margin-bottom: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-69[_ngcontent-%COMP%] {margin-bottom: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-70[_ngcontent-%COMP%] {margin-bottom: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-71[_ngcontent-%COMP%] {margin-bottom: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-72[_ngcontent-%COMP%] {margin-bottom: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-73[_ngcontent-%COMP%] {margin-bottom: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-74[_ngcontent-%COMP%] {margin-bottom: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-75[_ngcontent-%COMP%] {margin-bottom: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-76[_ngcontent-%COMP%] {margin-bottom: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-77[_ngcontent-%COMP%] {margin-bottom: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-78[_ngcontent-%COMP%] {margin-bottom: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-79[_ngcontent-%COMP%] {margin-bottom: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-80[_ngcontent-%COMP%] {margin-bottom: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-81[_ngcontent-%COMP%] {margin-bottom: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-82[_ngcontent-%COMP%] {margin-bottom: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-83[_ngcontent-%COMP%] {margin-bottom: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-84[_ngcontent-%COMP%] {margin-bottom: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-85[_ngcontent-%COMP%] {margin-bottom: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-86[_ngcontent-%COMP%] {margin-bottom: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-87[_ngcontent-%COMP%] {margin-bottom: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-88[_ngcontent-%COMP%] {margin-bottom: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-89[_ngcontent-%COMP%] {margin-bottom: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-90[_ngcontent-%COMP%] {margin-bottom: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-91[_ngcontent-%COMP%] {margin-bottom: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-92[_ngcontent-%COMP%] {margin-bottom: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-93[_ngcontent-%COMP%] {margin-bottom: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-94[_ngcontent-%COMP%] {margin-bottom: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-95[_ngcontent-%COMP%] {margin-bottom: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-96[_ngcontent-%COMP%] {margin-bottom: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-97[_ngcontent-%COMP%] {margin-bottom: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-98[_ngcontent-%COMP%] {margin-bottom: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-99[_ngcontent-%COMP%] {margin-bottom: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-100[_ngcontent-%COMP%] {margin-bottom: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-101[_ngcontent-%COMP%] {margin-bottom: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-102[_ngcontent-%COMP%] {margin-bottom: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-103[_ngcontent-%COMP%] {margin-bottom: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-104[_ngcontent-%COMP%] {margin-bottom: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-105[_ngcontent-%COMP%] {margin-bottom: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-106[_ngcontent-%COMP%] {margin-bottom: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-107[_ngcontent-%COMP%] {margin-bottom: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-108[_ngcontent-%COMP%] {margin-bottom: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-109[_ngcontent-%COMP%] {margin-bottom: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-110[_ngcontent-%COMP%] {margin-bottom: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-111[_ngcontent-%COMP%] {margin-bottom: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-112[_ngcontent-%COMP%] {margin-bottom: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-113[_ngcontent-%COMP%] {margin-bottom: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-114[_ngcontent-%COMP%] {margin-bottom: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-115[_ngcontent-%COMP%] {margin-bottom: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-116[_ngcontent-%COMP%] {margin-bottom: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-117[_ngcontent-%COMP%] {margin-bottom: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-118[_ngcontent-%COMP%] {margin-bottom: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-119[_ngcontent-%COMP%] {margin-bottom: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-120[_ngcontent-%COMP%] {margin-bottom: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-121[_ngcontent-%COMP%] {margin-bottom: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-122[_ngcontent-%COMP%] {margin-bottom: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-123[_ngcontent-%COMP%] {margin-bottom: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-124[_ngcontent-%COMP%] {margin-bottom: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-125[_ngcontent-%COMP%] {margin-bottom: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-126[_ngcontent-%COMP%] {margin-bottom: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-127[_ngcontent-%COMP%] {margin-bottom: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-128[_ngcontent-%COMP%] {margin-bottom: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-129[_ngcontent-%COMP%] {margin-bottom: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-130[_ngcontent-%COMP%] {margin-bottom: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-131[_ngcontent-%COMP%] {margin-bottom: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-132[_ngcontent-%COMP%] {margin-bottom: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-133[_ngcontent-%COMP%] {margin-bottom: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-134[_ngcontent-%COMP%] {margin-bottom: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-135[_ngcontent-%COMP%] {margin-bottom: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-136[_ngcontent-%COMP%] {margin-bottom: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-137[_ngcontent-%COMP%] {margin-bottom: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-138[_ngcontent-%COMP%] {margin-bottom: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-139[_ngcontent-%COMP%] {margin-bottom: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-140[_ngcontent-%COMP%] {margin-bottom: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-141[_ngcontent-%COMP%] {margin-bottom: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-142[_ngcontent-%COMP%] {margin-bottom: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-143[_ngcontent-%COMP%] {margin-bottom: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-144[_ngcontent-%COMP%] {margin-bottom: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-145[_ngcontent-%COMP%] {margin-bottom: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-146[_ngcontent-%COMP%] {margin-bottom: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-147[_ngcontent-%COMP%] {margin-bottom: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-148[_ngcontent-%COMP%] {margin-bottom: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-149[_ngcontent-%COMP%] {margin-bottom: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-150[_ngcontent-%COMP%] {margin-bottom: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-151[_ngcontent-%COMP%] {margin-bottom: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-152[_ngcontent-%COMP%] {margin-bottom: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-153[_ngcontent-%COMP%] {margin-bottom: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-154[_ngcontent-%COMP%] {margin-bottom: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-155[_ngcontent-%COMP%] {margin-bottom: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-156[_ngcontent-%COMP%] {margin-bottom: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-157[_ngcontent-%COMP%] {margin-bottom: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-158[_ngcontent-%COMP%] {margin-bottom: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-159[_ngcontent-%COMP%] {margin-bottom: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-160[_ngcontent-%COMP%] {margin-bottom: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-161[_ngcontent-%COMP%] {margin-bottom: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-162[_ngcontent-%COMP%] {margin-bottom: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-163[_ngcontent-%COMP%] {margin-bottom: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-164[_ngcontent-%COMP%] {margin-bottom: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-165[_ngcontent-%COMP%] {margin-bottom: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-166[_ngcontent-%COMP%] {margin-bottom: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-167[_ngcontent-%COMP%] {margin-bottom: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-168[_ngcontent-%COMP%] {margin-bottom: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-169[_ngcontent-%COMP%] {margin-bottom: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-170[_ngcontent-%COMP%] {margin-bottom: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-171[_ngcontent-%COMP%] {margin-bottom: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-172[_ngcontent-%COMP%] {margin-bottom: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-173[_ngcontent-%COMP%] {margin-bottom: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-174[_ngcontent-%COMP%] {margin-bottom: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-175[_ngcontent-%COMP%] {margin-bottom: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-176[_ngcontent-%COMP%] {margin-bottom: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-177[_ngcontent-%COMP%] {margin-bottom: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-178[_ngcontent-%COMP%] {margin-bottom: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-179[_ngcontent-%COMP%] {margin-bottom: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-180[_ngcontent-%COMP%] {margin-bottom: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-181[_ngcontent-%COMP%] {margin-bottom: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-182[_ngcontent-%COMP%] {margin-bottom: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-183[_ngcontent-%COMP%] {margin-bottom: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-184[_ngcontent-%COMP%] {margin-bottom: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-185[_ngcontent-%COMP%] {margin-bottom: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-186[_ngcontent-%COMP%] {margin-bottom: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-187[_ngcontent-%COMP%] {margin-bottom: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-188[_ngcontent-%COMP%] {margin-bottom: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-189[_ngcontent-%COMP%] {margin-bottom: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-190[_ngcontent-%COMP%] {margin-bottom: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-191[_ngcontent-%COMP%] {margin-bottom: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-192[_ngcontent-%COMP%] {margin-bottom: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-193[_ngcontent-%COMP%] {margin-bottom: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-194[_ngcontent-%COMP%] {margin-bottom: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-195[_ngcontent-%COMP%] {margin-bottom: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-196[_ngcontent-%COMP%] {margin-bottom: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-197[_ngcontent-%COMP%] {margin-bottom: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-198[_ngcontent-%COMP%] {margin-bottom: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-199[_ngcontent-%COMP%] {margin-bottom: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-200[_ngcontent-%COMP%] {margin-bottom: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-201[_ngcontent-%COMP%] {margin-bottom: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-202[_ngcontent-%COMP%] {margin-bottom: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-203[_ngcontent-%COMP%] {margin-bottom: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-204[_ngcontent-%COMP%] {margin-bottom: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-205[_ngcontent-%COMP%] {margin-bottom: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-206[_ngcontent-%COMP%] {margin-bottom: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-207[_ngcontent-%COMP%] {margin-bottom: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-208[_ngcontent-%COMP%] {margin-bottom: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-209[_ngcontent-%COMP%] {margin-bottom: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-210[_ngcontent-%COMP%] {margin-bottom: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-211[_ngcontent-%COMP%] {margin-bottom: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-212[_ngcontent-%COMP%] {margin-bottom: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-213[_ngcontent-%COMP%] {margin-bottom: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-214[_ngcontent-%COMP%] {margin-bottom: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-215[_ngcontent-%COMP%] {margin-bottom: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-216[_ngcontent-%COMP%] {margin-bottom: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-217[_ngcontent-%COMP%] {margin-bottom: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-218[_ngcontent-%COMP%] {margin-bottom: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-219[_ngcontent-%COMP%] {margin-bottom: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-220[_ngcontent-%COMP%] {margin-bottom: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-221[_ngcontent-%COMP%] {margin-bottom: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-222[_ngcontent-%COMP%] {margin-bottom: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-223[_ngcontent-%COMP%] {margin-bottom: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-224[_ngcontent-%COMP%] {margin-bottom: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-225[_ngcontent-%COMP%] {margin-bottom: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-226[_ngcontent-%COMP%] {margin-bottom: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-227[_ngcontent-%COMP%] {margin-bottom: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-228[_ngcontent-%COMP%] {margin-bottom: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-229[_ngcontent-%COMP%] {margin-bottom: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-230[_ngcontent-%COMP%] {margin-bottom: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-231[_ngcontent-%COMP%] {margin-bottom: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-232[_ngcontent-%COMP%] {margin-bottom: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-233[_ngcontent-%COMP%] {margin-bottom: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-234[_ngcontent-%COMP%] {margin-bottom: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-235[_ngcontent-%COMP%] {margin-bottom: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-236[_ngcontent-%COMP%] {margin-bottom: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-237[_ngcontent-%COMP%] {margin-bottom: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-238[_ngcontent-%COMP%] {margin-bottom: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-239[_ngcontent-%COMP%] {margin-bottom: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-240[_ngcontent-%COMP%] {margin-bottom: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-241[_ngcontent-%COMP%] {margin-bottom: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-242[_ngcontent-%COMP%] {margin-bottom: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-243[_ngcontent-%COMP%] {margin-bottom: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-244[_ngcontent-%COMP%] {margin-bottom: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-245[_ngcontent-%COMP%] {margin-bottom: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-246[_ngcontent-%COMP%] {margin-bottom: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-247[_ngcontent-%COMP%] {margin-bottom: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-248[_ngcontent-%COMP%] {margin-bottom: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-249[_ngcontent-%COMP%] {margin-bottom: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-b-250[_ngcontent-%COMP%] {margin-bottom: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-0[_ngcontent-%COMP%] {margin-left: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-1[_ngcontent-%COMP%] {margin-left: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-2[_ngcontent-%COMP%] {margin-left: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-3[_ngcontent-%COMP%] {margin-left: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-4[_ngcontent-%COMP%] {margin-left: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-5[_ngcontent-%COMP%] {margin-left: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-6[_ngcontent-%COMP%] {margin-left: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-7[_ngcontent-%COMP%] {margin-left: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-8[_ngcontent-%COMP%] {margin-left: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-9[_ngcontent-%COMP%] {margin-left: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-10[_ngcontent-%COMP%] {margin-left: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-11[_ngcontent-%COMP%] {margin-left: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-12[_ngcontent-%COMP%] {margin-left: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-13[_ngcontent-%COMP%] {margin-left: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-14[_ngcontent-%COMP%] {margin-left: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-15[_ngcontent-%COMP%] {margin-left: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-16[_ngcontent-%COMP%] {margin-left: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-17[_ngcontent-%COMP%] {margin-left: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-18[_ngcontent-%COMP%] {margin-left: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-19[_ngcontent-%COMP%] {margin-left: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-20[_ngcontent-%COMP%] {margin-left: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-21[_ngcontent-%COMP%] {margin-left: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-22[_ngcontent-%COMP%] {margin-left: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-23[_ngcontent-%COMP%] {margin-left: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-24[_ngcontent-%COMP%] {margin-left: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-25[_ngcontent-%COMP%] {margin-left: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-26[_ngcontent-%COMP%] {margin-left: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-27[_ngcontent-%COMP%] {margin-left: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-28[_ngcontent-%COMP%] {margin-left: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-29[_ngcontent-%COMP%] {margin-left: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-30[_ngcontent-%COMP%] {margin-left: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-31[_ngcontent-%COMP%] {margin-left: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-32[_ngcontent-%COMP%] {margin-left: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-33[_ngcontent-%COMP%] {margin-left: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-34[_ngcontent-%COMP%] {margin-left: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-35[_ngcontent-%COMP%] {margin-left: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-36[_ngcontent-%COMP%] {margin-left: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-37[_ngcontent-%COMP%] {margin-left: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-38[_ngcontent-%COMP%] {margin-left: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-39[_ngcontent-%COMP%] {margin-left: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-40[_ngcontent-%COMP%] {margin-left: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-41[_ngcontent-%COMP%] {margin-left: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-42[_ngcontent-%COMP%] {margin-left: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-43[_ngcontent-%COMP%] {margin-left: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-44[_ngcontent-%COMP%] {margin-left: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-45[_ngcontent-%COMP%] {margin-left: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-46[_ngcontent-%COMP%] {margin-left: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-47[_ngcontent-%COMP%] {margin-left: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-48[_ngcontent-%COMP%] {margin-left: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-49[_ngcontent-%COMP%] {margin-left: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-50[_ngcontent-%COMP%] {margin-left: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-51[_ngcontent-%COMP%] {margin-left: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-52[_ngcontent-%COMP%] {margin-left: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-53[_ngcontent-%COMP%] {margin-left: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-54[_ngcontent-%COMP%] {margin-left: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-55[_ngcontent-%COMP%] {margin-left: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-56[_ngcontent-%COMP%] {margin-left: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-57[_ngcontent-%COMP%] {margin-left: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-58[_ngcontent-%COMP%] {margin-left: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-59[_ngcontent-%COMP%] {margin-left: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-60[_ngcontent-%COMP%] {margin-left: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-61[_ngcontent-%COMP%] {margin-left: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-62[_ngcontent-%COMP%] {margin-left: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-63[_ngcontent-%COMP%] {margin-left: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-64[_ngcontent-%COMP%] {margin-left: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-65[_ngcontent-%COMP%] {margin-left: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-66[_ngcontent-%COMP%] {margin-left: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-67[_ngcontent-%COMP%] {margin-left: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-68[_ngcontent-%COMP%] {margin-left: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-69[_ngcontent-%COMP%] {margin-left: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-70[_ngcontent-%COMP%] {margin-left: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-71[_ngcontent-%COMP%] {margin-left: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-72[_ngcontent-%COMP%] {margin-left: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-73[_ngcontent-%COMP%] {margin-left: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-74[_ngcontent-%COMP%] {margin-left: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-75[_ngcontent-%COMP%] {margin-left: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-76[_ngcontent-%COMP%] {margin-left: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-77[_ngcontent-%COMP%] {margin-left: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-78[_ngcontent-%COMP%] {margin-left: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-79[_ngcontent-%COMP%] {margin-left: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-80[_ngcontent-%COMP%] {margin-left: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-81[_ngcontent-%COMP%] {margin-left: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-82[_ngcontent-%COMP%] {margin-left: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-83[_ngcontent-%COMP%] {margin-left: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-84[_ngcontent-%COMP%] {margin-left: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-85[_ngcontent-%COMP%] {margin-left: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-86[_ngcontent-%COMP%] {margin-left: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-87[_ngcontent-%COMP%] {margin-left: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-88[_ngcontent-%COMP%] {margin-left: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-89[_ngcontent-%COMP%] {margin-left: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-90[_ngcontent-%COMP%] {margin-left: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-91[_ngcontent-%COMP%] {margin-left: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-92[_ngcontent-%COMP%] {margin-left: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-93[_ngcontent-%COMP%] {margin-left: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-94[_ngcontent-%COMP%] {margin-left: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-95[_ngcontent-%COMP%] {margin-left: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-96[_ngcontent-%COMP%] {margin-left: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-97[_ngcontent-%COMP%] {margin-left: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-98[_ngcontent-%COMP%] {margin-left: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-99[_ngcontent-%COMP%] {margin-left: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-100[_ngcontent-%COMP%] {margin-left: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-101[_ngcontent-%COMP%] {margin-left: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-102[_ngcontent-%COMP%] {margin-left: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-103[_ngcontent-%COMP%] {margin-left: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-104[_ngcontent-%COMP%] {margin-left: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-105[_ngcontent-%COMP%] {margin-left: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-106[_ngcontent-%COMP%] {margin-left: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-107[_ngcontent-%COMP%] {margin-left: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-108[_ngcontent-%COMP%] {margin-left: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-109[_ngcontent-%COMP%] {margin-left: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-110[_ngcontent-%COMP%] {margin-left: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-111[_ngcontent-%COMP%] {margin-left: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-112[_ngcontent-%COMP%] {margin-left: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-113[_ngcontent-%COMP%] {margin-left: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-114[_ngcontent-%COMP%] {margin-left: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-115[_ngcontent-%COMP%] {margin-left: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-116[_ngcontent-%COMP%] {margin-left: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-117[_ngcontent-%COMP%] {margin-left: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-118[_ngcontent-%COMP%] {margin-left: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-119[_ngcontent-%COMP%] {margin-left: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-120[_ngcontent-%COMP%] {margin-left: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-121[_ngcontent-%COMP%] {margin-left: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-122[_ngcontent-%COMP%] {margin-left: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-123[_ngcontent-%COMP%] {margin-left: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-124[_ngcontent-%COMP%] {margin-left: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-125[_ngcontent-%COMP%] {margin-left: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-126[_ngcontent-%COMP%] {margin-left: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-127[_ngcontent-%COMP%] {margin-left: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-128[_ngcontent-%COMP%] {margin-left: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-129[_ngcontent-%COMP%] {margin-left: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-130[_ngcontent-%COMP%] {margin-left: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-131[_ngcontent-%COMP%] {margin-left: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-132[_ngcontent-%COMP%] {margin-left: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-133[_ngcontent-%COMP%] {margin-left: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-134[_ngcontent-%COMP%] {margin-left: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-135[_ngcontent-%COMP%] {margin-left: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-136[_ngcontent-%COMP%] {margin-left: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-137[_ngcontent-%COMP%] {margin-left: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-138[_ngcontent-%COMP%] {margin-left: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-139[_ngcontent-%COMP%] {margin-left: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-140[_ngcontent-%COMP%] {margin-left: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-141[_ngcontent-%COMP%] {margin-left: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-142[_ngcontent-%COMP%] {margin-left: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-143[_ngcontent-%COMP%] {margin-left: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-144[_ngcontent-%COMP%] {margin-left: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-145[_ngcontent-%COMP%] {margin-left: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-146[_ngcontent-%COMP%] {margin-left: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-147[_ngcontent-%COMP%] {margin-left: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-148[_ngcontent-%COMP%] {margin-left: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-149[_ngcontent-%COMP%] {margin-left: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-150[_ngcontent-%COMP%] {margin-left: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-151[_ngcontent-%COMP%] {margin-left: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-152[_ngcontent-%COMP%] {margin-left: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-153[_ngcontent-%COMP%] {margin-left: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-154[_ngcontent-%COMP%] {margin-left: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-155[_ngcontent-%COMP%] {margin-left: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-156[_ngcontent-%COMP%] {margin-left: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-157[_ngcontent-%COMP%] {margin-left: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-158[_ngcontent-%COMP%] {margin-left: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-159[_ngcontent-%COMP%] {margin-left: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-160[_ngcontent-%COMP%] {margin-left: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-161[_ngcontent-%COMP%] {margin-left: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-162[_ngcontent-%COMP%] {margin-left: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-163[_ngcontent-%COMP%] {margin-left: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-164[_ngcontent-%COMP%] {margin-left: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-165[_ngcontent-%COMP%] {margin-left: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-166[_ngcontent-%COMP%] {margin-left: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-167[_ngcontent-%COMP%] {margin-left: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-168[_ngcontent-%COMP%] {margin-left: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-169[_ngcontent-%COMP%] {margin-left: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-170[_ngcontent-%COMP%] {margin-left: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-171[_ngcontent-%COMP%] {margin-left: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-172[_ngcontent-%COMP%] {margin-left: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-173[_ngcontent-%COMP%] {margin-left: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-174[_ngcontent-%COMP%] {margin-left: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-175[_ngcontent-%COMP%] {margin-left: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-176[_ngcontent-%COMP%] {margin-left: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-177[_ngcontent-%COMP%] {margin-left: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-178[_ngcontent-%COMP%] {margin-left: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-179[_ngcontent-%COMP%] {margin-left: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-180[_ngcontent-%COMP%] {margin-left: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-181[_ngcontent-%COMP%] {margin-left: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-182[_ngcontent-%COMP%] {margin-left: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-183[_ngcontent-%COMP%] {margin-left: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-184[_ngcontent-%COMP%] {margin-left: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-185[_ngcontent-%COMP%] {margin-left: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-186[_ngcontent-%COMP%] {margin-left: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-187[_ngcontent-%COMP%] {margin-left: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-188[_ngcontent-%COMP%] {margin-left: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-189[_ngcontent-%COMP%] {margin-left: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-190[_ngcontent-%COMP%] {margin-left: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-191[_ngcontent-%COMP%] {margin-left: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-192[_ngcontent-%COMP%] {margin-left: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-193[_ngcontent-%COMP%] {margin-left: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-194[_ngcontent-%COMP%] {margin-left: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-195[_ngcontent-%COMP%] {margin-left: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-196[_ngcontent-%COMP%] {margin-left: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-197[_ngcontent-%COMP%] {margin-left: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-198[_ngcontent-%COMP%] {margin-left: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-199[_ngcontent-%COMP%] {margin-left: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-200[_ngcontent-%COMP%] {margin-left: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-201[_ngcontent-%COMP%] {margin-left: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-202[_ngcontent-%COMP%] {margin-left: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-203[_ngcontent-%COMP%] {margin-left: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-204[_ngcontent-%COMP%] {margin-left: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-205[_ngcontent-%COMP%] {margin-left: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-206[_ngcontent-%COMP%] {margin-left: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-207[_ngcontent-%COMP%] {margin-left: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-208[_ngcontent-%COMP%] {margin-left: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-209[_ngcontent-%COMP%] {margin-left: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-210[_ngcontent-%COMP%] {margin-left: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-211[_ngcontent-%COMP%] {margin-left: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-212[_ngcontent-%COMP%] {margin-left: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-213[_ngcontent-%COMP%] {margin-left: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-214[_ngcontent-%COMP%] {margin-left: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-215[_ngcontent-%COMP%] {margin-left: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-216[_ngcontent-%COMP%] {margin-left: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-217[_ngcontent-%COMP%] {margin-left: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-218[_ngcontent-%COMP%] {margin-left: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-219[_ngcontent-%COMP%] {margin-left: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-220[_ngcontent-%COMP%] {margin-left: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-221[_ngcontent-%COMP%] {margin-left: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-222[_ngcontent-%COMP%] {margin-left: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-223[_ngcontent-%COMP%] {margin-left: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-224[_ngcontent-%COMP%] {margin-left: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-225[_ngcontent-%COMP%] {margin-left: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-226[_ngcontent-%COMP%] {margin-left: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-227[_ngcontent-%COMP%] {margin-left: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-228[_ngcontent-%COMP%] {margin-left: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-229[_ngcontent-%COMP%] {margin-left: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-230[_ngcontent-%COMP%] {margin-left: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-231[_ngcontent-%COMP%] {margin-left: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-232[_ngcontent-%COMP%] {margin-left: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-233[_ngcontent-%COMP%] {margin-left: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-234[_ngcontent-%COMP%] {margin-left: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-235[_ngcontent-%COMP%] {margin-left: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-236[_ngcontent-%COMP%] {margin-left: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-237[_ngcontent-%COMP%] {margin-left: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-238[_ngcontent-%COMP%] {margin-left: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-239[_ngcontent-%COMP%] {margin-left: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-240[_ngcontent-%COMP%] {margin-left: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-241[_ngcontent-%COMP%] {margin-left: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-242[_ngcontent-%COMP%] {margin-left: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-243[_ngcontent-%COMP%] {margin-left: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-244[_ngcontent-%COMP%] {margin-left: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-245[_ngcontent-%COMP%] {margin-left: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-246[_ngcontent-%COMP%] {margin-left: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-247[_ngcontent-%COMP%] {margin-left: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-248[_ngcontent-%COMP%] {margin-left: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-249[_ngcontent-%COMP%] {margin-left: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-250[_ngcontent-%COMP%] {margin-left: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-0[_ngcontent-%COMP%] {margin-right: 0px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-1[_ngcontent-%COMP%] {margin-right: 1px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-2[_ngcontent-%COMP%] {margin-right: 2px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-3[_ngcontent-%COMP%] {margin-right: 3px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-4[_ngcontent-%COMP%] {margin-right: 4px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-5[_ngcontent-%COMP%] {margin-right: 5px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-6[_ngcontent-%COMP%] {margin-right: 6px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-7[_ngcontent-%COMP%] {margin-right: 7px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-8[_ngcontent-%COMP%] {margin-right: 8px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-9[_ngcontent-%COMP%] {margin-right: 9px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-10[_ngcontent-%COMP%] {margin-right: 10px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-11[_ngcontent-%COMP%] {margin-right: 11px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-12[_ngcontent-%COMP%] {margin-right: 12px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-13[_ngcontent-%COMP%] {margin-right: 13px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-14[_ngcontent-%COMP%] {margin-right: 14px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-15[_ngcontent-%COMP%] {margin-right: 15px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-16[_ngcontent-%COMP%] {margin-right: 16px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-17[_ngcontent-%COMP%] {margin-right: 17px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-18[_ngcontent-%COMP%] {margin-right: 18px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-19[_ngcontent-%COMP%] {margin-right: 19px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-20[_ngcontent-%COMP%] {margin-right: 20px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-21[_ngcontent-%COMP%] {margin-right: 21px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-22[_ngcontent-%COMP%] {margin-right: 22px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-23[_ngcontent-%COMP%] {margin-right: 23px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-24[_ngcontent-%COMP%] {margin-right: 24px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-25[_ngcontent-%COMP%] {margin-right: 25px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-26[_ngcontent-%COMP%] {margin-right: 26px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-27[_ngcontent-%COMP%] {margin-right: 27px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-28[_ngcontent-%COMP%] {margin-right: 28px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-29[_ngcontent-%COMP%] {margin-right: 29px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-30[_ngcontent-%COMP%] {margin-right: 30px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-31[_ngcontent-%COMP%] {margin-right: 31px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-32[_ngcontent-%COMP%] {margin-right: 32px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-33[_ngcontent-%COMP%] {margin-right: 33px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-34[_ngcontent-%COMP%] {margin-right: 34px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-35[_ngcontent-%COMP%] {margin-right: 35px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-36[_ngcontent-%COMP%] {margin-right: 36px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-37[_ngcontent-%COMP%] {margin-right: 37px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-38[_ngcontent-%COMP%] {margin-right: 38px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-39[_ngcontent-%COMP%] {margin-right: 39px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-40[_ngcontent-%COMP%] {margin-right: 40px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-41[_ngcontent-%COMP%] {margin-right: 41px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-42[_ngcontent-%COMP%] {margin-right: 42px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-43[_ngcontent-%COMP%] {margin-right: 43px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-44[_ngcontent-%COMP%] {margin-right: 44px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-45[_ngcontent-%COMP%] {margin-right: 45px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-46[_ngcontent-%COMP%] {margin-right: 46px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-47[_ngcontent-%COMP%] {margin-right: 47px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-48[_ngcontent-%COMP%] {margin-right: 48px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-49[_ngcontent-%COMP%] {margin-right: 49px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-50[_ngcontent-%COMP%] {margin-right: 50px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-51[_ngcontent-%COMP%] {margin-right: 51px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-52[_ngcontent-%COMP%] {margin-right: 52px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-53[_ngcontent-%COMP%] {margin-right: 53px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-54[_ngcontent-%COMP%] {margin-right: 54px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-55[_ngcontent-%COMP%] {margin-right: 55px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-56[_ngcontent-%COMP%] {margin-right: 56px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-57[_ngcontent-%COMP%] {margin-right: 57px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-58[_ngcontent-%COMP%] {margin-right: 58px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-59[_ngcontent-%COMP%] {margin-right: 59px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-60[_ngcontent-%COMP%] {margin-right: 60px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-61[_ngcontent-%COMP%] {margin-right: 61px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-62[_ngcontent-%COMP%] {margin-right: 62px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-63[_ngcontent-%COMP%] {margin-right: 63px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-64[_ngcontent-%COMP%] {margin-right: 64px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-65[_ngcontent-%COMP%] {margin-right: 65px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-66[_ngcontent-%COMP%] {margin-right: 66px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-67[_ngcontent-%COMP%] {margin-right: 67px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-68[_ngcontent-%COMP%] {margin-right: 68px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-69[_ngcontent-%COMP%] {margin-right: 69px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-70[_ngcontent-%COMP%] {margin-right: 70px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-71[_ngcontent-%COMP%] {margin-right: 71px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-72[_ngcontent-%COMP%] {margin-right: 72px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-73[_ngcontent-%COMP%] {margin-right: 73px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-74[_ngcontent-%COMP%] {margin-right: 74px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-75[_ngcontent-%COMP%] {margin-right: 75px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-76[_ngcontent-%COMP%] {margin-right: 76px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-77[_ngcontent-%COMP%] {margin-right: 77px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-78[_ngcontent-%COMP%] {margin-right: 78px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-79[_ngcontent-%COMP%] {margin-right: 79px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-80[_ngcontent-%COMP%] {margin-right: 80px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-81[_ngcontent-%COMP%] {margin-right: 81px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-82[_ngcontent-%COMP%] {margin-right: 82px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-83[_ngcontent-%COMP%] {margin-right: 83px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-84[_ngcontent-%COMP%] {margin-right: 84px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-85[_ngcontent-%COMP%] {margin-right: 85px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-86[_ngcontent-%COMP%] {margin-right: 86px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-87[_ngcontent-%COMP%] {margin-right: 87px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-88[_ngcontent-%COMP%] {margin-right: 88px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-89[_ngcontent-%COMP%] {margin-right: 89px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-90[_ngcontent-%COMP%] {margin-right: 90px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-91[_ngcontent-%COMP%] {margin-right: 91px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-92[_ngcontent-%COMP%] {margin-right: 92px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-93[_ngcontent-%COMP%] {margin-right: 93px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-94[_ngcontent-%COMP%] {margin-right: 94px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-95[_ngcontent-%COMP%] {margin-right: 95px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-96[_ngcontent-%COMP%] {margin-right: 96px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-97[_ngcontent-%COMP%] {margin-right: 97px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-98[_ngcontent-%COMP%] {margin-right: 98px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-99[_ngcontent-%COMP%] {margin-right: 99px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-100[_ngcontent-%COMP%] {margin-right: 100px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-101[_ngcontent-%COMP%] {margin-right: 101px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-102[_ngcontent-%COMP%] {margin-right: 102px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-103[_ngcontent-%COMP%] {margin-right: 103px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-104[_ngcontent-%COMP%] {margin-right: 104px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-105[_ngcontent-%COMP%] {margin-right: 105px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-106[_ngcontent-%COMP%] {margin-right: 106px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-107[_ngcontent-%COMP%] {margin-right: 107px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-108[_ngcontent-%COMP%] {margin-right: 108px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-109[_ngcontent-%COMP%] {margin-right: 109px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-110[_ngcontent-%COMP%] {margin-right: 110px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-111[_ngcontent-%COMP%] {margin-right: 111px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-112[_ngcontent-%COMP%] {margin-right: 112px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-113[_ngcontent-%COMP%] {margin-right: 113px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-114[_ngcontent-%COMP%] {margin-right: 114px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-115[_ngcontent-%COMP%] {margin-right: 115px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-116[_ngcontent-%COMP%] {margin-right: 116px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-117[_ngcontent-%COMP%] {margin-right: 117px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-118[_ngcontent-%COMP%] {margin-right: 118px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-119[_ngcontent-%COMP%] {margin-right: 119px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-120[_ngcontent-%COMP%] {margin-right: 120px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-121[_ngcontent-%COMP%] {margin-right: 121px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-122[_ngcontent-%COMP%] {margin-right: 122px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-123[_ngcontent-%COMP%] {margin-right: 123px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-124[_ngcontent-%COMP%] {margin-right: 124px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-125[_ngcontent-%COMP%] {margin-right: 125px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-126[_ngcontent-%COMP%] {margin-right: 126px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-127[_ngcontent-%COMP%] {margin-right: 127px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-128[_ngcontent-%COMP%] {margin-right: 128px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-129[_ngcontent-%COMP%] {margin-right: 129px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-130[_ngcontent-%COMP%] {margin-right: 130px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-131[_ngcontent-%COMP%] {margin-right: 131px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-132[_ngcontent-%COMP%] {margin-right: 132px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-133[_ngcontent-%COMP%] {margin-right: 133px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-134[_ngcontent-%COMP%] {margin-right: 134px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-135[_ngcontent-%COMP%] {margin-right: 135px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-136[_ngcontent-%COMP%] {margin-right: 136px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-137[_ngcontent-%COMP%] {margin-right: 137px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-138[_ngcontent-%COMP%] {margin-right: 138px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-139[_ngcontent-%COMP%] {margin-right: 139px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-140[_ngcontent-%COMP%] {margin-right: 140px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-141[_ngcontent-%COMP%] {margin-right: 141px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-142[_ngcontent-%COMP%] {margin-right: 142px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-143[_ngcontent-%COMP%] {margin-right: 143px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-144[_ngcontent-%COMP%] {margin-right: 144px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-145[_ngcontent-%COMP%] {margin-right: 145px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-146[_ngcontent-%COMP%] {margin-right: 146px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-147[_ngcontent-%COMP%] {margin-right: 147px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-148[_ngcontent-%COMP%] {margin-right: 148px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-149[_ngcontent-%COMP%] {margin-right: 149px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-150[_ngcontent-%COMP%] {margin-right: 150px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-151[_ngcontent-%COMP%] {margin-right: 151px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-152[_ngcontent-%COMP%] {margin-right: 152px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-153[_ngcontent-%COMP%] {margin-right: 153px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-154[_ngcontent-%COMP%] {margin-right: 154px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-155[_ngcontent-%COMP%] {margin-right: 155px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-156[_ngcontent-%COMP%] {margin-right: 156px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-157[_ngcontent-%COMP%] {margin-right: 157px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-158[_ngcontent-%COMP%] {margin-right: 158px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-159[_ngcontent-%COMP%] {margin-right: 159px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-160[_ngcontent-%COMP%] {margin-right: 160px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-161[_ngcontent-%COMP%] {margin-right: 161px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-162[_ngcontent-%COMP%] {margin-right: 162px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-163[_ngcontent-%COMP%] {margin-right: 163px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-164[_ngcontent-%COMP%] {margin-right: 164px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-165[_ngcontent-%COMP%] {margin-right: 165px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-166[_ngcontent-%COMP%] {margin-right: 166px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-167[_ngcontent-%COMP%] {margin-right: 167px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-168[_ngcontent-%COMP%] {margin-right: 168px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-169[_ngcontent-%COMP%] {margin-right: 169px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-170[_ngcontent-%COMP%] {margin-right: 170px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-171[_ngcontent-%COMP%] {margin-right: 171px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-172[_ngcontent-%COMP%] {margin-right: 172px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-173[_ngcontent-%COMP%] {margin-right: 173px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-174[_ngcontent-%COMP%] {margin-right: 174px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-175[_ngcontent-%COMP%] {margin-right: 175px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-176[_ngcontent-%COMP%] {margin-right: 176px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-177[_ngcontent-%COMP%] {margin-right: 177px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-178[_ngcontent-%COMP%] {margin-right: 178px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-179[_ngcontent-%COMP%] {margin-right: 179px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-180[_ngcontent-%COMP%] {margin-right: 180px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-181[_ngcontent-%COMP%] {margin-right: 181px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-182[_ngcontent-%COMP%] {margin-right: 182px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-183[_ngcontent-%COMP%] {margin-right: 183px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-184[_ngcontent-%COMP%] {margin-right: 184px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-185[_ngcontent-%COMP%] {margin-right: 185px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-186[_ngcontent-%COMP%] {margin-right: 186px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-187[_ngcontent-%COMP%] {margin-right: 187px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-188[_ngcontent-%COMP%] {margin-right: 188px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-189[_ngcontent-%COMP%] {margin-right: 189px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-190[_ngcontent-%COMP%] {margin-right: 190px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-191[_ngcontent-%COMP%] {margin-right: 191px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-192[_ngcontent-%COMP%] {margin-right: 192px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-193[_ngcontent-%COMP%] {margin-right: 193px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-194[_ngcontent-%COMP%] {margin-right: 194px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-195[_ngcontent-%COMP%] {margin-right: 195px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-196[_ngcontent-%COMP%] {margin-right: 196px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-197[_ngcontent-%COMP%] {margin-right: 197px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-198[_ngcontent-%COMP%] {margin-right: 198px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-199[_ngcontent-%COMP%] {margin-right: 199px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-200[_ngcontent-%COMP%] {margin-right: 200px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-201[_ngcontent-%COMP%] {margin-right: 201px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-202[_ngcontent-%COMP%] {margin-right: 202px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-203[_ngcontent-%COMP%] {margin-right: 203px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-204[_ngcontent-%COMP%] {margin-right: 204px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-205[_ngcontent-%COMP%] {margin-right: 205px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-206[_ngcontent-%COMP%] {margin-right: 206px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-207[_ngcontent-%COMP%] {margin-right: 207px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-208[_ngcontent-%COMP%] {margin-right: 208px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-209[_ngcontent-%COMP%] {margin-right: 209px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-210[_ngcontent-%COMP%] {margin-right: 210px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-211[_ngcontent-%COMP%] {margin-right: 211px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-212[_ngcontent-%COMP%] {margin-right: 212px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-213[_ngcontent-%COMP%] {margin-right: 213px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-214[_ngcontent-%COMP%] {margin-right: 214px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-215[_ngcontent-%COMP%] {margin-right: 215px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-216[_ngcontent-%COMP%] {margin-right: 216px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-217[_ngcontent-%COMP%] {margin-right: 217px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-218[_ngcontent-%COMP%] {margin-right: 218px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-219[_ngcontent-%COMP%] {margin-right: 219px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-220[_ngcontent-%COMP%] {margin-right: 220px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-221[_ngcontent-%COMP%] {margin-right: 221px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-222[_ngcontent-%COMP%] {margin-right: 222px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-223[_ngcontent-%COMP%] {margin-right: 223px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-224[_ngcontent-%COMP%] {margin-right: 224px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-225[_ngcontent-%COMP%] {margin-right: 225px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-226[_ngcontent-%COMP%] {margin-right: 226px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-227[_ngcontent-%COMP%] {margin-right: 227px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-228[_ngcontent-%COMP%] {margin-right: 228px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-229[_ngcontent-%COMP%] {margin-right: 229px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-230[_ngcontent-%COMP%] {margin-right: 230px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-231[_ngcontent-%COMP%] {margin-right: 231px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-232[_ngcontent-%COMP%] {margin-right: 232px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-233[_ngcontent-%COMP%] {margin-right: 233px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-234[_ngcontent-%COMP%] {margin-right: 234px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-235[_ngcontent-%COMP%] {margin-right: 235px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-236[_ngcontent-%COMP%] {margin-right: 236px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-237[_ngcontent-%COMP%] {margin-right: 237px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-238[_ngcontent-%COMP%] {margin-right: 238px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-239[_ngcontent-%COMP%] {margin-right: 239px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-240[_ngcontent-%COMP%] {margin-right: 240px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-241[_ngcontent-%COMP%] {margin-right: 241px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-242[_ngcontent-%COMP%] {margin-right: 242px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-243[_ngcontent-%COMP%] {margin-right: 243px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-244[_ngcontent-%COMP%] {margin-right: 244px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-245[_ngcontent-%COMP%] {margin-right: 245px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-246[_ngcontent-%COMP%] {margin-right: 246px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-247[_ngcontent-%COMP%] {margin-right: 247px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-248[_ngcontent-%COMP%] {margin-right: 248px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-249[_ngcontent-%COMP%] {margin-right: 249px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-250[_ngcontent-%COMP%] {margin-right: 250px;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-r-auto[_ngcontent-%COMP%] {margin-left: auto;\tmargin-right: auto;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-l-auto[_ngcontent-%COMP%] {margin-left: auto;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .m-r-auto[_ngcontent-%COMP%] {margin-right: auto;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-white[_ngcontent-%COMP%] {color: white;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-black[_ngcontent-%COMP%] {color: black;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-hov-white[_ngcontent-%COMP%]:hover {color: white;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-up[_ngcontent-%COMP%] {text-transform: uppercase;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-center[_ngcontent-%COMP%] {text-align: center;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-left[_ngcontent-%COMP%] {text-align: left;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-right[_ngcontent-%COMP%] {text-align: right;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .text-middle[_ngcontent-%COMP%] {vertical-align: middle;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-0[_ngcontent-%COMP%] {line-height: 1.0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-1[_ngcontent-%COMP%] {line-height: 1.1;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-2[_ngcontent-%COMP%] {line-height: 1.2;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-3[_ngcontent-%COMP%] {line-height: 1.3;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-4[_ngcontent-%COMP%] {line-height: 1.4;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-5[_ngcontent-%COMP%] {line-height: 1.5;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-6[_ngcontent-%COMP%] {line-height: 1.6;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-7[_ngcontent-%COMP%] {line-height: 1.7;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-8[_ngcontent-%COMP%] {line-height: 1.8;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-1-9[_ngcontent-%COMP%] {line-height: 1.9;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-0[_ngcontent-%COMP%] {line-height: 2.0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-1[_ngcontent-%COMP%] {line-height: 2.1;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-2[_ngcontent-%COMP%] {line-height: 2.2;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-3[_ngcontent-%COMP%] {line-height: 2.3;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-4[_ngcontent-%COMP%] {line-height: 2.4;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-5[_ngcontent-%COMP%] {line-height: 2.5;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-6[_ngcontent-%COMP%] {line-height: 2.6;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-7[_ngcontent-%COMP%] {line-height: 2.7;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-8[_ngcontent-%COMP%] {line-height: 2.8;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .lh-2-9[_ngcontent-%COMP%] {line-height: 2.9;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .dis-none[_ngcontent-%COMP%] {display: none;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .dis-block[_ngcontent-%COMP%] {display: block;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .dis-inline[_ngcontent-%COMP%] {display: inline;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .dis-inline-block[_ngcontent-%COMP%] {display: inline-block;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .dis-flex[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .pos-relative[_ngcontent-%COMP%] {position: relative;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .pos-absolute[_ngcontent-%COMP%] {position: absolute;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .pos-fixed[_ngcontent-%COMP%] {position: fixed;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .float-l[_ngcontent-%COMP%] {float: left;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .float-r[_ngcontent-%COMP%] {float: right;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .sizefull[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .w-full[_ngcontent-%COMP%] {width: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .h-full[_ngcontent-%COMP%] {height: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .max-w-full[_ngcontent-%COMP%] {max-width: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .max-h-full[_ngcontent-%COMP%] {max-height: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .min-w-full[_ngcontent-%COMP%] {min-width: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .min-h-full[_ngcontent-%COMP%] {min-height: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .top-0[_ngcontent-%COMP%] {top: 0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .bottom-0[_ngcontent-%COMP%] {bottom: 0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .left-0[_ngcontent-%COMP%] {left: 0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .right-0[_ngcontent-%COMP%] {right: 0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .top-auto[_ngcontent-%COMP%] {top: auto;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .bottom-auto[_ngcontent-%COMP%] {bottom: auto;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .left-auto[_ngcontent-%COMP%] {left: auto;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .right-auto[_ngcontent-%COMP%] {right: auto;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-0[_ngcontent-%COMP%] {opacity: 0;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-1[_ngcontent-%COMP%] {opacity: 0.1;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-2[_ngcontent-%COMP%] {opacity: 0.2;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-3[_ngcontent-%COMP%] {opacity: 0.3;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-4[_ngcontent-%COMP%] {opacity: 0.4;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-5[_ngcontent-%COMP%] {opacity: 0.5;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-6[_ngcontent-%COMP%] {opacity: 0.6;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-7[_ngcontent-%COMP%] {opacity: 0.7;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-8[_ngcontent-%COMP%] {opacity: 0.8;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-0-9[_ngcontent-%COMP%] {opacity: 0.9;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .op-1-0[_ngcontent-%COMP%] {opacity: 1;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .bgwhite[_ngcontent-%COMP%] {background-color: white;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .bgblack[_ngcontent-%COMP%] {background-color: black;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-pic-w[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {width: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-pic-max-w[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-width: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-pic-h[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {height: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-pic-max-h[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {max-height: 100%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-pic-cir[_ngcontent-%COMP%] {\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .wrap-pic-cir[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .hov-pointer[_ngcontent-%COMP%]:hover {cursor: pointer;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .hov-img-zoom[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\toverflow: hidden;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .hov-img-zoom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n transition: all 0.6s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .hov-img-zoom[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n\ttransform: scale(1.1);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .bo-cir[_ngcontent-%COMP%] {border-radius: 50%;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .of-hidden[_ngcontent-%COMP%] {overflow: hidden;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .visible-false[_ngcontent-%COMP%] {visibility: hidden;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .visible-true[_ngcontent-%COMP%] {visibility: visible;}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-0-1[_ngcontent-%COMP%] {\r\n transition: all 0.1s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-0-2[_ngcontent-%COMP%] {\r\n transition: all 0.2s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-0-3[_ngcontent-%COMP%] {\r\n transition: all 0.3s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-0-4[_ngcontent-%COMP%] {\r\n transition: all 0.4s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-0-5[_ngcontent-%COMP%] {\r\n transition: all 0.5s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-0-6[_ngcontent-%COMP%] {\r\n transition: all 0.6s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-0-9[_ngcontent-%COMP%] {\r\n transition: all 0.9s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .trans-1-0[_ngcontent-%COMP%] {\r\n transition: all 1s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-w[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-o-flex-wrap: wrap;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-l[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-r[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-c[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-sa[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-sb[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-t[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-b[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-row[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: row;\r\n\t-o-flex-direction: row;\r\n\tflex-direction: row;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-row-rev[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: row-reverse;\r\n\t-o-flex-direction: row-reverse;\r\n\tflex-direction: row-reverse;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-rev[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-c-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-c-t[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-c-b[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-c-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-l-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-r-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-end;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-sa-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-sb-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-l[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-r[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-c[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-l-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-r-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-c-m[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-sb[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column;\r\n\t-o-flex-direction: column;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-rev-l[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: flex-start;\r\n\talign-items: flex-start;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-rev-r[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: flex-end;\r\n\talign-items: flex-end;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-rev-c[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: center;\r\n\talign-items: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .flex-col-rev-str[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\t-moz-flex-direction: column-reverse;\r\n\t-o-flex-direction: column-reverse;\r\n\tflex-direction: column-reverse;\r\n\t-ms-align-items: stretch;\r\n\talign-items: stretch;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-c-m[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-c-t[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-c-b[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tbottom: 0px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-l-m[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-r-m[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\ttop: 50%;\r\n\ttransform: translateY(-50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-t-l[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-t-r[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\ttop: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-b-l[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\tbottom: 0px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n  .ab-b-r[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0px;\r\n\tbottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBO1NBQ1M7Ozs7Ozs7O0VBUVA7a0JBQ2dCOzs7Ozs7OztFQUVoQjtNQUNJLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCO0VBQzFCOzs7Ozs7OztFQUVBO01BQ0ksWUFBWTtNQUNaLDhDQUE4QztFQUNsRDs7Ozs7Ozs7RUFFQSxnREFBZ0Q7Ozs7Ozs7O0VBQ2hEO01BQ0ksa0NBQWtDO01BQ2xDLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsNEJBQTRCO0lBQzlCLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7Ozs7Ozs7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7Ozs7Ozs7O0VBRUE7TUFDSSxxQkFBcUI7RUFDekI7Ozs7Ozs7O0VBRUEsZ0RBQWdEOzs7Ozs7OztFQUNoRDtNQUNJLFdBQVc7RUFDZjs7Ozs7Ozs7RUFFQTtNQUNJLGtDQUFrQztNQUNsQyxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO0VBQ2Y7Ozs7Ozs7O0VBRUE7TUFDSSxXQUFXO01BQ1gscUJBQXFCO0VBQ3pCOzs7Ozs7OztFQUdBLGdEQUFnRDs7Ozs7Ozs7RUFDaEQ7TUFDSSxhQUFhO01BQ2IsWUFBWTtFQUNoQjs7Ozs7Ozs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7Ozs7Ozs7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7Ozs7Ozs7O0VBRUEsbUNBQW1DLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDbEQseUJBQXlCLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDeEMsMEJBQTBCLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDekMsOEJBQThCLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFFN0Msc0NBQXNDLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDckQsNEJBQTRCLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDM0MsNkJBQTZCLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDNUMsaUNBQWlDLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFFaEQsZ0RBQWdEOzs7Ozs7OztFQUNoRDtNQUNJLHdCQUF3QjtNQUN4QixZQUFZO01BQ1osdUJBQXVCO0VBQzNCOzs7Ozs7OztFQUVBO01BQ0ksZUFBZTtFQUNuQjs7Ozs7Ozs7RUFFQTtNQUNJLHVCQUF1QjtFQUMzQjs7Ozs7Ozs7RUFJQTtjQUNZOzs7Ozs7OztFQUNaO0lBQ0Usa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7Ozs7Ozs7RUFFQTtJQUNFLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7Ozs7Ozs7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsMEJBQTBCO0VBQzVCOzs7Ozs7OztFQUdBO1lBQ1U7Ozs7Ozs7O0VBRVY7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBS2pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7Ozs7Ozs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsK0JBQStCO0lBSS9CLDJFQUEyRTtJQUMzRSxvQkFBb0I7RUFDdEI7Ozs7Ozs7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0lBRWhCLDZDQUE2QztJQUM3QyxrREFBa0Q7SUFDbEQscURBQXFEO0lBQ3JELGdEQUFnRDtJQUNoRCxpREFBaUQ7RUFDbkQ7Ozs7Ozs7O0VBR0E7V0FDUzs7Ozs7Ozs7RUFFVDtJQUNFLFdBQVc7RUFDYjs7Ozs7Ozs7RUFFQTtJQUNFLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOzs7Ozs7OztFQUVBO1lBQ1U7Ozs7Ozs7O0VBRVY7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7Ozs7Ozs7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7O0lBRWhCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixzQkFBc0I7RUFDeEI7Ozs7Ozs7O0VBR0E7a0JBQ2dCOzs7Ozs7OztFQUVoQjtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLGtEQUFrRDtJQUNsRCxxREFBcUQ7SUFDckQsZ0RBQWdEO0lBQ2hELGlEQUFpRDtJQUtqRCxvQkFBb0I7RUFDdEI7Ozs7Ozs7O0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0Msa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCxnREFBZ0Q7SUFDaEQsaURBQWlEO0VBQ25EOzs7Ozs7OztFQUVBO2FBQ1c7Ozs7Ozs7O0VBQ1g7SUFDRSxXQUFXO0lBS1gsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7Ozs7Ozs7O0VBRUE7SUFLRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1COztJQUVuQixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBS3pCLG9CQUFvQjs7SUFFcEIsbURBQW1EO0lBQ25ELHdEQUF3RDtJQUN4RCwyREFBMkQ7SUFDM0Qsc0RBQXNEO0lBQ3RELHVEQUF1RDtFQUN6RDs7Ozs7Ozs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixtREFBbUQ7SUFDbkQsd0RBQXdEO0lBQ3hELDJEQUEyRDtJQUMzRCxzREFBc0Q7SUFDdEQsdURBQXVEO0VBQ3pEOzs7Ozs7OztFQUdBO3FCQUNtQjs7Ozs7Ozs7RUFFbkI7SUFDRSxrQkFBa0I7RUFDcEI7Ozs7Ozs7O0VBRUE7SUFDRSxpREFBaUQ7SUFDakQsc0RBQXNEO0lBQ3RELHlEQUF5RDtJQUN6RCxvREFBb0Q7SUFDcEQscURBQXFEO0VBQ3ZEOzs7Ozs7OztFQUVBO0lBQ0UsNEJBQTRCO0lBSzVCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsU0FBUztJQUNULHNCQUFzQjtJQUN0QixvQkFBb0I7O0lBRXBCLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7Ozs7Ozs7RUFFQTtJQUNFLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFLZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixXQUFXO0VBQ2I7Ozs7Ozs7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7Ozs7Ozs7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLGVBQWU7SUFDZixjQUFjO0lBS2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsV0FBVztFQUNiOzs7Ozs7OztFQUlBO2tCQUNnQjs7Ozs7Ozs7RUFFaEI7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQU1kLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLGtEQUFrRDtJQUNsRCxxREFBcUQ7SUFDckQsZ0RBQWdEO0lBQ2hELGlEQUFpRDtFQUNuRDs7Ozs7Ozs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7Ozs7Ozs7RUFFQTtJQUNFLGNBQWM7SUFDZCw2Q0FBNkM7SUFDN0Msa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCxnREFBZ0Q7SUFDaEQsaURBQWlEO0VBQ25EOzs7Ozs7OztFQUVBO2lCQUNlOzs7Ozs7OztFQUVmO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO0lBQ3JCO0VBQ0Y7Ozs7Ozs7O0VBSUE7O0NBRUQ7Ozs7Ozs7O0VBQ0QsT0FBTyxjQUFjLENBQUM7Ozs7Ozs7O0VBQ3RCLE9BQU8sY0FBYyxDQUFDOzs7Ozs7OztFQUN0QixPQUFPLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDdEIsT0FBTyxjQUFjLENBQUM7Ozs7Ozs7O0VBQ3RCLE9BQU8sY0FBYyxDQUFDOzs7Ozs7OztFQUN0QixPQUFPLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDdEIsT0FBTyxjQUFjLENBQUM7Ozs7Ozs7O0VBQ3RCLE9BQU8sY0FBYyxDQUFDOzs7Ozs7OztFQUN0QixPQUFPLGNBQWMsQ0FBQzs7Ozs7Ozs7RUFDdEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFFMUI7O0NBRUM7Ozs7Ozs7O0VBQ0QsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsUUFBUSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDekIsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDM0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsUUFBUSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsU0FBUyxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsVUFBVSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7RUFDaEMsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsUUFBUSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDMUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsU0FBUyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDNUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsVUFBVSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDOUIsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsUUFBUSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDM0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsU0FBUyxtQkFBbUIsQ0FBQzs7Ozs7Ozs7RUFDN0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFDL0IsVUFBVSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7RUFFL0I7O0NBRUM7Ozs7Ozs7O0VBQ0QsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFFBQVEsZUFBZSxDQUFDOzs7Ozs7OztFQUN4QixRQUFRLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDeEIsUUFBUSxlQUFlLENBQUM7Ozs7Ozs7O0VBQ3hCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQzFCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzVCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFFBQVEsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFNBQVMsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFVBQVUsb0JBQW9CLENBQUM7Ozs7Ozs7O0VBQy9CLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFFBQVEsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBQ3pCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFNBQVMsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzNCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFVBQVUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzdCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFFBQVEsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzFCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFNBQVMsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQzVCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLFVBQVUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBQzlCLGFBQWEsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQ25ELFdBQVcsaUJBQWlCLENBQUM7Ozs7Ozs7O0VBQzdCLFdBQVcsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBSTlCOztDQUVDOzs7Ozs7OztFQUNELHlDQUF5Qzs7Ozs7Ozs7RUFDekMsYUFBYSxZQUFZLENBQUM7Ozs7Ozs7O0VBQzFCLGFBQWEsWUFBWSxDQUFDOzs7Ozs7OztFQUUxQix1QkFBdUIsWUFBWSxDQUFDOzs7Ozs7OztFQUVwQyx5Q0FBeUM7Ozs7Ozs7O0VBQ3pDLFVBQVUseUJBQXlCLENBQUM7Ozs7Ozs7O0VBRXBDLHlDQUF5Qzs7Ozs7Ozs7RUFDekMsY0FBYyxrQkFBa0IsQ0FBQzs7Ozs7Ozs7RUFDakMsWUFBWSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFDN0IsYUFBYSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7RUFDL0IsY0FBYyxzQkFBc0IsQ0FBQzs7Ozs7Ozs7RUFFckMseUNBQXlDOzs7Ozs7OztFQUN6QyxTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQUMxQixTQUFTLGdCQUFnQixDQUFDOzs7Ozs7OztFQU0xQjs7Q0FFQzs7Ozs7Ozs7RUFFRDs7Q0FFQzs7Ozs7Ozs7RUFDRCxXQUFXLGFBQWEsQ0FBQzs7Ozs7Ozs7RUFDekIsWUFBWSxjQUFjLENBQUM7Ozs7Ozs7O0VBQzNCLGFBQWEsZUFBZSxDQUFDOzs7Ozs7OztFQUM3QixtQkFBbUIscUJBQXFCLENBQUM7Ozs7Ozs7O0VBQ3pDO0NBS0MsYUFBYTtBQUNkOzs7Ozs7OztFQUVBOztDQUVDOzs7Ozs7OztFQUNELGVBQWUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQ2xDLGVBQWUsa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQ2xDLFlBQVksZUFBZSxDQUFDOzs7Ozs7OztFQUU1Qjs7Q0FFQzs7Ozs7Ozs7RUFDRCxVQUFVLFdBQVcsQ0FBQzs7Ozs7Ozs7RUFDdEIsVUFBVSxZQUFZLENBQUM7Ozs7Ozs7O0VBR3ZCOztDQUVDOzs7Ozs7OztFQUNEO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7Ozs7Ozs7RUFDQSxTQUFTLFdBQVcsQ0FBQzs7Ozs7Ozs7RUFDckIsU0FBUyxZQUFZLENBQUM7Ozs7Ozs7O0VBQ3RCLGFBQWEsZUFBZSxDQUFDOzs7Ozs7OztFQUM3QixhQUFhLGdCQUFnQixDQUFDOzs7Ozs7OztFQUM5QixhQUFhLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFDN0IsYUFBYSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7RUFFOUI7O0NBRUM7Ozs7Ozs7O0VBQ0QsUUFBUSxNQUFNLENBQUM7Ozs7Ozs7O0VBQ2YsV0FBVyxTQUFTLENBQUM7Ozs7Ozs7O0VBQ3JCLFNBQVMsT0FBTyxDQUFDOzs7Ozs7OztFQUNqQixVQUFVLFFBQVEsQ0FBQzs7Ozs7Ozs7RUFFbkIsV0FBVyxTQUFTLENBQUM7Ozs7Ozs7O0VBQ3JCLGNBQWMsWUFBWSxDQUFDOzs7Ozs7OztFQUMzQixZQUFZLFVBQVUsQ0FBQzs7Ozs7Ozs7RUFDdkIsYUFBYSxXQUFXLENBQUM7Ozs7Ozs7O0VBR3pCOztDQUVDOzs7Ozs7OztFQUNELFNBQVMsVUFBVSxDQUFDOzs7Ozs7OztFQUNwQixTQUFTLFlBQVksQ0FBQzs7Ozs7Ozs7RUFDdEIsU0FBUyxZQUFZLENBQUM7Ozs7Ozs7O0VBQ3RCLFNBQVMsWUFBWSxDQUFDOzs7Ozs7OztFQUN0QixTQUFTLFlBQVksQ0FBQzs7Ozs7Ozs7RUFDdEIsU0FBUyxZQUFZLENBQUM7Ozs7Ozs7O0VBQ3RCLFNBQVMsWUFBWSxDQUFDOzs7Ozs7OztFQUN0QixTQUFTLFlBQVksQ0FBQzs7Ozs7Ozs7RUFDdEIsU0FBUyxZQUFZLENBQUM7Ozs7Ozs7O0VBQ3RCLFNBQVMsWUFBWSxDQUFDOzs7Ozs7OztFQUN0QixTQUFTLFVBQVUsQ0FBQzs7Ozs7Ozs7RUFFcEI7O0NBRUM7Ozs7Ozs7O0VBQ0QsVUFBVSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7RUFDbEMsVUFBVSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7RUFJbEM7O0NBRUM7Ozs7Ozs7O0VBQ0QsaUJBQWlCLFdBQVcsQ0FBQzs7Ozs7Ozs7RUFDN0IscUJBQXFCLGVBQWUsQ0FBQzs7Ozs7Ozs7RUFFckMseUNBQXlDOzs7Ozs7OztFQUN6QyxpQkFBaUIsWUFBWSxDQUFDOzs7Ozs7OztFQUM5QixxQkFBcUIsZ0JBQWdCLENBQUM7Ozs7Ozs7O0VBRXRDLHlDQUF5Qzs7Ozs7Ozs7RUFDekM7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOzs7Ozs7OztFQUNBO0NBQ0MsV0FBVztBQUNaOzs7Ozs7OztFQUlBOztDQUVDOzs7Ozs7OztFQUNELG9CQUFvQixlQUFlLENBQUM7Ozs7Ozs7O0VBRXBDLHlDQUF5Qzs7Ozs7Ozs7RUFDekM7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOzs7Ozs7OztFQUNBO0NBQ0MsV0FBVztDQUlSLG9CQUFvQjtBQUN4Qjs7Ozs7Ozs7RUFDQTtDQUtDLHFCQUFxQjtBQUN0Qjs7Ozs7Ozs7RUFJQTs7Q0FFQzs7Ozs7Ozs7RUFDRCxTQUFTLGtCQUFrQixDQUFDOzs7Ozs7OztFQUU1QixZQUFZLGdCQUFnQixDQUFDOzs7Ozs7OztFQUU3QixnQkFBZ0Isa0JBQWtCLENBQUM7Ozs7Ozs7O0VBQ25DLGVBQWUsbUJBQW1CLENBQUM7Ozs7Ozs7O0VBS25DOztDQUVDOzs7Ozs7OztFQUNEO0NBSUksb0JBQW9CO0FBQ3hCOzs7Ozs7OztFQUNBO0NBSUksb0JBQW9CO0FBQ3hCOzs7Ozs7OztFQUNBO0NBSUksb0JBQW9CO0FBQ3hCOzs7Ozs7OztFQUNBO0NBSUksb0JBQW9CO0FBQ3hCOzs7Ozs7OztFQUNBO0NBSUksb0JBQW9CO0FBQ3hCOzs7Ozs7OztFQUNBO0NBSUksb0JBQW9CO0FBQ3hCOzs7Ozs7OztFQUNBO0NBSUksb0JBQW9CO0FBQ3hCOzs7Ozs7OztFQUNBO0NBSUksa0JBQWtCO0FBQ3RCOzs7Ozs7OztFQUlBOztDQUVDOzs7Ozs7OztFQUVEOztDQUVDOzs7Ozs7OztFQUNELHlDQUF5Qzs7Ozs7Ozs7RUFDekM7Q0FLQyxhQUFhO0NBSWIsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7Ozs7Ozs7O0VBRUEseUNBQXlDOzs7Ozs7OztFQUN6QztDQUtDLGFBQWE7Q0FDYiwyQkFBMkI7QUFDNUI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IseUJBQXlCO0FBQzFCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUNiLHVCQUF1QjtBQUN4Qjs7Ozs7Ozs7RUFFQTtDQUtDLGFBQWE7Q0FDYiw2QkFBNkI7QUFDOUI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COzs7Ozs7OztFQUVBLHlDQUF5Qzs7Ozs7Ozs7RUFDekM7Q0FLQyxhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLHVCQUF1QjtBQUN4Qjs7Ozs7Ozs7RUFFQTtDQUtDLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIscUJBQXFCO0FBQ3RCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLG9CQUFvQjtBQUNyQjs7Ozs7Ozs7RUFFQSx5Q0FBeUM7Ozs7Ozs7O0VBQ3pDO0NBS0MsYUFBYTtDQUViLHdCQUF3QjtDQUV4QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0FBQ3BCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUViLGdDQUFnQztDQUVoQyw4QkFBOEI7Q0FDOUIsMkJBQTJCO0FBQzVCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0FBQ3ZCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0FBQy9COzs7Ozs7OztFQUVBLHlDQUF5Qzs7Ozs7Ozs7RUFDekM7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLDJCQUEyQjtDQUMzQix1QkFBdUI7QUFDeEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IsNkJBQTZCO0NBQzdCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7Ozs7Ozs7O0VBRUEseUNBQXlDOzs7Ozs7OztFQUN6QztDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0FBQ3hCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixxQkFBcUI7QUFDdEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBRWIsMkJBQTJCO0NBRTNCLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7Ozs7Ozs7RUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLHVCQUF1QjtBQUN4Qjs7Ozs7Ozs7RUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLHVCQUF1QjtBQUN4Qjs7Ozs7Ozs7RUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7Ozs7Ozs7RUFFQTtDQUtDLGFBQWE7Q0FFYiwyQkFBMkI7Q0FFM0IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsb0JBQW9CO0FBQ3JCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUViLDJCQUEyQjtDQUUzQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLDhCQUE4QjtBQUMvQjs7Ozs7Ozs7RUFFQSx5Q0FBeUM7Ozs7Ozs7O0VBQ3pDO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQix1QkFBdUI7QUFDeEI7Ozs7Ozs7O0VBRUE7Q0FLQyxhQUFhO0NBRWIsbUNBQW1DO0NBRW5DLGlDQUFpQztDQUNqQyw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7Ozs7Ozs7RUFFQTtDQUtDLGFBQWE7Q0FFYixtQ0FBbUM7Q0FFbkMsaUNBQWlDO0NBQ2pDLDhCQUE4QjtDQUM5Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOzs7Ozs7OztFQUVBO0NBS0MsYUFBYTtDQUViLG1DQUFtQztDQUVuQyxpQ0FBaUM7Q0FDakMsOEJBQThCO0NBQzlCLHdCQUF3QjtDQUN4QixvQkFBb0I7QUFDckI7Ozs7Ozs7O0VBR0E7O0NBRUM7Ozs7Ozs7O0VBQ0Q7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FLVCxnQ0FBZ0M7QUFDakM7Ozs7Ozs7O0VBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FLVCwyQkFBMkI7QUFDNUI7Ozs7Ozs7O0VBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFNBQVM7Q0FLVCwyQkFBMkI7QUFDNUI7Ozs7Ozs7O0VBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7Q0FLUiwyQkFBMkI7QUFDNUI7Ozs7Ozs7O0VBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFFBQVE7Q0FLUiwyQkFBMkI7QUFDNUI7Ozs7Ozs7O0VBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFFBQVE7QUFDVDs7Ozs7Ozs7RUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtBQUNUOzs7Ozs7OztFQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxXQUFXO0FBQ1o7Ozs7Ozs7O0VBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFdBQVc7QUFDWiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblsgRk9OVCBdKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuICAvKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gIFsgUkVTVFlMRSBUQUcgXSovXHJcbiAgXHJcbiAgKiB7XHJcbiAgICAgIG1hcmdpbjogMHB4OyBcclxuICAgICAgcGFkZGluZzogMHB4OyBcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSwgaHRtbCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tUmVndWxhciwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGEge1xyXG4gICAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1SZWd1bGFyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIGE6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGE6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBoMSxoMixoMyxoNCxoNSxoNiB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tUmVndWxhcjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgICBjb2xvcjogIzY2NjY2NjtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHVsLCBsaSB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICBpbnB1dCB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgdGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzA0Mjc2ZDt9XHJcbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjMDQyNzZkO31cclxuICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjMDQyNzZkO31cclxuICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzA0Mjc2ZDt9XHJcbiAgXHJcbiAgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzA0Mjc2ZDt9XHJcbiAgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjMDQyNzZkO31cclxuICB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjMDQyNzZkO31cclxuICB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzA0Mjc2ZDt9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpZnJhbWUge1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFV0aWxpdHkgXSovXHJcbiAgLnR4dDEge1xyXG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICB9XHJcbiAgXHJcbiAgLnR4dDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBjb2xvcjogIzMwNzVmZjtcclxuICB9XHJcbiAgXHJcbiAgLmhvdjE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMzMDc1ZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIGxvZ2luIF0qL1xyXG4gIFxyXG4gIC5jb250YWluZXItbG9naW4xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItbG9naW4xMDA6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoOTMsODQsMjQwLDAuNSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsMTY4LDI1NSwwLjUpLCByZ2JhKDE4NSwwLDI1NSwwLjUpKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDAsMTY4LDI1NSwwLjUpLCByZ2JhKDE4NSwwLDI1NSwwLjUpKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwxNjgsMjU1LDAuNSksIHJnYmEoMTg1LDAsMjU1LDAuNSkpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMCwxNjgsMjU1LDAuNSksIHJnYmEoMTg1LDAsMjU1LDAuNSkpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53cmFwLWxvZ2luMTAwIHtcclxuICAgIHdpZHRoOiAzOTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDNweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFsgRm9ybSBdKi9cclxuICBcclxuICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogU291cmNlU2Fuc1Byby1Cb2xkO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzMDc1ZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgSW5wdXQgXSovXHJcbiAgXHJcbiAgLndyYXAtaW5wdXQxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0MTAwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvLUJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzMwNzVmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyM3B4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgRm9jdXMgSW5wdXQgXSovXHJcbiAgXHJcbiAgLmZvY3VzLWlucHV0MTAwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1vLWJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDEwMDpmb2N1cyArIC5mb2N1cy1pbnB1dDEwMCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIEJ1dHRvbiBdKi9cclxuICAuY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1idG4ge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVmMTZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBcclxuICAgIGZvbnQtZmFtaWx5OiBTb3VyY2VTYW5zUHJvLVNlbWlCb2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICBcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDE4OSwgODksIDIxMiwgMC41KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuNSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuNSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjUpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwNzVmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDBweCByZ2JhKDE4OSwgODksIDIxMiwgMC44KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjgpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuOCk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwcHggcmdiYSgxODksIDg5LCAyMTIsIDAuOCk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMHB4IHJnYmEoMTg5LCA4OSwgMjEyLCAwLjgpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgQWxlcnQgdmFsaWRhdGUgXSovXHJcbiAgXHJcbiAgLnZhbGlkYXRlLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LXZhbGlkYXRlIC5mb2N1cy1pbnB1dDEwMCB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDI1MCwgNjYsIDgxLCAwLjEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDI1MCwgNjYsIDgxLCAwLjEpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDI1MCwgNjYsIDgxLCAwLjEpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMzBweCAwcHggcmdiYSgyNTAsIDY2LCA4MSwgMC4xKTtcclxuICAgIC1tcy1ib3gtc2hhZG93OiAwIDVweCAzMHB4IDBweCByZ2JhKDI1MCwgNjYsIDgxLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAuYWxlcnQtdmFsaWRhdGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdmFsaWRhdGUpO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDYycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMCA0NXB4IDAgMjJweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIFxyXG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZVNhbnNQcm8tQm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmE0MjUxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1oaWRlLXZhbGlkYXRlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZhNDI1MTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAyM3B4O1xyXG4gIH1cclxuICBcclxuICAucnMxLWFsZXJ0LXZhbGlkYXRlLmFsZXJ0LXZhbGlkYXRlOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLnRydWUtdmFsaWRhdGU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMjY5XCI7XHJcbiAgICBmb250LWZhbWlseTogTWF0ZXJpYWwtRGVzaWduLUljb25pYy1Gb250O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM1N2I4NDY7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMjNweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFNvY2lhbCBpdGVtIF0qL1xyXG4gIFxyXG4gIC5sb2dpbjEwMC1zb2NpYWwtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzNiNTk5ODtcclxuICBcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtc29jaWFsLWl0ZW0gaW1nIHtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtc29jaWFsLWl0ZW06aG92ZXIge1xyXG4gICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMCA1cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLW1zLWJveC1zaGFkb3c6IDAgNXB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFJlc3BvbnNpdmUgXSovXHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAud3JhcC1sb2dpbjEwMCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcbiAgLypbIEZPTlQgU0laRSBdXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiovXHJcbi5mcy0xIHtmb250LXNpemU6IDFweDt9XHJcbi5mcy0yIHtmb250LXNpemU6IDJweDt9XHJcbi5mcy0zIHtmb250LXNpemU6IDNweDt9XHJcbi5mcy00IHtmb250LXNpemU6IDRweDt9XHJcbi5mcy01IHtmb250LXNpemU6IDVweDt9XHJcbi5mcy02IHtmb250LXNpemU6IDZweDt9XHJcbi5mcy03IHtmb250LXNpemU6IDdweDt9XHJcbi5mcy04IHtmb250LXNpemU6IDhweDt9XHJcbi5mcy05IHtmb250LXNpemU6IDlweDt9XHJcbi5mcy0xMCB7Zm9udC1zaXplOiAxMHB4O31cclxuLmZzLTExIHtmb250LXNpemU6IDExcHg7fVxyXG4uZnMtMTIge2ZvbnQtc2l6ZTogMTJweDt9XHJcbi5mcy0xMyB7Zm9udC1zaXplOiAxM3B4O31cclxuLmZzLTE0IHtmb250LXNpemU6IDE0cHg7fVxyXG4uZnMtMTUge2ZvbnQtc2l6ZTogMTVweDt9XHJcbi5mcy0xNiB7Zm9udC1zaXplOiAxNnB4O31cclxuLmZzLTE3IHtmb250LXNpemU6IDE3cHg7fVxyXG4uZnMtMTgge2ZvbnQtc2l6ZTogMThweDt9XHJcbi5mcy0xOSB7Zm9udC1zaXplOiAxOXB4O31cclxuLmZzLTIwIHtmb250LXNpemU6IDIwcHg7fVxyXG4uZnMtMjEge2ZvbnQtc2l6ZTogMjFweDt9XHJcbi5mcy0yMiB7Zm9udC1zaXplOiAyMnB4O31cclxuLmZzLTIzIHtmb250LXNpemU6IDIzcHg7fVxyXG4uZnMtMjQge2ZvbnQtc2l6ZTogMjRweDt9XHJcbi5mcy0yNSB7Zm9udC1zaXplOiAyNXB4O31cclxuLmZzLTI2IHtmb250LXNpemU6IDI2cHg7fVxyXG4uZnMtMjcge2ZvbnQtc2l6ZTogMjdweDt9XHJcbi5mcy0yOCB7Zm9udC1zaXplOiAyOHB4O31cclxuLmZzLTI5IHtmb250LXNpemU6IDI5cHg7fVxyXG4uZnMtMzAge2ZvbnQtc2l6ZTogMzBweDt9XHJcbi5mcy0zMSB7Zm9udC1zaXplOiAzMXB4O31cclxuLmZzLTMyIHtmb250LXNpemU6IDMycHg7fVxyXG4uZnMtMzMge2ZvbnQtc2l6ZTogMzNweDt9XHJcbi5mcy0zNCB7Zm9udC1zaXplOiAzNHB4O31cclxuLmZzLTM1IHtmb250LXNpemU6IDM1cHg7fVxyXG4uZnMtMzYge2ZvbnQtc2l6ZTogMzZweDt9XHJcbi5mcy0zNyB7Zm9udC1zaXplOiAzN3B4O31cclxuLmZzLTM4IHtmb250LXNpemU6IDM4cHg7fVxyXG4uZnMtMzkge2ZvbnQtc2l6ZTogMzlweDt9XHJcbi5mcy00MCB7Zm9udC1zaXplOiA0MHB4O31cclxuLmZzLTQxIHtmb250LXNpemU6IDQxcHg7fVxyXG4uZnMtNDIge2ZvbnQtc2l6ZTogNDJweDt9XHJcbi5mcy00MyB7Zm9udC1zaXplOiA0M3B4O31cclxuLmZzLTQ0IHtmb250LXNpemU6IDQ0cHg7fVxyXG4uZnMtNDUge2ZvbnQtc2l6ZTogNDVweDt9XHJcbi5mcy00NiB7Zm9udC1zaXplOiA0NnB4O31cclxuLmZzLTQ3IHtmb250LXNpemU6IDQ3cHg7fVxyXG4uZnMtNDgge2ZvbnQtc2l6ZTogNDhweDt9XHJcbi5mcy00OSB7Zm9udC1zaXplOiA0OXB4O31cclxuLmZzLTUwIHtmb250LXNpemU6IDUwcHg7fVxyXG4uZnMtNTEge2ZvbnQtc2l6ZTogNTFweDt9XHJcbi5mcy01MiB7Zm9udC1zaXplOiA1MnB4O31cclxuLmZzLTUzIHtmb250LXNpemU6IDUzcHg7fVxyXG4uZnMtNTQge2ZvbnQtc2l6ZTogNTRweDt9XHJcbi5mcy01NSB7Zm9udC1zaXplOiA1NXB4O31cclxuLmZzLTU2IHtmb250LXNpemU6IDU2cHg7fVxyXG4uZnMtNTcge2ZvbnQtc2l6ZTogNTdweDt9XHJcbi5mcy01OCB7Zm9udC1zaXplOiA1OHB4O31cclxuLmZzLTU5IHtmb250LXNpemU6IDU5cHg7fVxyXG4uZnMtNjAge2ZvbnQtc2l6ZTogNjBweDt9XHJcbi5mcy02MSB7Zm9udC1zaXplOiA2MXB4O31cclxuLmZzLTYyIHtmb250LXNpemU6IDYycHg7fVxyXG4uZnMtNjMge2ZvbnQtc2l6ZTogNjNweDt9XHJcbi5mcy02NCB7Zm9udC1zaXplOiA2NHB4O31cclxuLmZzLTY1IHtmb250LXNpemU6IDY1cHg7fVxyXG4uZnMtNjYge2ZvbnQtc2l6ZTogNjZweDt9XHJcbi5mcy02NyB7Zm9udC1zaXplOiA2N3B4O31cclxuLmZzLTY4IHtmb250LXNpemU6IDY4cHg7fVxyXG4uZnMtNjkge2ZvbnQtc2l6ZTogNjlweDt9XHJcbi5mcy03MCB7Zm9udC1zaXplOiA3MHB4O31cclxuLmZzLTcxIHtmb250LXNpemU6IDcxcHg7fVxyXG4uZnMtNzIge2ZvbnQtc2l6ZTogNzJweDt9XHJcbi5mcy03MyB7Zm9udC1zaXplOiA3M3B4O31cclxuLmZzLTc0IHtmb250LXNpemU6IDc0cHg7fVxyXG4uZnMtNzUge2ZvbnQtc2l6ZTogNzVweDt9XHJcbi5mcy03NiB7Zm9udC1zaXplOiA3NnB4O31cclxuLmZzLTc3IHtmb250LXNpemU6IDc3cHg7fVxyXG4uZnMtNzgge2ZvbnQtc2l6ZTogNzhweDt9XHJcbi5mcy03OSB7Zm9udC1zaXplOiA3OXB4O31cclxuLmZzLTgwIHtmb250LXNpemU6IDgwcHg7fVxyXG4uZnMtODEge2ZvbnQtc2l6ZTogODFweDt9XHJcbi5mcy04MiB7Zm9udC1zaXplOiA4MnB4O31cclxuLmZzLTgzIHtmb250LXNpemU6IDgzcHg7fVxyXG4uZnMtODQge2ZvbnQtc2l6ZTogODRweDt9XHJcbi5mcy04NSB7Zm9udC1zaXplOiA4NXB4O31cclxuLmZzLTg2IHtmb250LXNpemU6IDg2cHg7fVxyXG4uZnMtODcge2ZvbnQtc2l6ZTogODdweDt9XHJcbi5mcy04OCB7Zm9udC1zaXplOiA4OHB4O31cclxuLmZzLTg5IHtmb250LXNpemU6IDg5cHg7fVxyXG4uZnMtOTAge2ZvbnQtc2l6ZTogOTBweDt9XHJcbi5mcy05MSB7Zm9udC1zaXplOiA5MXB4O31cclxuLmZzLTkyIHtmb250LXNpemU6IDkycHg7fVxyXG4uZnMtOTMge2ZvbnQtc2l6ZTogOTNweDt9XHJcbi5mcy05NCB7Zm9udC1zaXplOiA5NHB4O31cclxuLmZzLTk1IHtmb250LXNpemU6IDk1cHg7fVxyXG4uZnMtOTYge2ZvbnQtc2l6ZTogOTZweDt9XHJcbi5mcy05NyB7Zm9udC1zaXplOiA5N3B4O31cclxuLmZzLTk4IHtmb250LXNpemU6IDk4cHg7fVxyXG4uZnMtOTkge2ZvbnQtc2l6ZTogOTlweDt9XHJcbi5mcy0xMDAge2ZvbnQtc2l6ZTogMTAwcHg7fVxyXG4uZnMtMTAxIHtmb250LXNpemU6IDEwMXB4O31cclxuLmZzLTEwMiB7Zm9udC1zaXplOiAxMDJweDt9XHJcbi5mcy0xMDMge2ZvbnQtc2l6ZTogMTAzcHg7fVxyXG4uZnMtMTA0IHtmb250LXNpemU6IDEwNHB4O31cclxuLmZzLTEwNSB7Zm9udC1zaXplOiAxMDVweDt9XHJcbi5mcy0xMDYge2ZvbnQtc2l6ZTogMTA2cHg7fVxyXG4uZnMtMTA3IHtmb250LXNpemU6IDEwN3B4O31cclxuLmZzLTEwOCB7Zm9udC1zaXplOiAxMDhweDt9XHJcbi5mcy0xMDkge2ZvbnQtc2l6ZTogMTA5cHg7fVxyXG4uZnMtMTEwIHtmb250LXNpemU6IDExMHB4O31cclxuLmZzLTExMSB7Zm9udC1zaXplOiAxMTFweDt9XHJcbi5mcy0xMTIge2ZvbnQtc2l6ZTogMTEycHg7fVxyXG4uZnMtMTEzIHtmb250LXNpemU6IDExM3B4O31cclxuLmZzLTExNCB7Zm9udC1zaXplOiAxMTRweDt9XHJcbi5mcy0xMTUge2ZvbnQtc2l6ZTogMTE1cHg7fVxyXG4uZnMtMTE2IHtmb250LXNpemU6IDExNnB4O31cclxuLmZzLTExNyB7Zm9udC1zaXplOiAxMTdweDt9XHJcbi5mcy0xMTgge2ZvbnQtc2l6ZTogMTE4cHg7fVxyXG4uZnMtMTE5IHtmb250LXNpemU6IDExOXB4O31cclxuLmZzLTEyMCB7Zm9udC1zaXplOiAxMjBweDt9XHJcbi5mcy0xMjEge2ZvbnQtc2l6ZTogMTIxcHg7fVxyXG4uZnMtMTIyIHtmb250LXNpemU6IDEyMnB4O31cclxuLmZzLTEyMyB7Zm9udC1zaXplOiAxMjNweDt9XHJcbi5mcy0xMjQge2ZvbnQtc2l6ZTogMTI0cHg7fVxyXG4uZnMtMTI1IHtmb250LXNpemU6IDEyNXB4O31cclxuLmZzLTEyNiB7Zm9udC1zaXplOiAxMjZweDt9XHJcbi5mcy0xMjcge2ZvbnQtc2l6ZTogMTI3cHg7fVxyXG4uZnMtMTI4IHtmb250LXNpemU6IDEyOHB4O31cclxuLmZzLTEyOSB7Zm9udC1zaXplOiAxMjlweDt9XHJcbi5mcy0xMzAge2ZvbnQtc2l6ZTogMTMwcHg7fVxyXG4uZnMtMTMxIHtmb250LXNpemU6IDEzMXB4O31cclxuLmZzLTEzMiB7Zm9udC1zaXplOiAxMzJweDt9XHJcbi5mcy0xMzMge2ZvbnQtc2l6ZTogMTMzcHg7fVxyXG4uZnMtMTM0IHtmb250LXNpemU6IDEzNHB4O31cclxuLmZzLTEzNSB7Zm9udC1zaXplOiAxMzVweDt9XHJcbi5mcy0xMzYge2ZvbnQtc2l6ZTogMTM2cHg7fVxyXG4uZnMtMTM3IHtmb250LXNpemU6IDEzN3B4O31cclxuLmZzLTEzOCB7Zm9udC1zaXplOiAxMzhweDt9XHJcbi5mcy0xMzkge2ZvbnQtc2l6ZTogMTM5cHg7fVxyXG4uZnMtMTQwIHtmb250LXNpemU6IDE0MHB4O31cclxuLmZzLTE0MSB7Zm9udC1zaXplOiAxNDFweDt9XHJcbi5mcy0xNDIge2ZvbnQtc2l6ZTogMTQycHg7fVxyXG4uZnMtMTQzIHtmb250LXNpemU6IDE0M3B4O31cclxuLmZzLTE0NCB7Zm9udC1zaXplOiAxNDRweDt9XHJcbi5mcy0xNDUge2ZvbnQtc2l6ZTogMTQ1cHg7fVxyXG4uZnMtMTQ2IHtmb250LXNpemU6IDE0NnB4O31cclxuLmZzLTE0NyB7Zm9udC1zaXplOiAxNDdweDt9XHJcbi5mcy0xNDgge2ZvbnQtc2l6ZTogMTQ4cHg7fVxyXG4uZnMtMTQ5IHtmb250LXNpemU6IDE0OXB4O31cclxuLmZzLTE1MCB7Zm9udC1zaXplOiAxNTBweDt9XHJcbi5mcy0xNTEge2ZvbnQtc2l6ZTogMTUxcHg7fVxyXG4uZnMtMTUyIHtmb250LXNpemU6IDE1MnB4O31cclxuLmZzLTE1MyB7Zm9udC1zaXplOiAxNTNweDt9XHJcbi5mcy0xNTQge2ZvbnQtc2l6ZTogMTU0cHg7fVxyXG4uZnMtMTU1IHtmb250LXNpemU6IDE1NXB4O31cclxuLmZzLTE1NiB7Zm9udC1zaXplOiAxNTZweDt9XHJcbi5mcy0xNTcge2ZvbnQtc2l6ZTogMTU3cHg7fVxyXG4uZnMtMTU4IHtmb250LXNpemU6IDE1OHB4O31cclxuLmZzLTE1OSB7Zm9udC1zaXplOiAxNTlweDt9XHJcbi5mcy0xNjAge2ZvbnQtc2l6ZTogMTYwcHg7fVxyXG4uZnMtMTYxIHtmb250LXNpemU6IDE2MXB4O31cclxuLmZzLTE2MiB7Zm9udC1zaXplOiAxNjJweDt9XHJcbi5mcy0xNjMge2ZvbnQtc2l6ZTogMTYzcHg7fVxyXG4uZnMtMTY0IHtmb250LXNpemU6IDE2NHB4O31cclxuLmZzLTE2NSB7Zm9udC1zaXplOiAxNjVweDt9XHJcbi5mcy0xNjYge2ZvbnQtc2l6ZTogMTY2cHg7fVxyXG4uZnMtMTY3IHtmb250LXNpemU6IDE2N3B4O31cclxuLmZzLTE2OCB7Zm9udC1zaXplOiAxNjhweDt9XHJcbi5mcy0xNjkge2ZvbnQtc2l6ZTogMTY5cHg7fVxyXG4uZnMtMTcwIHtmb250LXNpemU6IDE3MHB4O31cclxuLmZzLTE3MSB7Zm9udC1zaXplOiAxNzFweDt9XHJcbi5mcy0xNzIge2ZvbnQtc2l6ZTogMTcycHg7fVxyXG4uZnMtMTczIHtmb250LXNpemU6IDE3M3B4O31cclxuLmZzLTE3NCB7Zm9udC1zaXplOiAxNzRweDt9XHJcbi5mcy0xNzUge2ZvbnQtc2l6ZTogMTc1cHg7fVxyXG4uZnMtMTc2IHtmb250LXNpemU6IDE3NnB4O31cclxuLmZzLTE3NyB7Zm9udC1zaXplOiAxNzdweDt9XHJcbi5mcy0xNzgge2ZvbnQtc2l6ZTogMTc4cHg7fVxyXG4uZnMtMTc5IHtmb250LXNpemU6IDE3OXB4O31cclxuLmZzLTE4MCB7Zm9udC1zaXplOiAxODBweDt9XHJcbi5mcy0xODEge2ZvbnQtc2l6ZTogMTgxcHg7fVxyXG4uZnMtMTgyIHtmb250LXNpemU6IDE4MnB4O31cclxuLmZzLTE4MyB7Zm9udC1zaXplOiAxODNweDt9XHJcbi5mcy0xODQge2ZvbnQtc2l6ZTogMTg0cHg7fVxyXG4uZnMtMTg1IHtmb250LXNpemU6IDE4NXB4O31cclxuLmZzLTE4NiB7Zm9udC1zaXplOiAxODZweDt9XHJcbi5mcy0xODcge2ZvbnQtc2l6ZTogMTg3cHg7fVxyXG4uZnMtMTg4IHtmb250LXNpemU6IDE4OHB4O31cclxuLmZzLTE4OSB7Zm9udC1zaXplOiAxODlweDt9XHJcbi5mcy0xOTAge2ZvbnQtc2l6ZTogMTkwcHg7fVxyXG4uZnMtMTkxIHtmb250LXNpemU6IDE5MXB4O31cclxuLmZzLTE5MiB7Zm9udC1zaXplOiAxOTJweDt9XHJcbi5mcy0xOTMge2ZvbnQtc2l6ZTogMTkzcHg7fVxyXG4uZnMtMTk0IHtmb250LXNpemU6IDE5NHB4O31cclxuLmZzLTE5NSB7Zm9udC1zaXplOiAxOTVweDt9XHJcbi5mcy0xOTYge2ZvbnQtc2l6ZTogMTk2cHg7fVxyXG4uZnMtMTk3IHtmb250LXNpemU6IDE5N3B4O31cclxuLmZzLTE5OCB7Zm9udC1zaXplOiAxOThweDt9XHJcbi5mcy0xOTkge2ZvbnQtc2l6ZTogMTk5cHg7fVxyXG4uZnMtMjAwIHtmb250LXNpemU6IDIwMHB4O31cclxuXHJcbi8qWyBQQURESU5HIF1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKi9cclxuLnAtdC0wIHtwYWRkaW5nLXRvcDogMHB4O31cclxuLnAtdC0xIHtwYWRkaW5nLXRvcDogMXB4O31cclxuLnAtdC0yIHtwYWRkaW5nLXRvcDogMnB4O31cclxuLnAtdC0zIHtwYWRkaW5nLXRvcDogM3B4O31cclxuLnAtdC00IHtwYWRkaW5nLXRvcDogNHB4O31cclxuLnAtdC01IHtwYWRkaW5nLXRvcDogNXB4O31cclxuLnAtdC02IHtwYWRkaW5nLXRvcDogNnB4O31cclxuLnAtdC03IHtwYWRkaW5nLXRvcDogN3B4O31cclxuLnAtdC04IHtwYWRkaW5nLXRvcDogOHB4O31cclxuLnAtdC05IHtwYWRkaW5nLXRvcDogOXB4O31cclxuLnAtdC0xMCB7cGFkZGluZy10b3A6IDEwcHg7fVxyXG4ucC10LTExIHtwYWRkaW5nLXRvcDogMTFweDt9XHJcbi5wLXQtMTIge3BhZGRpbmctdG9wOiAxMnB4O31cclxuLnAtdC0xMyB7cGFkZGluZy10b3A6IDEzcHg7fVxyXG4ucC10LTE0IHtwYWRkaW5nLXRvcDogMTRweDt9XHJcbi5wLXQtMTUge3BhZGRpbmctdG9wOiAxNXB4O31cclxuLnAtdC0xNiB7cGFkZGluZy10b3A6IDE2cHg7fVxyXG4ucC10LTE3IHtwYWRkaW5nLXRvcDogMTdweDt9XHJcbi5wLXQtMTgge3BhZGRpbmctdG9wOiAxOHB4O31cclxuLnAtdC0xOSB7cGFkZGluZy10b3A6IDE5cHg7fVxyXG4ucC10LTIwIHtwYWRkaW5nLXRvcDogMjBweDt9XHJcbi5wLXQtMjEge3BhZGRpbmctdG9wOiAyMXB4O31cclxuLnAtdC0yMiB7cGFkZGluZy10b3A6IDIycHg7fVxyXG4ucC10LTIzIHtwYWRkaW5nLXRvcDogMjNweDt9XHJcbi5wLXQtMjQge3BhZGRpbmctdG9wOiAyNHB4O31cclxuLnAtdC0yNSB7cGFkZGluZy10b3A6IDI1cHg7fVxyXG4ucC10LTI2IHtwYWRkaW5nLXRvcDogMjZweDt9XHJcbi5wLXQtMjcge3BhZGRpbmctdG9wOiAyN3B4O31cclxuLnAtdC0yOCB7cGFkZGluZy10b3A6IDI4cHg7fVxyXG4ucC10LTI5IHtwYWRkaW5nLXRvcDogMjlweDt9XHJcbi5wLXQtMzAge3BhZGRpbmctdG9wOiAzMHB4O31cclxuLnAtdC0zMSB7cGFkZGluZy10b3A6IDMxcHg7fVxyXG4ucC10LTMyIHtwYWRkaW5nLXRvcDogMzJweDt9XHJcbi5wLXQtMzMge3BhZGRpbmctdG9wOiAzM3B4O31cclxuLnAtdC0zNCB7cGFkZGluZy10b3A6IDM0cHg7fVxyXG4ucC10LTM1IHtwYWRkaW5nLXRvcDogMzVweDt9XHJcbi5wLXQtMzYge3BhZGRpbmctdG9wOiAzNnB4O31cclxuLnAtdC0zNyB7cGFkZGluZy10b3A6IDM3cHg7fVxyXG4ucC10LTM4IHtwYWRkaW5nLXRvcDogMzhweDt9XHJcbi5wLXQtMzkge3BhZGRpbmctdG9wOiAzOXB4O31cclxuLnAtdC00MCB7cGFkZGluZy10b3A6IDQwcHg7fVxyXG4ucC10LTQxIHtwYWRkaW5nLXRvcDogNDFweDt9XHJcbi5wLXQtNDIge3BhZGRpbmctdG9wOiA0MnB4O31cclxuLnAtdC00MyB7cGFkZGluZy10b3A6IDQzcHg7fVxyXG4ucC10LTQ0IHtwYWRkaW5nLXRvcDogNDRweDt9XHJcbi5wLXQtNDUge3BhZGRpbmctdG9wOiA0NXB4O31cclxuLnAtdC00NiB7cGFkZGluZy10b3A6IDQ2cHg7fVxyXG4ucC10LTQ3IHtwYWRkaW5nLXRvcDogNDdweDt9XHJcbi5wLXQtNDgge3BhZGRpbmctdG9wOiA0OHB4O31cclxuLnAtdC00OSB7cGFkZGluZy10b3A6IDQ5cHg7fVxyXG4ucC10LTUwIHtwYWRkaW5nLXRvcDogNTBweDt9XHJcbi5wLXQtNTEge3BhZGRpbmctdG9wOiA1MXB4O31cclxuLnAtdC01MiB7cGFkZGluZy10b3A6IDUycHg7fVxyXG4ucC10LTUzIHtwYWRkaW5nLXRvcDogNTNweDt9XHJcbi5wLXQtNTQge3BhZGRpbmctdG9wOiA1NHB4O31cclxuLnAtdC01NSB7cGFkZGluZy10b3A6IDU1cHg7fVxyXG4ucC10LTU2IHtwYWRkaW5nLXRvcDogNTZweDt9XHJcbi5wLXQtNTcge3BhZGRpbmctdG9wOiA1N3B4O31cclxuLnAtdC01OCB7cGFkZGluZy10b3A6IDU4cHg7fVxyXG4ucC10LTU5IHtwYWRkaW5nLXRvcDogNTlweDt9XHJcbi5wLXQtNjAge3BhZGRpbmctdG9wOiA2MHB4O31cclxuLnAtdC02MSB7cGFkZGluZy10b3A6IDYxcHg7fVxyXG4ucC10LTYyIHtwYWRkaW5nLXRvcDogNjJweDt9XHJcbi5wLXQtNjMge3BhZGRpbmctdG9wOiA2M3B4O31cclxuLnAtdC02NCB7cGFkZGluZy10b3A6IDY0cHg7fVxyXG4ucC10LTY1IHtwYWRkaW5nLXRvcDogNjVweDt9XHJcbi5wLXQtNjYge3BhZGRpbmctdG9wOiA2NnB4O31cclxuLnAtdC02NyB7cGFkZGluZy10b3A6IDY3cHg7fVxyXG4ucC10LTY4IHtwYWRkaW5nLXRvcDogNjhweDt9XHJcbi5wLXQtNjkge3BhZGRpbmctdG9wOiA2OXB4O31cclxuLnAtdC03MCB7cGFkZGluZy10b3A6IDcwcHg7fVxyXG4ucC10LTcxIHtwYWRkaW5nLXRvcDogNzFweDt9XHJcbi5wLXQtNzIge3BhZGRpbmctdG9wOiA3MnB4O31cclxuLnAtdC03MyB7cGFkZGluZy10b3A6IDczcHg7fVxyXG4ucC10LTc0IHtwYWRkaW5nLXRvcDogNzRweDt9XHJcbi5wLXQtNzUge3BhZGRpbmctdG9wOiA3NXB4O31cclxuLnAtdC03NiB7cGFkZGluZy10b3A6IDc2cHg7fVxyXG4ucC10LTc3IHtwYWRkaW5nLXRvcDogNzdweDt9XHJcbi5wLXQtNzgge3BhZGRpbmctdG9wOiA3OHB4O31cclxuLnAtdC03OSB7cGFkZGluZy10b3A6IDc5cHg7fVxyXG4ucC10LTgwIHtwYWRkaW5nLXRvcDogODBweDt9XHJcbi5wLXQtODEge3BhZGRpbmctdG9wOiA4MXB4O31cclxuLnAtdC04MiB7cGFkZGluZy10b3A6IDgycHg7fVxyXG4ucC10LTgzIHtwYWRkaW5nLXRvcDogODNweDt9XHJcbi5wLXQtODQge3BhZGRpbmctdG9wOiA4NHB4O31cclxuLnAtdC04NSB7cGFkZGluZy10b3A6IDg1cHg7fVxyXG4ucC10LTg2IHtwYWRkaW5nLXRvcDogODZweDt9XHJcbi5wLXQtODcge3BhZGRpbmctdG9wOiA4N3B4O31cclxuLnAtdC04OCB7cGFkZGluZy10b3A6IDg4cHg7fVxyXG4ucC10LTg5IHtwYWRkaW5nLXRvcDogODlweDt9XHJcbi5wLXQtOTAge3BhZGRpbmctdG9wOiA5MHB4O31cclxuLnAtdC05MSB7cGFkZGluZy10b3A6IDkxcHg7fVxyXG4ucC10LTkyIHtwYWRkaW5nLXRvcDogOTJweDt9XHJcbi5wLXQtOTMge3BhZGRpbmctdG9wOiA5M3B4O31cclxuLnAtdC05NCB7cGFkZGluZy10b3A6IDk0cHg7fVxyXG4ucC10LTk1IHtwYWRkaW5nLXRvcDogOTVweDt9XHJcbi5wLXQtOTYge3BhZGRpbmctdG9wOiA5NnB4O31cclxuLnAtdC05NyB7cGFkZGluZy10b3A6IDk3cHg7fVxyXG4ucC10LTk4IHtwYWRkaW5nLXRvcDogOThweDt9XHJcbi5wLXQtOTkge3BhZGRpbmctdG9wOiA5OXB4O31cclxuLnAtdC0xMDAge3BhZGRpbmctdG9wOiAxMDBweDt9XHJcbi5wLXQtMTAxIHtwYWRkaW5nLXRvcDogMTAxcHg7fVxyXG4ucC10LTEwMiB7cGFkZGluZy10b3A6IDEwMnB4O31cclxuLnAtdC0xMDMge3BhZGRpbmctdG9wOiAxMDNweDt9XHJcbi5wLXQtMTA0IHtwYWRkaW5nLXRvcDogMTA0cHg7fVxyXG4ucC10LTEwNSB7cGFkZGluZy10b3A6IDEwNXB4O31cclxuLnAtdC0xMDYge3BhZGRpbmctdG9wOiAxMDZweDt9XHJcbi5wLXQtMTA3IHtwYWRkaW5nLXRvcDogMTA3cHg7fVxyXG4ucC10LTEwOCB7cGFkZGluZy10b3A6IDEwOHB4O31cclxuLnAtdC0xMDkge3BhZGRpbmctdG9wOiAxMDlweDt9XHJcbi5wLXQtMTEwIHtwYWRkaW5nLXRvcDogMTEwcHg7fVxyXG4ucC10LTExMSB7cGFkZGluZy10b3A6IDExMXB4O31cclxuLnAtdC0xMTIge3BhZGRpbmctdG9wOiAxMTJweDt9XHJcbi5wLXQtMTEzIHtwYWRkaW5nLXRvcDogMTEzcHg7fVxyXG4ucC10LTExNCB7cGFkZGluZy10b3A6IDExNHB4O31cclxuLnAtdC0xMTUge3BhZGRpbmctdG9wOiAxMTVweDt9XHJcbi5wLXQtMTE2IHtwYWRkaW5nLXRvcDogMTE2cHg7fVxyXG4ucC10LTExNyB7cGFkZGluZy10b3A6IDExN3B4O31cclxuLnAtdC0xMTgge3BhZGRpbmctdG9wOiAxMThweDt9XHJcbi5wLXQtMTE5IHtwYWRkaW5nLXRvcDogMTE5cHg7fVxyXG4ucC10LTEyMCB7cGFkZGluZy10b3A6IDEyMHB4O31cclxuLnAtdC0xMjEge3BhZGRpbmctdG9wOiAxMjFweDt9XHJcbi5wLXQtMTIyIHtwYWRkaW5nLXRvcDogMTIycHg7fVxyXG4ucC10LTEyMyB7cGFkZGluZy10b3A6IDEyM3B4O31cclxuLnAtdC0xMjQge3BhZGRpbmctdG9wOiAxMjRweDt9XHJcbi5wLXQtMTI1IHtwYWRkaW5nLXRvcDogMTI1cHg7fVxyXG4ucC10LTEyNiB7cGFkZGluZy10b3A6IDEyNnB4O31cclxuLnAtdC0xMjcge3BhZGRpbmctdG9wOiAxMjdweDt9XHJcbi5wLXQtMTI4IHtwYWRkaW5nLXRvcDogMTI4cHg7fVxyXG4ucC10LTEyOSB7cGFkZGluZy10b3A6IDEyOXB4O31cclxuLnAtdC0xMzAge3BhZGRpbmctdG9wOiAxMzBweDt9XHJcbi5wLXQtMTMxIHtwYWRkaW5nLXRvcDogMTMxcHg7fVxyXG4ucC10LTEzMiB7cGFkZGluZy10b3A6IDEzMnB4O31cclxuLnAtdC0xMzMge3BhZGRpbmctdG9wOiAxMzNweDt9XHJcbi5wLXQtMTM0IHtwYWRkaW5nLXRvcDogMTM0cHg7fVxyXG4ucC10LTEzNSB7cGFkZGluZy10b3A6IDEzNXB4O31cclxuLnAtdC0xMzYge3BhZGRpbmctdG9wOiAxMzZweDt9XHJcbi5wLXQtMTM3IHtwYWRkaW5nLXRvcDogMTM3cHg7fVxyXG4ucC10LTEzOCB7cGFkZGluZy10b3A6IDEzOHB4O31cclxuLnAtdC0xMzkge3BhZGRpbmctdG9wOiAxMzlweDt9XHJcbi5wLXQtMTQwIHtwYWRkaW5nLXRvcDogMTQwcHg7fVxyXG4ucC10LTE0MSB7cGFkZGluZy10b3A6IDE0MXB4O31cclxuLnAtdC0xNDIge3BhZGRpbmctdG9wOiAxNDJweDt9XHJcbi5wLXQtMTQzIHtwYWRkaW5nLXRvcDogMTQzcHg7fVxyXG4ucC10LTE0NCB7cGFkZGluZy10b3A6IDE0NHB4O31cclxuLnAtdC0xNDUge3BhZGRpbmctdG9wOiAxNDVweDt9XHJcbi5wLXQtMTQ2IHtwYWRkaW5nLXRvcDogMTQ2cHg7fVxyXG4ucC10LTE0NyB7cGFkZGluZy10b3A6IDE0N3B4O31cclxuLnAtdC0xNDgge3BhZGRpbmctdG9wOiAxNDhweDt9XHJcbi5wLXQtMTQ5IHtwYWRkaW5nLXRvcDogMTQ5cHg7fVxyXG4ucC10LTE1MCB7cGFkZGluZy10b3A6IDE1MHB4O31cclxuLnAtdC0xNTEge3BhZGRpbmctdG9wOiAxNTFweDt9XHJcbi5wLXQtMTUyIHtwYWRkaW5nLXRvcDogMTUycHg7fVxyXG4ucC10LTE1MyB7cGFkZGluZy10b3A6IDE1M3B4O31cclxuLnAtdC0xNTQge3BhZGRpbmctdG9wOiAxNTRweDt9XHJcbi5wLXQtMTU1IHtwYWRkaW5nLXRvcDogMTU1cHg7fVxyXG4ucC10LTE1NiB7cGFkZGluZy10b3A6IDE1NnB4O31cclxuLnAtdC0xNTcge3BhZGRpbmctdG9wOiAxNTdweDt9XHJcbi5wLXQtMTU4IHtwYWRkaW5nLXRvcDogMTU4cHg7fVxyXG4ucC10LTE1OSB7cGFkZGluZy10b3A6IDE1OXB4O31cclxuLnAtdC0xNjAge3BhZGRpbmctdG9wOiAxNjBweDt9XHJcbi5wLXQtMTYxIHtwYWRkaW5nLXRvcDogMTYxcHg7fVxyXG4ucC10LTE2MiB7cGFkZGluZy10b3A6IDE2MnB4O31cclxuLnAtdC0xNjMge3BhZGRpbmctdG9wOiAxNjNweDt9XHJcbi5wLXQtMTY0IHtwYWRkaW5nLXRvcDogMTY0cHg7fVxyXG4ucC10LTE2NSB7cGFkZGluZy10b3A6IDE2NXB4O31cclxuLnAtdC0xNjYge3BhZGRpbmctdG9wOiAxNjZweDt9XHJcbi5wLXQtMTY3IHtwYWRkaW5nLXRvcDogMTY3cHg7fVxyXG4ucC10LTE2OCB7cGFkZGluZy10b3A6IDE2OHB4O31cclxuLnAtdC0xNjkge3BhZGRpbmctdG9wOiAxNjlweDt9XHJcbi5wLXQtMTcwIHtwYWRkaW5nLXRvcDogMTcwcHg7fVxyXG4ucC10LTE3MSB7cGFkZGluZy10b3A6IDE3MXB4O31cclxuLnAtdC0xNzIge3BhZGRpbmctdG9wOiAxNzJweDt9XHJcbi5wLXQtMTczIHtwYWRkaW5nLXRvcDogMTczcHg7fVxyXG4ucC10LTE3NCB7cGFkZGluZy10b3A6IDE3NHB4O31cclxuLnAtdC0xNzUge3BhZGRpbmctdG9wOiAxNzVweDt9XHJcbi5wLXQtMTc2IHtwYWRkaW5nLXRvcDogMTc2cHg7fVxyXG4ucC10LTE3NyB7cGFkZGluZy10b3A6IDE3N3B4O31cclxuLnAtdC0xNzgge3BhZGRpbmctdG9wOiAxNzhweDt9XHJcbi5wLXQtMTc5IHtwYWRkaW5nLXRvcDogMTc5cHg7fVxyXG4ucC10LTE4MCB7cGFkZGluZy10b3A6IDE4MHB4O31cclxuLnAtdC0xODEge3BhZGRpbmctdG9wOiAxODFweDt9XHJcbi5wLXQtMTgyIHtwYWRkaW5nLXRvcDogMTgycHg7fVxyXG4ucC10LTE4MyB7cGFkZGluZy10b3A6IDE4M3B4O31cclxuLnAtdC0xODQge3BhZGRpbmctdG9wOiAxODRweDt9XHJcbi5wLXQtMTg1IHtwYWRkaW5nLXRvcDogMTg1cHg7fVxyXG4ucC10LTE4NiB7cGFkZGluZy10b3A6IDE4NnB4O31cclxuLnAtdC0xODcge3BhZGRpbmctdG9wOiAxODdweDt9XHJcbi5wLXQtMTg4IHtwYWRkaW5nLXRvcDogMTg4cHg7fVxyXG4ucC10LTE4OSB7cGFkZGluZy10b3A6IDE4OXB4O31cclxuLnAtdC0xOTAge3BhZGRpbmctdG9wOiAxOTBweDt9XHJcbi5wLXQtMTkxIHtwYWRkaW5nLXRvcDogMTkxcHg7fVxyXG4ucC10LTE5MiB7cGFkZGluZy10b3A6IDE5MnB4O31cclxuLnAtdC0xOTMge3BhZGRpbmctdG9wOiAxOTNweDt9XHJcbi5wLXQtMTk0IHtwYWRkaW5nLXRvcDogMTk0cHg7fVxyXG4ucC10LTE5NSB7cGFkZGluZy10b3A6IDE5NXB4O31cclxuLnAtdC0xOTYge3BhZGRpbmctdG9wOiAxOTZweDt9XHJcbi5wLXQtMTk3IHtwYWRkaW5nLXRvcDogMTk3cHg7fVxyXG4ucC10LTE5OCB7cGFkZGluZy10b3A6IDE5OHB4O31cclxuLnAtdC0xOTkge3BhZGRpbmctdG9wOiAxOTlweDt9XHJcbi5wLXQtMjAwIHtwYWRkaW5nLXRvcDogMjAwcHg7fVxyXG4ucC10LTIwMSB7cGFkZGluZy10b3A6IDIwMXB4O31cclxuLnAtdC0yMDIge3BhZGRpbmctdG9wOiAyMDJweDt9XHJcbi5wLXQtMjAzIHtwYWRkaW5nLXRvcDogMjAzcHg7fVxyXG4ucC10LTIwNCB7cGFkZGluZy10b3A6IDIwNHB4O31cclxuLnAtdC0yMDUge3BhZGRpbmctdG9wOiAyMDVweDt9XHJcbi5wLXQtMjA2IHtwYWRkaW5nLXRvcDogMjA2cHg7fVxyXG4ucC10LTIwNyB7cGFkZGluZy10b3A6IDIwN3B4O31cclxuLnAtdC0yMDgge3BhZGRpbmctdG9wOiAyMDhweDt9XHJcbi5wLXQtMjA5IHtwYWRkaW5nLXRvcDogMjA5cHg7fVxyXG4ucC10LTIxMCB7cGFkZGluZy10b3A6IDIxMHB4O31cclxuLnAtdC0yMTEge3BhZGRpbmctdG9wOiAyMTFweDt9XHJcbi5wLXQtMjEyIHtwYWRkaW5nLXRvcDogMjEycHg7fVxyXG4ucC10LTIxMyB7cGFkZGluZy10b3A6IDIxM3B4O31cclxuLnAtdC0yMTQge3BhZGRpbmctdG9wOiAyMTRweDt9XHJcbi5wLXQtMjE1IHtwYWRkaW5nLXRvcDogMjE1cHg7fVxyXG4ucC10LTIxNiB7cGFkZGluZy10b3A6IDIxNnB4O31cclxuLnAtdC0yMTcge3BhZGRpbmctdG9wOiAyMTdweDt9XHJcbi5wLXQtMjE4IHtwYWRkaW5nLXRvcDogMjE4cHg7fVxyXG4ucC10LTIxOSB7cGFkZGluZy10b3A6IDIxOXB4O31cclxuLnAtdC0yMjAge3BhZGRpbmctdG9wOiAyMjBweDt9XHJcbi5wLXQtMjIxIHtwYWRkaW5nLXRvcDogMjIxcHg7fVxyXG4ucC10LTIyMiB7cGFkZGluZy10b3A6IDIyMnB4O31cclxuLnAtdC0yMjMge3BhZGRpbmctdG9wOiAyMjNweDt9XHJcbi5wLXQtMjI0IHtwYWRkaW5nLXRvcDogMjI0cHg7fVxyXG4ucC10LTIyNSB7cGFkZGluZy10b3A6IDIyNXB4O31cclxuLnAtdC0yMjYge3BhZGRpbmctdG9wOiAyMjZweDt9XHJcbi5wLXQtMjI3IHtwYWRkaW5nLXRvcDogMjI3cHg7fVxyXG4ucC10LTIyOCB7cGFkZGluZy10b3A6IDIyOHB4O31cclxuLnAtdC0yMjkge3BhZGRpbmctdG9wOiAyMjlweDt9XHJcbi5wLXQtMjMwIHtwYWRkaW5nLXRvcDogMjMwcHg7fVxyXG4ucC10LTIzMSB7cGFkZGluZy10b3A6IDIzMXB4O31cclxuLnAtdC0yMzIge3BhZGRpbmctdG9wOiAyMzJweDt9XHJcbi5wLXQtMjMzIHtwYWRkaW5nLXRvcDogMjMzcHg7fVxyXG4ucC10LTIzNCB7cGFkZGluZy10b3A6IDIzNHB4O31cclxuLnAtdC0yMzUge3BhZGRpbmctdG9wOiAyMzVweDt9XHJcbi5wLXQtMjM2IHtwYWRkaW5nLXRvcDogMjM2cHg7fVxyXG4ucC10LTIzNyB7cGFkZGluZy10b3A6IDIzN3B4O31cclxuLnAtdC0yMzgge3BhZGRpbmctdG9wOiAyMzhweDt9XHJcbi5wLXQtMjM5IHtwYWRkaW5nLXRvcDogMjM5cHg7fVxyXG4ucC10LTI0MCB7cGFkZGluZy10b3A6IDI0MHB4O31cclxuLnAtdC0yNDEge3BhZGRpbmctdG9wOiAyNDFweDt9XHJcbi5wLXQtMjQyIHtwYWRkaW5nLXRvcDogMjQycHg7fVxyXG4ucC10LTI0MyB7cGFkZGluZy10b3A6IDI0M3B4O31cclxuLnAtdC0yNDQge3BhZGRpbmctdG9wOiAyNDRweDt9XHJcbi5wLXQtMjQ1IHtwYWRkaW5nLXRvcDogMjQ1cHg7fVxyXG4ucC10LTI0NiB7cGFkZGluZy10b3A6IDI0NnB4O31cclxuLnAtdC0yNDcge3BhZGRpbmctdG9wOiAyNDdweDt9XHJcbi5wLXQtMjQ4IHtwYWRkaW5nLXRvcDogMjQ4cHg7fVxyXG4ucC10LTI0OSB7cGFkZGluZy10b3A6IDI0OXB4O31cclxuLnAtdC0yNTAge3BhZGRpbmctdG9wOiAyNTBweDt9XHJcbi5wLWItMCB7cGFkZGluZy1ib3R0b206IDBweDt9XHJcbi5wLWItMSB7cGFkZGluZy1ib3R0b206IDFweDt9XHJcbi5wLWItMiB7cGFkZGluZy1ib3R0b206IDJweDt9XHJcbi5wLWItMyB7cGFkZGluZy1ib3R0b206IDNweDt9XHJcbi5wLWItNCB7cGFkZGluZy1ib3R0b206IDRweDt9XHJcbi5wLWItNSB7cGFkZGluZy1ib3R0b206IDVweDt9XHJcbi5wLWItNiB7cGFkZGluZy1ib3R0b206IDZweDt9XHJcbi5wLWItNyB7cGFkZGluZy1ib3R0b206IDdweDt9XHJcbi5wLWItOCB7cGFkZGluZy1ib3R0b206IDhweDt9XHJcbi5wLWItOSB7cGFkZGluZy1ib3R0b206IDlweDt9XHJcbi5wLWItMTAge3BhZGRpbmctYm90dG9tOiAxMHB4O31cclxuLnAtYi0xMSB7cGFkZGluZy1ib3R0b206IDExcHg7fVxyXG4ucC1iLTEyIHtwYWRkaW5nLWJvdHRvbTogMTJweDt9XHJcbi5wLWItMTMge3BhZGRpbmctYm90dG9tOiAxM3B4O31cclxuLnAtYi0xNCB7cGFkZGluZy1ib3R0b206IDE0cHg7fVxyXG4ucC1iLTE1IHtwYWRkaW5nLWJvdHRvbTogMTVweDt9XHJcbi5wLWItMTYge3BhZGRpbmctYm90dG9tOiAxNnB4O31cclxuLnAtYi0xNyB7cGFkZGluZy1ib3R0b206IDE3cHg7fVxyXG4ucC1iLTE4IHtwYWRkaW5nLWJvdHRvbTogMThweDt9XHJcbi5wLWItMTkge3BhZGRpbmctYm90dG9tOiAxOXB4O31cclxuLnAtYi0yMCB7cGFkZGluZy1ib3R0b206IDIwcHg7fVxyXG4ucC1iLTIxIHtwYWRkaW5nLWJvdHRvbTogMjFweDt9XHJcbi5wLWItMjIge3BhZGRpbmctYm90dG9tOiAyMnB4O31cclxuLnAtYi0yMyB7cGFkZGluZy1ib3R0b206IDIzcHg7fVxyXG4ucC1iLTI0IHtwYWRkaW5nLWJvdHRvbTogMjRweDt9XHJcbi5wLWItMjUge3BhZGRpbmctYm90dG9tOiAyNXB4O31cclxuLnAtYi0yNiB7cGFkZGluZy1ib3R0b206IDI2cHg7fVxyXG4ucC1iLTI3IHtwYWRkaW5nLWJvdHRvbTogMjdweDt9XHJcbi5wLWItMjgge3BhZGRpbmctYm90dG9tOiAyOHB4O31cclxuLnAtYi0yOSB7cGFkZGluZy1ib3R0b206IDI5cHg7fVxyXG4ucC1iLTMwIHtwYWRkaW5nLWJvdHRvbTogMzBweDt9XHJcbi5wLWItMzEge3BhZGRpbmctYm90dG9tOiAzMXB4O31cclxuLnAtYi0zMiB7cGFkZGluZy1ib3R0b206IDMycHg7fVxyXG4ucC1iLTMzIHtwYWRkaW5nLWJvdHRvbTogMzNweDt9XHJcbi5wLWItMzQge3BhZGRpbmctYm90dG9tOiAzNHB4O31cclxuLnAtYi0zNSB7cGFkZGluZy1ib3R0b206IDM1cHg7fVxyXG4ucC1iLTM2IHtwYWRkaW5nLWJvdHRvbTogMzZweDt9XHJcbi5wLWItMzcge3BhZGRpbmctYm90dG9tOiAzN3B4O31cclxuLnAtYi0zOCB7cGFkZGluZy1ib3R0b206IDM4cHg7fVxyXG4ucC1iLTM5IHtwYWRkaW5nLWJvdHRvbTogMzlweDt9XHJcbi5wLWItNDAge3BhZGRpbmctYm90dG9tOiA0MHB4O31cclxuLnAtYi00MSB7cGFkZGluZy1ib3R0b206IDQxcHg7fVxyXG4ucC1iLTQyIHtwYWRkaW5nLWJvdHRvbTogNDJweDt9XHJcbi5wLWItNDMge3BhZGRpbmctYm90dG9tOiA0M3B4O31cclxuLnAtYi00NCB7cGFkZGluZy1ib3R0b206IDQ0cHg7fVxyXG4ucC1iLTQ1IHtwYWRkaW5nLWJvdHRvbTogNDVweDt9XHJcbi5wLWItNDYge3BhZGRpbmctYm90dG9tOiA0NnB4O31cclxuLnAtYi00NyB7cGFkZGluZy1ib3R0b206IDQ3cHg7fVxyXG4ucC1iLTQ4IHtwYWRkaW5nLWJvdHRvbTogNDhweDt9XHJcbi5wLWItNDkge3BhZGRpbmctYm90dG9tOiA0OXB4O31cclxuLnAtYi01MCB7cGFkZGluZy1ib3R0b206IDUwcHg7fVxyXG4ucC1iLTUxIHtwYWRkaW5nLWJvdHRvbTogNTFweDt9XHJcbi5wLWItNTIge3BhZGRpbmctYm90dG9tOiA1MnB4O31cclxuLnAtYi01MyB7cGFkZGluZy1ib3R0b206IDUzcHg7fVxyXG4ucC1iLTU0IHtwYWRkaW5nLWJvdHRvbTogNTRweDt9XHJcbi5wLWItNTUge3BhZGRpbmctYm90dG9tOiA1NXB4O31cclxuLnAtYi01NiB7cGFkZGluZy1ib3R0b206IDU2cHg7fVxyXG4ucC1iLTU3IHtwYWRkaW5nLWJvdHRvbTogNTdweDt9XHJcbi5wLWItNTgge3BhZGRpbmctYm90dG9tOiA1OHB4O31cclxuLnAtYi01OSB7cGFkZGluZy1ib3R0b206IDU5cHg7fVxyXG4ucC1iLTYwIHtwYWRkaW5nLWJvdHRvbTogNjBweDt9XHJcbi5wLWItNjEge3BhZGRpbmctYm90dG9tOiA2MXB4O31cclxuLnAtYi02MiB7cGFkZGluZy1ib3R0b206IDYycHg7fVxyXG4ucC1iLTYzIHtwYWRkaW5nLWJvdHRvbTogNjNweDt9XHJcbi5wLWItNjQge3BhZGRpbmctYm90dG9tOiA2NHB4O31cclxuLnAtYi02NSB7cGFkZGluZy1ib3R0b206IDY1cHg7fVxyXG4ucC1iLTY2IHtwYWRkaW5nLWJvdHRvbTogNjZweDt9XHJcbi5wLWItNjcge3BhZGRpbmctYm90dG9tOiA2N3B4O31cclxuLnAtYi02OCB7cGFkZGluZy1ib3R0b206IDY4cHg7fVxyXG4ucC1iLTY5IHtwYWRkaW5nLWJvdHRvbTogNjlweDt9XHJcbi5wLWItNzAge3BhZGRpbmctYm90dG9tOiA3MHB4O31cclxuLnAtYi03MSB7cGFkZGluZy1ib3R0b206IDcxcHg7fVxyXG4ucC1iLTcyIHtwYWRkaW5nLWJvdHRvbTogNzJweDt9XHJcbi5wLWItNzMge3BhZGRpbmctYm90dG9tOiA3M3B4O31cclxuLnAtYi03NCB7cGFkZGluZy1ib3R0b206IDc0cHg7fVxyXG4ucC1iLTc1IHtwYWRkaW5nLWJvdHRvbTogNzVweDt9XHJcbi5wLWItNzYge3BhZGRpbmctYm90dG9tOiA3NnB4O31cclxuLnAtYi03NyB7cGFkZGluZy1ib3R0b206IDc3cHg7fVxyXG4ucC1iLTc4IHtwYWRkaW5nLWJvdHRvbTogNzhweDt9XHJcbi5wLWItNzkge3BhZGRpbmctYm90dG9tOiA3OXB4O31cclxuLnAtYi04MCB7cGFkZGluZy1ib3R0b206IDgwcHg7fVxyXG4ucC1iLTgxIHtwYWRkaW5nLWJvdHRvbTogODFweDt9XHJcbi5wLWItODIge3BhZGRpbmctYm90dG9tOiA4MnB4O31cclxuLnAtYi04MyB7cGFkZGluZy1ib3R0b206IDgzcHg7fVxyXG4ucC1iLTg0IHtwYWRkaW5nLWJvdHRvbTogODRweDt9XHJcbi5wLWItODUge3BhZGRpbmctYm90dG9tOiA4NXB4O31cclxuLnAtYi04NiB7cGFkZGluZy1ib3R0b206IDg2cHg7fVxyXG4ucC1iLTg3IHtwYWRkaW5nLWJvdHRvbTogODdweDt9XHJcbi5wLWItODgge3BhZGRpbmctYm90dG9tOiA4OHB4O31cclxuLnAtYi04OSB7cGFkZGluZy1ib3R0b206IDg5cHg7fVxyXG4ucC1iLTkwIHtwYWRkaW5nLWJvdHRvbTogOTBweDt9XHJcbi5wLWItOTEge3BhZGRpbmctYm90dG9tOiA5MXB4O31cclxuLnAtYi05MiB7cGFkZGluZy1ib3R0b206IDkycHg7fVxyXG4ucC1iLTkzIHtwYWRkaW5nLWJvdHRvbTogOTNweDt9XHJcbi5wLWItOTQge3BhZGRpbmctYm90dG9tOiA5NHB4O31cclxuLnAtYi05NSB7cGFkZGluZy1ib3R0b206IDk1cHg7fVxyXG4ucC1iLTk2IHtwYWRkaW5nLWJvdHRvbTogOTZweDt9XHJcbi5wLWItOTcge3BhZGRpbmctYm90dG9tOiA5N3B4O31cclxuLnAtYi05OCB7cGFkZGluZy1ib3R0b206IDk4cHg7fVxyXG4ucC1iLTk5IHtwYWRkaW5nLWJvdHRvbTogOTlweDt9XHJcbi5wLWItMTAwIHtwYWRkaW5nLWJvdHRvbTogMTAwcHg7fVxyXG4ucC1iLTEwMSB7cGFkZGluZy1ib3R0b206IDEwMXB4O31cclxuLnAtYi0xMDIge3BhZGRpbmctYm90dG9tOiAxMDJweDt9XHJcbi5wLWItMTAzIHtwYWRkaW5nLWJvdHRvbTogMTAzcHg7fVxyXG4ucC1iLTEwNCB7cGFkZGluZy1ib3R0b206IDEwNHB4O31cclxuLnAtYi0xMDUge3BhZGRpbmctYm90dG9tOiAxMDVweDt9XHJcbi5wLWItMTA2IHtwYWRkaW5nLWJvdHRvbTogMTA2cHg7fVxyXG4ucC1iLTEwNyB7cGFkZGluZy1ib3R0b206IDEwN3B4O31cclxuLnAtYi0xMDgge3BhZGRpbmctYm90dG9tOiAxMDhweDt9XHJcbi5wLWItMTA5IHtwYWRkaW5nLWJvdHRvbTogMTA5cHg7fVxyXG4ucC1iLTExMCB7cGFkZGluZy1ib3R0b206IDExMHB4O31cclxuLnAtYi0xMTEge3BhZGRpbmctYm90dG9tOiAxMTFweDt9XHJcbi5wLWItMTEyIHtwYWRkaW5nLWJvdHRvbTogMTEycHg7fVxyXG4ucC1iLTExMyB7cGFkZGluZy1ib3R0b206IDExM3B4O31cclxuLnAtYi0xMTQge3BhZGRpbmctYm90dG9tOiAxMTRweDt9XHJcbi5wLWItMTE1IHtwYWRkaW5nLWJvdHRvbTogMTE1cHg7fVxyXG4ucC1iLTExNiB7cGFkZGluZy1ib3R0b206IDExNnB4O31cclxuLnAtYi0xMTcge3BhZGRpbmctYm90dG9tOiAxMTdweDt9XHJcbi5wLWItMTE4IHtwYWRkaW5nLWJvdHRvbTogMTE4cHg7fVxyXG4ucC1iLTExOSB7cGFkZGluZy1ib3R0b206IDExOXB4O31cclxuLnAtYi0xMjAge3BhZGRpbmctYm90dG9tOiAxMjBweDt9XHJcbi5wLWItMTIxIHtwYWRkaW5nLWJvdHRvbTogMTIxcHg7fVxyXG4ucC1iLTEyMiB7cGFkZGluZy1ib3R0b206IDEyMnB4O31cclxuLnAtYi0xMjMge3BhZGRpbmctYm90dG9tOiAxMjNweDt9XHJcbi5wLWItMTI0IHtwYWRkaW5nLWJvdHRvbTogMTI0cHg7fVxyXG4ucC1iLTEyNSB7cGFkZGluZy1ib3R0b206IDEyNXB4O31cclxuLnAtYi0xMjYge3BhZGRpbmctYm90dG9tOiAxMjZweDt9XHJcbi5wLWItMTI3IHtwYWRkaW5nLWJvdHRvbTogMTI3cHg7fVxyXG4ucC1iLTEyOCB7cGFkZGluZy1ib3R0b206IDEyOHB4O31cclxuLnAtYi0xMjkge3BhZGRpbmctYm90dG9tOiAxMjlweDt9XHJcbi5wLWItMTMwIHtwYWRkaW5nLWJvdHRvbTogMTMwcHg7fVxyXG4ucC1iLTEzMSB7cGFkZGluZy1ib3R0b206IDEzMXB4O31cclxuLnAtYi0xMzIge3BhZGRpbmctYm90dG9tOiAxMzJweDt9XHJcbi5wLWItMTMzIHtwYWRkaW5nLWJvdHRvbTogMTMzcHg7fVxyXG4ucC1iLTEzNCB7cGFkZGluZy1ib3R0b206IDEzNHB4O31cclxuLnAtYi0xMzUge3BhZGRpbmctYm90dG9tOiAxMzVweDt9XHJcbi5wLWItMTM2IHtwYWRkaW5nLWJvdHRvbTogMTM2cHg7fVxyXG4ucC1iLTEzNyB7cGFkZGluZy1ib3R0b206IDEzN3B4O31cclxuLnAtYi0xMzgge3BhZGRpbmctYm90dG9tOiAxMzhweDt9XHJcbi5wLWItMTM5IHtwYWRkaW5nLWJvdHRvbTogMTM5cHg7fVxyXG4ucC1iLTE0MCB7cGFkZGluZy1ib3R0b206IDE0MHB4O31cclxuLnAtYi0xNDEge3BhZGRpbmctYm90dG9tOiAxNDFweDt9XHJcbi5wLWItMTQyIHtwYWRkaW5nLWJvdHRvbTogMTQycHg7fVxyXG4ucC1iLTE0MyB7cGFkZGluZy1ib3R0b206IDE0M3B4O31cclxuLnAtYi0xNDQge3BhZGRpbmctYm90dG9tOiAxNDRweDt9XHJcbi5wLWItMTQ1IHtwYWRkaW5nLWJvdHRvbTogMTQ1cHg7fVxyXG4ucC1iLTE0NiB7cGFkZGluZy1ib3R0b206IDE0NnB4O31cclxuLnAtYi0xNDcge3BhZGRpbmctYm90dG9tOiAxNDdweDt9XHJcbi5wLWItMTQ4IHtwYWRkaW5nLWJvdHRvbTogMTQ4cHg7fVxyXG4ucC1iLTE0OSB7cGFkZGluZy1ib3R0b206IDE0OXB4O31cclxuLnAtYi0xNTAge3BhZGRpbmctYm90dG9tOiAxNTBweDt9XHJcbi5wLWItMTUxIHtwYWRkaW5nLWJvdHRvbTogMTUxcHg7fVxyXG4ucC1iLTE1MiB7cGFkZGluZy1ib3R0b206IDE1MnB4O31cclxuLnAtYi0xNTMge3BhZGRpbmctYm90dG9tOiAxNTNweDt9XHJcbi5wLWItMTU0IHtwYWRkaW5nLWJvdHRvbTogMTU0cHg7fVxyXG4ucC1iLTE1NSB7cGFkZGluZy1ib3R0b206IDE1NXB4O31cclxuLnAtYi0xNTYge3BhZGRpbmctYm90dG9tOiAxNTZweDt9XHJcbi5wLWItMTU3IHtwYWRkaW5nLWJvdHRvbTogMTU3cHg7fVxyXG4ucC1iLTE1OCB7cGFkZGluZy1ib3R0b206IDE1OHB4O31cclxuLnAtYi0xNTkge3BhZGRpbmctYm90dG9tOiAxNTlweDt9XHJcbi5wLWItMTYwIHtwYWRkaW5nLWJvdHRvbTogMTYwcHg7fVxyXG4ucC1iLTE2MSB7cGFkZGluZy1ib3R0b206IDE2MXB4O31cclxuLnAtYi0xNjIge3BhZGRpbmctYm90dG9tOiAxNjJweDt9XHJcbi5wLWItMTYzIHtwYWRkaW5nLWJvdHRvbTogMTYzcHg7fVxyXG4ucC1iLTE2NCB7cGFkZGluZy1ib3R0b206IDE2NHB4O31cclxuLnAtYi0xNjUge3BhZGRpbmctYm90dG9tOiAxNjVweDt9XHJcbi5wLWItMTY2IHtwYWRkaW5nLWJvdHRvbTogMTY2cHg7fVxyXG4ucC1iLTE2NyB7cGFkZGluZy1ib3R0b206IDE2N3B4O31cclxuLnAtYi0xNjgge3BhZGRpbmctYm90dG9tOiAxNjhweDt9XHJcbi5wLWItMTY5IHtwYWRkaW5nLWJvdHRvbTogMTY5cHg7fVxyXG4ucC1iLTE3MCB7cGFkZGluZy1ib3R0b206IDE3MHB4O31cclxuLnAtYi0xNzEge3BhZGRpbmctYm90dG9tOiAxNzFweDt9XHJcbi5wLWItMTcyIHtwYWRkaW5nLWJvdHRvbTogMTcycHg7fVxyXG4ucC1iLTE3MyB7cGFkZGluZy1ib3R0b206IDE3M3B4O31cclxuLnAtYi0xNzQge3BhZGRpbmctYm90dG9tOiAxNzRweDt9XHJcbi5wLWItMTc1IHtwYWRkaW5nLWJvdHRvbTogMTc1cHg7fVxyXG4ucC1iLTE3NiB7cGFkZGluZy1ib3R0b206IDE3NnB4O31cclxuLnAtYi0xNzcge3BhZGRpbmctYm90dG9tOiAxNzdweDt9XHJcbi5wLWItMTc4IHtwYWRkaW5nLWJvdHRvbTogMTc4cHg7fVxyXG4ucC1iLTE3OSB7cGFkZGluZy1ib3R0b206IDE3OXB4O31cclxuLnAtYi0xODAge3BhZGRpbmctYm90dG9tOiAxODBweDt9XHJcbi5wLWItMTgxIHtwYWRkaW5nLWJvdHRvbTogMTgxcHg7fVxyXG4ucC1iLTE4MiB7cGFkZGluZy1ib3R0b206IDE4MnB4O31cclxuLnAtYi0xODMge3BhZGRpbmctYm90dG9tOiAxODNweDt9XHJcbi5wLWItMTg0IHtwYWRkaW5nLWJvdHRvbTogMTg0cHg7fVxyXG4ucC1iLTE4NSB7cGFkZGluZy1ib3R0b206IDE4NXB4O31cclxuLnAtYi0xODYge3BhZGRpbmctYm90dG9tOiAxODZweDt9XHJcbi5wLWItMTg3IHtwYWRkaW5nLWJvdHRvbTogMTg3cHg7fVxyXG4ucC1iLTE4OCB7cGFkZGluZy1ib3R0b206IDE4OHB4O31cclxuLnAtYi0xODkge3BhZGRpbmctYm90dG9tOiAxODlweDt9XHJcbi5wLWItMTkwIHtwYWRkaW5nLWJvdHRvbTogMTkwcHg7fVxyXG4ucC1iLTE5MSB7cGFkZGluZy1ib3R0b206IDE5MXB4O31cclxuLnAtYi0xOTIge3BhZGRpbmctYm90dG9tOiAxOTJweDt9XHJcbi5wLWItMTkzIHtwYWRkaW5nLWJvdHRvbTogMTkzcHg7fVxyXG4ucC1iLTE5NCB7cGFkZGluZy1ib3R0b206IDE5NHB4O31cclxuLnAtYi0xOTUge3BhZGRpbmctYm90dG9tOiAxOTVweDt9XHJcbi5wLWItMTk2IHtwYWRkaW5nLWJvdHRvbTogMTk2cHg7fVxyXG4ucC1iLTE5NyB7cGFkZGluZy1ib3R0b206IDE5N3B4O31cclxuLnAtYi0xOTgge3BhZGRpbmctYm90dG9tOiAxOThweDt9XHJcbi5wLWItMTk5IHtwYWRkaW5nLWJvdHRvbTogMTk5cHg7fVxyXG4ucC1iLTIwMCB7cGFkZGluZy1ib3R0b206IDIwMHB4O31cclxuLnAtYi0yMDEge3BhZGRpbmctYm90dG9tOiAyMDFweDt9XHJcbi5wLWItMjAyIHtwYWRkaW5nLWJvdHRvbTogMjAycHg7fVxyXG4ucC1iLTIwMyB7cGFkZGluZy1ib3R0b206IDIwM3B4O31cclxuLnAtYi0yMDQge3BhZGRpbmctYm90dG9tOiAyMDRweDt9XHJcbi5wLWItMjA1IHtwYWRkaW5nLWJvdHRvbTogMjA1cHg7fVxyXG4ucC1iLTIwNiB7cGFkZGluZy1ib3R0b206IDIwNnB4O31cclxuLnAtYi0yMDcge3BhZGRpbmctYm90dG9tOiAyMDdweDt9XHJcbi5wLWItMjA4IHtwYWRkaW5nLWJvdHRvbTogMjA4cHg7fVxyXG4ucC1iLTIwOSB7cGFkZGluZy1ib3R0b206IDIwOXB4O31cclxuLnAtYi0yMTAge3BhZGRpbmctYm90dG9tOiAyMTBweDt9XHJcbi5wLWItMjExIHtwYWRkaW5nLWJvdHRvbTogMjExcHg7fVxyXG4ucC1iLTIxMiB7cGFkZGluZy1ib3R0b206IDIxMnB4O31cclxuLnAtYi0yMTMge3BhZGRpbmctYm90dG9tOiAyMTNweDt9XHJcbi5wLWItMjE0IHtwYWRkaW5nLWJvdHRvbTogMjE0cHg7fVxyXG4ucC1iLTIxNSB7cGFkZGluZy1ib3R0b206IDIxNXB4O31cclxuLnAtYi0yMTYge3BhZGRpbmctYm90dG9tOiAyMTZweDt9XHJcbi5wLWItMjE3IHtwYWRkaW5nLWJvdHRvbTogMjE3cHg7fVxyXG4ucC1iLTIxOCB7cGFkZGluZy1ib3R0b206IDIxOHB4O31cclxuLnAtYi0yMTkge3BhZGRpbmctYm90dG9tOiAyMTlweDt9XHJcbi5wLWItMjIwIHtwYWRkaW5nLWJvdHRvbTogMjIwcHg7fVxyXG4ucC1iLTIyMSB7cGFkZGluZy1ib3R0b206IDIyMXB4O31cclxuLnAtYi0yMjIge3BhZGRpbmctYm90dG9tOiAyMjJweDt9XHJcbi5wLWItMjIzIHtwYWRkaW5nLWJvdHRvbTogMjIzcHg7fVxyXG4ucC1iLTIyNCB7cGFkZGluZy1ib3R0b206IDIyNHB4O31cclxuLnAtYi0yMjUge3BhZGRpbmctYm90dG9tOiAyMjVweDt9XHJcbi5wLWItMjI2IHtwYWRkaW5nLWJvdHRvbTogMjI2cHg7fVxyXG4ucC1iLTIyNyB7cGFkZGluZy1ib3R0b206IDIyN3B4O31cclxuLnAtYi0yMjgge3BhZGRpbmctYm90dG9tOiAyMjhweDt9XHJcbi5wLWItMjI5IHtwYWRkaW5nLWJvdHRvbTogMjI5cHg7fVxyXG4ucC1iLTIzMCB7cGFkZGluZy1ib3R0b206IDIzMHB4O31cclxuLnAtYi0yMzEge3BhZGRpbmctYm90dG9tOiAyMzFweDt9XHJcbi5wLWItMjMyIHtwYWRkaW5nLWJvdHRvbTogMjMycHg7fVxyXG4ucC1iLTIzMyB7cGFkZGluZy1ib3R0b206IDIzM3B4O31cclxuLnAtYi0yMzQge3BhZGRpbmctYm90dG9tOiAyMzRweDt9XHJcbi5wLWItMjM1IHtwYWRkaW5nLWJvdHRvbTogMjM1cHg7fVxyXG4ucC1iLTIzNiB7cGFkZGluZy1ib3R0b206IDIzNnB4O31cclxuLnAtYi0yMzcge3BhZGRpbmctYm90dG9tOiAyMzdweDt9XHJcbi5wLWItMjM4IHtwYWRkaW5nLWJvdHRvbTogMjM4cHg7fVxyXG4ucC1iLTIzOSB7cGFkZGluZy1ib3R0b206IDIzOXB4O31cclxuLnAtYi0yNDAge3BhZGRpbmctYm90dG9tOiAyNDBweDt9XHJcbi5wLWItMjQxIHtwYWRkaW5nLWJvdHRvbTogMjQxcHg7fVxyXG4ucC1iLTI0MiB7cGFkZGluZy1ib3R0b206IDI0MnB4O31cclxuLnAtYi0yNDMge3BhZGRpbmctYm90dG9tOiAyNDNweDt9XHJcbi5wLWItMjQ0IHtwYWRkaW5nLWJvdHRvbTogMjQ0cHg7fVxyXG4ucC1iLTI0NSB7cGFkZGluZy1ib3R0b206IDI0NXB4O31cclxuLnAtYi0yNDYge3BhZGRpbmctYm90dG9tOiAyNDZweDt9XHJcbi5wLWItMjQ3IHtwYWRkaW5nLWJvdHRvbTogMjQ3cHg7fVxyXG4ucC1iLTI0OCB7cGFkZGluZy1ib3R0b206IDI0OHB4O31cclxuLnAtYi0yNDkge3BhZGRpbmctYm90dG9tOiAyNDlweDt9XHJcbi5wLWItMjUwIHtwYWRkaW5nLWJvdHRvbTogMjUwcHg7fVxyXG4ucC1sLTAge3BhZGRpbmctbGVmdDogMHB4O31cclxuLnAtbC0xIHtwYWRkaW5nLWxlZnQ6IDFweDt9XHJcbi5wLWwtMiB7cGFkZGluZy1sZWZ0OiAycHg7fVxyXG4ucC1sLTMge3BhZGRpbmctbGVmdDogM3B4O31cclxuLnAtbC00IHtwYWRkaW5nLWxlZnQ6IDRweDt9XHJcbi5wLWwtNSB7cGFkZGluZy1sZWZ0OiA1cHg7fVxyXG4ucC1sLTYge3BhZGRpbmctbGVmdDogNnB4O31cclxuLnAtbC03IHtwYWRkaW5nLWxlZnQ6IDdweDt9XHJcbi5wLWwtOCB7cGFkZGluZy1sZWZ0OiA4cHg7fVxyXG4ucC1sLTkge3BhZGRpbmctbGVmdDogOXB4O31cclxuLnAtbC0xMCB7cGFkZGluZy1sZWZ0OiAxMHB4O31cclxuLnAtbC0xMSB7cGFkZGluZy1sZWZ0OiAxMXB4O31cclxuLnAtbC0xMiB7cGFkZGluZy1sZWZ0OiAxMnB4O31cclxuLnAtbC0xMyB7cGFkZGluZy1sZWZ0OiAxM3B4O31cclxuLnAtbC0xNCB7cGFkZGluZy1sZWZ0OiAxNHB4O31cclxuLnAtbC0xNSB7cGFkZGluZy1sZWZ0OiAxNXB4O31cclxuLnAtbC0xNiB7cGFkZGluZy1sZWZ0OiAxNnB4O31cclxuLnAtbC0xNyB7cGFkZGluZy1sZWZ0OiAxN3B4O31cclxuLnAtbC0xOCB7cGFkZGluZy1sZWZ0OiAxOHB4O31cclxuLnAtbC0xOSB7cGFkZGluZy1sZWZ0OiAxOXB4O31cclxuLnAtbC0yMCB7cGFkZGluZy1sZWZ0OiAyMHB4O31cclxuLnAtbC0yMSB7cGFkZGluZy1sZWZ0OiAyMXB4O31cclxuLnAtbC0yMiB7cGFkZGluZy1sZWZ0OiAyMnB4O31cclxuLnAtbC0yMyB7cGFkZGluZy1sZWZ0OiAyM3B4O31cclxuLnAtbC0yNCB7cGFkZGluZy1sZWZ0OiAyNHB4O31cclxuLnAtbC0yNSB7cGFkZGluZy1sZWZ0OiAyNXB4O31cclxuLnAtbC0yNiB7cGFkZGluZy1sZWZ0OiAyNnB4O31cclxuLnAtbC0yNyB7cGFkZGluZy1sZWZ0OiAyN3B4O31cclxuLnAtbC0yOCB7cGFkZGluZy1sZWZ0OiAyOHB4O31cclxuLnAtbC0yOSB7cGFkZGluZy1sZWZ0OiAyOXB4O31cclxuLnAtbC0zMCB7cGFkZGluZy1sZWZ0OiAzMHB4O31cclxuLnAtbC0zMSB7cGFkZGluZy1sZWZ0OiAzMXB4O31cclxuLnAtbC0zMiB7cGFkZGluZy1sZWZ0OiAzMnB4O31cclxuLnAtbC0zMyB7cGFkZGluZy1sZWZ0OiAzM3B4O31cclxuLnAtbC0zNCB7cGFkZGluZy1sZWZ0OiAzNHB4O31cclxuLnAtbC0zNSB7cGFkZGluZy1sZWZ0OiAzNXB4O31cclxuLnAtbC0zNiB7cGFkZGluZy1sZWZ0OiAzNnB4O31cclxuLnAtbC0zNyB7cGFkZGluZy1sZWZ0OiAzN3B4O31cclxuLnAtbC0zOCB7cGFkZGluZy1sZWZ0OiAzOHB4O31cclxuLnAtbC0zOSB7cGFkZGluZy1sZWZ0OiAzOXB4O31cclxuLnAtbC00MCB7cGFkZGluZy1sZWZ0OiA0MHB4O31cclxuLnAtbC00MSB7cGFkZGluZy1sZWZ0OiA0MXB4O31cclxuLnAtbC00MiB7cGFkZGluZy1sZWZ0OiA0MnB4O31cclxuLnAtbC00MyB7cGFkZGluZy1sZWZ0OiA0M3B4O31cclxuLnAtbC00NCB7cGFkZGluZy1sZWZ0OiA0NHB4O31cclxuLnAtbC00NSB7cGFkZGluZy1sZWZ0OiA0NXB4O31cclxuLnAtbC00NiB7cGFkZGluZy1sZWZ0OiA0NnB4O31cclxuLnAtbC00NyB7cGFkZGluZy1sZWZ0OiA0N3B4O31cclxuLnAtbC00OCB7cGFkZGluZy1sZWZ0OiA0OHB4O31cclxuLnAtbC00OSB7cGFkZGluZy1sZWZ0OiA0OXB4O31cclxuLnAtbC01MCB7cGFkZGluZy1sZWZ0OiA1MHB4O31cclxuLnAtbC01MSB7cGFkZGluZy1sZWZ0OiA1MXB4O31cclxuLnAtbC01MiB7cGFkZGluZy1sZWZ0OiA1MnB4O31cclxuLnAtbC01MyB7cGFkZGluZy1sZWZ0OiA1M3B4O31cclxuLnAtbC01NCB7cGFkZGluZy1sZWZ0OiA1NHB4O31cclxuLnAtbC01NSB7cGFkZGluZy1sZWZ0OiA1NXB4O31cclxuLnAtbC01NiB7cGFkZGluZy1sZWZ0OiA1NnB4O31cclxuLnAtbC01NyB7cGFkZGluZy1sZWZ0OiA1N3B4O31cclxuLnAtbC01OCB7cGFkZGluZy1sZWZ0OiA1OHB4O31cclxuLnAtbC01OSB7cGFkZGluZy1sZWZ0OiA1OXB4O31cclxuLnAtbC02MCB7cGFkZGluZy1sZWZ0OiA2MHB4O31cclxuLnAtbC02MSB7cGFkZGluZy1sZWZ0OiA2MXB4O31cclxuLnAtbC02MiB7cGFkZGluZy1sZWZ0OiA2MnB4O31cclxuLnAtbC02MyB7cGFkZGluZy1sZWZ0OiA2M3B4O31cclxuLnAtbC02NCB7cGFkZGluZy1sZWZ0OiA2NHB4O31cclxuLnAtbC02NSB7cGFkZGluZy1sZWZ0OiA2NXB4O31cclxuLnAtbC02NiB7cGFkZGluZy1sZWZ0OiA2NnB4O31cclxuLnAtbC02NyB7cGFkZGluZy1sZWZ0OiA2N3B4O31cclxuLnAtbC02OCB7cGFkZGluZy1sZWZ0OiA2OHB4O31cclxuLnAtbC02OSB7cGFkZGluZy1sZWZ0OiA2OXB4O31cclxuLnAtbC03MCB7cGFkZGluZy1sZWZ0OiA3MHB4O31cclxuLnAtbC03MSB7cGFkZGluZy1sZWZ0OiA3MXB4O31cclxuLnAtbC03MiB7cGFkZGluZy1sZWZ0OiA3MnB4O31cclxuLnAtbC03MyB7cGFkZGluZy1sZWZ0OiA3M3B4O31cclxuLnAtbC03NCB7cGFkZGluZy1sZWZ0OiA3NHB4O31cclxuLnAtbC03NSB7cGFkZGluZy1sZWZ0OiA3NXB4O31cclxuLnAtbC03NiB7cGFkZGluZy1sZWZ0OiA3NnB4O31cclxuLnAtbC03NyB7cGFkZGluZy1sZWZ0OiA3N3B4O31cclxuLnAtbC03OCB7cGFkZGluZy1sZWZ0OiA3OHB4O31cclxuLnAtbC03OSB7cGFkZGluZy1sZWZ0OiA3OXB4O31cclxuLnAtbC04MCB7cGFkZGluZy1sZWZ0OiA4MHB4O31cclxuLnAtbC04MSB7cGFkZGluZy1sZWZ0OiA4MXB4O31cclxuLnAtbC04MiB7cGFkZGluZy1sZWZ0OiA4MnB4O31cclxuLnAtbC04MyB7cGFkZGluZy1sZWZ0OiA4M3B4O31cclxuLnAtbC04NCB7cGFkZGluZy1sZWZ0OiA4NHB4O31cclxuLnAtbC04NSB7cGFkZGluZy1sZWZ0OiA4NXB4O31cclxuLnAtbC04NiB7cGFkZGluZy1sZWZ0OiA4NnB4O31cclxuLnAtbC04NyB7cGFkZGluZy1sZWZ0OiA4N3B4O31cclxuLnAtbC04OCB7cGFkZGluZy1sZWZ0OiA4OHB4O31cclxuLnAtbC04OSB7cGFkZGluZy1sZWZ0OiA4OXB4O31cclxuLnAtbC05MCB7cGFkZGluZy1sZWZ0OiA5MHB4O31cclxuLnAtbC05MSB7cGFkZGluZy1sZWZ0OiA5MXB4O31cclxuLnAtbC05MiB7cGFkZGluZy1sZWZ0OiA5MnB4O31cclxuLnAtbC05MyB7cGFkZGluZy1sZWZ0OiA5M3B4O31cclxuLnAtbC05NCB7cGFkZGluZy1sZWZ0OiA5NHB4O31cclxuLnAtbC05NSB7cGFkZGluZy1sZWZ0OiA5NXB4O31cclxuLnAtbC05NiB7cGFkZGluZy1sZWZ0OiA5NnB4O31cclxuLnAtbC05NyB7cGFkZGluZy1sZWZ0OiA5N3B4O31cclxuLnAtbC05OCB7cGFkZGluZy1sZWZ0OiA5OHB4O31cclxuLnAtbC05OSB7cGFkZGluZy1sZWZ0OiA5OXB4O31cclxuLnAtbC0xMDAge3BhZGRpbmctbGVmdDogMTAwcHg7fVxyXG4ucC1sLTEwMSB7cGFkZGluZy1sZWZ0OiAxMDFweDt9XHJcbi5wLWwtMTAyIHtwYWRkaW5nLWxlZnQ6IDEwMnB4O31cclxuLnAtbC0xMDMge3BhZGRpbmctbGVmdDogMTAzcHg7fVxyXG4ucC1sLTEwNCB7cGFkZGluZy1sZWZ0OiAxMDRweDt9XHJcbi5wLWwtMTA1IHtwYWRkaW5nLWxlZnQ6IDEwNXB4O31cclxuLnAtbC0xMDYge3BhZGRpbmctbGVmdDogMTA2cHg7fVxyXG4ucC1sLTEwNyB7cGFkZGluZy1sZWZ0OiAxMDdweDt9XHJcbi5wLWwtMTA4IHtwYWRkaW5nLWxlZnQ6IDEwOHB4O31cclxuLnAtbC0xMDkge3BhZGRpbmctbGVmdDogMTA5cHg7fVxyXG4ucC1sLTExMCB7cGFkZGluZy1sZWZ0OiAxMTBweDt9XHJcbi5wLWwtMTExIHtwYWRkaW5nLWxlZnQ6IDExMXB4O31cclxuLnAtbC0xMTIge3BhZGRpbmctbGVmdDogMTEycHg7fVxyXG4ucC1sLTExMyB7cGFkZGluZy1sZWZ0OiAxMTNweDt9XHJcbi5wLWwtMTE0IHtwYWRkaW5nLWxlZnQ6IDExNHB4O31cclxuLnAtbC0xMTUge3BhZGRpbmctbGVmdDogMTE1cHg7fVxyXG4ucC1sLTExNiB7cGFkZGluZy1sZWZ0OiAxMTZweDt9XHJcbi5wLWwtMTE3IHtwYWRkaW5nLWxlZnQ6IDExN3B4O31cclxuLnAtbC0xMTgge3BhZGRpbmctbGVmdDogMTE4cHg7fVxyXG4ucC1sLTExOSB7cGFkZGluZy1sZWZ0OiAxMTlweDt9XHJcbi5wLWwtMTIwIHtwYWRkaW5nLWxlZnQ6IDEyMHB4O31cclxuLnAtbC0xMjEge3BhZGRpbmctbGVmdDogMTIxcHg7fVxyXG4ucC1sLTEyMiB7cGFkZGluZy1sZWZ0OiAxMjJweDt9XHJcbi5wLWwtMTIzIHtwYWRkaW5nLWxlZnQ6IDEyM3B4O31cclxuLnAtbC0xMjQge3BhZGRpbmctbGVmdDogMTI0cHg7fVxyXG4ucC1sLTEyNSB7cGFkZGluZy1sZWZ0OiAxMjVweDt9XHJcbi5wLWwtMTI2IHtwYWRkaW5nLWxlZnQ6IDEyNnB4O31cclxuLnAtbC0xMjcge3BhZGRpbmctbGVmdDogMTI3cHg7fVxyXG4ucC1sLTEyOCB7cGFkZGluZy1sZWZ0OiAxMjhweDt9XHJcbi5wLWwtMTI5IHtwYWRkaW5nLWxlZnQ6IDEyOXB4O31cclxuLnAtbC0xMzAge3BhZGRpbmctbGVmdDogMTMwcHg7fVxyXG4ucC1sLTEzMSB7cGFkZGluZy1sZWZ0OiAxMzFweDt9XHJcbi5wLWwtMTMyIHtwYWRkaW5nLWxlZnQ6IDEzMnB4O31cclxuLnAtbC0xMzMge3BhZGRpbmctbGVmdDogMTMzcHg7fVxyXG4ucC1sLTEzNCB7cGFkZGluZy1sZWZ0OiAxMzRweDt9XHJcbi5wLWwtMTM1IHtwYWRkaW5nLWxlZnQ6IDEzNXB4O31cclxuLnAtbC0xMzYge3BhZGRpbmctbGVmdDogMTM2cHg7fVxyXG4ucC1sLTEzNyB7cGFkZGluZy1sZWZ0OiAxMzdweDt9XHJcbi5wLWwtMTM4IHtwYWRkaW5nLWxlZnQ6IDEzOHB4O31cclxuLnAtbC0xMzkge3BhZGRpbmctbGVmdDogMTM5cHg7fVxyXG4ucC1sLTE0MCB7cGFkZGluZy1sZWZ0OiAxNDBweDt9XHJcbi5wLWwtMTQxIHtwYWRkaW5nLWxlZnQ6IDE0MXB4O31cclxuLnAtbC0xNDIge3BhZGRpbmctbGVmdDogMTQycHg7fVxyXG4ucC1sLTE0MyB7cGFkZGluZy1sZWZ0OiAxNDNweDt9XHJcbi5wLWwtMTQ0IHtwYWRkaW5nLWxlZnQ6IDE0NHB4O31cclxuLnAtbC0xNDUge3BhZGRpbmctbGVmdDogMTQ1cHg7fVxyXG4ucC1sLTE0NiB7cGFkZGluZy1sZWZ0OiAxNDZweDt9XHJcbi5wLWwtMTQ3IHtwYWRkaW5nLWxlZnQ6IDE0N3B4O31cclxuLnAtbC0xNDgge3BhZGRpbmctbGVmdDogMTQ4cHg7fVxyXG4ucC1sLTE0OSB7cGFkZGluZy1sZWZ0OiAxNDlweDt9XHJcbi5wLWwtMTUwIHtwYWRkaW5nLWxlZnQ6IDE1MHB4O31cclxuLnAtbC0xNTEge3BhZGRpbmctbGVmdDogMTUxcHg7fVxyXG4ucC1sLTE1MiB7cGFkZGluZy1sZWZ0OiAxNTJweDt9XHJcbi5wLWwtMTUzIHtwYWRkaW5nLWxlZnQ6IDE1M3B4O31cclxuLnAtbC0xNTQge3BhZGRpbmctbGVmdDogMTU0cHg7fVxyXG4ucC1sLTE1NSB7cGFkZGluZy1sZWZ0OiAxNTVweDt9XHJcbi5wLWwtMTU2IHtwYWRkaW5nLWxlZnQ6IDE1NnB4O31cclxuLnAtbC0xNTcge3BhZGRpbmctbGVmdDogMTU3cHg7fVxyXG4ucC1sLTE1OCB7cGFkZGluZy1sZWZ0OiAxNThweDt9XHJcbi5wLWwtMTU5IHtwYWRkaW5nLWxlZnQ6IDE1OXB4O31cclxuLnAtbC0xNjAge3BhZGRpbmctbGVmdDogMTYwcHg7fVxyXG4ucC1sLTE2MSB7cGFkZGluZy1sZWZ0OiAxNjFweDt9XHJcbi5wLWwtMTYyIHtwYWRkaW5nLWxlZnQ6IDE2MnB4O31cclxuLnAtbC0xNjMge3BhZGRpbmctbGVmdDogMTYzcHg7fVxyXG4ucC1sLTE2NCB7cGFkZGluZy1sZWZ0OiAxNjRweDt9XHJcbi5wLWwtMTY1IHtwYWRkaW5nLWxlZnQ6IDE2NXB4O31cclxuLnAtbC0xNjYge3BhZGRpbmctbGVmdDogMTY2cHg7fVxyXG4ucC1sLTE2NyB7cGFkZGluZy1sZWZ0OiAxNjdweDt9XHJcbi5wLWwtMTY4IHtwYWRkaW5nLWxlZnQ6IDE2OHB4O31cclxuLnAtbC0xNjkge3BhZGRpbmctbGVmdDogMTY5cHg7fVxyXG4ucC1sLTE3MCB7cGFkZGluZy1sZWZ0OiAxNzBweDt9XHJcbi5wLWwtMTcxIHtwYWRkaW5nLWxlZnQ6IDE3MXB4O31cclxuLnAtbC0xNzIge3BhZGRpbmctbGVmdDogMTcycHg7fVxyXG4ucC1sLTE3MyB7cGFkZGluZy1sZWZ0OiAxNzNweDt9XHJcbi5wLWwtMTc0IHtwYWRkaW5nLWxlZnQ6IDE3NHB4O31cclxuLnAtbC0xNzUge3BhZGRpbmctbGVmdDogMTc1cHg7fVxyXG4ucC1sLTE3NiB7cGFkZGluZy1sZWZ0OiAxNzZweDt9XHJcbi5wLWwtMTc3IHtwYWRkaW5nLWxlZnQ6IDE3N3B4O31cclxuLnAtbC0xNzgge3BhZGRpbmctbGVmdDogMTc4cHg7fVxyXG4ucC1sLTE3OSB7cGFkZGluZy1sZWZ0OiAxNzlweDt9XHJcbi5wLWwtMTgwIHtwYWRkaW5nLWxlZnQ6IDE4MHB4O31cclxuLnAtbC0xODEge3BhZGRpbmctbGVmdDogMTgxcHg7fVxyXG4ucC1sLTE4MiB7cGFkZGluZy1sZWZ0OiAxODJweDt9XHJcbi5wLWwtMTgzIHtwYWRkaW5nLWxlZnQ6IDE4M3B4O31cclxuLnAtbC0xODQge3BhZGRpbmctbGVmdDogMTg0cHg7fVxyXG4ucC1sLTE4NSB7cGFkZGluZy1sZWZ0OiAxODVweDt9XHJcbi5wLWwtMTg2IHtwYWRkaW5nLWxlZnQ6IDE4NnB4O31cclxuLnAtbC0xODcge3BhZGRpbmctbGVmdDogMTg3cHg7fVxyXG4ucC1sLTE4OCB7cGFkZGluZy1sZWZ0OiAxODhweDt9XHJcbi5wLWwtMTg5IHtwYWRkaW5nLWxlZnQ6IDE4OXB4O31cclxuLnAtbC0xOTAge3BhZGRpbmctbGVmdDogMTkwcHg7fVxyXG4ucC1sLTE5MSB7cGFkZGluZy1sZWZ0OiAxOTFweDt9XHJcbi5wLWwtMTkyIHtwYWRkaW5nLWxlZnQ6IDE5MnB4O31cclxuLnAtbC0xOTMge3BhZGRpbmctbGVmdDogMTkzcHg7fVxyXG4ucC1sLTE5NCB7cGFkZGluZy1sZWZ0OiAxOTRweDt9XHJcbi5wLWwtMTk1IHtwYWRkaW5nLWxlZnQ6IDE5NXB4O31cclxuLnAtbC0xOTYge3BhZGRpbmctbGVmdDogMTk2cHg7fVxyXG4ucC1sLTE5NyB7cGFkZGluZy1sZWZ0OiAxOTdweDt9XHJcbi5wLWwtMTk4IHtwYWRkaW5nLWxlZnQ6IDE5OHB4O31cclxuLnAtbC0xOTkge3BhZGRpbmctbGVmdDogMTk5cHg7fVxyXG4ucC1sLTIwMCB7cGFkZGluZy1sZWZ0OiAyMDBweDt9XHJcbi5wLWwtMjAxIHtwYWRkaW5nLWxlZnQ6IDIwMXB4O31cclxuLnAtbC0yMDIge3BhZGRpbmctbGVmdDogMjAycHg7fVxyXG4ucC1sLTIwMyB7cGFkZGluZy1sZWZ0OiAyMDNweDt9XHJcbi5wLWwtMjA0IHtwYWRkaW5nLWxlZnQ6IDIwNHB4O31cclxuLnAtbC0yMDUge3BhZGRpbmctbGVmdDogMjA1cHg7fVxyXG4ucC1sLTIwNiB7cGFkZGluZy1sZWZ0OiAyMDZweDt9XHJcbi5wLWwtMjA3IHtwYWRkaW5nLWxlZnQ6IDIwN3B4O31cclxuLnAtbC0yMDgge3BhZGRpbmctbGVmdDogMjA4cHg7fVxyXG4ucC1sLTIwOSB7cGFkZGluZy1sZWZ0OiAyMDlweDt9XHJcbi5wLWwtMjEwIHtwYWRkaW5nLWxlZnQ6IDIxMHB4O31cclxuLnAtbC0yMTEge3BhZGRpbmctbGVmdDogMjExcHg7fVxyXG4ucC1sLTIxMiB7cGFkZGluZy1sZWZ0OiAyMTJweDt9XHJcbi5wLWwtMjEzIHtwYWRkaW5nLWxlZnQ6IDIxM3B4O31cclxuLnAtbC0yMTQge3BhZGRpbmctbGVmdDogMjE0cHg7fVxyXG4ucC1sLTIxNSB7cGFkZGluZy1sZWZ0OiAyMTVweDt9XHJcbi5wLWwtMjE2IHtwYWRkaW5nLWxlZnQ6IDIxNnB4O31cclxuLnAtbC0yMTcge3BhZGRpbmctbGVmdDogMjE3cHg7fVxyXG4ucC1sLTIxOCB7cGFkZGluZy1sZWZ0OiAyMThweDt9XHJcbi5wLWwtMjE5IHtwYWRkaW5nLWxlZnQ6IDIxOXB4O31cclxuLnAtbC0yMjAge3BhZGRpbmctbGVmdDogMjIwcHg7fVxyXG4ucC1sLTIyMSB7cGFkZGluZy1sZWZ0OiAyMjFweDt9XHJcbi5wLWwtMjIyIHtwYWRkaW5nLWxlZnQ6IDIyMnB4O31cclxuLnAtbC0yMjMge3BhZGRpbmctbGVmdDogMjIzcHg7fVxyXG4ucC1sLTIyNCB7cGFkZGluZy1sZWZ0OiAyMjRweDt9XHJcbi5wLWwtMjI1IHtwYWRkaW5nLWxlZnQ6IDIyNXB4O31cclxuLnAtbC0yMjYge3BhZGRpbmctbGVmdDogMjI2cHg7fVxyXG4ucC1sLTIyNyB7cGFkZGluZy1sZWZ0OiAyMjdweDt9XHJcbi5wLWwtMjI4IHtwYWRkaW5nLWxlZnQ6IDIyOHB4O31cclxuLnAtbC0yMjkge3BhZGRpbmctbGVmdDogMjI5cHg7fVxyXG4ucC1sLTIzMCB7cGFkZGluZy1sZWZ0OiAyMzBweDt9XHJcbi5wLWwtMjMxIHtwYWRkaW5nLWxlZnQ6IDIzMXB4O31cclxuLnAtbC0yMzIge3BhZGRpbmctbGVmdDogMjMycHg7fVxyXG4ucC1sLTIzMyB7cGFkZGluZy1sZWZ0OiAyMzNweDt9XHJcbi5wLWwtMjM0IHtwYWRkaW5nLWxlZnQ6IDIzNHB4O31cclxuLnAtbC0yMzUge3BhZGRpbmctbGVmdDogMjM1cHg7fVxyXG4ucC1sLTIzNiB7cGFkZGluZy1sZWZ0OiAyMzZweDt9XHJcbi5wLWwtMjM3IHtwYWRkaW5nLWxlZnQ6IDIzN3B4O31cclxuLnAtbC0yMzgge3BhZGRpbmctbGVmdDogMjM4cHg7fVxyXG4ucC1sLTIzOSB7cGFkZGluZy1sZWZ0OiAyMzlweDt9XHJcbi5wLWwtMjQwIHtwYWRkaW5nLWxlZnQ6IDI0MHB4O31cclxuLnAtbC0yNDEge3BhZGRpbmctbGVmdDogMjQxcHg7fVxyXG4ucC1sLTI0MiB7cGFkZGluZy1sZWZ0OiAyNDJweDt9XHJcbi5wLWwtMjQzIHtwYWRkaW5nLWxlZnQ6IDI0M3B4O31cclxuLnAtbC0yNDQge3BhZGRpbmctbGVmdDogMjQ0cHg7fVxyXG4ucC1sLTI0NSB7cGFkZGluZy1sZWZ0OiAyNDVweDt9XHJcbi5wLWwtMjQ2IHtwYWRkaW5nLWxlZnQ6IDI0NnB4O31cclxuLnAtbC0yNDcge3BhZGRpbmctbGVmdDogMjQ3cHg7fVxyXG4ucC1sLTI0OCB7cGFkZGluZy1sZWZ0OiAyNDhweDt9XHJcbi5wLWwtMjQ5IHtwYWRkaW5nLWxlZnQ6IDI0OXB4O31cclxuLnAtbC0yNTAge3BhZGRpbmctbGVmdDogMjUwcHg7fVxyXG4ucC1yLTAge3BhZGRpbmctcmlnaHQ6IDBweDt9XHJcbi5wLXItMSB7cGFkZGluZy1yaWdodDogMXB4O31cclxuLnAtci0yIHtwYWRkaW5nLXJpZ2h0OiAycHg7fVxyXG4ucC1yLTMge3BhZGRpbmctcmlnaHQ6IDNweDt9XHJcbi5wLXItNCB7cGFkZGluZy1yaWdodDogNHB4O31cclxuLnAtci01IHtwYWRkaW5nLXJpZ2h0OiA1cHg7fVxyXG4ucC1yLTYge3BhZGRpbmctcmlnaHQ6IDZweDt9XHJcbi5wLXItNyB7cGFkZGluZy1yaWdodDogN3B4O31cclxuLnAtci04IHtwYWRkaW5nLXJpZ2h0OiA4cHg7fVxyXG4ucC1yLTkge3BhZGRpbmctcmlnaHQ6IDlweDt9XHJcbi5wLXItMTAge3BhZGRpbmctcmlnaHQ6IDEwcHg7fVxyXG4ucC1yLTExIHtwYWRkaW5nLXJpZ2h0OiAxMXB4O31cclxuLnAtci0xMiB7cGFkZGluZy1yaWdodDogMTJweDt9XHJcbi5wLXItMTMge3BhZGRpbmctcmlnaHQ6IDEzcHg7fVxyXG4ucC1yLTE0IHtwYWRkaW5nLXJpZ2h0OiAxNHB4O31cclxuLnAtci0xNSB7cGFkZGluZy1yaWdodDogMTVweDt9XHJcbi5wLXItMTYge3BhZGRpbmctcmlnaHQ6IDE2cHg7fVxyXG4ucC1yLTE3IHtwYWRkaW5nLXJpZ2h0OiAxN3B4O31cclxuLnAtci0xOCB7cGFkZGluZy1yaWdodDogMThweDt9XHJcbi5wLXItMTkge3BhZGRpbmctcmlnaHQ6IDE5cHg7fVxyXG4ucC1yLTIwIHtwYWRkaW5nLXJpZ2h0OiAyMHB4O31cclxuLnAtci0yMSB7cGFkZGluZy1yaWdodDogMjFweDt9XHJcbi5wLXItMjIge3BhZGRpbmctcmlnaHQ6IDIycHg7fVxyXG4ucC1yLTIzIHtwYWRkaW5nLXJpZ2h0OiAyM3B4O31cclxuLnAtci0yNCB7cGFkZGluZy1yaWdodDogMjRweDt9XHJcbi5wLXItMjUge3BhZGRpbmctcmlnaHQ6IDI1cHg7fVxyXG4ucC1yLTI2IHtwYWRkaW5nLXJpZ2h0OiAyNnB4O31cclxuLnAtci0yNyB7cGFkZGluZy1yaWdodDogMjdweDt9XHJcbi5wLXItMjgge3BhZGRpbmctcmlnaHQ6IDI4cHg7fVxyXG4ucC1yLTI5IHtwYWRkaW5nLXJpZ2h0OiAyOXB4O31cclxuLnAtci0zMCB7cGFkZGluZy1yaWdodDogMzBweDt9XHJcbi5wLXItMzEge3BhZGRpbmctcmlnaHQ6IDMxcHg7fVxyXG4ucC1yLTMyIHtwYWRkaW5nLXJpZ2h0OiAzMnB4O31cclxuLnAtci0zMyB7cGFkZGluZy1yaWdodDogMzNweDt9XHJcbi5wLXItMzQge3BhZGRpbmctcmlnaHQ6IDM0cHg7fVxyXG4ucC1yLTM1IHtwYWRkaW5nLXJpZ2h0OiAzNXB4O31cclxuLnAtci0zNiB7cGFkZGluZy1yaWdodDogMzZweDt9XHJcbi5wLXItMzcge3BhZGRpbmctcmlnaHQ6IDM3cHg7fVxyXG4ucC1yLTM4IHtwYWRkaW5nLXJpZ2h0OiAzOHB4O31cclxuLnAtci0zOSB7cGFkZGluZy1yaWdodDogMzlweDt9XHJcbi5wLXItNDAge3BhZGRpbmctcmlnaHQ6IDQwcHg7fVxyXG4ucC1yLTQxIHtwYWRkaW5nLXJpZ2h0OiA0MXB4O31cclxuLnAtci00MiB7cGFkZGluZy1yaWdodDogNDJweDt9XHJcbi5wLXItNDMge3BhZGRpbmctcmlnaHQ6IDQzcHg7fVxyXG4ucC1yLTQ0IHtwYWRkaW5nLXJpZ2h0OiA0NHB4O31cclxuLnAtci00NSB7cGFkZGluZy1yaWdodDogNDVweDt9XHJcbi5wLXItNDYge3BhZGRpbmctcmlnaHQ6IDQ2cHg7fVxyXG4ucC1yLTQ3IHtwYWRkaW5nLXJpZ2h0OiA0N3B4O31cclxuLnAtci00OCB7cGFkZGluZy1yaWdodDogNDhweDt9XHJcbi5wLXItNDkge3BhZGRpbmctcmlnaHQ6IDQ5cHg7fVxyXG4ucC1yLTUwIHtwYWRkaW5nLXJpZ2h0OiA1MHB4O31cclxuLnAtci01MSB7cGFkZGluZy1yaWdodDogNTFweDt9XHJcbi5wLXItNTIge3BhZGRpbmctcmlnaHQ6IDUycHg7fVxyXG4ucC1yLTUzIHtwYWRkaW5nLXJpZ2h0OiA1M3B4O31cclxuLnAtci01NCB7cGFkZGluZy1yaWdodDogNTRweDt9XHJcbi5wLXItNTUge3BhZGRpbmctcmlnaHQ6IDU1cHg7fVxyXG4ucC1yLTU2IHtwYWRkaW5nLXJpZ2h0OiA1NnB4O31cclxuLnAtci01NyB7cGFkZGluZy1yaWdodDogNTdweDt9XHJcbi5wLXItNTgge3BhZGRpbmctcmlnaHQ6IDU4cHg7fVxyXG4ucC1yLTU5IHtwYWRkaW5nLXJpZ2h0OiA1OXB4O31cclxuLnAtci02MCB7cGFkZGluZy1yaWdodDogNjBweDt9XHJcbi5wLXItNjEge3BhZGRpbmctcmlnaHQ6IDYxcHg7fVxyXG4ucC1yLTYyIHtwYWRkaW5nLXJpZ2h0OiA2MnB4O31cclxuLnAtci02MyB7cGFkZGluZy1yaWdodDogNjNweDt9XHJcbi5wLXItNjQge3BhZGRpbmctcmlnaHQ6IDY0cHg7fVxyXG4ucC1yLTY1IHtwYWRkaW5nLXJpZ2h0OiA2NXB4O31cclxuLnAtci02NiB7cGFkZGluZy1yaWdodDogNjZweDt9XHJcbi5wLXItNjcge3BhZGRpbmctcmlnaHQ6IDY3cHg7fVxyXG4ucC1yLTY4IHtwYWRkaW5nLXJpZ2h0OiA2OHB4O31cclxuLnAtci02OSB7cGFkZGluZy1yaWdodDogNjlweDt9XHJcbi5wLXItNzAge3BhZGRpbmctcmlnaHQ6IDcwcHg7fVxyXG4ucC1yLTcxIHtwYWRkaW5nLXJpZ2h0OiA3MXB4O31cclxuLnAtci03MiB7cGFkZGluZy1yaWdodDogNzJweDt9XHJcbi5wLXItNzMge3BhZGRpbmctcmlnaHQ6IDczcHg7fVxyXG4ucC1yLTc0IHtwYWRkaW5nLXJpZ2h0OiA3NHB4O31cclxuLnAtci03NSB7cGFkZGluZy1yaWdodDogNzVweDt9XHJcbi5wLXItNzYge3BhZGRpbmctcmlnaHQ6IDc2cHg7fVxyXG4ucC1yLTc3IHtwYWRkaW5nLXJpZ2h0OiA3N3B4O31cclxuLnAtci03OCB7cGFkZGluZy1yaWdodDogNzhweDt9XHJcbi5wLXItNzkge3BhZGRpbmctcmlnaHQ6IDc5cHg7fVxyXG4ucC1yLTgwIHtwYWRkaW5nLXJpZ2h0OiA4MHB4O31cclxuLnAtci04MSB7cGFkZGluZy1yaWdodDogODFweDt9XHJcbi5wLXItODIge3BhZGRpbmctcmlnaHQ6IDgycHg7fVxyXG4ucC1yLTgzIHtwYWRkaW5nLXJpZ2h0OiA4M3B4O31cclxuLnAtci04NCB7cGFkZGluZy1yaWdodDogODRweDt9XHJcbi5wLXItODUge3BhZGRpbmctcmlnaHQ6IDg1cHg7fVxyXG4ucC1yLTg2IHtwYWRkaW5nLXJpZ2h0OiA4NnB4O31cclxuLnAtci04NyB7cGFkZGluZy1yaWdodDogODdweDt9XHJcbi5wLXItODgge3BhZGRpbmctcmlnaHQ6IDg4cHg7fVxyXG4ucC1yLTg5IHtwYWRkaW5nLXJpZ2h0OiA4OXB4O31cclxuLnAtci05MCB7cGFkZGluZy1yaWdodDogOTBweDt9XHJcbi5wLXItOTEge3BhZGRpbmctcmlnaHQ6IDkxcHg7fVxyXG4ucC1yLTkyIHtwYWRkaW5nLXJpZ2h0OiA5MnB4O31cclxuLnAtci05MyB7cGFkZGluZy1yaWdodDogOTNweDt9XHJcbi5wLXItOTQge3BhZGRpbmctcmlnaHQ6IDk0cHg7fVxyXG4ucC1yLTk1IHtwYWRkaW5nLXJpZ2h0OiA5NXB4O31cclxuLnAtci05NiB7cGFkZGluZy1yaWdodDogOTZweDt9XHJcbi5wLXItOTcge3BhZGRpbmctcmlnaHQ6IDk3cHg7fVxyXG4ucC1yLTk4IHtwYWRkaW5nLXJpZ2h0OiA5OHB4O31cclxuLnAtci05OSB7cGFkZGluZy1yaWdodDogOTlweDt9XHJcbi5wLXItMTAwIHtwYWRkaW5nLXJpZ2h0OiAxMDBweDt9XHJcbi5wLXItMTAxIHtwYWRkaW5nLXJpZ2h0OiAxMDFweDt9XHJcbi5wLXItMTAyIHtwYWRkaW5nLXJpZ2h0OiAxMDJweDt9XHJcbi5wLXItMTAzIHtwYWRkaW5nLXJpZ2h0OiAxMDNweDt9XHJcbi5wLXItMTA0IHtwYWRkaW5nLXJpZ2h0OiAxMDRweDt9XHJcbi5wLXItMTA1IHtwYWRkaW5nLXJpZ2h0OiAxMDVweDt9XHJcbi5wLXItMTA2IHtwYWRkaW5nLXJpZ2h0OiAxMDZweDt9XHJcbi5wLXItMTA3IHtwYWRkaW5nLXJpZ2h0OiAxMDdweDt9XHJcbi5wLXItMTA4IHtwYWRkaW5nLXJpZ2h0OiAxMDhweDt9XHJcbi5wLXItMTA5IHtwYWRkaW5nLXJpZ2h0OiAxMDlweDt9XHJcbi5wLXItMTEwIHtwYWRkaW5nLXJpZ2h0OiAxMTBweDt9XHJcbi5wLXItMTExIHtwYWRkaW5nLXJpZ2h0OiAxMTFweDt9XHJcbi5wLXItMTEyIHtwYWRkaW5nLXJpZ2h0OiAxMTJweDt9XHJcbi5wLXItMTEzIHtwYWRkaW5nLXJpZ2h0OiAxMTNweDt9XHJcbi5wLXItMTE0IHtwYWRkaW5nLXJpZ2h0OiAxMTRweDt9XHJcbi5wLXItMTE1IHtwYWRkaW5nLXJpZ2h0OiAxMTVweDt9XHJcbi5wLXItMTE2IHtwYWRkaW5nLXJpZ2h0OiAxMTZweDt9XHJcbi5wLXItMTE3IHtwYWRkaW5nLXJpZ2h0OiAxMTdweDt9XHJcbi5wLXItMTE4IHtwYWRkaW5nLXJpZ2h0OiAxMThweDt9XHJcbi5wLXItMTE5IHtwYWRkaW5nLXJpZ2h0OiAxMTlweDt9XHJcbi5wLXItMTIwIHtwYWRkaW5nLXJpZ2h0OiAxMjBweDt9XHJcbi5wLXItMTIxIHtwYWRkaW5nLXJpZ2h0OiAxMjFweDt9XHJcbi5wLXItMTIyIHtwYWRkaW5nLXJpZ2h0OiAxMjJweDt9XHJcbi5wLXItMTIzIHtwYWRkaW5nLXJpZ2h0OiAxMjNweDt9XHJcbi5wLXItMTI0IHtwYWRkaW5nLXJpZ2h0OiAxMjRweDt9XHJcbi5wLXItMTI1IHtwYWRkaW5nLXJpZ2h0OiAxMjVweDt9XHJcbi5wLXItMTI2IHtwYWRkaW5nLXJpZ2h0OiAxMjZweDt9XHJcbi5wLXItMTI3IHtwYWRkaW5nLXJpZ2h0OiAxMjdweDt9XHJcbi5wLXItMTI4IHtwYWRkaW5nLXJpZ2h0OiAxMjhweDt9XHJcbi5wLXItMTI5IHtwYWRkaW5nLXJpZ2h0OiAxMjlweDt9XHJcbi5wLXItMTMwIHtwYWRkaW5nLXJpZ2h0OiAxMzBweDt9XHJcbi5wLXItMTMxIHtwYWRkaW5nLXJpZ2h0OiAxMzFweDt9XHJcbi5wLXItMTMyIHtwYWRkaW5nLXJpZ2h0OiAxMzJweDt9XHJcbi5wLXItMTMzIHtwYWRkaW5nLXJpZ2h0OiAxMzNweDt9XHJcbi5wLXItMTM0IHtwYWRkaW5nLXJpZ2h0OiAxMzRweDt9XHJcbi5wLXItMTM1IHtwYWRkaW5nLXJpZ2h0OiAxMzVweDt9XHJcbi5wLXItMTM2IHtwYWRkaW5nLXJpZ2h0OiAxMzZweDt9XHJcbi5wLXItMTM3IHtwYWRkaW5nLXJpZ2h0OiAxMzdweDt9XHJcbi5wLXItMTM4IHtwYWRkaW5nLXJpZ2h0OiAxMzhweDt9XHJcbi5wLXItMTM5IHtwYWRkaW5nLXJpZ2h0OiAxMzlweDt9XHJcbi5wLXItMTQwIHtwYWRkaW5nLXJpZ2h0OiAxNDBweDt9XHJcbi5wLXItMTQxIHtwYWRkaW5nLXJpZ2h0OiAxNDFweDt9XHJcbi5wLXItMTQyIHtwYWRkaW5nLXJpZ2h0OiAxNDJweDt9XHJcbi5wLXItMTQzIHtwYWRkaW5nLXJpZ2h0OiAxNDNweDt9XHJcbi5wLXItMTQ0IHtwYWRkaW5nLXJpZ2h0OiAxNDRweDt9XHJcbi5wLXItMTQ1IHtwYWRkaW5nLXJpZ2h0OiAxNDVweDt9XHJcbi5wLXItMTQ2IHtwYWRkaW5nLXJpZ2h0OiAxNDZweDt9XHJcbi5wLXItMTQ3IHtwYWRkaW5nLXJpZ2h0OiAxNDdweDt9XHJcbi5wLXItMTQ4IHtwYWRkaW5nLXJpZ2h0OiAxNDhweDt9XHJcbi5wLXItMTQ5IHtwYWRkaW5nLXJpZ2h0OiAxNDlweDt9XHJcbi5wLXItMTUwIHtwYWRkaW5nLXJpZ2h0OiAxNTBweDt9XHJcbi5wLXItMTUxIHtwYWRkaW5nLXJpZ2h0OiAxNTFweDt9XHJcbi5wLXItMTUyIHtwYWRkaW5nLXJpZ2h0OiAxNTJweDt9XHJcbi5wLXItMTUzIHtwYWRkaW5nLXJpZ2h0OiAxNTNweDt9XHJcbi5wLXItMTU0IHtwYWRkaW5nLXJpZ2h0OiAxNTRweDt9XHJcbi5wLXItMTU1IHtwYWRkaW5nLXJpZ2h0OiAxNTVweDt9XHJcbi5wLXItMTU2IHtwYWRkaW5nLXJpZ2h0OiAxNTZweDt9XHJcbi5wLXItMTU3IHtwYWRkaW5nLXJpZ2h0OiAxNTdweDt9XHJcbi5wLXItMTU4IHtwYWRkaW5nLXJpZ2h0OiAxNThweDt9XHJcbi5wLXItMTU5IHtwYWRkaW5nLXJpZ2h0OiAxNTlweDt9XHJcbi5wLXItMTYwIHtwYWRkaW5nLXJpZ2h0OiAxNjBweDt9XHJcbi5wLXItMTYxIHtwYWRkaW5nLXJpZ2h0OiAxNjFweDt9XHJcbi5wLXItMTYyIHtwYWRkaW5nLXJpZ2h0OiAxNjJweDt9XHJcbi5wLXItMTYzIHtwYWRkaW5nLXJpZ2h0OiAxNjNweDt9XHJcbi5wLXItMTY0IHtwYWRkaW5nLXJpZ2h0OiAxNjRweDt9XHJcbi5wLXItMTY1IHtwYWRkaW5nLXJpZ2h0OiAxNjVweDt9XHJcbi5wLXItMTY2IHtwYWRkaW5nLXJpZ2h0OiAxNjZweDt9XHJcbi5wLXItMTY3IHtwYWRkaW5nLXJpZ2h0OiAxNjdweDt9XHJcbi5wLXItMTY4IHtwYWRkaW5nLXJpZ2h0OiAxNjhweDt9XHJcbi5wLXItMTY5IHtwYWRkaW5nLXJpZ2h0OiAxNjlweDt9XHJcbi5wLXItMTcwIHtwYWRkaW5nLXJpZ2h0OiAxNzBweDt9XHJcbi5wLXItMTcxIHtwYWRkaW5nLXJpZ2h0OiAxNzFweDt9XHJcbi5wLXItMTcyIHtwYWRkaW5nLXJpZ2h0OiAxNzJweDt9XHJcbi5wLXItMTczIHtwYWRkaW5nLXJpZ2h0OiAxNzNweDt9XHJcbi5wLXItMTc0IHtwYWRkaW5nLXJpZ2h0OiAxNzRweDt9XHJcbi5wLXItMTc1IHtwYWRkaW5nLXJpZ2h0OiAxNzVweDt9XHJcbi5wLXItMTc2IHtwYWRkaW5nLXJpZ2h0OiAxNzZweDt9XHJcbi5wLXItMTc3IHtwYWRkaW5nLXJpZ2h0OiAxNzdweDt9XHJcbi5wLXItMTc4IHtwYWRkaW5nLXJpZ2h0OiAxNzhweDt9XHJcbi5wLXItMTc5IHtwYWRkaW5nLXJpZ2h0OiAxNzlweDt9XHJcbi5wLXItMTgwIHtwYWRkaW5nLXJpZ2h0OiAxODBweDt9XHJcbi5wLXItMTgxIHtwYWRkaW5nLXJpZ2h0OiAxODFweDt9XHJcbi5wLXItMTgyIHtwYWRkaW5nLXJpZ2h0OiAxODJweDt9XHJcbi5wLXItMTgzIHtwYWRkaW5nLXJpZ2h0OiAxODNweDt9XHJcbi5wLXItMTg0IHtwYWRkaW5nLXJpZ2h0OiAxODRweDt9XHJcbi5wLXItMTg1IHtwYWRkaW5nLXJpZ2h0OiAxODVweDt9XHJcbi5wLXItMTg2IHtwYWRkaW5nLXJpZ2h0OiAxODZweDt9XHJcbi5wLXItMTg3IHtwYWRkaW5nLXJpZ2h0OiAxODdweDt9XHJcbi5wLXItMTg4IHtwYWRkaW5nLXJpZ2h0OiAxODhweDt9XHJcbi5wLXItMTg5IHtwYWRkaW5nLXJpZ2h0OiAxODlweDt9XHJcbi5wLXItMTkwIHtwYWRkaW5nLXJpZ2h0OiAxOTBweDt9XHJcbi5wLXItMTkxIHtwYWRkaW5nLXJpZ2h0OiAxOTFweDt9XHJcbi5wLXItMTkyIHtwYWRkaW5nLXJpZ2h0OiAxOTJweDt9XHJcbi5wLXItMTkzIHtwYWRkaW5nLXJpZ2h0OiAxOTNweDt9XHJcbi5wLXItMTk0IHtwYWRkaW5nLXJpZ2h0OiAxOTRweDt9XHJcbi5wLXItMTk1IHtwYWRkaW5nLXJpZ2h0OiAxOTVweDt9XHJcbi5wLXItMTk2IHtwYWRkaW5nLXJpZ2h0OiAxOTZweDt9XHJcbi5wLXItMTk3IHtwYWRkaW5nLXJpZ2h0OiAxOTdweDt9XHJcbi5wLXItMTk4IHtwYWRkaW5nLXJpZ2h0OiAxOThweDt9XHJcbi5wLXItMTk5IHtwYWRkaW5nLXJpZ2h0OiAxOTlweDt9XHJcbi5wLXItMjAwIHtwYWRkaW5nLXJpZ2h0OiAyMDBweDt9XHJcbi5wLXItMjAxIHtwYWRkaW5nLXJpZ2h0OiAyMDFweDt9XHJcbi5wLXItMjAyIHtwYWRkaW5nLXJpZ2h0OiAyMDJweDt9XHJcbi5wLXItMjAzIHtwYWRkaW5nLXJpZ2h0OiAyMDNweDt9XHJcbi5wLXItMjA0IHtwYWRkaW5nLXJpZ2h0OiAyMDRweDt9XHJcbi5wLXItMjA1IHtwYWRkaW5nLXJpZ2h0OiAyMDVweDt9XHJcbi5wLXItMjA2IHtwYWRkaW5nLXJpZ2h0OiAyMDZweDt9XHJcbi5wLXItMjA3IHtwYWRkaW5nLXJpZ2h0OiAyMDdweDt9XHJcbi5wLXItMjA4IHtwYWRkaW5nLXJpZ2h0OiAyMDhweDt9XHJcbi5wLXItMjA5IHtwYWRkaW5nLXJpZ2h0OiAyMDlweDt9XHJcbi5wLXItMjEwIHtwYWRkaW5nLXJpZ2h0OiAyMTBweDt9XHJcbi5wLXItMjExIHtwYWRkaW5nLXJpZ2h0OiAyMTFweDt9XHJcbi5wLXItMjEyIHtwYWRkaW5nLXJpZ2h0OiAyMTJweDt9XHJcbi5wLXItMjEzIHtwYWRkaW5nLXJpZ2h0OiAyMTNweDt9XHJcbi5wLXItMjE0IHtwYWRkaW5nLXJpZ2h0OiAyMTRweDt9XHJcbi5wLXItMjE1IHtwYWRkaW5nLXJpZ2h0OiAyMTVweDt9XHJcbi5wLXItMjE2IHtwYWRkaW5nLXJpZ2h0OiAyMTZweDt9XHJcbi5wLXItMjE3IHtwYWRkaW5nLXJpZ2h0OiAyMTdweDt9XHJcbi5wLXItMjE4IHtwYWRkaW5nLXJpZ2h0OiAyMThweDt9XHJcbi5wLXItMjE5IHtwYWRkaW5nLXJpZ2h0OiAyMTlweDt9XHJcbi5wLXItMjIwIHtwYWRkaW5nLXJpZ2h0OiAyMjBweDt9XHJcbi5wLXItMjIxIHtwYWRkaW5nLXJpZ2h0OiAyMjFweDt9XHJcbi5wLXItMjIyIHtwYWRkaW5nLXJpZ2h0OiAyMjJweDt9XHJcbi5wLXItMjIzIHtwYWRkaW5nLXJpZ2h0OiAyMjNweDt9XHJcbi5wLXItMjI0IHtwYWRkaW5nLXJpZ2h0OiAyMjRweDt9XHJcbi5wLXItMjI1IHtwYWRkaW5nLXJpZ2h0OiAyMjVweDt9XHJcbi5wLXItMjI2IHtwYWRkaW5nLXJpZ2h0OiAyMjZweDt9XHJcbi5wLXItMjI3IHtwYWRkaW5nLXJpZ2h0OiAyMjdweDt9XHJcbi5wLXItMjI4IHtwYWRkaW5nLXJpZ2h0OiAyMjhweDt9XHJcbi5wLXItMjI5IHtwYWRkaW5nLXJpZ2h0OiAyMjlweDt9XHJcbi5wLXItMjMwIHtwYWRkaW5nLXJpZ2h0OiAyMzBweDt9XHJcbi5wLXItMjMxIHtwYWRkaW5nLXJpZ2h0OiAyMzFweDt9XHJcbi5wLXItMjMyIHtwYWRkaW5nLXJpZ2h0OiAyMzJweDt9XHJcbi5wLXItMjMzIHtwYWRkaW5nLXJpZ2h0OiAyMzNweDt9XHJcbi5wLXItMjM0IHtwYWRkaW5nLXJpZ2h0OiAyMzRweDt9XHJcbi5wLXItMjM1IHtwYWRkaW5nLXJpZ2h0OiAyMzVweDt9XHJcbi5wLXItMjM2IHtwYWRkaW5nLXJpZ2h0OiAyMzZweDt9XHJcbi5wLXItMjM3IHtwYWRkaW5nLXJpZ2h0OiAyMzdweDt9XHJcbi5wLXItMjM4IHtwYWRkaW5nLXJpZ2h0OiAyMzhweDt9XHJcbi5wLXItMjM5IHtwYWRkaW5nLXJpZ2h0OiAyMzlweDt9XHJcbi5wLXItMjQwIHtwYWRkaW5nLXJpZ2h0OiAyNDBweDt9XHJcbi5wLXItMjQxIHtwYWRkaW5nLXJpZ2h0OiAyNDFweDt9XHJcbi5wLXItMjQyIHtwYWRkaW5nLXJpZ2h0OiAyNDJweDt9XHJcbi5wLXItMjQzIHtwYWRkaW5nLXJpZ2h0OiAyNDNweDt9XHJcbi5wLXItMjQ0IHtwYWRkaW5nLXJpZ2h0OiAyNDRweDt9XHJcbi5wLXItMjQ1IHtwYWRkaW5nLXJpZ2h0OiAyNDVweDt9XHJcbi5wLXItMjQ2IHtwYWRkaW5nLXJpZ2h0OiAyNDZweDt9XHJcbi5wLXItMjQ3IHtwYWRkaW5nLXJpZ2h0OiAyNDdweDt9XHJcbi5wLXItMjQ4IHtwYWRkaW5nLXJpZ2h0OiAyNDhweDt9XHJcbi5wLXItMjQ5IHtwYWRkaW5nLXJpZ2h0OiAyNDlweDt9XHJcbi5wLXItMjUwIHtwYWRkaW5nLXJpZ2h0OiAyNTBweDt9XHJcblxyXG4vKlsgTUFSR0lOIF1cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuKi9cclxuLm0tdC0wIHttYXJnaW4tdG9wOiAwcHg7fVxyXG4ubS10LTEge21hcmdpbi10b3A6IDFweDt9XHJcbi5tLXQtMiB7bWFyZ2luLXRvcDogMnB4O31cclxuLm0tdC0zIHttYXJnaW4tdG9wOiAzcHg7fVxyXG4ubS10LTQge21hcmdpbi10b3A6IDRweDt9XHJcbi5tLXQtNSB7bWFyZ2luLXRvcDogNXB4O31cclxuLm0tdC02IHttYXJnaW4tdG9wOiA2cHg7fVxyXG4ubS10LTcge21hcmdpbi10b3A6IDdweDt9XHJcbi5tLXQtOCB7bWFyZ2luLXRvcDogOHB4O31cclxuLm0tdC05IHttYXJnaW4tdG9wOiA5cHg7fVxyXG4ubS10LTEwIHttYXJnaW4tdG9wOiAxMHB4O31cclxuLm0tdC0xMSB7bWFyZ2luLXRvcDogMTFweDt9XHJcbi5tLXQtMTIge21hcmdpbi10b3A6IDEycHg7fVxyXG4ubS10LTEzIHttYXJnaW4tdG9wOiAxM3B4O31cclxuLm0tdC0xNCB7bWFyZ2luLXRvcDogMTRweDt9XHJcbi5tLXQtMTUge21hcmdpbi10b3A6IDE1cHg7fVxyXG4ubS10LTE2IHttYXJnaW4tdG9wOiAxNnB4O31cclxuLm0tdC0xNyB7bWFyZ2luLXRvcDogMTdweDt9XHJcbi5tLXQtMTgge21hcmdpbi10b3A6IDE4cHg7fVxyXG4ubS10LTE5IHttYXJnaW4tdG9wOiAxOXB4O31cclxuLm0tdC0yMCB7bWFyZ2luLXRvcDogMjBweDt9XHJcbi5tLXQtMjEge21hcmdpbi10b3A6IDIxcHg7fVxyXG4ubS10LTIyIHttYXJnaW4tdG9wOiAyMnB4O31cclxuLm0tdC0yMyB7bWFyZ2luLXRvcDogMjNweDt9XHJcbi5tLXQtMjQge21hcmdpbi10b3A6IDI0cHg7fVxyXG4ubS10LTI1IHttYXJnaW4tdG9wOiAyNXB4O31cclxuLm0tdC0yNiB7bWFyZ2luLXRvcDogMjZweDt9XHJcbi5tLXQtMjcge21hcmdpbi10b3A6IDI3cHg7fVxyXG4ubS10LTI4IHttYXJnaW4tdG9wOiAyOHB4O31cclxuLm0tdC0yOSB7bWFyZ2luLXRvcDogMjlweDt9XHJcbi5tLXQtMzAge21hcmdpbi10b3A6IDMwcHg7fVxyXG4ubS10LTMxIHttYXJnaW4tdG9wOiAzMXB4O31cclxuLm0tdC0zMiB7bWFyZ2luLXRvcDogMzJweDt9XHJcbi5tLXQtMzMge21hcmdpbi10b3A6IDMzcHg7fVxyXG4ubS10LTM0IHttYXJnaW4tdG9wOiAzNHB4O31cclxuLm0tdC0zNSB7bWFyZ2luLXRvcDogMzVweDt9XHJcbi5tLXQtMzYge21hcmdpbi10b3A6IDM2cHg7fVxyXG4ubS10LTM3IHttYXJnaW4tdG9wOiAzN3B4O31cclxuLm0tdC0zOCB7bWFyZ2luLXRvcDogMzhweDt9XHJcbi5tLXQtMzkge21hcmdpbi10b3A6IDM5cHg7fVxyXG4ubS10LTQwIHttYXJnaW4tdG9wOiA0MHB4O31cclxuLm0tdC00MSB7bWFyZ2luLXRvcDogNDFweDt9XHJcbi5tLXQtNDIge21hcmdpbi10b3A6IDQycHg7fVxyXG4ubS10LTQzIHttYXJnaW4tdG9wOiA0M3B4O31cclxuLm0tdC00NCB7bWFyZ2luLXRvcDogNDRweDt9XHJcbi5tLXQtNDUge21hcmdpbi10b3A6IDQ1cHg7fVxyXG4ubS10LTQ2IHttYXJnaW4tdG9wOiA0NnB4O31cclxuLm0tdC00NyB7bWFyZ2luLXRvcDogNDdweDt9XHJcbi5tLXQtNDgge21hcmdpbi10b3A6IDQ4cHg7fVxyXG4ubS10LTQ5IHttYXJnaW4tdG9wOiA0OXB4O31cclxuLm0tdC01MCB7bWFyZ2luLXRvcDogNTBweDt9XHJcbi5tLXQtNTEge21hcmdpbi10b3A6IDUxcHg7fVxyXG4ubS10LTUyIHttYXJnaW4tdG9wOiA1MnB4O31cclxuLm0tdC01MyB7bWFyZ2luLXRvcDogNTNweDt9XHJcbi5tLXQtNTQge21hcmdpbi10b3A6IDU0cHg7fVxyXG4ubS10LTU1IHttYXJnaW4tdG9wOiA1NXB4O31cclxuLm0tdC01NiB7bWFyZ2luLXRvcDogNTZweDt9XHJcbi5tLXQtNTcge21hcmdpbi10b3A6IDU3cHg7fVxyXG4ubS10LTU4IHttYXJnaW4tdG9wOiA1OHB4O31cclxuLm0tdC01OSB7bWFyZ2luLXRvcDogNTlweDt9XHJcbi5tLXQtNjAge21hcmdpbi10b3A6IDYwcHg7fVxyXG4ubS10LTYxIHttYXJnaW4tdG9wOiA2MXB4O31cclxuLm0tdC02MiB7bWFyZ2luLXRvcDogNjJweDt9XHJcbi5tLXQtNjMge21hcmdpbi10b3A6IDYzcHg7fVxyXG4ubS10LTY0IHttYXJnaW4tdG9wOiA2NHB4O31cclxuLm0tdC02NSB7bWFyZ2luLXRvcDogNjVweDt9XHJcbi5tLXQtNjYge21hcmdpbi10b3A6IDY2cHg7fVxyXG4ubS10LTY3IHttYXJnaW4tdG9wOiA2N3B4O31cclxuLm0tdC02OCB7bWFyZ2luLXRvcDogNjhweDt9XHJcbi5tLXQtNjkge21hcmdpbi10b3A6IDY5cHg7fVxyXG4ubS10LTcwIHttYXJnaW4tdG9wOiA3MHB4O31cclxuLm0tdC03MSB7bWFyZ2luLXRvcDogNzFweDt9XHJcbi5tLXQtNzIge21hcmdpbi10b3A6IDcycHg7fVxyXG4ubS10LTczIHttYXJnaW4tdG9wOiA3M3B4O31cclxuLm0tdC03NCB7bWFyZ2luLXRvcDogNzRweDt9XHJcbi5tLXQtNzUge21hcmdpbi10b3A6IDc1cHg7fVxyXG4ubS10LTc2IHttYXJnaW4tdG9wOiA3NnB4O31cclxuLm0tdC03NyB7bWFyZ2luLXRvcDogNzdweDt9XHJcbi5tLXQtNzgge21hcmdpbi10b3A6IDc4cHg7fVxyXG4ubS10LTc5IHttYXJnaW4tdG9wOiA3OXB4O31cclxuLm0tdC04MCB7bWFyZ2luLXRvcDogODBweDt9XHJcbi5tLXQtODEge21hcmdpbi10b3A6IDgxcHg7fVxyXG4ubS10LTgyIHttYXJnaW4tdG9wOiA4MnB4O31cclxuLm0tdC04MyB7bWFyZ2luLXRvcDogODNweDt9XHJcbi5tLXQtODQge21hcmdpbi10b3A6IDg0cHg7fVxyXG4ubS10LTg1IHttYXJnaW4tdG9wOiA4NXB4O31cclxuLm0tdC04NiB7bWFyZ2luLXRvcDogODZweDt9XHJcbi5tLXQtODcge21hcmdpbi10b3A6IDg3cHg7fVxyXG4ubS10LTg4IHttYXJnaW4tdG9wOiA4OHB4O31cclxuLm0tdC04OSB7bWFyZ2luLXRvcDogODlweDt9XHJcbi5tLXQtOTAge21hcmdpbi10b3A6IDkwcHg7fVxyXG4ubS10LTkxIHttYXJnaW4tdG9wOiA5MXB4O31cclxuLm0tdC05MiB7bWFyZ2luLXRvcDogOTJweDt9XHJcbi5tLXQtOTMge21hcmdpbi10b3A6IDkzcHg7fVxyXG4ubS10LTk0IHttYXJnaW4tdG9wOiA5NHB4O31cclxuLm0tdC05NSB7bWFyZ2luLXRvcDogOTVweDt9XHJcbi5tLXQtOTYge21hcmdpbi10b3A6IDk2cHg7fVxyXG4ubS10LTk3IHttYXJnaW4tdG9wOiA5N3B4O31cclxuLm0tdC05OCB7bWFyZ2luLXRvcDogOThweDt9XHJcbi5tLXQtOTkge21hcmdpbi10b3A6IDk5cHg7fVxyXG4ubS10LTEwMCB7bWFyZ2luLXRvcDogMTAwcHg7fVxyXG4ubS10LTEwMSB7bWFyZ2luLXRvcDogMTAxcHg7fVxyXG4ubS10LTEwMiB7bWFyZ2luLXRvcDogMTAycHg7fVxyXG4ubS10LTEwMyB7bWFyZ2luLXRvcDogMTAzcHg7fVxyXG4ubS10LTEwNCB7bWFyZ2luLXRvcDogMTA0cHg7fVxyXG4ubS10LTEwNSB7bWFyZ2luLXRvcDogMTA1cHg7fVxyXG4ubS10LTEwNiB7bWFyZ2luLXRvcDogMTA2cHg7fVxyXG4ubS10LTEwNyB7bWFyZ2luLXRvcDogMTA3cHg7fVxyXG4ubS10LTEwOCB7bWFyZ2luLXRvcDogMTA4cHg7fVxyXG4ubS10LTEwOSB7bWFyZ2luLXRvcDogMTA5cHg7fVxyXG4ubS10LTExMCB7bWFyZ2luLXRvcDogMTEwcHg7fVxyXG4ubS10LTExMSB7bWFyZ2luLXRvcDogMTExcHg7fVxyXG4ubS10LTExMiB7bWFyZ2luLXRvcDogMTEycHg7fVxyXG4ubS10LTExMyB7bWFyZ2luLXRvcDogMTEzcHg7fVxyXG4ubS10LTExNCB7bWFyZ2luLXRvcDogMTE0cHg7fVxyXG4ubS10LTExNSB7bWFyZ2luLXRvcDogMTE1cHg7fVxyXG4ubS10LTExNiB7bWFyZ2luLXRvcDogMTE2cHg7fVxyXG4ubS10LTExNyB7bWFyZ2luLXRvcDogMTE3cHg7fVxyXG4ubS10LTExOCB7bWFyZ2luLXRvcDogMTE4cHg7fVxyXG4ubS10LTExOSB7bWFyZ2luLXRvcDogMTE5cHg7fVxyXG4ubS10LTEyMCB7bWFyZ2luLXRvcDogMTIwcHg7fVxyXG4ubS10LTEyMSB7bWFyZ2luLXRvcDogMTIxcHg7fVxyXG4ubS10LTEyMiB7bWFyZ2luLXRvcDogMTIycHg7fVxyXG4ubS10LTEyMyB7bWFyZ2luLXRvcDogMTIzcHg7fVxyXG4ubS10LTEyNCB7bWFyZ2luLXRvcDogMTI0cHg7fVxyXG4ubS10LTEyNSB7bWFyZ2luLXRvcDogMTI1cHg7fVxyXG4ubS10LTEyNiB7bWFyZ2luLXRvcDogMTI2cHg7fVxyXG4ubS10LTEyNyB7bWFyZ2luLXRvcDogMTI3cHg7fVxyXG4ubS10LTEyOCB7bWFyZ2luLXRvcDogMTI4cHg7fVxyXG4ubS10LTEyOSB7bWFyZ2luLXRvcDogMTI5cHg7fVxyXG4ubS10LTEzMCB7bWFyZ2luLXRvcDogMTMwcHg7fVxyXG4ubS10LTEzMSB7bWFyZ2luLXRvcDogMTMxcHg7fVxyXG4ubS10LTEzMiB7bWFyZ2luLXRvcDogMTMycHg7fVxyXG4ubS10LTEzMyB7bWFyZ2luLXRvcDogMTMzcHg7fVxyXG4ubS10LTEzNCB7bWFyZ2luLXRvcDogMTM0cHg7fVxyXG4ubS10LTEzNSB7bWFyZ2luLXRvcDogMTM1cHg7fVxyXG4ubS10LTEzNiB7bWFyZ2luLXRvcDogMTM2cHg7fVxyXG4ubS10LTEzNyB7bWFyZ2luLXRvcDogMTM3cHg7fVxyXG4ubS10LTEzOCB7bWFyZ2luLXRvcDogMTM4cHg7fVxyXG4ubS10LTEzOSB7bWFyZ2luLXRvcDogMTM5cHg7fVxyXG4ubS10LTE0MCB7bWFyZ2luLXRvcDogMTQwcHg7fVxyXG4ubS10LTE0MSB7bWFyZ2luLXRvcDogMTQxcHg7fVxyXG4ubS10LTE0MiB7bWFyZ2luLXRvcDogMTQycHg7fVxyXG4ubS10LTE0MyB7bWFyZ2luLXRvcDogMTQzcHg7fVxyXG4ubS10LTE0NCB7bWFyZ2luLXRvcDogMTQ0cHg7fVxyXG4ubS10LTE0NSB7bWFyZ2luLXRvcDogMTQ1cHg7fVxyXG4ubS10LTE0NiB7bWFyZ2luLXRvcDogMTQ2cHg7fVxyXG4ubS10LTE0NyB7bWFyZ2luLXRvcDogMTQ3cHg7fVxyXG4ubS10LTE0OCB7bWFyZ2luLXRvcDogMTQ4cHg7fVxyXG4ubS10LTE0OSB7bWFyZ2luLXRvcDogMTQ5cHg7fVxyXG4ubS10LTE1MCB7bWFyZ2luLXRvcDogMTUwcHg7fVxyXG4ubS10LTE1MSB7bWFyZ2luLXRvcDogMTUxcHg7fVxyXG4ubS10LTE1MiB7bWFyZ2luLXRvcDogMTUycHg7fVxyXG4ubS10LTE1MyB7bWFyZ2luLXRvcDogMTUzcHg7fVxyXG4ubS10LTE1NCB7bWFyZ2luLXRvcDogMTU0cHg7fVxyXG4ubS10LTE1NSB7bWFyZ2luLXRvcDogMTU1cHg7fVxyXG4ubS10LTE1NiB7bWFyZ2luLXRvcDogMTU2cHg7fVxyXG4ubS10LTE1NyB7bWFyZ2luLXRvcDogMTU3cHg7fVxyXG4ubS10LTE1OCB7bWFyZ2luLXRvcDogMTU4cHg7fVxyXG4ubS10LTE1OSB7bWFyZ2luLXRvcDogMTU5cHg7fVxyXG4ubS10LTE2MCB7bWFyZ2luLXRvcDogMTYwcHg7fVxyXG4ubS10LTE2MSB7bWFyZ2luLXRvcDogMTYxcHg7fVxyXG4ubS10LTE2MiB7bWFyZ2luLXRvcDogMTYycHg7fVxyXG4ubS10LTE2MyB7bWFyZ2luLXRvcDogMTYzcHg7fVxyXG4ubS10LTE2NCB7bWFyZ2luLXRvcDogMTY0cHg7fVxyXG4ubS10LTE2NSB7bWFyZ2luLXRvcDogMTY1cHg7fVxyXG4ubS10LTE2NiB7bWFyZ2luLXRvcDogMTY2cHg7fVxyXG4ubS10LTE2NyB7bWFyZ2luLXRvcDogMTY3cHg7fVxyXG4ubS10LTE2OCB7bWFyZ2luLXRvcDogMTY4cHg7fVxyXG4ubS10LTE2OSB7bWFyZ2luLXRvcDogMTY5cHg7fVxyXG4ubS10LTE3MCB7bWFyZ2luLXRvcDogMTcwcHg7fVxyXG4ubS10LTE3MSB7bWFyZ2luLXRvcDogMTcxcHg7fVxyXG4ubS10LTE3MiB7bWFyZ2luLXRvcDogMTcycHg7fVxyXG4ubS10LTE3MyB7bWFyZ2luLXRvcDogMTczcHg7fVxyXG4ubS10LTE3NCB7bWFyZ2luLXRvcDogMTc0cHg7fVxyXG4ubS10LTE3NSB7bWFyZ2luLXRvcDogMTc1cHg7fVxyXG4ubS10LTE3NiB7bWFyZ2luLXRvcDogMTc2cHg7fVxyXG4ubS10LTE3NyB7bWFyZ2luLXRvcDogMTc3cHg7fVxyXG4ubS10LTE3OCB7bWFyZ2luLXRvcDogMTc4cHg7fVxyXG4ubS10LTE3OSB7bWFyZ2luLXRvcDogMTc5cHg7fVxyXG4ubS10LTE4MCB7bWFyZ2luLXRvcDogMTgwcHg7fVxyXG4ubS10LTE4MSB7bWFyZ2luLXRvcDogMTgxcHg7fVxyXG4ubS10LTE4MiB7bWFyZ2luLXRvcDogMTgycHg7fVxyXG4ubS10LTE4MyB7bWFyZ2luLXRvcDogMTgzcHg7fVxyXG4ubS10LTE4NCB7bWFyZ2luLXRvcDogMTg0cHg7fVxyXG4ubS10LTE4NSB7bWFyZ2luLXRvcDogMTg1cHg7fVxyXG4ubS10LTE4NiB7bWFyZ2luLXRvcDogMTg2cHg7fVxyXG4ubS10LTE4NyB7bWFyZ2luLXRvcDogMTg3cHg7fVxyXG4ubS10LTE4OCB7bWFyZ2luLXRvcDogMTg4cHg7fVxyXG4ubS10LTE4OSB7bWFyZ2luLXRvcDogMTg5cHg7fVxyXG4ubS10LTE5MCB7bWFyZ2luLXRvcDogMTkwcHg7fVxyXG4ubS10LTE5MSB7bWFyZ2luLXRvcDogMTkxcHg7fVxyXG4ubS10LTE5MiB7bWFyZ2luLXRvcDogMTkycHg7fVxyXG4ubS10LTE5MyB7bWFyZ2luLXRvcDogMTkzcHg7fVxyXG4ubS10LTE5NCB7bWFyZ2luLXRvcDogMTk0cHg7fVxyXG4ubS10LTE5NSB7bWFyZ2luLXRvcDogMTk1cHg7fVxyXG4ubS10LTE5NiB7bWFyZ2luLXRvcDogMTk2cHg7fVxyXG4ubS10LTE5NyB7bWFyZ2luLXRvcDogMTk3cHg7fVxyXG4ubS10LTE5OCB7bWFyZ2luLXRvcDogMTk4cHg7fVxyXG4ubS10LTE5OSB7bWFyZ2luLXRvcDogMTk5cHg7fVxyXG4ubS10LTIwMCB7bWFyZ2luLXRvcDogMjAwcHg7fVxyXG4ubS10LTIwMSB7bWFyZ2luLXRvcDogMjAxcHg7fVxyXG4ubS10LTIwMiB7bWFyZ2luLXRvcDogMjAycHg7fVxyXG4ubS10LTIwMyB7bWFyZ2luLXRvcDogMjAzcHg7fVxyXG4ubS10LTIwNCB7bWFyZ2luLXRvcDogMjA0cHg7fVxyXG4ubS10LTIwNSB7bWFyZ2luLXRvcDogMjA1cHg7fVxyXG4ubS10LTIwNiB7bWFyZ2luLXRvcDogMjA2cHg7fVxyXG4ubS10LTIwNyB7bWFyZ2luLXRvcDogMjA3cHg7fVxyXG4ubS10LTIwOCB7bWFyZ2luLXRvcDogMjA4cHg7fVxyXG4ubS10LTIwOSB7bWFyZ2luLXRvcDogMjA5cHg7fVxyXG4ubS10LTIxMCB7bWFyZ2luLXRvcDogMjEwcHg7fVxyXG4ubS10LTIxMSB7bWFyZ2luLXRvcDogMjExcHg7fVxyXG4ubS10LTIxMiB7bWFyZ2luLXRvcDogMjEycHg7fVxyXG4ubS10LTIxMyB7bWFyZ2luLXRvcDogMjEzcHg7fVxyXG4ubS10LTIxNCB7bWFyZ2luLXRvcDogMjE0cHg7fVxyXG4ubS10LTIxNSB7bWFyZ2luLXRvcDogMjE1cHg7fVxyXG4ubS10LTIxNiB7bWFyZ2luLXRvcDogMjE2cHg7fVxyXG4ubS10LTIxNyB7bWFyZ2luLXRvcDogMjE3cHg7fVxyXG4ubS10LTIxOCB7bWFyZ2luLXRvcDogMjE4cHg7fVxyXG4ubS10LTIxOSB7bWFyZ2luLXRvcDogMjE5cHg7fVxyXG4ubS10LTIyMCB7bWFyZ2luLXRvcDogMjIwcHg7fVxyXG4ubS10LTIyMSB7bWFyZ2luLXRvcDogMjIxcHg7fVxyXG4ubS10LTIyMiB7bWFyZ2luLXRvcDogMjIycHg7fVxyXG4ubS10LTIyMyB7bWFyZ2luLXRvcDogMjIzcHg7fVxyXG4ubS10LTIyNCB7bWFyZ2luLXRvcDogMjI0cHg7fVxyXG4ubS10LTIyNSB7bWFyZ2luLXRvcDogMjI1cHg7fVxyXG4ubS10LTIyNiB7bWFyZ2luLXRvcDogMjI2cHg7fVxyXG4ubS10LTIyNyB7bWFyZ2luLXRvcDogMjI3cHg7fVxyXG4ubS10LTIyOCB7bWFyZ2luLXRvcDogMjI4cHg7fVxyXG4ubS10LTIyOSB7bWFyZ2luLXRvcDogMjI5cHg7fVxyXG4ubS10LTIzMCB7bWFyZ2luLXRvcDogMjMwcHg7fVxyXG4ubS10LTIzMSB7bWFyZ2luLXRvcDogMjMxcHg7fVxyXG4ubS10LTIzMiB7bWFyZ2luLXRvcDogMjMycHg7fVxyXG4ubS10LTIzMyB7bWFyZ2luLXRvcDogMjMzcHg7fVxyXG4ubS10LTIzNCB7bWFyZ2luLXRvcDogMjM0cHg7fVxyXG4ubS10LTIzNSB7bWFyZ2luLXRvcDogMjM1cHg7fVxyXG4ubS10LTIzNiB7bWFyZ2luLXRvcDogMjM2cHg7fVxyXG4ubS10LTIzNyB7bWFyZ2luLXRvcDogMjM3cHg7fVxyXG4ubS10LTIzOCB7bWFyZ2luLXRvcDogMjM4cHg7fVxyXG4ubS10LTIzOSB7bWFyZ2luLXRvcDogMjM5cHg7fVxyXG4ubS10LTI0MCB7bWFyZ2luLXRvcDogMjQwcHg7fVxyXG4ubS10LTI0MSB7bWFyZ2luLXRvcDogMjQxcHg7fVxyXG4ubS10LTI0MiB7bWFyZ2luLXRvcDogMjQycHg7fVxyXG4ubS10LTI0MyB7bWFyZ2luLXRvcDogMjQzcHg7fVxyXG4ubS10LTI0NCB7bWFyZ2luLXRvcDogMjQ0cHg7fVxyXG4ubS10LTI0NSB7bWFyZ2luLXRvcDogMjQ1cHg7fVxyXG4ubS10LTI0NiB7bWFyZ2luLXRvcDogMjQ2cHg7fVxyXG4ubS10LTI0NyB7bWFyZ2luLXRvcDogMjQ3cHg7fVxyXG4ubS10LTI0OCB7bWFyZ2luLXRvcDogMjQ4cHg7fVxyXG4ubS10LTI0OSB7bWFyZ2luLXRvcDogMjQ5cHg7fVxyXG4ubS10LTI1MCB7bWFyZ2luLXRvcDogMjUwcHg7fVxyXG4ubS1iLTAge21hcmdpbi1ib3R0b206IDBweDt9XHJcbi5tLWItMSB7bWFyZ2luLWJvdHRvbTogMXB4O31cclxuLm0tYi0yIHttYXJnaW4tYm90dG9tOiAycHg7fVxyXG4ubS1iLTMge21hcmdpbi1ib3R0b206IDNweDt9XHJcbi5tLWItNCB7bWFyZ2luLWJvdHRvbTogNHB4O31cclxuLm0tYi01IHttYXJnaW4tYm90dG9tOiA1cHg7fVxyXG4ubS1iLTYge21hcmdpbi1ib3R0b206IDZweDt9XHJcbi5tLWItNyB7bWFyZ2luLWJvdHRvbTogN3B4O31cclxuLm0tYi04IHttYXJnaW4tYm90dG9tOiA4cHg7fVxyXG4ubS1iLTkge21hcmdpbi1ib3R0b206IDlweDt9XHJcbi5tLWItMTAge21hcmdpbi1ib3R0b206IDEwcHg7fVxyXG4ubS1iLTExIHttYXJnaW4tYm90dG9tOiAxMXB4O31cclxuLm0tYi0xMiB7bWFyZ2luLWJvdHRvbTogMTJweDt9XHJcbi5tLWItMTMge21hcmdpbi1ib3R0b206IDEzcHg7fVxyXG4ubS1iLTE0IHttYXJnaW4tYm90dG9tOiAxNHB4O31cclxuLm0tYi0xNSB7bWFyZ2luLWJvdHRvbTogMTVweDt9XHJcbi5tLWItMTYge21hcmdpbi1ib3R0b206IDE2cHg7fVxyXG4ubS1iLTE3IHttYXJnaW4tYm90dG9tOiAxN3B4O31cclxuLm0tYi0xOCB7bWFyZ2luLWJvdHRvbTogMThweDt9XHJcbi5tLWItMTkge21hcmdpbi1ib3R0b206IDE5cHg7fVxyXG4ubS1iLTIwIHttYXJnaW4tYm90dG9tOiAyMHB4O31cclxuLm0tYi0yMSB7bWFyZ2luLWJvdHRvbTogMjFweDt9XHJcbi5tLWItMjIge21hcmdpbi1ib3R0b206IDIycHg7fVxyXG4ubS1iLTIzIHttYXJnaW4tYm90dG9tOiAyM3B4O31cclxuLm0tYi0yNCB7bWFyZ2luLWJvdHRvbTogMjRweDt9XHJcbi5tLWItMjUge21hcmdpbi1ib3R0b206IDI1cHg7fVxyXG4ubS1iLTI2IHttYXJnaW4tYm90dG9tOiAyNnB4O31cclxuLm0tYi0yNyB7bWFyZ2luLWJvdHRvbTogMjdweDt9XHJcbi5tLWItMjgge21hcmdpbi1ib3R0b206IDI4cHg7fVxyXG4ubS1iLTI5IHttYXJnaW4tYm90dG9tOiAyOXB4O31cclxuLm0tYi0zMCB7bWFyZ2luLWJvdHRvbTogMzBweDt9XHJcbi5tLWItMzEge21hcmdpbi1ib3R0b206IDMxcHg7fVxyXG4ubS1iLTMyIHttYXJnaW4tYm90dG9tOiAzMnB4O31cclxuLm0tYi0zMyB7bWFyZ2luLWJvdHRvbTogMzNweDt9XHJcbi5tLWItMzQge21hcmdpbi1ib3R0b206IDM0cHg7fVxyXG4ubS1iLTM1IHttYXJnaW4tYm90dG9tOiAzNXB4O31cclxuLm0tYi0zNiB7bWFyZ2luLWJvdHRvbTogMzZweDt9XHJcbi5tLWItMzcge21hcmdpbi1ib3R0b206IDM3cHg7fVxyXG4ubS1iLTM4IHttYXJnaW4tYm90dG9tOiAzOHB4O31cclxuLm0tYi0zOSB7bWFyZ2luLWJvdHRvbTogMzlweDt9XHJcbi5tLWItNDAge21hcmdpbi1ib3R0b206IDQwcHg7fVxyXG4ubS1iLTQxIHttYXJnaW4tYm90dG9tOiA0MXB4O31cclxuLm0tYi00MiB7bWFyZ2luLWJvdHRvbTogNDJweDt9XHJcbi5tLWItNDMge21hcmdpbi1ib3R0b206IDQzcHg7fVxyXG4ubS1iLTQ0IHttYXJnaW4tYm90dG9tOiA0NHB4O31cclxuLm0tYi00NSB7bWFyZ2luLWJvdHRvbTogNDVweDt9XHJcbi5tLWItNDYge21hcmdpbi1ib3R0b206IDQ2cHg7fVxyXG4ubS1iLTQ3IHttYXJnaW4tYm90dG9tOiA0N3B4O31cclxuLm0tYi00OCB7bWFyZ2luLWJvdHRvbTogNDhweDt9XHJcbi5tLWItNDkge21hcmdpbi1ib3R0b206IDQ5cHg7fVxyXG4ubS1iLTUwIHttYXJnaW4tYm90dG9tOiA1MHB4O31cclxuLm0tYi01MSB7bWFyZ2luLWJvdHRvbTogNTFweDt9XHJcbi5tLWItNTIge21hcmdpbi1ib3R0b206IDUycHg7fVxyXG4ubS1iLTUzIHttYXJnaW4tYm90dG9tOiA1M3B4O31cclxuLm0tYi01NCB7bWFyZ2luLWJvdHRvbTogNTRweDt9XHJcbi5tLWItNTUge21hcmdpbi1ib3R0b206IDU1cHg7fVxyXG4ubS1iLTU2IHttYXJnaW4tYm90dG9tOiA1NnB4O31cclxuLm0tYi01NyB7bWFyZ2luLWJvdHRvbTogNTdweDt9XHJcbi5tLWItNTgge21hcmdpbi1ib3R0b206IDU4cHg7fVxyXG4ubS1iLTU5IHttYXJnaW4tYm90dG9tOiA1OXB4O31cclxuLm0tYi02MCB7bWFyZ2luLWJvdHRvbTogNjBweDt9XHJcbi5tLWItNjEge21hcmdpbi1ib3R0b206IDYxcHg7fVxyXG4ubS1iLTYyIHttYXJnaW4tYm90dG9tOiA2MnB4O31cclxuLm0tYi02MyB7bWFyZ2luLWJvdHRvbTogNjNweDt9XHJcbi5tLWItNjQge21hcmdpbi1ib3R0b206IDY0cHg7fVxyXG4ubS1iLTY1IHttYXJnaW4tYm90dG9tOiA2NXB4O31cclxuLm0tYi02NiB7bWFyZ2luLWJvdHRvbTogNjZweDt9XHJcbi5tLWItNjcge21hcmdpbi1ib3R0b206IDY3cHg7fVxyXG4ubS1iLTY4IHttYXJnaW4tYm90dG9tOiA2OHB4O31cclxuLm0tYi02OSB7bWFyZ2luLWJvdHRvbTogNjlweDt9XHJcbi5tLWItNzAge21hcmdpbi1ib3R0b206IDcwcHg7fVxyXG4ubS1iLTcxIHttYXJnaW4tYm90dG9tOiA3MXB4O31cclxuLm0tYi03MiB7bWFyZ2luLWJvdHRvbTogNzJweDt9XHJcbi5tLWItNzMge21hcmdpbi1ib3R0b206IDczcHg7fVxyXG4ubS1iLTc0IHttYXJnaW4tYm90dG9tOiA3NHB4O31cclxuLm0tYi03NSB7bWFyZ2luLWJvdHRvbTogNzVweDt9XHJcbi5tLWItNzYge21hcmdpbi1ib3R0b206IDc2cHg7fVxyXG4ubS1iLTc3IHttYXJnaW4tYm90dG9tOiA3N3B4O31cclxuLm0tYi03OCB7bWFyZ2luLWJvdHRvbTogNzhweDt9XHJcbi5tLWItNzkge21hcmdpbi1ib3R0b206IDc5cHg7fVxyXG4ubS1iLTgwIHttYXJnaW4tYm90dG9tOiA4MHB4O31cclxuLm0tYi04MSB7bWFyZ2luLWJvdHRvbTogODFweDt9XHJcbi5tLWItODIge21hcmdpbi1ib3R0b206IDgycHg7fVxyXG4ubS1iLTgzIHttYXJnaW4tYm90dG9tOiA4M3B4O31cclxuLm0tYi04NCB7bWFyZ2luLWJvdHRvbTogODRweDt9XHJcbi5tLWItODUge21hcmdpbi1ib3R0b206IDg1cHg7fVxyXG4ubS1iLTg2IHttYXJnaW4tYm90dG9tOiA4NnB4O31cclxuLm0tYi04NyB7bWFyZ2luLWJvdHRvbTogODdweDt9XHJcbi5tLWItODgge21hcmdpbi1ib3R0b206IDg4cHg7fVxyXG4ubS1iLTg5IHttYXJnaW4tYm90dG9tOiA4OXB4O31cclxuLm0tYi05MCB7bWFyZ2luLWJvdHRvbTogOTBweDt9XHJcbi5tLWItOTEge21hcmdpbi1ib3R0b206IDkxcHg7fVxyXG4ubS1iLTkyIHttYXJnaW4tYm90dG9tOiA5MnB4O31cclxuLm0tYi05MyB7bWFyZ2luLWJvdHRvbTogOTNweDt9XHJcbi5tLWItOTQge21hcmdpbi1ib3R0b206IDk0cHg7fVxyXG4ubS1iLTk1IHttYXJnaW4tYm90dG9tOiA5NXB4O31cclxuLm0tYi05NiB7bWFyZ2luLWJvdHRvbTogOTZweDt9XHJcbi5tLWItOTcge21hcmdpbi1ib3R0b206IDk3cHg7fVxyXG4ubS1iLTk4IHttYXJnaW4tYm90dG9tOiA5OHB4O31cclxuLm0tYi05OSB7bWFyZ2luLWJvdHRvbTogOTlweDt9XHJcbi5tLWItMTAwIHttYXJnaW4tYm90dG9tOiAxMDBweDt9XHJcbi5tLWItMTAxIHttYXJnaW4tYm90dG9tOiAxMDFweDt9XHJcbi5tLWItMTAyIHttYXJnaW4tYm90dG9tOiAxMDJweDt9XHJcbi5tLWItMTAzIHttYXJnaW4tYm90dG9tOiAxMDNweDt9XHJcbi5tLWItMTA0IHttYXJnaW4tYm90dG9tOiAxMDRweDt9XHJcbi5tLWItMTA1IHttYXJnaW4tYm90dG9tOiAxMDVweDt9XHJcbi5tLWItMTA2IHttYXJnaW4tYm90dG9tOiAxMDZweDt9XHJcbi5tLWItMTA3IHttYXJnaW4tYm90dG9tOiAxMDdweDt9XHJcbi5tLWItMTA4IHttYXJnaW4tYm90dG9tOiAxMDhweDt9XHJcbi5tLWItMTA5IHttYXJnaW4tYm90dG9tOiAxMDlweDt9XHJcbi5tLWItMTEwIHttYXJnaW4tYm90dG9tOiAxMTBweDt9XHJcbi5tLWItMTExIHttYXJnaW4tYm90dG9tOiAxMTFweDt9XHJcbi5tLWItMTEyIHttYXJnaW4tYm90dG9tOiAxMTJweDt9XHJcbi5tLWItMTEzIHttYXJnaW4tYm90dG9tOiAxMTNweDt9XHJcbi5tLWItMTE0IHttYXJnaW4tYm90dG9tOiAxMTRweDt9XHJcbi5tLWItMTE1IHttYXJnaW4tYm90dG9tOiAxMTVweDt9XHJcbi5tLWItMTE2IHttYXJnaW4tYm90dG9tOiAxMTZweDt9XHJcbi5tLWItMTE3IHttYXJnaW4tYm90dG9tOiAxMTdweDt9XHJcbi5tLWItMTE4IHttYXJnaW4tYm90dG9tOiAxMThweDt9XHJcbi5tLWItMTE5IHttYXJnaW4tYm90dG9tOiAxMTlweDt9XHJcbi5tLWItMTIwIHttYXJnaW4tYm90dG9tOiAxMjBweDt9XHJcbi5tLWItMTIxIHttYXJnaW4tYm90dG9tOiAxMjFweDt9XHJcbi5tLWItMTIyIHttYXJnaW4tYm90dG9tOiAxMjJweDt9XHJcbi5tLWItMTIzIHttYXJnaW4tYm90dG9tOiAxMjNweDt9XHJcbi5tLWItMTI0IHttYXJnaW4tYm90dG9tOiAxMjRweDt9XHJcbi5tLWItMTI1IHttYXJnaW4tYm90dG9tOiAxMjVweDt9XHJcbi5tLWItMTI2IHttYXJnaW4tYm90dG9tOiAxMjZweDt9XHJcbi5tLWItMTI3IHttYXJnaW4tYm90dG9tOiAxMjdweDt9XHJcbi5tLWItMTI4IHttYXJnaW4tYm90dG9tOiAxMjhweDt9XHJcbi5tLWItMTI5IHttYXJnaW4tYm90dG9tOiAxMjlweDt9XHJcbi5tLWItMTMwIHttYXJnaW4tYm90dG9tOiAxMzBweDt9XHJcbi5tLWItMTMxIHttYXJnaW4tYm90dG9tOiAxMzFweDt9XHJcbi5tLWItMTMyIHttYXJnaW4tYm90dG9tOiAxMzJweDt9XHJcbi5tLWItMTMzIHttYXJnaW4tYm90dG9tOiAxMzNweDt9XHJcbi5tLWItMTM0IHttYXJnaW4tYm90dG9tOiAxMzRweDt9XHJcbi5tLWItMTM1IHttYXJnaW4tYm90dG9tOiAxMzVweDt9XHJcbi5tLWItMTM2IHttYXJnaW4tYm90dG9tOiAxMzZweDt9XHJcbi5tLWItMTM3IHttYXJnaW4tYm90dG9tOiAxMzdweDt9XHJcbi5tLWItMTM4IHttYXJnaW4tYm90dG9tOiAxMzhweDt9XHJcbi5tLWItMTM5IHttYXJnaW4tYm90dG9tOiAxMzlweDt9XHJcbi5tLWItMTQwIHttYXJnaW4tYm90dG9tOiAxNDBweDt9XHJcbi5tLWItMTQxIHttYXJnaW4tYm90dG9tOiAxNDFweDt9XHJcbi5tLWItMTQyIHttYXJnaW4tYm90dG9tOiAxNDJweDt9XHJcbi5tLWItMTQzIHttYXJnaW4tYm90dG9tOiAxNDNweDt9XHJcbi5tLWItMTQ0IHttYXJnaW4tYm90dG9tOiAxNDRweDt9XHJcbi5tLWItMTQ1IHttYXJnaW4tYm90dG9tOiAxNDVweDt9XHJcbi5tLWItMTQ2IHttYXJnaW4tYm90dG9tOiAxNDZweDt9XHJcbi5tLWItMTQ3IHttYXJnaW4tYm90dG9tOiAxNDdweDt9XHJcbi5tLWItMTQ4IHttYXJnaW4tYm90dG9tOiAxNDhweDt9XHJcbi5tLWItMTQ5IHttYXJnaW4tYm90dG9tOiAxNDlweDt9XHJcbi5tLWItMTUwIHttYXJnaW4tYm90dG9tOiAxNTBweDt9XHJcbi5tLWItMTUxIHttYXJnaW4tYm90dG9tOiAxNTFweDt9XHJcbi5tLWItMTUyIHttYXJnaW4tYm90dG9tOiAxNTJweDt9XHJcbi5tLWItMTUzIHttYXJnaW4tYm90dG9tOiAxNTNweDt9XHJcbi5tLWItMTU0IHttYXJnaW4tYm90dG9tOiAxNTRweDt9XHJcbi5tLWItMTU1IHttYXJnaW4tYm90dG9tOiAxNTVweDt9XHJcbi5tLWItMTU2IHttYXJnaW4tYm90dG9tOiAxNTZweDt9XHJcbi5tLWItMTU3IHttYXJnaW4tYm90dG9tOiAxNTdweDt9XHJcbi5tLWItMTU4IHttYXJnaW4tYm90dG9tOiAxNThweDt9XHJcbi5tLWItMTU5IHttYXJnaW4tYm90dG9tOiAxNTlweDt9XHJcbi5tLWItMTYwIHttYXJnaW4tYm90dG9tOiAxNjBweDt9XHJcbi5tLWItMTYxIHttYXJnaW4tYm90dG9tOiAxNjFweDt9XHJcbi5tLWItMTYyIHttYXJnaW4tYm90dG9tOiAxNjJweDt9XHJcbi5tLWItMTYzIHttYXJnaW4tYm90dG9tOiAxNjNweDt9XHJcbi5tLWItMTY0IHttYXJnaW4tYm90dG9tOiAxNjRweDt9XHJcbi5tLWItMTY1IHttYXJnaW4tYm90dG9tOiAxNjVweDt9XHJcbi5tLWItMTY2IHttYXJnaW4tYm90dG9tOiAxNjZweDt9XHJcbi5tLWItMTY3IHttYXJnaW4tYm90dG9tOiAxNjdweDt9XHJcbi5tLWItMTY4IHttYXJnaW4tYm90dG9tOiAxNjhweDt9XHJcbi5tLWItMTY5IHttYXJnaW4tYm90dG9tOiAxNjlweDt9XHJcbi5tLWItMTcwIHttYXJnaW4tYm90dG9tOiAxNzBweDt9XHJcbi5tLWItMTcxIHttYXJnaW4tYm90dG9tOiAxNzFweDt9XHJcbi5tLWItMTcyIHttYXJnaW4tYm90dG9tOiAxNzJweDt9XHJcbi5tLWItMTczIHttYXJnaW4tYm90dG9tOiAxNzNweDt9XHJcbi5tLWItMTc0IHttYXJnaW4tYm90dG9tOiAxNzRweDt9XHJcbi5tLWItMTc1IHttYXJnaW4tYm90dG9tOiAxNzVweDt9XHJcbi5tLWItMTc2IHttYXJnaW4tYm90dG9tOiAxNzZweDt9XHJcbi5tLWItMTc3IHttYXJnaW4tYm90dG9tOiAxNzdweDt9XHJcbi5tLWItMTc4IHttYXJnaW4tYm90dG9tOiAxNzhweDt9XHJcbi5tLWItMTc5IHttYXJnaW4tYm90dG9tOiAxNzlweDt9XHJcbi5tLWItMTgwIHttYXJnaW4tYm90dG9tOiAxODBweDt9XHJcbi5tLWItMTgxIHttYXJnaW4tYm90dG9tOiAxODFweDt9XHJcbi5tLWItMTgyIHttYXJnaW4tYm90dG9tOiAxODJweDt9XHJcbi5tLWItMTgzIHttYXJnaW4tYm90dG9tOiAxODNweDt9XHJcbi5tLWItMTg0IHttYXJnaW4tYm90dG9tOiAxODRweDt9XHJcbi5tLWItMTg1IHttYXJnaW4tYm90dG9tOiAxODVweDt9XHJcbi5tLWItMTg2IHttYXJnaW4tYm90dG9tOiAxODZweDt9XHJcbi5tLWItMTg3IHttYXJnaW4tYm90dG9tOiAxODdweDt9XHJcbi5tLWItMTg4IHttYXJnaW4tYm90dG9tOiAxODhweDt9XHJcbi5tLWItMTg5IHttYXJnaW4tYm90dG9tOiAxODlweDt9XHJcbi5tLWItMTkwIHttYXJnaW4tYm90dG9tOiAxOTBweDt9XHJcbi5tLWItMTkxIHttYXJnaW4tYm90dG9tOiAxOTFweDt9XHJcbi5tLWItMTkyIHttYXJnaW4tYm90dG9tOiAxOTJweDt9XHJcbi5tLWItMTkzIHttYXJnaW4tYm90dG9tOiAxOTNweDt9XHJcbi5tLWItMTk0IHttYXJnaW4tYm90dG9tOiAxOTRweDt9XHJcbi5tLWItMTk1IHttYXJnaW4tYm90dG9tOiAxOTVweDt9XHJcbi5tLWItMTk2IHttYXJnaW4tYm90dG9tOiAxOTZweDt9XHJcbi5tLWItMTk3IHttYXJnaW4tYm90dG9tOiAxOTdweDt9XHJcbi5tLWItMTk4IHttYXJnaW4tYm90dG9tOiAxOThweDt9XHJcbi5tLWItMTk5IHttYXJnaW4tYm90dG9tOiAxOTlweDt9XHJcbi5tLWItMjAwIHttYXJnaW4tYm90dG9tOiAyMDBweDt9XHJcbi5tLWItMjAxIHttYXJnaW4tYm90dG9tOiAyMDFweDt9XHJcbi5tLWItMjAyIHttYXJnaW4tYm90dG9tOiAyMDJweDt9XHJcbi5tLWItMjAzIHttYXJnaW4tYm90dG9tOiAyMDNweDt9XHJcbi5tLWItMjA0IHttYXJnaW4tYm90dG9tOiAyMDRweDt9XHJcbi5tLWItMjA1IHttYXJnaW4tYm90dG9tOiAyMDVweDt9XHJcbi5tLWItMjA2IHttYXJnaW4tYm90dG9tOiAyMDZweDt9XHJcbi5tLWItMjA3IHttYXJnaW4tYm90dG9tOiAyMDdweDt9XHJcbi5tLWItMjA4IHttYXJnaW4tYm90dG9tOiAyMDhweDt9XHJcbi5tLWItMjA5IHttYXJnaW4tYm90dG9tOiAyMDlweDt9XHJcbi5tLWItMjEwIHttYXJnaW4tYm90dG9tOiAyMTBweDt9XHJcbi5tLWItMjExIHttYXJnaW4tYm90dG9tOiAyMTFweDt9XHJcbi5tLWItMjEyIHttYXJnaW4tYm90dG9tOiAyMTJweDt9XHJcbi5tLWItMjEzIHttYXJnaW4tYm90dG9tOiAyMTNweDt9XHJcbi5tLWItMjE0IHttYXJnaW4tYm90dG9tOiAyMTRweDt9XHJcbi5tLWItMjE1IHttYXJnaW4tYm90dG9tOiAyMTVweDt9XHJcbi5tLWItMjE2IHttYXJnaW4tYm90dG9tOiAyMTZweDt9XHJcbi5tLWItMjE3IHttYXJnaW4tYm90dG9tOiAyMTdweDt9XHJcbi5tLWItMjE4IHttYXJnaW4tYm90dG9tOiAyMThweDt9XHJcbi5tLWItMjE5IHttYXJnaW4tYm90dG9tOiAyMTlweDt9XHJcbi5tLWItMjIwIHttYXJnaW4tYm90dG9tOiAyMjBweDt9XHJcbi5tLWItMjIxIHttYXJnaW4tYm90dG9tOiAyMjFweDt9XHJcbi5tLWItMjIyIHttYXJnaW4tYm90dG9tOiAyMjJweDt9XHJcbi5tLWItMjIzIHttYXJnaW4tYm90dG9tOiAyMjNweDt9XHJcbi5tLWItMjI0IHttYXJnaW4tYm90dG9tOiAyMjRweDt9XHJcbi5tLWItMjI1IHttYXJnaW4tYm90dG9tOiAyMjVweDt9XHJcbi5tLWItMjI2IHttYXJnaW4tYm90dG9tOiAyMjZweDt9XHJcbi5tLWItMjI3IHttYXJnaW4tYm90dG9tOiAyMjdweDt9XHJcbi5tLWItMjI4IHttYXJnaW4tYm90dG9tOiAyMjhweDt9XHJcbi5tLWItMjI5IHttYXJnaW4tYm90dG9tOiAyMjlweDt9XHJcbi5tLWItMjMwIHttYXJnaW4tYm90dG9tOiAyMzBweDt9XHJcbi5tLWItMjMxIHttYXJnaW4tYm90dG9tOiAyMzFweDt9XHJcbi5tLWItMjMyIHttYXJnaW4tYm90dG9tOiAyMzJweDt9XHJcbi5tLWItMjMzIHttYXJnaW4tYm90dG9tOiAyMzNweDt9XHJcbi5tLWItMjM0IHttYXJnaW4tYm90dG9tOiAyMzRweDt9XHJcbi5tLWItMjM1IHttYXJnaW4tYm90dG9tOiAyMzVweDt9XHJcbi5tLWItMjM2IHttYXJnaW4tYm90dG9tOiAyMzZweDt9XHJcbi5tLWItMjM3IHttYXJnaW4tYm90dG9tOiAyMzdweDt9XHJcbi5tLWItMjM4IHttYXJnaW4tYm90dG9tOiAyMzhweDt9XHJcbi5tLWItMjM5IHttYXJnaW4tYm90dG9tOiAyMzlweDt9XHJcbi5tLWItMjQwIHttYXJnaW4tYm90dG9tOiAyNDBweDt9XHJcbi5tLWItMjQxIHttYXJnaW4tYm90dG9tOiAyNDFweDt9XHJcbi5tLWItMjQyIHttYXJnaW4tYm90dG9tOiAyNDJweDt9XHJcbi5tLWItMjQzIHttYXJnaW4tYm90dG9tOiAyNDNweDt9XHJcbi5tLWItMjQ0IHttYXJnaW4tYm90dG9tOiAyNDRweDt9XHJcbi5tLWItMjQ1IHttYXJnaW4tYm90dG9tOiAyNDVweDt9XHJcbi5tLWItMjQ2IHttYXJnaW4tYm90dG9tOiAyNDZweDt9XHJcbi5tLWItMjQ3IHttYXJnaW4tYm90dG9tOiAyNDdweDt9XHJcbi5tLWItMjQ4IHttYXJnaW4tYm90dG9tOiAyNDhweDt9XHJcbi5tLWItMjQ5IHttYXJnaW4tYm90dG9tOiAyNDlweDt9XHJcbi5tLWItMjUwIHttYXJnaW4tYm90dG9tOiAyNTBweDt9XHJcbi5tLWwtMCB7bWFyZ2luLWxlZnQ6IDBweDt9XHJcbi5tLWwtMSB7bWFyZ2luLWxlZnQ6IDFweDt9XHJcbi5tLWwtMiB7bWFyZ2luLWxlZnQ6IDJweDt9XHJcbi5tLWwtMyB7bWFyZ2luLWxlZnQ6IDNweDt9XHJcbi5tLWwtNCB7bWFyZ2luLWxlZnQ6IDRweDt9XHJcbi5tLWwtNSB7bWFyZ2luLWxlZnQ6IDVweDt9XHJcbi5tLWwtNiB7bWFyZ2luLWxlZnQ6IDZweDt9XHJcbi5tLWwtNyB7bWFyZ2luLWxlZnQ6IDdweDt9XHJcbi5tLWwtOCB7bWFyZ2luLWxlZnQ6IDhweDt9XHJcbi5tLWwtOSB7bWFyZ2luLWxlZnQ6IDlweDt9XHJcbi5tLWwtMTAge21hcmdpbi1sZWZ0OiAxMHB4O31cclxuLm0tbC0xMSB7bWFyZ2luLWxlZnQ6IDExcHg7fVxyXG4ubS1sLTEyIHttYXJnaW4tbGVmdDogMTJweDt9XHJcbi5tLWwtMTMge21hcmdpbi1sZWZ0OiAxM3B4O31cclxuLm0tbC0xNCB7bWFyZ2luLWxlZnQ6IDE0cHg7fVxyXG4ubS1sLTE1IHttYXJnaW4tbGVmdDogMTVweDt9XHJcbi5tLWwtMTYge21hcmdpbi1sZWZ0OiAxNnB4O31cclxuLm0tbC0xNyB7bWFyZ2luLWxlZnQ6IDE3cHg7fVxyXG4ubS1sLTE4IHttYXJnaW4tbGVmdDogMThweDt9XHJcbi5tLWwtMTkge21hcmdpbi1sZWZ0OiAxOXB4O31cclxuLm0tbC0yMCB7bWFyZ2luLWxlZnQ6IDIwcHg7fVxyXG4ubS1sLTIxIHttYXJnaW4tbGVmdDogMjFweDt9XHJcbi5tLWwtMjIge21hcmdpbi1sZWZ0OiAyMnB4O31cclxuLm0tbC0yMyB7bWFyZ2luLWxlZnQ6IDIzcHg7fVxyXG4ubS1sLTI0IHttYXJnaW4tbGVmdDogMjRweDt9XHJcbi5tLWwtMjUge21hcmdpbi1sZWZ0OiAyNXB4O31cclxuLm0tbC0yNiB7bWFyZ2luLWxlZnQ6IDI2cHg7fVxyXG4ubS1sLTI3IHttYXJnaW4tbGVmdDogMjdweDt9XHJcbi5tLWwtMjgge21hcmdpbi1sZWZ0OiAyOHB4O31cclxuLm0tbC0yOSB7bWFyZ2luLWxlZnQ6IDI5cHg7fVxyXG4ubS1sLTMwIHttYXJnaW4tbGVmdDogMzBweDt9XHJcbi5tLWwtMzEge21hcmdpbi1sZWZ0OiAzMXB4O31cclxuLm0tbC0zMiB7bWFyZ2luLWxlZnQ6IDMycHg7fVxyXG4ubS1sLTMzIHttYXJnaW4tbGVmdDogMzNweDt9XHJcbi5tLWwtMzQge21hcmdpbi1sZWZ0OiAzNHB4O31cclxuLm0tbC0zNSB7bWFyZ2luLWxlZnQ6IDM1cHg7fVxyXG4ubS1sLTM2IHttYXJnaW4tbGVmdDogMzZweDt9XHJcbi5tLWwtMzcge21hcmdpbi1sZWZ0OiAzN3B4O31cclxuLm0tbC0zOCB7bWFyZ2luLWxlZnQ6IDM4cHg7fVxyXG4ubS1sLTM5IHttYXJnaW4tbGVmdDogMzlweDt9XHJcbi5tLWwtNDAge21hcmdpbi1sZWZ0OiA0MHB4O31cclxuLm0tbC00MSB7bWFyZ2luLWxlZnQ6IDQxcHg7fVxyXG4ubS1sLTQyIHttYXJnaW4tbGVmdDogNDJweDt9XHJcbi5tLWwtNDMge21hcmdpbi1sZWZ0OiA0M3B4O31cclxuLm0tbC00NCB7bWFyZ2luLWxlZnQ6IDQ0cHg7fVxyXG4ubS1sLTQ1IHttYXJnaW4tbGVmdDogNDVweDt9XHJcbi5tLWwtNDYge21hcmdpbi1sZWZ0OiA0NnB4O31cclxuLm0tbC00NyB7bWFyZ2luLWxlZnQ6IDQ3cHg7fVxyXG4ubS1sLTQ4IHttYXJnaW4tbGVmdDogNDhweDt9XHJcbi5tLWwtNDkge21hcmdpbi1sZWZ0OiA0OXB4O31cclxuLm0tbC01MCB7bWFyZ2luLWxlZnQ6IDUwcHg7fVxyXG4ubS1sLTUxIHttYXJnaW4tbGVmdDogNTFweDt9XHJcbi5tLWwtNTIge21hcmdpbi1sZWZ0OiA1MnB4O31cclxuLm0tbC01MyB7bWFyZ2luLWxlZnQ6IDUzcHg7fVxyXG4ubS1sLTU0IHttYXJnaW4tbGVmdDogNTRweDt9XHJcbi5tLWwtNTUge21hcmdpbi1sZWZ0OiA1NXB4O31cclxuLm0tbC01NiB7bWFyZ2luLWxlZnQ6IDU2cHg7fVxyXG4ubS1sLTU3IHttYXJnaW4tbGVmdDogNTdweDt9XHJcbi5tLWwtNTgge21hcmdpbi1sZWZ0OiA1OHB4O31cclxuLm0tbC01OSB7bWFyZ2luLWxlZnQ6IDU5cHg7fVxyXG4ubS1sLTYwIHttYXJnaW4tbGVmdDogNjBweDt9XHJcbi5tLWwtNjEge21hcmdpbi1sZWZ0OiA2MXB4O31cclxuLm0tbC02MiB7bWFyZ2luLWxlZnQ6IDYycHg7fVxyXG4ubS1sLTYzIHttYXJnaW4tbGVmdDogNjNweDt9XHJcbi5tLWwtNjQge21hcmdpbi1sZWZ0OiA2NHB4O31cclxuLm0tbC02NSB7bWFyZ2luLWxlZnQ6IDY1cHg7fVxyXG4ubS1sLTY2IHttYXJnaW4tbGVmdDogNjZweDt9XHJcbi5tLWwtNjcge21hcmdpbi1sZWZ0OiA2N3B4O31cclxuLm0tbC02OCB7bWFyZ2luLWxlZnQ6IDY4cHg7fVxyXG4ubS1sLTY5IHttYXJnaW4tbGVmdDogNjlweDt9XHJcbi5tLWwtNzAge21hcmdpbi1sZWZ0OiA3MHB4O31cclxuLm0tbC03MSB7bWFyZ2luLWxlZnQ6IDcxcHg7fVxyXG4ubS1sLTcyIHttYXJnaW4tbGVmdDogNzJweDt9XHJcbi5tLWwtNzMge21hcmdpbi1sZWZ0OiA3M3B4O31cclxuLm0tbC03NCB7bWFyZ2luLWxlZnQ6IDc0cHg7fVxyXG4ubS1sLTc1IHttYXJnaW4tbGVmdDogNzVweDt9XHJcbi5tLWwtNzYge21hcmdpbi1sZWZ0OiA3NnB4O31cclxuLm0tbC03NyB7bWFyZ2luLWxlZnQ6IDc3cHg7fVxyXG4ubS1sLTc4IHttYXJnaW4tbGVmdDogNzhweDt9XHJcbi5tLWwtNzkge21hcmdpbi1sZWZ0OiA3OXB4O31cclxuLm0tbC04MCB7bWFyZ2luLWxlZnQ6IDgwcHg7fVxyXG4ubS1sLTgxIHttYXJnaW4tbGVmdDogODFweDt9XHJcbi5tLWwtODIge21hcmdpbi1sZWZ0OiA4MnB4O31cclxuLm0tbC04MyB7bWFyZ2luLWxlZnQ6IDgzcHg7fVxyXG4ubS1sLTg0IHttYXJnaW4tbGVmdDogODRweDt9XHJcbi5tLWwtODUge21hcmdpbi1sZWZ0OiA4NXB4O31cclxuLm0tbC04NiB7bWFyZ2luLWxlZnQ6IDg2cHg7fVxyXG4ubS1sLTg3IHttYXJnaW4tbGVmdDogODdweDt9XHJcbi5tLWwtODgge21hcmdpbi1sZWZ0OiA4OHB4O31cclxuLm0tbC04OSB7bWFyZ2luLWxlZnQ6IDg5cHg7fVxyXG4ubS1sLTkwIHttYXJnaW4tbGVmdDogOTBweDt9XHJcbi5tLWwtOTEge21hcmdpbi1sZWZ0OiA5MXB4O31cclxuLm0tbC05MiB7bWFyZ2luLWxlZnQ6IDkycHg7fVxyXG4ubS1sLTkzIHttYXJnaW4tbGVmdDogOTNweDt9XHJcbi5tLWwtOTQge21hcmdpbi1sZWZ0OiA5NHB4O31cclxuLm0tbC05NSB7bWFyZ2luLWxlZnQ6IDk1cHg7fVxyXG4ubS1sLTk2IHttYXJnaW4tbGVmdDogOTZweDt9XHJcbi5tLWwtOTcge21hcmdpbi1sZWZ0OiA5N3B4O31cclxuLm0tbC05OCB7bWFyZ2luLWxlZnQ6IDk4cHg7fVxyXG4ubS1sLTk5IHttYXJnaW4tbGVmdDogOTlweDt9XHJcbi5tLWwtMTAwIHttYXJnaW4tbGVmdDogMTAwcHg7fVxyXG4ubS1sLTEwMSB7bWFyZ2luLWxlZnQ6IDEwMXB4O31cclxuLm0tbC0xMDIge21hcmdpbi1sZWZ0OiAxMDJweDt9XHJcbi5tLWwtMTAzIHttYXJnaW4tbGVmdDogMTAzcHg7fVxyXG4ubS1sLTEwNCB7bWFyZ2luLWxlZnQ6IDEwNHB4O31cclxuLm0tbC0xMDUge21hcmdpbi1sZWZ0OiAxMDVweDt9XHJcbi5tLWwtMTA2IHttYXJnaW4tbGVmdDogMTA2cHg7fVxyXG4ubS1sLTEwNyB7bWFyZ2luLWxlZnQ6IDEwN3B4O31cclxuLm0tbC0xMDgge21hcmdpbi1sZWZ0OiAxMDhweDt9XHJcbi5tLWwtMTA5IHttYXJnaW4tbGVmdDogMTA5cHg7fVxyXG4ubS1sLTExMCB7bWFyZ2luLWxlZnQ6IDExMHB4O31cclxuLm0tbC0xMTEge21hcmdpbi1sZWZ0OiAxMTFweDt9XHJcbi5tLWwtMTEyIHttYXJnaW4tbGVmdDogMTEycHg7fVxyXG4ubS1sLTExMyB7bWFyZ2luLWxlZnQ6IDExM3B4O31cclxuLm0tbC0xMTQge21hcmdpbi1sZWZ0OiAxMTRweDt9XHJcbi5tLWwtMTE1IHttYXJnaW4tbGVmdDogMTE1cHg7fVxyXG4ubS1sLTExNiB7bWFyZ2luLWxlZnQ6IDExNnB4O31cclxuLm0tbC0xMTcge21hcmdpbi1sZWZ0OiAxMTdweDt9XHJcbi5tLWwtMTE4IHttYXJnaW4tbGVmdDogMTE4cHg7fVxyXG4ubS1sLTExOSB7bWFyZ2luLWxlZnQ6IDExOXB4O31cclxuLm0tbC0xMjAge21hcmdpbi1sZWZ0OiAxMjBweDt9XHJcbi5tLWwtMTIxIHttYXJnaW4tbGVmdDogMTIxcHg7fVxyXG4ubS1sLTEyMiB7bWFyZ2luLWxlZnQ6IDEyMnB4O31cclxuLm0tbC0xMjMge21hcmdpbi1sZWZ0OiAxMjNweDt9XHJcbi5tLWwtMTI0IHttYXJnaW4tbGVmdDogMTI0cHg7fVxyXG4ubS1sLTEyNSB7bWFyZ2luLWxlZnQ6IDEyNXB4O31cclxuLm0tbC0xMjYge21hcmdpbi1sZWZ0OiAxMjZweDt9XHJcbi5tLWwtMTI3IHttYXJnaW4tbGVmdDogMTI3cHg7fVxyXG4ubS1sLTEyOCB7bWFyZ2luLWxlZnQ6IDEyOHB4O31cclxuLm0tbC0xMjkge21hcmdpbi1sZWZ0OiAxMjlweDt9XHJcbi5tLWwtMTMwIHttYXJnaW4tbGVmdDogMTMwcHg7fVxyXG4ubS1sLTEzMSB7bWFyZ2luLWxlZnQ6IDEzMXB4O31cclxuLm0tbC0xMzIge21hcmdpbi1sZWZ0OiAxMzJweDt9XHJcbi5tLWwtMTMzIHttYXJnaW4tbGVmdDogMTMzcHg7fVxyXG4ubS1sLTEzNCB7bWFyZ2luLWxlZnQ6IDEzNHB4O31cclxuLm0tbC0xMzUge21hcmdpbi1sZWZ0OiAxMzVweDt9XHJcbi5tLWwtMTM2IHttYXJnaW4tbGVmdDogMTM2cHg7fVxyXG4ubS1sLTEzNyB7bWFyZ2luLWxlZnQ6IDEzN3B4O31cclxuLm0tbC0xMzgge21hcmdpbi1sZWZ0OiAxMzhweDt9XHJcbi5tLWwtMTM5IHttYXJnaW4tbGVmdDogMTM5cHg7fVxyXG4ubS1sLTE0MCB7bWFyZ2luLWxlZnQ6IDE0MHB4O31cclxuLm0tbC0xNDEge21hcmdpbi1sZWZ0OiAxNDFweDt9XHJcbi5tLWwtMTQyIHttYXJnaW4tbGVmdDogMTQycHg7fVxyXG4ubS1sLTE0MyB7bWFyZ2luLWxlZnQ6IDE0M3B4O31cclxuLm0tbC0xNDQge21hcmdpbi1sZWZ0OiAxNDRweDt9XHJcbi5tLWwtMTQ1IHttYXJnaW4tbGVmdDogMTQ1cHg7fVxyXG4ubS1sLTE0NiB7bWFyZ2luLWxlZnQ6IDE0NnB4O31cclxuLm0tbC0xNDcge21hcmdpbi1sZWZ0OiAxNDdweDt9XHJcbi5tLWwtMTQ4IHttYXJnaW4tbGVmdDogMTQ4cHg7fVxyXG4ubS1sLTE0OSB7bWFyZ2luLWxlZnQ6IDE0OXB4O31cclxuLm0tbC0xNTAge21hcmdpbi1sZWZ0OiAxNTBweDt9XHJcbi5tLWwtMTUxIHttYXJnaW4tbGVmdDogMTUxcHg7fVxyXG4ubS1sLTE1MiB7bWFyZ2luLWxlZnQ6IDE1MnB4O31cclxuLm0tbC0xNTMge21hcmdpbi1sZWZ0OiAxNTNweDt9XHJcbi5tLWwtMTU0IHttYXJnaW4tbGVmdDogMTU0cHg7fVxyXG4ubS1sLTE1NSB7bWFyZ2luLWxlZnQ6IDE1NXB4O31cclxuLm0tbC0xNTYge21hcmdpbi1sZWZ0OiAxNTZweDt9XHJcbi5tLWwtMTU3IHttYXJnaW4tbGVmdDogMTU3cHg7fVxyXG4ubS1sLTE1OCB7bWFyZ2luLWxlZnQ6IDE1OHB4O31cclxuLm0tbC0xNTkge21hcmdpbi1sZWZ0OiAxNTlweDt9XHJcbi5tLWwtMTYwIHttYXJnaW4tbGVmdDogMTYwcHg7fVxyXG4ubS1sLTE2MSB7bWFyZ2luLWxlZnQ6IDE2MXB4O31cclxuLm0tbC0xNjIge21hcmdpbi1sZWZ0OiAxNjJweDt9XHJcbi5tLWwtMTYzIHttYXJnaW4tbGVmdDogMTYzcHg7fVxyXG4ubS1sLTE2NCB7bWFyZ2luLWxlZnQ6IDE2NHB4O31cclxuLm0tbC0xNjUge21hcmdpbi1sZWZ0OiAxNjVweDt9XHJcbi5tLWwtMTY2IHttYXJnaW4tbGVmdDogMTY2cHg7fVxyXG4ubS1sLTE2NyB7bWFyZ2luLWxlZnQ6IDE2N3B4O31cclxuLm0tbC0xNjgge21hcmdpbi1sZWZ0OiAxNjhweDt9XHJcbi5tLWwtMTY5IHttYXJnaW4tbGVmdDogMTY5cHg7fVxyXG4ubS1sLTE3MCB7bWFyZ2luLWxlZnQ6IDE3MHB4O31cclxuLm0tbC0xNzEge21hcmdpbi1sZWZ0OiAxNzFweDt9XHJcbi5tLWwtMTcyIHttYXJnaW4tbGVmdDogMTcycHg7fVxyXG4ubS1sLTE3MyB7bWFyZ2luLWxlZnQ6IDE3M3B4O31cclxuLm0tbC0xNzQge21hcmdpbi1sZWZ0OiAxNzRweDt9XHJcbi5tLWwtMTc1IHttYXJnaW4tbGVmdDogMTc1cHg7fVxyXG4ubS1sLTE3NiB7bWFyZ2luLWxlZnQ6IDE3NnB4O31cclxuLm0tbC0xNzcge21hcmdpbi1sZWZ0OiAxNzdweDt9XHJcbi5tLWwtMTc4IHttYXJnaW4tbGVmdDogMTc4cHg7fVxyXG4ubS1sLTE3OSB7bWFyZ2luLWxlZnQ6IDE3OXB4O31cclxuLm0tbC0xODAge21hcmdpbi1sZWZ0OiAxODBweDt9XHJcbi5tLWwtMTgxIHttYXJnaW4tbGVmdDogMTgxcHg7fVxyXG4ubS1sLTE4MiB7bWFyZ2luLWxlZnQ6IDE4MnB4O31cclxuLm0tbC0xODMge21hcmdpbi1sZWZ0OiAxODNweDt9XHJcbi5tLWwtMTg0IHttYXJnaW4tbGVmdDogMTg0cHg7fVxyXG4ubS1sLTE4NSB7bWFyZ2luLWxlZnQ6IDE4NXB4O31cclxuLm0tbC0xODYge21hcmdpbi1sZWZ0OiAxODZweDt9XHJcbi5tLWwtMTg3IHttYXJnaW4tbGVmdDogMTg3cHg7fVxyXG4ubS1sLTE4OCB7bWFyZ2luLWxlZnQ6IDE4OHB4O31cclxuLm0tbC0xODkge21hcmdpbi1sZWZ0OiAxODlweDt9XHJcbi5tLWwtMTkwIHttYXJnaW4tbGVmdDogMTkwcHg7fVxyXG4ubS1sLTE5MSB7bWFyZ2luLWxlZnQ6IDE5MXB4O31cclxuLm0tbC0xOTIge21hcmdpbi1sZWZ0OiAxOTJweDt9XHJcbi5tLWwtMTkzIHttYXJnaW4tbGVmdDogMTkzcHg7fVxyXG4ubS1sLTE5NCB7bWFyZ2luLWxlZnQ6IDE5NHB4O31cclxuLm0tbC0xOTUge21hcmdpbi1sZWZ0OiAxOTVweDt9XHJcbi5tLWwtMTk2IHttYXJnaW4tbGVmdDogMTk2cHg7fVxyXG4ubS1sLTE5NyB7bWFyZ2luLWxlZnQ6IDE5N3B4O31cclxuLm0tbC0xOTgge21hcmdpbi1sZWZ0OiAxOThweDt9XHJcbi5tLWwtMTk5IHttYXJnaW4tbGVmdDogMTk5cHg7fVxyXG4ubS1sLTIwMCB7bWFyZ2luLWxlZnQ6IDIwMHB4O31cclxuLm0tbC0yMDEge21hcmdpbi1sZWZ0OiAyMDFweDt9XHJcbi5tLWwtMjAyIHttYXJnaW4tbGVmdDogMjAycHg7fVxyXG4ubS1sLTIwMyB7bWFyZ2luLWxlZnQ6IDIwM3B4O31cclxuLm0tbC0yMDQge21hcmdpbi1sZWZ0OiAyMDRweDt9XHJcbi5tLWwtMjA1IHttYXJnaW4tbGVmdDogMjA1cHg7fVxyXG4ubS1sLTIwNiB7bWFyZ2luLWxlZnQ6IDIwNnB4O31cclxuLm0tbC0yMDcge21hcmdpbi1sZWZ0OiAyMDdweDt9XHJcbi5tLWwtMjA4IHttYXJnaW4tbGVmdDogMjA4cHg7fVxyXG4ubS1sLTIwOSB7bWFyZ2luLWxlZnQ6IDIwOXB4O31cclxuLm0tbC0yMTAge21hcmdpbi1sZWZ0OiAyMTBweDt9XHJcbi5tLWwtMjExIHttYXJnaW4tbGVmdDogMjExcHg7fVxyXG4ubS1sLTIxMiB7bWFyZ2luLWxlZnQ6IDIxMnB4O31cclxuLm0tbC0yMTMge21hcmdpbi1sZWZ0OiAyMTNweDt9XHJcbi5tLWwtMjE0IHttYXJnaW4tbGVmdDogMjE0cHg7fVxyXG4ubS1sLTIxNSB7bWFyZ2luLWxlZnQ6IDIxNXB4O31cclxuLm0tbC0yMTYge21hcmdpbi1sZWZ0OiAyMTZweDt9XHJcbi5tLWwtMjE3IHttYXJnaW4tbGVmdDogMjE3cHg7fVxyXG4ubS1sLTIxOCB7bWFyZ2luLWxlZnQ6IDIxOHB4O31cclxuLm0tbC0yMTkge21hcmdpbi1sZWZ0OiAyMTlweDt9XHJcbi5tLWwtMjIwIHttYXJnaW4tbGVmdDogMjIwcHg7fVxyXG4ubS1sLTIyMSB7bWFyZ2luLWxlZnQ6IDIyMXB4O31cclxuLm0tbC0yMjIge21hcmdpbi1sZWZ0OiAyMjJweDt9XHJcbi5tLWwtMjIzIHttYXJnaW4tbGVmdDogMjIzcHg7fVxyXG4ubS1sLTIyNCB7bWFyZ2luLWxlZnQ6IDIyNHB4O31cclxuLm0tbC0yMjUge21hcmdpbi1sZWZ0OiAyMjVweDt9XHJcbi5tLWwtMjI2IHttYXJnaW4tbGVmdDogMjI2cHg7fVxyXG4ubS1sLTIyNyB7bWFyZ2luLWxlZnQ6IDIyN3B4O31cclxuLm0tbC0yMjgge21hcmdpbi1sZWZ0OiAyMjhweDt9XHJcbi5tLWwtMjI5IHttYXJnaW4tbGVmdDogMjI5cHg7fVxyXG4ubS1sLTIzMCB7bWFyZ2luLWxlZnQ6IDIzMHB4O31cclxuLm0tbC0yMzEge21hcmdpbi1sZWZ0OiAyMzFweDt9XHJcbi5tLWwtMjMyIHttYXJnaW4tbGVmdDogMjMycHg7fVxyXG4ubS1sLTIzMyB7bWFyZ2luLWxlZnQ6IDIzM3B4O31cclxuLm0tbC0yMzQge21hcmdpbi1sZWZ0OiAyMzRweDt9XHJcbi5tLWwtMjM1IHttYXJnaW4tbGVmdDogMjM1cHg7fVxyXG4ubS1sLTIzNiB7bWFyZ2luLWxlZnQ6IDIzNnB4O31cclxuLm0tbC0yMzcge21hcmdpbi1sZWZ0OiAyMzdweDt9XHJcbi5tLWwtMjM4IHttYXJnaW4tbGVmdDogMjM4cHg7fVxyXG4ubS1sLTIzOSB7bWFyZ2luLWxlZnQ6IDIzOXB4O31cclxuLm0tbC0yNDAge21hcmdpbi1sZWZ0OiAyNDBweDt9XHJcbi5tLWwtMjQxIHttYXJnaW4tbGVmdDogMjQxcHg7fVxyXG4ubS1sLTI0MiB7bWFyZ2luLWxlZnQ6IDI0MnB4O31cclxuLm0tbC0yNDMge21hcmdpbi1sZWZ0OiAyNDNweDt9XHJcbi5tLWwtMjQ0IHttYXJnaW4tbGVmdDogMjQ0cHg7fVxyXG4ubS1sLTI0NSB7bWFyZ2luLWxlZnQ6IDI0NXB4O31cclxuLm0tbC0yNDYge21hcmdpbi1sZWZ0OiAyNDZweDt9XHJcbi5tLWwtMjQ3IHttYXJnaW4tbGVmdDogMjQ3cHg7fVxyXG4ubS1sLTI0OCB7bWFyZ2luLWxlZnQ6IDI0OHB4O31cclxuLm0tbC0yNDkge21hcmdpbi1sZWZ0OiAyNDlweDt9XHJcbi5tLWwtMjUwIHttYXJnaW4tbGVmdDogMjUwcHg7fVxyXG4ubS1yLTAge21hcmdpbi1yaWdodDogMHB4O31cclxuLm0tci0xIHttYXJnaW4tcmlnaHQ6IDFweDt9XHJcbi5tLXItMiB7bWFyZ2luLXJpZ2h0OiAycHg7fVxyXG4ubS1yLTMge21hcmdpbi1yaWdodDogM3B4O31cclxuLm0tci00IHttYXJnaW4tcmlnaHQ6IDRweDt9XHJcbi5tLXItNSB7bWFyZ2luLXJpZ2h0OiA1cHg7fVxyXG4ubS1yLTYge21hcmdpbi1yaWdodDogNnB4O31cclxuLm0tci03IHttYXJnaW4tcmlnaHQ6IDdweDt9XHJcbi5tLXItOCB7bWFyZ2luLXJpZ2h0OiA4cHg7fVxyXG4ubS1yLTkge21hcmdpbi1yaWdodDogOXB4O31cclxuLm0tci0xMCB7bWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuLm0tci0xMSB7bWFyZ2luLXJpZ2h0OiAxMXB4O31cclxuLm0tci0xMiB7bWFyZ2luLXJpZ2h0OiAxMnB4O31cclxuLm0tci0xMyB7bWFyZ2luLXJpZ2h0OiAxM3B4O31cclxuLm0tci0xNCB7bWFyZ2luLXJpZ2h0OiAxNHB4O31cclxuLm0tci0xNSB7bWFyZ2luLXJpZ2h0OiAxNXB4O31cclxuLm0tci0xNiB7bWFyZ2luLXJpZ2h0OiAxNnB4O31cclxuLm0tci0xNyB7bWFyZ2luLXJpZ2h0OiAxN3B4O31cclxuLm0tci0xOCB7bWFyZ2luLXJpZ2h0OiAxOHB4O31cclxuLm0tci0xOSB7bWFyZ2luLXJpZ2h0OiAxOXB4O31cclxuLm0tci0yMCB7bWFyZ2luLXJpZ2h0OiAyMHB4O31cclxuLm0tci0yMSB7bWFyZ2luLXJpZ2h0OiAyMXB4O31cclxuLm0tci0yMiB7bWFyZ2luLXJpZ2h0OiAyMnB4O31cclxuLm0tci0yMyB7bWFyZ2luLXJpZ2h0OiAyM3B4O31cclxuLm0tci0yNCB7bWFyZ2luLXJpZ2h0OiAyNHB4O31cclxuLm0tci0yNSB7bWFyZ2luLXJpZ2h0OiAyNXB4O31cclxuLm0tci0yNiB7bWFyZ2luLXJpZ2h0OiAyNnB4O31cclxuLm0tci0yNyB7bWFyZ2luLXJpZ2h0OiAyN3B4O31cclxuLm0tci0yOCB7bWFyZ2luLXJpZ2h0OiAyOHB4O31cclxuLm0tci0yOSB7bWFyZ2luLXJpZ2h0OiAyOXB4O31cclxuLm0tci0zMCB7bWFyZ2luLXJpZ2h0OiAzMHB4O31cclxuLm0tci0zMSB7bWFyZ2luLXJpZ2h0OiAzMXB4O31cclxuLm0tci0zMiB7bWFyZ2luLXJpZ2h0OiAzMnB4O31cclxuLm0tci0zMyB7bWFyZ2luLXJpZ2h0OiAzM3B4O31cclxuLm0tci0zNCB7bWFyZ2luLXJpZ2h0OiAzNHB4O31cclxuLm0tci0zNSB7bWFyZ2luLXJpZ2h0OiAzNXB4O31cclxuLm0tci0zNiB7bWFyZ2luLXJpZ2h0OiAzNnB4O31cclxuLm0tci0zNyB7bWFyZ2luLXJpZ2h0OiAzN3B4O31cclxuLm0tci0zOCB7bWFyZ2luLXJpZ2h0OiAzOHB4O31cclxuLm0tci0zOSB7bWFyZ2luLXJpZ2h0OiAzOXB4O31cclxuLm0tci00MCB7bWFyZ2luLXJpZ2h0OiA0MHB4O31cclxuLm0tci00MSB7bWFyZ2luLXJpZ2h0OiA0MXB4O31cclxuLm0tci00MiB7bWFyZ2luLXJpZ2h0OiA0MnB4O31cclxuLm0tci00MyB7bWFyZ2luLXJpZ2h0OiA0M3B4O31cclxuLm0tci00NCB7bWFyZ2luLXJpZ2h0OiA0NHB4O31cclxuLm0tci00NSB7bWFyZ2luLXJpZ2h0OiA0NXB4O31cclxuLm0tci00NiB7bWFyZ2luLXJpZ2h0OiA0NnB4O31cclxuLm0tci00NyB7bWFyZ2luLXJpZ2h0OiA0N3B4O31cclxuLm0tci00OCB7bWFyZ2luLXJpZ2h0OiA0OHB4O31cclxuLm0tci00OSB7bWFyZ2luLXJpZ2h0OiA0OXB4O31cclxuLm0tci01MCB7bWFyZ2luLXJpZ2h0OiA1MHB4O31cclxuLm0tci01MSB7bWFyZ2luLXJpZ2h0OiA1MXB4O31cclxuLm0tci01MiB7bWFyZ2luLXJpZ2h0OiA1MnB4O31cclxuLm0tci01MyB7bWFyZ2luLXJpZ2h0OiA1M3B4O31cclxuLm0tci01NCB7bWFyZ2luLXJpZ2h0OiA1NHB4O31cclxuLm0tci01NSB7bWFyZ2luLXJpZ2h0OiA1NXB4O31cclxuLm0tci01NiB7bWFyZ2luLXJpZ2h0OiA1NnB4O31cclxuLm0tci01NyB7bWFyZ2luLXJpZ2h0OiA1N3B4O31cclxuLm0tci01OCB7bWFyZ2luLXJpZ2h0OiA1OHB4O31cclxuLm0tci01OSB7bWFyZ2luLXJpZ2h0OiA1OXB4O31cclxuLm0tci02MCB7bWFyZ2luLXJpZ2h0OiA2MHB4O31cclxuLm0tci02MSB7bWFyZ2luLXJpZ2h0OiA2MXB4O31cclxuLm0tci02MiB7bWFyZ2luLXJpZ2h0OiA2MnB4O31cclxuLm0tci02MyB7bWFyZ2luLXJpZ2h0OiA2M3B4O31cclxuLm0tci02NCB7bWFyZ2luLXJpZ2h0OiA2NHB4O31cclxuLm0tci02NSB7bWFyZ2luLXJpZ2h0OiA2NXB4O31cclxuLm0tci02NiB7bWFyZ2luLXJpZ2h0OiA2NnB4O31cclxuLm0tci02NyB7bWFyZ2luLXJpZ2h0OiA2N3B4O31cclxuLm0tci02OCB7bWFyZ2luLXJpZ2h0OiA2OHB4O31cclxuLm0tci02OSB7bWFyZ2luLXJpZ2h0OiA2OXB4O31cclxuLm0tci03MCB7bWFyZ2luLXJpZ2h0OiA3MHB4O31cclxuLm0tci03MSB7bWFyZ2luLXJpZ2h0OiA3MXB4O31cclxuLm0tci03MiB7bWFyZ2luLXJpZ2h0OiA3MnB4O31cclxuLm0tci03MyB7bWFyZ2luLXJpZ2h0OiA3M3B4O31cclxuLm0tci03NCB7bWFyZ2luLXJpZ2h0OiA3NHB4O31cclxuLm0tci03NSB7bWFyZ2luLXJpZ2h0OiA3NXB4O31cclxuLm0tci03NiB7bWFyZ2luLXJpZ2h0OiA3NnB4O31cclxuLm0tci03NyB7bWFyZ2luLXJpZ2h0OiA3N3B4O31cclxuLm0tci03OCB7bWFyZ2luLXJpZ2h0OiA3OHB4O31cclxuLm0tci03OSB7bWFyZ2luLXJpZ2h0OiA3OXB4O31cclxuLm0tci04MCB7bWFyZ2luLXJpZ2h0OiA4MHB4O31cclxuLm0tci04MSB7bWFyZ2luLXJpZ2h0OiA4MXB4O31cclxuLm0tci04MiB7bWFyZ2luLXJpZ2h0OiA4MnB4O31cclxuLm0tci04MyB7bWFyZ2luLXJpZ2h0OiA4M3B4O31cclxuLm0tci04NCB7bWFyZ2luLXJpZ2h0OiA4NHB4O31cclxuLm0tci04NSB7bWFyZ2luLXJpZ2h0OiA4NXB4O31cclxuLm0tci04NiB7bWFyZ2luLXJpZ2h0OiA4NnB4O31cclxuLm0tci04NyB7bWFyZ2luLXJpZ2h0OiA4N3B4O31cclxuLm0tci04OCB7bWFyZ2luLXJpZ2h0OiA4OHB4O31cclxuLm0tci04OSB7bWFyZ2luLXJpZ2h0OiA4OXB4O31cclxuLm0tci05MCB7bWFyZ2luLXJpZ2h0OiA5MHB4O31cclxuLm0tci05MSB7bWFyZ2luLXJpZ2h0OiA5MXB4O31cclxuLm0tci05MiB7bWFyZ2luLXJpZ2h0OiA5MnB4O31cclxuLm0tci05MyB7bWFyZ2luLXJpZ2h0OiA5M3B4O31cclxuLm0tci05NCB7bWFyZ2luLXJpZ2h0OiA5NHB4O31cclxuLm0tci05NSB7bWFyZ2luLXJpZ2h0OiA5NXB4O31cclxuLm0tci05NiB7bWFyZ2luLXJpZ2h0OiA5NnB4O31cclxuLm0tci05NyB7bWFyZ2luLXJpZ2h0OiA5N3B4O31cclxuLm0tci05OCB7bWFyZ2luLXJpZ2h0OiA5OHB4O31cclxuLm0tci05OSB7bWFyZ2luLXJpZ2h0OiA5OXB4O31cclxuLm0tci0xMDAge21hcmdpbi1yaWdodDogMTAwcHg7fVxyXG4ubS1yLTEwMSB7bWFyZ2luLXJpZ2h0OiAxMDFweDt9XHJcbi5tLXItMTAyIHttYXJnaW4tcmlnaHQ6IDEwMnB4O31cclxuLm0tci0xMDMge21hcmdpbi1yaWdodDogMTAzcHg7fVxyXG4ubS1yLTEwNCB7bWFyZ2luLXJpZ2h0OiAxMDRweDt9XHJcbi5tLXItMTA1IHttYXJnaW4tcmlnaHQ6IDEwNXB4O31cclxuLm0tci0xMDYge21hcmdpbi1yaWdodDogMTA2cHg7fVxyXG4ubS1yLTEwNyB7bWFyZ2luLXJpZ2h0OiAxMDdweDt9XHJcbi5tLXItMTA4IHttYXJnaW4tcmlnaHQ6IDEwOHB4O31cclxuLm0tci0xMDkge21hcmdpbi1yaWdodDogMTA5cHg7fVxyXG4ubS1yLTExMCB7bWFyZ2luLXJpZ2h0OiAxMTBweDt9XHJcbi5tLXItMTExIHttYXJnaW4tcmlnaHQ6IDExMXB4O31cclxuLm0tci0xMTIge21hcmdpbi1yaWdodDogMTEycHg7fVxyXG4ubS1yLTExMyB7bWFyZ2luLXJpZ2h0OiAxMTNweDt9XHJcbi5tLXItMTE0IHttYXJnaW4tcmlnaHQ6IDExNHB4O31cclxuLm0tci0xMTUge21hcmdpbi1yaWdodDogMTE1cHg7fVxyXG4ubS1yLTExNiB7bWFyZ2luLXJpZ2h0OiAxMTZweDt9XHJcbi5tLXItMTE3IHttYXJnaW4tcmlnaHQ6IDExN3B4O31cclxuLm0tci0xMTgge21hcmdpbi1yaWdodDogMTE4cHg7fVxyXG4ubS1yLTExOSB7bWFyZ2luLXJpZ2h0OiAxMTlweDt9XHJcbi5tLXItMTIwIHttYXJnaW4tcmlnaHQ6IDEyMHB4O31cclxuLm0tci0xMjEge21hcmdpbi1yaWdodDogMTIxcHg7fVxyXG4ubS1yLTEyMiB7bWFyZ2luLXJpZ2h0OiAxMjJweDt9XHJcbi5tLXItMTIzIHttYXJnaW4tcmlnaHQ6IDEyM3B4O31cclxuLm0tci0xMjQge21hcmdpbi1yaWdodDogMTI0cHg7fVxyXG4ubS1yLTEyNSB7bWFyZ2luLXJpZ2h0OiAxMjVweDt9XHJcbi5tLXItMTI2IHttYXJnaW4tcmlnaHQ6IDEyNnB4O31cclxuLm0tci0xMjcge21hcmdpbi1yaWdodDogMTI3cHg7fVxyXG4ubS1yLTEyOCB7bWFyZ2luLXJpZ2h0OiAxMjhweDt9XHJcbi5tLXItMTI5IHttYXJnaW4tcmlnaHQ6IDEyOXB4O31cclxuLm0tci0xMzAge21hcmdpbi1yaWdodDogMTMwcHg7fVxyXG4ubS1yLTEzMSB7bWFyZ2luLXJpZ2h0OiAxMzFweDt9XHJcbi5tLXItMTMyIHttYXJnaW4tcmlnaHQ6IDEzMnB4O31cclxuLm0tci0xMzMge21hcmdpbi1yaWdodDogMTMzcHg7fVxyXG4ubS1yLTEzNCB7bWFyZ2luLXJpZ2h0OiAxMzRweDt9XHJcbi5tLXItMTM1IHttYXJnaW4tcmlnaHQ6IDEzNXB4O31cclxuLm0tci0xMzYge21hcmdpbi1yaWdodDogMTM2cHg7fVxyXG4ubS1yLTEzNyB7bWFyZ2luLXJpZ2h0OiAxMzdweDt9XHJcbi5tLXItMTM4IHttYXJnaW4tcmlnaHQ6IDEzOHB4O31cclxuLm0tci0xMzkge21hcmdpbi1yaWdodDogMTM5cHg7fVxyXG4ubS1yLTE0MCB7bWFyZ2luLXJpZ2h0OiAxNDBweDt9XHJcbi5tLXItMTQxIHttYXJnaW4tcmlnaHQ6IDE0MXB4O31cclxuLm0tci0xNDIge21hcmdpbi1yaWdodDogMTQycHg7fVxyXG4ubS1yLTE0MyB7bWFyZ2luLXJpZ2h0OiAxNDNweDt9XHJcbi5tLXItMTQ0IHttYXJnaW4tcmlnaHQ6IDE0NHB4O31cclxuLm0tci0xNDUge21hcmdpbi1yaWdodDogMTQ1cHg7fVxyXG4ubS1yLTE0NiB7bWFyZ2luLXJpZ2h0OiAxNDZweDt9XHJcbi5tLXItMTQ3IHttYXJnaW4tcmlnaHQ6IDE0N3B4O31cclxuLm0tci0xNDgge21hcmdpbi1yaWdodDogMTQ4cHg7fVxyXG4ubS1yLTE0OSB7bWFyZ2luLXJpZ2h0OiAxNDlweDt9XHJcbi5tLXItMTUwIHttYXJnaW4tcmlnaHQ6IDE1MHB4O31cclxuLm0tci0xNTEge21hcmdpbi1yaWdodDogMTUxcHg7fVxyXG4ubS1yLTE1MiB7bWFyZ2luLXJpZ2h0OiAxNTJweDt9XHJcbi5tLXItMTUzIHttYXJnaW4tcmlnaHQ6IDE1M3B4O31cclxuLm0tci0xNTQge21hcmdpbi1yaWdodDogMTU0cHg7fVxyXG4ubS1yLTE1NSB7bWFyZ2luLXJpZ2h0OiAxNTVweDt9XHJcbi5tLXItMTU2IHttYXJnaW4tcmlnaHQ6IDE1NnB4O31cclxuLm0tci0xNTcge21hcmdpbi1yaWdodDogMTU3cHg7fVxyXG4ubS1yLTE1OCB7bWFyZ2luLXJpZ2h0OiAxNThweDt9XHJcbi5tLXItMTU5IHttYXJnaW4tcmlnaHQ6IDE1OXB4O31cclxuLm0tci0xNjAge21hcmdpbi1yaWdodDogMTYwcHg7fVxyXG4ubS1yLTE2MSB7bWFyZ2luLXJpZ2h0OiAxNjFweDt9XHJcbi5tLXItMTYyIHttYXJnaW4tcmlnaHQ6IDE2MnB4O31cclxuLm0tci0xNjMge21hcmdpbi1yaWdodDogMTYzcHg7fVxyXG4ubS1yLTE2NCB7bWFyZ2luLXJpZ2h0OiAxNjRweDt9XHJcbi5tLXItMTY1IHttYXJnaW4tcmlnaHQ6IDE2NXB4O31cclxuLm0tci0xNjYge21hcmdpbi1yaWdodDogMTY2cHg7fVxyXG4ubS1yLTE2NyB7bWFyZ2luLXJpZ2h0OiAxNjdweDt9XHJcbi5tLXItMTY4IHttYXJnaW4tcmlnaHQ6IDE2OHB4O31cclxuLm0tci0xNjkge21hcmdpbi1yaWdodDogMTY5cHg7fVxyXG4ubS1yLTE3MCB7bWFyZ2luLXJpZ2h0OiAxNzBweDt9XHJcbi5tLXItMTcxIHttYXJnaW4tcmlnaHQ6IDE3MXB4O31cclxuLm0tci0xNzIge21hcmdpbi1yaWdodDogMTcycHg7fVxyXG4ubS1yLTE3MyB7bWFyZ2luLXJpZ2h0OiAxNzNweDt9XHJcbi5tLXItMTc0IHttYXJnaW4tcmlnaHQ6IDE3NHB4O31cclxuLm0tci0xNzUge21hcmdpbi1yaWdodDogMTc1cHg7fVxyXG4ubS1yLTE3NiB7bWFyZ2luLXJpZ2h0OiAxNzZweDt9XHJcbi5tLXItMTc3IHttYXJnaW4tcmlnaHQ6IDE3N3B4O31cclxuLm0tci0xNzgge21hcmdpbi1yaWdodDogMTc4cHg7fVxyXG4ubS1yLTE3OSB7bWFyZ2luLXJpZ2h0OiAxNzlweDt9XHJcbi5tLXItMTgwIHttYXJnaW4tcmlnaHQ6IDE4MHB4O31cclxuLm0tci0xODEge21hcmdpbi1yaWdodDogMTgxcHg7fVxyXG4ubS1yLTE4MiB7bWFyZ2luLXJpZ2h0OiAxODJweDt9XHJcbi5tLXItMTgzIHttYXJnaW4tcmlnaHQ6IDE4M3B4O31cclxuLm0tci0xODQge21hcmdpbi1yaWdodDogMTg0cHg7fVxyXG4ubS1yLTE4NSB7bWFyZ2luLXJpZ2h0OiAxODVweDt9XHJcbi5tLXItMTg2IHttYXJnaW4tcmlnaHQ6IDE4NnB4O31cclxuLm0tci0xODcge21hcmdpbi1yaWdodDogMTg3cHg7fVxyXG4ubS1yLTE4OCB7bWFyZ2luLXJpZ2h0OiAxODhweDt9XHJcbi5tLXItMTg5IHttYXJnaW4tcmlnaHQ6IDE4OXB4O31cclxuLm0tci0xOTAge21hcmdpbi1yaWdodDogMTkwcHg7fVxyXG4ubS1yLTE5MSB7bWFyZ2luLXJpZ2h0OiAxOTFweDt9XHJcbi5tLXItMTkyIHttYXJnaW4tcmlnaHQ6IDE5MnB4O31cclxuLm0tci0xOTMge21hcmdpbi1yaWdodDogMTkzcHg7fVxyXG4ubS1yLTE5NCB7bWFyZ2luLXJpZ2h0OiAxOTRweDt9XHJcbi5tLXItMTk1IHttYXJnaW4tcmlnaHQ6IDE5NXB4O31cclxuLm0tci0xOTYge21hcmdpbi1yaWdodDogMTk2cHg7fVxyXG4ubS1yLTE5NyB7bWFyZ2luLXJpZ2h0OiAxOTdweDt9XHJcbi5tLXItMTk4IHttYXJnaW4tcmlnaHQ6IDE5OHB4O31cclxuLm0tci0xOTkge21hcmdpbi1yaWdodDogMTk5cHg7fVxyXG4ubS1yLTIwMCB7bWFyZ2luLXJpZ2h0OiAyMDBweDt9XHJcbi5tLXItMjAxIHttYXJnaW4tcmlnaHQ6IDIwMXB4O31cclxuLm0tci0yMDIge21hcmdpbi1yaWdodDogMjAycHg7fVxyXG4ubS1yLTIwMyB7bWFyZ2luLXJpZ2h0OiAyMDNweDt9XHJcbi5tLXItMjA0IHttYXJnaW4tcmlnaHQ6IDIwNHB4O31cclxuLm0tci0yMDUge21hcmdpbi1yaWdodDogMjA1cHg7fVxyXG4ubS1yLTIwNiB7bWFyZ2luLXJpZ2h0OiAyMDZweDt9XHJcbi5tLXItMjA3IHttYXJnaW4tcmlnaHQ6IDIwN3B4O31cclxuLm0tci0yMDgge21hcmdpbi1yaWdodDogMjA4cHg7fVxyXG4ubS1yLTIwOSB7bWFyZ2luLXJpZ2h0OiAyMDlweDt9XHJcbi5tLXItMjEwIHttYXJnaW4tcmlnaHQ6IDIxMHB4O31cclxuLm0tci0yMTEge21hcmdpbi1yaWdodDogMjExcHg7fVxyXG4ubS1yLTIxMiB7bWFyZ2luLXJpZ2h0OiAyMTJweDt9XHJcbi5tLXItMjEzIHttYXJnaW4tcmlnaHQ6IDIxM3B4O31cclxuLm0tci0yMTQge21hcmdpbi1yaWdodDogMjE0cHg7fVxyXG4ubS1yLTIxNSB7bWFyZ2luLXJpZ2h0OiAyMTVweDt9XHJcbi5tLXItMjE2IHttYXJnaW4tcmlnaHQ6IDIxNnB4O31cclxuLm0tci0yMTcge21hcmdpbi1yaWdodDogMjE3cHg7fVxyXG4ubS1yLTIxOCB7bWFyZ2luLXJpZ2h0OiAyMThweDt9XHJcbi5tLXItMjE5IHttYXJnaW4tcmlnaHQ6IDIxOXB4O31cclxuLm0tci0yMjAge21hcmdpbi1yaWdodDogMjIwcHg7fVxyXG4ubS1yLTIyMSB7bWFyZ2luLXJpZ2h0OiAyMjFweDt9XHJcbi5tLXItMjIyIHttYXJnaW4tcmlnaHQ6IDIyMnB4O31cclxuLm0tci0yMjMge21hcmdpbi1yaWdodDogMjIzcHg7fVxyXG4ubS1yLTIyNCB7bWFyZ2luLXJpZ2h0OiAyMjRweDt9XHJcbi5tLXItMjI1IHttYXJnaW4tcmlnaHQ6IDIyNXB4O31cclxuLm0tci0yMjYge21hcmdpbi1yaWdodDogMjI2cHg7fVxyXG4ubS1yLTIyNyB7bWFyZ2luLXJpZ2h0OiAyMjdweDt9XHJcbi5tLXItMjI4IHttYXJnaW4tcmlnaHQ6IDIyOHB4O31cclxuLm0tci0yMjkge21hcmdpbi1yaWdodDogMjI5cHg7fVxyXG4ubS1yLTIzMCB7bWFyZ2luLXJpZ2h0OiAyMzBweDt9XHJcbi5tLXItMjMxIHttYXJnaW4tcmlnaHQ6IDIzMXB4O31cclxuLm0tci0yMzIge21hcmdpbi1yaWdodDogMjMycHg7fVxyXG4ubS1yLTIzMyB7bWFyZ2luLXJpZ2h0OiAyMzNweDt9XHJcbi5tLXItMjM0IHttYXJnaW4tcmlnaHQ6IDIzNHB4O31cclxuLm0tci0yMzUge21hcmdpbi1yaWdodDogMjM1cHg7fVxyXG4ubS1yLTIzNiB7bWFyZ2luLXJpZ2h0OiAyMzZweDt9XHJcbi5tLXItMjM3IHttYXJnaW4tcmlnaHQ6IDIzN3B4O31cclxuLm0tci0yMzgge21hcmdpbi1yaWdodDogMjM4cHg7fVxyXG4ubS1yLTIzOSB7bWFyZ2luLXJpZ2h0OiAyMzlweDt9XHJcbi5tLXItMjQwIHttYXJnaW4tcmlnaHQ6IDI0MHB4O31cclxuLm0tci0yNDEge21hcmdpbi1yaWdodDogMjQxcHg7fVxyXG4ubS1yLTI0MiB7bWFyZ2luLXJpZ2h0OiAyNDJweDt9XHJcbi5tLXItMjQzIHttYXJnaW4tcmlnaHQ6IDI0M3B4O31cclxuLm0tci0yNDQge21hcmdpbi1yaWdodDogMjQ0cHg7fVxyXG4ubS1yLTI0NSB7bWFyZ2luLXJpZ2h0OiAyNDVweDt9XHJcbi5tLXItMjQ2IHttYXJnaW4tcmlnaHQ6IDI0NnB4O31cclxuLm0tci0yNDcge21hcmdpbi1yaWdodDogMjQ3cHg7fVxyXG4ubS1yLTI0OCB7bWFyZ2luLXJpZ2h0OiAyNDhweDt9XHJcbi5tLXItMjQ5IHttYXJnaW4tcmlnaHQ6IDI0OXB4O31cclxuLm0tci0yNTAge21hcmdpbi1yaWdodDogMjUwcHg7fVxyXG4ubS1sLXItYXV0byB7bWFyZ2luLWxlZnQ6IGF1dG87XHRtYXJnaW4tcmlnaHQ6IGF1dG87fVxyXG4ubS1sLWF1dG8ge21hcmdpbi1sZWZ0OiBhdXRvO31cclxuLm0tci1hdXRvIHttYXJnaW4tcmlnaHQ6IGF1dG87fVxyXG5cclxuXHJcblxyXG4vKlsgVEVYVCBdXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4udGV4dC13aGl0ZSB7Y29sb3I6IHdoaXRlO31cclxuLnRleHQtYmxhY2sge2NvbG9yOiBibGFjazt9XHJcblxyXG4udGV4dC1ob3Ytd2hpdGU6aG92ZXIge2NvbG9yOiB3aGl0ZTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLnRleHQtdXAge3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi50ZXh0LWNlbnRlciB7dGV4dC1hbGlnbjogY2VudGVyO31cclxuLnRleHQtbGVmdCB7dGV4dC1hbGlnbjogbGVmdDt9XHJcbi50ZXh0LXJpZ2h0IHt0ZXh0LWFsaWduOiByaWdodDt9XHJcbi50ZXh0LW1pZGRsZSB7dmVydGljYWwtYWxpZ246IG1pZGRsZTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmxoLTEtMCB7bGluZS1oZWlnaHQ6IDEuMDt9XHJcbi5saC0xLTEge2xpbmUtaGVpZ2h0OiAxLjE7fVxyXG4ubGgtMS0yIHtsaW5lLWhlaWdodDogMS4yO31cclxuLmxoLTEtMyB7bGluZS1oZWlnaHQ6IDEuMzt9XHJcbi5saC0xLTQge2xpbmUtaGVpZ2h0OiAxLjQ7fVxyXG4ubGgtMS01IHtsaW5lLWhlaWdodDogMS41O31cclxuLmxoLTEtNiB7bGluZS1oZWlnaHQ6IDEuNjt9XHJcbi5saC0xLTcge2xpbmUtaGVpZ2h0OiAxLjc7fVxyXG4ubGgtMS04IHtsaW5lLWhlaWdodDogMS44O31cclxuLmxoLTEtOSB7bGluZS1oZWlnaHQ6IDEuOTt9XHJcbi5saC0yLTAge2xpbmUtaGVpZ2h0OiAyLjA7fVxyXG4ubGgtMi0xIHtsaW5lLWhlaWdodDogMi4xO31cclxuLmxoLTItMiB7bGluZS1oZWlnaHQ6IDIuMjt9XHJcbi5saC0yLTMge2xpbmUtaGVpZ2h0OiAyLjM7fVxyXG4ubGgtMi00IHtsaW5lLWhlaWdodDogMi40O31cclxuLmxoLTItNSB7bGluZS1oZWlnaHQ6IDIuNTt9XHJcbi5saC0yLTYge2xpbmUtaGVpZ2h0OiAyLjY7fVxyXG4ubGgtMi03IHtsaW5lLWhlaWdodDogMi43O31cclxuLmxoLTItOCB7bGluZS1oZWlnaHQ6IDIuODt9XHJcbi5saC0yLTkge2xpbmUtaGVpZ2h0OiAyLjk7fVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qWyBTSEFQRSBdXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiovXHJcblxyXG4vKlsgRGlzcGxheSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5kaXMtbm9uZSB7ZGlzcGxheTogbm9uZTt9XHJcbi5kaXMtYmxvY2sge2Rpc3BsYXk6IGJsb2NrO31cclxuLmRpcy1pbmxpbmUge2Rpc3BsYXk6IGlubGluZTt9XHJcbi5kaXMtaW5saW5lLWJsb2NrIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7fVxyXG4uZGlzLWZsZXgge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vKlsgUG9zaXRpb24gXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4ucG9zLXJlbGF0aXZlIHtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ucG9zLWFic29sdXRlIHtwb3NpdGlvbjogYWJzb2x1dGU7fVxyXG4ucG9zLWZpeGVkIHtwb3NpdGlvbjogZml4ZWQ7fVxyXG5cclxuLypbIGZsb2F0IF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLmZsb2F0LWwge2Zsb2F0OiBsZWZ0O31cclxuLmZsb2F0LXIge2Zsb2F0OiByaWdodDt9XHJcblxyXG5cclxuLypbIFdpZHRoICYgSGVpZ2h0IF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLnNpemVmdWxsIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnctZnVsbCB7d2lkdGg6IDEwMCU7fVxyXG4uaC1mdWxsIHtoZWlnaHQ6IDEwMCU7fVxyXG4ubWF4LXctZnVsbCB7bWF4LXdpZHRoOiAxMDAlO31cclxuLm1heC1oLWZ1bGwge21heC1oZWlnaHQ6IDEwMCU7fVxyXG4ubWluLXctZnVsbCB7bWluLXdpZHRoOiAxMDAlO31cclxuLm1pbi1oLWZ1bGwge21pbi1oZWlnaHQ6IDEwMCU7fVxyXG5cclxuLypbIFRvcCBCb3R0b20gTGVmdCBSaWdodCBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50b3AtMCB7dG9wOiAwO31cclxuLmJvdHRvbS0wIHtib3R0b206IDA7fVxyXG4ubGVmdC0wIHtsZWZ0OiAwO31cclxuLnJpZ2h0LTAge3JpZ2h0OiAwO31cclxuXHJcbi50b3AtYXV0byB7dG9wOiBhdXRvO31cclxuLmJvdHRvbS1hdXRvIHtib3R0b206IGF1dG87fVxyXG4ubGVmdC1hdXRvIHtsZWZ0OiBhdXRvO31cclxuLnJpZ2h0LWF1dG8ge3JpZ2h0OiBhdXRvO31cclxuXHJcblxyXG4vKlsgT3BhY2l0eSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5vcC0wLTAge29wYWNpdHk6IDA7fVxyXG4ub3AtMC0xIHtvcGFjaXR5OiAwLjE7fVxyXG4ub3AtMC0yIHtvcGFjaXR5OiAwLjI7fVxyXG4ub3AtMC0zIHtvcGFjaXR5OiAwLjM7fVxyXG4ub3AtMC00IHtvcGFjaXR5OiAwLjQ7fVxyXG4ub3AtMC01IHtvcGFjaXR5OiAwLjU7fVxyXG4ub3AtMC02IHtvcGFjaXR5OiAwLjY7fVxyXG4ub3AtMC03IHtvcGFjaXR5OiAwLjc7fVxyXG4ub3AtMC04IHtvcGFjaXR5OiAwLjg7fVxyXG4ub3AtMC05IHtvcGFjaXR5OiAwLjk7fVxyXG4ub3AtMS0wIHtvcGFjaXR5OiAxO31cclxuXHJcbi8qWyBCYWNrZ3JvdW5kIF1cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuLmJnd2hpdGUge2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cclxuLmJnYmxhY2sge2JhY2tncm91bmQtY29sb3I6IGJsYWNrO31cclxuXHJcblxyXG5cclxuLypbIFdyYXAgUGljdHVyZSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi53cmFwLXBpYy13IGltZyB7d2lkdGg6IDEwMCU7fVxyXG4ud3JhcC1waWMtbWF4LXcgaW1nIHttYXgtd2lkdGg6IDEwMCU7fVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi53cmFwLXBpYy1oIGltZyB7aGVpZ2h0OiAxMDAlO31cclxuLndyYXAtcGljLW1heC1oIGltZyB7bWF4LWhlaWdodDogMTAwJTt9XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLndyYXAtcGljLWNpciB7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndyYXAtcGljLWNpciBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyBIb3ZlciBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5ob3YtcG9pbnRlcjpob3ZlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uaG92LWltZy16b29tIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ob3YtaW1nLXpvb20gaW1ne1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNnM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cztcclxufVxyXG4uaG92LWltZy16b29tOmhvdmVyIGltZyB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyAgXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4uYm8tY2lyIHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG5cclxuLm9mLWhpZGRlbiB7b3ZlcmZsb3c6IGhpZGRlbjt9XHJcblxyXG4udmlzaWJsZS1mYWxzZSB7dmlzaWJpbGl0eTogaGlkZGVuO31cclxuLnZpc2libGUtdHJ1ZSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XHJcblxyXG5cclxuXHJcblxyXG4vKlsgVHJhbnNpdGlvbiBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi50cmFucy0wLTEge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcclxufVxyXG4udHJhbnMtMC0yIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuLnRyYW5zLTAtMyB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi50cmFucy0wLTQge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4udHJhbnMtMC01IHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLnRyYW5zLTAtNiB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC42cztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzO1xyXG59XHJcbi50cmFucy0wLTkge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC45cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuOXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC45cztcclxufVxyXG4udHJhbnMtMS0wIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAxcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qWyBMYXlvdXQgXVxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4qL1xyXG5cclxuLypbIEZsZXggXVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtdyB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XHJcblx0LW1vei1mbGV4LXdyYXA6IHdyYXA7XHJcblx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHQtby1mbGV4LXdyYXA6IHdyYXA7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtbCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxleC1yIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmxleC1jIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtc2Ege1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZmxleC1zYiB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLmZsZXgtdCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZmxleC1iIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtc3RyIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZmxleC1yb3cge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZmxleC1yb3ctcmV2IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbi5mbGV4LWNvbCB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yZXYge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mbGV4LWMtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtYy10IHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWMtYiB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5mbGV4LWMtc3RyIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5mbGV4LWwtbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LXItbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1zYS1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1zYi1tIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5mbGV4LWNvbC1sIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXgtY29sLWMge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1sLW0ge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtY29sLXItbSB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1jLW0ge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1zdHIge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHQtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLmZsZXgtY29sLXNiIHtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcblx0ZGlzcGxheTogLW1vei1ib3g7XHJcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4uZmxleC1jb2wtcmV2LWwge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mbGV4LWNvbC1yZXYtciB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmxleC1jb2wtcmV2LWMge1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuXHRkaXNwbGF5OiAtbW96LWJveDtcclxuXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1jb2wtcmV2LXN0ciB7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0ZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG5cdGRpc3BsYXk6IC1tb3otYm94O1xyXG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHQtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cdC1tcy1hbGlnbi1pdGVtczogc3RyZXRjaDtcclxuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuXHJcbi8qWyBBYnNvbHV0ZSBdXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbi5hYi1jLW0ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmFiLWMtdCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDUwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbn1cclxuXHJcbi5hYi1jLWIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDBweDtcclxuXHRsZWZ0OiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG4uYWItbC1tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogNTAlO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIFx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLmFiLXItbSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwcHg7XHJcblx0dG9wOiA1MCU7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgXHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG4uYWItdC1sIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogMHB4O1xyXG59XHJcblxyXG4uYWItdC1yIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDBweDtcclxuXHR0b3A6IDBweDtcclxufVxyXG5cclxuLmFiLWItbCB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDBweDtcclxuXHRib3R0b206IDBweDtcclxufVxyXG5cclxuLmFiLWItciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwcHg7XHJcblx0Ym90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "XBfQ":
/*!*********************************************!*\
  !*** ./src/app/services/vacunas.service.ts ***!
  \*********************************************/
/*! exports provided: VacunasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunasService", function() { return VacunasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _interfaces_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/interface */ "n+Y7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class VacunasService {
    constructor(http) {
        this.http = http;
    }
    getVacunas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunados`);
    }
    getListadoVacunas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas/listado`);
    }
    // para capturar la cedula si esta registrado //
    getVacunaCedula(cedula) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas/cedula/${cedula}`);
    }
    // para capturar verificar la cedula en el QR //
    getQRVacunaCedula(cedula) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas/qr/${cedula}`);
    }
    getVacuna(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunados/${id}`);
    }
    saveVacunas(vacunas) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunados`, vacunas);
    }
    updateVacuna(id, updatedVacuna) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunados/${id}`, updatedVacuna);
    }
    updateDosis2(id, updatedVacuna) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas/dosis/${id}`, updatedVacuna);
    }
    deleteVacuna(id) {
        return this.http.delete(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunados/${id}`);
    }
    // API PARA VACUNAS PERDIDAS //
    getVacunaPerdidas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas_perdidas`);
    }
    getVacunaPerdida(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas_perdidas/${id}`);
    }
    saveVacunasPerdidas(vacunas) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas_perdidas`, vacunas);
    }
    updateVacunaPerdidas(id, updatedVacuna) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas_perdidas/${id}`, updatedVacuna);
    }
    ////// REPORTES ///
    reporteVacunasEdadGeneral() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas/reportes/edad/general`);
    }
    reporteVacunasEdadEstado(estado_id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas/reportes/edad/estadal/${estado_id}`);
    }
    VacunadosExcelTodos() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/vacunas/excel/todos`);
    }
}
VacunasService.ɵfac = function VacunasService_Factory(t) { return new (t || VacunasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
VacunasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VacunasService, factory: VacunasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VacunasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/inicio-admin/inicio-admin.component */ "6PkB");
/* harmony import */ var _components_admin_vacunas_vacunas_admin_list_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/vacunas/vacunas-admin-list/vacunas-admin-list.component */ "62PF");
/* harmony import */ var _components_admin_vacunas_vacunas_admin_form_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/vacunas/vacunas-admin-form/vacunas-admin-form.component */ "rOmV");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var _components_templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _components_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _components_admin_usuarios_usuarios_admin_form_usuarios_admin_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/usuarios/usuarios-admin-form/usuarios-admin-form.component */ "o3Dw");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_admin_usuarios_usuarios_admin_list_usuarios_admin_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/usuarios/usuarios-admin-list/usuarios-admin-list.component */ "R1DC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_admin_centrosalud_centro_salud_admin_form_centro_salud_admin_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/centrosalud/centro-salud-admin-form/centro-salud-admin-form.component */ "KZSZ");
/* harmony import */ var _components_admin_centrosalud_centro_salud_admin_list_centro_salud_admin_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/admin/centrosalud/centro-salud-admin-list/centro-salud-admin-list.component */ "82kC");
/* harmony import */ var _components_admin_reportes_reportes_general_admin_reportes_general_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/reportes/reportes-general-admin/reportes-general-admin.component */ "KO7Z");
/* harmony import */ var _components_admin_tipovacunas_tipo_vacunas_admin_list_tipo_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin/tipovacunas/tipo-vacunas-admin-list/tipo-vacunas-admin-list.component */ "lzIU");
/* harmony import */ var _components_admin_tipovacunas_tipo_vacunas_admin_form_tipo_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin/tipovacunas/tipo-vacunas-admin-form/tipo-vacunas-admin-form.component */ "gPZL");
/* harmony import */ var _components_publico_qrlist_public_qrlist_public_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/publico/qrlist-public/qrlist-public.component */ "nyDN");
/* harmony import */ var _admin_components_vacunas_vacunas_perdidas_admin_list_vacunas_perdidas_admin_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/components/vacunas/vacunas-perdidas-admin-list/vacunas-perdidas-admin-list.component */ "4qKO");
/* harmony import */ var _admin_components_vacunas_vacunas_perdidas_admin_form_vacunas_perdidas_admin_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/components/vacunas/vacunas-perdidas-admin-form/vacunas-perdidas-admin-form.component */ "TRWN");
/* harmony import */ var _components_templates_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/templates/menu/menu-general/menu-general.component */ "8P1x");
/* harmony import */ var _components_templates_menu_menu_registrador_menu_registrador_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/templates/menu/menu-registrador/menu-registrador.component */ "Gh79");
/* harmony import */ var _components_templates_reportes_reporte_general_reporte_general_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/templates/reportes/reporte-general/reporte-general.component */ "rjND");
/* harmony import */ var _components_templates_menu_menu_visor_menu_visor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/templates/menu/menu-visor/menu-visor.component */ "i9JK");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__["NgxQRCodeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_6__["InicioAdminComponent"],
        _components_admin_vacunas_vacunas_admin_list_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_7__["VacunasAdminListComponent"],
        _components_admin_vacunas_vacunas_admin_form_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_8__["VacunasAdminFormComponent"],
        _components_templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_10__["MenuAdminComponent"],
        _components_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
        _components_admin_usuarios_usuarios_admin_form_usuarios_admin_form_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosAdminFormComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _components_admin_usuarios_usuarios_admin_list_usuarios_admin_list_component__WEBPACK_IMPORTED_MODULE_16__["UsuariosAdminListComponent"],
        _components_admin_centrosalud_centro_salud_admin_form_centro_salud_admin_form_component__WEBPACK_IMPORTED_MODULE_18__["CentroSaludAdminFormComponent"],
        _components_admin_centrosalud_centro_salud_admin_list_centro_salud_admin_list_component__WEBPACK_IMPORTED_MODULE_19__["CentroSaludAdminListComponent"],
        _components_admin_reportes_reportes_general_admin_reportes_general_admin_component__WEBPACK_IMPORTED_MODULE_20__["ReportesGeneralAdminComponent"],
        _components_admin_tipovacunas_tipo_vacunas_admin_list_tipo_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_21__["TipoVacunasAdminListComponent"],
        _components_admin_tipovacunas_tipo_vacunas_admin_form_tipo_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_22__["TipoVacunasAdminFormComponent"],
        _components_publico_qrlist_public_qrlist_public_component__WEBPACK_IMPORTED_MODULE_23__["QRListPublicComponent"],
        _admin_components_vacunas_vacunas_perdidas_admin_list_vacunas_perdidas_admin_list_component__WEBPACK_IMPORTED_MODULE_24__["VacunasPerdidasAdminListComponent"],
        _admin_components_vacunas_vacunas_perdidas_admin_form_vacunas_perdidas_admin_form_component__WEBPACK_IMPORTED_MODULE_25__["VacunasPerdidasAdminFormComponent"],
        _components_templates_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_26__["MenuGeneralComponent"],
        _components_templates_menu_menu_registrador_menu_registrador_component__WEBPACK_IMPORTED_MODULE_27__["MenuRegistradorComponent"],
        _components_templates_reportes_reporte_general_reporte_general_component__WEBPACK_IMPORTED_MODULE_28__["ReporteGeneralComponent"],
        _components_templates_menu_menu_visor_menu_visor_component__WEBPACK_IMPORTED_MODULE_29__["MenuVisorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__["NgxQRCodeModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_6__["InicioAdminComponent"],
                    _components_admin_vacunas_vacunas_admin_list_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_7__["VacunasAdminListComponent"],
                    _components_admin_vacunas_vacunas_admin_form_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_8__["VacunasAdminFormComponent"],
                    _components_templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_10__["MenuAdminComponent"],
                    _components_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                    _components_admin_usuarios_usuarios_admin_form_usuarios_admin_form_component__WEBPACK_IMPORTED_MODULE_12__["UsuariosAdminFormComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _components_admin_usuarios_usuarios_admin_list_usuarios_admin_list_component__WEBPACK_IMPORTED_MODULE_16__["UsuariosAdminListComponent"],
                    _components_admin_centrosalud_centro_salud_admin_form_centro_salud_admin_form_component__WEBPACK_IMPORTED_MODULE_18__["CentroSaludAdminFormComponent"],
                    _components_admin_centrosalud_centro_salud_admin_list_centro_salud_admin_list_component__WEBPACK_IMPORTED_MODULE_19__["CentroSaludAdminListComponent"],
                    _components_admin_reportes_reportes_general_admin_reportes_general_admin_component__WEBPACK_IMPORTED_MODULE_20__["ReportesGeneralAdminComponent"],
                    _components_admin_tipovacunas_tipo_vacunas_admin_list_tipo_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_21__["TipoVacunasAdminListComponent"],
                    _components_admin_tipovacunas_tipo_vacunas_admin_form_tipo_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_22__["TipoVacunasAdminFormComponent"],
                    _components_publico_qrlist_public_qrlist_public_component__WEBPACK_IMPORTED_MODULE_23__["QRListPublicComponent"],
                    _admin_components_vacunas_vacunas_perdidas_admin_list_vacunas_perdidas_admin_list_component__WEBPACK_IMPORTED_MODULE_24__["VacunasPerdidasAdminListComponent"],
                    _admin_components_vacunas_vacunas_perdidas_admin_form_vacunas_perdidas_admin_form_component__WEBPACK_IMPORTED_MODULE_25__["VacunasPerdidasAdminFormComponent"],
                    _components_templates_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_26__["MenuGeneralComponent"],
                    _components_templates_menu_menu_registrador_menu_registrador_component__WEBPACK_IMPORTED_MODULE_27__["MenuRegistradorComponent"],
                    _components_templates_reportes_reporte_general_reporte_general_component__WEBPACK_IMPORTED_MODULE_28__["ReporteGeneralComponent"],
                    _components_templates_menu_menu_visor_menu_visor_component__WEBPACK_IMPORTED_MODULE_29__["MenuVisorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__["NgxQRCodeModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"]
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fJTj":
/*!***********************************************!*\
  !*** ./src/app/services/combolist.service.ts ***!
  \***********************************************/
/*! exports provided: CombolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombolistService", function() { return CombolistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _interfaces_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/interface */ "n+Y7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CombolistService {
    constructor(http) {
        this.http = http;
    }
    //API CENTRO DE SALUD //
    // API CENTRO SALUD //
    getTodosCentrosSalud() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/centro_salud`);
    }
    getTodosCentroSalud() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/centro_salud_list`);
    }
    getCentroSalud(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/centro_salud/${id}`);
    }
    getCentroSaludEstados(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/centro_salud_estados/${id}`);
    }
    saveCentroSalud(centrosalud) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/centro_salud`, centrosalud);
    }
    updateCentroSalud(id, updatedCentroSalud) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/centro_salud/${id}`, updatedCentroSalud);
    }
    deleteCentroSalud(id) {
        return this.http.delete(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/centro_salud/${id}`);
    }
    // COMBO LIST// 
    getEstados() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/estados`);
    }
    getMunicipios() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/municipios`);
    }
    getEtnias() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/etnias`);
    }
    getParroquias() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/parroquias`);
    }
    getPueblosIndigenas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/pueblo_indigenas`);
    }
    getGruposEspeciales() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/grupo_especiales`);
    }
    // AQUI TERMINAN LOS COMBO LIST //
    // CRUD DE TIPOS DE VACUNAS //
    getTiposVacunas() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/tipo_vacunas`);
    }
    getTiposVacuna(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/tipo_vacunas/${id}`);
    }
    saveTiposVacunas(TiposVacuna) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/tipo_vacunas`, TiposVacuna);
    }
    updateTiposVacunas(id, updatedTiposVacunas) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/tipo_vacunas/${id}`, updatedTiposVacunas);
    }
    deleteTiposVacunas(id) {
        return this.http.delete(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_1__["API_URI"]}/tipo_vacunas/${id}`);
    }
}
CombolistService.ɵfac = function CombolistService_Factory(t) { return new (t || CombolistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CombolistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CombolistService, factory: CombolistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CombolistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "g1/Y":
/*!*******************************************!*\
  !*** ./src/app/services/excel.service.ts ***!
  \*******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(json);
        console.log('worksheet', worksheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gPZL":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/admin/tipovacunas/tipo-vacunas-admin-form/tipo-vacunas-admin-form.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TipoVacunasAdminFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoVacunasAdminFormComponent", function() { return TipoVacunasAdminFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function TipoVacunasAdminFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre de Vacuna es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TipoVacunasAdminFormComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TipoVacunasAdminFormComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.GuardarTipoVacunas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TipoVacunasAdminFormComponent_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TipoVacunasAdminFormComponent_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.ActualizarTiposVacunas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TipoVacunasAdminFormComponent {
    constructor(activatedRoute, router, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.comboListService = comboListService;
        this.tipovacunas = [];
        this.edit = false;
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre_vacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        //this.fechaActual=new Date();
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        if (params.id) {
            this.comboListService.getTiposVacuna(params.id) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.tipovacunas = res;
                this.Form.patchValue({
                    nombre_vacuna: this.tipovacunas.nombre_vacuna,
                });
                this.edit = true;
            }, err => console.log(err));
        }
    }
    GuardarTipoVacunas() {
        this.comboListService.saveTiposVacunas(this.Form.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
    ActualizarTiposVacunas() {
        this.comboListService.updateTiposVacunas(this.tipovacunas.id, this.tipovacunas)
            .subscribe(res => {
            console.log('actualizando', res);
            this.router.navigate(['/tiposvacunas/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => {
            console.error(err);
            alert('Error!');
        });
    }
}
TipoVacunasAdminFormComponent.ɵfac = function TipoVacunasAdminFormComponent_Factory(t) { return new (t || TipoVacunasAdminFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"])); };
TipoVacunasAdminFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TipoVacunasAdminFormComponent, selectors: [["app-tipo-vacunas-admin-form"]], decls: 26, vars: 6, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar Nombre de Vacuna", "formControlName", "nombre_vacuna", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"]], template: function TipoVacunasAdminFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Formulario de Tipo de Vacunas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nombre de Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TipoVacunasAdminFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.tipovacunas.nombre_vacuna = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TipoVacunasAdminFormComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TipoVacunasAdminFormComponent_button_23_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TipoVacunasAdminFormComponent_button_24_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "footer", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["nombre_vacuna"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.tipovacunas.nombre_vacuna);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["nombre_vacuna"].touched && (ctx.Form.controls["nombre_vacuna"].errors == null ? null : ctx.Form.controls["nombre_vacuna"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aXBvLXZhY3VuYXMtYWRtaW4tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipoVacunasAdminFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tipo-vacunas-admin-form',
                templateUrl: './tipo-vacunas-admin-form.component.html',
                styleUrls: ['./tipo-vacunas-admin-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"] }]; }, null); })();


/***/ }),

/***/ "i9JK":
/*!******************************************************************************!*\
  !*** ./src/app/components/templates/menu/menu-visor/menu-visor.component.ts ***!
  \******************************************************************************/
/*! exports provided: MenuVisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuVisorComponent", function() { return MenuVisorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/vacunados/admin/form"]; };
const _c1 = function () { return ["/vacunados/admin/list"]; };
const _c2 = function () { return ["/vacunados/reportes/general/list"]; };
class MenuVisorComponent {
    constructor(auth) {
        this.auth = auth;
        this.VacunasMenu = false;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout();
    }
}
MenuVisorComponent.ɵfac = function MenuVisorComponent_Factory(t) { return new (t || MenuVisorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
MenuVisorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuVisorComponent, selectors: [["app-menu-visor"]], decls: 31, vars: 7, consts: [[1, "left", "side-menu"], ["id", "remove-scroll", 1, "slimscroll-menu"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu"], [1, "menu-title"], [1, "waves-effect", "mm-active", 3, "click"], [1, "dripicons-mail"], [1, "float-right", "menu-arrow"], [1, "mdi", "mdi-chevron-right"], [1, "submenu", "mm-collapse", 3, "ngClass"], [3, "routerLink"], [1, "waves-effect", 3, "routerLink"], [1, "dripicons-meter"], ["href", "javascript:void(0)", 1, "waves-effect", 3, "click"], [1, "clearfix"]], template: function MenuVisorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu Visor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuVisorComponent_Template_a_click_7_listener() { return ctx.VacunasMenu = !ctx.VacunasMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Vacunados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuVisorComponent_Template_a_click_26_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Cerrar Sesion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.VacunasMenu ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXZpc29yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuVisorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-visor',
                templateUrl: './menu-visor.component.html',
                styleUrls: ['./menu-visor.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "lzIU":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/admin/tipovacunas/tipo-vacunas-admin-list/tipo-vacunas-admin-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: TipoVacunasAdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoVacunasAdminListComponent", function() { return TipoVacunasAdminListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");












const _c0 = function (a1) { return ["/tiposvacunas/admin/edit", a1]; };
function TipoVacunasAdminListComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, tipo_r1.nombre_vacuna));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, tipo_r1.id));
} }
const _c1 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class TipoVacunasAdminListComponent {
    constructor(comboListService, auth, router) {
        this.comboListService = comboListService;
        this.auth = auth;
        this.router = router;
        this.vacunas = [];
        this.paginate = 1;
        this.usuarios = [];
    }
    ngOnInit() {
        this.getTiposVacunas();
        this.informacionUsuario();
    }
    informacionUsuario() {
        this.auth.profile().subscribe(res => {
            this.usuarios = res;
            // alert(this.usuarios.user.id);
            console.log('usuario data', res);
            //alert(`centro salud: ${this.usuarios.user.centro_salud_id}`);
            //alert(`id: ${this.usuarios.user.id}`)
            // this.Form.get('user_id').setValue(this.usuarios.user.id);
        }, err => {
            alert('Sesion Experiada..');
            this.router.navigateByUrl('/login');
        });
    }
    getTiposVacunas() {
        this.comboListService.getTiposVacunas().subscribe(res => {
            this.vacunas = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Error!', 'El servidor no esta activo, no podra ver los datos...', 'error');
            }
        });
    }
}
TipoVacunasAdminListComponent.ɵfac = function TipoVacunasAdminListComponent_Factory(t) { return new (t || TipoVacunasAdminListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TipoVacunasAdminListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TipoVacunasAdminListComponent, selectors: [["app-tipo-vacunas-admin-list"]], decls: 36, vars: 10, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], [1, "col-md-4"], [1, "float-right"], ["type", "text", "name", "filter", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "mt-0", "header-title"], [1, "table-rep-plugin"], ["data-pattern", "priority-columns", 1, "table-responsive", "b-0"], ["id", "tech-companies-1", 1, "table", "table-striped"], ["data-priority", "1"], [4, "ngFor", "ngForOf"], ["previousLabel", "Anterior", "nextLabel", "Siguiente", 3, "pageChange"], [1, "footer"], [1, "h-float"], ["src", "assets/iconos/editar.png", 1, "h-rotate-360", 3, "routerLink"]], template: function TipoVacunasAdminListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Listado de Tipos de Vacunas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TipoVacunasAdminListComponent_Template_input_ngModelChange_14_listener($event) { return ctx.filter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Listado de Tipos de Vacunas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tipos de Vacunas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Acci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TipoVacunasAdminListComponent_tr_31_Template, 7, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pagination-controls", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function TipoVacunasAdminListComponent_Template_pagination_controls_pageChange_34_listener($event) { return ctx.paginate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](32, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 5, ctx.vacunas, ctx.filter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.paginate)));
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_6__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aXBvLXZhY3VuYXMtYWRtaW4tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TipoVacunasAdminListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tipo-vacunas-admin-list',
                templateUrl: './tipo-vacunas-admin-list.component.html',
                styleUrls: ['./tipo-vacunas-admin-list.component.css']
            }]
    }], function () { return [{ type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_2__["CombolistService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "muLo":
/*!*******************************************************************!*\
  !*** ./src/app/components/templates/sidebar/sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SidebarComponent {
    constructor() { }
    ngOnInit() {
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("enlarged");
        });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 14, vars: 0, consts: [[1, "topbar"], [1, "topbar-left"], ["href", "index.html", 1, "logo"], ["id", "search-wrap", 1, "search-wrap"], [1, "search-bar"], ["type", "search", "placeholder", "Search", 1, "search-input"], ["href", "#", "data-target", "#search-wrap", 1, "close-search", "toggle-search"], [1, "mdi", "mdi-close-circle"], [1, "navbar-custom"], [1, "navbar-right", "list-inline", "float-right", "mb-0"], [1, "list-inline", "menu-left", "mb-0"], [1, "float-left"], [1, "button-menu-mobile", "open-left", "waves-effect"], [1, "mdi", "mdi-menu"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "n+Y7":
/*!*****************************************!*\
  !*** ./src/app/interfaces/interface.ts ***!
  \*****************************************/
/*! exports provided: API_URI, QR_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URI", function() { return API_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QR_URI", function() { return QR_URI; });
let API_URI = 'http://190.202.84.194/vacunaserver/public/api';
// export let API_URI = 'https://backend.vensalud.gob.ve/api';
//export let API_URI = 'http://127.0.0.1:8000/api';
//QR
//export let QR_URI = 'http://127.0.0.1:4200';
let QR_URI = 'http://190.202.84.194/vacunas';


/***/ }),

/***/ "nyDN":
/*!*****************************************************************************!*\
  !*** ./src/app/components/publico/qrlist-public/qrlist-public.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QRListPublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRListPublicComponent", function() { return QRListPublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function QRListPublicComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.vacunas[0].cedula));
} }
function QRListPublicComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.vacunas[0].nombres));
} }
function QRListPublicComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.vacunas[0].apellidos));
} }
function QRListPublicComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.vacunas[0].dosis1));
} }
function QRListPublicComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.vacunas[0].fecha_dosis1));
} }
function QRListPublicComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r5.vacunas[0].dosis2));
} }
function QRListPublicComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.vacunas[0].fecha_dosis2));
} }
function QRListPublicComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r7.vacunas[0].nombre_vacuna));
} }
function QRListPublicComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-qrcode", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorCorrectionLevel", ctx_r8.correctionLevel)("value", ctx_r8.valueqr);
} }
class QRListPublicComponent {
    constructor(activatedRoute, router, vacunasService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.vacunasService = vacunasService;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__["NgxQrcodeElementTypes"].URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__["NgxQrcodeErrorCorrectionLevels"].HIGH;
        this.valueqr = '';
        this.vacunas = [];
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        if (params.cedula) {
            this.vacunasService.getQRVacunaCedula(params.cedula) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.vacunas = res;
                this.vacunas.forEach(element => {
                    this.valueqr = `http://localhost:4200/vacunados/admin/list/` + element.cedula;
                    /* this.valueqr = `Cedula:  ` + element.cedula  + ".\n"
                     + "Dosis 1: "  + element.dosis1 + ".\n"
                     + "Fecha Dosis 1: " + element.fecha_dosis1 + ".\n"
                     + "Dosis 2: " + element.dosis2 + ".\n"
                     + "Fechas Dosis 2: " + element.fecha_dosis2 + ".\n"
                   */
                });
            }, err => console.log(err));
        }
    }
}
QRListPublicComponent.ɵfac = function QRListPublicComponent_Factory(t) { return new (t || QRListPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_3__["VacunasService"])); };
QRListPublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QRListPublicComponent, selectors: [["app-qrlist-public"]], decls: 43, vars: 9, consts: [[1, "limiter"], [1, "container-table100"], [1, "wrap-table100"], [1, "table"], [1, "row", "header"], ["colspan", "2", 1, "cell"], [1, "row"], [1, "font-weight-bold", "text-center"], ["class", "cell", 4, "ngIf"], [1, "cell"], ["alt", "Demo QR Code", "cssClass", "bshadow", 3, "errorCorrectionLevel", "value"]], template: function QRListPublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Listado de Vacunado QR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cedula:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QRListPublicComponent_div_10_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QRListPublicComponent_div_14_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Apellido:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QRListPublicComponent_div_18_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dosis 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QRListPublicComponent_div_22_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Fecha Dosis 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QRListPublicComponent_div_26_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dosis2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, QRListPublicComponent_div_30_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Fecha Dosis2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, QRListPublicComponent_div_34_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Vacuna:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, QRListPublicComponent_div_38_Template, 3, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Codigo QR:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, QRListPublicComponent_div_42_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas[0]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_1__["QrcodeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n      margin: 0px; \r\n      padding: 0px; \r\n      box-sizing: border-box;\r\n  }\r\n\r\n\r\n \r\n  body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n      height: 100%;\r\n      font-family: sans-serif;\r\n  }\r\n\r\n\r\n \r\n  \r\n\r\n\r\n \r\n  a[_ngcontent-%COMP%] {\r\n      margin: 0px;\r\n      transition: all 0.4s;\r\n      -webkit-transition: all 0.4s;\r\n    -o-transition: all 0.4s;\r\n    -moz-transition: all 0.4s;\r\n  }\r\n\r\n\r\n \r\n  a[_ngcontent-%COMP%]:focus {\r\n      outline: none !important;\r\n  }\r\n\r\n\r\n \r\n  a[_ngcontent-%COMP%]:hover {\r\n      text-decoration: none;\r\n  }\r\n\r\n\r\n \r\n  \r\n\r\n\r\n \r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {margin: 0px;}\r\n\r\n\r\n \r\n  p[_ngcontent-%COMP%] {margin: 0px;}\r\n\r\n\r\n \r\n  ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n      margin: 0px;\r\n      list-style-type: none;\r\n  }\r\n\r\n\r\n \r\n  \r\n\r\n\r\n \r\n  input[_ngcontent-%COMP%] {\r\n    display: block;\r\n      outline: none;\r\n      border: none !important;\r\n  }\r\n\r\n\r\n \r\n  textarea[_ngcontent-%COMP%] {\r\n    display: block;\r\n    outline: none;\r\n  }\r\n\r\n\r\n \r\n  textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\r\n    border-color: transparent !important;\r\n  }\r\n\r\n\r\n \r\n  \r\n\r\n\r\n \r\n  button[_ngcontent-%COMP%] {\r\n      outline: none !important;\r\n      border: none;\r\n      background: transparent;\r\n  }\r\n\r\n\r\n \r\n  button[_ngcontent-%COMP%]:hover {\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n \r\n  iframe[_ngcontent-%COMP%] {\r\n      border: none !important;\r\n  }\r\n\r\n\r\n \r\n  \r\n\r\n\r\n \r\n  .limiter[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n\r\n \r\n  .container-table100[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    background: #c4d3f6;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    padding: 33px 30px;\r\n  }\r\n\r\n\r\n \r\n  .wrap-table100[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n  }\r\n\r\n\r\n \r\n  .table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: table;\r\n    margin: 0;\r\n  }\r\n\r\n\r\n \r\n  @media screen and (max-width: 768px) {\r\n    .table[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n\r\n \r\n  .row[_ngcontent-%COMP%] {\r\n    display: table-row;\r\n    background: #fff;\r\n  }\r\n\r\n\r\n \r\n  .row.header[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    background: #6c7ae0;\r\n  }\r\n\r\n\r\n \r\n  @media screen and (max-width: 768px) {\r\n    .row[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  \r\n    .row.header[_ngcontent-%COMP%] {\r\n      padding: 0;\r\n      height: 0px;\r\n    }\r\n  \r\n    .row.header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\r\n      display: none;\r\n    }\r\n  \r\n    .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]:before {\r\n      font-family: Poppins-Bold;\r\n      font-size: 12px;\r\n      color: #808080;\r\n      line-height: 1.2;\r\n      text-transform: uppercase;\r\n      font-weight: unset !important;\r\n  \r\n      margin-bottom: 13px;\r\n      content: attr(data-title);\r\n      min-width: 98px;\r\n      display: block;\r\n    }\r\n  }\r\n\r\n\r\n \r\n  .cell[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n  }\r\n\r\n\r\n \r\n  @media screen and (max-width: 768px) {\r\n    .cell[_ngcontent-%COMP%] {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n\r\n \r\n  .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\r\n    font-family: Poppins-Regular;\r\n    font-size: 15px;\r\n    color: #666666;\r\n    line-height: 1.2;\r\n    font-weight: unset !important;\r\n  \r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    border-bottom: 1px solid #f2f2f2;\r\n  }\r\n\r\n\r\n \r\n  .row.header[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\r\n    font-family: Poppins-Regular;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    font-weight: unset !important;\r\n  \r\n    padding-top: 19px;\r\n    padding-bottom: 19px;\r\n  }\r\n\r\n\r\n \r\n  .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]:nth-child(1) {\r\n    width: 360px;\r\n    padding-left: 40px;\r\n  }\r\n\r\n\r\n \r\n  .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]:nth-child(2) {\r\n    width: 160px;\r\n  }\r\n\r\n\r\n \r\n  .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]:nth-child(3) {\r\n    width: 250px;\r\n  }\r\n\r\n\r\n \r\n  .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]:nth-child(4) {\r\n    width: 190px;\r\n  }\r\n\r\n\r\n \r\n  .table[_ngcontent-%COMP%], .row[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n  }\r\n\r\n\r\n \r\n  @media (max-width: 768px) {\r\n    .row[_ngcontent-%COMP%] {\r\n      border-bottom: 1px solid #f2f2f2;\r\n      padding-bottom: 18px;\r\n      padding-top: 30px;\r\n      padding-right: 15px;\r\n      margin: 0;\r\n    }\r\n    \r\n    .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\r\n      border: none;\r\n      padding-left: 30px;\r\n      padding-top: 16px;\r\n      padding-bottom: 16px;\r\n    }\r\n    .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%]:nth-child(1) {\r\n      padding-left: 30px;\r\n    }\r\n    \r\n    .row[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\r\n      font-family: Poppins-Regular;\r\n      font-size: 18px;\r\n      color: #555555;\r\n      line-height: 1.2;\r\n      font-weight: unset !important;\r\n    }\r\n  \r\n    .table[_ngcontent-%COMP%], .row[_ngcontent-%COMP%], .cell[_ngcontent-%COMP%] {\r\n      width: 100% !important;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFybGlzdC1wdWJsaWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO1NBQ1M7Ozs7RUFJUDtrQkFDZ0I7Ozs7RUFDaEI7TUFDSSxXQUFXO01BQ1gsWUFBWTtNQUNaLHNCQUFzQjtFQUMxQjs7OztFQUVBO01BQ0ksWUFBWTtNQUNaLHVCQUF1QjtFQUMzQjs7OztFQUVBLHlDQUF5Qzs7OztFQUN6QztNQUNJLFdBQVc7TUFDWCxvQkFBb0I7TUFDcEIsNEJBQTRCO0lBQzlCLHVCQUF1QjtJQUN2Qix5QkFBeUI7RUFDM0I7Ozs7RUFFQTtNQUNJLHdCQUF3QjtFQUM1Qjs7OztFQUVBO01BQ0kscUJBQXFCO0VBQ3pCOzs7O0VBRUEseUNBQXlDOzs7O0VBQ3pDLG1CQUFtQixXQUFXLENBQUM7Ozs7RUFFL0IsR0FBRyxXQUFXLENBQUM7Ozs7RUFFZjtNQUNJLFdBQVc7TUFDWCxxQkFBcUI7RUFDekI7Ozs7RUFHQSx5Q0FBeUM7Ozs7RUFDekM7SUFDRSxjQUFjO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtFQUMzQjs7OztFQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjs7OztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDOzs7O0VBRUEseUNBQXlDOzs7O0VBQ3pDO01BQ0ksd0JBQXdCO01BQ3hCLFlBQVk7TUFDWix1QkFBdUI7RUFDM0I7Ozs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7Ozs7RUFFQTtNQUNJLHVCQUF1QjtFQUMzQjs7OztFQUdBO1lBQ1U7Ozs7RUFFVjtJQUNFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOzs7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQU1uQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOzs7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjs7OztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxTQUFTO0VBQ1g7Ozs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGOzs7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOzs7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOzs7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxVQUFVO01BQ1YsV0FBVztJQUNiOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6Qiw2QkFBNkI7O01BRTdCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLGNBQWM7SUFDaEI7RUFDRjs7OztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOzs7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7OztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDZCQUE2Qjs7SUFFN0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7RUFDbEM7Ozs7RUFFQTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw2QkFBNkI7O0lBRTdCLGlCQUFpQjtJQUNqQixvQkFBb0I7RUFDdEI7Ozs7RUFFQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7Ozs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7OztFQUVBO0lBQ0UsWUFBWTtFQUNkOzs7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7Ozs7RUFHQTtJQUNFLHNCQUFzQjtFQUN4Qjs7OztFQUlBO0lBQ0U7TUFDRSxnQ0FBZ0M7TUFDaEMsb0JBQW9CO01BQ3BCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsU0FBUztJQUNYOztJQUVBO01BQ0UsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSw0QkFBNEI7TUFDNUIsZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsNkJBQTZCO0lBQy9COztJQUVBO01BQ0Usc0JBQXNCO0lBQ3hCO0VBQ0YiLCJmaWxlIjoicXJsaXN0LXB1YmxpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5bIEZPTlQgXSovXHJcblxyXG5cclxuIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBSRVNUWUxFIFRBRyBdKi9cclxuICAqIHtcclxuICAgICAgbWFyZ2luOiAwcHg7IFxyXG4gICAgICBwYWRkaW5nOiAwcHg7IFxyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5LCBodG1sIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgYSB7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgYTpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgaDEsaDIsaDMsaDQsaDUsaDYge21hcmdpbjogMHB4O31cclxuICBcclxuICBwIHttYXJnaW46IDBweDt9XHJcbiAgXHJcbiAgdWwsIGxpIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbiAgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpZnJhbWUge1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFRhYmxlIF0qL1xyXG4gIFxyXG4gIC5saW1pdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItdGFibGUxMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICNjNGQzZjY7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMzNweCAzMHB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcC10YWJsZTEwMCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudGFibGUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAucm93LmhlYWRlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM2YzdhZTA7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucm93IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucm93LmhlYWRlciB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdy5oZWFkZXIgLmNlbGwge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnJvdyAuY2VsbDpiZWZvcmUge1xyXG4gICAgICBmb250LWZhbWlseTogUG9wcGlucy1Cb2xkO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxuICBcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcclxuICAgICAgbWluLXdpZHRoOiA5OHB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNlbGwge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jZWxsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cgLmNlbGwge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGZvbnQtd2VpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xyXG4gIH1cclxuICBcclxuICAucm93LmhlYWRlciAuY2VsbCB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgZm9udC13ZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICBwYWRkaW5nLXRvcDogMTlweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxOXB4O1xyXG4gIH1cclxuICBcclxuICAucm93IC5jZWxsOm50aC1jaGlsZCgxKSB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cgLmNlbGw6bnRoLWNoaWxkKDIpIHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyAuY2VsbDpudGgtY2hpbGQoMykge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAucm93IC5jZWxsOm50aC1jaGlsZCg0KSB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50YWJsZSwgLnJvdyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuIFxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnJvdyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMThweDtcclxuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucm93IC5jZWxsOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJvdyAuY2VsbCB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICM1NTU1NTU7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRhYmxlLCAucm93LCAuY2VsbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QRListPublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qrlist-public',
                templateUrl: './qrlist-public.component.html',
                styleUrls: ['./qrlist-public.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_3__["VacunasService"] }]; }, null); })();


/***/ }),

/***/ "o3Dw":
/*!************************************************************************************************!*\
  !*** ./src/app/components/admin/usuarios/usuarios-admin-form/usuarios-admin-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UsuariosAdminFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosAdminFormComponent", function() { return UsuariosAdminFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../templates/menu/menu-admin/menu-admin.component */ "y+QU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function UsuariosAdminFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Correo Electronico es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tiene que ser un Correo Electronico valido, por favor... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contrase\u00F1a es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contrase\u00F1a es Minimo 5... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", estado_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estado_r13.estado);
} }
function UsuariosAdminFormComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Estado es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_div_46_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const municipio_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", municipio_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](municipio_r16.municipio);
} }
function UsuariosAdminFormComponent_div_46_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Municipio es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Municipios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminFormComponent_div_46_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.usuario.municipio_id = $event; })("change", function UsuariosAdminFormComponent_div_46_Template_select_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.getCentroSalud($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsuariosAdminFormComponent_div_46_option_5_Template, 2, 2, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsuariosAdminFormComponent_div_46_div_6_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.Form.controls["municipio_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx_r7.usuario.municipio_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.municipios);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.Form.controls["municipio_id"].touched && (ctx_r7.Form.controls["municipio_id"].errors == null ? null : ctx_r7.Form.controls["municipio_id"].errors.required));
} }
function UsuariosAdminFormComponent_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const centrossalud_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", centrossalud_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](centrossalud_r20.centro_salud);
} }
function UsuariosAdminFormComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Centro de Salud es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rol es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosAdminFormComponent_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.GuardarUsuario(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsuariosAdminFormComponent_button_67_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosAdminFormComponent_button_67_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.ActualizarUsuario(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r12.usuario.password);
} }
class UsuariosAdminFormComponent {
    constructor(activatedRoute, router, userService, comboListService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.comboListService = comboListService;
        this.usuario = {};
        this.estados = [];
        this.municipios = [];
        this.centrosalud = [];
        this.edit = false;
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            rol_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            centro_salud_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            estado_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            municipio_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        if (params.id) {
            this.userService.getUsuario(params.id) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.usuario = res;
                this.Form.patchValue({
                    name: this.usuario.name,
                    email: this.usuario.email,
                    password: this.usuario.password,
                    rol_id: this.usuario.rol_id,
                    centro_salud_id: this.usuario.centro_salud_id,
                    estado_id: this.usuario.estado_id,
                });
                this.edit = true;
                this.EditCentroSalud();
            }, err => console.log(err));
        }
        this.getEstados();
    }
    GuardarUsuario() {
        // delete this.movie.id; // para excluir los campo cuando se vayan a guardar
        this.userService.register(this.Form.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/usuarios/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
        }, err => console.error(err));
    }
    ActualizarUsuario() {
        this.userService.updateUsuario(this.usuario.id, this.usuario)
            .subscribe(res => {
            console.log(res);
            this.router.navigate(['/usuarios/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => console.error(err));
    }
    // COMBO LIST //
    getEstados() {
        this.comboListService.getEstados().subscribe(res => {
            this.estados = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getMunicipios(id) {
        this.comboListService.getMunicipios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((municipios) => municipios.filter((municipio) => municipio.estado_id == id))).subscribe((result) => {
            this.municipios = result;
            console.log(result);
        });
    }
    getCentroSalud(id) {
        this.comboListService.getTodosCentrosSalud().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((centrosalud) => centrosalud.filter((centro) => centro.municipio_id == id))).subscribe((result) => {
            this.centrosalud = result;
            console.log(result);
        });
    }
    EditCentroSalud() {
        this.comboListService.getTodosCentrosSalud().subscribe(res => {
            this.centrosalud = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
UsuariosAdminFormComponent.ɵfac = function UsuariosAdminFormComponent_Factory(t) { return new (t || UsuariosAdminFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_6__["CombolistService"])); };
UsuariosAdminFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuariosAdminFormComponent, selectors: [["app-usuarios-admin-form"]], decls: 69, vars: 26, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar Nombre", "formControlName", "name", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar Correo Electronico", "formControlName", "email", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Ingresar Contrase\u00F1a", "formControlName", "password", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], [1, "text-warning"], ["type", "text", "placeholder", "Ingresar", "formControlName", "estado_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-group row", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "centro_salud_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "rol_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], [3, "value"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "municipio_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "change"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function UsuariosAdminFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Formulario de Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Nombre Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.usuario.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UsuariosAdminFormComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminFormComponent_Template_input_ngModelChange_27_listener($event) { return ctx.usuario.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UsuariosAdminFormComponent_div_28_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UsuariosAdminFormComponent_div_29_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminFormComponent_Template_input_ngModelChange_34_listener($event) { return ctx.usuario.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UsuariosAdminFormComponent_div_35_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contrase\u00F1a tiene que tener 5 valores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UsuariosAdminFormComponent_div_38_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminFormComponent_Template_select_ngModelChange_43_listener($event) { return ctx.usuario.estado_id = $event; })("change", function UsuariosAdminFormComponent_Template_select_change_43_listener($event) { return ctx.getMunicipios($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UsuariosAdminFormComponent_option_44_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UsuariosAdminFormComponent_div_45_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, UsuariosAdminFormComponent_div_46_Template, 7, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Centro Salud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminFormComponent_Template_select_ngModelChange_51_listener($event) { return ctx.usuario.centro_salud_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, UsuariosAdminFormComponent_option_52_Template, 2, 2, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, UsuariosAdminFormComponent_div_53_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosAdminFormComponent_Template_select_ngModelChange_58_listener($event) { return ctx.usuario.rol_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Registrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Visor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, UsuariosAdminFormComponent_div_65_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, UsuariosAdminFormComponent_button_66_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, UsuariosAdminFormComponent_button_67_Template, 2, 1, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "footer", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["name"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.usuario.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["name"].touched && (ctx.Form.controls["name"].errors == null ? null : ctx.Form.controls["name"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["email"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.usuario.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["email"].touched && (ctx.Form.controls["email"].errors == null ? null : ctx.Form.controls["email"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["email"].touched && (ctx.Form.controls["email"].errors == null ? null : ctx.Form.controls["email"].errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["password"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.usuario.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["password"].touched && (ctx.Form.controls["password"].errors == null ? null : ctx.Form.controls["password"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["password"].touched && (ctx.Form.controls["password"].errors == null ? null : ctx.Form.controls["password"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["estado_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.usuario.estado_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["estado_id"].touched && (ctx.Form.controls["estado_id"].errors == null ? null : ctx.Form.controls["estado_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["centro_salud_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.usuario.centro_salud_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.centrosalud);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["centro_salud_id"].touched && (ctx.Form.controls["centro_salud_id"].errors == null ? null : ctx.Form.controls["centro_salud_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["rol_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.usuario.rol_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["rol_id"].touched && (ctx.Form.controls["rol_id"].errors == null ? null : ctx.Form.controls["rol_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _templates_menu_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_8__["MenuAdminComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy1hZG1pbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuariosAdminFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usuarios-admin-form',
                templateUrl: './usuarios-admin-form.component.html',
                styleUrls: ['./usuarios-admin-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }, { type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_6__["CombolistService"] }]; }, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _interfaces_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/interface */ "n+Y7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveToken(token) {
        localStorage.setItem('usertoken', token);
        this.token = token;
    }
    getToken() {
        if (!this.token) {
            this.token = localStorage.getItem('usertoken');
        }
        return this.token;
    }
    getUserDetails() {
        const token = this.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    }
    isLoggedIn() {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    }
    register(user) {
        return this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_2__["API_URI"]}/register`, user);
    }
    login(user) {
        const base = this.http.post(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_2__["API_URI"]}/login`, { email: user.email, password: user.password }, {
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(user);
        const request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (data.token) {
                this.saveToken(data.token);
                console.log(data.token);
            }
        }));
        return request;
    }
    profile() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_2__["API_URI"]}/profile`, {
            headers: { Authorization: `Bearer ${this.getToken()}`
            }
        });
    }
    logout() {
        this.token = '';
        window.localStorage.removeItem('usertoken');
        this.router.navigateByUrl('/login');
    }
    // CRUD //
    getUsuarios() {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_2__["API_URI"]}/usuarios`);
    }
    getUsuario(id) {
        return this.http.get(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_2__["API_URI"]}/usuarios/${id}`);
    }
    updateUsuario(id, updatedUsuario) {
        return this.http.put(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_2__["API_URI"]}/usuarios/${id}`, updatedUsuario);
    }
    deleteUsuario(id) {
        return this.http.delete(`${_interfaces_interface__WEBPACK_IMPORTED_MODULE_2__["API_URI"]}/usuarios/${id}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "rOmV":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/admin/vacunas/vacunas-admin-form/vacunas-admin-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: VacunasAdminFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacunasAdminFormComponent", function() { return VacunasAdminFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../templates/sidebar/sidebar.component */ "muLo");
/* harmony import */ var _templates_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../templates/menu/menu-general/menu-general.component */ "8P1x");














function VacunasAdminFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cedula es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cedula es Minimo 5... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No se aceptan Letras o Simbolos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombres es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Apellidos es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No se aceptan valores numericos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sexo es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha Nacimiento es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tel\u00E9fono es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No se aceptan Letras o Simbolos... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Correo Electr\u00F3nico es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tiene que ser un Correo Electronico valido, por favor... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", estado_r37.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estado_r37.estado);
} }
function VacunasAdminFormComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Estado es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_option_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const municipio_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", municipio_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](municipio_r38.municipio);
} }
function VacunasAdminFormComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Municipio es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_option_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parroquia_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", parroquia_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parroquia_r39.nb_parroquia);
} }
function VacunasAdminFormComponent_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Parroquia es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Direcci\u00F3n es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_option_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const puebloindigena_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", puebloindigena_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](puebloindigena_r40.pueblo_indigena);
} }
function VacunasAdminFormComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pueblo Indigena es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_option_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const etnia_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", etnia_r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](etnia_r41.etnia);
} }
function VacunasAdminFormComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Etnia es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_option_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grupoespeciale_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", grupoespeciale_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](grupoespeciale_r42.grupo_especial);
} }
function VacunasAdminFormComponent_div_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Grupo Especial es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dosis 1 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Fecha Dosis 1 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lote1 es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dosis 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_div_157_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.vacunas.dosis2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.Form.controls["dosis2"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx_r29.vacunas.dosis2);
} }
function VacunasAdminFormComponent_div_158_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fechas Dosis 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_div_158_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.vacunas.fecha_dosis2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r30.Form.controls["fecha_dosis2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx_r30.vacunas.fecha_dosis2);
} }
function VacunasAdminFormComponent_div_159_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lote 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_div_159_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.vacunas.lote2 = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r31.Form.controls["lote2"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx_r31.vacunas.lote2);
} }
function VacunasAdminFormComponent_option_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipovacuna_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", tipovacuna_r49.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tipovacuna_r49.nombre_vacuna);
} }
function VacunasAdminFormComponent_div_166_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tipo Vacuna es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_button_167_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VacunasAdminFormComponent_button_167_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.GuardarVacunas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_button_168_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VacunasAdminFormComponent_button_168_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.ActualizarVacunas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VacunasAdminFormComponent_button_169_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VacunasAdminFormComponent_button_169_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.ActualizarDosis(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actualizar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class VacunasAdminFormComponent {
    constructor(activatedRoute, router, vacunasService, comboListService, datepipe, auth) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.vacunasService = vacunasService;
        this.comboListService = comboListService;
        this.datepipe = datepipe;
        this.auth = auth;
        this.today = new Date();
        // QR
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__["NgxQrcodeElementTypes"].URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_4__["NgxQrcodeErrorCorrectionLevels"].HIGH;
        //value = 'https://www.techiediaries.com/';
        this.estatusForm = false;
        this.covid = {
            cedula1: '000000',
        };
        //
        this.vacunas = [];
        this.centrosalud = [];
        this.parroquias = [];
        this.vacunasng = [];
        this.estados = [];
        this.municipios = [];
        this.etnias = [];
        this.tipovacunas = [];
        this.grupoespeciales = [];
        this.puebloindigenas = [];
        this.usuarios = [];
        this.edit = false;
        this.vacunasCedula = [];
        this.Form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")]),
            nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]),
            apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]),
            sexo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fecha_nacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[0-9]*$")]),
            estado_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            municipio_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            parroquia_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            centro_salud_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dosis1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fecha_dosis1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dosis2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            fecha_dosis2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipo_vacuna_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lote1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lote2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            establecimiento_laboral: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            pueblo_indigena_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            etnia_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            grupo_especial_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        //this.fechaActual=new Date();
        const params = this.activatedRoute.snapshot.params; // para saber si recibo un parametro
        if (params.id) {
            this.vacunasService.getVacuna(params.id) // obtengo el juego con el parametro del id
                .subscribe(res => {
                console.log(res);
                this.vacunas = res;
                this.Form.patchValue({
                    cedula: this.vacunas.cedula,
                    nombres: this.vacunas.nombres,
                    apellidos: this.vacunas.apellidos,
                    fecha_nacimiento: this.vacunas.fecha_nacimiento,
                    telefono: this.vacunas.telefono,
                    estado_id: this.vacunas.estado_id,
                    municipio_id: this.vacunas.municipio_id,
                    centro_salud_id: this.vacunas.centro_salud_id,
                    parroquia_id: this.vacunas.parroquia_id,
                    sexo: this.vacunas.sexo,
                    direccion: this.vacunas.direccion,
                    email: this.vacunas.email,
                    dosis1: this.vacunas.dosis1,
                    fecha_dosis1: this.vacunas.fecha_dosis1,
                    dosis2: this.vacunas.dosis2,
                    fecha_dosis2: this.vacunas.fecha_dosis2,
                    tipo_vacuna_id: this.vacunas.tipo_vacuna_id,
                    lote1: this.vacunas.lote1,
                    lote2: this.vacunas.lote2,
                    establecimiento_laboral: this.vacunas.establecimiento_laboral,
                    pueblo_indigena_id: this.vacunas.pueblo_indigena_id,
                    etnia_id: this.vacunas.etnia_id,
                    grupo_especial_id: this.vacunas.grupo_especial_id,
                    user_id: this.vacunas.user_id,
                });
                this.edit = true;
                this.EditMunicipio();
                this.EditCentroSalud();
                this.EditParroquias();
            }, err => console.log(err));
        }
        this.getEstados();
        this.getEtnias();
        this.getGruposEspeciales();
        this.getPueblosIndigenas();
        this.getTiposVacunas();
        this.informacionUsuario();
    }
    informacionUsuario() {
        this.auth.profile().subscribe(res => {
            this.usuarios = res;
            // alert(this.usuarios.user.id);
            console.log('usuario data', res);
            //alert(`centro salud: ${this.usuarios.user.centro_salud_id}`);
            //alert(`id: ${this.usuarios.user.id}`)
            this.Form.get('centro_salud_id').setValue(this.usuarios.user.centro_salud_id);
            this.Form.get('user_id').setValue(this.usuarios.user.id);
        }, err => {
            alert('Sesion Experiada..');
            this.router.navigateByUrl('/login');
        });
    }
    onBlurMethod() {
        if (Object.keys(this.vacunas.cedula).length >= 7 && this.edit == false) {
            this.vacunasService.getVacunaCedula(this.vacunas.cedula).subscribe(res => {
                if (Object.keys(res).length == 1) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', `El Usuario con la cedula: ${this.vacunas.cedula}, ya se encuentra registrado. Sus datos se llenaran automaticamente!!!`, 'success');
                    this.vacunasng = res;
                    this.estatusForm = true;
                    console.log(res);
                    //foreach
                    this.vacunasng.forEach(element => {
                        element.cedula = this.vacunas.cedula;
                        this.vacunas.id = element.id,
                            this.vacunas.nombres = element.nombres,
                            this.vacunas.apellidos = element.apellidos,
                            this.vacunas.fecha_nacimiento = element.fecha_nacimiento,
                            this.vacunas.telefono = element.telefono,
                            this.vacunas.estado_id = element.estado_id,
                            this.vacunas.municipio_id = element.municipio_id,
                            this.vacunas.parroquia_id = element.parroquia_id,
                            this.vacunas.centro_salud_id = element.centro_salud_id,
                            this.vacunas.sexo = element.sexo,
                            this.vacunas.direccion = element.direccion,
                            this.vacunas.email = element.email,
                            this.vacunas.dosis1 = element.dosis1,
                            this.vacunas.fecha_dosis1 = element.fecha_dosis1,
                            this.vacunas.dosis2 = element.dosis2,
                            this.vacunas.fecha_dosis2 = element.fecha_dosis2,
                            this.vacunas.tipo_vacuna_id = element.tipo_vacuna_id,
                            this.vacunas.lote1 = element.lote1,
                            this.vacunas.lote2 = element.lote2,
                            this.vacunas.establecimiento_laboral = element.establecimiento_laboral,
                            this.vacunas.pueblo_indigena_id = element.pueblo_indigena_id,
                            this.vacunas.etnia_id = element.etnia_id,
                            this.vacunas.grupo_especial_id = element.grupo_especial_id;
                        //console.log('este es el id:', element.id)
                        // alert(this.vacunas.id)
                        this.vacunasService.getVacuna(this.vacunas.id) // obtengo el juego con el parametro del id
                            .subscribe(res => {
                            console.log(res);
                            this.vacunas = res;
                            this.Form.patchValue({
                                cedula: this.vacunas.cedula,
                                nombres: this.vacunas.nombres,
                                apellidos: this.vacunas.apellidos,
                                fecha_nacimiento: this.vacunas.fecha_nacimiento,
                                telefono: this.vacunas.telefono,
                                estado_id: this.vacunas.estado_id,
                                municipio_id: this.vacunas.municipio_id,
                                parroquia_id: this.vacunas.parroquia_id,
                                centro_salud_id: this.vacunas.centro_salud_id,
                                sexo: this.vacunas.sexo,
                                direccion: this.vacunas.direccion,
                                email: this.vacunas.email,
                                dosis1: this.vacunas.dosis1,
                                fecha_dosis1: this.vacunas.fecha_dosis1,
                                dosis2: this.vacunas.dosis2,
                                fecha_dosis2: this.vacunas.fecha_dosis2,
                                tipo_vacuna_id: this.vacunas.tipo_vacuna_id,
                                lote1: this.vacunas.lote1,
                                lote2: this.vacunas.lote2,
                                establecimiento_laboral: this.vacunas.establecimiento_laboral,
                                pueblo_indigena_id: this.vacunas.pueblo_indigena_id,
                                etnia_id: this.vacunas.etnia_id,
                                grupo_especial_id: this.vacunas.grupo_especial_id
                                //imagen_qr: this.vacunas.imagen_qr,
                            });
                            this.EditMunicipio();
                        }, err => console.log(err));
                    });
                }
                // AQUI TERMINA EL IF de lenght //
                else {
                    if (this.vacunas.cedula == this.covid.cedula1) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error!', `El Paciente con la cedula: ${this.vacunas.cedula}, tuvo COVID 19 y no puede ser vacunado!!!`, 'error');
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', `El Paciente con la cedula: ${this.vacunas.cedula}, puede ser vacunado!!!`, 'success');
                        this.estatusForm = false;
                        this.vacunas.nombres = '';
                        this.vacunas.apellidos = '';
                        this.vacunas.fecha_nacimiento = '';
                        this.vacunas.telefono = '';
                        this.vacunas.estado_id = '';
                        this.vacunas.centro_salud_id = '';
                        this.vacunas.parroquia_id = '';
                        this.vacunas.municipio_id = '';
                        this.vacunas.sexo = '';
                        this.vacunas.direccion = '';
                        this.vacunas.email = '';
                        this.vacunas.dosis1 = '';
                        this.vacunas.fecha_dosis1 = '';
                        this.vacunas.dosis2 = '';
                        this.vacunas.fecha_dosis2 = '';
                        this.vacunas.tipo_vacuna_id = '';
                        this.vacunas.lote1 = '';
                        this.vacunas.lote2 = '';
                        this.vacunas.establecimiento_laboral = '';
                        this.vacunas.pueblo_indigena_id = '';
                        this.vacunas.etnia_id = '';
                        this.vacunas.grupo_especial_id = '';
                    }
                }
                //AQUI TERMINA EL ELSE
            }
            // AQUI TERMINA EL SERVICE 
            );
        }
    }
    GuardarVacunas() {
        this.vacunasService.saveVacunas(this.Form.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/vacunados/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos guardados correctamente...!', 'success');
        }, err => {
            console.error(err);
            {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error!', '!Formulario incompleto o datos Incorrectos...', 'error');
            }
        });
    }
    ActualizarVacunas() {
        this.vacunasService.updateVacuna(this.vacunas.id, this.vacunas)
            .subscribe(res => {
            console.log('actualizando', res);
            this.router.navigate(['/vacunados/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => {
            console.error(err);
            {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error!', '!Formulario incompleto o datos Incorrectos...', 'error');
            }
        });
    }
    ActualizarDosis() {
        this.vacunasService.updateDosis2(this.vacunas.id, this.vacunas)
            .subscribe(res => {
            console.log('actualizando', res);
            this.router.navigate(['/vacunados/admin/list']);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Exitoso!', 'Datos actualizados correctamente...!', 'success');
        }, err => {
            console.error(err);
            {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Error!', '!Formulario incompleto o datos Incorrectos...', 'error');
            }
        });
    }
    // COMBO DEPENDIENTE //
    getEstados() {
        this.comboListService.getEstados().subscribe(res => {
            this.estados = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    /*
            getMunicipios(id: any): void
            {
    
                 this.comboListService.getMunicipios().pipe(
                map((municipios: any[]) => municipios.filter((municipio) => municipio.estado_id == id)
               )).subscribe((result) => {
                this.municipios = result;
                console.log(result);
    
               });
    
            }
    
    
         */
    EditMunicipio() {
        this.comboListService.getMunicipios().subscribe(res => {
            this.municipios = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getMunicipios(id) {
        this.comboListService.getMunicipios().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((municipios) => municipios.filter((municipio) => municipio.estado_id == id))).subscribe((result) => {
            this.municipios = result;
            console.log(result);
        });
    }
    getCentroSalud(id) {
        this.comboListService.getParroquias().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((parroquias) => parroquias.filter((parroquia) => parroquia.id_municipio == id))).subscribe((result) => {
            this.parroquias = result;
            console.log(result);
        });
        this.comboListService.getTodosCentrosSalud().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((centrosalud) => centrosalud.filter((centro) => centro.municipio_id == id))).subscribe((result) => {
            this.centrosalud = result;
            console.log(result);
        });
    }
    EditCentroSalud() {
        this.comboListService.getTodosCentrosSalud().subscribe(res => {
            this.centrosalud = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    EditParroquias() {
        this.comboListService.getParroquias().subscribe(res => {
            this.parroquias = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getTiposVacunas() {
        this.comboListService.getTiposVacunas().subscribe(res => {
            this.tipovacunas = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getEtnias() {
        this.comboListService.getEtnias().subscribe(res => {
            this.etnias = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getPueblosIndigenas() {
        this.comboListService.getPueblosIndigenas().subscribe(res => {
            this.puebloindigenas = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getGruposEspeciales() {
        this.comboListService.getGruposEspeciales().subscribe(res => {
            this.grupoespeciales = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
VacunasAdminFormComponent.ɵfac = function VacunasAdminFormComponent_Factory(t) { return new (t || VacunasAdminFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_6__["VacunasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_7__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"])); };
VacunasAdminFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VacunasAdminFormComponent, selectors: [["app-vacunas-admin-form"]], decls: 171, vars: 95, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "maxlength", "8", "placeholder", "Ingresar Cedula", "formControlName", "cedula", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "blur"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar Nombres", "formControlName", "nombres", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar apellidos", "formControlName", "apellidos", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "sexo", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["value", "masculino"], ["value", "femenino"], ["type", "date", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_nacimiento", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], [1, "col-sm-2"], ["type", "text", "placeholder", "Ingresar", "formControlName", "telefono", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], ["value", "0412"], ["value", "0414"], ["value", "0424"], ["value", "0416"], ["value", "0426"], [1, "col-sm-8"], ["type", "text", "maxlength", "11", "placeholder", "Ingresar Telefono", "formControlName", "telefono", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Correo Electronico", "formControlName", "email", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar", "formControlName", "estado_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "municipio_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange", "change"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "parroquia_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Direcci\u00F3n ", "formControlName", "direccion", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Establecimiento Donde Labora...", "formControlName", "establecimiento_laboral", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "pueblo_indigena_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "etnia_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "grupo_especial_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "dosis1", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["value", "si"], ["value", "no"], ["type", "date", "id", "example-date-input", "placeholder", "Ingresar fecha nacimiento", "formControlName", "fecha_dosis1", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Lote 1", "formControlName", "lote1", 1, "form-control", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["class", "form-group row", 4, "ngIf"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "tipo_vacuna_id", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["type", "submit", "style", "margin-left:450px; margin-top:40px", "class", "btn btn-primary btn-lg", 3, "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-success btn-lg", 3, "click", 4, "ngIf"], [1, "footer"], [1, "invalid-feedback"], [3, "value"], ["type", "text", "placeholder", "Ingresar ", "formControlName", "dosis2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "date", "id", "example-date-input", "placeholder", "Ingresar fecha_dosis2", "formControlName", "fecha_dosis2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ingresar Lote 2", "formControlName", "lote2", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 2, "margin-left", "450px", "margin-top", "40px", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "click"]], template: function VacunasAdminFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Formulario de Vacunados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "C\u00E9dula");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_21_listener($event) { return ctx.vacunas.cedula = $event; })("blur", function VacunasAdminFormComponent_Template_input_blur_21_listener() { return ctx.onBlurMethod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VacunasAdminFormComponent_div_22_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VacunasAdminFormComponent_div_23_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VacunasAdminFormComponent_div_24_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nombres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_29_listener($event) { return ctx.vacunas.nombres = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, VacunasAdminFormComponent_div_30_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VacunasAdminFormComponent_div_31_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Apellidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_36_listener($event) { return ctx.vacunas.apellidos = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, VacunasAdminFormComponent_div_37_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, VacunasAdminFormComponent_div_38_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sexo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_43_listener($event) { return ctx.vacunas.sexo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Masculino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Femenino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, VacunasAdminFormComponent_div_48_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Fecha Nacimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_53_listener($event) { return ctx.vacunas.fecha_nacimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, VacunasAdminFormComponent_div_54_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_59_listener($event) { return ctx.vacunas.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "0412");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "0414");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "0424");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "0416");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "0426");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_71_listener($event) { return ctx.vacunas.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, VacunasAdminFormComponent_div_72_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, VacunasAdminFormComponent_div_73_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_78_listener($event) { return ctx.vacunas.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, VacunasAdminFormComponent_div_79_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, VacunasAdminFormComponent_div_80_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_85_listener($event) { return ctx.vacunas.estado_id = $event; })("change", function VacunasAdminFormComponent_Template_select_change_85_listener($event) { return ctx.getMunicipios($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, VacunasAdminFormComponent_option_86_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, VacunasAdminFormComponent_div_87_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Municipios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_92_listener($event) { return ctx.vacunas.municipio_id = $event; })("change", function VacunasAdminFormComponent_Template_select_change_92_listener($event) { return ctx.getCentroSalud($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, VacunasAdminFormComponent_option_93_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, VacunasAdminFormComponent_div_94_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Parroquia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_99_listener($event) { return ctx.vacunas.parroquia_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, VacunasAdminFormComponent_option_100_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, VacunasAdminFormComponent_div_101_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_textarea_ngModelChange_106_listener($event) { return ctx.vacunas.direccion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "                                      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, VacunasAdminFormComponent_div_108_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Establecimiento Donde Labora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_113_listener($event) { return ctx.vacunas.establecimiento_laboral = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Pueblo Ind\u00EDgenas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_118_listener($event) { return ctx.vacunas.pueblo_indigena_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, VacunasAdminFormComponent_option_119_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, VacunasAdminFormComponent_div_120_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Etnia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "select", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_125_listener($event) { return ctx.vacunas.etnia_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, VacunasAdminFormComponent_option_126_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, VacunasAdminFormComponent_div_127_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Grupo Especiales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_132_listener($event) { return ctx.vacunas.grupo_especial_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, VacunasAdminFormComponent_option_133_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, VacunasAdminFormComponent_div_134_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Dosis 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_139_listener($event) { return ctx.vacunas.dosis1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Si");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, VacunasAdminFormComponent_div_144_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Fecha Dosis 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_149_listener($event) { return ctx.vacunas.fecha_dosis1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, VacunasAdminFormComponent_div_150_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Lote 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_input_ngModelChange_155_listener($event) { return ctx.vacunas.lote1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, VacunasAdminFormComponent_div_156_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](157, VacunasAdminFormComponent_div_157_Template, 9, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](158, VacunasAdminFormComponent_div_158_Template, 5, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](159, VacunasAdminFormComponent_div_159_Template, 5, 2, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Tipo de Vacuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "select", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VacunasAdminFormComponent_Template_select_ngModelChange_164_listener($event) { return ctx.vacunas.tipo_vacuna_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, VacunasAdminFormComponent_option_165_Template, 2, 2, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](166, VacunasAdminFormComponent_div_166_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](167, VacunasAdminFormComponent_button_167_Template, 2, 0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](168, VacunasAdminFormComponent_button_168_Template, 2, 0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, VacunasAdminFormComponent_button_169_Template, 2, 0, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "footer", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["cedula"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.cedula);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.minlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["cedula"].touched && (ctx.Form.controls["cedula"].errors == null ? null : ctx.Form.controls["cedula"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["nombres"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.nombres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["nombres"].touched && (ctx.Form.controls["nombres"].errors == null ? null : ctx.Form.controls["nombres"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["nombres"].touched && (ctx.Form.controls["nombres"].errors == null ? null : ctx.Form.controls["nombres"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["apellidos"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.apellidos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["apellidos"].touched && (ctx.Form.controls["apellidos"].errors == null ? null : ctx.Form.controls["apellidos"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["apellidos"].touched && (ctx.Form.controls["apellidos"].errors == null ? null : ctx.Form.controls["apellidos"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["sexo"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.sexo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["sexo"].touched && (ctx.Form.controls["sexo"].errors == null ? null : ctx.Form.controls["sexo"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["fecha_nacimiento"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.fecha_nacimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_nacimiento"].touched && (ctx.Form.controls["fecha_nacimiento"].errors == null ? null : ctx.Form.controls["fecha_nacimiento"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngModel", ctx.vacunas.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["telefono"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["telefono"].touched && (ctx.Form.controls["telefono"].errors == null ? null : ctx.Form.controls["telefono"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["telefono"].touched && (ctx.Form.controls["telefono"].errors == null ? null : ctx.Form.controls["telefono"].errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["email"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["email"].touched && (ctx.Form.controls["email"].errors == null ? null : ctx.Form.controls["email"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["email"].touched && (ctx.Form.controls["email"].errors == null ? null : ctx.Form.controls["email"].errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["estado_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.estado_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["estado_id"].touched && (ctx.Form.controls["estado_id"].errors == null ? null : ctx.Form.controls["estado_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["municipio_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.municipio_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.municipios);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["municipio_id"].touched && (ctx.Form.controls["municipio_id"].errors == null ? null : ctx.Form.controls["municipio_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["parroquia_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.parroquia_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parroquias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["parroquia_id"].touched && (ctx.Form.controls["parroquia_id"].errors == null ? null : ctx.Form.controls["parroquia_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["direccion"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.direccion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["direccion"].touched && (ctx.Form.controls["direccion"].errors == null ? null : ctx.Form.controls["direccion"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["establecimiento_laboral"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.establecimiento_laboral);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["pueblo_indigena_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.pueblo_indigena_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.puebloindigenas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["pueblo_indigena_id"].touched && (ctx.Form.controls["pueblo_indigena_id"].errors == null ? null : ctx.Form.controls["pueblo_indigena_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["etnia_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.etnia_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.etnias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["etnia_id"].touched && (ctx.Form.controls["etnia_id"].errors == null ? null : ctx.Form.controls["etnia_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["grupo_especial_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.grupo_especial_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grupoespeciales);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["grupo_especial_id"].touched && (ctx.Form.controls["grupo_especial_id"].errors == null ? null : ctx.Form.controls["grupo_especial_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["dosis1"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.dosis1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["dosis1"].touched && (ctx.Form.controls["dosis1"].errors == null ? null : ctx.Form.controls["dosis1"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["fecha_dosis1"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.fecha_dosis1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["fecha_dosis1"].touched && (ctx.Form.controls["fecha_dosis1"].errors == null ? null : ctx.Form.controls["fecha_dosis1"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.estatusForm)("ngClass", ctx.Form.controls["lote1"].valid ? "is-valid fa fa-check " : "is-invalid")("ngModel", ctx.vacunas.lote1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["lote1"].touched && (ctx.Form.controls["lote1"].errors == null ? null : ctx.Form.controls["lote1"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas.dosis1 === "si" && ctx.estatusForm || ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas.dosis1 === "si" && ctx.estatusForm || ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vacunas.dosis1 === "si" && ctx.estatusForm || ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.estatusForm)("ngClass", ctx.Form.controls["tipo_vacuna_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.vacunas.tipo_vacuna_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tipovacunas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["tipo_vacuna_id"].touched && (ctx.Form.controls["tipo_vacuna_id"].errors == null ? null : ctx.Form.controls["tipo_vacuna_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.edit && !ctx.estatusForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.edit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estatusForm);
    } }, directives: [_templates_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _templates_menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_11__["MenuGeneralComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWN1bmFzLWFkbWluLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VacunasAdminFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vacunas-admin-form',
                templateUrl: './vacunas-admin-form.component.html',
                styleUrls: ['./vacunas-admin-form.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_6__["VacunasService"] }, { type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_7__["CombolistService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }]; }, null); })();


/***/ }),

/***/ "rjND":
/*!********************************************************************************************!*\
  !*** ./src/app/components/templates/reportes/reporte-general/reporte-general.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ReporteGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteGeneralComponent", function() { return ReporteGeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "5RHE");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/combolist.service */ "fJTj");
/* harmony import */ var src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vacunas.service */ "XBfQ");
/* harmony import */ var src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/excel.service */ "g1/Y");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ "muLo");
/* harmony import */ var _menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../menu/menu-general/menu-general.component */ "8P1x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













function ReporteGeneralComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", estado_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](estado_r4.estado);
} }
function ReporteGeneralComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Estado es Obligatorio... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReporteGeneralComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReporteGeneralComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.PDFEstadalEdad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reporte PDF Estadal Por Edad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReporteGeneralComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReporteGeneralComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.excelVacunasPorEdadEstadal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reporte PDF Estadal Por Edad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReporteGeneralComponent {
    constructor(comboListService, vacunasService, excelService, auth) {
        this.comboListService = comboListService;
        this.vacunasService = vacunasService;
        this.excelService = excelService;
        this.auth = auth;
        this.estados = [];
        // Reportes
        this.VacunasGeneralEdad = [];
        this.VacunasEstadalEdad = [];
        this.pdfEstadal = false;
        this.estado_id = '';
        this.usuarios = [];
        this.Form = this.createFormGroup();
    }
    //EXCEL 
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            estado_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.getEstados();
        this.getReporteVacunasEdadGeneral();
    }
    excelVacunasPorEdadGeneral() {
        this.excelService.exportAsExcelFile(this.VacunasGeneralEdad, 'Vacunas');
    }
    excelVacunasPorEdadEstadal() {
        this.excelService.exportAsExcelFile(this.VacunasEstadalEdad, 'Vacunas');
    }
    /////////////////////////////////// REPORTES ////////////////////////////
    getReporteVacunasEdadGeneral() {
        this.vacunasService.reporteVacunasEdadGeneral().subscribe(res => {
            this.VacunasGeneralEdad = res;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                /*Swal.fire(
                  'Error!',
                  'El servidor no esta activo, no podra ver los datos...',
                  'error'
                  
                );
                */
            }
        });
    }
    PDFGeneral() {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a('l', 'pt', "a4");
        const col = [
            'Estado',
            'Centro Salud',
            '1-12 Años',
            '13-21 Años',
            '22-59 Años',
            '60 o Mas Años ',
            'Total'
        ];
        const rows = [];
        const img = new Image();
        doc.setProperties({ title: 'Reporte  General De Vacunados Por Edad' });
        img.src = 'assets/images/logo.png';
        doc.addImage(img, 'JPGE', 50, 8);
        doc.setFontSize(20);
        doc.text('Reporte  General De Vacunados Por Edad', 310, 60);
        this.VacunasGeneralEdad.forEach(element => {
            const temp = [
                element.estado,
                element.centro_salud,
                element.de_1_a_12,
                element.de_13_a_21,
                element.de_22_a_59,
                element.de_30_o_mas,
                element.total,
            ];
            rows.push(temp);
        });
        doc.autoTable(col, rows, {
            startY: 150,
            columnStyles: {
                0: { cellWidth: 110 },
                1: { cellWidth: 110 },
                2: { cellWidth: 110 },
                3: { cellWidth: 110 },
                4: { cellWidth: 110 },
            }
        });
        doc.save('Reporte_vacunados_edad_general.pdf');
    }
    // AQUI TERMINA REPORTE GENERAL
    /// REPORTES VACUNADOS POR EDAD POR ESTADOS //
    reporteVacunasEdadEstado() {
        this.vacunasService.reporteVacunasEdadEstado(this.estado_id).subscribe(res => {
            this.VacunasEstadalEdad = res;
            this.pdfEstadal = true;
            console.log(res);
        }, err => {
            console.log(err);
            if (err.status === 0) {
                /*Swal.fire(
                  'Error!',
                  'El servidor no esta activo, no podra ver los datos...',
                  'error'
                  
                );
                */
            }
        });
    }
    PDFEstadalEdad() {
        const doc = new jspdf__WEBPACK_IMPORTED_MODULE_2___default.a('l', 'pt', "a4");
        const col = [
            'Estado',
            'Centro de Salud',
            '1-12 Años',
            '13-21 Años',
            '22-59 Años',
            '60 o Mas Años ',
            'Total'
        ];
        const rows = [];
        const img = new Image();
        doc.setProperties({ title: 'Reporte  Estadal De Vacunados Por Edad' });
        img.src = 'assets/images/logo.png';
        doc.addImage(img, 'JPGE', 50, 8);
        doc.setFontSize(20);
        doc.text('Reporte  Estadal De Vacunados Por Edad', 310, 60);
        this.VacunasEstadalEdad.forEach(element => {
            const temp = [
                element.estado,
                element.centro_salud,
                element.de_1_a_12,
                element.de_13_a_21,
                element.de_22_a_59,
                element.de_30_o_mas,
                element.total,
            ];
            rows.push(temp);
        });
        doc.autoTable(col, rows, {
            startY: 150,
            columnStyles: {
                0: { cellWidth: 110 },
                1: { cellWidth: 110 },
                2: { cellWidth: 110 },
                3: { cellWidth: 110 },
                4: { cellWidth: 110 },
            }
        });
        doc.save('Reporte_vacunados_edad_estadal.pdf');
    }
    // AQUI TERMINA REPORTE GENERAL
    // AQUI TERMINA REPORTES VACUNADOS ESTADAL //
    getEstados() {
        this.comboListService.getEstados().subscribe(res => {
            this.estados = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
}
ReporteGeneralComponent.ɵfac = function ReporteGeneralComponent_Factory(t) { return new (t || ReporteGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_5__["VacunasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
ReporteGeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReporteGeneralComponent, selectors: [["app-reporte-general"]], decls: 35, vars: 7, consts: [["id", "wrapper"], [1, "content-page"], [1, "content"], [1, "container-fluid"], [1, "page-title-box"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "page-title"], ["role", "form", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "form-group", "row"], ["for", "example-text-input", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "placeholder", "Ingresar", "formControlName", "estado_id", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange", "blur"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "btn", "btn-warning", "m-3", 3, "click"], ["class", "btn btn-warning m-3", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", "m-3", 3, "click"], ["class", "btn btn-success m-3", 3, "click", 4, "ngIf"], [1, "footer"], [3, "value"], [1, "invalid-feedback"]], template: function ReporteGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu-general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reportes General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Estados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReporteGeneralComponent_Template_select_ngModelChange_21_listener($event) { return ctx.estado_id = $event; })("blur", function ReporteGeneralComponent_Template_select_blur_21_listener() { return ctx.reporteVacunasEdadEstado(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReporteGeneralComponent_option_22_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReporteGeneralComponent_div_23_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " PDF: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReporteGeneralComponent_Template_button_click_26_listener() { return ctx.PDFGeneral(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reporte PDF General Por Edad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ReporteGeneralComponent_button_28_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Excel: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReporteGeneralComponent_Template_button_click_31_listener() { return ctx.excelVacunasPorEdadGeneral(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Reporte Excel General Por Edad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ReporteGeneralComponent_button_33_Template, 2, 0, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "footer", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.Form.controls["estado_id"].valid ? "is-valid state-valid" : "is-invalid state-invalid")("ngModel", ctx.estado_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.estados);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.Form.controls["estado_id"].touched && (ctx.Form.controls["estado_id"].errors == null ? null : ctx.Form.controls["estado_id"].errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pdfEstadal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pdfEstadal);
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _menu_menu_general_menu_general_component__WEBPACK_IMPORTED_MODULE_9__["MenuGeneralComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLWdlbmVyYWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReporteGeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reporte-general',
                templateUrl: './reporte-general.component.html',
                styleUrls: ['./reporte-general.component.css']
            }]
    }], function () { return [{ type: src_app_services_combolist_service__WEBPACK_IMPORTED_MODULE_4__["CombolistService"] }, { type: src_app_services_vacunas_service__WEBPACK_IMPORTED_MODULE_5__["VacunasService"] }, { type: src_app_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, null); })();


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
/* harmony import */ var _admin_components_vacunas_vacunas_perdidas_admin_form_vacunas_perdidas_admin_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/components/vacunas/vacunas-perdidas-admin-form/vacunas-perdidas-admin-form.component */ "TRWN");
/* harmony import */ var _admin_components_vacunas_vacunas_perdidas_admin_list_vacunas_perdidas_admin_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/components/vacunas/vacunas-perdidas-admin-list/vacunas-perdidas-admin-list.component */ "4qKO");
/* harmony import */ var _components_admin_centrosalud_centro_salud_admin_form_centro_salud_admin_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/centrosalud/centro-salud-admin-form/centro-salud-admin-form.component */ "KZSZ");
/* harmony import */ var _components_admin_centrosalud_centro_salud_admin_list_centro_salud_admin_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/centrosalud/centro-salud-admin-list/centro-salud-admin-list.component */ "82kC");
/* harmony import */ var _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/inicio-admin/inicio-admin.component */ "6PkB");
/* harmony import */ var _components_admin_tipovacunas_tipo_vacunas_admin_form_tipo_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/tipovacunas/tipo-vacunas-admin-form/tipo-vacunas-admin-form.component */ "gPZL");
/* harmony import */ var _components_admin_tipovacunas_tipo_vacunas_admin_list_tipo_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/tipovacunas/tipo-vacunas-admin-list/tipo-vacunas-admin-list.component */ "lzIU");
/* harmony import */ var _components_admin_usuarios_usuarios_admin_form_usuarios_admin_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/usuarios/usuarios-admin-form/usuarios-admin-form.component */ "o3Dw");
/* harmony import */ var _components_admin_usuarios_usuarios_admin_list_usuarios_admin_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/usuarios/usuarios-admin-list/usuarios-admin-list.component */ "R1DC");
/* harmony import */ var _components_admin_vacunas_vacunas_admin_form_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/vacunas/vacunas-admin-form/vacunas-admin-form.component */ "rOmV");
/* harmony import */ var _components_admin_vacunas_vacunas_admin_list_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/vacunas/vacunas-admin-list/vacunas-admin-list.component */ "62PF");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_publico_qrlist_public_qrlist_public_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/publico/qrlist-public/qrlist-public.component */ "nyDN");
/* harmony import */ var _components_templates_reportes_reporte_general_reporte_general_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/templates/reportes/reporte-general/reporte-general.component */ "rjND");


















const routes = [
    { path: 'inicio', component: _components_admin_inicio_admin_inicio_admin_component__WEBPACK_IMPORTED_MODULE_6__["InicioAdminComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    //Vacunados
    { path: 'vacunados/admin/list', component: _components_admin_vacunas_vacunas_admin_list_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_12__["VacunasAdminListComponent"] },
    { path: 'vacunados/admin/form', component: _components_admin_vacunas_vacunas_admin_form_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_11__["VacunasAdminFormComponent"] },
    { path: 'vacunados/admin/edit/:id', component: _components_admin_vacunas_vacunas_admin_form_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_11__["VacunasAdminFormComponent"] },
    { path: 'qr/vacunados/:cedula', component: _components_publico_qrlist_public_qrlist_public_component__WEBPACK_IMPORTED_MODULE_14__["QRListPublicComponent"] },
    //REPORTES VACUNAS //
    { path: 'vacunados/reportes/general/list', component: _components_templates_reportes_reporte_general_reporte_general_component__WEBPACK_IMPORTED_MODULE_15__["ReporteGeneralComponent"] },
    // VACUNAS PERDIDAS //
    { path: 'vacunas_perdidas/admin/list', component: _admin_components_vacunas_vacunas_perdidas_admin_list_vacunas_perdidas_admin_list_component__WEBPACK_IMPORTED_MODULE_3__["VacunasPerdidasAdminListComponent"] },
    { path: 'vacunas_perdidas/admin/form', component: _admin_components_vacunas_vacunas_perdidas_admin_form_vacunas_perdidas_admin_form_component__WEBPACK_IMPORTED_MODULE_2__["VacunasPerdidasAdminFormComponent"] },
    { path: 'vacunas_perdidas/admin/edit/:id', component: _admin_components_vacunas_vacunas_perdidas_admin_form_vacunas_perdidas_admin_form_component__WEBPACK_IMPORTED_MODULE_2__["VacunasPerdidasAdminFormComponent"] },
    // CENTRO DE SALUD //
    { path: 'centrosalud/admin/list', component: _components_admin_centrosalud_centro_salud_admin_list_centro_salud_admin_list_component__WEBPACK_IMPORTED_MODULE_5__["CentroSaludAdminListComponent"] },
    { path: 'centrosalud/admin/form', component: _components_admin_centrosalud_centro_salud_admin_form_centro_salud_admin_form_component__WEBPACK_IMPORTED_MODULE_4__["CentroSaludAdminFormComponent"] },
    { path: 'centrosalud/admin/edit/:id', component: _components_admin_centrosalud_centro_salud_admin_form_centro_salud_admin_form_component__WEBPACK_IMPORTED_MODULE_4__["CentroSaludAdminFormComponent"] },
    //TIPOS DE VACUNAS
    { path: 'tiposvacunas/admin/list', component: _components_admin_tipovacunas_tipo_vacunas_admin_list_tipo_vacunas_admin_list_component__WEBPACK_IMPORTED_MODULE_8__["TipoVacunasAdminListComponent"] },
    { path: 'tiposvacunas/admin/form', component: _components_admin_tipovacunas_tipo_vacunas_admin_form_tipo_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_7__["TipoVacunasAdminFormComponent"] },
    { path: 'tiposvacunas/admin/edit/:id', component: _components_admin_tipovacunas_tipo_vacunas_admin_form_tipo_vacunas_admin_form_component__WEBPACK_IMPORTED_MODULE_7__["TipoVacunasAdminFormComponent"] },
    //USUARIOS
    { path: 'usuarios/admin/list', component: _components_admin_usuarios_usuarios_admin_list_usuarios_admin_list_component__WEBPACK_IMPORTED_MODULE_10__["UsuariosAdminListComponent"] },
    { path: 'usuarios/admin/form', component: _components_admin_usuarios_usuarios_admin_form_usuarios_admin_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuariosAdminFormComponent"] },
    { path: 'usuarios/admin/edit/:id', component: _components_admin_usuarios_usuarios_admin_form_usuarios_admin_form_component__WEBPACK_IMPORTED_MODULE_9__["UsuariosAdminFormComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
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

/***/ "y+QU":
/*!******************************************************************************!*\
  !*** ./src/app/components/templates/menu/menu-admin/menu-admin.component.ts ***!
  \******************************************************************************/
/*! exports provided: MenuAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminComponent", function() { return MenuAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["/inicio"]; };
const _c1 = function () { return ["/vacunados/admin/form"]; };
const _c2 = function () { return ["/vacunados/admin/list"]; };
const _c3 = function () { return ["/vacunas_perdidas/admin/form"]; };
const _c4 = function () { return ["/vacunas_perdidas/admin/list"]; };
const _c5 = function () { return ["/centrosalud/admin/form"]; };
const _c6 = function () { return ["/centrosalud/admin/list"]; };
const _c7 = function () { return ["/tiposvacunas/admin/form"]; };
const _c8 = function () { return ["/tiposvacunas/admin/list"]; };
const _c9 = function () { return ["/usuarios/admin/form"]; };
const _c10 = function () { return ["/usuarios/admin/list"]; };
const _c11 = function () { return ["/vacunados/reportes/general/list"]; };
class MenuAdminComponent {
    constructor(auth) {
        this.auth = auth;
        this.VacunasMenu = false;
        this.UsuariosMenu = false;
        this.CentroSaludMenu = false;
        this.TipoVacuna = false;
        this.VacunasPerdidas = false;
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout();
    }
}
MenuAdminComponent.ɵfac = function MenuAdminComponent_Factory(t) { return new (t || MenuAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
MenuAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuAdminComponent, selectors: [["app-menu-admin"]], decls: 92, vars: 29, consts: [[1, "left", "side-menu"], ["id", "remove-scroll", 1, "slimscroll-menu"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu"], [1, "menu-title"], [1, "waves-effect", 3, "routerLink"], [1, "dripicons-meter"], [1, "waves-effect", "mm-active", 3, "click"], [1, "dripicons-mail"], [1, "float-right", "menu-arrow"], [1, "mdi", "mdi-chevron-right"], [1, "submenu", "mm-collapse", 3, "ngClass"], [3, "routerLink"], ["href", "javascript:void(0)", 1, "waves-effect", 3, "click"], [1, "clearfix"]], template: function MenuAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu Administrador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_12_listener() { return ctx.VacunasMenu = !ctx.VacunasMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Vacunados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_26_listener() { return ctx.VacunasPerdidas = !ctx.VacunasPerdidas; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Vacunas Perdidas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_40_listener() { return ctx.CentroSaludMenu = !ctx.CentroSaludMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Centro Salud ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_54_listener() { return ctx.TipoVacuna = !ctx.TipoVacuna; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Tipo de Vacunas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_68_listener() { return ctx.UsuariosMenu = !ctx.UsuariosMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Usuarios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Listado ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Reportes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuAdminComponent_Template_a_click_87_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Cerrar Sesion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.VacunasMenu ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.VacunasPerdidas ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.CentroSaludMenu ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.TipoVacuna ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.UsuariosMenu ? "mm-show" : "secondary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c11));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-admin',
                templateUrl: './menu-admin.component.html',
                styleUrls: ['./menu-admin.component.css']
            }]
    }], function () { return [{ type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


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