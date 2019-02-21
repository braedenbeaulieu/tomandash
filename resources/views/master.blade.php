<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/main.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="icon" href="">
    <title>Tom + Ash</title>
</head>
<body>
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
        </div>
    </nav>
</header>

<section id="content">
    @yield('content')
</section>

<footer>
    <p>all content &copy; 2018</p>
</footer>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="{{secure_asset('js/main.js')}}"></script>
</html>