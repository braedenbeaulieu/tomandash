@extends('master')

@section('title')
    Thomas and Ashley: Gallery
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Gallery</h2>
    </div>

    <div class="gallery-container">
        {{--<div class="admin-controls d-none">--}}
            {{--<h3 class="pb-3">Admin Controls</h3>--}}
            {{--<div class="gallery-links">--}}

                {{--<a href="{{action('ImageController@create')}}" id="imageupload">[UPLOAD IMAGE]</a><br/>--}}
                {{--<a href="{{action('TagController@create')}}">[CREATE TAG]</a><br/>--}}
                {{--<a href="{{action('TagController@index')}}">[TAG CONTROL]</a><br/><br/>--}}
            {{--</div>--}}
        {{--</div>--}}



        <p class="pt-3 pb-1">Share a memory with us!</p>
        <p class="pt-1 pb-4">Upload a moment from our special day, or post to Instagram with the <a href="https://www.instagram.com" target="_blank">#tomandash</a>!</p>

        @if(Auth::check())
            <button type="button" class="btn btn-primary upload-image-button" data-toggle="modal" data-target="#addImageModal">
                Upload Image
            </button>
        @else
            <div>
                <button type="button" class="btn btn-secondary cant-upload">
                    Upload Image
                </button>
            </div>
        @endif

        <ul id="filter" class="tags">
            <li class="highlight">
                <a>All</a>
            </li>
            @foreach($tags as $t)
                <li class="{{$t->name}}">
                    <a>{{$t->name}}</a>
                </li>
            @endforeach
        </ul>


        <div class="grid" id="gallery">
            <div class="grid-sizer"></div>
            @foreach($images as $i)
                <div class="image-container grid-item" id="{{$i->id}}">
                    <div class="picture @foreach($i->tags as $tag){{str_replace(' ', '-', strtolower($tag->name)) . ' '}} @endforeach ">
                        <a href="img/gallery/{{$i->image_url}}" data-lightbox="gallery" data-title="{{$i->description}}">
                            <img class="galleryimage" src="img/gallery/{{$i->image_url}}" alt="{{$i->name}}: {{$i->description}}">

                        </a>
                    </div>
                    @if(Auth::check())
                        @if(Auth::user()->role === 1)
                            <div class="dropdown edit-delete-image e-d-{{$i->id}}">
                                <button class="btn dropdown-toggle" title="edit and delete" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>

                                <div class="image-dropdown-menu-{{$i->id}} dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {{--<input class="edit-image-button buttons" id="{{$i->id}}" type="button" value="Edit" data-toggle="collapse" data-target=".image-dropdown-menu-{{$i->id}}">--}}
                                    {{--<input class="buttons delete-image delete-image-button" id="{{$i->id}}" type="button" value="Delete" data-toggle="collapse" data-target=".image-dropdown-menu-{{$i->id}}">--}}
                                    {{--<form method="post" action="{{action('ImageController@destroy')}}">--}}
                                        {{--<input type="submit" value="Delete">--}}
                                    {{--</form>--}}
                                    <button class="edit-image-button buttons">Edit</button>
                                    <button class="buttons delete-image delete-image-button">Delete</button>
                                </div>
                            </div>
                        @endif
                    @endif
                </div>
            @endforeach
        </div>

    </div>

    <div class="upload-modal modal fade" id="addImageModal" tabindex="-1" role="dialog" aria-labelledby="addImageModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addImageModalLabel">Upload Image</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span style="color: #eed3ab;" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="upload-form" method="POST" action="{{action ('ImageController@store')}}" enctype="multipart/form-data">
                        @csrf
                        <div class="upload-image-container">
                            <input class="btn" type="file" name="filename">

                        </div>
                        <label for="name"hidden>Image Name:
                        <input name="name" type="text" value="name" ></label>
                        <label class="description-image" for="description">Description:
                            <textarea class="image-description" name="description">{{old('description')}}</textarea>
                        </label>
                        <label class="tags-container" for="tags">Choose Tags:
                            @foreach($tags as $t)
                                &nbsp;<input type="checkbox" name="tags[]" value="{{$t->id}}" {{--@if(in_array($t->id, $tagsArray)) checked @endif--}}>&nbsp;{{$t->name}}
                            @endforeach
                        </label>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <input type="button" class="btn btn-primary upload-image-submit" value="Upload">
                        </div>
                    </form>
                </div>
            </div>
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
