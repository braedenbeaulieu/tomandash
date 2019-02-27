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

    }

    public function destroyComment(PostComment $comment) {
        $post_id = PostComment::where('post_id', $comment->post_id)->pluck('post_id');
        $comment->delete();
        return redirect('posts/' . $post_id[0]);
    }

    public function like(Request $request) {
        if($request->ajax()) {
            // get posts id segment
            $segment = $request->segment(2);
            // find the posts that it refers to
            $post = Post::findOrFail($segment);
            // if the user has already liked this posts, don't let them again

            if(Auth::user()->hasLiked($post->id) === 'no') {

                // add like to posts(HOW DO I PUT THIS INTO LIKE CONTROLLER?!)
                //$post->addLike();
                $like = new PostLike;
                $like->user_id = Auth::user()->id;
                $like->post_id = $post->id;
                $like->save();
                return 'liked';
            }
        }
    }

    public function comment(Request $request) {
        // create new comment
        // user_id, post_id, body
        if($request->ajax()) {
            // get posts id segment
            $segment = $request->segment(2);
            // find the posts that it refers to
            $post = Post::findOrFail($segment);
            $comment = new Comment;
            $comment->user_id = Auth::user()->id;
            $comment->post_id = $post->id;
            $comment->body = $request->comment;
            $comment->save();
            return 'commented';
        }
    }

}
