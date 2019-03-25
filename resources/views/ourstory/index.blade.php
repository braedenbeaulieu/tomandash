@extends('master')

@section('title')
    Tom and Ash: Our Story
@endsection

@section('content')

    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Our Story</h2>
    </div>

    <div class="container">
        <div class="row">

            <div class="col-sm-4 text-right">
                <h3>Thomas Pagliarella</h3>
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread. Liquorice candy canes candy canes chupa chups cake pastry sweet roll bear claw brownie.</p>
                <p>Marshmallow sweet sweet tart sweet gingerbread muffin bear claw. Liquorice sesame snaps cupcake sesame snaps chocolate cake gingerbread sweet roll. Sweet roll dessert chocolate cake macaroon bear claw cheesecake gummi bears jelly beans. Danish caramels cupcake sweet bonbon pudding marshmallow pastry dragée. Topping carrot cake icing sugar plum marzipan. Chocolate cheesecake cupcake.</p>
            </div>

            <div class="col-sm-4 text-center mt-5">
                <img src="{{ asset('img/tomandash.jpg') }}" class="image img-responsive img-fluid" title="Tom and Ash" alt="Tom and Ash"/>
                <p class="caption">Denver, Colorado, December 20, 2018</p>
            </div>

            <div class="col-sm-4 text-left">
                <h3>Ashley Lehman</h3>
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread. Liquorice candy canes candy canes chupa chups cake pastry sweet roll bear claw brownie.</p>
                <p>Marshmallow sweet sweet tart sweet gingerbread muffin bear claw. Liquorice sesame snaps cupcake sesame snaps chocolate cake gingerbread sweet roll. Sweet roll dessert chocolate cake macaroon bear claw cheesecake gummi bears jelly beans. Danish caramels cupcake sweet bonbon pudding marshmallow pastry dragée. Topping carrot cake icing sugar plum marzipan. Chocolate cheesecake cupcake.</p>
            </div>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
