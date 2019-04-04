@extends('master')

@section('title')
    Thomas and Ashley: Registry
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Registry</h2>
    </div>

    <div class="container registry-container mt-0">
        <div class="row box">

            <div class="col-sm-6 text-center">
                <h3>Wedding Registry</h3>
                <a href="https://www.amazon.com/wedding/share/bettyandgary" target="_blank" >
                    <img src="{{ asset('img/registry.jpg') }}" class="image img-responsive img-fluid" title="Registry" alt="Registry" target="_blank"/>
                </a>
            </div>

            <div class="col-sm-6 text-left">
                <h3>Liquorice Sesame Snaps</h3>
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread. Liquorice candy canes candy canes chupa chups.</p>
                <p>Marshmallow sweet sweet tart sweet gingerbread muffin bear claw. Liquorice sesame snaps cupcake sesame snaps chocolate cake gingerbread sweet roll. Sweet roll dessert chocolate cake macaroon bear claw cheesecake gummi bears jelly beans. Danish caramels cupcake sweet bonbon pudding marshmallow.</p>
            </div>

        </div>
    </div>

@endsection
