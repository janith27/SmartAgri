<?php

namespace App\Http\Controllers\Farmer;
use Mail;
use App\Http\Controllers\Controller;
use App\Mail\Appointment as MailAppointment;
use Illuminate\Http\Request;
use App\Models\Appointment;
use DB;

class AppointmentController extends Controller
{
    public function AppointmentView(Request $request){

        $keyemail = $request->keyemail;
        $sugustins = Appointment::where('farmer_email',$keyemail)->get();
        return $sugustins;

    }
    // End Method
    public function CreateAppointment(Request $request){

        $farmerEmail= $request->input('farmer_email');
        $instructorEmail = $request->input('instructor_email');
        $description = $request->input('description');
        $date = $request->input('date');
        $time = $request->input('time');

        // $result =
         Appointment::insert([
            'farmer_email' => $farmerEmail,
            'instructor_email' => $instructorEmail,
            'description' => $description,
            'date'=>$date,
            'time'=> $time
        ]);

        // return $result;
 
             // Mail Send to User
             Mail::to($instructorEmail)->send(new MailAppointment($farmerEmail,$date,$time,$description));
 
             return response([
                
             ],200);
 
         
    } //End method


    public function DeleteAppointment(Request $request){
        $keyid = $request->keyid;
        $resultDelete=Appointment::where('id',$keyid)->delete();
        return $resultDelete;
    }//End method

    public function InstructorGetMyAppointment(Request $request){

        $keyemail = $request->keyemail;
        $sugustins = Appointment::where('instructor_email',$keyemail)->get();
        return $sugustins;

    }
    // End Method

    public function AppointmentStatusUpdate(Request $request){
        $state = "Canceled";
        $keyid = $request->keyid;
        $result = Appointment::where('id',$keyid)->update(['status'=>$state]);
        return $result;

    }
    // End Method
}
