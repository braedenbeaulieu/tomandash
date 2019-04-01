@extends('master')
@section('title')
    Thomas and Ashley: Gallery
@endsection

@section('content')
<h1>New Image</h1>
<form method="POST" action="{{action ('ImageController@store')}}" enctype="multipart/form-data">
    <label for="image_url">Upload Image: </label><input type="file" name="filename"><br/>
    @include('partials.imageForm',
    ['buttonName' => 'Upload',
     'name'       => old('name'),
     'description'=> old('description'),
     'tagsArray' => []])
</form>
<br/>

@include('partials.errors')

@endsection
