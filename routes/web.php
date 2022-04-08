<?php

use Illuminate\Support\Facades\Route;

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

Route::group(['prefix' => 'ng'], function () {
    Route::view('docs', 'ng.docs');
    Route::view('lazy', 'ng.lazy');
    Route::view('multi-modules', 'ng.multi-modules');
});
