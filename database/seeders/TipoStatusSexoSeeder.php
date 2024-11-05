<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tipo;
use App\Models\Status;
use App\Models\Sexo;

class TipoStatusSexoSeeder extends Seeder
{
    public function run()
    {
        // Inserir dados na tabela `tipos`
        Tipo::insert([
            ['id' => 1, 'nome' => 'Cachorro'],
            ['id' => 2, 'nome' => 'Gato']
        ]);

        // Inserir dados na tabela `status`
        Status::insert([
            ['id' => 1, 'nome' => 'Disponível'],
            ['id' => 2, 'nome' => 'Não Disponível']
        ]);

        // Inserir dados na tabela `sexos`
        Sexo::insert([
            ['id' => 1, 'nome' => 'Macho'],
            ['id' => 2, 'nome' => 'Fêmea']
        ]);
    }
}
