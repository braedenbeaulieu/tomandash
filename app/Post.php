<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Post extends Model
{

    protected $table = 'posts';
    protected $fillable = ['user_id', 'body'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function likes() {
        return $this->hasMany(PostLike::class);
    }

    public function comments() {
        return $this->hasMany(PostComment::class);
    }

    public function countLikes($post) {
        return count($post->likes()->where('post_id', $post->id)->get());
    }

    public function getComments($post) {
        return $post->comments()->where('post_id', $post->id)->orderBy('id', 'asc')->get();
    }

    public function getAuthor($post) {
        return $post->user()->where('id', $post->user_id)->value('name');
    }

    public function getAuthorId($post) {
        return $post->user()->where('id', $post->user_id)->value('id');
    }

    public function hasLiked($post) {
        //$user = User::findOrFail($post->user_id);
        if(Auth::check())
            $user = Auth::user();

        // returns arrays
        $like_user_id = $user->likes()->where('user_id', $user->id)->get();
        $like_post_id = $user->likes()->where('post_id', $post->id)->get();

        // if the record is already in the database, its been liked by this user
        if(count($like_post_id) > 0 && count($like_user_id) > 0) {
            return true;

            // it hasn't been liked by this user
        } else {
            return false;
        }
    }

    public function getProviderId($post) {
        $provider = SocialIdentity::where('user_id', $post->user_id)->get();
        if(!$provider->isEmpty()) {
            $user = User::findOrFail($post->user_id);
            return $user->identities()->where('user_id',$user->id)->first()->provider_id;
        } else {
            return 'is not on facebook';
        }
    }
}
