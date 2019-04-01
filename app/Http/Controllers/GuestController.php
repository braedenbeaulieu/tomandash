<?php

namespace App\Http\Controllers;

use App\Http\Requests\GuestFormRequest;
//use Illuminate\Http\Request;
use App\Notifications\InboxMessage;
use App\Guest;
use App\TAA;

class GuestController extends Controller
{

	public function index()
	{
		$guests = Guest::all();
		return view('guests.index',compact('guests',$guests));
	}

	public function create()
	{
		return view('guests.create');
	}

	public function store(GuestFormRequest $request, TAA $TAA)
	{
		Guest::create($request->all());
		$TAA->notify(new InboxMessage($request));
		return redirect('/guests/thankyou');
	}

}
