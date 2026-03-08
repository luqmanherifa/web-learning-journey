<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class EmployeeController extends Controller
{
  public function index()
  {
      $token = session('token');

      if (!$token) {
          return redirect()->route('login');
      }

      $response = Http::withToken($token)
          ->get(env('PUBLIC_API_URL') . '/api_fe/list_employee');

      if (!$response->successful()) {
          return redirect()->route('login');
      }

      $employees = $response['data'] ?? [];

      return view('employees', compact('employees'));
  }
}