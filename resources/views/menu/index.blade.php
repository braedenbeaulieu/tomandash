@extends('master')

@section('title')
    Thomas and Ashley: Menu
@endsection

@section('content')
    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Dinner Menu</h2>
    </div>
    <div class="container mt-5 menu-container">
        <div class="row box">
            <div class="col-sm-12 text-center">
                <img src="{{ asset('img/menu.jpg') }}" class="image img-responsive img-fluid w-80" title="Menu" alt="Menu" />
            </div>

        </div>
    </div>


@endsection
