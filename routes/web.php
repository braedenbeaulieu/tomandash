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
Route::get('/guestbook', 'PostController@index');
Route::get('/guestbook/allPosts', 'PostController@allPosts');
Route::resource('/guestbook', 'PostController');

// routing for PostLikeController
Route::post('/guestbook/like', 'PostLikeController@store');
Route::delete('/guestbook/like/{like_id}', 'PostLikeController@destroy');

// routing for PostCommentController
Route::post('/guestbook/comment', 'PostCommentController@store');
Route::put('/guestbook/comment/{comment_id}', 'PostCommentController@update');
Route::delete('/guestbook/comment/{comment_id}', 'PostCommentController@destroy');

// routing for social media login
Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider');
Route::get('login/{provider}/callback','Auth\LoginController@handleProviderCallback');

// routing for RsvpController
Route::get('/rsvp', 'RSVPController@show');
Route::post('/rsvp', 'RSVPController@mailToTAA');