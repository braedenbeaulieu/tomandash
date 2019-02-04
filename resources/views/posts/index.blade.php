@extends('master')

@section('content')

    <section id="blog">
        <section id="posts">
            @forelse($posts as $post)
                <div id="post">
                    <p id="author"><span>{{$post->getAuthor($post)}}</span> says..</p>
                    <p id="body">{{$post->body}}</p>
                </div>
            @empty
                <p>There are no posts yet.</p>
            @endforelse
        </section>
    </section>

@endsection