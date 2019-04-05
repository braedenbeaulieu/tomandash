@extends('master')

@section('title')
    Thomas and Ashley: RSVP Thank You!
@endsection

@section('content')

{{--    <div class="container mt-5">--}}
{{--        <div class="row box">--}}

{{--            <div class="container-fluid page-heading-section">--}}
{{--                <h2 class="headings text-center page-heading-word">RSVP Sent!</h2>--}}
{{--            </div>--}}

{{--            <div class="col-sm-12 text-center">--}}
{{--                <p><strong>Thank You! Your RSVP has been sent to Thomas and Ashley!</strong></p>--}}
{{--                <div class="headings text-center page-heading-word">Press <a href="{{ url('/') }}" ><strong class="text-danger"> [HOME] </strong></a>to return Home!</div>--}}
{{--            </div>--}}

{{--        </div>--}}
{{--    </div>--}}


    <div class="container-fluid page-heading-section">
        <h2 class="headings text-center page-heading-word">Thank You!</h2>
    </div>

    <div class="container guests-container">
        <div class="row text-center">

            <div class="col-sm-6 text-center justify-content-center guests-form px-5">
                <h3><strong>Your RSVP has been sent to Thomas&nbspand&nbspAshley!</strong></h3><br><br>
                <div class="headings text-center page-heading-word"><a href="{{ url('/') }}" ><strong class="text-danger"> [HOME] </strong></a></div><br><br>
            </div>

        </div>
    </div>

@endsection
