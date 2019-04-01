@extends('master')
@section('title')
    Thomas and Ashley: Tag Control
@endsection
@section('content')
<h1>Tag Control</h1>

@foreach($tags as $t)
    <strong>{{$t->name}}</strong><br/>
    <a href="{{ action('TagController@edit', $t->id) }}">[edit this tag]</a><br/>
    Images that use Tag:<br/>
    IMPLEMENT LATER
    <form method="post" action="{{ action('TagController@destroy', $t->id) }}">
        {{ method_field('DELETE') }}
        {{ csrf_field() }}
        <input type="submit" value="DELETE TAG">
    </form>

@endforeach
@endsection
