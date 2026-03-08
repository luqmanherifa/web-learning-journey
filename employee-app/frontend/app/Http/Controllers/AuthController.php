<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    public function showLogin()
    {
        return view('login');
    }

    public function login(Request $request)
    {
        $response = Http::post(env('PUBLIC_API_URL') . '/login', [
            'username' => $request->username,
            'password' => $request->password
        ]);

        if ($response->successful()) {
            session(['token' => $response['token']]);
            return redirect('/employees');
        }

        return back()->with('error', 'Login failed');
    }

    public function logout()
    {
        session()->forget('token');
        session()->invalidate();
        session()->regenerateToken();

        return redirect()->route('login');
    }
}