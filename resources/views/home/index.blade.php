@extends('master')

@section('title')
    Thomas and Ashley: The Pagliarella Wedding
@endsection

@section('content')

    <div class="container mt-5">
        <div class="row">

            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word"></h2>
            </div>

            <div class="col-sm-12 text-center mt-5">
                <img src="{{ asset('img/landing.jpg') }}" class="landing img-responsive img-fluid" title="Thomas and Ashley" alt="Thomas and Ashley" />
            </div>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
