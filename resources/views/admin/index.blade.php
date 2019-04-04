@extends('master')

@section('title')
    Thomas and Ashley: Admin Panel
@endsection

@section('content')
    @if(Auth::check())
        @if(Auth::user()->role === 1)
            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word">Admin Panel</h2>
            </div>

            <div class="container">
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
                            <li class="nav-item"><a class="nav-link ml-2 mr-2 text-white" href="{{action('ImageController@create')}}" id="imageupload">Add Image</a></li>
                        </ul>
                    </div>

                    <div class="col-sm-12 text-left mb-3">
                        <h3>Tag Maintenance</h3>
                        <ul class="nav navbar-nav header-links">
                            <li class="nav-item"><a class="nav-link ml-2 mr-2 text-white" href="{{action('TagController@create')}}">Add Tag</a></li>
                            <li class="nav-item"><a class="nav-link ml-2 mr-2 text-white" href="{{action('TagController@index')}}">Edit Tag</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        @endif
    @endif
@endsection
