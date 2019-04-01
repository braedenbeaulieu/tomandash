@extends('master')

@section('title')
    Thomas and Ashley: The Wedding
@endsection

@section('content')
    <div class="container-fluid page-heading-section" style="">
        <h2 class="headings text-center page-heading-word">The Wedding</h2>
    </div>
    <div class="container">
        <div class="the-wedding">


            <div class="boxes">
                <div class="text-center a-box">
                    <a href="{{ url('sprucewoodshores') }}" >
                        <img src="{{ asset('img/sprucewoodshores.jpg') }}" class="image img-responsive img-fluid" title="Sprucewood Shores Estate Winery" alt="Sprucewood Shores Estate Winery"/>
                        <div class="small">Sprucewood Shores Estate Winery</div>
                    </a>
                    <a href="{{ url('sprucewoodshores') }}" > <h3>Sprucewood Shores</h3></a>
                </div>

                <div class="text-center a-box">
                    <div>
                        <a href="{{ url('weddingparty') }}">
                            <img src="{{ asset('img/weddingparty.jpg') }}" class="image img-responsive img-fluid" title="The Wedding Party" alt="The Wedding Party"/>
                            <div class="small">Bridesmaids and Groomsmen</div>
                        </a>
                        <a href="{{ url('weddingparty') }}"><h3>The Wedding Party</h3></a>
                    </div>
                </div>

                <div class="text-center a-box">
                    <div>
                        <a href="{{ url('livestream') }}">
                            <img src="{{ asset('img/livestream.jpg') }}" class="" title="Live Stream" alt="Live Stream"/>
                            <div class="small">Live Stream</div>
                        </a>
                        <a href="{{ url('livestream') }}"><h3>Live Stream</h3></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 center bottom-sentence">
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread. Liquorice candy canes candy canes chupa chups cake pastry sweet roll.</p>
            </div>

        </div>
    </div>

@endsection
