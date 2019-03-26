@extends('master')

@section('title')
    Tom and Ash: Live Stream
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Live Stream</h2>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-sm-12 text-center">
                <img src="{{ asset('img/livestream.jpg') }}" class="image img-responsive img-fluid" title="Registry" alt="Registry" target="_blank"/>
                <p class="caption"></p>
            </div>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
