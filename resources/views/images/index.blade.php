<?php
/**
 * Created by PhpStorm.
 * User: Tim
 * Date: 3/14/2019
 * Time: 11:32 AM
 */
?>
@extends('master')
@section('title')
    Thomas and Ashley: Gallery
@endsection
    <link href="{{ asset('css/gallery.css') }}" rel="stylesheet" type="text/css" >
    <link href="{{asset('css/lightbox.css')}}" rel="stylesheet" type="text/css">

@section('content')
<p>Share a memory with us! Upload a moment from our special day!</p>
<a href="{{action('ImageController@create')}}" id="imageupload">[UPLOAD IMAGE]</a><br/>
<a href="{{action('TagController@create')}}">[CREATE TAG]</a><br/>
<a href="{{action('TagController@index')}}">[TAG CONTROL]</a><br/><br/>

<ul id="filter">
    <li><a href="#">All</a></li>
    @foreach($tags as $t)
        <li class="{{$t->name}}"><a href="#">{{$t->name}}</a></li>
    @endforeach
</ul>

<ul id="gallery">
@foreach($images as $i)
    <!--<a href="{{ action('ImageController@edit', $i->id) }}">[edit]</a>-->
    <!--Image ID: {{$i->id}}<br/>
    Tags:
    @foreach($i->tags as $tag)
        {{$tag->name}}
    @endforeach
            <br/>-->
        <li class=" @foreach($i->tags as $tag){{str_replace(' ', '-', strtolower($tag->name)) . ' '}} @endforeach "><a href="img/gallery/{{$i->image_url}}" data-lightbox="gallery" data-title="{{$i->description}}"><img src="img/gallery/{{$i->image_url}}" alt="{{$i->name}}: {{$i->description}}" class="galleryimage"></a></li>
    <!--<form method="post" action="{{ action('ImageController@destroy', $i->id) }}">
        {{ method_field('DELETE') }}
    {{ csrf_field() }}
            <input type="submit" value="DELETE">
        </form>-->
    @endforeach
</ul>

<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/gallery.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/lightbox.js') }}"></script>
<!--Light Box Options below-->
<script>
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'showImageNumberLabel': false,
        'wrapAround': true,
        'maxHeight': 500
    })
</script>
@endsection
