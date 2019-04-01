@extends('master')
@section('title')
    Thomas and Ashley: Gallery
@endsection
@section('content')
<h1>Edit Image</h1>
<img src="../../../public/img/gallery/{{$image->image_url}}" alt="{{$image->name}}: {{$image->description}}" height="auto" width="200px"><br/><br/>
<form method="POST" action="{{action ('ImageController@update', $image->id)}}">
    {{ method_field('PATCH') }}
    @include('partials.imageForm',
    ['buttonName' => 'Update',
    'name' => $image->name,
    'description' => $image->description])
</form>
<br/>

@include('partials.errors')
@endsection
