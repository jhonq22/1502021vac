<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Vacunados;
use Illuminate\Http\Request;

class VacunadosController extends Controller
{
    public function index()
    {
        $vacunados =Vacunados::get();
        echo json_encode($vacunados);
    }
    

    public function listadoVacunados()
    {
        $inventarios = DB::select("SELECT vacunados.id, cedula, apellidos, nombres, sexo, fecha_nacimiento, telefono, estado, municipio, centro_salud, vacunados.direccion,establecimiento_laboral , email, dosis1, fecha_dosis1, dosis2,fecha_dosis2, nombre_vacuna, pueblo_indigena, grupo_especial, etnia
        FROM vacunados
        LEFT JOIN estados ON estado_id = estados.id
        LEFT JOIN municipios ON municipio_id = municipios.id
        LEFT JOIN centro_salud ON centro_salud_id = centro_salud.id
        LEFT JOIN tipo_vacunas on tipo_vacuna_id = tipo_vacunas.id
        LEFT JOIN etnias on etnia_id = etnias.id
        LEFT JOIN grupo_especiales on grupo_especial_id = grupo_especiales.id
        LEFT JOIN pueblos_indigenas on pueblo_indigena_id = pueblos_indigenas.id
  
        ORDER BY vacunados.id DESC");

        echo json_encode($inventarios); // para pasar en json
    }



    public function listadoVacunadosPorCedula($cedula)
    {
        $inventarios = DB::select("SELECT vacunados.id, cedula, apellidos, nombres, sexo, fecha_nacimiento, telefono, estado, municipio, centro_salud, vacunados.direccion,establecimiento_laboral , email, dosis1, fecha_dosis1, dosis2,fecha_dosis2, nombre_vacuna, pueblo_indigena, grupo_especial, etnia
        FROM vacunados
        LEFT JOIN estados ON estado_id = estados.id
        LEFT JOIN municipios ON municipio_id = municipios.id
        LEFT JOIN tipo_vacunas on tipo_vacuna_id = tipo_vacunas.id
        LEFT JOIN etnias on etnia_id = etnias.id
        LEFT JOIN centro_salud ON centro_salud_id = centro_salud.id
        LEFT JOIN grupo_especiales on grupo_especial_id = grupo_especiales.id
        LEFT JOIN pueblos_indigenas on pueblo_indigena_id = pueblos_indigenas.id
        WHERE vacunados.cedula = ?
        ORDER BY vacunados.id DESC", [$cedula]);

        echo json_encode($inventarios); // para pasar en json
    }




    public function cedulaVacunadosRegistrado($cedula)
    {
        $inventarios = DB::select("SELECT * 
        FROM vacunados
        WHERE vacunados.cedula = ?", [$cedula]);

        echo json_encode($inventarios); // para pasar en json
    }




    
     public function store(Request $request)
    {
        $vacunado = new Vacunados();
        $vacunado->cedula = $request->input('cedula');
        $vacunado->nombres = $request->input('nombres');
        $vacunado->apellidos = $request->input('apellidos');
        $vacunado->fecha_nacimiento = $request->input('fecha_nacimiento');
        $vacunado->telefono = $request->input('telefono');
        $vacunado->estado_id = $request->input('estado_id');
        $vacunado->municipio_id = $request->input('municipio_id');
        $vacunado->parroquia_id = $request->input('parroquia_id');
        $vacunado->centro_salud_id = $request->input('centro_salud_id');
        $vacunado->direccion = $request->input('direccion');
        $vacunado->sexo = $request->input('sexo');
        $vacunado->email = $request->input('email');
        $vacunado->dosis1 = $request->input('dosis1');
        $vacunado->fecha_dosis1 = $request->input('fecha_dosis1');
        $vacunado->dosis2 = $request->input('dosis2');
        $vacunado->fecha_dosis2 = $request->input('fecha_dosis2');
        $vacunado->tipo_vacuna_id = $request->input('tipo_vacuna_id');
        $vacunado->imagen_qr = $request->input('imagen_qr');
        $vacunado->lote1 = $request->input('lote1');
        $vacunado->lote2 = $request->input('lote2');
        $vacunado->establecimiento_laboral = $request->input('establecimiento_laboral');
        $vacunado->pueblo_indigena_id = $request->input('pueblo_indigena_id');
        $vacunado->etnia_id = $request->input('etnia_id');
        $vacunado->grupo_especial_id = $request->input('grupo_especial_id');
        $vacunado->user_id = $request->input('user_id');


        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

   

    public function show($vacunado_id)
    {
        $vacunados =Vacunados::find($vacunado_id);
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $vacunado_id)
    {
        $vacunado =Vacunados::find($vacunado_id);
        $vacunado->cedula = $request->input('cedula');
        $vacunado->nombres = $request->input('nombres');
        $vacunado->apellidos = $request->input('apellidos');
        $vacunado->fecha_nacimiento = $request->input('fecha_nacimiento');
        $vacunado->telefono = $request->input('telefono');
        $vacunado->estado_id = $request->input('estado_id');
        $vacunado->municipio_id = $request->input('municipio_id');
        $vacunado->parroquia_id = $request->input('parroquia_id');
        $vacunado->centro_salud_id = $request->input('centro_salud_id');
        $vacunado->direccion = $request->input('direccion');
        $vacunado->sexo = $request->input('sexo');
        $vacunado->email = $request->input('email');
        $vacunado->dosis1 = $request->input('dosis1');
        $vacunado->fecha_dosis1 = $request->input('fecha_dosis1');
        $vacunado->dosis2 = $request->input('dosis2');
        $vacunado->fecha_dosis2 = $request->input('fecha_dosis2');
        $vacunado->tipo_vacuna_id = $request->input('tipo_vacuna_id');
        $vacunado->lote1 = $request->input('lote1');
        $vacunado->lote2 = $request->input('lote2');
        $vacunado->establecimiento_laboral = $request->input('establecimiento_laboral');
        $vacunado->pueblo_indigena_id = $request->input('pueblo_indigena_id');
        $vacunado->etnia_id = $request->input('etnia_id');
        $vacunado->grupo_especial_id = $request->input('grupo_especial_id');
        $vacunado->user_id = $request->input('user_id');












        //$vacunado->imagen_qr = $request->input('imagen_qr');
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }



    public function actualizarDosis(Request $request, $vacunado_id)
    {
        $vacunado =Vacunados::find($vacunado_id);
    
      
        $vacunado->dosis2 = $request->input('dosis2');
        $vacunado->fecha_dosis2 = $request->input('fecha_dosis2');
        $vacunado->lote2 = $request->input('lote2');
     
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

  
    public function destroy($vacunado_id)
    {
        $vacunado =Vacunados::find($vacunado_id);
        $vacunado->delete();
    }






// REPORTES GENERAL //


public function reportePorEdadVacunadosGeneral()
{
    $vacunas = DB::select("SELECT
    estados.estado,	centro_salud,
    SUM(IF (fecha_nacimiento BETWEEN 1 AND 12, 1, 0)) de_1_a_12,
    SUM(IF (fecha_nacimiento BETWEEN 13 AND 21, 1, 0)) de_13_a_21,
    SUM(IF (fecha_nacimiento BETWEEN 22 AND 59, 1, 0)) de_22_a_59,
    SUM(IF (fecha_nacimiento >= 60, 1, 0)) de_30_o_mas,
    SUM(IF (fecha_nacimiento >= 1, 1, 0)) total
  FROM vacunados
  LEFT JOIN users ON user_id = users.id
  LEFT JOIN estados ON users.estado_id = estados.id
  LEFT JOIN centro_salud ON vacunados.centro_salud_id = centro_salud.id
   GROUP BY estados.estado, centro_salud");

    echo json_encode($vacunas); // para pasar en json
}



public function reportePorEdadVacunadosEstados($estado_id)
{
    $vacunas = DB::select("SELECT
    estados.estado, centro_salud,	
    SUM(IF (fecha_nacimiento BETWEEN 1 AND 12, 1, 0)) de_1_a_12,
    SUM(IF (fecha_nacimiento BETWEEN 13 AND 21, 1, 0)) de_13_a_21,
    SUM(IF (fecha_nacimiento BETWEEN 22 AND 59, 1, 0)) de_22_a_59,
    SUM(IF (fecha_nacimiento >= 60, 1, 0)) de_30_o_mas,
    SUM(IF (fecha_nacimiento >= 1, 1, 0)) total
  FROM vacunados
  LEFT JOIN users ON user_id = users.id
  LEFT JOIN estados ON users.estado_id = estados.id
  LEFT JOIN centro_salud ON vacunados.centro_salud_id = centro_salud.id
  WHERE vacunados.estado_id = ?
  GROUP BY estados.estado, centro_salud",  [$estado_id]);

    echo json_encode($vacunas); // para pasar en json
}





public function listadoVacunadosExcel()
{
    $inventarios = DB::select("SELECT cedula, nombres, apellidos, estado, centro_salud,  email, fecha_dosis1, nombre_vacuna
    FROM vacunados
    LEFT JOIN estados ON estado_id = estados.id
    LEFT JOIN municipios ON municipio_id = municipios.id
    LEFT JOIN centro_salud ON centro_salud_id = centro_salud.id
    LEFT JOIN tipo_vacunas on tipo_vacuna_id = tipo_vacunas.id
    LEFT JOIN etnias on etnia_id = etnias.id
    LEFT JOIN grupo_especiales on grupo_especial_id = grupo_especiales.id
    LEFT JOIN pueblos_indigenas on pueblo_indigena_id = pueblos_indigenas.id

    ORDER BY vacunados.id DESC");

    echo json_encode($inventarios); // para pasar en json
}








}
