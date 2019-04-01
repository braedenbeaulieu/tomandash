<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;
use App\Tag;
use App\Http\Requests\ImageRequest;

class ImageController extends Controller
{
    public function __construct() {
        $this->middleware('auth', ['only' => ['edit', 'destroy']]);
    }
    public function index() {
        $images = Image::all();
        $tags = Tag::all();
        return view('images.index', compact("images","tags"));
    }
    public function create() {
        $tags = Tag::all();
        return view('images.create', compact("tags"));
    }
    public function store(ImageRequest $request) {
        $images = \App\Image::all();
        //need a good way to name images for future use. ID idea not working out will break if no images are
        //present in the gallery.
        $number = \App\Image::all()->last()->id;
        $number = $number + 1;
        $file = $request->filename;
        $extension = '.' . $file->getClientOriginalExtension();
        $imagename = $number . $extension;
        $image = new Image();
        $image->name = $request->name;
        $image->description = $request->description;
        $image->image_url = $imagename;
        $image->save();
        $image->tags()->sync($request->tags);
        $file->move('img/gallery', $imagename);
        return redirect('images');
    }

    public function edit($image) {
        $image = Image::findOrFail($image);
        $tags = Tag::all();
        $tagsArray = $image->tags->pluck('id')->all();
        return view('images.edit', compact("image", "tags", "tagsArray"));
    }

    public function update(Request $request, $image) {
        $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);
        $formdata = $request->all();
        $image = Image::findOrFail($image);
        $image->update($formdata);
        $image->tags()->sync($request->tags);
        return  redirect('images');
    }
    public function destroy(Image $image) {
        $image->delete();
        return redirect('images');
    }
}
