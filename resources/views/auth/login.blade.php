@extends('master')

@section('content')

    <div id="container">
        <div id="facebook-login-container">
            <p>FACEBOOK</p>
        </p>
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