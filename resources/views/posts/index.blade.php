@extends('master')

@section('content')
    <section id="subtitle">
        <h2>Guestbook</h2>
    </section>

    <section id="blog">
        <section id="posts">

            {{--check if they're logged in--}}
            @if(Auth::check())

                {{--make post--}}
                <form id="make-post" method="post" action="{{action('PostController@store')}}">
                    @csrf
                    <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                    <textarea name="body" type="text" placeholder="Tell us what you're thinking.."></textarea>
                    <input type="submit" value="Post" class="edit-post-button">

                </form>
            @else
                {{--can't make a post--}}
                <div id="must-log-in">
                    <p>Sorry, you must <a href="{{ route('login') }}">login</a> to post anything.</p>
                </div>
            @endif

            {{--display all posts--}}
            @forelse($posts as $post)
                <div class="post">

                    {{--structure for each post--}}
                    <img src="https://fillmurray.com/50/50" class="profile-pic">
                    <div>
                        <p class="author" id="user_id">{{$post->getAuthor($post)}}</p>
                        <p class="post-body">{{$post->body}}</p>
                        <div id="comment-like">

                            <p class="like-counter">{{$post->countLikes($post)}}</p>

                            {{--if they're logged in--}}
                            @if(Auth::check())

                                {{--create like and comment buttons--}}

                                {{--if they've already liked, they can't like again--}}
                                @if(!Auth::user()->hasLiked($post))
                                    <form>
                                        <input class="like-button buttons like" id="{{$post->id}}" type="button" value="Like">
                                    </form>
                                @elseif(Auth::user()->hasLiked($post))
                                    <form class="liked">
                                        <input class="unlike-button buttons unlike" id="{{$post->id}}" type="button" value="Unlike">
                                    </form>
                                @endif

                                {{--comment button--}}
                                <input class="comment-button buttons" type="button" value="Comment">


                                {{--if they're admin--}}
                                @if(Auth::user()->role == 1)
                                    {{--edit button--}}
                                    <input class="edit-button buttons" id="{{$post->id}}" type="button" value="Edit">


                                    {{--delete post button--}}
                                    <form class="delete-button" method="post" action="{{ action('PostController@destroy', ['id' => $post->id]) }}">
                                        {{ method_field('DELETE') }}
                                        @csrf
                                        <input class="buttons" type="submit" value="Delete">
                                    </form>

                                {{--if they're logged in and if its their post--}}
                                @elseif(Auth::user()->role == 0 && Auth::user()->isMyPost($post))
                                    <input class="edit-button buttons" id="{{$post->id}}" type="button" value="Edit">

                                    {{--delete post button--}}
                                    <form class="delete-button buttons" method="post" action="{{ action('PostController@destroy', ['id' => $post->id]) }}">
                                        {{ method_field('DELETE') }}
                                        @csrf
                                        <input type="submit" value="Delete">
                                    </form>
                                @endif
                            @endif
                        </div>
                    </div>

                    @if(Auth::check())
                        {{--edit post form--}}
                        <form method="post" action="{{action('PostController@update', $post->id)}}" class="comment-edit-form edit-form">
                            {{method_field('PATCH')}}
                            @csrf
                            <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                            <textarea name="body" type="text">{{$post->body}}</textarea>
                            <div class="comment-edit-form-buttons">
                                <input name="button" type="submit" value="Edit">
                                <input name="button" type="button" value="X" class="close-form">
                            </div>

                        </form>

                        {{--create a comment form--}}
                        <form method="post" action="{{action('PostController@storeComment', $post->id)}}" class="comment-edit-form comment-form">
                            @csrf
                            <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                            <input name="post_id" type="text" value="{{$post->id}}" hidden>
                            <textarea name="body" type="text"></textarea>
                            <div class="comment-edit-form-buttons">
                                <input name="button" type="submit" value="Comment">
                                <input name="button" type="button" value="X" class="close-form">
                            </div>
                        </form>
                    @endif

                    {{--you have to click show comments to see the comments--}}
                    @if(count($post->getComments($post)) >= 1)
                        {{--span here to see how many comments are in this post for javascript purpose--}}
                        <span class="comments-count" hidden>{{count($post->getComments($post))}}</span>

                        @if(count($post->getComments($post)) > 1)
                            <p class="show-comments">show all {{count($post->getComments($post))}} comments</p>
                        @elseif(count($post->getComments($post)) == 1)
                            <p class="show-comments">show comment</p>
                        @endif

                    @endif
                    {{--show all comments for this post --}}
                    <div class="comments">
                        @forelse($post->getComments($post) as $comment)
                            <div class="comment">
                                <img src="https://fillmurray.com/50/50" class="comment-pic">
                                <div class="comment-words">
                                    <p class="comment-name">{{$comment->getUser($comment)->name}}</p>
                                    <p class="comment-body">{{$comment->body}}</p>
                                </div>
                                {{--delete comment button--}}
                                @if(Auth::check() && (Auth::user()->role === 1 || Auth::user()->isMyComment($comment)))
                                    <form class="delete-comment-container" method="post" action="{{ action('PostController@destroyComment', ['id' => $comment->id]) }}">
                                        {{ method_field('DELETE') }}
                                        @csrf
                                        <input class="delete-comment" id="{{$comment->id}}" type="submit" value="Delete">

                                    </form>
                                @endif
                            </div>


                        @empty
                        @endforelse
                    </div>


                </div>
            @empty
                <p>There are no posts yet.</p>
            @endforelse
        </section>
    </section>

@endsection