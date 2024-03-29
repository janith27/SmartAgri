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

    public function FarmerUpdate(Request $request){
        $title = $request->title;
        $fname = $request->fname;
        $lname = $request->lname;
        $city = $request->city;
        $street1 = $request->street1;
        $street2 = $request->street2;
        $mobileno = $request->mobileno;
        $crop = $request->crop;

        $keyemail = $request->keyemail;
        $result = Farmer::where('email',$keyemail)->update([
                'title' => $title,
                'fname' => $fname,
                'lname' => $lname,
                'street1' => $street1,
                'street2' => $street2,
                'mobileno' => $mobileno,
                'city' => $city,
                'crop' => $crop,

                ]) && User::where('email',$keyemail)->update([
                    'name' => $fname,
                    'city' => $city,
                ]);
        return $result;

    }
    // END Method
}
