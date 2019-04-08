<!DOCTYPE html>

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
    <link href="https://fonts.googleapis.com/css?family=Pinyon+Script|Roboto|Raleway|Dancing+Script" rel="stylesheet">
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

        <nav class="navbar navbar-expand-xl fixed-top" role="navigation">
            <div class="container">

                <a class="navbar-brand" href="{{ url('/') }}">
                    <span class="logo">Thomas and Ashley</span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon">&#9776;</span>
                </button>
                <div class="collapse navbar-collapse" id="exCollapsingNavbar">
                    <ul class="nav navbar-nav header-links">
                        <li class="nav-item OurStory"><a class="nav-link ml-2 mr-2" href="{{ url('ourstory') }}">Our Story</a></li>
                        <li class="nav-item TheWedding"><a class="nav-link ml-2 mr-2" href="{{ url('thewedding') }}">The Wedding</a></li>
                        <li class="nav-item Registry"><a class="nav-link ml-2 mr-2" href="{{ url('registry') }}">Registry</a></li>
                        <li class="nav-item RSVP"><a class="nav-link ml-2 mr-2" href="{{ url('guests/create') }}">RSVP</a></li>
                        <li class="nav-item Guestbook"><a class="nav-link ml-2 mr-2" href="{{ url('guestbook') }}">Guestbook</a></li>
                        <li class="nav-item Gallery"><a class="nav-link ml-2 mr-2" href="{{ url('gallery') }}">Gallery</a></li>
                    </ul>
                    @if(!Auth::check())
                    <ul class="nav navbar-nav flex-row justify-content-center ml-auto login-dropdown">
                        <li class="dropdown order-1">
                            <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="dropdown-toggle btn login-button">Login <span class="caret"></span></button>
                            <ul class="dropdown-menu dropdown-menu-right mt-2">
                                <li class="px-3 pt-2 pb-0">

                                    <form class="form" role="form" method="post" action="{{route('login')}}">
                                        @csrf
                                        <div class="form-group facebook-button mt-2">
                                            <a href="{{ url('/login/facebook') }}" class="btn btn-facebook text-center"><i class="fab fa-facebook-square"></i> <strong>Login</strong></a>
                                        </div>
                                        <p class="pb-3 text-center">or</p>
                                        <div class="form-group">
                                            <input id="emailInput" name="email" placeholder="Email" class="form-control form-control-sm" type="text" required="">
                                        </div>
                                        <div class="form-group">
                                            <input id="passwordInput" name="password" placeholder="Password" class="form-control form-control-sm" type="password" required="">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block">Email Login</button>
                                        </div>


                                        <div class="form-group text-center mb-2">
                                            <small><a href="" data-toggle="modal" data-target="#modalPassword">Forgot Password?</a></small>
                                        </div>
                                        <div class="form-group text-center mb-2">
                                            <small><a href="{{route('register')}}">Register</a></small>
                                        </div>
                                    </form>

                                </li>
                            </ul>
                        </li>
                    </ul>
                    @else
                        <ul class="nav navbar-nav flex-row justify-content-center ml-auto login-dropdown">
                            <li class="dropdown order-1">
                                <button type="button" id="dropdownMenu1" data-toggle="dropdown" class="dropdown-toggle btn login-button"><strong>{{Auth::user()->getFirstName(Auth::user())}}</strong><span class="caret"></span></button>
                                <ul class="dropdown-menu dropdown-menu-right mt-2">
                                    <li class="px-3 py-2">

                                        @if(Auth::check())
                                            @if(Auth::user()->role === 1)
                                                <form class="form">
                                                    <div class="form-group pt-3">
                                                        <a class="btn btn-primary btn-block" style="color: white;" href="{{url('admin')}}">Admin Panel</a>
                                                    </div>
                                                </form>
                                            @endif
                                        @endif


                                        <form class="form" role="form" method="post" action="{{route('logout')}}">
                                            @csrf
                                            <div class="form-group pt-3">
                                                <button type="submit" class="btn btn-primary btn-block">Logout</button>
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    @endif
                </div>
            </div>
        </nav>
    </div>

</header>

<div id="modalPassword" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Forgot Password</h3>
                <button type="button" class="close font-weight-light" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <div class="form-group row pt-3">
                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail') }}</label>

                    <div class="col-md-6">
                        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                    <button type="submit" class="btn btn-primary">
                        {{ __('Send Password Reset Link') }}
                    </button>
                </div>
            </form>

        </div>
    </div>
</div>

<section id="content">
    @yield('content')
</section>

<footer>
    <p><a href="https://pixabay.com/" >PIXABAY!</a> Media (CC0 1.0)</p>
    <p id="countdown"></p>
    <p>&copy;&nbsp2019&nbspCAKE&nbspWeb&nbspConsulting</p>

</footer>

<script type="text/javascript" src="{{ secure_asset('js/app.js') }}"></script>
<script type="text/javascript" src="{{ secure_asset('js/main.js') }}"></script>
<script type="text/javascript" src="{{ secure_asset('js/countdown.js') }}"></script>
<script type="text/javascript" src="{{ secure_asset('js/masonry.js') }}"></script>
<script type="text/javascript" src="{{ secure_asset('js/imagesLoaded.js') }}"></script>
<script type="text/javascript" src="{{ secure_asset('js/lightbox.js') }}"></script>
<script type="text/javascript" src="{{ secure_asset('js/gallery.js') }}"></script>
<script type="text/javascript" src="{{ secure_asset('js/rsvp.js') }}"></script>

</body>
</html>
