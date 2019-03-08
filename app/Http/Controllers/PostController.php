<?php

namespace App\Http\Controllers;

use App\PostComment;
use App\Post;
use App\PostLike;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use Auth;

class PostController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $posts = Post::orderBy('id', 'desc')->get();
        return view('posts.index', compact('posts'));
    }

    public function create()
    {

    }

    public function store(PostRequest $request)
    {
        //dd($request->all());
        $formData = $request->all();
        Post::create($formData);

        return redirect('posts');
    }


    public function update(Request $request)
    {

        if($request->ajax()) {

            // get posts id
            $post_id = $request->post_id;

            // get user_id
            $user_id = $request->user_id;

            // get comment body
            $edited_post = $request->body;

            // create update data
            $updateData = $request->all();

            $post = Post::where('id', $post_id)->get();
            $post = $post[0];
            $post->update($updateData);

        }
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('posts');
    }




}
