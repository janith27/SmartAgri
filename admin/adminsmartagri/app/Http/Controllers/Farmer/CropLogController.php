<?php

namespace App\Http\Controllers\Farmer;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CropHistory;

class CropLogController extends Controller
{
    public function FarmerCropLog(Request $request){

        $keyemail = $request->keyemail;
        $sugustins = CropHistory::where('email',$keyemail)->get();
        return $sugustins;

    }
    // End Method

    public function CropLogInput(Request $request){
        
        $email = $request->input('email');
        $crop = $request->input('crop');
        $description = $request->input('description');
        date_default_timezone_set("Asia/Colombo");
        $date = date("d-m-Y");

        $result = CropHistory::insert([
            'email' => $email,
            'crop' => $crop,
            'description'=> $description,
            'date'=>$date
        ]);

        return $result;
    }
    //End Method
}
