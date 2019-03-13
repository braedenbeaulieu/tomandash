@extends('master')

@section('content')
    <section id="subtitle">
        <h2>Guestbook</h2>
    </section>

    <section id="blog">
        <section id="posts">
            @if(Auth::check())
                @php $userInfo = Auth::user()->getFacebookId() @endphp

                @forelse($userInfo as $user)
                    <p>{{$user->provider_id}}</p>
                    <img src="http://graph.facebook.com/{{$user->provider_id}}/picture?type=square">
                @empty
                @endforelse
            @endif
            {{--check if they're logged in--}}
            @if(Auth::check())
                {{--make post--}}
                <form id="make-post" method="post" action="{{action('PostController@store')}}">
                    @csrf
                    <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                    <input name="body" type="text" placeholder="Tell us what you're thinking..">
                    <input type="submit" value="Post" class="edit-post-button">
                </form>
            @else
                {{--can't make a post--}}
                <div id="must-log-in">
                    <p>Sorry, you must <a href="{{ route('login') }}"><li>login</li></a> to post anything.</p>
                </div>
            @endif

            {{--display all posts--}}
            @forelse($posts as $post)
                <div class="post">

                    {{--structure for each post--}}
                    <img src="https://fillmurray.com/50/50">
                    <div>
                        <p class="author" id="user_id">{{$post->getAuthor($post)}}</p>
                        <p id="post-body">{{$post->body}}</p>
                        <div id="comment-like">

                            <p class="like-counter">{{$post->countLikes($post)}}</p>

                            {{--if they're logged in--}}
                            @if(Auth::check())

                                {{--create like and comment buttons--}}

                                {{--if they've already liked, they can't like again--}}
                                @if(!Auth::user()->hasLiked($post))
                                    <form class="like-button buttons" method="post" action="{{ action('PostController@like', ['id' => $post->id])}}">
                                        @csrf
                                        <input id="{{$post->id}}" type="submit" value="Like">
                                    </form>
                                @elseif(Auth::user()->hasLiked($post))
                                    <form class="like-button buttons" method="post" action="{{ action('PostController@destroyLike', ['id' => $post->id]) }}">
                                        {{ method_field('DELETE') }}
                                        @csrf
                                        <input id="{{$post->id}}" type="submit" value="Unlike">
                                    </form>
                                @endif

                                {{--comment button--}}
                                <input class="comment-button buttons" type="button" value="Comment">

                                {{--if they're admin--}}
                                @if(Auth::user()->role == 1)
                                    <input class="edit-button buttons" id="{{$post->id}}" type="button" value="Edit">

                                    {{--delete post button--}}
                                    <form class="delete-button buttons" method="post" action="{{ action('PostController@destroy', ['id' => $post->id]) }}">
                                        {{ method_field('DELETE') }}
                                        @csrf
                                        <input type="submit" value="Delete">
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

                    {{--show all comments for this post --}}
                    <div class="comments">
                        @forelse($post->getComments($post) as $comment)
                            <div class="comment">
                                <p class="comment-name">{{$comment->getUser($comment)->name}}</p>
                                <p class="comment-body">{{$comment->body}}</p>
                            </div>

                            {{--delete comment button--}}
                            @if(Auth::check() && (Auth::user()->role === 1 || Auth::user()->isMyComment($comment)))
                            <form  method="post" action="{{ action('PostController@destroyComment', ['id' => $comment->id]) }}">
                                {{ method_field('DELETE') }}
                                @csrf
                                <input class="delete-comment" id="{{$comment->id}}" type="submit" value="Delete">

                            </form>
                            @endif
                        @empty
                        @endforelse
                    </div>

                    @if(Auth::check())
                        {{--edit post form--}}
                        <form method="post" action="{{action('PostController@update', $post->id)}}" class="edit-form">
                            {{method_field('PATCH')}}
                            @csrf
                            <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                            <input name="body" type="text" value="{{$post->body}}">
                            <div class="buttons">
                                <input name="button" type="submit" value="Make Change">
                                <input name="button" type="button" value="Close" class="close-form">
                            </div>

                        </form>

                        {{--create a comment form--}}
                        <form method="post" action="{{action('PostController@storeComment', $post->id)}}" class="comment-form">
                            @csrf
                            <input name="user_id" type="text" value="{{Auth::user()->id}}" hidden>
                            <input name="post_id" type="text" value="{{$post->id}}" hidden>
                            <input name="body" type="text">
                            <div class="buttons">
                                <input name="button" type="submit" value="Comment">
                                <input name="button" type="button" value="Close" class="close-form">
                            </div>
                        </form>
                    @endif
                </div>
            @empty
                <p>There are no posts yet.</p>
            @endforelse
        </section>
    </section>

@endsection