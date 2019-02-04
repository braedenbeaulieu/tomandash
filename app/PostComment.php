<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostComment extends Model
{
    public function post() {
        return $this->belongsTo(Post::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function getUsername($comment) {
        $username = $comment->user()->where('id', $comment->user_id)->get();
        return $username[0];
    }

    public function timeAgo($timestamp) {

        $timeAgo = strtotime($timestamp);
        $currentTime = time();
        $timeDifference = $currentTime - $timeAgo;
        $seconds = $timeDifference;
        $minutes = round($seconds / 60);
        $hours = round($seconds / 3600);
        $days = round($seconds / 86400);
        $weeks = round($seconds / 604800);
        $months = round($seconds / 2629440);
        $years = round($seconds / 31553280);

        if($seconds <= 60) {
            return "Just Now";
        } else if($minutes <= 60) {
            if($minutes == 1) {
                return "one minute ago";
            } else {
                return "$minutes minutes ago";
            }
        } else if($hours <= 24) {
            if($hours == 1) {
                return "one hour ago";
            } else {
                return "$hours hours ago";
            }
        } else if($days <= 7) {
            if($days == 1) {
                return "yesterday";
            } else {
                return "$days days ago";
            }
        } else if($weeks <= 4.3) {
            if($weeks == 1) {
                return "a week ago";
            } else {
                return "$weeks weeks ago";
            }
        } else if($months <= 12) {
            if($months == 1) {
                return "a month ago";
            } else {
                return "$months months ago";
            }
        } else {
            if($years == 1) {
                return "one year ago";
            } else {
                return "$years years ago";
            }
        }
    }
}
