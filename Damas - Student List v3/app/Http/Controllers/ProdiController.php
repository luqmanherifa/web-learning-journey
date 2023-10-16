<?php

namespace App\Http\Controllers;

use App\Models\Prodi;
use Illuminate\Http\Request;

class ProdiController extends Controller
{
    public function index()
    {
        // $prodi = Prodi::all();
        $prodi = Prodi::with('matakuliah')->get();
        return response()->json($prodi);
    }
}
