@extends('master')

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Guestbook</h2>
    </div>

    <section id="blog">
        <div class="guestbook-container">
            <p class="message">Please write a message for us here!</p>

            @if(Auth::check())
                <form id="make-post">
                    <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                    <textarea name="body" type="text" placeholder="Tell us what you're thinking.."></textarea>
                    <input type="button" value="Post" class="create-post">
                </form>

            @else

                <div id="must-log-in">
                    <textarea placeholder="Tell us what you're thinking.." disabled="disabled" class="grey-post-box"></textarea>
                    <input type="button" class="grey-post-button" value="Post">
                </div>
            @endif

            <section id="posts">

            </section>
        </div>
    </section>

@endsection