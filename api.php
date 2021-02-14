<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//Users
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');
Route::put('usuarios_subir_foto/{$user_id}', 'UserController@cedulaVacunadosRegistrado');

//CRUD USERS
Route::resource('usuarios', 'UserController');

Route::resource('parroquias', 'ParroquiasController');

//VACUNADOS 
Route::resource('vacunados', 'VacunadosController');
Route::get('vacunas/listado', 'VacunadosController@listadoVacunados');
Route::get('vacunas/cedula/{cedula}', 'VacunadosController@cedulaVacunadosRegistrado');
Route::put('vacunas/dosis/{vacunado_id}', 'VacunadosController@actualizarDosis');

Route::get('vacunas/qr/{cedula}', 'VacunadosController@listadoVacunadosPorCedula');

Route::get('vacunas/excel/todos', 'VacunadosController@listadoVacunadosExcel');



// CENTRO SALUD //

Route::resource('centro_salud', 'CentroSaludController');
Route::get('centro_salud_list', 'CentroSaludController@centrosaludList');

Route::resource('estados','EstadoController');
Route::resource('municipios','MunicipioController');


//  CRUD 

Route::resource('etnias', 'EtniasController');
Route::resource('grupo_especiales', 'GrupoEspecialesController');
Route::resource('tipo_vacunas', 'TipoVacunasController');
Route::resource('pueblo_indigenas', 'PuebloIndigenasController');

Route::resource('vacunas_perdidas', 'VacunasPerdidasController');



//////// REPORTES //////////////
//VACUNADOS //

Route::get('vacunas/reportes/edad/general', 'VacunadosController@reportePorEdadVacunadosGeneral');
Route::get('vacunas/reportes/edad/estadal/{estado_id}', 'VacunadosController@reportePorEdadVacunadosEstados');










// importar excel
// Route::post('import', 'InventarioController@import')->name('import');