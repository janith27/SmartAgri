<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AnyUserMsg;

class AnyUserMsgController extends Controller
{
    public function PostAnyUserMsgDetails(Request $request){

            $name = $request->input('name');
            $email = $request->input('email');
            $message = $request->input('message');

            date_default_timezone_set("Asia/Colombo");
            $anyusermsg_time = date("h:i:sa");
            $anyusermsg_date = date("d-m-Y");

            $result = AnyUserMsg::insert([

                'name' => $name,
                'email' => $email,
                'message' => $message,
                'msg_date' => $anyusermsg_date,
                'msg_time' => $anyusermsg_time,

            ]);

            return $result;

    } //method

    public function MessageDetails(Request $request){
        
        
        $result = AnyUserMsg::all();
        return $result;

    }
    // END Method

    public function MessageDelete(Request $request){
        
        $keyid = $request->keyid;
        $result = AnyUserMsg::where('id',$keyid)->delete();
        return $result;

    }
    // END Method
}
