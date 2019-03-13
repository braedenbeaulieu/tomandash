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
Route::get('/posts/allPosts', 'PostController@allPosts');
Route::resource('/posts', 'PostController');

// routing for PostLikeController
Route::post('/posts/like', 'PostLikeController@store');
Route::delete('/posts/like/{like_id}', 'PostLikeController@destroy');

// routing for PostCommentController
Route::post('/posts/comment', 'PostCommentController@store');
Route::put('/posts/comment/{comment_id}', 'PostCommentController@update');
Route::delete('/posts/comment/{comment_id}', 'PostCommentController@destroy');

// routing for social media login
Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider');
Route::get('login/{provider}/callback','Auth\LoginController@handleProviderCallback');
