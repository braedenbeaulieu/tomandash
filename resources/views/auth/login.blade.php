@extends('master')

@section('content')

    <div id="container">
        <div id="facebook-login-container">

            <div class="form-group">
                <div class="col-md-12">
                    <a href="{{ url('/login/facebook') }}" class="btn btn-facebook" class="btn btn-facebook">
                        <i class="fa fa-facebook"></i> Facebook
                    </a>
                </div>
            </div>
        </div>
        <div id="email-login-container">
            <form method="post" action="{{route('login')}}">

                @csrf
                <input name="email" type="text">
                <input name="password" type="password">
                <input name="submit" type="submit">

            </form>
        </div>
    </div>

@endsection