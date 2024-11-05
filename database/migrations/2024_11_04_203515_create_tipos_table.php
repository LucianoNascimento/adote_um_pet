<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTiposTable extends Migration
{
    public function up()
    {
        Schema::create('tipos', function (Blueprint $table) {
            $table->id(); // Cria a coluna `id` auto-incremento
            $table->string('nome'); // Cria a coluna `nome` para armazenar o status
            $table->timestamps(); // Cria as colunas `created_at` e `updated_at`
        });
    }

    public function down()
    {
        Schema::dropIfExists('tipos'); // Remove a tabela se a migração for revertida
    }
}

