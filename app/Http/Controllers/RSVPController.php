<?php

namespace App\Http\Controllers;

use App\Notifications\InboxMessage;
use App\Http\Controllers\Controller;
use App\Http\Requests\RSVPFormRequest;
use App\TAA;


class RSVPController extends Controller
{
    public function show()
    {
        return view('rsvp.index');
    }

    public function mailToTAA(RSVPFormRequest $message, TAA $TAA)
    {
        $TAA->notify(new InboxMessage($message));
        return redirect()->back()->with('message', 'Thank You! Your RSVP has been sent to Tom and Ash!');
    }
}
