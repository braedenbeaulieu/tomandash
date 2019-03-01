<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Post;
use App\PostLike;
use Auth;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function posts() {
        $this->hasMany(Post::class);
    }

    public function likes() {
        return $this->hasMany(PostLike::class);
    }

    public function comments() {
        return $this->hasMany(PostComment::class);
    }

    public function isMyComment($comment) {
        if(Auth::user()->id == $comment->user_id) {
            return true;
        } else {
            return false;
        }
    }

    public function isMyPost($post) {
        if(Auth::user()->id == $post->user_id) {
            return true;
        } else {
            return false;
        }
    }

    public function hasLiked($post) {
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
}
