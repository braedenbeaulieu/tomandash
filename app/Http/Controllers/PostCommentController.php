<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PostComment;
use Auth;

class PostCommentController extends Controller
{
    public function store(Request $request) {
        if($request->ajax()) {
            // get posts id
            $post_id = $request->post_id;
            //get user_id
            $user_id = Auth::user()->id;
            //get comment body
            $comment_body = $request->body;

            if(Auth::check() === true) {

                // add like to posts
                $comment = new PostComment;
                $comment->user_id = $user_id;
                $comment->post_id = $post_id;
                $comment->body = $comment_body;
                $comment->save();
                return 'commented ';
            } else {
                return 'must log in';
            }
        }
    }

    public function destroy(Request $request) {
        if($request->ajax()) {
            // get posts id
            $comment_id = $request->comment_id;

            if(Auth::check() === true) {
                // find comment it refers to
                $comment = PostComment::where('id', $comment_id)->get();
                $comment = $comment[0];
                $comment->delete();
                return 'deleted';
            } else {
                return 'not your comment to delete';
            }
        }
    }
}
