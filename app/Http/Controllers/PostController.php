<?php

namespace App\Http\Controllers;

use App\Post;
use App\PostComment;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\User;
use Auth;
use function MongoDB\BSON\toJSON;

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

    public function store(PostRequest $request)
    {
        if($request->ajax()) {

            // get user id
            $user_id = $request->user_id;

            // get post body
            $post_body = $request->body;

            $post = new Post;
            $post->user_id = $user_id;
            $post->body = $post_body;
            $post->save();

            return $post;

        } else {
            return 'can\'t use this data';
        }
    }


    public function update(Request $request)
    {

        if ($request->ajax()) {

            // create update data
            $updateData = $request->all();

            $post = Post::where('id', $request->post_id)->get();
            $post = $post[0];
            $post->update($updateData);

        }
    }

    public function destroy(Request $request)
    {
        if($request->ajax()) {
            $post_id = $request->post_id;
            $post = Post::findOrFail($post_id);
            $post->comments()->delete();
            $post->likes()->delete();
            $post->delete();
        }
    }

    public function allPosts(Request $request) {
        if($request->ajax()) {
            $posts = Post::orderBy('id', 'asc')->get();
            foreach($posts as $post) {
                $post->author = $post->getAuthor($post);
                $post->post_likes = $post->countLikes($post);
                $post->comments = $post->getComments($post);
                $post->has_liked = $post->hasLiked($post);

                foreach($post->comments as $comment) {
                    $comment->author = $comment->getUser($comment)->name;
                }
            }

            return json_encode($posts);
        }
    }

    public function hasLiked(Request $request) {
        if($request->ajax()) {
            $user = User::findOrFail($request->user_id);

            // returns arrays
            $like_user_id = $user->likes()->where('user_id', $request->user_id)->get();
            $like_post_id = $user->likes()->where('post_id', $request->post_id)->get();
            // if the record is already in the database, its been liked by this user
            if(count($like_post_id) > 0 && count($like_user_id) > 0) {
                return 'yes';

                // it hasn't been liked by this user
            } else {
                return 'no';
            }
        }
    }




}
