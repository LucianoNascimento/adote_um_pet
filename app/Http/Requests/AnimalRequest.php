<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AnimalRequest extends FormRequest
{
    public function authorize()
    {
        return true; // Permitir a autorização do request para fins de validação
    }

    public function rules()
    {
        return [
            'id_ani' => 'uuid', // Valida se o UUID é válido
            'peso_ani' => 'nullable|numeric|min:0', // Valida se o peso é um número positivo ou pode ser nulo
            'idade_ani' => 'nullable|integer|min:0|max:255', // Valida se a idade é um número inteiro positivo de até 8 bits ou pode ser nulo
            'raca_ani' => 'nullable|string|max:100', // Valida se a raça é uma string de até 100 caracteres ou pode ser nulo
            'tipo_ani_id' => 'required|exists:tipos,id', // Valida se o tipo existe na tabela 'tipos'
            'vacinado_ani' => 'boolean', // Valida se o valor é booleano (0 ou 1)
            'vermifugado_ani' => 'boolean', // Valida se o valor é booleano (0 ou 1)
            'castrado_ani' => 'boolean', // Valida se o valor é booleano (0 ou 1)
            'foto_url_ani' => 'nullable|string|max:255|url', // Valida se a URL da foto é uma string de até 255 caracteres e uma URL válida
            'status_ani_id' => 'required|exists:status,id', // Valida se o status existe na tabela 'status'
            'sexo_ani_id' => 'required|exists:sexos,id', // Valida se o sexo existe na tabela 'sexos'
            'descricao_ani' => 'nullable|string|max:65535', // Valida se a descrição é uma string ou nula e até o limite de texto do campo
        ];
    }
}
