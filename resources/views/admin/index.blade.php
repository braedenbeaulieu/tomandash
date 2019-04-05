@extends('master')

@section('title')
    Thomas and Ashley: Admin Panel
@endsection

@section('content')
            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word">Admin Panel</h2>
            </div>

            <div class="container admin-container">
                <div class="registry-container mw-60 m-auto">

                    <div class="col-sm-12 text-left mb-3">
                        <h3>RSVP Maintenance</h3>
                        <ul class="nav navbar-nav header-links">
                            <li class="nav-item"><a class="nav-link ml-2 mr-2 text-white" href="{{ url('guests') }}">Guest List</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-12 text-left mb-3">
                        <h3>Image Maintenance</h3>
                        <ul class="nav navbar-nav header-links">
                            <li class="nav-item">
                            <li class="nav-item"><a class="nav-link ml-2 mr-2 text-white" data-toggle="modal" data-target="#addImageModal">Add Image</a></li>
                            </li>
                        </ul>
                    </div>

                    <div class="col-sm-12 text-left mb-3">
                        <h3>Tag Maintenance</h3>
                        <ul class="nav navbar-nav header-links">
                            <li class="nav-item"><a class="nav-link ml-2 mr-2 text-white" data-toggle="modal" data-target="#addTagModal">Add Tag</a></li>
                            <li class="nav-item"><a class="nav-link ml-2 mr-2 text-white" href="{{action('TagController@index')}}">Edit Tag</a></li>
                        </ul>
                    </div>

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

    <div class="add-tag-modal modal fade" id="addTagModal" tabindex="-1" role="dialog" aria-labelledby="addTagModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addTagModalLabel">Add Tag</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span style="color: #eed3ab;" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="add-tag-form" method="POST" action="{{action ('ImageController@store')}}" enctype="multipart/form-data">
                        @csrf
                        {{ csrf_field() }}
                        <label for="name">Tag Name: </label><input name="name" type="text"><br/>
                        <input type="submit" value="Add Tag">


                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <input type="button" class="btn btn-primary add-tag-submit" value="Add">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
