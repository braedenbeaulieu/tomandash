<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        "name",
        "description",
        "filename"
    ];
    public function tags() {
        return $this->belongsTomany(Tag::class)->withTimestamps();
    }
}
