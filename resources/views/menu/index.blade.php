@extends('master')

@section('title')
    Tom and Ash: Menu
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Dinner Menu</h2>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-sm-12 text-center">
                <img src="{{ asset('img/menu.jpg') }}" class="image img-responsive img-fluid w-80" title="Menu" alt="Menu" />
            </div>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
