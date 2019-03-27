@extends('master')

@section('title')
    Thomas and Ashley: Our Story
@endsection

@section('content')

    <div class="container">
        <div class="row box">

            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word">Our Story</h2>
            </div>

            <div class="col-sm-4 text-left order-2 order-1-lg text-right-lg">
                <h3>Thomas Pagliarella</h3>
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread. Liquorice candy canes candy canes chupa chups cake pastry sweet roll bear claw brownie.</p>
                <p>Marshmallow sweet sweet tart sweet gingerbread muffin bear claw. Liquorice sesame snaps cupcake sesame snaps chocolate cake gingerbread sweet roll. Sweet roll dessert chocolate cake macaroon bear claw cheesecake gummi bears jelly beans. Danish caramels cupcake sweet bonbon pudding marshmallow pastry dragée. Topping carrot cake icing sugar plum marzipan. Chocolate cheesecake cupcake.</p>
            </div>

            <div class="col-sm-4 text-center order-1 order-2-lg">
                <br>
                <img src="{{ asset('img/tomandash.jpg') }}" class="image img-responsive img-fluid" title="Thomas and Ashley" alt="Thomas and Ashley"/>
                <div class="small caption">Denver, Colorado, December 15, 2018</div>
            </div>

            <div class="col-sm-4 text-left order-3 order-3-lg">
                <h3>Ashley Lehman</h3>
                <p>Caramels sweet carrot cake dessert sesame snaps. Wafer brownie marshmallow soufflé cookie sweet cake. Croissant halvah chocolate cheesecake sugar plum pudding. Jelly-o biscuit topping carrot cake. Chocolate biscuit chocolate bar caramels gingerbread. Liquorice candy canes candy canes chupa chups cake pastry sweet roll bear claw brownie.</p>
                <p>Marshmallow sweet sweet tart sweet gingerbread muffin bear claw. Liquorice sesame snaps cupcake sesame snaps chocolate cake gingerbread sweet roll. Sweet roll dessert chocolate cake macaroon bear claw cheesecake gummi bears jelly beans. Danish caramels cupcake sweet bonbon pudding marshmallow pastry dragée. Topping carrot cake icing sugar plum marzipan. Chocolate cheesecake cupcake.</p>
            </div>

        </div>
    </div>

    <link rel="stylesheet" type="text/css" href="{{secure_asset('css/bob.css')}}">

@endsection
