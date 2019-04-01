@extends('master')
@section('title')
    Thomas and Ashley: Tag Control
@endsection
@section('content')
    <div class="container">
<h1>New Tag</h1>
<form method="POST" action="{{action ('TagController@store')}}">
    @include('partials.tagsForm',
    ['buttonName' => 'Create',
     'name'       => old('name')])
</form>
<br/>

@include('partials.errors')
@endsection
