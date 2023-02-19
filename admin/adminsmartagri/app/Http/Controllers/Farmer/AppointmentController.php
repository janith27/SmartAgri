<?php

namespace App\Http\Controllers\Farmer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Appointment;


class AppointmentController extends Controller
{
    public function CreateAppointment(Request $request){

        $farmerEmail= $request->input('farmer_email');
        $instructorEmail = $request->input('instructor_email');
        $description = $request->input('description');
        $date = $request->input('date');
        $time = $request->input('time');

        $result = Appointment::insert([
            'farmer_email' => $farmerEmail,
            'instructor_email' => $instructorEmail,
            'description' => $description,
            'date'=>$date,
            'time'=> $time
        ]);

        return $result;
    } //End method
}
