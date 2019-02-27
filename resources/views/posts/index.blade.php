@extends('master')

@section('content')
    <section id="subtitle">
        <h2>Guestbook</h2>
    </section>

    <section id="blog">
        <section id="posts">
            <form id="makePost" method="POST" action="{{action('PostController@store')}}">
                @csrf
                <input name="user_id" type="text" value="1">
                <input name="body" type="text" placeholder="Tell us what you're thinking...">
                <input type="submit" value="Post" class="post-button">
            </form>
            @forelse($posts as $post)
                <div id="post">
                    <img src="https://fillmurray.com/50/50">
                    <div>
                        <p id="author"><span>{{$post->getAuthor($post)}}</span></p>
                        <p id="postBody">{{$post->body}}</p>
                        <div id="commentLike">
                            <p id="likeCounter">100</p>
                            <input id="like" type="button" value="Like">
                            <input id="comment" type="button" value="Comment">
                        </div>
                    </div>
                </div>
            @empty
                <p>There are no posts yet.</p>
            @endforelse
        </section>
    </section>

@endsection