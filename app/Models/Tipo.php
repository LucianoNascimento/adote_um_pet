<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipo extends Model
{
    use HasFactory;

    protected $fillable = ['nome'];

    public function animais()
    {
        return $this->hasMany(Animal::class, 'tipo_ani_id');
    }
}
