<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tag;
use App\Http\Requests\TagRequest;
Use App\Image;

class TagController extends Controller
{
    public function index() {
        $tags = Tag::all();
        $images = Image::all();
        return view('tags.index', compact("tags", "images"));
    }
    public function create() {
        return view('tags.create');
    }
    public function store(TagRequest $request) {
        $formData = $request->all();
        Tag::create($formData);
        return redirect('gallery');
    }
    public function edit($tag) {
        $tag = Tag::findOrFail($tag);
        return view('tags.edit', compact("tag"));
    }
    public function update(TagRequest $request, $tag) {
        $formdata = $request->all();
        $tag = Tag::findOrFail($tag);
        $tag->update($formdata);
        return  redirect('gallery');
    }
    public function destroy(Tag $tag) {
        $tag->delete();
        return redirect('gallery');
    }
}
