<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'status'; 

    use HasFactory;

    
    protected $fillable = ['nome'];

    public function animais()
    {
        return $this->hasMany(Animal::class, 'status_ani_id');
    }
}
