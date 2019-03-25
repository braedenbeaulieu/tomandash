@extends('master')

@section('title')
    Tom and Ash: Wedding Party
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Wedding Party</h2>
    </div>

    <div class="container-fluid my-1">
        <div id="solarsystem" class="carousel slide carousel-fullscreen" data-ride="carousel">

            <div class="carousel-inner">

                <div class="carousel-item text-center active">
                    <img src="{{ asset('img/weddingparty/g1.png') }}" class="img-responsive img-fluid" alt="Gary Groomsmen">
                    <h1>Gary Groomsmen</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

                <div class="carousel-item text-center">
                    <img src="{{ asset('img/weddingparty/g2.png') }}" class="img-responsive img-fluid" alt="Gerry Groomsmen">
                    <h1>Gerry Groomsmen</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

                <div class="carousel-item text-center">
                    <img src="{{ asset('img/weddingparty/g3.png') }}" class="img-responsive img-fluid" alt="Garth Groomsmen">
                    <h1>Garth Groomsmen</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

                <div class="carousel-item text-center">
                    <img src="{{ asset('img/weddingparty/g4.png') }}" class="img-responsive img-fluid" alt="Gerald Groomsmen">
                    <h1>Gerald Groomsmen</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

                <div class="carousel-item text-center">
                    <img src="{{ asset('img/weddingparty/b1.png') }}" class="img-responsive img-fluid" alt="Betty Bridesmaid">
                    <h1>Betty Bridesmaid</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

                <div class="carousel-item text-center">
                    <img src="{{ asset('img/weddingparty/b2.png') }}" class="img-responsive img-fluid" alt="Barbara Bridesmaid">
                    <h1>Barbara Bridesmaid</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

                <div class="carousel-item text-center">
                    <img src="{{ asset('img/weddingparty/b3.png') }}" class="img-responsive img-fluid" alt="Bessy Bridesmaid">
                    <h1>Bessy Bridesmaid</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

                <div class="carousel-item text-center">
                    <img src="{{ asset('img/weddingparty/b4.png') }}" class="img-responsive img-fluid" alt="Bella Bridesmaid">
                    <h1>Bella Bridesmaid</h1>
                    <p>Cake I love toffee cake topping sesame snaps pastry. Donut icing jelly cookie cake toffee powder.</p>
                </div>

            </div>

            <a class="carousel-control-prev" href="#solarsystem" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#solarsystem" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
