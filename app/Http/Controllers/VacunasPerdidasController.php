<?php

namespace App\Http\Controllers;

use App\VacunasPerdidas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class VacunasPerdidasController extends Controller
{
    public function index()
    {
        $vacunas = DB::select("SELECT vacunas_perdidas.id, nombre_vacuna, numero_lote, fecha_vencimiento, numero_dosis_perdidas, vacunas_perdidas.created_at, vacunas_perdidas.updated_at
        FROM vacunas_perdidas
        LEFT JOIN tipo_vacunas on tipo_vacuna_id = tipo_vacunas.id
  
        ORDER BY vacunas_perdidas.id DESC");

        echo json_encode($vacunas); // para pasar en json
    }
        
     public function store(Request $request)
    {
        $vacunado = new VacunasPerdidas();
        $vacunado->tipo_vacuna_id = $request->input('tipo_vacuna_id');
        $vacunado->numero_lote = $request->input('numero_lote');
        $vacunado->fecha_vencimiento = $request->input('fecha_vencimiento');
        $vacunado->numero_dosis_perdidas = $request->input('numero_dosis_perdidas');
        $vacunado->user_id = $request->input('user_id');


        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

   

    public function show($vacunado_id)
    {
        $vacunados =VacunasPerdidas::find($vacunado_id);
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $vacunado_id)
    {
        $vacunado =VacunasPerdidas::find($vacunado_id);
        $vacunado->tipo_vacuna_id = $request->input('tipo_vacuna_id');
        $vacunado->numero_lote = $request->input('numero_lote');
        $vacunado->fecha_vencimiento = $request->input('fecha_vencimiento');
        $vacunado->numero_dosis_perdidas = $request->input('numero_dosis_perdidas');
        $vacunado->user_id = $request->input('user_id');

      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }



    
  
    public function destroy($vacunado_id)
    {
        $vacunado =VacunasPerdidas::find($vacunado_id);
        $vacunado->delete();
    }
}
