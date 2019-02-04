<?php

namespace App\Http\Controllers;

use App\PostComment;
use App\Post;
use App\PostLike;
use Illuminate\Http\Request;
use Auth;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['only' => ['create', 'edit']]);
        $this->middleware('createAuth', ['only' => ['create', 'edit']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::orderBy('id', 'desc')->get();
        return view('posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostRequest $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */

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
