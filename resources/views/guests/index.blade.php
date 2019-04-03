@extends('master')

@section('title')
    Thomas and Ashley: Guests
@endsection

@section('content')

    
    <div class="container guests-container">

            <div class="container-fluid page-heading-section">
                <h2 class="headings text-center page-heading-word">Guest List</h2>
            </div>

            <table class="table">

                <thead class="thead-dark">
                    <tr>
                        <th scope="col">RSVP #</th>
                        <th scope="col">Guests</th>
                        <th scope="col" class="text-left">Primary</th>
                        <th scope="col" class="hideguests text-left">Guest #2</th>
                        <th scope="col" class="hideguests text-left">Guest #3</th>
                        <th scope="col" class="hideguests text-left">Guest #4</th>
                        <th scope="col" class="hideguests text-left">Guest #5</th>
                    </tr>
                </thead>

                <tbody>
                    @foreach($guests as $guest)
                        <tr>
                            <th scope="row">{{$guest->id}}</th>
                            <td>{{$guest->guests}}</td>
                            <td class="text-left">{{$guest->guestname01}}</td>
                            <td class="hideguests text-left">{{$guest->guestname02}}</td>
                            <td class="hideguests text-left">{{$guest->guestname03}}</td>
                            <td class="hideguests text-left">{{$guest->guestname04}}</td>
                            <td class="hideguests text-left">{{$guest->guestname05}}</td>
                        </tr>
                    @endforeach
                </tbody>

            </table>

    </div>

@endsection
