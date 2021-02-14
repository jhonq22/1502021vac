<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vacunados extends Model
{
    protected $table = 'vacunados';

     protected $fillable  = [
      'cedula',
      'nombres',
      'apellidos',
      'sexo',
      'fecha_nacimiento',
      'telefono',
      'email',
      'dosis1',
      'fecha_dosis1',
      'dosis2',
      'fecha_dosis2',
      'tipo_vacuna_id',
      'imagen_qr',
      'estado_id',
      'municipio_id',
      'parroquia_id',
      'centro_salud_id',
      'direccion',
      'lote1',
      'lote2',
      'establecimiento_laboral',
      'pueblo_indigena_id',
      'etnia_id',
      'grupo_especial_id',
      'user_id'
    ];
}
