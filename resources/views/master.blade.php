<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/main.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Pinyon+Script|Roboto" rel="stylesheet">
    <link rel="icon" href="">
    {{--<title>The Pagliarella Wedding</title>--}}
</head>
<body>
@if(Auth::check())
    <p id="whos-logged-in" class="{{Auth::user()->id}}" hidden>{{ Auth::user()->name }}</p>
    <p id="user-role" hidden>{{Auth::user()->role}}</p>
@else
    <p id="whos-logged-in" class="none" hidden>none</p>
@endif

<header>
    <nav>
        <div id="left">
            <a href="{{url('/ourstory')}}">Our Story</a>
            <a href="{{url('/thewedding')}}">The Wedding</a>
            <a href="{{url('/rsvp')}}">RSVP</a>
        </div>

        <div id="logo">LOGO</div>

        <div id="right">
            <a href="{{url('/registry')}}">Registry</a>
            <a href="{{url('/guestbook')}}">Guestbook</a>
            <a href="">Gallery</a>

            @if(Auth::check())
                <a href="{{ url('/logout') }}">Log Out</a>
            @else
                <a href="{{ route('login') }}"><li>login</li></a>
                <a href="{{ route('register') }}"><li>register</li></a>
            @endif
        </div>
    </nav>
</header>

<section id="content">
    @yield('content')
</section>

<footer>
    <p>all content &copy; 2019</p>
</footer>

</body>

<script src="{{secure_asset('js/app.js')}}"></script>
<script src="{{secure_asset('js/main.js')}}"></script>

</body>
</html>
