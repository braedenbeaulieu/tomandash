@extends('master')

@section('title')
    Thomas and Ashley: RSVP
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Register</h2>
    </div>

    <div class="container register-container">
        <div class="row text-center">
            <div class="col-sm-6 text-center justify-content-center register-form px-5">
                <form class="form-horizontal box text-left" method="POST" action="{{ route('register') }}">
                    @csrf

                    <div class="form-group mt-0 mb-2">
                        <label class="mt-0 mb-0" for="name">Full Name</label>
                        <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>
                        @if ($errors->has('name'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                        @endif
                    </div>
                    <div class="form-group mt-0 mb-2">
                        <label for="email" class="mt-0 mb-0">{{ __('E-Mail Address') }}</label>
                        <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required>

                        @if ($errors->has('email'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif
                    </div>

                    <div class="form-group mt-0 mb-2">
                        <label for="password" class="mt-0 mb-0">{{ __('Password') }}</label>
                        <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>

                    <div class="form-group mt-0 mb-2">
                        <label for="password-confirm" class="mt-0 mb-0">{{ __('Confirm Password') }}</label>
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                    </div>

                    <div class="form-group text-right">
                        <button type="submit" class="btn btn-primary">
                            {{ __('Register') }}
                        </button>
                    </div>
                    <hr>

                    <div class="form-group facebook-button text-center mt-2">
                        <a href="{{ url('/login/facebook') }}" class="btn btn-facebook text-center">
                            <i class="fab fa-facebook-square"></i> Register
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection