<?php

namespace App\Http\Controllers;

use App\Post;
use App\PostLike;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use App\User;
use Auth;
use App\SocialIdentity;
use function MongoDB\BSON\toJSON;

class PostController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        return view('posts.index');
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

            // get provider id from user model
            $post_provider_id = Auth::user()->getProviderId();

            if($post_provider_id != 'is not on facebook') {
                $post->avatar = 'https://graph.facebook.com/' . $post_provider_id . '/picture?type=square';
            } else if($post_provider_id === 'is not on facebook') {
                $post->avatar = 'img/GenericAvatar.jpg';
            }

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

                // get provider_id
                $post_provider_id = $post->getProviderId($post);
                $post->author = $post->getAuthor($post);
                $post->post_likes = $post->countLikes($post);
                $post->comments = $post->getComments($post);
                $post->has_liked = $post->hasLiked($post);

                if($post_provider_id != 'is not on facebook') {
                    $post->avatar = 'https://graph.facebook.com/' . $post_provider_id . '/picture?type=square';
                } else if($post_provider_id === 'is not on facebook') {
                    $post->avatar = 'img/GenericAvatar.jpg';
                }

                foreach($post->comments as $comment) {
                    // get comment provider id
                    $comment_provider_id = $comment->getProviderId($comment);

                    $comment->author = $comment->getUser($comment)->name;
                    if($comment_provider_id != 'is not on facebook') {
                        $comment->avatar = 'https://graph.facebook.com/' . $comment_provider_id . '/picture?type=square';
                    } else if($comment_provider_id === 'is not on facebook') {
                        $comment->avatar = 'img/GenericAvatar.jpg';
                    }
                }
            }
            return json_encode($posts);
        }
    }
}
