<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Instructor;
use App\Models\User;

class InstructorDetailsController extends Controller
{
    public function InstructorDetail(Request $request){
        
        $keycity = $request->keycity;
        $sugustions = Instructor::where('city',$keycity)->get();
        return $sugustions;

    }
    // END Method



    public function InstructorDetailEmail(Request $request){
        
        $keyemail = $request->keyemail;
        $relatedInstructor = Instructor::where('email',$keyemail)->get();
        return $relatedInstructor;

    }
    // END Method

    public function InstructorAllDetails(Request $request){
        
        
        $result = Instructor::all();
        return $result;

    }
    // END Method

    public function InstructorDelete(Request $request){
        
        $keyemail = $request->keyemail;
        $result = Instructor::where('email',$keyemail)->delete() && User::where('email',$keyemail)->delete();
        return $result;

    }
    // END Method
}
