@extends('master')

@section('title')
    Tom and Ash: RSVP
@endsection

@section('content')
    
    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">
    <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="{{secure_asset('js/rsvp.js')}}"></script>

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">RSVP</h2>
    </div>

    <div class="container">
        <div class="row">

            @if(session('message'))

                <div class="col-sm-3"></div>
                <div class='col-sm-6 text-center strong alert alert-success'>
                    {{ session('message') }}
                </div>
                <div class="col-sm-3"></div>

            @else

                <div class="col-sm-3"></div>

                <div class="col-sm-6 text-left">
                    <form class="form-horizontal" id="rsvp" method="POST" action="{{ action('RSVPController@show') }}">
                        {{ csrf_field() }}

                        <div class="form-group">
                            <label class="font-weight-bold" for="guestname1">Your Full Name</label>
                            <input type="text" class="form-control{{ $errors->has('guestname1') ? ' is-invalid' : '' }}" id="guestname1" placeholder="Your full name as printed on your Invitation..." name="guestname1" value="{{old('guestname1')}}">
                            @if ($errors->has('guestname1'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname1') }}</strong></span>
                            @endif
                        </div>

                        <div class="form-group">
                            <label class="font-weight-bold" for="guests">Total Guests including You </label>
                            <div class="controls">
                                <select name="guests" id="guests" title="Total Guests (if Attending)" class="form-control" required>
                                    <option value="0" @if (old('guests') === '0') {{ 'selected' }} @endif>0 (I am unable to Attend)</option>
                                    <option value="1" @if (old('guests') === '1') {{ 'selected' }} @endif>1 (Just Me!)</option>
                                    <option value="2" @if (old('guests') === '2') {{ 'selected' }} @endif>2 (I am bringing someone with me!)</option>
                                    <option value="3" @if (old('guests') === '3') {{ 'selected' }} @endif>3</option>
                                    <option value="4" @if (old('guests') === '4') {{ 'selected' }} @endif>4</option>
                                    <option value="5" @if (old('guests') === '5') {{ 'selected' }} @endif>5</option>
                                </select>
                            </div>
                            @if ($errors->has('guests'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guests') }}</strong></span>
                            @endif
                        </div>

                        <div class="form-group hidden" id="guestname2" >
                            <label class="font-weight-bold" for="guestname1">Second Guest Name</label>
                            <input type="text" class="form-control{{ $errors->has('guestname2') ? ' is-invalid' : '' }}" placeholder="Second Guest Name..." name="guestname2" value="{{old('guestname2')}}">
                            @if ($errors->has('guestname2'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname2') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group hidden" id="guestname3" >
                            <label class="font-weight-bold" for="guestname3">Third Guest Name</label>
                            <input type="text" class="form-control{{ $errors->has('guestname3') ? ' is-invalid' : '' }}" placeholder="Third Guest Name..." name="guestname3" value="{{old('guestname3')}}">
                            @if ($errors->has('guestname3'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname3') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group hidden" id="guestname4">
                            <label class="font-weight-bold" for="guestname3">Fourth Guest Name</label>
                            <input type="text" class="form-control{{ $errors->has('guestname4') ? ' is-invalid' : '' }}" placeholder="Fourth Guest Name..." name="guestname4" value="{{old('guestname4')}}">
                            @if ($errors->has('guestname4'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname4') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group hidden" id="guestname5">
                            <label class="font-weight-bold" for="guestname5">Fifth Guest Name</label>
                            <input type="text" class="form-control{{ $errors->has('guestname5') ? ' is-invalid' : '' }}" placeholder="Fifth Guest Name..." name="guestname5" value="{{old('guestname5')}}">
                            @if ($errors->has('guestname5'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname5') }}</strong></span>
                            @endif
                        </div>

                        <div class="form-group">
                            <label class="font-weight-bold" for="passcode">Pass Code</label>
                            <input type="text" class="form-control{{ $errors->has('passcode') ? ' is-invalid' : '' }}" id="passcode" placeholder="Pass Code as printed on your Invitation..." name="passcode" value="{{old('passcode')}}">
                            @if ($errors->has('passcode'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('passcode') }}</strong></span>
                            @endif
                        </div>

                        <div class="form-group text-right">
                            <button type="submit" id="send" value="Send">Send RSVP</button>
                        </div>

                    </form>
                </div>

                <div class="col-sm-3"></div>

            @endif

            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

        </div>
    </div>

@endsection
