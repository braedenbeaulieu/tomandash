<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;

class TAA extends Model
{
	use Notifiable;

	protected $TAA;
	protected $email;

	public function __construct() {
		$this->TAA = config('TAA.name');
		$this->email = config('TAA.email');
	}
}
