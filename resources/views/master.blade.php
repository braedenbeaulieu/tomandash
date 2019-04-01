+<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="author" content="CAKE Web Consulting">
    <link rel="icon" href="{{secure_asset('img/favicon.ico.jpg')}}" >
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>The Pagliarella Wedding</title>
    <title>@yield('title')</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/app.css')}}">
    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/main.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Pinyon+Script|Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet">
    <link rel="icon" href="">
</head>

<body>

@if(Auth::check())
    <p id="whos-logged-in" class="{{Auth::user()->id}}" hidden>{{ Auth::user()->name }}</p>
    <p id="user-role" hidden>{{Auth::user()->role}}</p>
@else
    <p id="whos-logged-in" class="none" hidden>none</p>
@endif

<header>

    <div class="container-fluid">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" role="navigation">
            <div class="container">

                <a class="navbar-brand" href="{{ url('/') }}">
                    <img src="{{ asset('img/logo.jpg') }}" alt="Thomas and Ashley">
                    <span class="logo">Thomas and Ashley</span>
                </a>
                <button class="navbar-toggler border-0 ml-0 p-1 mr-2" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                    &#9776;
                </button>
                <div class="collapse navbar-collapse" id="exCollapsingNavbar">
                    <ul class="nav navbar-nav">
                        <li class="nav-item"><a class="nav-link ml-2 mr-2" href="{{ url('ourstory') }}">Our Story</a></li>
                        <li class="nav-item"><a class="nav-link ml-2 mr-2" href="{{ url('thewedding') }}">The Wedding</a></li>
                        <li class="nav-item"><a class="nav-link ml-2 mr-2" href="{{ url('guests/create') }}">RSVP</a></li>
                        <li class="nav-item"><a class="nav-link ml-2 mr-2" href="{{ url('registry') }}">Registry</a></li>
                        <li class="nav-item"><a class="nav-link ml-2 mr-2" href="{{ url('guestbook') }}">Guestbook</a></li>
                        <li class="nav-item"><a class="nav-link ml-2 mr-2" href="{{ url('images') }}">Gallery</a></li>
                    </ul>
                    <ul class="nav navbar-nav flex-row justify-content-between ml-auto">
                        <li class="dropdown order-1">
                            <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="btn btn-outline-secondary dropdown-toggle">Login <span class="caret"></span></button>
                            <ul class="dropdown-menu dropdown-menu-right mt-2">
                                <li class="px-3 py-2">
                                    <form class="form" role="form">
                                        <div class="form-group">
                                            <input id="emailInput" placeholder="Email" class="form-control form-control-sm" type="text" required="">
                                        </div>
                                        <div class="form-group">
                                            <input id="passwordInput" placeholder="Password" class="form-control form-control-sm" type="text" required="">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                                        </div>
                                        <div class="form-group text-center">
                                            <small><a href="#" data-toggle="modal" data-target="#modalPassword">Forgot Password?</a></small>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

        <div id="modalPassword" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Forgot Password</h3>
                        <button type="button" class="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                        <p class="text-danger">Reset your password...</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                        <button class="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</header>

<section id="content">
    @yield('content')
</section>

{{--<div class="video-background">--}}
    {{--<div class="video-foreground">--}}
        {{--<video playsinline autoplay muted loop id="backgroundvideo">--}}
            {{--<source src="{{ asset('media/weddingtravel.mp4') }}" type="video/mp4">--}}
        {{--</video>--}}
    {{--</div>--}}
{{--</div>--}}

<footer class="container-fluid">
    @yield('footer')

    <nav class="navbar navbar-expand-md fixed-bottom border border-secondary small">
        <div class="container-fluid text-center">
            <div class="row w-100">
                <div class="foot">
                    <a href="https://www.facebook.com/ashley.lehman.16?__tn__=%2Cd-]-h-R&eid=ARBcy4WI2Fu42AkWjNSElKOXUs4bC70sy35btNFQHO2mbSTVHch0Q2alytgdPqi4jtyCx118dxI42ot_" target="_blank" ><img class="socialmedia" src="img/facebook.png" alt="Facebook" title="Facebook"></a>
                    <a href="mailto:thepagliarellawedding@gmail.com?subject=The Pagliarella Wedding" ><img class="socialmedia" src="img/email.png" alt="E-Mail" title="E-Mail"></a>
                    <a href="tel:1-519-969-4810"><img class="socialmedia" src="img/phone.png" alt="Phone" title="Phone"></a>
                </div>
                <div class="foot" id="countdown"></div>
                <div class="foot">&copy;&nbsp2019&nbspCAKE&nbspWeb&nbspConsulting</div>
            </div>
        </div>
    </nav>

</footer>

<script src="{{secure_asset('js/app.js')}}"></script>
<script src="{{secure_asset('js/flash-alert.js')}}"></script>
<script src="{{secure_asset('js/main.js')}}"></script>
<script src="{{secure_asset('js/countdown.js')}}"></script>

</body>
</html>
