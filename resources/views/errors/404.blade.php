@extends('master')

@section('title')
    Thomas and Ashley: Oops!
@endsection

@section('content')

    <div class="container mt-5">
        <div class="row box">

            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word">Oops!</h2>
                <div class="headings text-center page-heading-word">Our apologies for sending you to our Lost and Found... press <a href="{{ url('/') }}" ><strong class="text-danger"> [HOME] </strong></a>for a quick safe trip back Home!</div>
            <br>
            </div>

            <div class="col-sm-12 text-center">
                <img src="{{ asset('img/lostandfound.jpg') }}" class="image img-responsive img-fluid" title="Lost and Found" alt="Lost and Found" target="_blank"/>
                <p class="caption"></p>
            </div>

        </div>
    </div>


@endsection
