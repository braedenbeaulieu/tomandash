@extends('master')

@section('title')
    Thomas and Ashley: Live Stream
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Live Stream</h2>
    </div>

    <div class="container registry-container mt-0">
        <div class="row box">

            <div class="col-sm-12 text-center">
                <img src="{{ asset('img/livestream.jpg') }}" class="image img-responsive img-fluid" title="Live Stream" alt="Live Stream" target="_blank"/>
            </div>

            <div class="col-sm-12 text-center">
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread.</p>
            </div>

        </div>
    </div>

@endsection
