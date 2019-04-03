@extends('master')

@section('title')
    Thomas and Ashley: RSVP
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word" style="letter-spacing: .6em;">RSVP</h2>
    </div>

    <div class="container guests-container">
        <div class="row text-center">

                <div class="col-sm-6 offset-sm-3 text-center justify-content-center guests-form">
                    <h3>We sure hope you can make it!  Let us know if you plan to attend and who will be coming with you!<br><br></h3>
                    <form class="form-horizontal box text-left" id="rsvp" method="POST" action="{{ action('GuestController@index') }}">
                        {{ csrf_field() }}



                        <div class="form-group">
                            <label class="font-weight-bold" for="guestname01">Full Name</label>
                            <input type="text" class="form-control{{ $errors->has('guestname01') ? ' is-invalid' : '' }}" id="guestname01" placeholder="Full Name..." name="guestname01" value="{{old('guestname01')}}">
                            @if ($errors->has('guestname01'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname01') }}</strong></span>
                            @endif
                        </div>

                        <div class="form-group">
                            <label class="font-weight-bold" for="guests">Guests</label>
                            <div class="controls">
                                <select name="guests" id="guests" title="Total Guests (if Attending)" class="form-control" required>
                                    <option value="0" @if (old('guests') === '0') {{ 'selected' }} @endif>0 ( I am unable to Attend )</option>
                                    <option value="1" @if (old('guests') === '1') {{ 'selected' }} @endif selected>1 ( Just Me! )</option>
                                    <option value="2" @if (old('guests') === '2') {{ 'selected' }} @endif>2 ( Me +1! )</option>
                                    <option value="3" @if (old('guests') === '3') {{ 'selected' }} @endif>3 ( Me +2! )</option>
                                    <option value="4" @if (old('guests') === '4') {{ 'selected' }} @endif>4 ( Me +3! )</option>
                                    <option value="5" @if (old('guests') === '5') {{ 'selected' }} @endif>5 ( Me +4! )</option>
                                </select>
                            </div>
                            @if ($errors->has('guests'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guests') }}</strong></span>
                            @endif
                        </div>

                        <div class="form-group" id="guestname2" >
                            <label class="font-weight-bold" for="guestname02">Guest #2</label>
                            <input type="text" class="form-control{{ $errors->has('guestname02') ? ' is-invalid' : '' }}" placeholder="Guest #2 Full Name..." name="guestname02" value="{{old('guestname02')}}">
                            @if ($errors->has('guestname02'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname02') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group" id="guestname3" >
                            <label class="font-weight-bold" for="guestname03">Guest #3</label>
                            <input type="text" class="form-control{{ $errors->has('guestname03') ? ' is-invalid' : '' }}" placeholder="Guest #3 Full Name..." name="guestname03" value="{{old('guestname03')}}">
                            @if ($errors->has('guestname03'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname03') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group" id="guestname4">
                            <label class="font-weight-bold" for="guestname04">Guest #4</label>
                            <input type="text" class="form-control{{ $errors->has('guestname04') ? ' is-invalid' : '' }}" placeholder="Guest #4 Full Name..." name="guestname04" value="{{old('guestname04')}}">
                            @if ($errors->has('guestname04'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname04') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group" id="guestname5">
                            <label class="font-weight-bold" for="guestname05">Guest #5</label>
                            <input type="text" class="form-control{{ $errors->has('guestname05') ? ' is-invalid' : '' }}" placeholder="Guest #5 Full Name..." name="guestname05" value="{{old('guestname05')}}">
                            @if ($errors->has('guestname05'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('guestname05') }}</strong></span>
                            @endif
                        </div>
                        <div class="form-group">
                            <label class="font-weight-bold" for="passcode">Pass Code <i class="far fa-question-circle" data-toggle="tooltip" data-placement="top" title="Refer to the Pass Code as printed on your Invitation."></i></label>
                            <input type="text" class="form-control{{ $errors->has('passcode') ? ' is-invalid' : '' }}" id="passcode" placeholder="Invitation Pass Code..." name="passcode" value="{{old('passcode')}}">
                            @if ($errors->has('passcode'))
                                <span class="invalid-feedback"><strong>{{ $errors->first('passcode') }}</strong></span>
                            @endif
                        </div>

                        <div class="form-group text-right">
                            <button class="btn" type="submit" id="send" value="Send">Send RSVP</button>
                        </div>

                    </form>
                </div>

        </div>
    </div>

@endsection
