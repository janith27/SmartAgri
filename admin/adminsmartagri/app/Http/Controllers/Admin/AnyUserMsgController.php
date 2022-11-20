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
}
