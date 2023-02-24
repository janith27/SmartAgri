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
       
        $result = [$farmerCount,$instructorCount,$supplierCount];
        return $result;
    }
    // END Method

    public function NewUserChart(Request $request){
        $userData = User::select(\DB::raw("COUNT(*) as count"))
                    ->whereYear('created_at', date('Y'))
                    ->groupBy(\DB::raw("Month(created_at)"))
                    ->pluck('count');
          
        return $userData;
    }


}
