@extends('master')

@section('title')
    Tom and Ash: The Wedding
@endsection

@section('content')

    <div class="container-fluid page-heading-section" style="">
        <h2 class="headings text-center page-heading-word">The Wedding</h2>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-sm-4 text-center">

                <h3>Sprucewood Shores</h3>
                <a href="{{ url('sprucewoodshores') }}" >
                    <img src="{{ asset('img/sprucewoodshores.jpg') }}" class="image img-responsive img-fluid" title="Sprucewood Shores Estate Winery" alt="Sprucewood Shores Estate Winery"/>
                </a>
                <p class="small">Sprucewood Shores Estate Winery</p>

            </div>



            <div class="col-sm-4 text-center">

                <div>
                    <h3>Wedding Party</h3>
                    <a href="{{ url('weddingparty') }}">
                        <img src="{{ asset('img/weddingparty.jpg') }}" class="image img-responsive img-fluid" title="Wedding Party" alt="Wedding Party"/>
                    </a>
                    <p class="small">Bridesmaids and Groomsmen</p>
                </div>

            </div>



            <div class="col-sm-4 text-center">

                <div>
                    <h3>Live Stream</h3>
                    <a href="{{ url('livestream') }}">
                        <img src="{{ asset('img/livestream.jpg') }}" class="image img-responsive img-fluid" title="Live Stream" alt="Live Stream"/>
                    </a>
                    <p class="small">Live Stream</p>
                </div>

            </div>


        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
