<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Instructor;

class InstructorDetailsController extends Controller
{
    public function InstructorDetail(Request $request){
        
        $keycity = $request->keycity;
        $sugustins = Instructor::where('city',$keycity)->get();
        return $sugustins;

        // $result = Instructor::all();

        // return $result;
    }
    // END Method
}
