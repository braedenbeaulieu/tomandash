<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Tag;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('isAdmin', ['only' => ['index']]);
    }

    public function index() {
        $images = Image::all();
        $tags = Tag::all();
        return view('admin.index', compact("images","tags"));
    }
}
