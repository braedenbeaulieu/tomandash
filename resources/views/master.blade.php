<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/main.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Pinyon+Script|Roboto" rel="stylesheet">
    <link rel="icon" href="">
    <title>Tom + Ash</title>
</head>
<body>
<p id="whos-logged-in" hidden>{{ Auth::user()->name }}</p>
<header>
    <nav>
        <div id="left">
            <a href="">Our Story</a>
            <a href="">Gallery</a>
            <a href="">Registry</a>
        </div>

        <div id="logo">LOGO</div>

        <div id="right">
            <a href="">Guestbook</a>
            <a href="">The Wedding</a>
            <a href="">RSVP</a>
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="{{secure_asset('js/main.js')}}"></script>
</html>