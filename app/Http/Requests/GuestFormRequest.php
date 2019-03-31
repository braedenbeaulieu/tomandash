<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class GuestFormRequest extends FormRequest
{

	public function authorize()
	{
		return true;
	}

	public function rules()
	{
		return [
			'guestname01'    => 'required|min:3|max:255',
			'guests'        => 'required',
			'guestname02'    => 'required_if:guests,==,2,3,4,5',
			'guestname03'    => 'required_if:guests,==,3,4,5',
			'guestname04'    => 'required_if:guests,==,4,5',
			'guestname05'    => 'required_if:guests,==,5',
			'passcode'      => ['required', Rule::in(['CAKE', 'Cake', 'cake']),	],
		];
	}

	public function messages()
	{
		return [
			'guestname01.required' => 'Please provide your Full Name.',
			'guests.required' => 'Please provide your total number of Guests.',
			'passcode.required'  => 'Please provide the Invitation Pass Code.',
			'guestname02.required_if'  => 'Please provide the Full Name of Guest #2.',
			'guestname03.required_if'  => 'Please provide the Full Name of Guest #3.',
			'guestname04.required_if'  => 'Please provide the Full Name of Guest #4.',
			'guestname05.required_if'  => 'Please provide the Full Name of Guest #5.',
			'passcode.Rule::in'  => 'Please provide a valid Invitation Pass Code.',
		];
	}
}
