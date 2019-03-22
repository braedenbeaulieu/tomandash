@extends('master')

@section('content')

    <section id="subtitle">
        <h2>Guestbook</h2>
    </section>

    <section id="blog">

        {{--check if they're logged in--}}
        @if(Auth::check())
            {{--make post--}}
            <form id="make-post">
                <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                <textarea name="body" type="text" placeholder="Tell us what you're thinking.."></textarea>
                <input type="button" value="Post" class="create-post">
            </form>
        @else

            {{--can't make a post--}}
            <div id="must-log-in">
                <p>Sorry, you must <a href="{{ route('login') }}">login</a> to post anything.</p>
            </div>
        @endif
        <section id="posts">
        </section>
    </section>

@endsection