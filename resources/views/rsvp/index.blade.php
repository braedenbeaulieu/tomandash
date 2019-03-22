@extends('master')

@section('content')

    <div class="container">
        <h1 class="mb-2 text-center">RSVP</h1>

        <div class="col-12 col-md-6">
            <form class="form-horizontal" method="POST" action="{{url('/rsvp')}}">
                {{ csrf_field() }}

                <div class="form-group">
                    <label for="name">Your Name: </label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name" name="name" required>
                </div>

                <div class="form-group form-group-lg">
                    <label for="attending">Are You Attending?: </label>
                    <div class="controls">
                        <select name="attending" id="attending" title="Attending" class="form-control" required>
                            <option value="Yes">I plan to Attend!</option>
                            <option value="No">I am unable to Attend.</option>
                        </select>
                    </div>
                </div>

                <div class="form-group form-group-lg">
                    <label for="guests">Total Guests: </label>
                    <div class="controls">
                        <select name="guests" id="guests" title="Total Guests (if Attending)" class="form-control" required>
                            <option value="0">0 (I am unable to Attend)</option>
                            <option value="1" selected>1 (Just Me!)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5+">5+</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="message">Guest Names: </label>
                    <textarea type="text" class="form-control luna-message" id="message" placeholder="Type your messages here" name="message"></textarea>
                </div>

                <div class="form-group">
                    <label for="email">Your Email: </label>
                    <input type="text" class="form-control" id="email" placeholder="jane.smith@gmail.com" name="email" required>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary" value="Send">Send RSVP</button>
                </div>
            </form>

            @if(session('message'))
                <div class='alert alert-success'>
                    {{ session('message') }}
                </div>
            @endif

        </div>
    </div>

@endsection
