<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AdminDetailsController extends Controller
{
    public function AdminAllDetails(Request $request){
        
        
        $result = User::where('role',0)->get();
        return $result;

    }
    // END Method

    public function AdminDelete(Request $request){
        
        $keyid = $request->keyid;
        $result = User::where('id',$keyid)->delete();
        return $result;

    }
    // END Method
}
