@extends('master')

@section('title')
    Thomas and Ashley: Guests
@endsection

@section('content')

    <div class="container mt-5">
        <div class="row box">

            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word">RSVP Sent!</h2>
            </div>

            <div class="col-sm-12 text-center">
                <p><strong>Thank You! Your RSVP has been sent to Thomas and Ashley!</strong></p>
                <div class="headings text-center page-heading-word">Press <a href="{{ url('/') }}" ><strong class="text-danger"> [HOME] </strong></a>to return Home!</div>
            </div>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
