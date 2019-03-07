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

    public function show(Post $post)
    {

    }

    public function edit(Post $post)
    {
    }

    public function update(Request $request, Post $post)
    {
        $formData = $request->all();
        $post = Post::where('id', $post->id)->get();
        $post = $post[0];
        $post->update($formData);

        return redirect('posts');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return redirect('posts');
    }

    public function storeComment(Request $request) {

        $formData = $request->all();
        PostComment::create($formData);

        return redirect('posts');

    }

    public function destroyComment($comment_id) {
        $comment = PostComment::where('id', $comment_id)->get();
        $comment = $comment[0];
        $comment->delete();
        return redirect('posts');
    }

    public function destroyLike($post_id) {

        $like = PostLike::where('post_id', $post_id)->get();

        $like = $like[0];
        $like->delete();
        return redirect('posts');
    }



}
