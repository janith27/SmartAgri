<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Instructor;

class InstructorDetailsController extends Controller
{
    public function InstructorDetail(Request $request){
        
        $city = $request->city;
        $sugustins = Instructor::where('city',$city)->get();
        return $sugustins;

        // $result = Instructor::all();

        // return $result;
    }
    // END Method
}
