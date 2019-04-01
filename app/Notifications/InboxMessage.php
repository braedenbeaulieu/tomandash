<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\Http\Requests\GuestFormRequest;

class InboxMessage extends Notification
{
	use Queueable;

	/**
	 * Create a new notification instance.
	 *
	 * @return void
	 */
	protected $message;
	public function __construct(GuestFormRequest $message)
	{
		$this->message = $message;
	}

	/**
	 * Get the notification's delivery channels.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function via($notifiable)
	{
		return ['mail'];
	}

	/**
	 * Get the mail representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return \Illuminate\Notifications\Messages\MailMessage
	 */
	public function toMail($notifiable)
	{
		return (new MailMessage)
			->subject( $this->message->guestname01 . ' sent you an RSVP!')
			->greeting($this->message->guestname01 . ' sent you an RSVP!')
			->salutation('Guest Names:     ' .
			             $this->message->guestname01 . ' - ' .
			             $this->message->guestname02 . ' - ' .
			             $this->message->guestname03 . ' - ' .
			             $this->message->guestname04 . ' - ' .
			             $this->message->guestname05
			)
			->line('Attendees: ' . $this->message->guests)
			->from('thepagliarellawedding@gmail.com', $this->message->guestname01);
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @param  mixed  $notifiable
	 * @return array
	 */
	public function toArray($notifiable)
	{
		return [
			//
		];
	}
}
