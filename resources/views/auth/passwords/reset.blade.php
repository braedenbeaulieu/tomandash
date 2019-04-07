@extends('master')

@section('content')
<div class="container-fluid page-heading-section">
    <h2 class="headings text-center page-heading-word">{{ __('Reset Password') }}</h2>
</div>
<div class="container reset-password-container">
    <div class="row text-center">

        <div class="col-sm-6 text-center justify-content-center reset-password-form px-5">
            @if (session('status'))
                <div class="alert alert-success">
                    {{ session('status') }}
                </div>
            @endif
            <p>Reset your password here and you will be logged in and redirected&nbsp;to&nbsp;the&nbsp;homepage.</p>
            <form class="form-horizontal box text-left" method="POST" action="{{ route('password.request') }}">
                @csrf

                <input type="hidden" name="token" value="{{ $token }}">

                <div class="form-group mt-0 mb-2">
                    <label for="email" class="col-form-label text-md-right">{{ __('E-Mail') }}</label>

                    <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ $email ?? old('email') }}" required autofocus>

                    @if ($errors->has('email'))
                        <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                    @endif
                </div>






                <div class="form-group mt-0 mb-2">
                    <label for="password" class="col-form-label text-md-right">{{ __('Password') }}</label>

                    <div class="">
                        <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                        @if ($errors->has('password'))
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                        @endif
                    </div>
                </div>






                <div class="form-group mt-0 mb-2">
                    <label for="password-confirm" class="col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                    <div class="">
                        <input id="password-confirm" type="password" class="form-control{{ $errors->has('password_confirmation') ? ' is-invalid' : '' }}" name="password_confirmation" required>
                    </div>

                    @if ($errors->has('password_confirmation'))
                        <span class="invalid-feedback">
                            <strong>{{ $errors->first('password_confirmation') }}</strong>
                        </span>
                    @endif
                </div>






                <div class="form-group text-right">
                    <button type="submit" class="btn btn-primary">
                        {{ __('Reset Password') }}
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
@endsection
