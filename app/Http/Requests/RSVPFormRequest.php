<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RSVPFormRequest extends FormRequest
{

	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'guestname1'    => 'required|min:3|max:255',
			'guests'        => 'required',
			'guestname2'    => 'required_if:guests,>==, 2',
			'guestname3'    => 'required_if:guests,>==, 3',
			'guestname4'    => 'required_if:guests,>==, 4',
			'guestname5'    => 'required_if:guests,>==, 5',
			'passcode'      => ['required', Rule::in(['CAKE', 'Cake', 'cake']),	],
		];
	}

	public function messages()
	{
		return [
			'guestname1.required' => 'Please provide the Guest name as printed on your Invitation.',
			'guests.required' => 'Please provide the total number of Guests attending.',
			'passcode.required'  => 'Please provide the Pass Code as printed on your Invitation.',
			'guestname2.required_if'  => 'Please provide the full name of your second Guest.',
			'guestname3.required_if'  => 'Please provide the full name of your third Guest.',
			'guestname4.required_if'  => 'Please provide the full name of your fourth Guest.',
			'guestname5.required_if'  => 'Please provide the full name of your fifth Guest.',
			'passcode'  => 'Invalid Pass Code. Please provide the Pass Code as printed on your Invitation.',
		];
	}
}
