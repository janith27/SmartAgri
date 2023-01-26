<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Farmer;

class FarmerDetailsController extends Controller
{
    public function FarmerDetail(Request $request){
        
        $keyemail = $request->keyemail;
        $sugustins = Farmer::where('email',$keyemail)->get();
        return $sugustins;

    }
    // END Method
}
