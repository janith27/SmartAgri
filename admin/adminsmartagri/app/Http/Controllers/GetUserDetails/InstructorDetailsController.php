<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Instructor;

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
}
