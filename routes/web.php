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

Route::get('/', function () {return view('/home.index');});

// routing for auth stuff
Auth::routes(['verify' => true]);
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');
Route::get('/home', function () {return view('/home.index');});

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

Route::get('/ourstory', function () {return view('/ourstory.index');});
Route::get('/thewedding', function () {return view('/thewedding.index');});
Route::get('/weddingparty', function () {return view('/weddingparty.index');});
Route::get('/menu', function () {return view('/menu.index');});
Route::get('/livestream', function () {return view('/livestream.index');});
Route::get('/registry', function () {return view('/registry.index');});
Route::get('/sprucewoodshores', function () {return view('/sprucewoodshores.index');});

// RSVP Routes
Route::get('/guests/create', 'GuestController@create');
Route::post('/guests', 'GuestController@store');
Route::get('/guests/thankyou', function () {return view('/guests/thankyou');});

//Gallery Routes
Route::resource('/gallery', 'ImageController');
Route::resource('tags', 'TagController', ['except' => ['show']]);

// For Admin Panel
Route::group(['middleware' => 'isAdmin'], function () {
    Route::get('/admin', 'AdminController@index');
    Route::get('/guests', 'GuestController@index');
});

