<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class MahasiswaController extends Controller
{
    public function index()
    {
        $mahasiswa = Mahasiswa::with('prodi.matakuliah.dosen')->paginate(5);
        return response()->json($mahasiswa);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'prodi_id' => 'required|integer',
            'nim' => 'required|integer',
            'nama' => 'required|string',
            'tempat_lahir' => 'required|string',
            'tgl_lahir' => 'required|date',
            'alamat' => 'required|string',
        ]);

        $mahasiswa = Mahasiswa::create($validatedData);

        return response()->json(['message' => 'Data mahasiswa berhasil disimpan.', 'data' => $mahasiswa], 201);
    }

    public function update(Request $request, $id)
    {
        $mahasiswa = Mahasiswa::findOrFail($id);

        $validatedData = $request->validate([
            'prodi_id' => 'required|integer',
            'nim' => 'required|integer',
            'nama' => 'required|string',
            'tempat_lahir' => 'required|string',
            'tgl_lahir' => 'required|date',
            'alamat' => 'required|string',
        ]);

        $mahasiswa->update($validatedData);

        return response()->json(['message' => 'Data mahasiswa berhasil diperbarui.', 'data' => $mahasiswa]);
    }

    public function destroy($id)
    {
        $mahasiswa = Mahasiswa::find($id);
        if (!$mahasiswa) {
            return response()->json(['message' => 'Data mahasiswa tidak ditemukan.'], 404);
        }

        $mahasiswa->delete();

        return response()->json(['message' => 'Data mahasiswa berhasil dihapus.']);
    }
}
