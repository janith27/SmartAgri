<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Appointment extends Mailable
{
    use Queueable, SerializesModels;
    public $farmerEmail;
    public $date;
    public $time;
    public $description;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($farmerEmail,$date,$time,$description)
    {
        $this->fname = $farmerEmail;
        $this->date = $date;
        $this->time = $time;
        $this->description = $description;

    }

    // /**
    //  * Get the message envelope.
    //  *
    //  * @return \Illuminate\Mail\Mailables\Envelope
    //  */
    // public function envelope()
    // {
    //     return new Envelope(
    //         subject: 'Appointment Shedule',
    //     );
    // }

    // /**
    //  * Get the message content definition.
    //  *
    //  * @return \Illuminate\Mail\Mailables\Content
    //  */
    // public function content()
    // {
    //     return new Content(
    //         view: 'view.name',
    //     );
    // }

    // /**
    //  * Get the attachments for the message.
    //  *
    //  * @return array
    //  */
    // public function attachments()
    // {
    //     return [];
    // }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $fname = $this->fname;
        $date=$this->date;
        $time=$this->time;
        $description=$this->description;
        return $this->from('smartagricsp@gmail.com')->view('mail.appointment',compact('fname','date','time','description'))->subject('Appointment Shedule');
    }
}
