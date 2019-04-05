@extends('master')

@section('title')
    Thomas and Ashley: Wedding Party
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Wedding Party</h2>
    </div>
    
    <div class="container-fluid">
        <div id="weddingparty" class="carousel slide carousel-fullscreen align-content-center wedding-party"
             data-ride="carousel" data-interval="2000">

            <div class="container box m-auto w-60">

                <div class="carousel-inner w-100">

                    <div class="carousel-item text-center active">
                        <h1 class="small">Gary Groomsmen</h1>
                        <img src="{{ asset('img/weddingparty/g1.png') }}" class="img-responsive img-fluid w-50" alt="Gary Groomsmen">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.<br></p>
                    </div>

                    <div class="carousel-item text-center">
                        <h1>Betty Bridesmaid</h1>
                        <img src="{{ asset('img/weddingparty/b1.png') }}" class="img-responsive img-fluid w-50" alt="Betty  Bridesmaid">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.</p>
                    </div>

                    <div class="carousel-item text-center">
                        <h1>Gerry Groomsmen</h1>
                        <img src="{{ asset('img/weddingparty/g2.png') }}" class="img-responsive img-fluid w-50" alt="Gerry Groomsmen">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.</p>
                    </div>

                    <div class="carousel-item text-center">
                        <h1>Beulah Bridesmaid</h1>
                        <img src="{{ asset('img/weddingparty/b2.png') }}" class="img-responsive img-fluid w-50" alt="Barbara  Bridesmaid">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.</p>
                    </div>

                    <div class="carousel-item text-center">
                        <h1>Garth Groomsmen</h1>
                        <img src="{{ asset('img/weddingparty/g3.png') }}" class="img-responsive img-fluid w-50" alt="Garth Groomsmen">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.</p>
                    </div>

                    <div class="carousel-item text-center">
                        <h1>Bessy Bridesmaid</h1>
                        <img src="{{ asset('img/weddingparty/b3.png') }}" class="img-responsive img-fluid w-50" alt="Bessy  Bridesmaid">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.</p>
                    </div>

                    <div class="carousel-item text-center">
                        <h1>Gerald Groomsmen</h1>
                        <img src="{{ asset('img/weddingparty/g4.png') }}" class="img-responsive img-fluid w-50" alt="Gerald Groomsmen">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.</p>
                    </div>

                    <div class="carousel-item text-center">
                        <h1>Bella Bridesmaid</h1>
                        <img src="{{ asset('img/weddingparty/b4.png') }}" class="img-responsive img-fluid w-50" alt="Bella  Bridesmaid">
                        <p class="mt-1 mb-4">Cake I love toffee cake topping sesame snaps pastry donuts.</p>
                    </div>

                        <ol class="carousel-indicators">
                            <li data-target="#weddingparty" data-slide-to="0" class="active"></li>
                            <li data-target="#weddingparty" data-slide-to="1"></li>
                            <li data-target="#weddingparty" data-slide-to="2"></li>
                            <li data-target="#weddingparty" data-slide-to="3"></li>
                            <li data-target="#weddingparty" data-slide-to="4"></li>
                            <li data-target="#weddingparty" data-slide-to="5"></li>
                            <li data-target="#weddingparty" data-slide-to="6"></li>
                            <li data-target="#weddingparty" data-slide-to="7"></li>
                        </ol>

                </div>

            </div>

        </div>
    </div>

@endsection
