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

            {{--display all posts--}}
            @forelse($posts as $post)
                <div class="post">

                    {{--structure for each post--}}
                    <img src="https://fillmurray.com/50/50" class="profile-pic">
                    <div class="post-words">
                        <p class="author">{{$post->getAuthor($post)}}</p>
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
                                    <form>
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
                                    <form class="delete-button">
                                        <input class="buttons delete-post" id="{{$post->id}}" type="button" value="Delete">
                                    </form>

                                {{--if they're logged in and if its their post--}}
                                @elseif(Auth::user()->role == 0 && Auth::user()->isMyPost($post))
                                    <input class="edit-button buttons" id="{{$post->id}}" type="button" value="Edit">

                                    {{--delete post button--}}
                                    <form class="delete-button">
                                        <input class="buttons delete-post" id="{{$post->id}}" type="button" value="Delete">
                                    </form>
                                @endif
                            @endif
                        </div>
                    </div>

                    @if(Auth::check())
                        {{--edit post form--}}
                        <form class="comment-edit-form edit-form">
                            <input type="text" value="{{Auth::user()->id}}" hidden>
                            <textarea type="text">{{$post->body}}</textarea>
                            <div class="comment-edit-form-buttons">
                                <input type="button" value="Edit" class="edit-post" id="{{$post->id}}">
                                <input type="button" value="X" class="close-form">
                            </div>
                        </form>

                        {{--create a comment form--}}
                        <form class="comment-edit-form comment-form">
                            <input class="user-id" type="text" value="{{Auth::user()->id}}" hidden>
                            <input class="post-id" type="text" value="{{$post->id}}" hidden>
                            <textarea class="comment-body" type="text" placeholder="Write comment.."></textarea>

                            <div class="comment-edit-form-buttons">
                                <input type="button" value="Comment" class="create-comment" id="create-comment">
                                <input type="button" value="X" class="close-form">
                            </div>
                        </form>
                    @endif

                    {{--show all comments for this post --}}
                    <div class="comments">
                        @if(count($post->getComments($post)) > 0)
                            <div class="first-comments">
                                @php $posts = $post->getComments($post) @endphp
                                @for($i = 0; $i < 3; $i++)
                                    @php $comment = $posts[$i] @endphp

                                    {{-- as $comment--}}
                                    <div class="comment">
                                        <img src="https://fillmurray.com/50/50" class="comment-pic">
                                        <div class="comment-words">
                                            <p class="comment-name">{{$comment->getUser($comment)->name}}</p>
                                            <p class="comment-body">{{$comment->body}}</p>
                                        </div>
                                        {{--delete comment button--}}
                                        @if(Auth::check() && (Auth::user()->role === 1 || Auth::user()->isMyComment($comment)))
                                            <form class="delete-comment-container">
                                                <input class="delete-comment" id="{{$comment->id}}" type="button" value="Delete">
                                            </form>
                                        @endif
                                    </div>
                                @endfor
                            </div>
                            <p class="hidden-comment-count" hidden>{{count($post->getComments($post)) - 3}}</p>
                            <div class="extra-comments">
                                @for($i = 0; $i < count($post->getComments($post)) - 3; $i++)
                                    @php $comment = $posts[$i + 3] @endphp

                                    {{-- as $comment--}}

                                    <div class="comment hiding">
                                        <img src="https://fillmurray.com/50/50" class="comment-pic">
                                        <div class="comment-words">
                                            <p class="comment-name">hidden{{$comment->getUser($comment)->name}}</p>
                                            <p class="comment-body">{{$comment->body}}</p>
                                        </div>
                                        {{--delete comment button--}}
                                        @if(Auth::check() && (Auth::user()->role === 1 || Auth::user()->isMyComment($comment)))
                                            <form class="delete-comment-container">
                                                <input class="delete-comment" id="{{$comment->id}}" type="button" value="Delete">
                                            </form>
                                        @endif
                                    </div>
                                @endfor
                            </div>
                            <p class="show-comments">Show more comments</p>
                        @endif

                    </div>


                </div>
            @empty
                <p>There are no posts yet.</p>
            @endforelse
        </section>
    </section>

@endsection