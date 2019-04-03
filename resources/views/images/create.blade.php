@extends('master')
@section('title')
    Thomas and Ashley: Gallery
@endsection

@section('content')
    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Upload Image</h2>
    </div>
<form method="POST" action="{{action ('ImageController@store')}}" enctype="multipart/form-data">
    <label for="filename">Upload Image: </label>
    <input type="file" name="filename"><br/>
    @include('partials.imageForm',
    ['buttonName' => 'Upload',
     'name'       => old('name'),
     'description'=> old('description'),
     'tagsArray' => []])
</form>
<br/>

@include('partials.errors')

@endsection
