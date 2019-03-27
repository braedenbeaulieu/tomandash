@extends('master')

@section('title')
    Thomas and Ashley: Live Stream
@endsection

@section('content')

    <div class="container mt-5">
        <div class="row box">

            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word">Live Stream</h2>
            </div>

            <div class="col-sm-12 text-center">
                <img src="{{ asset('img/livestream.jpg') }}" class="image img-responsive img-fluid" title="Registry" alt="Registry" target="_blank"/>
                <p class="caption"></p>
            </div>

            <div class="col-sm-12 center">
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread. Liquorice candy canes candy canes chupa chups cake pastry sweet roll.</p>
            </div>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
