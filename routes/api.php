<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('homes', 'HomesController@index');

Route::get('homes/{home}', 'HomesController@show');

Route::post('homes', 'HomesController@store');

Route::put('homes/{home}', 'HomesController@update');

Route::delete('homes/{home}', 'HomesController@delete');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
