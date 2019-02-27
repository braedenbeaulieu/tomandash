@extends('master')

@section('content')
    <section id="subtitle">
        <h2>Guestbook</h2>
    </section>

    <section id="blog">
        <section id="posts">
            <form id="make-post" method="POST" action="{{action('PostController@store')}}">
                @csrf
                <input name="user_id" type="text" value="1" hidden>
                <input name="body" type="text" value="">
                <input type="submit" value="Post" class="edit-post-button">
            </form>
            @forelse($posts as $post)
                <div class="post">

                    <img src="https://fillmurray.com/50/50">
                    <div>
                        <p class="author" id="user_id">{{$post->getAuthor($post)}}</p>
                        <p id="post-body">{{$post->body}}</p>
                        <div id="comment-like">
                            <p id="like-counter">100</p>
                            <input id="like" type="button" value="Like">
                            <input id="comment" type="button" value="Comment">
                            <input class="edit-button" id="{{$post->id}}" type="button" value="Edit">
                        </div>
                    </div>
                    <form method="post" action="{{action('PostController@update', $post->id)}}" class="edit-form">
                        {{method_field('PATCH')}}
                        @csrf
                        <input name="user_id" type="text" value="1" hidden>
                        <input name="body" type="text" value="{{$post->body}}">
                        <input name="button" type="submit" value="Make Change">
                    </form>
                </div>
            @empty
                <p>There are no posts yet.</p>
            @endforelse
        </section>
    </section>

@endsection