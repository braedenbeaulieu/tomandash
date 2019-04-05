@extends('master')

@section('title')
    Thomas and Ashley: Gallery
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Gallery</h2>
    </div>

    <div class="gallery-container">

        <p class="py-3">Share a memory with us! Upload a moment from our special day.</p>
        {{--<p class="pt-1 pb-4">Upload a moment from our special day, or post to Instagram with the <a href="https://www.instagram.com" target="_blank">#tomandash</a>!</p>--}}

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
                    <div class="picture @foreach($i->tags as $tag){{str_replace(' ', '-', strtolower($tag->name)) . ' '}} @endforeach" id="@foreach($i->tags as $tag){{str_replace(' ', '-', strtolower($tag->name)) . ' '}}@endforeach">
                        <a id="anchor" href="img/gallery/{{$i->image_url}}" data-lightbox="gallery" data-title="{{$i->description}}">
                            <img class="galleryimage" src="img/gallery/{{$i->image_url}}" alt="{{$i->name}}: {{$i->description}}">
                        </a>
                    </div>
                    @if(Auth::check())
                        @if(Auth::user()->role === 1)
                            <div class="dropdown edit-delete-image">
                                <button class="btn dropdown-toggle" title="edit and delete" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>

                                <div class="image-dropdown-menu-{{$i->id}} dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <input type="button" id="{{$i->id}}" class="buttons edit-image-button" value="Edit" data-toggle="modal" data-target="#editImageModal">
                                    <input type="button" class="buttons delete-image delete-image-button" value="Delete">
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

    <div class="upload-modal modal fade" id="editImageModal" tabindex="-1" role="dialog" aria-labelledby="editImageModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editImageModalLabel">Edit Image</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span style="color: #eed3ab;" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <img height="200px" width="auto">
                    <form class="edit-image-form" method="POST"  enctype="multipart/form-data">
                        @csrf
                        {{ method_field('PATCH') }}
                        <label id="name" for="name"hidden>Image Name:
                            <input name="name" type="text"></label>
                        <label id="description" class="edit-description-image" for="description">Description:
                            <textarea class="edit-image-description" name="description"></textarea>
                        </label>
                        <label id="tags" class="edit-tags-container" for="tags">Choose Tags:
                            @foreach($tags as $t)
                                &nbsp;<input type="checkbox" name="tags[]" value="{{$t->id}}" id="{{$t->name}}">&nbsp{{$t->name}}
                            @endforeach
                        </label>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <input type="submit" class="btn btn-primary edit-image-submit" value="Edit">
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
