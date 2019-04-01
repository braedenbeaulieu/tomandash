<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\RSVPFormRequest;
use App\TAA;

class RSVPController extends Controller
{
    public function show() {
        return view('rsvp.index');
    }

    public function mailToTaa(RSVPFormRequest $message, TAA $TAA) {
        $TAA->notify(new InboxMessage($message));
        return redirect()->back()->with('message', 'Thank You! Your RSVP has Been sent to Thomas and Ashley!');
    }
}
