<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Farmer;
use App\Models\User;

class FarmerDetailsController extends Controller
{
    public function FarmerDetail(Request $request){
        
        $keyemail = $request->keyemail;
        $sugustins = Farmer::where('email',$keyemail)->get();
        return $sugustins;

    }
    // END Method

    //for admin function
    public function adminFarmerDetail(){

        $farmers = Farmer::latest()->get();

        return view('backend.admin.farmer.farmer',compact('farmers'));

    }
    
    public function FarmerAllDetails(Request $request){
        
        
        $result = Farmer::all();
        return $result;

    }
    // END Method

    public function FarmerDelete(Request $request){
        
        $keyemail = $request->keyemail;
        $result = Farmer::where('email',$keyemail)->delete() && User::where('email',$keyemail)->delete();
        return $result;

    }
    // END Method
}
