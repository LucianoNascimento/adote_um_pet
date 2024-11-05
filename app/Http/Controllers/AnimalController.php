<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use App\Http\Requests\AnimalRequest; // Importa o Form Request
use Illuminate\Http\JsonResponse;

class AnimalController extends Controller
{
    public function index(): JsonResponse
    {
        $animais = Animal::all();
        return response()->json($animais); // Retorna a lista de animais como JSON
    }

    public function store(AnimalRequest $request): JsonResponse // Usa o Form Request aqui
    {
        $animal = Animal::create($request->validated());

        return response()->json([
            'message' => 'Animal cadastrado com sucesso!',
            'animal' => $animal,
        ], 201); // Retorna o animal criado com status 201
    }

    public function show(Animal $animal): JsonResponse
    {
        return response()->json($animal); // Retorna um único animal como JSON
    }

    public function update(AnimalRequest $request, Animal $animal): JsonResponse // Usa o Form Request aqui
    {
        $animal->update($request->validated());

        return response()->json([
            'message' => 'Animal atualizado com sucesso!',
            'animal' => $animal,
        ]);
    }

    public function destroy(Animal $animal): JsonResponse
    {
        $animal->delete();

        return response()->json([
            'message' => 'Animal excluído com sucesso!'
        ], 204); // Retorna status 204 No Content após a exclusão
    }
}

