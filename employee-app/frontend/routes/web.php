<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EmployeeController;

Route::get('/', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/employees', [EmployeeController::class, 'index'])->name('employees');