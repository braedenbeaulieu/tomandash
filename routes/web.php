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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// routing for posts controller
Route::get('/posts/{post}/like', 'PostController@like');
Route::post('/posts/comment', 'PostController@storeComment');
Route::delete('/posts/comment/{comment}', 'PostController@destroyComment');
Route::resource('/posts', 'PostController');