@extends('master')

@section('content')
    <section id="subtitle">
        <h2>Guestbook</h2>
    </section>

    <section id="blog">
        <section id="posts">
            <form id="make-post" method="post" action="{{action('PostController@store')}}">
                @csrf
                <input name="user_id" type="text" value="1" hidden>
                <input name="body" type="text" placeholder="Tell us what you're thinking..">
                <input type="submit" value="Post" class="edit-post-button">
            </form>
            @forelse($posts as $post)
                <div class="post">

                    {{--structure for each post--}}
                    <img src="https://fillmurray.com/50/50">
                    <div>
                        <p class="author" id="user_id">{{$post->getAuthor($post)}}</p>
                        <p id="post-body">{{$post->body}}</p>
                        <div id="comment-like">
                            <p id="like-counter">100</p>
                            <input class="like-button" type="button" value="Like">
                            <input class="comment-button" type="button" value="Comment">
                            <input class="edit-button" id="{{$post->id}}" type="button" value="Edit">

                            {{--delete post button--}}
                            <form class="delete-button" method="post" action="{{ action('PostController@destroy', ['id' => $post->id]) }}">
                                {{ method_field('DELETE') }}
                                @csrf
                                <input type="submit" value="Delete">
                            </form>
                        </div>
                    </div>




                    {{--show all comments for this post --}}
                    <div class="comments">
                        @forelse($post->getComments($post) as $comment)

                            <div class="comment">
                                <p class="comment-name">{{$comment->getUser($comment)->name}}</p>
                                <p class="comment-body">{{$comment->body}}</p>
                            </div>

                            {{--delete comment button--}}
                            {{--<form  method="post" action="{{ route('/posts/comment/', ['id' => $comment->id]) }}">--}}
                                {{--{{ method_field('DELETE') }}--}}
                                {{--@csrf--}}
                                {{--<input class="delete-comment" id="{{$comment->id}}" type="submit" value="Delete">--}}

                            {{--</form>--}}

                            <div class="delete-comment-container">
                                <input class="delete-comment" id="{{$comment->id}}" type="button" value="Delete">
                            </div>


                        @empty
                        @endforelse
                    </div>





                    {{--edit post form--}}
                    <form method="post" action="{{action('PostController@update', $post->id)}}" class="edit-form">
                        {{method_field('PATCH')}}
                        @csrf
                        <input name="user_id" type="text" value="1" hidden>
                        <input name="body" type="text" value="{{$post->body}}">
                        <div class="buttons">
                            <input name="button" type="submit" value="Make Change">
                            <input name="button" type="button" value="Close" class="close-form">
                        </div>

                    </form>

                    {{--create a comment form--}}
                    <form method="post" action="{{action('PostController@storeComment', $post->id)}}" class="comment-form">
                        @csrf
                        <input name="user_id" type="text" value="1" hidden>
                        <input name="post_id" type="text" value="{{$post->id}}" hidden>
                        <input name="body" type="text">
                        <div class="buttons">
                            <input name="button" type="submit" value="Comment">
                            <input name="button" type="button" value="Close" class="close-form">
                        </div>
                    </form>
                </div>
            @empty
                <p>There are no posts yet.</p>
            @endforelse
        </section>
    </section>

@endsection