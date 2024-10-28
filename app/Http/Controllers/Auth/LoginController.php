<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'uid' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('uid', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json(['message' => 'Login successful'], 200);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out'], 200);
    }
}
