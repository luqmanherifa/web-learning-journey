<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MataKuliahController;
use App\Http\Controllers\DosenController;
use App\Http\Controllers\ProdiController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/mahasiswa', 'MahasiswaController@index');
Route::get('/matakuliah', 'MataKuliahController@index');
Route::get('/dosen', 'DosenController@index');
Route::get('/prodi', 'ProdiController@index');

Route::delete('/mahasiswa/{id}', 'MahasiswaController@destroy');
