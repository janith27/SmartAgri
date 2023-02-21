<?php

namespace App\Http\Controllers\GetUserDetails;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Models\User;

class SupplierDetailsController extends Controller
{
    public function SupplierAllDetails(Request $request){
        
        
        $result = Supplier::all();
        return $result;

    }
    // END Method

    public function SupplierDelete(Request $request){
        
        $keyemail = $request->keyemail;
        $result = Supplier::where('email',$keyemail)->delete() && User::where('email',$keyemail)->delete();
        return $result;

    }
    // END Method
}
