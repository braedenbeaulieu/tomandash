<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Post;
use App\PostLike;

class PostLikeController extends Controller
{
    public function store(Request $request) {
        if($request->ajax()) {

            // get posts id
            $post_id = $request->post_id;
            //get user_id
            $user_id = Auth::user()->id;
            // find the posts that it refers to
            $post = Post::findOrFail($post_id);
            // if the user has already liked this posts, don't let them again
            if(Auth::user()->hasLiked($post) === false) {

                // add like to posts
                $like = new PostLike;
                $like->user_id = $user_id;
                $like->post_id = $post->id;
                $like->save();
                return 'liked';
            } else {
                return 'already liked';
            }
        }
    }

    public function destroy(Request $request) {
        if($request->ajax()) {
            // get posts id
            $post_id = $request->post_id;
            //find the post it refers to
            $post = Post::findOrFail($post_id);

            // if the user has already liked this posts, don't let them again
            if(Auth::user()->hasLiked($post) === true) {
                // find like it refers to
                $like = PostLike::where('post_id', $post_id)->get();
                $like = $like[0];
                $like->delete();
                return 'unliked';
            } else {
                return 'couldn\'t unlike';
            }
        }
    }
}
