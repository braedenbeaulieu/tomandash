<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
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
        return $post->likes()->where('post_id', $post->id)->get();
    }

    public function getComments($post) {
        return $post->comments()->where('post_id', $post->id)->orderBy('id', 'desc')->get();
    }

    public function getAuthor($post) {
        return $post->user()->where('id', $post->user_id)->value('name');
    }
}
