<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('animals', function (Blueprint $table) {
            $table->uuid('id_ani');
            $table->float('peso_ani')->nullable();
            $table->tinyInteger('idade_ani')->nullable();
            $table->string('raca_ani', 100)->nullable();
            $table->unsignedBigInteger('tipo_ani_id');
            $table->boolean('vacinado_ani')->default(false);
            $table->boolean('vermifugado_ani')->default(false);
            $table->boolean('castrado_ani')->default(false);
            $table->string('foto_url_ani', 1000)->nullable();
            $table->unsignedBigInteger('status_ani_id');
            $table->unsignedBigInteger('sexo_ani_id');
            $table->text('descricao_ani')->nullable();
            $table->timestamps();
    
            // Foreign keys
            $table->foreign('tipo_ani_id')->references('id')->on('tipos');
            $table->foreign('status_ani_id')->references('id')->on('status');
            $table->foreign('sexo_ani_id')->references('id')->on('sexos');
        });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animals');
    }
};
