<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Animal extends Model
{
    use HasFactory;

    //protected $table = 'animais'; 

    protected $fillable = [
        'id_ani',
        'peso_ani',
        'idade_ani',
        'raca_ani',
        'tipo_ani_id',    // Foreign key para Tipos
        'vacinado_ani',
        'vermifugado_ani',
        'castrado_ani',
        'foto_url_ani',
        'status_ani_id',  // Foreign key para Status
        'sexo_ani_id',    // Foreign key para Sexos
        'descricao_ani'
    ];

    protected $primaryKey = 'id_ani';
    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        // Gera automaticamente o UUID para `id_ani` ao criar um novo registro
        static::creating(function ($model) {
            $model->id_ani = (string) Str::uuid();
        });
    }

     // Relacionamento com a tabela Tipos
    public function tipo()
    {
        return $this->belongsTo(Tipo::class, 'tipo_ani_id');
    }

    // Relacionamento com a tabela Status
    public function status()
    {
        return $this->belongsTo(Status::class, 'status_ani_id');
    }

    // Relacionamento com a tabela Sexos
    public function sexo()
    {
        return $this->belongsTo(Sexo::class, 'sexo_ani_id');
    }
}