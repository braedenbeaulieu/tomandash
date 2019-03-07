<?php

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

Route::get('/', 'PostController@index');

// routing for auth stuff
Auth::routes();
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

// routing for posts controller
//Route::post('/posts/like/{like}', 'PostController@like');
//Route::delete('/posts/like/{like}', 'PostController@destroyLike');
Route::post('/posts/comment', 'PostController@storeComment');
Route::delete('/posts/comment/{comment}', 'PostController@destroyComment');
Route::resource('/posts', 'PostController');

// routing for PostLikeController
Route::post('/posts/like', 'PostLikeController@store');
Route::delete('/posts/like/{like_id}', 'PostLikeController@destroy');