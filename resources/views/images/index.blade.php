@extends('master')
@section('title')
    Thomas and Ashley: Gallery
@endsection



@section('content')







    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Gallery</h2>
    </div>
    <div class="gallery-container">
        <div class="admin-controls">
            <h3 class="pb-3">Admin Controls</h3>
            <div class="gallery-links">

                <a href="{{action('ImageController@create')}}" id="imageupload">[UPLOAD IMAGE]</a><br/>
                <a href="{{action('TagController@create')}}">[CREATE TAG]</a><br/>
                <a href="{{action('TagController@index')}}">[TAG CONTROL]</a><br/><br/>
            </div>
        </div>



        <p>Share a memory with us! Upload a moment from our special day!</p>



        <ul id="filter" class="tags">
            <li>
                <a href="#">All</a>
            </li>
            @foreach($tags as $t)
                <li class="{{$t->name}}">
                    <a href="#">{{$t->name}}</a>
                </li>
            @endforeach
        </ul>


        <div class="grid" id="gallery">
            <div class="grid-sizer"></div>
            @foreach($images as $i)
                <div class="picture grid-item @foreach($i->tags as $tag){{str_replace(' ', '-', strtolower($tag->name)) . ' '}} @endforeach ">
                    <a href="img/gallery/{{$i->image_url}}" data-lightbox="gallery" data-title="{{$i->description}}">
                        <img src="img/gallery/{{$i->image_url}}" alt="{{$i->name}}: {{$i->description}}" class="galleryimage">
                    </a>
                </div>
            @endforeach
        </div>

    </div>

    <link href="{{asset('css/lightbox.css')}}" rel="stylesheet" type="text/css">
    <script>
        lightbox.option({
            'alwaysShowNavOnTouchDevices': true,
            'showImageNumberLabel': false,
            'wrapAround': true,
            'maxHeight': 500
        })
    </script>
@endsection
