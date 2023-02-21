<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Supplier;
use App\Models\Instructor;
use App\Models\Farmer;
use App\Models\User;

class GraphController extends Controller
{
    public function UserPieChart(Request $request){
        
        $farmerCount = Farmer::count();
        $supplierCount = Supplier::count();
        $instructorCount = Instructor::count();
       

        // $result = ['farmerCount'=>$farmerCount,'supplierCount'=>$supplierCount,'instructorCount'=>$instructorCount];
        $result = [$farmerCount,$instructorCount,$supplierCount];
        return $result;
    }
    // END Method
}
