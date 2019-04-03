@extends('master')
@section('title')
    Thomas and Ashley: Gallery
@endsection
@section('content')
    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Edit Image</h2>
    </div>
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
